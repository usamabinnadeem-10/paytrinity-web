import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { servicesData } from "@/data/services";
import { ServiceDetailContent } from "./service-detail-content";
import { JsonLd } from "@/components/JsonLd";
import { generateBreadcrumbs } from "@/lib/breadcrumbs";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData[slug];
  if (!service) return {};

  return {
    title: `${service.title} | PayTrinity`,
    description: service.description.slice(0, 160),
  };
}

export function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({ slug }));
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = servicesData[slug];

  if (!service) {
    notFound();
  }

  return (
    <>
      <JsonLd
        data={generateBreadcrumbs(`/services/${slug}`, {
          services: "Services",
          [slug]: service.title,
        })}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: service.title,
          description: service.description,
          provider: { "@type": "Organization", name: "PayTrinity" },
          areaServed: "US",
        }}
      />
      <ServiceDetailContent slug={slug} />
    </>
  );
}
