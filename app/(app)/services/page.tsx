import type { Metadata } from "next";
import { ServicesContent } from "./services-content";
import { JsonLd } from "@/components/JsonLd";
import { generateBreadcrumbs } from "@/lib/breadcrumbs";

export const metadata: Metadata = {
  title: "Services - ITIN, Formation, Banking & More | PayTrinity",
  description:
    "Explore our full range of services: ITIN application, US LLC formation, bank account opening, virtual mailroom, and compliance support.",
};

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={generateBreadcrumbs("/services", {
          services: "Services",
        })}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "PayTrinity Services",
          description:
            "Comprehensive business services for international founders: ITIN, formation, banking, compliance, and more.",
        }}
      />
      <ServicesContent />
    </>
  );
}
