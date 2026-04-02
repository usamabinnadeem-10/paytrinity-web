import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },

  async redirects() {
    return [
      // Products (root → /products/)
      { source: "/start", destination: "/products/start", permanent: true },
      { source: "/mailroom", destination: "/products/mailroom", permanent: true },
      { source: "/agent", destination: "/products/agent", permanent: true },
      { source: "/tax", destination: "/products/tax", permanent: true },
      { source: "/app", destination: "/products/app", permanent: true },
      { source: "/pro", destination: "/products/pro", permanent: true },

      // Services (root → /services/)
      { source: "/itin-application", destination: "/services/itin-application", permanent: true },
      { source: "/us-formation", destination: "/services/us-formation", permanent: true },
      { source: "/stripe-readiness", destination: "/services/stripe-readiness", permanent: true },
      { source: "/registered-agent", destination: "/services/registered-agent", permanent: true },
      { source: "/annual-compliance", destination: "/services/annual-compliance", permanent: true },
      { source: "/physical-banking", destination: "/services/physical-banking", permanent: true },
      { source: "/fulfillment", destination: "/services/fulfillment", permanent: true },

      // SEO pages (root → /guides/)
      { source: "/us-llc-formation-pakistan", destination: "/guides/us-llc-formation-pakistan", permanent: true },
      { source: "/itin-application-pakistan", destination: "/guides/itin-application-pakistan", permanent: true },
      { source: "/f1-visa-strategy-pakistan", destination: "/guides/f1-visa-strategy-pakistan", permanent: true },
      { source: "/e2-investor-visa-pakistan", destination: "/guides/e2-investor-visa-pakistan", permanent: true },
      { source: "/b1-b2-visa-strategy", destination: "/guides/b1-b2-visa-strategy", permanent: true },

      // Removed pages → home
      { source: "/login", destination: "/", permanent: false },
      { source: "/signin", destination: "/", permanent: false },
      { source: "/register", destination: "/", permanent: false },
      { source: "/signup", destination: "/", permanent: false },
      { source: "/get-started", destination: "/", permanent: false },
      { source: "/settings", destination: "/", permanent: false },
      { source: "/profile", destination: "/", permanent: false },
      { source: "/careers", destination: "/", permanent: false },
      { source: "/rewards", destination: "/", permanent: false },
      { source: "/home-new", destination: "/", permanent: false },

      // Dashboard → home (update URL when dashboard app is known)
      { source: "/dashboard/:path*", destination: "/", permanent: false },

      // Visa → home (until visa phase)
      { source: "/visa/:path*", destination: "/", permanent: false },
    ];
  },
};

export default nextConfig;
