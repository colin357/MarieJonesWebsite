"use client";

import { useMemo, useState } from "react";

type LoanPurpose = "buy" | "build" | "refinance" | "cashout" | "invest";
type PropertyType = "single" | "condo" | "townhouse" | "multi" | "manufactured";
type CreditBand =
  | "excellent"
  | "good"
  | "fair"
  | "below"
  | "unsure";
type Timeline = "asap" | "3mo" | "6mo" | "1yr" | "research";
type MilitaryStatus = "active" | "veteran" | "none";

interface FormState {
  purpose: LoanPurpose | "";
  propertyType: PropertyType | "";
  priceRange: string;
  downPayment: string;
  monthlyPayment: string;
  creditScore: CreditBand | "";
  firstTimeBuyer: "yes" | "no" | "";
  militaryStatus: MilitaryStatus | "";
  state: string;
  timeline: Timeline | "";
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  consent: boolean;
}

const initialState: FormState = {
  purpose: "",
  propertyType: "",
  priceRange: "",
  downPayment: "",
  monthlyPayment: "",
  creditScore: "",
  firstTimeBuyer: "",
  militaryStatus: "",
  state: "WI",
  timeline: "",
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  consent: false,
};

const purposeOptions: { value: LoanPurpose; title: string; desc: string }[] = [
  { value: "buy", title: "Buy a home", desc: "Purchase an existing home" },
  { value: "build", title: "Build a home", desc: "Construction or new build" },
  { value: "refinance", title: "Refinance", desc: "Lower rate or payment" },
  { value: "cashout", title: "Cash-out refi", desc: "Tap into home equity" },
  { value: "invest", title: "Investment property", desc: "Rental or second home" },
];

const propertyOptions: { value: PropertyType; title: string }[] = [
  { value: "single", title: "Single-family home" },
  { value: "condo", title: "Condo" },
  { value: "townhouse", title: "Townhouse" },
  { value: "multi", title: "Multi-family (2–4 unit)" },
  { value: "manufactured", title: "Manufactured / mobile" },
];

const creditOptions: { value: CreditBand; title: string; desc: string }[] = [
  { value: "excellent", title: "Excellent", desc: "740 +" },
  { value: "good", title: "Good", desc: "700 – 739" },
  { value: "fair", title: "Fair", desc: "640 – 699" },
  { value: "below", title: "Below 640", desc: "We can still help" },
  { value: "unsure", title: "Not sure", desc: "We'll check softly" },
];

const timelineOptions: { value: Timeline; title: string }[] = [
  { value: "asap", title: "As soon as possible" },
  { value: "3mo", title: "Within 3 months" },
  { value: "6mo", title: "3–6 months" },
  { value: "1yr", title: "6–12 months" },
  { value: "research", title: "Just researching" },
];

export default function LeadForm() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<FormState>(initialState);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const steps = useMemo(
    () => [
      "Purpose",
      "Property",
      "Budget",
      "Payment",
      "Credit",
      "About you",
      "Timeline",
      "Contact",
    ],
    [],
  );

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) =>
    setForm((f) => ({ ...f, [key]: value }));

  const next = () => setStep((s) => Math.min(s + 1, steps.length - 1));
  const back = () => setStep((s) => Math.max(s - 1, 0));

  const canAdvance = (): boolean => {
    switch (step) {
      case 0: return !!form.purpose;
      case 1: return !!form.propertyType;
      case 2: return !!form.priceRange;
      case 3: return !!form.monthlyPayment;
      case 4: return !!form.creditScore;
      case 5: return !!form.firstTimeBuyer && !!form.militaryStatus;
      case 6: return !!form.timeline;
      case 7:
        return (
          !!form.firstName.trim() &&
          !!form.lastName.trim() &&
          /^\S+@\S+\.\S+$/.test(form.email) &&
          form.phone.replace(/\D/g, "").length >= 10 &&
          form.consent
        );
      default:
        return false;
    }
  };

  const submit = async () => {
    if (!canAdvance()) return;
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const { message } = await res.json().catch(() => ({ message: "" }));
        throw new Error(message || "Something went wrong. Please try again.");
      }
      setSubmitted(true);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Something went wrong.");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="rounded-2xl bg-white p-8 text-center shadow-lg ring-1 ring-slate-200">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-100">
          <svg
            className="h-7 w-7 text-green-600"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3 className="mt-4 text-2xl font-bold text-slate-900">
          Thanks, {form.firstName}!
        </h3>
        <p className="mt-2 text-slate-600">
          Your information is on its way to Marie. She&apos;ll reach out
          personally — usually within a few business hours.
        </p>
        <p className="mt-1 text-sm text-slate-500">
          Need to talk right now?{" "}
          <a
            href="tel:+12625675005"
            className="font-semibold text-brand-700 hover:underline"
          >
            (262) 567-5005
          </a>
        </p>
      </div>
    );
  }

  const progress = ((step + 1) / steps.length) * 100;

  return (
    <div className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-slate-200 sm:p-8">
      <div className="mb-6">
        <div className="flex items-center justify-between text-xs font-medium text-slate-500">
          <span>
            Step {step + 1} of {steps.length}
          </span>
          <span>{steps[step]}</span>
        </div>
        <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-100">
          <div
            className="h-full rounded-full bg-gradient-to-r from-brand-500 to-brand-700 transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="min-h-[260px]">
        {step === 0 && (
          <StepRadio
            label="What are you looking to do?"
            sublabel="Pick the option that best describes your goal."
            value={form.purpose}
            onChange={(v) => update("purpose", v as LoanPurpose)}
            options={purposeOptions.map((o) => ({
              value: o.value,
              title: o.title,
              desc: o.desc,
            }))}
          />
        )}

        {step === 1 && (
          <StepRadio
            label="What type of property?"
            value={form.propertyType}
            onChange={(v) => update("propertyType", v as PropertyType)}
            options={propertyOptions.map((o) => ({
              value: o.value,
              title: o.title,
            }))}
          />
        )}

        {step === 2 && (
          <StepInput
            label="What's your target purchase price or home value?"
            sublabel="A rough range is totally fine."
            placeholder="$450,000"
            value={form.priceRange}
            onChange={(v) => update("priceRange", v)}
            prefix="$"
            hint="We also collect your estimated down payment below."
          >
            <div className="mt-4">
              <label className="mb-1 block text-sm font-medium text-slate-700">
                Estimated down payment (optional)
              </label>
              <input
                type="text"
                inputMode="numeric"
                value={form.downPayment}
                onChange={(e) => update("downPayment", e.target.value)}
                placeholder="$50,000 or 10%"
                className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100"
              />
            </div>
          </StepInput>
        )}

        {step === 3 && (
          <StepInput
            label="What's your goal monthly payment?"
            sublabel="Principal, interest, taxes and insurance combined."
            placeholder="$2,500"
            value={form.monthlyPayment}
            onChange={(v) => update("monthlyPayment", v)}
            prefix="$"
          />
        )}

        {step === 4 && (
          <StepRadio
            label="What's your estimated credit score?"
            sublabel="This won't affect your credit."
            value={form.creditScore}
            onChange={(v) => update("creditScore", v as CreditBand)}
            options={creditOptions.map((o) => ({
              value: o.value,
              title: o.title,
              desc: o.desc,
            }))}
          />
        )}

        {step === 5 && (
          <div className="space-y-6">
            <StepRadio
              label="Are you a first-time home buyer?"
              value={form.firstTimeBuyer}
              onChange={(v) => update("firstTimeBuyer", v as "yes" | "no")}
              options={[
                { value: "yes", title: "Yes" },
                { value: "no", title: "No" },
              ]}
              compact
            />
            <StepRadio
              label="Are you active military or a veteran?"
              sublabel="VA loans often offer great rates and no down payment."
              value={form.militaryStatus}
              onChange={(v) => update("militaryStatus", v as MilitaryStatus)}
              options={[
                { value: "active", title: "Active duty" },
                { value: "veteran", title: "Veteran" },
                { value: "none", title: "Neither" },
              ]}
              compact
            />
          </div>
        )}

        {step === 6 && (
          <StepRadio
            label="When do you want to close?"
            value={form.timeline}
            onChange={(v) => update("timeline", v as Timeline)}
            options={timelineOptions.map((o) => ({
              value: o.value,
              title: o.title,
            }))}
          />
        )}

        {step === 7 && (
          <div>
            <h3 className="text-xl font-semibold text-slate-900">
              Last step — how should Marie reach you?
            </h3>
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <TextField
                label="First name"
                value={form.firstName}
                onChange={(v) => update("firstName", v)}
                autoComplete="given-name"
              />
              <TextField
                label="Last name"
                value={form.lastName}
                onChange={(v) => update("lastName", v)}
                autoComplete="family-name"
              />
              <TextField
                label="Email"
                type="email"
                value={form.email}
                onChange={(v) => update("email", v)}
                autoComplete="email"
              />
              <TextField
                label="Phone"
                type="tel"
                value={form.phone}
                onChange={(v) => update("phone", v)}
                autoComplete="tel"
                placeholder="(555) 123-4567"
              />
            </div>
            <label className="mt-5 flex cursor-pointer items-start gap-3 text-sm text-slate-600">
              <input
                type="checkbox"
                checked={form.consent}
                onChange={(e) => update("consent", e.target.checked)}
                className="mt-1 h-4 w-4 rounded border-slate-300 text-brand-600 focus:ring-brand-500"
              />
              <span>
                I agree to be contacted by Marie Jones and Fairway Home
                Mortgage about my loan inquiry by phone, text, or email. I
                understand consent is not a condition of purchase. Message and
                data rates may apply.
              </span>
            </label>
          </div>
        )}
      </div>

      {error && (
        <div className="mt-4 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700 ring-1 ring-red-100">
          {error}
        </div>
      )}

      <div className="mt-6 flex items-center justify-between">
        <button
          type="button"
          onClick={back}
          disabled={step === 0 || submitting}
          className="rounded-lg px-4 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-100 disabled:opacity-40"
        >
          ← Back
        </button>

        {step < steps.length - 1 ? (
          <button
            type="button"
            onClick={next}
            disabled={!canAdvance()}
            className="rounded-lg bg-brand-600 px-6 py-3 font-semibold text-white shadow hover:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Continue →
          </button>
        ) : (
          <button
            type="button"
            onClick={submit}
            disabled={!canAdvance() || submitting}
            className="rounded-lg bg-accent-500 px-6 py-3 font-semibold text-slate-900 shadow hover:bg-accent-600 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {submitting ? "Sending…" : "Send to Marie"}
          </button>
        )}
      </div>
    </div>
  );
}

function StepRadio({
  label,
  sublabel,
  value,
  onChange,
  options,
  compact = false,
}: {
  label: string;
  sublabel?: string;
  value: string;
  onChange: (v: string) => void;
  options: { value: string; title: string; desc?: string }[];
  compact?: boolean;
}) {
  return (
    <div>
      <h3 className="text-xl font-semibold text-slate-900">{label}</h3>
      {sublabel && <p className="mt-1 text-sm text-slate-500">{sublabel}</p>}
      <div
        className={`mt-4 grid gap-3 ${
          compact ? "sm:grid-cols-3" : "sm:grid-cols-2"
        }`}
      >
        {options.map((opt) => {
          const active = value === opt.value;
          return (
            <button
              key={opt.value}
              type="button"
              onClick={() => onChange(opt.value)}
              className={`rounded-xl border-2 p-4 text-left transition ${
                active
                  ? "border-brand-500 bg-brand-50"
                  : "border-slate-200 bg-white hover:border-brand-300"
              }`}
            >
              <div className="font-semibold text-slate-900">{opt.title}</div>
              {opt.desc && (
                <div className="mt-1 text-sm text-slate-500">{opt.desc}</div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function StepInput({
  label,
  sublabel,
  value,
  onChange,
  placeholder,
  prefix,
  hint,
  children,
}: {
  label: string;
  sublabel?: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  prefix?: string;
  hint?: string;
  children?: React.ReactNode;
}) {
  return (
    <div>
      <h3 className="text-xl font-semibold text-slate-900">{label}</h3>
      {sublabel && <p className="mt-1 text-sm text-slate-500">{sublabel}</p>}
      <div className="relative mt-4">
        {prefix && (
          <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-slate-400">
            {prefix}
          </span>
        )}
        <input
          type="text"
          inputMode="numeric"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={`w-full rounded-lg border border-slate-300 py-3 text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100 ${
            prefix ? "pl-8 pr-4" : "px-4"
          }`}
        />
      </div>
      {hint && <p className="mt-2 text-xs text-slate-500">{hint}</p>}
      {children}
    </div>
  );
}

function TextField({
  label,
  value,
  onChange,
  type = "text",
  placeholder,
  autoComplete,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  placeholder?: string;
  autoComplete?: string;
}) {
  return (
    <label className="block">
      <span className="mb-1 block text-sm font-medium text-slate-700">
        {label}
      </span>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100"
      />
    </label>
  );
}
