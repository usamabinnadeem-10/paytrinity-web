import type { MetadataRoute } from "next";

const BASE_URL = "https://paytrinity.co";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = "2026-04-03";

  return [
    // Core pages
    { url: BASE_URL, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE_URL}/about`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/pricing`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/contact`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/faq`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/testimonials`, lastModified, changeFrequency: "monthly", priority: 0.6 },

    // Products
    { url: `${BASE_URL}/products/start`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/products/mailroom`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/products/agent`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/products/tax`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/products/app`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/products/pro`, lastModified, changeFrequency: "monthly", priority: 0.8 },

    // Services
    { url: `${BASE_URL}/services`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/services/itin-application`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/services/us-formation`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/services/stripe-readiness`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/services/registered-agent`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/services/annual-compliance`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/services/physical-banking`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/services/fulfillment`, lastModified, changeFrequency: "monthly", priority: 0.7 },

    // Legal Services
    { url: `${BASE_URL}/legal-services`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/legal-services/patent-filing`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/legal-services/trademark-registration`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/legal-services/copyright-protection`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/legal-services/ip-strategy`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/legal-services/technology-startup-law`, lastModified, changeFrequency: "monthly", priority: 0.7 },

    // Help Center
    { url: `${BASE_URL}/help-center`, lastModified, changeFrequency: "monthly", priority: 0.6 },

    // Guides
    { url: `${BASE_URL}/guides/us-llc-formation-pakistan`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/guides/itin-application-pakistan`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/guides/f1-visa-strategy-pakistan`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/guides/e2-investor-visa-pakistan`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/guides/b1-b2-visa-strategy`, lastModified, changeFrequency: "monthly", priority: 0.7 },

    // Policy Research
    { url: `${BASE_URL}/policy-research`, lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/policy-research/business-economic-policy`, lastModified, changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE_URL}/policy-research/law-regulatory-systems`, lastModified, changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE_URL}/policy-research/federalism-governance`, lastModified, changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE_URL}/policy-research/institutional-fragmentation`, lastModified, changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE_URL}/policy-research/digital-economy-fintech`, lastModified, changeFrequency: "monthly", priority: 0.5 },

    // Resources
    { url: `${BASE_URL}/resources/business-regulation-federal-systems`, lastModified, changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE_URL}/resources/institutional-fragmentation-emerging-markets`, lastModified, changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE_URL}/resources/ip-strategy-global-startups`, lastModified, changeFrequency: "monthly", priority: 0.5 },

    // Legal & Policy pages
    { url: `${BASE_URL}/terms`, lastModified, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE_URL}/privacy`, lastModified, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE_URL}/refund-policy`, lastModified, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE_URL}/kyc-aml-policy`, lastModified, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE_URL}/disclaimer`, lastModified, changeFrequency: "yearly", priority: 0.3 },
  ];
}
