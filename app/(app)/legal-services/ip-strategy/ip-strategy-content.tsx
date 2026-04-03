"use client";

import { useState } from "react";
import Link from "next/link";
import { Zap, CheckCircle2, ArrowRight, Plus } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "@/components/ui/button";

const offerings = [
  {
    title: "IP Portfolio Audits",
    description:
      "Comprehensive assessment of your intellectual property assets and protection gaps",
    features: [
      "Asset identification",
      "Protection status review",
      "Gap analysis",
      "Strategic recommendations",
    ],
  },
  {
    title: "Freedom-to-Operate Analysis",
    description:
      "Evaluate risk of infringement before product launch or market entry",
    features: [
      "Patent landscape search",
      "Infringement risk assessment",
      "Design-around strategies",
      "Clearance opinions",
    ],
  },
  {
    title: "IP Due Diligence",
    description:
      "Thorough review of IP assets for M&A, fundraising, or partnership transactions",
    features: [
      "Ownership verification",
      "Validity assessment",
      "Encumbrance review",
      "Valuation support",
    ],
  },
  {
    title: "Licensing & Monetization",
    description:
      "Strategic guidance on leveraging IP assets for revenue generation",
    features: [
      "Licensing programs",
      "Cross-licensing arrangements",
      "Patent pools",
      "Technology transfer",
    ],
  },
];

const faqs = [
  {
    question: "What is an IP strategy and why do I need one?",
    answer:
      "An IP strategy aligns your intellectual property activities with business objectives. It determines what to protect, where to protect it, and how to leverage those rights. Without strategy, companies waste money on unnecessary protection or fail to secure critical assets. A good IP strategy supports fundraising, competitive positioning, M&A readiness, and revenue generation.",
  },
  {
    question: "What is freedom-to-operate analysis?",
    answer:
      "Freedom-to-operate (FTO) analysis assesses whether your product or service would infringe third-party patents. It's critical before product launch, entering new markets, or significant R&D investment. FTO reduces litigation risk and helps you design around problematic patents early when it's still feasible and cost-effective.",
  },
  {
    question: "How do you help with IP due diligence?",
    answer:
      "We conduct comprehensive review of IP assets in M&A, fundraising, or partnership contexts. This includes verifying ownership, assessing validity and enforceability, identifying encumbrances or licensing obligations, reviewing prosecution history, and evaluating alignment with business claims. Our reports help buyers, investors, and partners make informed decisions.",
  },
];

export function IPStrategyContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#020410] text-white selection:bg-amber-500 selection:text-white font-sans">
      {/* Background Gradients */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-amber-600/10 blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-orange-600/10 blur-[120px] rounded-full mix-blend-screen" />
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
                <Zap className="w-8 h-8 text-amber-400" />
              </div>
              <div>
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                  IP Strategy
                </h1>
                <p className="text-xl text-amber-400 mt-2">
                  Intellectual Property
                </p>
              </div>
            </div>

            <p className="mt-6 text-xl text-gray-400 max-w-4xl leading-relaxed">
              Develop comprehensive intellectual property strategies aligned with
              business objectives. We provide strategic counsel on portfolio
              management, licensing, due diligence, and competitive positioning.
            </p>

            <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/20 max-w-4xl">
              <p className="text-lg text-amber-100 italic">
                &ldquo;Our services are designed to integrate legal protection
                with practical execution.&rdquo;
              </p>
            </div>

            <div className="mt-12">
              <Button asChild size="lg">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-600 to-orange-600 px-8 py-4 text-base font-bold text-white shadow-[0_0_20px_rgba(217,119,6,0.5)] hover:shadow-[0_0_40px_rgba(234,88,12,0.6)] hover:scale-105 transition-all"
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
              Strategic IP consulting tailored to your business goals
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
                className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-amber-500/30 transition-all group"
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
                      <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0" />
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
              Common questions about IP strategy
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
                    <Plus className="w-5 h-5 text-amber-400" />
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
            <div className="absolute inset-0 bg-gradient-to-r from-amber-900/40 via-orange-900/40 to-amber-900/40 backdrop-blur-sm" />

            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white">
                Ready to Optimize Your IP Strategy?
              </h2>
              <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
                Schedule a consultation to discuss your intellectual property
                goals
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
