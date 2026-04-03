import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { generateBreadcrumbs } from "@/lib/breadcrumbs";
import { TestimonialsContent } from "./testimonials-content";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "Trusted by ambitious founders worldwide. See what entrepreneurs say about PayTrinity.",
};

export default function TestimonialsPage() {
  return (
    <>
      <JsonLd
        data={generateBreadcrumbs("/testimonials", {
          testimonials: "Testimonials",
        })}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "PayTrinity Testimonials",
          description:
            "Trusted by ambitious founders worldwide. See what entrepreneurs say about PayTrinity.",
        }}
      />
      <TestimonialsContent />
    </>
  );
}
