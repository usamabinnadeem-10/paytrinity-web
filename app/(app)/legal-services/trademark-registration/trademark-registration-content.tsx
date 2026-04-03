"use client";

import { useState } from "react";
import Link from "next/link";
import { Scale, CheckCircle2, ArrowRight, Plus } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "@/components/ui/button";

const processSteps = [
  {
    number: "01",
    title: "Comprehensive Search",
    description:
      "We conduct thorough trademark searches to assess availability and identify potential conflicts before filing.",
  },
  {
    number: "02",
    title: "Strategic Filing",
    description:
      "We prepare and file your application with the USPTO or through Madrid Protocol for international protection.",
  },
  {
    number: "03",
    title: "Office Action Response",
    description:
      "We handle all examiner objections and office actions to move your application toward registration.",
  },
  {
    number: "04",
    title: "Registration & Monitoring",
    description:
      "Once registered, we monitor for infringement and handle renewals to maintain your trademark rights.",
  },
];

const offerings = [
  {
    title: "US Trademark Registration",
    description:
      "Complete USPTO trademark application and prosecution services",
    features: [
      "Comprehensive trademark search",
      "Application preparation & filing",
      "Office action responses",
      "Registration & maintenance",
    ],
  },
  {
    title: "International Trademarks",
    description:
      "Madrid Protocol and direct foreign filing for global brand protection",
    features: [
      "Multi-country coverage",
      "Centralized management",
      "Cost-effective expansion",
      "Local counsel coordination",
    ],
  },
  {
    title: "Brand Strategy Consulting",
    description:
      "Strategic guidance on building and protecting a defensible brand portfolio",
    features: [
      "Trademark portfolio planning",
      "Brand clearance strategies",
      "Licensing & co-existence",
      "Anti-counterfeiting measures",
    ],
  },
  {
    title: "Enforcement & Defense",
    description:
      "Protecting your trademarks from infringement and dilution",
    features: [
      "Cease & desist letters",
      "UDRP proceedings",
      "Opposition & cancellation",
      "Litigation support",
    ],
  },
];

const faqs = [
  {
    question: "What can be trademarked?",
    answer:
      "You can trademark words, phrases, logos, slogans, sounds, colors, and even product packaging that identifies your business and distinguishes your goods or services. The mark must be distinctive and not merely descriptive. Common examples include brand names (Apple), logos (Nike swoosh), and slogans (Just Do It).",
  },
  {
    question: "How long does trademark registration take?",
    answer:
      "The USPTO process typically takes 8-12 months from filing to registration, assuming no office actions or oppositions. International filings through Madrid Protocol follow similar timelines in each designated country. We can expedite certain applications through TEAS Plus or other fast-track options.",
  },
  {
    question: "Do I need to register my trademark?",
    answer:
      "While you gain some common law rights by using a mark in commerce, federal registration provides significant advantages: nationwide protection, legal presumption of ownership, exclusive rights to the mark, public notice of your claim, and the ability to sue in federal court. For most businesses, registration is essential.",
  },
  {
    question: "How much does trademark registration cost?",
    answer:
      "USPTO filing fees range from $250-350 per class of goods/services. Attorney fees typically run $1,500-2,500 for a comprehensive search and single-class application. Additional classes cost $350-500 each. International filings add costs per country. We provide transparent quotes upfront.",
  },
  {
    question: "What's the difference between \u00AE and \u2122?",
    answer:
      "The \u00AE symbol indicates a federally registered trademark with the USPTO. You can only use it after your registration is granted. The \u2122 symbol indicates an unregistered trademark\u2014you can use it immediately to claim common law rights. \u2120 is used for service marks (services rather than goods).",
  },
];

export function TrademarkRegistrationContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#020410] text-white selection:bg-purple-500 selection:text-white font-sans">
      {/* Background Gradients */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-purple-600/10 blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-pink-600/10 blur-[120px] rounded-full mix-blend-screen" />
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
                <Scale className="w-8 h-8 text-purple-400" />
              </div>
              <div>
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                  Trademark Registration
                </h1>
                <p className="text-xl text-purple-400 mt-2">
                  Brand Protection & Enforcement
                </p>
              </div>
            </div>

            <p className="mt-6 text-xl text-gray-400 max-w-4xl leading-relaxed">
              Protect your brand identity with comprehensive trademark
              registration and enforcement services. We handle domestic and
              international trademark applications, ensuring your business name,
              logos, and slogans are protected across all key markets.
            </p>

            <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 max-w-4xl">
              <p className="text-lg text-purple-100 italic">
                &ldquo;Our services are designed to integrate legal protection
                with practical execution.&rdquo;
              </p>
            </div>

            <div className="mt-12">
              <Button asChild size="lg">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 text-base font-bold text-white shadow-[0_0_20px_rgba(147,51,234,0.5)] hover:shadow-[0_0_40px_rgba(219,39,119,0.6)] hover:scale-105 transition-all"
                >
                  Schedule Consultation
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our Process
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A systematic approach to brand protection
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative"
              >
                <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors h-full">
                  <div className="text-6xl font-bold text-purple-500/20 mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed text-sm">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
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
              Complete trademark services from search to enforcement
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
                className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/30 transition-all group"
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
                      <CheckCircle2 className="w-5 h-5 text-purple-400 flex-shrink-0" />
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
              Common questions about trademark registration
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
                    <Plus className="w-5 h-5 text-purple-400" />
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
            <div className="absolute inset-0 bg-gradient-to-r from-purple-900/40 via-pink-900/40 to-purple-900/40 backdrop-blur-sm" />

            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white">
                Ready to Protect Your Brand?
              </h2>
              <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
                Schedule a consultation to discuss your trademark strategy
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
