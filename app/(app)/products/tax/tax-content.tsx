"use client";

import Link from "next/link";
import {
  CheckCircle2,
  Calculator,
  ArrowRight,
  Globe,
  FileText,
  AlertTriangle,
  Scale,
  Clock,
} from "lucide-react";
import { motion } from "motion/react";

const steps = [
  {
    title: "Monitor",
    description:
      "We track your sales across all 50 states to determine where you have economic nexus.",
    icon: Globe,
  },
  {
    title: "Calculate",
    description:
      "Our system automatically calculates the precise sales tax rate for every transaction.",
    icon: Calculator,
  },
  {
    title: "File & Remit",
    description:
      "We prepare and file your state tax returns and remit payments on your behalf.",
    icon: FileText,
  },
];

export function TaxContent() {
  return (
    <div className="min-h-screen bg-[#020410] text-white font-sans selection:bg-blue-500 selection:text-white overflow-x-hidden">
      {/* Background Gradients */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-blue-600/10 blur-[120px] rounded-full mix-blend-screen animate-pulse duration-[10000ms]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-indigo-600/10 blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute top-[40%] right-[10%] w-[600px] h-[600px] bg-purple-600/10 blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20 lg:pt-48 lg:pb-32 z-10">
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white text-xs font-bold uppercase tracking-wider mb-6 backdrop-blur-sm">
                New Product
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
                US Sales Tax <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4A574] to-amber-200">
                  On Auto-Pilot.
                </span>
              </h1>
              <p className="text-lg text-blue-100/70 mb-8 max-w-xl leading-relaxed font-light">
                Stop worrying about state nexus laws and filing deadlines.
                PayTrinity Tax handles registration, calculation, and filing
                across all 50 states, so you can focus on selling.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="rounded-full bg-[#D4A574] px-8 py-4 text-[#0B1B3D] font-bold text-lg shadow-[0_0_20px_rgba(212,165,116,0.3)] hover:bg-[#D4A574]/90 transition-all hover:scale-105 flex items-center justify-center gap-2"
                >
                  Start Automating
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link
                  href="/contact"
                  className="rounded-full bg-white/5 border border-white/10 px-8 py-4 text-white font-bold text-lg hover:bg-white/10 transition-all flex items-center justify-center backdrop-blur-sm"
                >
                  Book a Demo
                </Link>
              </div>
              <p className="mt-6 text-sm text-blue-200/50 flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-400" />
                <span>Integrates with Stripe, Shopify, and Amazon</span>
              </p>
            </motion.div>

            {/* Hero Visual */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl bg-white/5 border border-white/10 p-2 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500 backdrop-blur-md">
                <div className="rounded-xl bg-[#0B1B3D]/80 border border-white/5 p-6">
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                        <Calculator className="h-6 w-6 text-blue-400" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-white">
                          Tax Liability
                        </div>
                        <div className="text-xs text-gray-400">
                          Current Quarter
                        </div>
                      </div>
                    </div>
                    <div className="px-3 py-1 bg-green-500/20 text-green-400 text-xs font-bold rounded-full border border-green-500/20">
                      On Track
                    </div>
                  </div>

                  <div className="space-y-4 mb-8">
                    {[
                      { code: "NY", name: "New York", amount: "$1,240.50" },
                      {
                        code: "CA",
                        name: "California",
                        amount: "$3,892.20",
                      },
                      { code: "TX", name: "Texas", amount: "$850.00" },
                    ].map((state) => (
                      <div
                        key={state.code}
                        className="flex justify-between items-center p-4 bg-white/5 rounded-lg shadow-sm border border-white/5 hover:bg-white/10 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <div className="h-8 w-8 rounded-full bg-blue-500/20 flex items-center justify-center text-xs font-bold text-blue-400">
                            {state.code}
                          </div>
                          <span className="font-medium text-white">
                            {state.name}
                          </span>
                        </div>
                        <span className="font-mono font-bold text-white">
                          {state.amount}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 pt-6 border-t border-white/10">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-400">
                        Next filing deadline
                      </span>
                      <span className="text-sm font-bold text-white">
                        April 15th
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-24 relative z-10 border-y border-white/5 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4">
              Why founders dread sales tax
            </h2>
            <p className="text-lg text-gray-400 font-light">
              US sales tax is complicated. 50 states, thousands of
              jurisdictions, and constantly changing rules create a compliance
              minefield.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 p-8 rounded-2xl shadow-lg border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all">
              <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center text-red-400 mb-6">
                <AlertTriangle className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Economic Nexus
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Simply selling enough into a state can trigger tax obligations,
                even without a physical presence. Tracking these thresholds
                manually is impossible.
              </p>
            </div>
            <div className="bg-white/5 p-8 rounded-2xl shadow-lg border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all">
              <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center text-orange-400 mb-6">
                <Scale className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                12,000+ Jurisdictions
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Rates vary by state, county, city, and district. You need to
                calculate the exact rate for every single customer address in
                real-time.
              </p>
            </div>
            <div className="bg-white/5 p-8 rounded-2xl shadow-lg border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all">
              <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center text-purple-400 mb-6">
                <Clock className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Filing Deadlines
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Different states have different filing frequencies (monthly,
                quarterly, annual). Missing a deadline results in hefty penalties
                and interest.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 relative z-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Compliance in 3 easy steps
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-white/10 -z-10" />

            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className="flex flex-col items-center text-center"
                >
                  <div className="w-24 h-24 bg-[#020410] border border-white/10 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-blue-500/10 relative z-10">
                    <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center text-blue-400 border border-blue-500/20">
                      <Icon className="h-8 w-8" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed font-light">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Feature Highlight */}
      <section className="py-24 relative z-10 border-y border-white/5 bg-[#0B1B3D]/30 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white sm:text-4xl mb-6">
                Connects directly to your revenue source
              </h2>
              <p className="text-blue-100/70 text-lg mb-8 font-light">
                PayTrinity Tax integrates seamlessly with the platforms you
                already use. No manual data entry required.
              </p>
              <ul className="space-y-4">
                {[
                  "Real-time transaction syncing",
                  "Automated nexus monitoring",
                  "Product categorization mapping",
                  "Exemption certificate management",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#D4A574]" />
                    <span className="font-medium text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Stripe",
                  "Shopify",
                  "Amazon",
                  "PayPal",
                  "Square",
                  "WooCommerce",
                ].map((platform, i) => (
                  <div
                    key={i}
                    className="bg-white/5 hover:bg-white/10 transition-colors rounded-xl p-6 flex flex-col items-center justify-center text-center h-32 border border-white/5"
                  >
                    <span className="font-bold text-lg text-white">
                      {platform}
                    </span>
                    <div className="mt-2 text-xs text-green-400 flex items-center gap-1">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                      Connected
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative z-10 border-t border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl mb-6">
            Get 100% compliant today
          </h2>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto font-light">
            Don&apos;t let tax headaches slow down your growth. Let PayTrinity
            handle the bureaucracy.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-[#0B1B3D] px-8 py-4 text-white font-bold text-lg shadow-xl hover:bg-[#0B1B3D]/80 transition-all w-full sm:w-auto text-center border border-white/10"
            >
              Get Started
            </Link>
            <Link
              href="/contact"
              className="rounded-full bg-white text-[#0B1B3D] px-8 py-4 font-bold text-lg hover:bg-gray-200 transition-all w-full sm:w-auto text-center"
            >
              Talk to an Expert
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
