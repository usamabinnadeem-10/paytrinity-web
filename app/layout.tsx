import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CookieBanner } from "@/components/CookieBanner";
import { JsonLd } from "@/components/JsonLd";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "PayTrinity",
    template: "%s | PayTrinity",
  },
  description:
    "PayTrinity helps international founders start, manage, and grow US businesses with formation, tax, compliance, and banking services.",
  metadataBase: new URL("https://paytrinity.co"),
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "PayTrinity",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <JsonLd
          data={[
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "PayTrinity",
              url: "https://paytrinity.co",
              logo: "https://paytrinity.co/images/logo.png",
              sameAs: [
                "https://www.linkedin.com/company/paytrinity-llc/",
                "https://www.instagram.com/paytrinity.co",
              ],
            },
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "PayTrinity",
              url: "https://paytrinity.co",
            },
          ]}
        />
        <Header />
        <div className="flex flex-1 flex-col">{children}</div>
        <Footer />
        <CookieBanner />
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: "#0B1B3D",
              border: "1px solid rgba(255,255,255,0.1)",
              color: "#fff",
            },
          }}
        />
      </body>
    </html>
  );
}
