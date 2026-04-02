import type { Metadata } from "next";
import { TestimonialsContent } from "./testimonials-content";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "Trusted by ambitious founders worldwide. See what entrepreneurs say about PayTrinity.",
};

export default function TestimonialsPage() {
  return <TestimonialsContent />;
}
