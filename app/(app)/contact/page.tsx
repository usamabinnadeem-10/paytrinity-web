import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { generateBreadcrumbs } from "@/lib/breadcrumbs";
import { ContactContent } from "./contact-content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with the PayTrinity team. WhatsApp support, email inquiries, and scheduled consultations for US business formation.",
};

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={generateBreadcrumbs("/contact", { contact: "Contact" })}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Contact PayTrinity",
          description:
            "Get in touch with the PayTrinity team for US business formation inquiries.",
          mainEntity: {
            "@type": "ContactPoint",
            email: "hello@paytrinity.co",
            contactType: "customer support",
          },
        }}
      />
      <ContactContent />
    </>
  );
}
