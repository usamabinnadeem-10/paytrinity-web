import type { Metadata } from "next";
import { LegalServicesContent } from "./legal-services-content";
import { JsonLd } from "@/components/JsonLd";
import { generateBreadcrumbs } from "@/lib/breadcrumbs";

export const metadata: Metadata = {
  title: "Legal Services - Intellectual Property & Business Law | PayTrinity",
  description:
    "Comprehensive legal services for entrepreneurs and technology companies. Patent filing, trademark registration, copyright protection, and strategic IP counsel.",
};

export default function LegalServicesPage() {
  return (
    <>
      <JsonLd
        data={generateBreadcrumbs("/legal-services", {
          "legal-services": "Legal Services",
        })}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Legal Services",
          description:
            "Comprehensive legal services for intellectual property protection, patent filing, trademark registration, copyright protection, and technology law.",
          provider: { "@type": "Organization", name: "PayTrinity" },
        }}
      />
      <LegalServicesContent />
    </>
  );
}
