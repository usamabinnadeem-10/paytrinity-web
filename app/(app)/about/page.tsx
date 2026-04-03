import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { generateBreadcrumbs } from "@/lib/breadcrumbs";
import { AboutContent } from "./about-content";

export const metadata: Metadata = {
  title: "About",
  description:
    "PayTrinity is the lawyer-led platform that simplifies US business formation, banking, and compliance for international founders.",
};

export default function AboutPage() {
  return (
    <>
      <JsonLd data={generateBreadcrumbs("/about", { about: "About" })} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          name: "About PayTrinity",
          description:
            "PayTrinity is the lawyer-led platform that simplifies US business formation, banking, and compliance for international founders.",
        }}
      />
      <AboutContent />
    </>
  );
}
