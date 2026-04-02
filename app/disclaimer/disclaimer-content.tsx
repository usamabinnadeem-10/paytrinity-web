"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ChevronRight, AlertTriangle } from "lucide-react";

const sections = [
  {
    title: "1. Not Legal Advice",
    content:
      "PayTrinity is a technology platform and not a law firm. The information provided on this website and through our services does not constitute legal, tax, or accounting advice. No attorney-client relationship is formed between you and PayTrinity. You should consult with a qualified attorney or tax professional for advice regarding your specific situation.",
  },
  {
    title: "2. No Guarantee of Results",
    content:
      "While we strive to provide accurate and timely services, we cannot guarantee specific outcomes, such as the approval of an ITIN application by the IRS or the acceptance of a company formation by state authorities. Government agencies have the final authority in these matters.",
  },
  {
    title: "3. Third-Party Services",
    content:
      "Our platform may contain links to or integrations with third-party services (e.g., banking partners, payment processors). We do not control and are not responsible for the content, privacy policies, or practices of any third-party services. Your use of such services is at your own risk.",
  },
  {
    title: '4. "As Is" Basis',
    content:
      'Our website and services are provided on an "as is" and "as available" basis without any warranties of any kind, either express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement.',
  },
];

export function DisclaimerContent() {
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
                <AlertTriangle className="h-4 w-4 text-cyan-400" />
                <span className="text-sm font-medium text-cyan-100 tracking-wide">
                  Legal
                </span>
              </div>
              <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl mb-6">
                Disclaimer
              </h1>
              <div className="flex items-center justify-center gap-2 text-gray-400 text-sm">
                <Link
                  href="/"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Home
                </Link>
                <ChevronRight className="h-4 w-4" />
                <span className="text-cyan-400">Disclaimer</span>
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
