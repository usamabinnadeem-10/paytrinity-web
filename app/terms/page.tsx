import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { generateBreadcrumbs } from "@/lib/breadcrumbs";
import { TermsContent } from "./terms-content";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Read our Terms of Service to understand the rules and regulations for using PayTrinity's services.",
};

export default function TermsPage() {
  return (
    <>
      <JsonLd
        data={generateBreadcrumbs("/terms", {
          terms: "Terms of Service",
        })}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Terms of Service",
          description:
            "Read our Terms of Service to understand the rules and regulations for using PayTrinity's services.",
          publisher: {
            "@type": "Organization",
            name: "PayTrinity",
          },
        }}
      />
      <TermsContent />
    </>
  );
}
