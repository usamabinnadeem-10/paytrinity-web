import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { generateBreadcrumbs } from "@/lib/breadcrumbs";
import { PrivacyContent } from "./privacy-content";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn how PayTrinity collects, uses, and protects your personal information.",
};

export default function PrivacyPage() {
  return (
    <>
      <JsonLd
        data={generateBreadcrumbs("/privacy", {
          privacy: "Privacy Policy",
        })}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Privacy Policy",
          description:
            "Learn how PayTrinity collects, uses, and protects your personal information.",
          publisher: {
            "@type": "Organization",
            name: "PayTrinity",
          },
        }}
      />
      <PrivacyContent />
    </>
  );
}
