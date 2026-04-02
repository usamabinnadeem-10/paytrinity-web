import type { Metadata } from "next";
import { IPStrategyContent } from "./ip-strategy-content";
import { JsonLd } from "@/components/JsonLd";
import { generateBreadcrumbs } from "@/lib/breadcrumbs";

export const metadata: Metadata = {
  title: "IP Strategy - Intellectual Property Consulting | PayTrinity",
  description:
    "Strategic IP consulting services. Portfolio audits, freedom-to-operate analysis, due diligence, and licensing strategies for technology companies.",
};

export default function IPStrategyPage() {
  return (
    <>
      <JsonLd
        data={generateBreadcrumbs("/legal-services/ip-strategy", {
          "legal-services": "Legal Services",
          "ip-strategy": "IP Strategy",
        })}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "IP Strategy",
          description:
            "Strategic intellectual property consulting including portfolio audits, freedom-to-operate analysis, and licensing strategies.",
          provider: { "@type": "Organization", name: "PayTrinity" },
          serviceType: "IP Strategy Consulting",
        }}
      />
      <IPStrategyContent />
    </>
  );
}
