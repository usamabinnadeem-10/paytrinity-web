import type { Metadata } from "next";
import { DigitalEconomyFintechContent } from "./digital-economy-fintech-content";
import { JsonLd } from "@/components/JsonLd";
import { generateBreadcrumbs } from "@/lib/breadcrumbs";

export const metadata: Metadata = {
  title: "Digital Economy & Fintech Regulation Research | PayTrinity",
  description:
    "Analysis of regulatory approaches to digital platforms, fintech innovation, and emerging technologies.",
};

export default function DigitalEconomyFintechPage() {
  return (
    <>
      <JsonLd
        data={generateBreadcrumbs(
          "/policy-research/digital-economy-fintech",
          {
            "policy-research": "Policy & Research",
            "digital-economy-fintech": "Digital Economy & Fintech",
          },
        )}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ScholarlyArticle",
          name: "Digital Economy & Fintech Regulation Research",
          description:
            "Analysis of regulatory approaches to digital platforms, fintech innovation, and emerging technologies.",
          author: { "@type": "Organization", name: "PayTrinity" },
          publisher: { "@type": "Organization", name: "PayTrinity" },
        }}
      />
      <DigitalEconomyFintechContent />
    </>
  );
}
