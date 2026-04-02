import type { Metadata } from "next";
import { AboutContent } from "./about-content";

export const metadata: Metadata = {
  title: "About",
  description:
    "PayTrinity is the lawyer-led platform that simplifies US business formation, banking, and compliance for international founders.",
};

export default function AboutPage() {
  return <AboutContent />;
}
