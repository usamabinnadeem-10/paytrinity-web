import type { Metadata } from "next";
import { FAQContent } from "./faq-content";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Common questions about ITIN, US business formation, and compliance for international founders.",
};

export default function FAQPage() {
  return <FAQContent />;
}
