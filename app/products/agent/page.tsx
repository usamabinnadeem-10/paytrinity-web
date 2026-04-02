import type { Metadata } from "next";
import { AgentContent } from "./agent-content";
import { JsonLd } from "@/components/JsonLd";
import { generateBreadcrumbs } from "@/lib/breadcrumbs";

export const metadata: Metadata = {
  title: "PayTrinity Agent - Registered Agent Service",
  description:
    "Secure Registered Agent service for your US LLC or Corporation. We handle legal correspondence, protect your privacy, and keep you compliant.",
};

export default function AgentPage() {
  return (
    <>
      <JsonLd
        data={generateBreadcrumbs("/products/agent", {
          products: "Products",
          agent: "Agent",
        })}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Product",
          name: "PayTrinity Agent",
          description:
            "Registered Agent service for US LLCs and Corporations. Privacy protection, legal correspondence handling, and compliance in all 50 states.",
          brand: { "@type": "Organization", name: "PayTrinity" },
        }}
      />
      <AgentContent />
    </>
  );
}
