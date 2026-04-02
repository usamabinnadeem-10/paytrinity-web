import type { Metadata } from "next";
import { HelpCenterContent } from "./help-center-content";
import { JsonLd } from "@/components/JsonLd";
import { generateBreadcrumbs } from "@/lib/breadcrumbs";

export const metadata: Metadata = {
  title: "Help Center | PayTrinity",
  description:
    "Search our knowledge base for answers about US business formation, ITIN applications, banking, tax compliance, and more.",
};

export default function HelpCenterPage() {
  return (
    <>
      <JsonLd
        data={generateBreadcrumbs("/help-center", {
          "help-center": "Help Center",
        })}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "PayTrinity Help Center",
          description:
            "Knowledge base for US business formation, ITIN, banking, and compliance for international founders.",
        }}
      />
      <HelpCenterContent />
    </>
  );
}
