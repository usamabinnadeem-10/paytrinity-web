import type { Metadata } from "next";
import { InstitutionalFragmentationContent } from "./institutional-fragmentation-content";
import { JsonLd } from "@/components/JsonLd";
import { generateBreadcrumbs } from "@/lib/breadcrumbs";

export const metadata: Metadata = {
  title: "Institutional Fragmentation Research | PayTrinity",
  description:
    "Research on fragmented regulatory authority, jurisdictional complexity, and coordination challenges affecting compliance costs and market efficiency.",
};

export default function InstitutionalFragmentationPage() {
  return (
    <>
      <JsonLd
        data={generateBreadcrumbs(
          "/policy-research/institutional-fragmentation",
          {
            "policy-research": "Policy & Research",
            "institutional-fragmentation": "Institutional Fragmentation",
          },
        )}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ScholarlyArticle",
          name: "Institutional Fragmentation Research",
          description:
            "Research on fragmented regulatory authority, jurisdictional complexity, and coordination challenges affecting compliance costs and market efficiency.",
          author: { "@type": "Organization", name: "PayTrinity" },
          publisher: { "@type": "Organization", name: "PayTrinity" },
        }}
      />
      <InstitutionalFragmentationContent />
    </>
  );
}
