import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { HelpArticleContent } from "./help-article-content";
import { JsonLd } from "@/components/JsonLd";
import { generateBreadcrumbs } from "@/lib/breadcrumbs";

const articleMeta: Record<
  string,
  { title: string; category: string; description: string }
> = {
  "itin-timeline": {
    title: "How long does it take to get an ITIN?",
    category: "ITIN & Tax",
    description:
      "Learn about ITIN processing times, standard vs expedited options, and how to avoid common delays.",
  },
  "llc-vs-c-corp": {
    title: "LLC vs C-Corp for International Founders",
    category: "Formation",
    description:
      "Compare LLC and C-Corp structures for international founders covering taxation, compliance, and investor readiness.",
  },
  "mercury-bank-documents": {
    title: "Required documents for Mercury Bank",
    category: "Banking",
    description:
      "Complete list of documents needed to open a Mercury business bank account for your US company.",
  },
  "us-tax-deadlines": {
    title: "Understanding US Tax Deadlines",
    category: "Compliance",
    description:
      "Key IRS filing deadlines for foreign-owned US businesses including Form 1120, 5472, and 1040-NR.",
  },
  "stripe-pakistan": {
    title: "Can I use Stripe from Pakistan?",
    category: "Payments",
    description:
      "Step-by-step guide for Pakistani founders to legally access Stripe through US LLC formation.",
  },
  "renew-registered-agent": {
    title: "How to renew my Registered Agent",
    category: "Services",
    description:
      "Guide to renewing your Registered Agent service to maintain compliance for your US business entity.",
  },
};

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = articleMeta[slug];
  if (!article) return {};

  return {
    title: `${article.title} | PayTrinity Help Center`,
    description: article.description,
  };
}

export function generateStaticParams() {
  return Object.keys(articleMeta).map((slug) => ({ slug }));
}

export default async function HelpArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = articleMeta[slug];

  if (!article) {
    notFound();
  }

  return (
    <>
      <JsonLd
        data={generateBreadcrumbs(`/help-center/${slug}`, {
          "help-center": "Help Center",
          [slug]: article.title,
        })}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: article.title,
          description: article.description,
          author: { "@type": "Organization", name: "PayTrinity" },
          publisher: { "@type": "Organization", name: "PayTrinity" },
        }}
      />
      <HelpArticleContent slug={slug} />
    </>
  );
}
