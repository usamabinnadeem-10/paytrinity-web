import type { Metadata } from "next";
import { CopyrightProtectionContent } from "./copyright-protection-content";
import { JsonLd } from "@/components/JsonLd";
import { generateBreadcrumbs } from "@/lib/breadcrumbs";

export const metadata: Metadata = {
  title: "Copyright Protection Services - Creative Works | PayTrinity",
  description:
    "Professional copyright registration and enforcement services. Protect software, content, designs, and creative works with experienced legal counsel.",
};

export default function CopyrightProtectionPage() {
  return (
    <>
      <JsonLd
        data={generateBreadcrumbs("/legal-services/copyright-protection", {
          "legal-services": "Legal Services",
          "copyright-protection": "Copyright Protection",
        })}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "Copyright Protection",
          description:
            "Professional copyright registration, licensing, and enforcement services for creative works and software.",
          provider: { "@type": "Organization", name: "PayTrinity" },
          serviceType: "Copyright Protection",
        }}
      />
      <CopyrightProtectionContent />
    </>
  );
}
