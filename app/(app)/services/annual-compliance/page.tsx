import type { Metadata } from "next";
import { AnnualComplianceContent } from "./annual-compliance-content";
import { JsonLd } from "@/components/JsonLd";
import { generateBreadcrumbs } from "@/lib/breadcrumbs";

export const metadata: Metadata = {
  title: "Annual Compliance & Tax Coordination | PayTrinity",
  description:
    "Automated annual reporting, franchise tax filing, and BOI compliance. Never miss a deadline or face dissolution.",
};

export default function AnnualCompliancePage() {
  return (
    <>
      <JsonLd
        data={generateBreadcrumbs("/services/annual-compliance", {
          services: "Services",
          "annual-compliance": "Annual Compliance",
        })}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Annual Compliance & Tax Coordination",
          description:
            "Automated compliance management for US entities including annual reports, franchise taxes, and BOI filings.",
          provider: { "@type": "Organization", name: "PayTrinity" },
          areaServed: "US",
        }}
      />
      <AnnualComplianceContent />
    </>
  );
}
