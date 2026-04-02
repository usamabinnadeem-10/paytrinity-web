"use client";

import Link from "next/link";
import Image from "next/image";
import {
  CheckCircle2,
  ShieldCheck,
  MapPin,
  ArrowRight,
  HelpCircle,
  Zap,
  Lock,
} from "lucide-react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";

const credentials = [
  {
    type: "image" as const,
    src: "/images/irs-logo.png",
    alt: "IRS Logo",
    title: "IRS Certified",
    description: "Certified Acceptance Agent authorized by the IRS",
  },
  {
    type: "image" as const,
    src: "/images/chamber-logo.png",
    alt: "Chamber of Commerce Logo",
    title: "Chamber of Commerce",
    description: "Recognized member of the Chamber of Commerce",
  },
  {
    type: "icon" as const,
    icon: MapPin,
    title: "Physical NJ Office",
    description: "Visit us at our New Jersey office for in-person consultations",
  },
];

const benefits = [
  {
    icon: ShieldCheck,
    title: "Guaranteed Approval",
    description:
      "Our expert team ensures your application is complete and accurate, maximizing your approval rate.",
  },
  {
    icon: Zap,
    title: "Fastest Processing",
    description:
      "We expedite your ITIN application with priority handling and direct IRS submission.",
  },
  {
    icon: Lock,
    title: "Keep Your Passport",
    description:
      "As a Certified Acceptance Agent, we verify your documents in person so you never mail your passport.",
  },
];

const processSteps = [
  {
    step: 1,
    title: "Submit",
    description: "Send us your documents and completed application forms online.",
  },
  {
    step: 2,
    title: "Video Verification",
    description:
      "Complete a quick identity verification call with our certified team.",
  },
  {
    step: 3,
    title: "CAA Certification",
    description:
      "We certify your documents as an IRS Certified Acceptance Agent.",
  },
  {
    step: 4,
    title: "IRS Issuance",
    description: "The IRS processes your application and issues your ITIN.",
  },
];

const faqs = [
  {
    question: "Do I need to mail my passport?",
    answer:
      "No. As an IRS Certified Acceptance Agent, we verify your identity documents in person or via video call. Your passport stays with you throughout the entire process.",
  },
  {
    question: "How long does it take to get an ITIN?",
    answer:
      "Processing typically takes 4-8 weeks after submission to the IRS. We prepare and submit your application within days of receiving your documents.",
  },
  {
    question: "Can I apply for an ITIN without a tax return?",
    answer:
      "In most cases, an ITIN application must be attached to a federal tax return. However, there are exceptions for certain tax treaty benefits and third-party reporting requirements.",
  },
  {
    question: "Does my ITIN expire?",
    answer:
      "Yes. ITINs that have not been used on a federal tax return for three consecutive years expire. We offer renewal services to keep your ITIN active.",
  },
];

export function ITINApplicationContent() {
  return (
    <div className="min-h-screen bg-[#020410] text-white selection:bg-cyan-500 selection:text-white font-sans">
      {/* Background gradients */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-cyan-600/10 blur-[100px] rounded-full mix-blend-screen opacity-40" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-600/10 blur-[100px] rounded-full mix-blend-screen opacity-30" />
      </div>

      {/* Hero */}
      <section className="pt-28 pb-24 lg:pt-36 relative overflow-hidden z-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8">
                <ShieldCheck className="h-4 w-4 text-emerald-400" />
                <span className="text-sm font-medium text-emerald-100 tracking-wide">
                  IRS Certified Acceptance Agent
                </span>
              </div>
              <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl mb-4">
                Get Your ITIN
              </h1>
              <p className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-6">
                Without Mailing Your Passport
              </p>
              <p className="text-lg leading-8 text-gray-400 mb-10 max-w-2xl mx-auto">
                An Individual Taxpayer Identification Number (ITIN) is your key
                to US tax compliance, banking, and payment processing. Our
                certified team handles the entire application process so you can
                focus on your business.
              </p>
              <Button asChild size="lg">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-emerald-600 to-cyan-600 px-8 py-4 text-base font-bold text-white shadow-lg hover:shadow-emerald-500/25 hover:scale-105 transition-all"
                >
                  Start Your Application
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-16 relative z-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white">
              Trusted Credentials
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {credentials.map((cred, index) => (
              <motion.div
                key={cred.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-2xl bg-white/5 border border-white/10 p-6 text-center backdrop-blur-sm hover:bg-white/[0.07] transition-colors"
              >
                <div className="flex items-center justify-center h-16 mb-4">
                  {cred.type === "image" ? (
                    <Image
                      src={cred.src}
                      alt={cred.alt}
                      width={64}
                      height={64}
                      className="object-contain"
                    />
                  ) : (
                    <cred.icon className="w-12 h-12 text-cyan-400" />
                  )}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {cred.title}
                </h3>
                <p className="text-sm text-gray-400">{cred.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why PayTrinity */}
      <section className="py-20 relative z-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold tracking-tight text-white mb-4">
              Why PayTrinity?
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              We make the ITIN process simple, fast, and stress-free.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 mb-6">
                    <Icon className="w-7 h-7 text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {benefit.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4-Step Process */}
      <section className="py-20 relative z-10">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold tracking-tight text-white mb-4">
              How It Works
            </h2>
            <p className="text-lg text-gray-400">
              Four simple steps to your ITIN
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl bg-white/5 border border-white/10 p-8 lg:p-12 backdrop-blur-sm"
          >
            <div className="space-y-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.15 }}
                  className="flex items-start gap-6"
                >
                  <div className="relative flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                      {step.step}
                    </div>
                    {index < processSteps.length - 1 && (
                      <div className="w-0.5 h-12 bg-white/10 mt-2" />
                    )}
                  </div>
                  <div className="pt-1.5">
                    <h3 className="text-xl font-bold text-white mb-1">
                      {step.title}
                    </h3>
                    <p className="text-gray-400">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 relative z-10">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold tracking-tight text-white mb-4 flex items-center justify-center gap-3">
              <HelpCircle className="w-8 h-8 text-cyan-400" />
              Frequently Asked Questions
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur-sm hover:bg-white/[0.07] transition-colors"
              >
                <h3 className="text-lg font-bold text-white mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 border-t border-white/10 bg-white/[0.02] relative z-10">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold tracking-tight text-white mb-6">
              Ready to apply?
            </h2>
            <p className="text-lg text-gray-400 mb-10">
              Get your ITIN without the hassle. Our certified team is ready to
              help.
            </p>
            <Button asChild size="lg">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-emerald-600 to-cyan-600 px-8 py-4 text-base font-bold text-white shadow-lg hover:shadow-emerald-500/25 hover:scale-105 transition-all"
              >
                Start Your ITIN Application
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
