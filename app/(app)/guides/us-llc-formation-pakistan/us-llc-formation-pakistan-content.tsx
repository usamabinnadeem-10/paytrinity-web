"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Shield,
  DollarSign,
  Globe,
  Users,
  TrendingUp,
  Package,
  BadgeCheck,
  ChevronDown,
  ArrowRight,
} from "lucide-react";
import { motion } from "motion/react";

const benefits = [
  {
    icon: Shield,
    title: "Limited Liability Protection",
    description:
      "Protect your personal assets from business liabilities",
  },
  {
    icon: DollarSign,
    title: "Tax Benefits",
    description:
      "Access US banking, Stripe, and international payment processors",
  },
  {
    icon: Globe,
    title: "Global Credibility",
    description:
      "Establish trust with international clients and partners",
  },
  {
    icon: Users,
    title: "No US Visit Required",
    description:
      "Complete entire process remotely from Pakistan",
  },
  {
    icon: TrendingUp,
    title: "Business Growth",
    description:
      "Scale your SaaS, e-commerce, or consulting business globally",
  },
  {
    icon: Package,
    title: "Complete Package",
    description:
      "EIN, ITIN, banking, and compliance included",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Free Consultation",
    description:
      "Discuss your business goals and choose the right state (Delaware, Wyoming, or Florida)",
  },
  {
    number: "02",
    title: "Document Preparation",
    description:
      "We prepare all formation documents and file with the state",
  },
  {
    number: "03",
    title: "EIN & ITIN Application",
    description:
      "Obtain your Employer Identification Number and Individual Taxpayer ID",
  },
  {
    number: "04",
    title: "Banking Setup",
    description:
      "Open accounts with Mercury, Wise, or traditional US banks",
  },
  {
    number: "05",
    title: "Stripe Integration",
    description:
      "Get your payment processor activated and ready",
  },
  {
    number: "06",
    title: "Ongoing Support",
    description:
      "Annual compliance, tax filing, and registered agent services",
  },
];

const faqs = [
  {
    question:
      "Can I register a US LLC from Pakistan without visiting the US?",
    answer:
      "Yes, absolutely! PayTrinity specializes in helping Pakistani entrepreneurs register US LLCs completely remotely. You don't need to visit the United States at any point. We handle all documentation, filing, EIN/ITIN applications, and banking setup from Pakistan to the US.",
  },
  {
    question:
      "How long does US LLC formation take for Pakistani residents?",
    answer:
      "The entire process typically takes 2-3 weeks. State approval takes 3-7 business days, EIN approval is immediate to 2 weeks, and ITIN processing takes 7-14 days. Banking setup can take an additional 1-2 weeks depending on the institution.",
  },
  {
    question:
      "Which US state is best for LLC formation from Pakistan?",
    answer:
      "Delaware offers strong legal protections and privacy, Wyoming has no state income tax and low fees, and Florida is ideal for e-commerce. We recommend Delaware for most Pakistani entrepreneurs due to its business-friendly laws, but we analyze your specific business model to suggest the optimal state.",
  },
  {
    question:
      "What documents do I need as a Pakistani citizen to form a US LLC?",
    answer:
      "You'll need: Valid Pakistani passport, proof of address (utility bill or bank statement), business name and description, and registered agent details (we provide this). We guide you through the entire documentation process step-by-step.",
  },
  {
    question:
      "Can I open a US bank account from Pakistan after LLC formation?",
    answer:
      "Yes! We help you open accounts with Mercury (digital bank), Wise (international transfers), and can assist with traditional banks like Bank of America. Mercury and Wise accounts can be opened 100% remotely without visiting the US.",
  },
  {
    question:
      "How much does it cost to register a US LLC from Pakistan?",
    answer:
      "Our complete package starts at $997 and includes: LLC formation, registered agent (1 year), EIN application, ITIN application, operating agreement, banking guidance, and Stripe setup assistance. State filing fees are additional ($90-$300 depending on state).",
  },
  {
    question:
      "Do I need an ITIN for my US LLC as a Pakistani resident?",
    answer:
      "Yes, if you're a single-member LLC or receiving distributions. The ITIN (Individual Taxpayer Identification Number) is required for tax reporting and banking. As an IRS Certified Acceptance Agent, we expedite your ITIN application without requiring you to mail your passport.",
  },
  {
    question: "Will my US LLC help me get a US visa?",
    answer:
      "Having a US LLC can support visa applications (especially E2 investor visa or B1/B2 business visa), but doesn't guarantee approval. We offer comprehensive visa strategy services that combine business formation with proper visa documentation and interview preparation.",
  },
];

export function USLLCFormationPakistanContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#020410] text-white selection:bg-blue-500 selection:text-white font-sans">
      {/* Background Gradients */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-blue-600/10 blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-purple-600/10 blur-[120px] rounded-full mix-blend-screen" />
      </div>

      {/* Hero Section */}
      <section className="relative pt-28 pb-20 lg:pt-36 lg:pb-28 px-6 z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm text-sm mb-6">
              <BadgeCheck className="w-4 h-4 text-[#D4A574]" />
              <span>
                IRS CAA Certified - 100+ Pakistani Entrepreneurs
                Served
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              US LLC Formation from{" "}
              <span className="text-[#D4A574]">Pakistan</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-4">
              Register Your US Company Remotely Without Visiting
              America
            </p>

            <p className="text-lg text-gray-400 mb-8">
              Complete LLC formation - EIN & ITIN - US Banking -
              Stripe Setup - Annual Compliance
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 rounded-lg bg-[#D4A574] text-white font-bold text-lg shadow-xl hover:bg-[#b88b5c] transition-all"
                >
                  Start Your US LLC Today
                </motion.button>
              </Link>
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 rounded-lg bg-white/5 border border-white/10 text-white font-bold text-lg hover:bg-white/10 transition-all backdrop-blur-sm"
                >
                  Free Consultation
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white/[0.02] relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Why Pakistani Entrepreneurs Choose US LLC Formation
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Access global markets, payment processors, and
              banking infrastructure
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-[#D4A574]/50 transition-all"
              >
                <div className="mb-4">
                  <benefit.icon className="w-8 h-8 text-[#D4A574]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-400">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Our US LLC Formation Process for Pakistani Residents
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Simple, transparent, and completely remote
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-white/5 border border-white/10 p-8 rounded-2xl h-full">
                  <div className="text-5xl font-bold text-[#D4A574] mb-4 opacity-50">
                    {step.number}
                  </div>
                  <h3 className="text-2xl font-bold mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-300">
                    {step.description}
                  </p>
                </div>
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
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Register Your US LLC from Pakistan?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join 100+ successful Pakistani entrepreneurs
                who&apos;ve launched their US businesses with
                PayTrinity
              </p>
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-5 rounded-lg bg-[#D4A574] text-white font-bold text-xl shadow-xl hover:bg-[#b88b5c] transition-all inline-flex items-center gap-2"
                >
                  Start My LLC Formation
                  <ArrowRight className="w-6 h-6" />
                </motion.button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 relative z-10">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-400">
              Everything you need to know about US LLC formation
              from Pakistan
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="border border-white/10 rounded-xl overflow-hidden hover:border-[#D4A574]/50 transition-all"
              >
                <button
                  onClick={() =>
                    setOpenFaq(openFaq === index ? null : index)
                  }
                  className="w-full px-8 py-6 flex items-center justify-between text-left bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <h3 className="text-lg font-bold text-white pr-4">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`w-6 h-6 text-[#D4A574] flex-shrink-0 transition-transform ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-8 py-6 bg-white/[0.02] border-t border-white/10">
                    <p className="text-gray-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-white/[0.02] relative z-10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Start Your American Business Journey Today
          </h2>
          <p className="text-lg text-gray-400 mb-8">
            Expert guidance from Lahore to New Jersey - IRS CAA
            Certified - 100% Remote Process
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <button className="px-8 py-4 rounded-lg bg-[#D4A574] text-white font-bold text-lg hover:bg-[#b88b5c] transition-all">
                Get Started Now
              </button>
            </Link>
            <Link href="/contact">
              <button className="px-8 py-4 rounded-lg bg-white/5 border border-white/10 text-white font-bold text-lg hover:bg-white/10 transition-all">
                Schedule Free Call
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
