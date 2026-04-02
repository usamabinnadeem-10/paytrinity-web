import type { Metadata } from "next";
import { BusinessEconomicPolicyContent } from "./business-economic-policy-content";
import { JsonLd } from "@/components/JsonLd";
import { generateBreadcrumbs } from "@/lib/breadcrumbs";

export const metadata: Metadata = {
  title: "Business & Economic Policy Research | PayTrinity",
  description:
    "Analysis of market structures, competition policy, and economic regulatory frameworks across jurisdictions.",
};

export default function BusinessEconomicPolicyPage() {
  return (
    <>
      <JsonLd
        data={generateBreadcrumbs(
          "/policy-research/business-economic-policy",
          {
            "policy-research": "Policy & Research",
            "business-economic-policy": "Business & Economic Policy",
          },
        )}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ScholarlyArticle",
          name: "Business & Economic Policy Research",
          description:
            "Analysis of market structures, competition policy, and economic regulatory frameworks across jurisdictions.",
          author: { "@type": "Organization", name: "PayTrinity" },
          publisher: { "@type": "Organization", name: "PayTrinity" },
        }}
      />
      <BusinessEconomicPolicyContent />
    </>
  );
}
