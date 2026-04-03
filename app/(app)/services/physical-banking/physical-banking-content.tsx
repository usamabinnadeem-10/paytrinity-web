"use client";

import Link from "next/link";
import {
  CheckCircle2,
  Landmark,
  CreditCard,
  DollarSign,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";

const benefits = [
  {
    icon: Landmark,
    title: "Major Banks",
    description:
      "Open accounts at Chase, Bank of America, Wells Fargo, and other tier-1 national institutions with our concierge service.",
    iconColor: "text-emerald-400",
    bgColor: "bg-emerald-500/10",
    borderColor: "border-emerald-500/20",
  },
  {
    icon: CreditCard,
    title: "Business Credit",
    description:
      "Build a real credit history with a traditional bank. Access business credit cards, lines of credit, and SBA loan eligibility.",
    iconColor: "text-blue-400",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/20",
  },
  {
    icon: DollarSign,
    title: "No Travel Needed",
    description:
      "Our in-person coordination team handles the branch visit on your behalf where possible, or arranges a single streamlined trip.",
    iconColor: "text-green-400",
    bgColor: "bg-green-500/10",
    borderColor: "border-green-500/20",
  },
];

const whyPhysicalBank = [
  "Stability — Physical banks offer FDIC-insured accounts with higher limits, no surprise freezes, and decades of institutional backing.",
  "International Wires — Send and receive international wire transfers without the restrictions and delays common with neobanks.",
  "Advanced Products — Access treasury management, business credit cards, SBA loans, and merchant services unavailable at digital banks.",
];

const requirements = [
  {
    step: 1,
    title: "US Company Documents",
    description:
      "Articles of Organization, EIN confirmation, and Operating Agreement for your LLC or Corporation.",
  },
  {
    step: 2,
    title: "Valid Passport",
    description:
      "A current, unexpired passport for every authorized signer on the account.",
  },
  {
    step: 3,
    title: "Proof of Address",
    description:
      "A recent utility bill, bank statement, or government-issued document showing your residential address.",
  },
  {
    step: 4,
    title: "Business Website",
    description:
      "A live business website or online presence that demonstrates legitimate commercial activity.",
  },
];

export function PhysicalBankingContent() {
  return (
    <div className="min-h-screen bg-[#020410] text-white selection:bg-emerald-500 selection:text-white font-sans">
      {/* Background gradients */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-emerald-600/10 blur-[100px] rounded-full mix-blend-screen opacity-40" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-green-600/10 blur-[100px] rounded-full mix-blend-screen opacity-30" />
        <div className="absolute top-[40%] left-[30%] w-[400px] h-[400px] bg-teal-600/8 blur-[100px] rounded-full mix-blend-screen opacity-20" />
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
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                <span className="text-sm font-medium text-emerald-100 tracking-wide">
                  Premium Banking Access
                </span>
              </div>
              <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl mb-4">
                Open a Physical
              </h1>
              <p className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-emerald-400 to-green-300 bg-clip-text text-transparent mb-6">
                US Bank Account
              </p>
              <p className="text-lg leading-8 text-gray-400 mb-10 max-w-2xl mx-auto">
                Get a real business bank account at Chase, Bank of America, or
                Wells Fargo. Our concierge service handles documentation,
                compliance pre-checks, and branch coordination so international
                founders can access tier-1 US banking.
              </p>
              <Button asChild size="lg">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-8 py-4 text-base font-bold text-white shadow-lg hover:shadow-emerald-500/25 hover:scale-105 transition-all"
                >
                  Open Account
                  <ArrowRight className="h-5 w-5" />
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
            <h2 className="text-4xl font-bold tracking-tight text-white mb-4">
              Why a Physical Bank Account?
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Neobanks are great for getting started, but scaling requires real
              banking infrastructure.
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
                  className="rounded-2xl bg-white/5 border border-white/10 p-8 backdrop-blur-sm hover:bg-white/[0.07] transition-colors text-center"
                >
                  <div
                    className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl ${benefit.bgColor} ${benefit.borderColor} border mb-6`}
                  >
                    <Icon className={`w-7 h-7 ${benefit.iconColor}`} />
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

      {/* Educational 2-col */}
      <section className="py-20 relative z-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold tracking-tight text-white mb-6">
                Fintech vs. Physical Banks
              </h2>
              <p className="text-gray-400 leading-relaxed mb-8">
                Digital neobanks like Mercury and Relay are excellent for day-one
                operations. But as your business grows, you will hit their
                limits: lower transaction caps, restricted international wires,
                no credit products, and the ever-present risk of sudden account
                closures. A physical bank account at a major institution gives
                your business the stability and financial infrastructure it needs
                to scale.
              </p>

              <h3 className="text-xl font-bold text-white mb-4">
                Why You Need a Physical Bank
              </h3>
              <div className="space-y-4 mb-8">
                {whyPhysicalBank.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm leading-relaxed">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>

              <h3 className="text-xl font-bold text-white mb-4">
                The Challenge
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Major US banks have strict Patriot Act and KYC requirements that
                make it difficult for non-resident founders to open accounts
                remotely. Most require an in-person branch visit, specific
                documentation formats, and a pre-existing relationship or
                referral. Our concierge service navigates these requirements so
                you can focus on building your business.
              </p>
            </motion.div>

            {/* Right Column */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="rounded-3xl bg-white/5 border border-white/10 p-8 lg:p-10 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-8">
                  <ShieldCheck className="w-6 h-6 text-emerald-400" />
                  <h3 className="text-2xl font-bold text-white">
                    Requirements for Opening
                  </h3>
                </div>
                <div className="space-y-6">
                  {requirements.map((req, index) => (
                    <motion.div
                      key={req.step}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex items-start gap-4"
                    >
                      <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                        {req.step}
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-white mb-1">
                          {req.title}
                        </h4>
                        <p className="text-gray-400 text-sm leading-relaxed">
                          {req.description}
                        </p>
                      </div>
                    </motion.div>
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
            <h2 className="text-4xl font-bold tracking-tight text-white mb-6">
              Upgrade Your Banking
            </h2>
            <p className="text-lg text-gray-400 mb-10">
              Get the banking infrastructure your business deserves. Our team
              handles the entire process from documentation to account opening.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button asChild size="lg">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-8 py-4 text-base font-bold text-white shadow-lg hover:shadow-emerald-500/25 hover:scale-105 transition-all"
                >
                  Start Application
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link
                  href="https://calendly.com/paytrinity/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-transparent px-8 py-4 text-base font-semibold text-white hover:bg-white/5 transition-colors"
                >
                  Speak to an Expert
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
