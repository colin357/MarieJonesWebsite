import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Marie Jones | Fairway Home Mortgage — Loan Officer",
  description:
    "Marie Jones is a Wisconsin-based loan officer at Fairway Home Mortgage with 20+ years of experience and 469 reviews. Get a personalized loan plan today.",
  openGraph: {
    type: "website",
    description:
      "Wisconsin's trusted mortgage expert. Marie Jones at Fairway Home Mortgage — 20+ years of experience, 469 reviews, personal service from application to closing.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  );
}
