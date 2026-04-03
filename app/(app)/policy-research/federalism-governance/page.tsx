import type { Metadata } from "next";
import { FederalismGovernanceContent } from "./federalism-governance-content";
import { JsonLd } from "@/components/JsonLd";
import { generateBreadcrumbs } from "@/lib/breadcrumbs";

export const metadata: Metadata = {
  title: "Federalism & Governance Research | PayTrinity",
  description:
    "Study of federal structures, interstate relations, and multi-level governance systems affecting regulatory efficiency and market integration.",
};

export default function FederalismGovernancePage() {
  return (
    <>
      <JsonLd
        data={generateBreadcrumbs(
          "/policy-research/federalism-governance",
          {
            "policy-research": "Policy & Research",
            "federalism-governance": "Federalism & Governance",
          },
        )}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ScholarlyArticle",
          name: "Federalism & Governance Research",
          description:
            "Study of federal structures, interstate relations, and multi-level governance systems affecting regulatory efficiency and market integration.",
          author: { "@type": "Organization", name: "PayTrinity" },
          publisher: { "@type": "Organization", name: "PayTrinity" },
        }}
      />
      <FederalismGovernanceContent />
    </>
  );
}
