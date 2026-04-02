import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { generateBreadcrumbs } from "@/lib/breadcrumbs";
import { KYCAMLPolicyContent } from "./kyc-aml-policy-content";

export const metadata: Metadata = {
  title: "KYC / AML Policy",
  description:
    "PayTrinity's Know Your Customer and Anti-Money Laundering compliance policy.",
};

export default function KYCAMLPolicyPage() {
  return (
    <>
      <JsonLd
        data={generateBreadcrumbs("/kyc-aml-policy", {
          "kyc-aml-policy": "KYC / AML Policy",
        })}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "KYC / AML Policy",
          description:
            "PayTrinity's Know Your Customer and Anti-Money Laundering compliance policy.",
          publisher: {
            "@type": "Organization",
            name: "PayTrinity",
          },
        }}
      />
      <KYCAMLPolicyContent />
    </>
  );
}
