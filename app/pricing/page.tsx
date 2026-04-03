import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { generateBreadcrumbs } from "@/lib/breadcrumbs";
import { PricingContent } from "./pricing-content";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Launch your US business starting at $299. Transparent pricing for LLC formation, EIN, banking, and ongoing compliance.",
};

export default function PricingPage() {
  return (
    <>
      <JsonLd
        data={generateBreadcrumbs("/pricing", { pricing: "Pricing" })}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "PayTrinity Pricing",
          description:
            "Launch your US business starting at $299. Transparent pricing for LLC formation, EIN, banking, and ongoing compliance.",
        }}
      />
      <PricingContent />
    </>
  );
}
