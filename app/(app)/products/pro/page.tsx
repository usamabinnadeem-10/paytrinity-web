import type { Metadata } from "next";
import { ProContent } from "./pro-content";
import { JsonLd } from "@/components/JsonLd";
import { generateBreadcrumbs } from "@/lib/breadcrumbs";

export const metadata: Metadata = {
  title: "PayTrinity Pro - All-In-One Compliance Subscription",
  description:
    "Put your US company compliance on autopilot. Includes annual filings, tax returns, registered agent, and audit defense for a flat monthly fee.",
};

export default function ProPage() {
  return (
    <>
      <JsonLd
        data={generateBreadcrumbs("/products/pro", {
          products: "Products",
          pro: "Pro",
        })}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Product",
          name: "PayTrinity Pro",
          description:
            "All-in-one compliance subscription including registered agent, annual filings, tax prep, and audit defense.",
          brand: { "@type": "Organization", name: "PayTrinity" },
          offers: {
            "@type": "Offer",
            price: "99",
            priceCurrency: "USD",
            billingIncrement: 1,
            unitCode: "MON",
          },
        }}
      />
      <ProContent />
    </>
  );
}
