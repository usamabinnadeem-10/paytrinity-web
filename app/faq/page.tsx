import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { generateBreadcrumbs } from "@/lib/breadcrumbs";
import { FAQContent } from "./faq-content";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Common questions about ITIN, US business formation, and compliance for international founders.",
};

const faqEntries = [
  {
    q: "What is an ITIN and who needs it?",
    a: "An ITIN (Individual Taxpayer Identification Number) is a tax processing number issued by the IRS for individuals who are required to have a US taxpayer identification number but do not have and are not eligible to obtain a Social Security Number (SSN).",
  },
  {
    q: "How long does the ITIN application process take?",
    a: "ITIN applications typically take 2-4 weeks for IRS processing after submission. Processing times can vary based on IRS workload and completeness of your application.",
  },
  {
    q: "Should I form an LLC or Corporation?",
    a: "Most international founders form LLCs due to simpler compliance requirements and flexible tax treatment. Corporations may be preferable if you plan to raise venture capital or issue stock options.",
  },
  {
    q: "Can non-US citizens form a US company?",
    a: "Yes. US law allows non-citizens and non-residents to form and own US LLCs and Corporations. You do not need a visa, SSN, ITIN, or US address to form a company.",
  },
  {
    q: "What is an EIN and why do I need it?",
    a: "An EIN (Employer Identification Number) is a federal tax ID issued by the IRS for your business entity. It's required for opening US bank accounts, hiring employees, and filing business tax returns.",
  },
  {
    q: "Can I get Stripe or Square as a non-US founder?",
    a: "Yes, but approval is not guaranteed. Stripe and Square review business model, transaction patterns, website quality, documentation completeness, and risk factors.",
  },
  {
    q: "Can I open a US bank account remotely?",
    a: "Some banks allow remote account opening for US entities, but many require in-person visits or video verification. Most banks require ITIN or SSN for non-resident business owners.",
  },
  {
    q: "Do you guarantee approval by the IRS or payment processors?",
    a: "No. We do not and cannot guarantee approval by the IRS, banks, payment processors, or any third party. We help you present applications professionally but cannot influence underwriting decisions.",
  },
];

export default function FAQPage() {
  return (
    <>
      <JsonLd data={generateBreadcrumbs("/faq", { faq: "FAQ" })} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqEntries.map((entry) => ({
            "@type": "Question",
            name: entry.q,
            acceptedAnswer: {
              "@type": "Answer",
              text: entry.a,
            },
          })),
        }}
      />
      <FAQContent />
    </>
  );
}
