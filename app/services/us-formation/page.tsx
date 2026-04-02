import type { Metadata } from "next";
import { USFormationContent } from "./us-formation-content";
import { JsonLd } from "@/components/JsonLd";
import { generateBreadcrumbs } from "@/lib/breadcrumbs";

export const metadata: Metadata = {
  title: "US LLC & Corporation Formation | PayTrinity",
  description:
    "Form your Delaware LLC or C-Corp in days. We handle paperwork, registered agent, and state filings for international founders.",
};

export default function USFormationPage() {
  return (
    <>
      <JsonLd
        data={generateBreadcrumbs("/services/us-formation", {
          services: "Services",
          "us-formation": "US Formation",
        })}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "US LLC & Corporation Formation",
          description:
            "Complete entity formation service for international founders in Delaware and Wyoming.",
          provider: { "@type": "Organization", name: "PayTrinity" },
          areaServed: "US",
        }}
      />
      <USFormationContent />
    </>
  );
}
