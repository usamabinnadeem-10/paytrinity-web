import type { Metadata } from "next";
import { LawRegulatorySystemsContent } from "./law-regulatory-systems-content";
import { JsonLd } from "@/components/JsonLd";
import { generateBreadcrumbs } from "@/lib/breadcrumbs";

export const metadata: Metadata = {
  title: "Law & Regulatory Systems Research | PayTrinity",
  description:
    "Examination of legal frameworks, regulatory institutions, and enforcement mechanisms shaping business environments.",
};

export default function LawRegulatorySystemsPage() {
  return (
    <>
      <JsonLd
        data={generateBreadcrumbs(
          "/policy-research/law-regulatory-systems",
          {
            "policy-research": "Policy & Research",
            "law-regulatory-systems": "Law & Regulatory Systems",
          },
        )}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ScholarlyArticle",
          name: "Law & Regulatory Systems Research",
          description:
            "Examination of legal frameworks, regulatory institutions, and enforcement mechanisms shaping business environments.",
          author: { "@type": "Organization", name: "PayTrinity" },
          publisher: { "@type": "Organization", name: "PayTrinity" },
        }}
      />
      <LawRegulatorySystemsContent />
    </>
  );
}
