import type { Metadata } from "next";
import { PolicyResearchContent } from "./policy-research-content";
import { JsonLd } from "@/components/JsonLd";
import { generateBreadcrumbs } from "@/lib/breadcrumbs";

export const metadata: Metadata = {
  title: "Policy & Research Center | PayTrinity",
  description:
    "Integrated research unit focused on legal, economic, and institutional systems shaping global markets. We operate at the intersection of law, economics, and institutional design.",
};

export default function PolicyResearchPage() {
  return (
    <>
      <JsonLd
        data={generateBreadcrumbs("/policy-research", {
          "policy-research": "Policy & Research",
        })}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Policy & Research Center",
          description:
            "Integrated research unit focused on legal, economic, and institutional systems shaping global markets.",
          provider: { "@type": "Organization", name: "PayTrinity" },
        }}
      />
      <PolicyResearchContent />
    </>
  );
}
