import type { Metadata } from "next";
import { InstitutionalFragmentationEmergingMarketsContent } from "./institutional-fragmentation-emerging-markets-content";
import { JsonLd } from "@/components/JsonLd";
import { generateBreadcrumbs } from "@/lib/breadcrumbs";

export const metadata: Metadata = {
  title: "Institutional Fragmentation in Emerging Markets | PayTrinity Research",
  description:
    "Analysis of regulatory complexity, institutional coordination challenges, and strategic approaches for businesses operating in emerging market economies.",
};

export default function InstitutionalFragmentationEmergingMarketsPage() {
  return (
    <>
      <JsonLd
        data={generateBreadcrumbs(
          "/resources/institutional-fragmentation-emerging-markets",
          {
            resources: "Resources",
            "institutional-fragmentation-emerging-markets":
              "Institutional Fragmentation in Emerging Markets",
          },
        )}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Institutional Fragmentation in Emerging Markets",
          author: { "@type": "Organization", name: "PayTrinity" },
          datePublished: "2025-01-20",
          publisher: {
            "@type": "Organization",
            name: "PayTrinity",
            url: "https://paytrinity.co",
          },
          description:
            "Analysis of regulatory complexity, institutional coordination challenges, and strategic approaches for businesses operating in emerging market economies.",
        }}
      />
      <InstitutionalFragmentationEmergingMarketsContent />
    </>
  );
}
