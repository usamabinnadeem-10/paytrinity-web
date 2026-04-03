import type { Metadata } from "next";
import { PhysicalBankingContent } from "./physical-banking-content";
import { JsonLd } from "@/components/JsonLd";
import { generateBreadcrumbs } from "@/lib/breadcrumbs";

export const metadata: Metadata = {
  title: "Physical US Bank Account Service | PayTrinity",
  description:
    "Open a tier-1 US bank account at Chase, Bank of America, or Wells Fargo. Concierge assistance for international founders.",
};

export default function PhysicalBankingPage() {
  return (
    <>
      <JsonLd
        data={generateBreadcrumbs("/services/physical-banking", {
          services: "Services",
          "physical-banking": "Physical Banking",
        })}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Physical Bank Account Service",
          description:
            "Concierge assistance for opening traditional US business bank accounts at major institutions.",
          provider: { "@type": "Organization", name: "PayTrinity" },
          areaServed: "US",
        }}
      />
      <PhysicalBankingContent />
    </>
  );
}
