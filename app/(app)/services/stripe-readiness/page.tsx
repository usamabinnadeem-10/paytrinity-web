import type { Metadata } from "next";
import { StripeReadinessContent } from "./stripe-readiness-content";
import { JsonLd } from "@/components/JsonLd";
import { generateBreadcrumbs } from "@/lib/breadcrumbs";

export const metadata: Metadata = {
  title: "Stripe & PayPal Readiness Advisory | PayTrinity",
  description:
    "Get your business Stripe and PayPal ready with proper documentation, US address, and compliance setup to avoid account bans.",
};

export default function StripeReadinessPage() {
  return (
    <>
      <JsonLd
        data={generateBreadcrumbs("/services/stripe-readiness", {
          services: "Services",
          "stripe-readiness": "Stripe Readiness",
        })}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Stripe Readiness Advisory",
          description:
            "Advisory service to prepare businesses for Stripe, PayPal, and merchant account verification.",
          provider: { "@type": "Organization", name: "PayTrinity" },
          areaServed: "US",
        }}
      />
      <StripeReadinessContent />
    </>
  );
}
