import type { Metadata } from "next";
import { AppContent } from "./app-content";
import { JsonLd } from "@/components/JsonLd";
import { generateBreadcrumbs } from "@/lib/breadcrumbs";

export const metadata: Metadata = {
  title: "Trinity App - Modern Business Dashboard for Global Founders",
  description:
    "Manage your US business from one dashboard. Access state documents, EIN letters, tax reminders, phone services, and more. Bank-grade security with new features added weekly.",
};

export default function AppPage() {
  return (
    <>
      <JsonLd
        data={generateBreadcrumbs("/products/app", {
          products: "Products",
          app: "App",
        })}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Product",
          name: "Trinity App",
          description:
            "Modern business dashboard for managing US companies. Document vault, compliance reminders, multi-company overview, and more.",
          brand: { "@type": "Organization", name: "PayTrinity" },
        }}
      />
      <AppContent />
    </>
  );
}
