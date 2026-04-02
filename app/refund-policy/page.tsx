import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { generateBreadcrumbs } from "@/lib/breadcrumbs";
import { RefundPolicyContent } from "./refund-policy-content";

export const metadata: Metadata = {
  title: "Refund Policy",
  description:
    "Understand PayTrinity's refund policy for administrative and filing services.",
};

export default function RefundPolicyPage() {
  return (
    <>
      <JsonLd
        data={generateBreadcrumbs("/refund-policy", {
          "refund-policy": "Refund Policy",
        })}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Refund Policy",
          description:
            "Understand PayTrinity's refund policy for administrative and filing services.",
          publisher: {
            "@type": "Organization",
            name: "PayTrinity",
          },
        }}
      />
      <RefundPolicyContent />
    </>
  );
}
