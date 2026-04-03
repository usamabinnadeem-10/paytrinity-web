import type { Metadata } from "next";
import { TrademarkRegistrationContent } from "./trademark-registration-content";
import { JsonLd } from "@/components/JsonLd";
import { generateBreadcrumbs } from "@/lib/breadcrumbs";

export const metadata: Metadata = {
  title: "Trademark Registration Services - Brand Protection | PayTrinity",
  description:
    "Professional trademark registration services for businesses and entrepreneurs. USPTO filing, international protection, and brand enforcement strategies.",
};

export default function TrademarkRegistrationPage() {
  return (
    <>
      <JsonLd
        data={generateBreadcrumbs("/legal-services/trademark-registration", {
          "legal-services": "Legal Services",
          "trademark-registration": "Trademark Registration",
        })}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "Trademark Registration",
          description:
            "Professional trademark registration and brand protection services for domestic and international markets.",
          provider: { "@type": "Organization", name: "PayTrinity" },
          serviceType: "Trademark Registration",
        }}
      />
      <TrademarkRegistrationContent />
    </>
  );
}
