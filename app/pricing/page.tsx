import type { Metadata } from "next";
import { PricingContent } from "./pricing-content";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Launch your US business starting at $299. Transparent pricing for LLC formation, EIN, banking, and ongoing compliance.",
};

export default function PricingPage() {
  return <PricingContent />;
}
