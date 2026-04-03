import type { Metadata } from "next";
import { B1B2VisaStrategyContent } from "./b1-b2-visa-strategy-content";
import { JsonLd } from "@/components/JsonLd";
import { generateBreadcrumbs } from "@/lib/breadcrumbs";

export const metadata: Metadata = {
  title:
    "B1 B2 Visa Strategy | US Business & Tourist Visa Interview Preparation 2025",
  description:
    "Expert B1 business & B2 tourist visa strategy. Documentation engineering, interview coaching, DS-160 optimization. Increase your US visitor visa approval chances.",
};

const faqs = [
  {
    question:
      "What is the difference between B1 and B2 visa?",
    answer:
      "B-1 is for business purposes like meetings, conferences, contract negotiations, and consultations. B-2 is for tourism, visiting family/friends, medical treatment, or social events. Most applicants receive a combined B-1/B-2 visa allowing both purposes. During the interview, clearly state your primary purpose while being honest about potential secondary purposes.",
  },
  {
    question:
      "How can I increase my B1/B2 visa approval chances?",
    answer:
      "Four key strategies: (1) Demonstrate strong ties to your home country through employment, property, family, and financial commitments, (2) Show sufficient financial capacity to fund your trip without working in the US, (3) Present a clear, credible purpose with supporting documents like invitation letters and itineraries, (4) Excellent interview performance with honest, confident answers. Our program optimizes all four areas.",
  },
  {
    question:
      "What documents do I need for B1/B2 visa interview?",
    answer:
      "Required: Valid passport, DS-160 confirmation, visa fee receipt, appointment confirmation, passport photo. Supporting: Employment letter, bank statements (6-12 months), property documents, invitation letter, travel itinerary, hotel bookings, family ties proof, previous visa stamps, income tax returns. The exact documents vary by case - we create a customized package for your profile.",
  },
  {
    question:
      "How long does B1/B2 visa processing take?",
    answer:
      "Timeline breakdown: DS-160 completion (1-2 days), visa fee payment (immediate), interview appointment (varies from 2 weeks to 6+ months depending on location and season), interview processing (3-5 business days for approval, up to 2-4 weeks if administrative processing required). We help you book the earliest possible appointment and prepare thoroughly.",
  },
  {
    question:
      "What are common B1/B2 visa rejection reasons?",
    answer:
      "Most common: (1) Insufficient ties to home country - officer suspects you won't return, (2) Inadequate financial documentation or unclear funding source, (3) Weak or inconsistent trip purpose, (4) Poor interview performance or vague answers, (5) Previous immigration violations, (6) Suspected immigrant intent. Our documentation engineering and interview coaching addresses each systematically.",
  },
  {
    question:
      "Can I change my B-2 tourist visa to B-1 business visa?",
    answer:
      "You don't need to 'change' visas - most applicants receive a combined B-1/B-2 stamp that allows both purposes. If you only have B-2 and need business activities, you may need to apply for a new visa. However, if you already have a valid B-2, you can request a B-1 classification at the port of entry by explaining your business purpose (though this isn't guaranteed).",
  },
  {
    question:
      "How long can I stay in the US on a B1/B2 visa?",
    answer:
      "The visa validity (typically 10 years) determines how long you can ENTER the US, not how long you can STAY. Each entry allows up to 6 months stay, granted by the CBP officer at the port of entry. You can request extensions, but frequent long stays or immediate returns may trigger scrutiny. We provide guidance on optimal travel patterns to maintain visa validity.",
  },
  {
    question:
      "Do I need travel insurance for B1/B2 visa application?",
    answer:
      "Travel insurance isn't mandatory for visa approval, but it's highly recommended for the actual trip. Some consular officers view it positively as it shows preparation and financial responsibility. It also protects you from expensive medical bills during your US visit. We can recommend suitable travel insurance providers as part of our pre-departure support.",
  },
];

export default function B1B2VisaStrategyPage() {
  return (
    <>
      <JsonLd
        data={generateBreadcrumbs(
          "/guides/b1-b2-visa-strategy",
          {
            guides: "Guides",
            "b1-b2-visa-strategy": "B1/B2 Visa Strategy",
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
            "B1/B2 Visa Strategy and Interview Preparation",
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
            "Comprehensive B1 business and B2 tourist visa preparation. Documentation strategy, interview coaching, and application optimization for higher approval rates.",
        }}
      />
      <B1B2VisaStrategyContent />
    </>
  );
}
