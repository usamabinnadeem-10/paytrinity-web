"use client";

import Link from "next/link";
import {
  CheckCircle2,
  CreditCard,
  Lock,
  Globe,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";

const BENEFITS = [
  {
    icon: CreditCard,
    title: "Verified Accounts",
    description:
      "Get approved with properly structured documentation and verified business credentials that payment processors trust.",
    color: "purple",
    gradient: "from-purple-500/20 to-purple-600/10",
    iconColor: "text-purple-400",
    borderColor: "border-purple-500/20",
  },
  {
    icon: Lock,
    title: "Compliance Proof",
    description:
      "Build a bulletproof compliance file with EIN verification, US address proof, and consistent business documentation.",
    color: "blue",
    gradient: "from-blue-500/20 to-blue-600/10",
    iconColor: "text-blue-400",
    borderColor: "border-blue-500/20",
  },
  {
    icon: Globe,
    title: "Global Access",
    description:
      "Accept payments from customers worldwide with a fully compliant US merchant account setup.",
    color: "green",
    gradient: "from-green-500/20 to-green-600/10",
    iconColor: "text-green-400",
    borderColor: "border-green-500/20",
  },
] as const;

const PITFALLS = [
  "Virtual Address Flags",
  "Inconsistent Details",
  "Lack of SSN/ITIN",
] as const;

const READINESS_ITEMS = [
  {
    number: "01",
    title: "Physical Address Lease",
    description:
      "A real US commercial address that passes verification checks and matches your business filings.",
  },
  {
    number: "02",
    title: "Utility Bill",
    description:
      "Documented proof of address with a utility bill tied to your business location.",
  },
  {
    number: "03",
    title: "EIN Verification",
    description:
      "IRS-issued Employer Identification Number with confirmation letter for processor applications.",
  },
  {
    number: "04",
    title: "US Phone Number",
    description:
      "A dedicated US business phone number for verification calls and account recovery.",
  },
] as const;

export function StripeReadinessContent() {
  return (
    <div className="min-h-screen bg-[#020410] text-white selection:bg-purple-500 selection:text-white font-sans">
      {/* Background gradients */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-purple-600/10 blur-[100px] rounded-full mix-blend-screen opacity-40" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-indigo-600/10 blur-[100px] rounded-full mix-blend-screen opacity-30" />
        <div className="absolute top-[40%] left-[30%] w-[400px] h-[400px] bg-pink-600/8 blur-[120px] rounded-full mix-blend-screen opacity-20" />
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
                <div className="h-2 w-2 rounded-full bg-purple-500" />
                <span className="text-sm font-medium text-purple-100 tracking-wide">
                  Payment Processing Solved
                </span>
              </div>
              <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl mb-6">
                Get Your Business{" "}
                <span className="bg-gradient-to-r from-purple-400 to-pink-300 bg-clip-text text-transparent">
                  Stripe & PayPal Ready
                </span>
              </h1>
              <p className="text-xl leading-8 text-gray-400 mb-10">
                We prepare your documentation, US address, and compliance files
                so your Stripe and PayPal applications are approved the first
                time — no account bans, no surprises.
              </p>
              <Button
                asChild
                className="bg-purple-500 hover:bg-purple-600 text-white font-bold px-8 py-4 text-base rounded-lg shadow-lg hover:shadow-purple-500/25 transition-all hover:-translate-y-0.5"
              >
                <Link href="/contact">
                  Get Verified
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 relative z-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4">
              Why Businesses Choose PayTrinity
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              We handle the complex verification requirements so you can focus on
              growing your business.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {BENEFITS.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className={`relative rounded-2xl bg-gradient-to-b ${benefit.gradient} border ${benefit.borderColor} p-8 backdrop-blur-sm hover:bg-white/[0.04] transition-colors`}
                >
                  <div
                    className={`w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 ${benefit.iconColor}`}
                  >
                    <Icon className="h-6 w-6" />
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

      {/* Educational two-column */}
      <section className="py-20 relative z-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-8">
                Why Stripe Accounts Get Blocked
              </h2>

              <div className="mb-8">
                <h3 className="text-lg font-semibold text-purple-300 mb-4">
                  Common Pitfalls We Fix
                </h3>
                <ul className="space-y-4">
                  {PITFALLS.map((pitfall) => (
                    <li
                      key={pitfall}
                      className="flex items-center gap-3 text-gray-300"
                    >
                      <CheckCircle2 className="h-5 w-5 text-red-400 flex-shrink-0" />
                      <span className="font-medium">{pitfall}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-semibold text-white mb-3">
                  The PayTrinity Solution
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  We build your application from the ground up with real US
                  documentation, verified addresses, and consistent business
                  details that match across every platform. Our clients pass
                  verification because their paperwork is airtight before they
                  ever hit &ldquo;submit.&rdquo;
                </p>
              </div>
            </motion.div>

            {/* Right column */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="rounded-2xl bg-white/5 border border-white/10 p-8 backdrop-blur-sm">
                <h3 className="text-2xl font-bold text-white mb-8">
                  Our Readiness Package
                </h3>
                <div className="space-y-6">
                  {READINESS_ITEMS.map((item) => (
                    <div key={item.number} className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-500/20 border border-purple-500/30 flex items-center justify-center">
                        <span className="text-sm font-bold text-purple-400">
                          {item.number}
                        </span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">
                          {item.title}
                        </h4>
                        <p className="text-sm text-gray-400 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
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
            <ShieldCheck className="h-12 w-12 text-purple-400 mx-auto mb-6" />
            <h2 className="text-4xl font-bold tracking-tight text-white mb-6">
              Accept Payments Globally
            </h2>
            <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">
              Stop worrying about account bans and failed verifications. Let us
              handle your compliance so you can focus on revenue.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button
                asChild
                className="bg-purple-500 hover:bg-purple-600 text-white font-bold px-8 py-4 text-base rounded-lg shadow-lg hover:shadow-purple-500/25 transition-all hover:-translate-y-0.5"
              >
                <Link href="/contact">
                  Get Stripe Ready
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="bg-transparent border-white/20 text-white hover:bg-white/5 font-semibold px-8 py-4 text-base rounded-lg transition-colors"
              >
                <Link
                  href="https://calendly.com/paytrinity/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Speak to an Expert
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
