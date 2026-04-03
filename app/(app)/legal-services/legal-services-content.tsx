"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Shield,
  Scale,
  FileText,
  Zap,
  Rocket,
  ArrowRight,
  CheckCircle2,
  BookOpen,
  Plus,
  Award,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "Patent Filing",
    subtitle: "US & International",
    description:
      "Secure your innovations with comprehensive patent protection across jurisdictions.",
    icon: Shield,
    gradient: "from-blue-500/20 to-cyan-500/20",
    link: "/legal-services/patent-filing",
    features: [
      "Provisional & Utility Patents",
      "PCT Applications",
      "Patent Search & Analysis",
      "Portfolio Management",
    ],
  },
  {
    title: "Trademark Registration",
    subtitle: "Brand Protection",
    description:
      "Protect your brand identity with strategic trademark registration and enforcement.",
    icon: Scale,
    gradient: "from-purple-500/20 to-pink-500/20",
    link: "/legal-services/trademark-registration",
    features: [
      "USPTO Registration",
      "International Marks",
      "Brand Strategy",
      "Infringement Defense",
    ],
  },
  {
    title: "Copyright Protection",
    subtitle: "Creative Works",
    description:
      "Safeguard your original works with comprehensive copyright protection and licensing.",
    icon: FileText,
    gradient: "from-cyan-500/20 to-blue-500/20",
    link: "/legal-services/copyright-protection",
    features: [
      "Copyright Registration",
      "DMCA Protection",
      "Licensing Agreements",
      "Infringement Resolution",
    ],
  },
  {
    title: "IP Strategy",
    subtitle: "Intellectual Property",
    description:
      "Develop comprehensive intellectual property strategies aligned with business objectives.",
    icon: Zap,
    gradient: "from-amber-500/20 to-orange-500/20",
    link: "/legal-services/ip-strategy",
    features: [
      "Portfolio Audits",
      "Freedom-to-Operate",
      "IP Due Diligence",
      "Licensing Strategy",
    ],
  },
  {
    title: "Technology & Startup Law",
    subtitle: "Legal Counsel",
    description:
      "Navigate complex legal landscapes with specialized counsel for technology companies.",
    icon: Rocket,
    gradient: "from-pink-500/20 to-red-500/20",
    link: "/legal-services/technology-startup-law",
    features: [
      "Entity Formation",
      "Investment Agreements",
      "Regulatory Compliance",
      "Commercial Contracts",
    ],
  },
];

const publications = [
  {
    title: "Intellectual Property in the Digital Age",
    institution: "University of London",
    year: "2024",
    description:
      "Examining the intersection of technology, law, and IP protection in modern business environments.",
  },
  {
    title: "Patent Strategy for Technology Startups",
    institution: "London School of Economics",
    year: "2023",
    description:
      "Research on effective patent portfolios for early-stage technology companies.",
  },
  {
    title: "Cross-Border Trademark Protection",
    institution: "University of London",
    year: "2023",
    description:
      "International brand protection strategies for global entrepreneurs.",
  },
];

const faqs = [
  {
    question: "What is the difference between a patent and a trademark?",
    answer:
      "A patent protects inventions and functional innovations for a limited time (typically 20 years), while a trademark protects brand identifiers like names, logos, and slogans indefinitely as long as they're in use. Patents cover 'what something does,' while trademarks cover 'who makes it.'",
  },
  {
    question: "How long does the patent filing process take?",
    answer:
      "The timeline varies significantly. A provisional patent application can be filed quickly (1-2 weeks), while a full utility patent examination typically takes 18-36 months from filing to issuance. International (PCT) applications add additional complexity and time.",
  },
  {
    question:
      "Do I need intellectual property protection if I'm just starting out?",
    answer:
      "Yes, early IP protection is critical. Many startups lose valuable rights by waiting too long. At minimum, file provisional patents for key innovations, register your business name as a trademark, and use proper copyright notices. These foundational steps are far easier and cheaper than recovering lost rights later.",
  },
  {
    question:
      "Can you help with international intellectual property protection?",
    answer:
      "Absolutely. We handle international patent applications through the PCT system, Madrid Protocol trademark registrations, and copyright protection under the Berne Convention. We work with a global network of attorneys to ensure comprehensive protection in your target markets.",
  },
  {
    question:
      "What makes your legal services different from other IP firms?",
    answer:
      "Our services are designed to integrate legal protection with practical execution. We don't just file paperwork\u2014we develop strategies aligned with your business goals, whether you're seeking venture funding, entering new markets, or building a defensible competitive position.",
  },
  {
    question: "How much do legal services typically cost?",
    answer:
      "Costs vary based on complexity. Trademark applications start around $1,500-2,500, provisional patents around $2,000-5,000, and utility patents $8,000-15,000+. We provide transparent pricing upfront and offer fixed-fee arrangements where possible.",
  },
];

export function LegalServicesContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#020410] text-white selection:bg-blue-500 selection:text-white font-sans">
      {/* Background Gradients */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-blue-600/10 blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-purple-600/10 blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-[-20%] left-[20%] w-[800px] h-[800px] bg-cyan-600/10 blur-[120px] rounded-full mix-blend-screen" />
      </div>

      {/* Hero Section */}
      <section className="relative pt-28 pb-20 lg:pt-36 lg:pb-32 px-6 z-10">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8">
              <Scale className="h-4 w-4 text-blue-400" />
              <span className="text-sm font-medium text-blue-100 tracking-wide">
                Legal Services
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-[1.1]">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-400">
                Intellectual Property
              </span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
                & Business Law
              </span>
            </h1>

            <p className="mt-6 text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-light">
              Our services are designed to integrate legal protection with
              practical execution &mdash; helping entrepreneurs and companies
              protect innovations, build brands, and navigate complex regulatory
              environments.
            </p>

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

      {/* Services Grid */}
      <section className="py-32 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our Services
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive legal solutions for technology companies, startups,
              and entrepreneurs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="h-full"
                >
                  <Link href={service.link} className="block h-full">
                    <div className="group relative p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-all overflow-hidden h-full flex flex-col">
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl`}
                      />

                      <div className="relative z-10 flex flex-col h-full">
                        <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 border border-white/10 group-hover:scale-110 transition-transform duration-300">
                          <Icon className="w-6 h-6 text-blue-400" />
                        </div>
                        <h3 className="text-2xl font-bold mb-2 text-white">
                          {service.title}
                        </h3>
                        <p className="text-sm text-blue-400 mb-4">
                          {service.subtitle}
                        </p>
                        <p className="text-gray-400 leading-relaxed mb-6 flex-grow">
                          {service.description}
                        </p>

                        <ul className="space-y-2 mb-6">
                          {service.features.map((feature) => (
                            <li
                              key={feature}
                              className="flex items-center gap-2 text-sm text-gray-300"
                            >
                              <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>

                        <div className="mt-auto flex items-center text-sm font-medium text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-[-10px] group-hover:translate-x-0">
                          Learn more{" "}
                          <ArrowRight className="ml-1 w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section className="py-24 relative overflow-hidden bg-white/[0.02] border-y border-white/5 z-10">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-bold uppercase tracking-wider mb-6">
              <BookOpen className="h-4 w-4" />
              Research & Publications
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Academic Foundation
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our legal practice is informed by rigorous academic research and
              ongoing scholarly engagement
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {publications.map((pub, i) => (
              <motion.div
                key={pub.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group"
              >
                <div className="flex items-start gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-blue-500/20">
                    <Award className="w-5 h-5 text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-400">{pub.institution}</p>
                    <p className="text-xs text-gray-500">{pub.year}</p>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-white mb-3">
                  {pub.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {pub.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 relative z-10">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-400">
                Common questions about our legal services
              </p>
            </motion.div>
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
                Ready to Protect Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
                Schedule a consultation to discuss your intellectual property and
                legal needs
              </p>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-white px-12 py-5 text-xl font-bold text-[#020410] shadow-2xl hover:shadow-white/20 hover:scale-105 transition-all"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
