"use client";

import { useState } from "react";
import Link from "next/link";
import { Rocket, CheckCircle2, ArrowRight, Plus } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "@/components/ui/button";

const offerings = [
  {
    title: "Entity Formation & Structure",
    description:
      "Choose and form the right legal structure for your technology venture",
    features: [
      "C-Corp, LLC, or Delaware structures",
      "Founder agreements",
      "Equity allocation",
      "Cap table setup",
    ],
  },
  {
    title: "Investment & Fundraising",
    description:
      "Navigate venture capital, angel investment, and other funding transactions",
    features: [
      "Term sheet negotiation",
      "SAFE & convertible notes",
      "Priced equity rounds",
      "Investor rights agreements",
    ],
  },
  {
    title: "Commercial Contracts",
    description:
      "Draft and negotiate agreements that protect your interests",
    features: [
      "SaaS agreements",
      "API & platform terms",
      "Vendor contracts",
      "Partnership agreements",
    ],
  },
  {
    title: "Regulatory Compliance",
    description:
      "Navigate complex regulatory landscapes for technology companies",
    features: [
      "Data privacy (GDPR, CCPA)",
      "Industry-specific regulations",
      "Export controls",
      "Securities compliance",
    ],
  },
];

const faqs = [
  {
    question: "Should I incorporate as a C-Corp or LLC?",
    answer:
      "For venture-backed startups, C-Corps are typically preferred because they allow for preferred stock, employee stock options, and multiple share classes. They're also familiar to investors and acquisition targets. LLCs offer tax benefits and operational flexibility but complicate equity fundraising. We help you choose based on your specific plans for growth, funding, and exit.",
  },
  {
    question:
      "What legal documents do I need when raising investment?",
    answer:
      "For early-stage funding, you'll typically need: term sheet, stock purchase agreement (or SAFE/convertible note), investor rights agreement, voting agreement, and right of first refusal agreement. For seed and Series A rounds, add co-sale agreements and potentially board composition documents. We prepare and negotiate all of these to protect founder interests while closing the deal.",
  },
  {
    question: "How do you help with commercial contracts?",
    answer:
      "We draft customer agreements, vendor contracts, partnership deals, and platform terms that balance commercial objectives with legal protection. For technology companies, this includes SaaS agreements, API terms, data processing addendums, and service level agreements. We also review and negotiate third-party paper to identify and mitigate risks.",
  },
  {
    question:
      "What regulatory compliance issues should tech startups worry about?",
    answer:
      "Key areas include data privacy (GDPR, CCPA, industry-specific requirements), securities regulations (if fundraising), export controls (for certain technologies), consumer protection laws, and industry-specific regulations (fintech, healthtech, etc.). We conduct compliance assessments and implement frameworks that scale with your business while minimizing regulatory risk.",
  },
];

export function TechnologyStartupLawContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#020410] text-white selection:bg-pink-500 selection:text-white font-sans">
      {/* Background Gradients */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-pink-600/10 blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-red-600/10 blur-[120px] rounded-full mix-blend-screen" />
      </div>

      {/* Hero Section */}
      <section className="relative pt-28 pb-20 lg:pt-36 lg:pb-20 px-6 z-10">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/legal-services"
              className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors mb-8"
            >
              <ArrowRight className="w-4 h-4 rotate-180" />
              Back to Legal Services
            </Link>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10">
                <Rocket className="w-8 h-8 text-pink-400" />
              </div>
              <div>
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                  Technology & Startup Law
                </h1>
                <p className="text-xl text-pink-400 mt-2">Legal Counsel</p>
              </div>
            </div>

            <p className="mt-6 text-xl text-gray-400 max-w-4xl leading-relaxed">
              Navigate complex legal landscapes with specialized counsel for
              technology companies and startups. From formation to fundraising to
              exit, we provide strategic legal guidance aligned with your business
              goals.
            </p>

            <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-pink-500/10 to-red-500/10 border border-pink-500/20 max-w-4xl">
              <p className="text-lg text-pink-100 italic">
                &ldquo;Our services are designed to integrate legal protection
                with practical execution.&rdquo;
              </p>
            </div>

            <div className="mt-12">
              <Button asChild size="lg">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-pink-600 to-red-600 px-8 py-4 text-base font-bold text-white shadow-[0_0_20px_rgba(219,39,119,0.5)] hover:shadow-[0_0_40px_rgba(239,68,68,0.6)] hover:scale-105 transition-all"
                >
                  Schedule Consultation
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Offerings Section */}
      <section className="py-20 relative bg-white/[0.02] z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What We Offer
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive legal services for technology companies at every
              stage
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {offerings.map((offering, i) => (
              <motion.div
                key={offering.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-pink-500/30 transition-all group"
              >
                <h3 className="text-2xl font-bold text-white mb-3">
                  {offering.title}
                </h3>
                <p className="text-gray-400 mb-6">{offering.description}</p>
                <ul className="space-y-3">
                  {offering.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 text-sm text-gray-300"
                    >
                      <CheckCircle2 className="w-5 h-5 text-pink-400 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 relative z-10">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-400">
              Common questions about technology and startup law
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-2xl bg-white/5 border border-white/10 overflow-hidden"
              >
                <button
                  onClick={() =>
                    setOpenFaq(openFaq === index ? null : index)
                  }
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                >
                  <span className="font-semibold text-lg pr-8 text-white">
                    {faq.question}
                  </span>
                  <div
                    className={`p-2 rounded-full bg-white/5 transition-transform duration-300 ${openFaq === index ? "rotate-45" : ""}`}
                  >
                    <Plus className="w-5 h-5 text-pink-400" />
                  </div>
                </button>
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 text-gray-400 leading-relaxed border-t border-white/5 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative z-10">
        <div className="max-w-5xl mx-auto px-6">
          <div className="relative rounded-[3rem] overflow-hidden p-12 md:p-24 text-center border border-white/10">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-900/40 via-red-900/40 to-pink-900/40 backdrop-blur-sm" />

            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white">
                Ready to Get Legal Support?
              </h2>
              <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
                Schedule a consultation to discuss your startup&apos;s legal
                needs
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-12 py-5 text-xl font-bold text-[#020410] shadow-2xl hover:shadow-white/20 hover:scale-105 transition-all"
                >
                  Get Started
                </Link>
                <Link
                  href="/legal-services"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-12 py-5 text-xl font-bold text-white hover:bg-white/10 transition-all"
                >
                  View All Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
