import type { Metadata } from "next";
import { FulfillmentContent } from "./fulfillment-content";
import { JsonLd } from "@/components/JsonLd";
import { generateBreadcrumbs } from "@/lib/breadcrumbs";

export const metadata: Metadata = {
  title: "US Fulfillment & Warehousing Service | PayTrinity",
  description:
    "Store inventory in US warehouses and ship to American customers with 2-day delivery. Pick, pack, and returns management for e-commerce.",
};

export default function FulfillmentPage() {
  return (
    <>
      <JsonLd
        data={generateBreadcrumbs("/services/fulfillment", {
          services: "Services",
          fulfillment: "Fulfillment",
        })}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "PayTrinity Fulfillment House",
          description:
            "End-to-end logistics and order fulfillment for international e-commerce sellers.",
          provider: { "@type": "Organization", name: "PayTrinity" },
          areaServed: "US",
        }}
      />
      <FulfillmentContent />
    </>
  );
}
