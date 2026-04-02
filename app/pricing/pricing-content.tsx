"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Check,
  X,
  ChevronDown,
  ChevronUp,
  Star,
  ArrowRight,
} from "lucide-react";
import { motion } from "motion/react";

const plans = [
  {
    name: "Starter",
    description: "Perfect for first-time founders just needing a legal entity.",
    price: {
      oneTime: "$299",
      recurring: "+$0/year",
    },
    period: "one-time + state fees",
    features: [
      "LLC Formation in any state",
      "Registered Agent (1st Year)",
      "Operating Agreement",
      "US Business Address",
      "Digital Document Delivery",
    ],
    notIncluded: [
      "EIN (Employer ID Number)",
      "Bank Account Setup",
      "Annual State Filings",
      "Federal Tax Filings",
      "Bookkeeping",
    ],
    cta: "Start Formation",
    link: "/contact?plan=starter",
    highlight: false,
    popular: false,
    color: "blue",
  },
  {
    name: "Growth",
    description:
      "The standard for international founders needing banking & EIN.",
    price: {
      oneTime: "$599",
      recurring: "+$199/year",
    },
    period: "billed annually",
    popular: true,
    highlight: true,
    features: [
      "Everything in Starter",
      "EIN (Tax ID) Setup",
      "US Bank Account Assistance",
      "Payment Gateway (Stripe) Support",
      "Annual State Filing Compliance",
      "Expedited Processing",
    ],
    notIncluded: [
      "Federal Tax Filings (1120/5472)",
      "Bookkeeping",
      "Dedicated CPA",
    ],
    cta: "Get Growth",
    link: "/contact?plan=growth",
    color: "cyan",
  },
  {
    name: "Scale",
    description:
      "Complete peace of mind with done-for-you taxes and bookkeeping.",
    price: {
      oneTime: "$1,999",
      recurring: "+$1,500/year",
    },
    period: "billed annually",
    features: [
      "Everything in Growth",
      "Federal Tax Filings (1120/5472)",
      "State Tax Filings",
      "Bookkeeping (Up to 500 txns)",
      "Dedicated Account Manager",
      "Unlimited Tax Consultations",
      "Priority 24/7 Support",
    ],
    notIncluded: [],
    cta: "Go Scale",
    link: "/contact?plan=scale",
    highlight: false,
    popular: false,
    color: "purple",
  },
];

const comparisonFeatures = [
  {
    category: "Formation",
    name: "LLC Formation",
    starter: true,
    growth: true,
    scale: true,
  },
  {
    category: "Formation",
    name: "Registered Agent",
    starter: "1st Year",
    growth: "Included",
    scale: "Included",
  },
  {
    category: "Formation",
    name: "Operating Agreement",
    starter: true,
    growth: true,
    scale: true,
  },
  {
    category: "Banking",
    name: "EIN (Tax ID)",
    starter: false,
    growth: true,
    scale: true,
  },
  {
    category: "Banking",
    name: "Bank Account Setup",
    starter: false,
    growth: true,
    scale: true,
  },
  {
    category: "Banking",
    name: "Stripe/Mercury Support",
    starter: false,
    growth: true,
    scale: true,
  },
  {
    category: "Compliance",
    name: "Annual State Filings",
    starter: false,
    growth: true,
    scale: true,
  },
  {
    category: "Compliance",
    name: "BOI Report Filing",
    starter: false,
    growth: true,
    scale: true,
  },
  {
    category: "Tax & Finance",
    name: "Federal Tax Filing (1120/5472)",
    starter: false,
    growth: false,
    scale: true,
  },
  {
    category: "Tax & Finance",
    name: "Bookkeeping",
    starter: false,
    growth: false,
    scale: true,
  },
  {
    category: "Support",
    name: "Support Level",
    starter: "Email",
    growth: "Priority Chat",
    scale: "Dedicated Manager",
  },
];

const faqs = [
  {
    question: "What are State Fees?",
    answer:
      "State fees are mandatory government fees paid directly to the state where you form your LLC. For example, Wyoming charges $102 and Delaware charges $90. These are separate from our service fees.",
  },
  {
    question: "Can I upgrade later?",
    answer:
      "Yes! Most founders start with the Growth plan to get their EIN and Bank Account, then upgrade to Scale when tax season approaches or when they start generating significant revenue.",
  },
  {
    question: "Do you support non-US residents?",
    answer:
      "Absolutely. 90% of our clients are non-US residents. We specialize in helping international founders from 175+ countries launch and manage US companies remotely.",
  },
  {
    question: "How long does the process take?",
    answer:
      "LLC formation takes 2-5 business days depending on the state. EIN processing for non-US residents typically takes 10-14 business days. We offer expedited services if you're in a rush.",
  },
  {
    question: "Is the Registered Agent fee included?",
    answer:
      "Yes, all our plans include the first year of Registered Agent service for free. After the first year, it renews at our standard rate of $149/year.",
  },
];

function ComparisonCellValue({
  value,
  variant,
}: {
  value: boolean | string;
  variant: "starter" | "growth" | "scale";
}) {
  if (value === true) {
    if (variant === "growth") {
      return (
        <div className="flex justify-center">
          <div className="bg-cyan-500/20 p-1 rounded-full">
            <Check className="w-4 h-4 text-cyan-400" />
          </div>
        </div>
      );
    }
    if (variant === "scale") {
      return (
        <div className="flex justify-center">
          <Check className="w-5 h-5 text-purple-400" />
        </div>
      );
    }
    return (
      <div className="flex justify-center">
        <Check className="w-5 h-5 text-gray-500" />
      </div>
    );
  }

  if (value === false) {
    return <div className="w-1.5 h-1.5 bg-gray-800 mx-auto rounded-full" />;
  }

  const textColor =
    variant === "growth"
      ? "text-cyan-400"
      : variant === "scale"
        ? "text-purple-400"
        : "";

  return (
    <span className={`text-sm font-medium ${textColor}`}>
      {value}
    </span>
  );
}

export function PricingContent() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#020410] text-white font-sans selection:bg-cyan-500 selection:text-white overflow-x-hidden">
      {/* Background Gradients */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-blue-600/10 blur-[120px] rounded-full mix-blend-screen animate-pulse duration-[10000ms]" />
        <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-purple-600/10 blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 hover:bg-white/10 transition-colors cursor-default">
              <span className="flex h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_10px_#22d3ee]" />
              <span className="text-sm font-medium text-cyan-100 tracking-wide">
                Launch for $299 + State Fees
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-[1.1]">
              Simple, transparent
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-gradient-x">
                pricing for founders.
              </span>
            </h1>

            <p className="mt-6 text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-light">
              Choose the plan that fits your stage. From formation to full-scale
              compliance, we&apos;ve got you covered.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col rounded-[2rem] p-8 transition-all duration-300 h-full backdrop-blur-xl ${
                  plan.highlight
                    ? "bg-[#0B1B3D]/80 border-2 border-cyan-500/50 shadow-[0_0_50px_rgba(6,182,212,0.15)] z-20 scale-105"
                    : "bg-white/5 border border-white/10 hover:border-white/20"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-0 right-0 flex justify-center">
                    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-1 rounded-full text-xs font-bold shadow-lg flex items-center gap-1.5 uppercase tracking-wide">
                      <Star className="w-3 h-3 fill-current" /> Most Popular
                    </div>
                  </div>
                )}

                <div className="mb-6">
                  <h3
                    className={`text-2xl font-bold mb-2 ${plan.highlight ? "text-white" : "text-gray-200"}`}
                  >
                    {plan.name}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed h-10">
                    {plan.description}
                  </p>
                </div>

                <div className="mb-8 p-6 bg-black/20 rounded-2xl border border-white/5">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-white">
                      {plan.price.oneTime}
                    </span>
                  </div>
                  <div className="text-sm text-gray-400 mt-2 font-medium flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded bg-white/10 text-xs uppercase tracking-wide">
                      {plan.period}
                    </span>
                    {plan.price.recurring !== "+$0/year" && (
                      <span className="text-cyan-400">
                        {plan.price.recurring}
                      </span>
                    )}
                  </div>
                </div>

                <div className="space-y-5 mb-8 flex-1">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="h-px bg-white/10 flex-1" />
                    <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500">
                      Includes
                    </span>
                    <div className="h-px bg-white/10 flex-1" />
                  </div>
                  <ul className="space-y-4">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <div
                          className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${plan.highlight ? "bg-cyan-500/20 text-cyan-400" : "bg-white/10 text-gray-300"}`}
                        >
                          <Check className="w-3 h-3" />
                        </div>
                        <span className="text-sm text-gray-300 font-medium leading-tight">
                          {feature}
                        </span>
                      </li>
                    ))}
                    {plan.notIncluded.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 opacity-40"
                      >
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-white/5 flex items-center justify-center mt-0.5">
                          <X className="w-3 h-3 text-gray-500" />
                        </div>
                        <span className="text-sm text-gray-500 leading-tight">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href={plan.link}
                  className={`group w-full py-4 px-6 rounded-xl text-center font-bold transition-all duration-300 flex items-center justify-center gap-2 ${
                    plan.highlight
                      ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40"
                      : "bg-white/10 text-white hover:bg-white/20"
                  }`}
                >
                  {plan.cta}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="py-24 relative bg-[#0B1B3D]/30 border-y border-white/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Detailed Breakdown
            </h2>
            <p className="text-gray-400">
              Compare features across all plans.
            </p>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#020410]/50 backdrop-blur-md shadow-2xl">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-white/5">
                  <th className="p-6 md:p-8 text-sm font-bold text-gray-300 w-1/4">
                    Features
                  </th>
                  <th className="p-6 md:p-8 text-sm font-bold text-gray-300 w-1/4 text-center">
                    Starter
                  </th>
                  <th className="p-6 md:p-8 text-sm font-bold text-cyan-400 w-1/4 text-center bg-cyan-900/10 border-x border-cyan-500/10">
                    <span className="flex items-center justify-center gap-2">
                      Growth
                    </span>
                  </th>
                  <th className="p-6 md:p-8 text-sm font-bold text-purple-400 w-1/4 text-center">
                    Scale
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {comparisonFeatures.map((row) => (
                  <tr
                    key={row.name}
                    className="hover:bg-white/[0.02] transition-colors"
                  >
                    <td className="p-6 md:p-8 text-sm font-medium text-gray-300">
                      {row.name}
                      <span className="block text-xs font-normal text-gray-500 mt-1">
                        {row.category}
                      </span>
                    </td>
                    <td className="p-6 md:p-8 text-center text-gray-400">
                      <ComparisonCellValue
                        value={row.starter}
                        variant="starter"
                      />
                    </td>
                    <td className="p-6 md:p-8 text-center bg-cyan-900/5 border-x border-cyan-500/10">
                      <ComparisonCellValue
                        value={row.growth}
                        variant="growth"
                      />
                    </td>
                    <td className="p-6 md:p-8 text-center">
                      <ComparisonCellValue
                        value={row.scale}
                        variant="scale"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 relative z-10">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Common Questions</h2>
            <p className="text-gray-400">
              Everything you need to know before starting.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={faq.question}
                className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/[0.07] transition-all duration-300"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="flex w-full items-center justify-between p-6 text-left focus:outline-none"
                >
                  <span className="text-lg font-medium text-white">
                    {faq.question}
                  </span>
                  {openFaqIndex === index ? (
                    <div className="bg-cyan-500 text-white p-1 rounded-full">
                      <ChevronUp className="h-4 w-4" />
                    </div>
                  ) : (
                    <div className="bg-white/10 text-gray-400 p-1 rounded-full">
                      <ChevronDown className="h-4 w-4" />
                    </div>
                  )}
                </button>
                <div
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                    openFaqIndex === index
                      ? "max-h-48 pb-8 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 blur-[100px] rounded-full" />

        <div className="relative mx-auto max-w-4xl px-6 lg:px-8 text-center z-10">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8">
            Ready to launch?
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto font-light">
            Start your US business today with the most founder-friendly
            platform.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact?plan=growth"
              className="w-full sm:w-auto rounded-full bg-white text-black px-10 py-4 text-base font-bold shadow-xl hover:bg-gray-200 hover:scale-105 transition-all duration-300"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
