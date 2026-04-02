import type { Metadata } from "next";
import { RegisteredAgentContent } from "./registered-agent-content";
import { JsonLd } from "@/components/JsonLd";
import { generateBreadcrumbs } from "@/lib/breadcrumbs";

export const metadata: Metadata = {
  title: "Registered Agent & Virtual Address | PayTrinity",
  description:
    "Professional registered agent service with premium virtual address. Keep your personal address private while maintaining legal compliance.",
};

export default function RegisteredAgentPage() {
  return (
    <>
      <JsonLd
        data={generateBreadcrumbs("/services/registered-agent", {
          services: "Services",
          "registered-agent": "Registered Agent",
        })}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Registered Agent & Virtual Address",
          description:
            "Professional registered agent service and virtual address for US LLCs and Corporations.",
          provider: { "@type": "Organization", name: "PayTrinity" },
          areaServed: "US",
        }}
      />
      <RegisteredAgentContent />
    </>
  );
}
