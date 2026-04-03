import type { Metadata } from "next";
import { PatentFilingContent } from "./patent-filing-content";
import { JsonLd } from "@/components/JsonLd";
import { generateBreadcrumbs } from "@/lib/breadcrumbs";

export const metadata: Metadata = {
  title: "Patent Filing Services - US & International | PayTrinity",
  description:
    "Comprehensive patent filing services for inventors and technology companies. Provisional patents, utility patents, and PCT applications with strategic IP counsel.",
};

export default function PatentFilingPage() {
  return (
    <>
      <JsonLd
        data={generateBreadcrumbs("/legal-services/patent-filing", {
          "legal-services": "Legal Services",
          "patent-filing": "Patent Filing",
        })}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "Patent Filing",
          description:
            "Comprehensive patent filing services including provisional patents, utility patents, and PCT applications.",
          provider: { "@type": "Organization", name: "PayTrinity" },
          serviceType: "Patent Filing",
        }}
      />
      <PatentFilingContent />
    </>
  );
}
