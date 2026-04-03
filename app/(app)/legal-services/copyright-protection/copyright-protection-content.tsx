"use client";

import { useState } from "react";
import Link from "next/link";
import { FileText, CheckCircle2, ArrowRight, Plus } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "@/components/ui/button";

const processSteps = [
  {
    number: "01",
    title: "Work Assessment",
    description:
      "We evaluate your creative works and identify which elements qualify for copyright protection.",
  },
  {
    number: "02",
    title: "Registration Filing",
    description:
      "We prepare and file copyright applications with the US Copyright Office for formal protection.",
  },
  {
    number: "03",
    title: "Licensing Strategy",
    description:
      "We develop licensing frameworks that let you monetize while maintaining control over your works.",
  },
  {
    number: "04",
    title: "Enforcement",
    description:
      "We monitor for infringement and take action through DMCA notices, litigation, or settlement.",
  },
];

const offerings = [
  {
    title: "Copyright Registration",
    description:
      "Formal registration with the US Copyright Office for maximum legal protection",
    features: [
      "Expedited registration available",
      "Electronic filing",
      "Certificate of registration",
      "Enhanced legal remedies",
    ],
  },
  {
    title: "Software & Code Protection",
    description:
      "Specialized protection for software, apps, and source code",
    features: [
      "Source code deposit",
      "Object code protection",
      "Open source licensing",
      "Trade secret coordination",
    ],
  },
  {
    title: "Licensing Agreements",
    description:
      "Negotiate and draft agreements that protect your rights while enabling use",
    features: [
      "Exclusive & non-exclusive licenses",
      "Creative Commons structures",
      "Royalty agreements",
      "Work-for-hire documentation",
    ],
  },
  {
    title: "DMCA & Enforcement",
    description:
      "Aggressive protection against online infringement and unauthorized use",
    features: [
      "DMCA takedown notices",
      "ISP correspondence",
      "Platform complaints",
      "Litigation support",
    ],
  },
];

const faqs = [
  {
    question: "What can be copyrighted?",
    answer:
      "Copyright protects original works of authorship fixed in a tangible medium. This includes literary works, software code, musical compositions, photographs, videos, architectural designs, and more. Ideas, facts, and functional elements cannot be copyrighted, but the expression of those ideas can be.",
  },
  {
    question: "Do I need to register my copyright?",
    answer:
      "Copyright protection exists automatically when you create an original work. However, registration with the US Copyright Office provides significant benefits: it's required to sue for infringement in federal court, enables statutory damages and attorney's fees, creates a public record, and provides legal presumptions of ownership and validity.",
  },
  {
    question: "How long does copyright protection last?",
    answer:
      "For works created after 1978, copyright lasts for the life of the author plus 70 years. For works made for hire, corporate authorship, or anonymous/pseudonymous works, protection lasts 95 years from publication or 120 years from creation, whichever is shorter.",
  },
  {
    question:
      "What is 'fair use' and how does it affect my rights?",
    answer:
      "Fair use is a legal doctrine that permits limited use of copyrighted material without permission for purposes like criticism, commentary, news reporting, teaching, scholarship, or research. Courts evaluate fair use based on four factors: purpose and character of use, nature of the work, amount used, and effect on market value. It's a complex, case-by-case determination.",
  },
  {
    question: "Can you help with DMCA takedown notices?",
    answer:
      "Yes, we regularly prepare and send DMCA takedown notices to ISPs, hosting providers, and platforms when your copyrighted work is being infringed online. We handle the entire process including identification, documentation, notice preparation, and follow-up to ensure removal.",
  },
];

export function CopyrightProtectionContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#020410] text-white selection:bg-cyan-500 selection:text-white font-sans">
      {/* Background Gradients */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-cyan-600/10 blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-blue-600/10 blur-[120px] rounded-full mix-blend-screen" />
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
                <FileText className="w-8 h-8 text-cyan-400" />
              </div>
              <div>
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                  Copyright Protection
                </h1>
                <p className="text-xl text-cyan-400 mt-2">
                  Creative Works & Content
                </p>
              </div>
            </div>

            <p className="mt-6 text-xl text-gray-400 max-w-4xl leading-relaxed">
              Safeguard your original creative works with comprehensive copyright
              registration, licensing, and enforcement. We protect software code,
              written content, designs, photography, and other original works of
              authorship.
            </p>

            <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 max-w-4xl">
              <p className="text-lg text-cyan-100 italic">
                &ldquo;Our services are designed to integrate legal protection
                with practical execution.&rdquo;
              </p>
            </div>

            <div className="mt-12">
              <Button asChild size="lg">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 px-8 py-4 text-base font-bold text-white shadow-[0_0_20px_rgba(6,182,212,0.5)] hover:shadow-[0_0_40px_rgba(37,99,235,0.6)] hover:scale-105 transition-all"
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
              Protecting your creative works from creation to enforcement
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
                  <div className="text-6xl font-bold text-cyan-500/20 mb-4">
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
              Complete copyright services from registration to enforcement
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
                className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/30 transition-all group"
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
                      <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0" />
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
              Common questions about copyright protection
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
                    <Plus className="w-5 h-5 text-cyan-400" />
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
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/40 via-blue-900/40 to-cyan-900/40 backdrop-blur-sm" />

            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white">
                Ready to Protect Your Creative Works?
              </h2>
              <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
                Schedule a consultation to discuss your copyright strategy
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
