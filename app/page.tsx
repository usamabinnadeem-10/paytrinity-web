import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { HomeContent } from "./home-content";

export const metadata: Metadata = {
  title: "PayTrinity | US Business Formation for International Founders",
  description:
    "PayTrinity helps international founders start, manage, and grow US businesses with formation, tax, compliance, and banking services.",
};

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "PayTrinity",
          description:
            "PayTrinity helps international founders start, manage, and grow US businesses with formation, tax, compliance, and banking services.",
          provider: {
            "@type": "Organization",
            name: "PayTrinity",
            url: "https://paytrinity.co",
          },
        }}
      />
      <HomeContent />
    </>
  );
}
