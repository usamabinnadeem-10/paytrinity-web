import type { Metadata } from "next";
import { ContactContent } from "./contact-content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with the PayTrinity team. WhatsApp support, email inquiries, and scheduled consultations for US business formation.",
};

export default function ContactPage() {
  return <ContactContent />;
}
