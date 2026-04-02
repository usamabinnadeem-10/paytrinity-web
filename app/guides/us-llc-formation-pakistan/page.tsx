import type { Metadata } from "next";
import { USLLCFormationPakistanContent } from "./us-llc-formation-pakistan-content";
import { JsonLd } from "@/components/JsonLd";
import { generateBreadcrumbs } from "@/lib/breadcrumbs";

export const metadata: Metadata = {
  title:
    "US LLC Formation Pakistan | Register US Company from Pakistan 2025",
  description:
    "Register your US LLC from Pakistan without visiting the US. Complete remote LLC formation, EIN/ITIN, banking & Stripe setup. IRS CAA certified. Starting $997.",
};

const faqs = [
  {
    question:
      "Can I register a US LLC from Pakistan without visiting the US?",
    answer:
      "Yes, absolutely! PayTrinity specializes in helping Pakistani entrepreneurs register US LLCs completely remotely. You don't need to visit the United States at any point. We handle all documentation, filing, EIN/ITIN applications, and banking setup from Pakistan to the US.",
  },
  {
    question:
      "How long does US LLC formation take for Pakistani residents?",
    answer:
      "The entire process typically takes 2-3 weeks. State approval takes 3-7 business days, EIN approval is immediate to 2 weeks, and ITIN processing takes 7-14 days. Banking setup can take an additional 1-2 weeks depending on the institution.",
  },
  {
    question:
      "Which US state is best for LLC formation from Pakistan?",
    answer:
      "Delaware offers strong legal protections and privacy, Wyoming has no state income tax and low fees, and Florida is ideal for e-commerce. We recommend Delaware for most Pakistani entrepreneurs due to its business-friendly laws, but we analyze your specific business model to suggest the optimal state.",
  },
  {
    question:
      "What documents do I need as a Pakistani citizen to form a US LLC?",
    answer:
      "You'll need: Valid Pakistani passport, proof of address (utility bill or bank statement), business name and description, and registered agent details (we provide this). We guide you through the entire documentation process step-by-step.",
  },
  {
    question:
      "Can I open a US bank account from Pakistan after LLC formation?",
    answer:
      "Yes! We help you open accounts with Mercury (digital bank), Wise (international transfers), and can assist with traditional banks like Bank of America. Mercury and Wise accounts can be opened 100% remotely without visiting the US.",
  },
  {
    question:
      "How much does it cost to register a US LLC from Pakistan?",
    answer:
      "Our complete package starts at $997 and includes: LLC formation, registered agent (1 year), EIN application, ITIN application, operating agreement, banking guidance, and Stripe setup assistance. State filing fees are additional ($90-$300 depending on state).",
  },
  {
    question:
      "Do I need an ITIN for my US LLC as a Pakistani resident?",
    answer:
      "Yes, if you're a single-member LLC or receiving distributions. The ITIN (Individual Taxpayer Identification Number) is required for tax reporting and banking. As an IRS Certified Acceptance Agent, we expedite your ITIN application without requiring you to mail your passport.",
  },
  {
    question: "Will my US LLC help me get a US visa?",
    answer:
      "Having a US LLC can support visa applications (especially E2 investor visa or B1/B2 business visa), but doesn't guarantee approval. We offer comprehensive visa strategy services that combine business formation with proper visa documentation and interview preparation.",
  },
];

export default function USLLCFormationPakistanPage() {
  return (
    <>
      <JsonLd
        data={generateBreadcrumbs(
          "/guides/us-llc-formation-pakistan",
          {
            guides: "Guides",
            "us-llc-formation-pakistan":
              "US LLC Formation Pakistan",
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
            "US LLC Formation from Pakistan - Complete Guide",
          author: {
            "@type": "Organization",
            name: "PayTrinity",
            url: "https://paytrinity.com",
          },
          publisher: {
            "@type": "Organization",
            name: "PayTrinity",
            url: "https://paytrinity.com",
          },
          datePublished: "2025-01-15",
          description:
            "Complete US LLC registration service for Pakistani residents. Remote company formation, EIN/ITIN application, banking setup, and Stripe integration without visiting the US.",
        }}
      />
      <USLLCFormationPakistanContent />
    </>
  );
}
