import type { Metadata } from "next";
import { ITINApplicationContent } from "./itin-application-content";
import { JsonLd } from "@/components/JsonLd";
import { generateBreadcrumbs } from "@/lib/breadcrumbs";

export const metadata: Metadata = {
  title: "ITIN Application & Renewal | PayTrinity",
  description:
    "Get your Individual Taxpayer Identification Number with an IRS Certified Acceptance Agent. No need to mail your passport. Open US bank accounts and file taxes.",
};

export default function ITINApplicationPage() {
  return (
    <>
      <JsonLd
        data={generateBreadcrumbs("/services/itin-application", {
          services: "Services",
          "itin-application": "ITIN Application",
        })}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "ITIN Application & Renewal",
          description:
            "IRS Certified Acceptance Agent service for ITIN applications. Keep your passport, get your ITIN.",
          provider: { "@type": "Organization", name: "PayTrinity" },
          areaServed: "US",
        }}
      />
      <ITINApplicationContent />
    </>
  );
}
