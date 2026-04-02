"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Shield,
  CheckCircle2,
  ArrowRight,
  Plus,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "@/components/ui/button";

const processSteps = [
  {
    number: "01",
    title: "Initial Consultation",
    description:
      "We assess your invention, conduct prior art searches, and develop a patent strategy aligned with your business goals.",
  },
  {
    number: "02",
    title: "Patent Drafting",
    description:
      "Our attorneys prepare detailed specifications and claims that provide maximum protection while maintaining enforceability.",
  },
  {
    number: "03",
    title: "Filing & Prosecution",
    description:
      "We file your application with the USPTO or WIPO and handle all office actions and examiner correspondence.",
  },
  {
    number: "04",
    title: "Grant & Maintenance",
    description:
      "Once granted, we manage maintenance fees and help you leverage your patent portfolio for business advantage.",
  },
];

const offerings = [
  {
    title: "Provisional Patents",
    description:
      "Secure priority dates quickly and cost-effectively while you refine your invention",
    features: [
      "12-month priority period",
      "Lower initial cost",
      "Flexibility to pivot",
      "International rights preserved",
    ],
  },
  {
    title: "Utility Patents",
    description:
      "Full patent protection for functional innovations and technological improvements",
    features: [
      "20-year protection term",
      "Comprehensive claims",
      "USPTO examination",
      "Enforcement rights",
    ],
  },
  {
    title: "PCT Applications",
    description:
      "International patent protection through the Patent Cooperation Treaty system",
    features: [
      "Access to 150+ countries",
      "Centralized filing",
      "Extended decision timeline",
      "Cost-effective expansion",
    ],
  },
  {
    title: "Patent Portfolio Management",
    description:
      "Strategic oversight of your entire patent portfolio for maximum business value",
    features: [
      "Freedom-to-operate analysis",
      "Competitive intelligence",
      "Licensing opportunities",
      "Maintenance optimization",
    ],
  },
];

const faqs = [
  {
    question:
      "What's the difference between a provisional and utility patent?",
    answer:
      "A provisional patent application is a lower-cost way to establish an early filing date, giving you 12 months to file a full utility patent. It's not examined and doesn't grant enforceable rights, but it lets you use 'patent pending' status and protects your priority while you develop your product. A utility patent is the full application that undergoes examination and, if granted, provides 20 years of enforceable protection.",
  },
  {
    question: "How much does a patent cost?",
    answer:
      "Costs vary significantly based on complexity. A provisional patent typically ranges from $2,000-5,000. A full utility patent application runs $8,000-15,000+ in legal fees, plus $1,000-2,000 in USPTO fees. International (PCT) applications add additional costs. We provide transparent quotes upfront and offer fixed-fee arrangements where possible.",
  },
  {
    question: "Should I file domestically or internationally?",
    answer:
      "It depends on your business strategy and target markets. If you're only operating in the US, a domestic filing may suffice. However, if you plan to manufacture abroad, license internationally, or operate in multiple markets, PCT filing provides cost-effective international coverage. We help you make this decision based on your specific business needs and budget.",
  },
  {
    question: "How long does the patent process take?",
    answer:
      "A provisional application can be filed in 1-2 weeks. Full utility patent examination typically takes 18-36 months from filing to grant. PCT applications add complexity\u2014you have 30 months from priority date to enter national phases. We keep you informed throughout and work to accelerate when possible.",
  },
  {
    question: "What can and cannot be patented?",
    answer:
      "You can patent new, useful, and non-obvious inventions including processes, machines, manufactures, and compositions of matter. You cannot patent abstract ideas, natural phenomena, laws of nature, or obvious variations of existing inventions. Software can be patented if it produces a concrete technical improvement. We assess patentability during our initial consultation.",
  },
];

export function PatentFilingContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#020410] text-white selection:bg-blue-500 selection:text-white font-sans">
      {/* Background Gradients */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-blue-600/10 blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-purple-600/10 blur-[120px] rounded-full mix-blend-screen" />
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
                <Shield className="w-8 h-8 text-blue-400" />
              </div>
              <div>
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                  Patent Filing
                </h1>
                <p className="text-xl text-blue-400 mt-2">
                  US & International Protection
                </p>
              </div>
            </div>

            <p className="mt-6 text-xl text-gray-400 max-w-4xl leading-relaxed">
              Secure your innovations with comprehensive patent protection. We
              handle everything from provisional applications to full utility
              patents and international PCT filings, ensuring your inventions are
              protected across all key jurisdictions.
            </p>

            <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 max-w-4xl">
              <p className="text-lg text-blue-100 italic">
                &ldquo;Our services are designed to integrate legal protection
                with practical execution.&rdquo;
              </p>
            </div>

            <div className="mt-12">
              <Button asChild size="lg">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 text-base font-bold text-white shadow-[0_0_20px_rgba(37,99,235,0.5)] hover:shadow-[0_0_40px_rgba(124,58,237,0.6)] hover:scale-105 transition-all"
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
              A streamlined approach to securing your patent protection
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
                  <div className="text-6xl font-bold text-blue-500/20 mb-4">
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
              Comprehensive patent services tailored to your needs
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
                className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all group"
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
                      <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0" />
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
              Common questions about patent filing
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
                    <Plus className="w-5 h-5 text-blue-400" />
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
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 via-purple-900/40 to-cyan-900/40 backdrop-blur-sm" />

            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white">
                Ready to Protect Your Innovation?
              </h2>
              <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
                Schedule a consultation to discuss your patent strategy
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
