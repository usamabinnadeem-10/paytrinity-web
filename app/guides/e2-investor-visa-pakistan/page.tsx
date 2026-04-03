import type { Metadata } from "next";
import { E2InvestorVisaPakistanContent } from "./e2-investor-visa-pakistan-content";
import { JsonLd } from "@/components/JsonLd";
import { generateBreadcrumbs } from "@/lib/breadcrumbs";

export const metadata: Metadata = {
  title:
    "E2 Investor Visa Pakistan | Grenada Citizenship for E2 Treaty Visa 2025",
  description:
    "E2 investor visa for Pakistani entrepreneurs via Grenada citizenship. Live & work in USA with $100K-$200K investment. Family included. Expert E2 visa strategy.",
};

const faqs = [
  {
    question:
      "Can Pakistani citizens apply for E2 investor visa?",
    answer:
      "Pakistan does not have an E2 treaty with the United States, so Pakistani passport holders cannot directly apply for E2 visas. However, the most popular solution is obtaining citizenship from a treaty country like Grenada through their Citizenship by Investment program ($235K investment), then applying for E2 as a Grenada citizen. This is a proven pathway used by many Pakistani entrepreneurs.",
  },
  {
    question:
      "How much do I need to invest for E2 visa from Pakistan?",
    answer:
      "The total investment typically ranges from $335K-$500K: Grenada citizenship by investment costs $235K (single applicant) + US business investment of $100K-$300K depending on the industry. The US business investment must be 'substantial' relative to the total cost of the business. More capital-intensive businesses may require higher investment.",
  },
  {
    question:
      "What is the Grenada citizenship route for E2 visa?",
    answer:
      "Grenada offers citizenship by investment and has an E2 treaty with the USA. Process: (1) Apply for Grenada citizenship ($235K National Transformation Fund or $270K+ real estate), (2) Receive Grenada passport in 6-9 months, (3) Establish US business and invest $100K-$200K+, (4) Apply for E2 visa as Grenada citizen. This is the most reliable pathway for Pakistani entrepreneurs.",
  },
  {
    question:
      "How long does E2 visa last and can it be renewed?",
    answer:
      "E2 visas are typically issued for 5 years (for Grenada citizens) and can be renewed indefinitely as long as your business continues to operate and meet E2 requirements. Many investors maintain E2 status for 10-20+ years. Your spouse and unmarried children under 21 are included on the same visa.",
  },
  {
    question:
      "What type of business qualifies for E2 visa?",
    answer:
      "Qualifying businesses include: restaurants, franchises, retail stores, consulting firms, tech startups, manufacturing, e-commerce with US operations, import/export companies. The business must be active and operational - passive investments like real estate or stocks don't qualify. It must also be substantial enough to support you and your family and create jobs for US workers.",
  },
  {
    question:
      "Can my spouse work in the US on E2 visa?",
    answer:
      "Yes! This is a major benefit. Your spouse (E2 dependent) can apply for Employment Authorization Document (EAD) and work for any employer in the US without restrictions. Your children can attend US schools and universities. However, children cannot work until they get their own work authorization.",
  },
  {
    question:
      "Does E2 visa lead to green card (permanent residence)?",
    answer:
      "E2 is a non-immigrant visa and doesn't directly lead to a green card. However, many E2 holders eventually qualify for green cards through other pathways: EB-2 NIW (National Interest Waiver), EB-1A (Extraordinary Ability), EB-5 (increased investment), or employer sponsorship if their business grows significantly. We can plan a long-term immigration strategy.",
  },
  {
    question:
      "What are the advantages of E2 visa over EB-5 investor visa?",
    answer:
      "E2 advantages: (1) Lower investment ($100K-$200K vs $800K-$1.05M for EB-5), (2) Faster processing (6-12 months vs 2-5+ years for EB-5), (3) More control over business operations, (4) Spouse can work immediately. EB-5 advantages: (1) Leads directly to green card, (2) No need to maintain treaty citizenship. We help you choose the right pathway based on your goals and budget.",
  },
];

export default function E2InvestorVisaPakistanPage() {
  return (
    <>
      <JsonLd
        data={generateBreadcrumbs(
          "/guides/e2-investor-visa-pakistan",
          {
            guides: "Guides",
            "e2-investor-visa-pakistan":
              "E2 Investor Visa Pakistan",
          },
        )}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline:
            "E2 Investor Visa Strategy for Pakistani Entrepreneurs",
          author: {
            "@type": "Organization",
            name: "PayTrinity",
            url: "https://paytrinity.co",
          },
          publisher: {
            "@type": "Organization",
            name: "PayTrinity",
            url: "https://paytrinity.co",
          },
          datePublished: "2025-01-15",
          description:
            "Complete E2 visa pathway for Pakistani nationals via Grenada citizenship. Business planning, investment structuring, and visa application support.",
        }}
      />
      <E2InvestorVisaPakistanContent />
    </>
  );
}
