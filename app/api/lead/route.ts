import { NextRequest, NextResponse } from "next/server";
import twilio from "twilio";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

interface LeadPayload {
  purpose?: string;
  propertyType?: string;
  priceRange?: string;
  downPayment?: string;
  monthlyPayment?: string;
  creditScore?: string;
  firstTimeBuyer?: string;
  militaryStatus?: string;
  state?: string;
  timeline?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  consent?: boolean;
}

const PURPOSE_LABELS: Record<string, string> = {
  buy: "Buy a home",
  build: "Build a home",
  refinance: "Refinance",
  cashout: "Cash-out refinance",
  invest: "Investment property",
};

const PROPERTY_LABELS: Record<string, string> = {
  single: "Single-family home",
  condo: "Condo",
  townhouse: "Townhouse",
  multi: "Multi-family (2–4 unit)",
  manufactured: "Manufactured / mobile",
};

const CREDIT_LABELS: Record<string, string> = {
  excellent: "Excellent (740+)",
  good: "Good (700–739)",
  fair: "Fair (640–699)",
  below: "Below 640",
  unsure: "Not sure",
};

const TIMELINE_LABELS: Record<string, string> = {
  asap: "ASAP",
  "3mo": "Within 3 months",
  "6mo": "3–6 months",
  "1yr": "6–12 months",
  research: "Just researching",
};

const MILITARY_LABELS: Record<string, string> = {
  active: "Active duty",
  veteran: "Veteran",
  none: "Civilian",
};

function label(map: Record<string, string>, key: string | undefined) {
  if (!key) return "—";
  return map[key] ?? key;
}

function formatSms(lead: LeadPayload): string {
  const name = `${lead.firstName ?? ""} ${lead.lastName ?? ""}`.trim() || "Unknown";
  return [
    `🏡 New lead — ${name}`,
    `Phone: ${lead.phone ?? "—"}`,
    `Email: ${lead.email ?? "—"}`,
    `State: ${lead.state ?? "—"}`,
    "",
    `Goal: ${label(PURPOSE_LABELS, lead.purpose)}`,
    `Property: ${label(PROPERTY_LABELS, lead.propertyType)}`,
    `Target price: ${lead.priceRange || "—"}`,
    `Down payment: ${lead.downPayment || "—"}`,
    `Goal monthly: ${lead.monthlyPayment || "—"}`,
    `Credit: ${label(CREDIT_LABELS, lead.creditScore)}`,
    `First-time buyer: ${lead.firstTimeBuyer === "yes" ? "Yes" : lead.firstTimeBuyer === "no" ? "No" : "—"}`,
    `Military: ${label(MILITARY_LABELS, lead.militaryStatus)}`,
    `Timeline: ${label(TIMELINE_LABELS, lead.timeline)}`,
  ].join("\n");
}

function validate(lead: LeadPayload): string | null {
  if (!lead.firstName || !lead.lastName) return "Name is required.";
  if (!lead.email || !/^\S+@\S+\.\S+$/.test(lead.email))
    return "A valid email is required.";
  const digits = (lead.phone ?? "").replace(/\D/g, "");
  if (digits.length < 10) return "A valid phone number is required.";
  if (!lead.consent) return "Consent is required.";
  return null;
}

export async function POST(req: NextRequest) {
  let lead: LeadPayload;
  try {
    lead = (await req.json()) as LeadPayload;
  } catch {
    return NextResponse.json({ message: "Invalid JSON" }, { status: 400 });
  }

  const validationError = validate(lead);
  if (validationError) {
    return NextResponse.json({ message: validationError }, { status: 400 });
  }

  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const fromNumber = process.env.TWILIO_FROM_NUMBER;
  const toNumber = process.env.LEAD_TO_NUMBER ?? "+12627510665";

  const body = formatSms(lead);

  if (!accountSid || !authToken || !fromNumber) {
    console.warn(
      "[lead] Twilio credentials missing — skipping SMS. Lead payload:\n" +
        body,
    );
    return NextResponse.json(
      { ok: true, delivered: false, reason: "twilio_not_configured" },
      { status: 202 },
    );
  }

  try {
    const client = twilio(accountSid, authToken);
    await client.messages.create({
      from: fromNumber,
      to: toNumber,
      body,
    });
    return NextResponse.json({ ok: true, delivered: true });
  } catch (err) {
    console.error("[lead] Twilio send failed", err);
    return NextResponse.json(
      { message: "Failed to deliver lead notification." },
      { status: 500 },
    );
  }
}
