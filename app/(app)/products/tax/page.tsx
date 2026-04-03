import type { Metadata } from "next";
import { TaxContent } from "./tax-content";
import { JsonLd } from "@/components/JsonLd";
import { generateBreadcrumbs } from "@/lib/breadcrumbs";

export const metadata: Metadata = {
  title: "PayTrinity Tax - Automated Sales Tax Compliance",
  description:
    "Automate your US sales tax compliance. We monitor nexus, calculate rates, and file returns in all 50 states. Integrates with Stripe, Shopify, and Amazon.",
};

export default function TaxPage() {
  return (
    <>
      <JsonLd
        data={generateBreadcrumbs("/products/tax", {
          products: "Products",
          tax: "Tax",
        })}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Product",
          name: "PayTrinity Tax",
          description:
            "Automated US sales tax compliance across all 50 states. Nexus monitoring, rate calculation, and return filing.",
          brand: { "@type": "Organization", name: "PayTrinity" },
        }}
      />
      <TaxContent />
    </>
  );
}
