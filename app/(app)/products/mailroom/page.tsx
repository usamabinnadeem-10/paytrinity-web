import type { Metadata } from "next";
import { MailroomContent } from "./mailroom-content";
import { JsonLd } from "@/components/JsonLd";
import { generateBreadcrumbs } from "@/lib/breadcrumbs";

export const metadata: Metadata = {
  title: "PayTrinity Mailroom - Virtual Business Address",
  description:
    "Get a real US street address for your business. We scan, forward, and deposit checks. Perfect for remote and international founders.",
};

export default function MailroomPage() {
  return (
    <>
      <JsonLd
        data={generateBreadcrumbs("/products/mailroom", {
          products: "Products",
          mailroom: "Mailroom",
        })}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Product",
          name: "PayTrinity Mailroom",
          description:
            "Virtual business address with mail scanning, forwarding, and check deposits for remote and international founders.",
          brand: { "@type": "Organization", name: "PayTrinity" },
        }}
      />
      <MailroomContent />
    </>
  );
}
