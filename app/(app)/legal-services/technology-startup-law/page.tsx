import type { Metadata } from "next";
import { TechnologyStartupLawContent } from "./technology-startup-law-content";
import { JsonLd } from "@/components/JsonLd";
import { generateBreadcrumbs } from "@/lib/breadcrumbs";

export const metadata: Metadata = {
  title: "Technology & Startup Law - Legal Counsel | PayTrinity",
  description:
    "Specialized legal services for technology startups. Entity formation, fundraising, commercial contracts, and regulatory compliance from experienced startup attorneys.",
};

export default function TechnologyStartupLawPage() {
  return (
    <>
      <JsonLd
        data={generateBreadcrumbs("/legal-services/technology-startup-law", {
          "legal-services": "Legal Services",
          "technology-startup-law": "Technology & Startup Law",
        })}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "Technology & Startup Law",
          description:
            "Comprehensive legal services for technology companies and startups from formation through growth stages.",
          provider: { "@type": "Organization", name: "PayTrinity" },
          serviceType: "Technology & Startup Law",
        }}
      />
      <TechnologyStartupLawContent />
    </>
  );
}
