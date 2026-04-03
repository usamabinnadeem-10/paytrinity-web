"use client";

import Link from "next/link";
import {
  CheckCircle2,
  Shield,
  Truck,
  ShoppingBag,
  Laptop,
  XCircle,
  Check,
  ArrowRight,
  Star,
  HelpCircle,
} from "lucide-react";
import { motion } from "motion/react";

const verticals = [
  {
    icon: Truck,
    title: "Truck Dispatch",
    desc: "Form your LLC, get your EIN, and manage DOT compliance seamlessly.",
    color: "text-blue-400",
    bg: "bg-blue-900/20",
  },
  {
    icon: ShoppingBag,
    title: "E-commerce",
    desc: "Unlock Amazon US, Shopify Payments, and US banking for your store.",
    color: "text-purple-400",
    bg: "bg-purple-900/20",
  },
  {
    icon: Laptop,
    title: "Tech Startups",
    desc: "Raise capital with a Delaware C-Corp and access Silicon Valley banking.",
    color: "text-cyan-400",
    bg: "bg-cyan-900/20",
  },
];

const features = [
  {
    title: "Zero Filings Headaches",
    desc: "We handle your Annual Reports, Franchise Tax, and Statement of Information filings automatically.",
  },
  {
    title: "Tax Season Solved",
    desc: "We prepare and file your annual Federal & State income tax returns. No expensive CPAs needed.",
  },
  {
    title: "Stripe & Banking Maintenance",
    desc: "We keep your company in 'Good Standing' so your Stripe and Mercury accounts never get suspended.",
  },
  {
    title: "Amazon Seller Ready",
    desc: "Get the utility bills and verified documents you need to unblock or create your Amazon Seller account.",
  },
];

export function ProContent() {
  return (
    <div className="min-h-screen bg-[#020410] text-white font-sans selection:bg-purple-500 selection:text-white">
      {/* Background Gradients */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-purple-600/10 blur-[100px] rounded-full mix-blend-screen opacity-40" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-600/10 blur-[100px] rounded-full mix-blend-screen opacity-30" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden z-10">
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-900/20 border border-purple-500/20 mb-8 backdrop-blur-sm">
              <Star className="h-4 w-4 text-purple-400 fill-current animate-pulse" />
              <span className="text-sm font-bold text-purple-200 tracking-wide uppercase">
                The All-In-One Founder Subscription
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-8 leading-tight">
              Run your US Company <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500">
                on Autopilot.
              </span>
            </h1>

            <p className="mt-6 text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-light">
              No expensive lawyers. No confusing tax forms. No blocked Stripe
              accounts.
              <br />
              Just a simple monthly subscription to keep your business running
              smoothly.
            </p>

            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto rounded-full bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-5 text-white font-bold text-xl shadow-[0_0_30px_rgba(124,58,237,0.3)] hover:shadow-[0_0_40px_rgba(124,58,237,0.5)] hover:scale-105 transition-all duration-300 text-center"
              >
                Start for $99/month
              </Link>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <CheckCircle2 className="h-4 w-4 text-green-400" />
                <span>Cancel anytime</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Target Audience / Verticals */}
      <section className="py-20 relative z-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">
              Built for International Entrepreneurs
            </h2>
            <p className="text-gray-400">
              Tailored solutions for your specific business model.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {verticals.map((v, i) => {
              const Icon = v.icon;
              return (
                <motion.div
                  key={i}
                  whileHover={{ y: -5 }}
                  className="bg-white/5 p-8 rounded-3xl border border-white/10 hover:border-purple-500/50 hover:bg-white/[0.07] transition-all backdrop-blur-sm"
                >
                  <div
                    className={`w-14 h-14 ${v.bg} rounded-2xl flex items-center justify-center mb-6`}
                  >
                    <Icon className={`h-7 w-7 ${v.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {v.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed text-sm">
                    {v.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* The Pain vs The Cure */}
      <section className="py-24 relative z-10 bg-white/[0.02] border-y border-white/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Stop worrying about compliance.
              </h2>
              <p className="text-lg text-gray-400 mb-8">
                Running a US business from abroad is hard. One missed letter from
                the IRS or one forgotten state filing can shut down your bank
                account and freeze your Stripe payments.
              </p>
              <div className="space-y-6">
                {features.map((f, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1 h-6 w-6 rounded-full bg-green-500/10 flex items-center justify-center text-green-400 flex-shrink-0 border border-green-500/20">
                      <Check className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white">{f.title}</h4>
                      <p className="text-sm text-gray-400 mt-1">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rotate-3 rounded-3xl opacity-20 blur-xl" />
              <div className="relative bg-[#0B1B3D]/80 border border-white/10 p-8 rounded-3xl shadow-2xl backdrop-blur-md">
                <div className="flex justify-between items-center mb-8 border-b border-white/10 pb-6">
                  <div>
                    <p className="text-sm text-gray-400 uppercase tracking-widest font-semibold">
                      Comparison
                    </p>
                    <h3 className="text-2xl font-bold text-white">
                      Why choose PayTrinity?
                    </h3>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <div className="flex items-center gap-2 mb-4 text-red-400 font-bold">
                      <XCircle size={20} /> Traditional Way
                    </div>
                    <ul className="space-y-4 text-sm text-gray-500">
                      <li className="flex gap-2">
                        <span className="text-red-900/50">&times;</span>{" "}
                        Expensive lawyers
                      </li>
                      <li className="flex gap-2">
                        <span className="text-red-900/50">&times;</span> CPA
                        fees ($1000+)
                      </li>
                      <li className="flex gap-2">
                        <span className="text-red-900/50">&times;</span> Missed
                        deadlines
                      </li>
                      <li className="flex gap-2">
                        <span className="text-red-900/50">&times;</span>{" "}
                        Confusing forms
                      </li>
                      <li className="flex gap-2">
                        <span className="text-red-900/50">&times;</span> Stripe
                        bans
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white/5 p-4 rounded-xl -my-4 border border-white/5">
                    <div className="flex items-center gap-2 mb-4 text-green-400 font-bold">
                      <CheckCircle2 size={20} /> PayTrinity Pro
                    </div>
                    <ul className="space-y-4 text-sm text-gray-300 font-medium">
                      <li className="flex gap-2">
                        <span className="text-green-500">&#10003;</span> Flat
                        monthly rate
                      </li>
                      <li className="flex gap-2">
                        <span className="text-green-500">&#10003;</span> Taxes
                        included
                      </li>
                      <li className="flex gap-2">
                        <span className="text-green-500">&#10003;</span>{" "}
                        Automated filings
                      </li>
                      <li className="flex gap-2">
                        <span className="text-green-500">&#10003;</span>{" "}
                        Dedicated expert
                      </li>
                      <li className="flex gap-2">
                        <span className="text-green-500">&#10003;</span> Audit
                        defense
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Card */}
      <section className="py-24 relative overflow-hidden z-10">
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            One Plan. Complete Peace of Mind.
          </h2>
          <p className="text-xl text-gray-400 mb-12">
            Everything you need to operate your US company, bundled into one
            predictable subscription.
          </p>

          <div className="bg-[#0B1B3D]/80 border border-purple-500/30 text-white rounded-3xl p-8 md:p-12 shadow-[0_0_50px_rgba(124,58,237,0.15)] max-w-lg mx-auto relative overflow-hidden backdrop-blur-xl">
            <div className="absolute top-0 right-0 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-bold px-4 py-1 rounded-bl-xl uppercase tracking-wider shadow-lg">
              Most Popular
            </div>

            <div className="text-center mb-8">
              <div className="text-sm font-semibold text-purple-300 uppercase tracking-widest mb-2">
                PayTrinity Pro
              </div>
              <div className="flex items-center justify-center gap-1">
                <span className="text-6xl font-bold text-white">$99</span>
                <span className="text-gray-400 text-xl font-medium self-end mb-2">
                  /month
                </span>
              </div>
              <p className="text-gray-500 mt-2 text-sm">
                Billed monthly. Cancel anytime.
              </p>
            </div>

            <div className="space-y-4 mb-10 text-left">
              {[
                "Registered Agent Service (All 50 States)",
                "Annual Report & Franchise Tax Filings",
                "Federal & State Tax Return Prep",
                "Amazon Seller Utility Bill Support",
                "Stripe & Banking Maintenance",
                "Dedicated Account Manager",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="mt-0.5 p-1 bg-green-500/20 rounded-full text-green-400">
                    <Check size={12} strokeWidth={4} />
                  </div>
                  <span className="font-medium text-sm text-gray-300">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <Link
              href="/contact"
              className="block w-full rounded-xl bg-white text-[#020410] py-4 font-bold text-lg hover:bg-gray-200 transition-colors shadow-lg text-center"
            >
              Subscribe Now
            </Link>
          </div>

          <p className="mt-8 text-sm text-gray-500">
            *State filing fees are passed through at cost. No markup.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 relative z-10">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "Do I still need a separate accountant?",
                a: "No. PayTrinity Pro includes preparation of your standard annual Federal and State income tax returns. For complex scenarios, we can refer you to specialized partners, but for 95% of e-commerce and tech startups, we have you covered.",
              },
              {
                q: "Can I cancel anytime?",
                a: "Yes. There are no long-term contracts. You can cancel your subscription directly from your dashboard at any time.",
              },
              {
                q: "Does this include the state filing fees?",
                a: "Your $99/mo covers our service fee, tax preparation, and agent fees. The actual money that goes to the state (like the Delaware $300 franchise tax) is charged separately at cost. We don't add any markup to government fees.",
              },
            ].map((faq, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 p-6 rounded-2xl"
              >
                <h4 className="font-bold text-lg text-white mb-2 flex items-center gap-2">
                  <HelpCircle className="h-5 w-5 text-purple-400" />
                  {faq.q}
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
