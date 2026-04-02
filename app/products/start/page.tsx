import type { Metadata } from "next";
import { StartContent } from "./start-content";
import { JsonLd } from "@/components/JsonLd";
import { generateBreadcrumbs } from "@/lib/breadcrumbs";

export const metadata: Metadata = {
  title:
    "Get Started with Trinity Legal Chambers | Connect with Haris Bin Nadeem, Attorney & IRS CAA",
  description:
    "Book a consultation with Haris Bin Nadeem for US company formation, ITIN applications, tax compliance, and legal services. IRS Certified Acceptance Agent with 500+ successful clients.",
};

export default function StartPage() {
  return (
    <>
      <JsonLd
        data={generateBreadcrumbs("/products/start", {
          products: "Products",
          start: "Start",
        })}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Product",
          name: "PayTrinity Start",
          description:
            "US company formation, ITIN applications, tax compliance, and legal services from an IRS Certified Acceptance Agent.",
          brand: { "@type": "Organization", name: "PayTrinity" },
        }}
      />
      <StartContent />
    </>
  );
}
