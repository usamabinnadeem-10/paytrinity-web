import type { Metadata } from "next";
import { BusinessRegulationFederalSystemsContent } from "./business-regulation-federal-systems-content";
import { JsonLd } from "@/components/JsonLd";
import { generateBreadcrumbs } from "@/lib/breadcrumbs";

export const metadata: Metadata = {
  title: "Business Regulation in Federal Systems | PayTrinity Research",
  description:
    "An in-depth analysis of multi-jurisdictional compliance frameworks, regulatory fragmentation, and strategic approaches to navigating federal business regulation systems.",
};

export default function BusinessRegulationFederalSystemsPage() {
  return (
    <>
      <JsonLd
        data={generateBreadcrumbs(
          "/resources/business-regulation-federal-systems",
          {
            resources: "Resources",
            "business-regulation-federal-systems":
              "Business Regulation in Federal Systems",
          },
        )}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Business Regulation in Federal Systems",
          author: { "@type": "Organization", name: "PayTrinity" },
          datePublished: "2025-01-15",
          publisher: {
            "@type": "Organization",
            name: "PayTrinity",
            url: "https://paytrinity.com",
          },
          description:
            "An in-depth analysis of multi-jurisdictional compliance frameworks, regulatory fragmentation, and strategic approaches to navigating federal business regulation systems.",
        }}
      />
      <BusinessRegulationFederalSystemsContent />
    </>
  );
}
