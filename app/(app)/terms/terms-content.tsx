"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ChevronRight, FileText } from "lucide-react";

const sections = [
  {
    title: "1. Introduction",
    content:
      'Welcome to PayTrinity. These Terms of Service ("Terms") govern your use of our website and services, including ITIN application assistance, US LLC formation, and compliance guidance (collectively, the "Services"). By accessing or using our Services, you agree to be bound by these Terms.',
  },
  {
    title: "2. Services Description",
    content:
      "PayTrinity provides legal-tech solutions to assist international founders in establishing and operating businesses in the United States. We are not a law firm and do not provide legal advice. Our services are designed to facilitate compliance and administrative processes.",
  },
  {
    title: "3. User Obligations",
    content:
      "You agree to provide accurate, current, and complete information during the registration and application process. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.",
  },
  {
    title: "4. Payment and Refunds",
    content:
      "Fees for our Services are described on our website. All payments are due upon ordering. Our refund policy is available separately and is incorporated by reference into these Terms.",
  },
  {
    title: "5. Intellectual Property",
    content:
      "All content, trademarks, and data on this platform, including but not limited to software, text, graphics, and logos, are the property of PayTrinity or its licensors and are protected by applicable intellectual property laws.",
  },
  {
    title: "6. Limitation of Liability",
    content:
      "To the maximum extent permitted by law, PayTrinity shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly.",
  },
  {
    title: "7. Governing Law",
    content:
      "These Terms shall be governed by and construed in accordance with the laws of the State of Delaware, without regard to its conflict of law principles.",
  },
  {
    title: "8. Contact Us",
    content:
      "If you have any questions about these Terms, please contact us at hello@paytrinity.co.",
  },
];

export function TermsContent() {
  return (
    <div className="min-h-screen bg-[#020410] text-white selection:bg-cyan-500 selection:text-white font-sans">
      {/* Background Gradients */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-cyan-600/10 blur-[100px] rounded-full mix-blend-screen opacity-40" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-600/10 blur-[100px] rounded-full mix-blend-screen opacity-30" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
      </div>

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 lg:pt-32 z-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8">
                <FileText className="h-4 w-4 text-cyan-400" />
                <span className="text-sm font-medium text-cyan-100 tracking-wide">
                  Legal
                </span>
              </div>
              <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl mb-6">
                Terms of Service
              </h1>
              <div className="flex items-center justify-center gap-2 text-gray-400 text-sm">
                <Link
                  href="/"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Home
                </Link>
                <ChevronRight className="h-4 w-4" />
                <span className="text-cyan-400">Terms of Service</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 relative z-10">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-8 md:p-12"
          >
            <p className="text-sm text-gray-500 mb-10">
              Last Updated: January 24, 2026
            </p>

            <div className="space-y-10">
              {sections.map((section, index) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <h2 className="text-xl font-bold text-white mb-4">
                    {section.title}
                  </h2>
                  <p className="text-gray-400 leading-relaxed">
                    {section.content}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
