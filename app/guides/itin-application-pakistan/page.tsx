import type { Metadata } from "next";
import { ITINApplicationPakistanContent } from "./itin-application-pakistan-content";
import { JsonLd } from "@/components/JsonLd";
import { generateBreadcrumbs } from "@/lib/breadcrumbs";

export const metadata: Metadata = {
  title:
    "ITIN Application Pakistan | Get US Tax ID from Pakistan 2025 - IRS CAA",
  description:
    "Fast ITIN application for Pakistani citizens. IRS Certified Acceptance Agent - no passport mailing! 7-14 days processing. Essential for US LLC owners & Stripe. $497.",
};

const faqs = [
  {
    question:
      "Can I get an ITIN from Pakistan without visiting the US?",
    answer:
      "Yes, absolutely! PayTrinity is an IRS Certified Acceptance Agent (CAA), which means we can process your ITIN application entirely from Pakistan. You never need to visit the United States, and most importantly, you don't have to mail your original passport to the IRS.",
  },
  {
    question:
      "How long does ITIN processing take for Pakistani applicants?",
    answer:
      "With our IRS CAA certification, ITIN processing typically takes 7-14 days. Standard applications without a CAA can take 8-12 weeks. Our expedited service saves you months of waiting and eliminates the risk of mailing your passport internationally.",
  },
  {
    question:
      "Do I need to mail my passport for ITIN application from Pakistan?",
    answer:
      "No! This is the major advantage of working with an IRS Certified Acceptance Agent. We certify your passport and supporting documents in Pakistan, so you never have to mail your original passport to the IRS. This protects your travel document and speeds up processing.",
  },
  {
    question:
      "What documents do I need for ITIN application as a Pakistani citizen?",
    answer:
      "You'll need: Valid Pakistani passport, proof of US business activity (LLC documents, business contract, or tax return), proof of Pakistani address, and Form W-7. We guide you through gathering everything and ensure all documents meet IRS requirements.",
  },
  {
    question: "Why do I need an ITIN if I have a US LLC?",
    answer:
      "If you're a single-member LLC owner or receiving distributions from your US company, the IRS requires an ITIN for tax reporting. It's also mandatory for opening bank accounts (Mercury, Wise), activating Stripe, and filing US tax returns as a foreign business owner.",
  },
  {
    question:
      "How much does ITIN application cost from Pakistan?",
    answer:
      "Our ITIN service costs $497 and includes: CAA certification of documents, Form W-7 preparation and review, IRS submission with expedited processing, status tracking, and support until you receive your ITIN. This is significantly faster and safer than DIY applications.",
  },
  {
    question:
      "Can I use ITIN to open a US bank account from Pakistan?",
    answer:
      "Yes! Once you have your ITIN, you can open accounts with Mercury (digital bank), Wise (international transfers), and even traditional US banks. The ITIN serves as your tax identification number for banking purposes when you don't have an SSN.",
  },
  {
    question:
      "What's the difference between ITIN, EIN, and SSN?",
    answer:
      "ITIN is for individuals who need to file US taxes but don't qualify for an SSN (Social Security Number). EIN is for businesses (like your LLC). SSN is for US citizens and residents. As a Pakistani business owner, you need both ITIN (personal) and EIN (business) - but not SSN.",
  },
];

export default function ITINApplicationPakistanPage() {
  return (
    <>
      <JsonLd
        data={generateBreadcrumbs(
          "/guides/itin-application-pakistan",
          {
            guides: "Guides",
            "itin-application-pakistan":
              "ITIN Application Pakistan",
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
            "ITIN Application from Pakistan - Complete Guide",
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
            "Fast ITIN application for Pakistani residents. IRS Certified Acceptance Agent service - no passport mailing required. 7-14 days processing time.",
        }}
      />
      <ITINApplicationPakistanContent />
    </>
  );
}
