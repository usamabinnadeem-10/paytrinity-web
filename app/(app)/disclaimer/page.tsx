import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { generateBreadcrumbs } from "@/lib/breadcrumbs";
import { DisclaimerContent } from "./disclaimer-content";

export const metadata: Metadata = {
  title: "Disclaimer",
  description:
    "Important disclaimers about PayTrinity's services, including limitations and third-party information.",
};

export default function DisclaimerPage() {
  return (
    <>
      <JsonLd
        data={generateBreadcrumbs("/disclaimer", {
          disclaimer: "Disclaimer",
        })}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Disclaimer",
          description:
            "Important disclaimers about PayTrinity's services, including limitations and third-party information.",
          publisher: {
            "@type": "Organization",
            name: "PayTrinity",
          },
        }}
      />
      <DisclaimerContent />
    </>
  );
}
