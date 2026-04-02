"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Shield,
  DollarSign,
  Globe,
  Users,
  TrendingUp,
  Award,
  BadgeCheck,
  ChevronDown,
  ArrowRight,
  FileText,
  Clock,
} from "lucide-react";
import { motion } from "motion/react";

const benefits = [
  {
    icon: BadgeCheck,
    title: "IRS CAA Certified",
    description:
      "Official IRS Certified Acceptance Agent - expedited processing",
  },
  {
    icon: Shield,
    title: "No Passport Mailing",
    description:
      "Keep your passport safe - we certify documents without mailing originals",
  },
  {
    icon: Clock,
    title: "Fast Processing",
    description:
      "7-14 days average processing time with CAA certification",
  },
  {
    icon: DollarSign,
    title: "Tax Compliance",
    description:
      "Essential for US business owners and treaty benefits",
  },
  {
    icon: Users,
    title: "Banking Access",
    description:
      "Required for Mercury, Stripe, and US bank accounts",
  },
  {
    icon: Globe,
    title: "100% Remote",
    description:
      "Complete process from Pakistan - no US visit needed",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Document Collection",
    description:
      "We help you gather required documents: passport, US business docs, tax forms",
  },
  {
    number: "02",
    title: "CAA Certification",
    description:
      "As IRS Certified Acceptance Agent, we certify your documents without you mailing your passport",
  },
  {
    number: "03",
    title: "Form W-7 Preparation",
    description:
      "We complete your W-7 application with accuracy and IRS compliance",
  },
  {
    number: "04",
    title: "IRS Submission",
    description:
      "Direct submission to IRS with CAA credentials for faster processing",
  },
  {
    number: "05",
    title: "ITIN Delivery",
    description:
      "Receive your 9-digit Individual Taxpayer Identification Number in 7-14 days",
  },
  {
    number: "06",
    title: "Banking Activation",
    description:
      "Use your ITIN for bank accounts, Stripe, and tax filing",
  },
];

const useCases = [
  {
    title: "US LLC Owners",
    description:
      "Required for single-member LLCs and receiving distributions",
    icon: FileText,
  },
  {
    title: "Stripe Account Holders",
    description:
      "Mandatory for Stripe activation as a non-US resident",
    icon: TrendingUp,
  },
  {
    title: "Tax Treaty Benefits",
    description:
      "Claim Pakistan-US tax treaty benefits and reduced withholding",
    icon: Award,
  },
  {
    title: "US Bank Accounts",
    description:
      "Open Mercury, Wise, and traditional US bank accounts",
    icon: DollarSign,
  },
];

const faqs = [
  {
    question:
      "Can I get an ITIN from Pakistan without visiting the US?",
    answer:
      "Yes, absolutely! PayTrinity is an IRS Certified Acceptance Agent (CAA), which means we can process your ITIN application entirely from Pakistan. You never need to visit the United States, and most importantly, you don't have to mail your original passport to the IRS.",
  },
  {
    question:
      "How long does ITIN processing take for Pakistani applicants?",
    answer:
      "With our IRS CAA certification, ITIN processing typically takes 7-14 days. Standard applications without a CAA can take 8-12 weeks. Our expedited service saves you months of waiting and eliminates the risk of mailing your passport internationally.",
  },
  {
    question:
      "Do I need to mail my passport for ITIN application from Pakistan?",
    answer:
      "No! This is the major advantage of working with an IRS Certified Acceptance Agent. We certify your passport and supporting documents in Pakistan, so you never have to mail your original passport to the IRS. This protects your travel document and speeds up processing.",
  },
  {
    question:
      "What documents do I need for ITIN application as a Pakistani citizen?",
    answer:
      "You'll need: Valid Pakistani passport, proof of US business activity (LLC documents, business contract, or tax return), proof of Pakistani address, and Form W-7. We guide you through gathering everything and ensure all documents meet IRS requirements.",
  },
  {
    question: "Why do I need an ITIN if I have a US LLC?",
    answer:
      "If you're a single-member LLC owner or receiving distributions from your US company, the IRS requires an ITIN for tax reporting. It's also mandatory for opening bank accounts (Mercury, Wise), activating Stripe, and filing US tax returns as a foreign business owner.",
  },
  {
    question:
      "How much does ITIN application cost from Pakistan?",
    answer:
      "Our ITIN service costs $497 and includes: CAA certification of documents, Form W-7 preparation and review, IRS submission with expedited processing, status tracking, and support until you receive your ITIN. This is significantly faster and safer than DIY applications.",
  },
  {
    question:
      "Can I use ITIN to open a US bank account from Pakistan?",
    answer:
      "Yes! Once you have your ITIN, you can open accounts with Mercury (digital bank), Wise (international transfers), and even traditional US banks. The ITIN serves as your tax identification number for banking purposes when you don't have an SSN.",
  },
  {
    question:
      "What's the difference between ITIN, EIN, and SSN?",
    answer:
      "ITIN is for individuals who need to file US taxes but don't qualify for an SSN (Social Security Number). EIN is for businesses (like your LLC). SSN is for US citizens and residents. As a Pakistani business owner, you need both ITIN (personal) and EIN (business) - but not SSN.",
  },
];

export function ITINApplicationPakistanContent() {
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
                IRS Certified Acceptance Agent - No Passport
                Mailing Required
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              ITIN Application from{" "}
              <span className="text-[#D4A574]">Pakistan</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-4">
              Get Your US Tax ID in 7-14 Days Without Mailing
              Your Passport
            </p>

            <p className="text-lg text-gray-400 mb-8">
              IRS CAA Certified - Expedited Processing - Required
              for US LLC, Stripe & Banking
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 rounded-lg bg-[#D4A574] text-white font-bold text-lg shadow-xl hover:bg-[#b88b5c] transition-all"
                >
                  Apply for ITIN Now
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
              Why Choose PayTrinity for ITIN Application from
              Pakistan?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Official IRS Certified Acceptance Agent with
              expedited processing
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

      {/* Use Cases */}
      <section className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Who Needs an ITIN from Pakistan?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Essential for Pakistani entrepreneurs doing
              business in the US
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? -20 : 20,
                }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-4 p-6 bg-white/[0.02] rounded-xl border border-white/10 hover:border-[#D4A574]/50 transition-all"
              >
                <div className="flex-shrink-0">
                  <useCase.icon className="w-6 h-6 text-[#D4A574]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-400">
                    {useCase.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white/[0.02] relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Our ITIN Application Process for Pakistani Citizens
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Fast, secure, and completely remote
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
                Get Your ITIN Without the Hassle
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Don&apos;t risk mailing your passport
                internationally. Work with an IRS Certified
                Acceptance Agent.
              </p>
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-5 rounded-lg bg-[#D4A574] text-white font-bold text-xl shadow-xl hover:bg-[#b88b5c] transition-all inline-flex items-center gap-2"
                >
                  Start ITIN Application
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
              Everything you need to know about ITIN application
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
            Ready to Get Your ITIN?
          </h2>
          <p className="text-lg text-gray-400 mb-8">
            IRS CAA Certified - 7-14 Day Processing - No Passport
            Mailing - $497
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <button className="px-8 py-4 rounded-lg bg-[#D4A574] text-white font-bold text-lg hover:bg-[#b88b5c] transition-all">
                Apply Now
              </button>
            </Link>
            <Link href="/contact">
              <button className="px-8 py-4 rounded-lg bg-white/5 border border-white/10 text-white font-bold text-lg hover:bg-white/10 transition-all">
                Schedule Consultation
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
