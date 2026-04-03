import type { Metadata } from "next";
import { IPStrategyGlobalStartupsContent } from "./ip-strategy-global-startups-content";
import { JsonLd } from "@/components/JsonLd";
import { generateBreadcrumbs } from "@/lib/breadcrumbs";

export const metadata: Metadata = {
  title: "IP Strategy for Global Startups | PayTrinity Research",
  description:
    "Comprehensive guide to intellectual property strategy for startups operating across borders, covering patents, trademarks, and international IP protection frameworks.",
};

export default function IPStrategyGlobalStartupsPage() {
  return (
    <>
      <JsonLd
        data={generateBreadcrumbs(
          "/resources/ip-strategy-global-startups",
          {
            resources: "Resources",
            "ip-strategy-global-startups": "IP Strategy for Global Startups",
          },
        )}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "IP Strategy for Global Startups",
          author: { "@type": "Organization", name: "PayTrinity" },
          datePublished: "2025-02-01",
          publisher: {
            "@type": "Organization",
            name: "PayTrinity",
            url: "https://paytrinity.co",
          },
          description:
            "Comprehensive guide to intellectual property strategy for startups operating across borders, covering patents, trademarks, and international IP protection frameworks.",
        }}
      />
      <IPStrategyGlobalStartupsContent />
    </>
  );
}
