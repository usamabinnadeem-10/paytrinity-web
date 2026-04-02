"use client";

import {
  Calendar,
  CheckCircle2,
  Globe,
  MessageCircle,
  Shield,
  Target,
  Users,
} from "lucide-react";
import Image from "next/image";

import { CountUpStat } from "@/components/CountUpStat";
import { ScrollReveal } from "@/components/ScrollReveal";

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      role="img"
      aria-labelledby="linkedin-icon-title"
    >
      <title id="linkedin-icon-title">LinkedIn</title>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

interface Stat {
  number: number;
  prefix?: string;
  suffix: string;
  label: string;
}

const stats: readonly Stat[] = [
  { number: 500, suffix: "+", label: "Founders Served" },
  { number: 30, suffix: "+", label: "Countries Supported" },
  { number: 100, suffix: "%", label: "Lawyer-Led" },
  { number: 10, prefix: "$", suffix: "M+", label: "Client Revenue Enabled" },
];

const values = [
  {
    key: "compliance",
    icon: Shield,
    title: "Compliance First",
    description:
      "We prioritize long-term legitimacy over quick shortcuts. Every recommendation is grounded in legal reality.",
    color: "bg-blue-500/10 text-blue-400",
    iconColor: "text-blue-400",
  },
  {
    key: "founder-centric",
    icon: Users,
    title: "Founder Centric",
    description:
      "Built specifically for international entrepreneurs. We understand the unique friction of cross-border business.",
    color: "bg-amber-500/10 text-amber-400",
    iconColor: "text-amber-400",
  },
  {
    key: "transparent",
    icon: Target,
    title: "Transparent",
    description:
      "No hidden fees or false promises. We tell you exactly what is possible and what the limitations are.",
    color: "bg-emerald-500/10 text-emerald-400",
    iconColor: "text-emerald-400",
  },
  {
    key: "global-access",
    icon: Globe,
    title: "Global Access",
    description:
      "Democratizing access to the US market for founders from Pakistan, GCC, UK, EU, and beyond.",
    color: "bg-indigo-500/10 text-indigo-400",
    iconColor: "text-indigo-400",
  },
] as const;

const expertiseItems = [
  "US Business Entity Formation",
  "ITIN Procurement & Tax Compliance",
  "Corporate Governance",
  "Cross-border Transactions",
  "Payment Processor Compliance",
  "Regulatory Risk Management",
] as const;

export function AboutContent() {
  return (
    <div className="min-h-screen bg-[#020410] text-white selection:bg-cyan-500 selection:text-white font-sans">
      {/* Background Gradients */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-10%] w-150 h-150 bg-purple-600/10 blur-[100px] rounded-full mix-blend-screen opacity-40" />
        <div className="absolute bottom-[-10%] left-[-10%] w-150 h-150 bg-blue-600/10 blur-[100px] rounded-full mix-blend-screen opacity-30" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
      </div>

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-24 overflow-hidden z-10">
        <ScrollReveal>
          <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
            <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm font-medium text-gray-300 mb-8 backdrop-blur-sm cursor-default">
              <span className="flex h-2 w-2 rounded-full bg-cyan-400 mr-2 shadow-[0_0_10px_#22d3ee]" />
              The Operating System for Global Founders
            </div>
            <h1 className="text-5xl font-bold tracking-tight text-white sm:text-7xl mb-8 max-w-4xl mx-auto leading-[1.1]">
              We help international founders{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-500">
                go global.
              </span>
            </h1>
            <p className="text-xl leading-8 text-gray-400 max-w-2xl mx-auto mb-12">
              PayTrinity is the lawyer-led platform that simplifies US business
              formation, ITIN procurement, and compliance for entrepreneurs
              worldwide.
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* Stats Banner */}
      <section className="border-y border-white/10 bg-white/2 relative z-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/10">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="py-12 text-center px-4 hover:bg-white/5 transition-colors"
              >
                <div className="text-4xl font-bold text-white mb-2 tracking-tight">
                  <CountUpStat
                    value={stat.number}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                  />
                </div>
                <div className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story / Mission Section */}
      <section className="py-24 lg:py-32 relative z-10">
        <ScrollReveal>
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6">
                  More than just paperwork. <br />
                  <span className="text-gray-500">We build foundations.</span>
                </h2>
                <div className="space-y-6 text-lg text-gray-400 leading-relaxed">
                  <p>
                    We noticed a pattern: talented founders from around the
                    world were getting bad advice. They were told that opening a
                    US company was just about filing a form.
                  </p>
                  <p>
                    But without a proper ITIN, tax compliance strategy, and
                    banking access, a US company is just a piece of paper.
                  </p>
                  <p>
                    PayTrinity exists to bridge that gap. We combine legal
                    expertise with modern technology to provide a complete
                    &quot;operating system&quot; for your US business
                    entity&mdash;handling everything from formation to tax ID
                    procurement so you can focus on building your product.
                  </p>
                </div>

                <div className="mt-10 flex flex-col sm:flex-row gap-4">
                  <div className="flex items-center gap-2 text-white font-semibold">
                    <CheckCircle2 className="h-5 w-5 text-cyan-400" />
                    <span>ITIN Procurement</span>
                  </div>
                  <div className="flex items-center gap-2 text-white font-semibold">
                    <CheckCircle2 className="h-5 w-5 text-cyan-400" />
                    <span>Entity Formation</span>
                  </div>
                  <div className="flex items-center gap-2 text-white font-semibold">
                    <CheckCircle2 className="h-5 w-5 text-cyan-400" />
                    <span>Compliance</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-4/5 rounded-3xl overflow-hidden bg-white/5 shadow-2xl border border-white/10 relative">
                  <Image
                    src="/images/founder.png"
                    alt="Haris Bin Nadeem, Founder of PayTrinity"
                    fill
                    className="object-cover opacity-90 hover:opacity-100 transition-opacity duration-500"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                {/* Floating Badge */}
                <div className="absolute -bottom-6 -left-6 bg-[#0B1B3D] p-6 rounded-2xl shadow-xl border border-white/10 max-w-xs">
                  <p className="text-white font-bold text-lg mb-1">
                    Haris Bin Nadeem
                  </p>
                  <p className="text-gray-400 text-sm mb-3">
                    Founder &amp; CEO
                  </p>
                  <a
                    href="https://www.linkedin.com/in/itshbn"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#0077b5] hover:text-[#00a0dc] transition-colors"
                  >
                    <LinkedInIcon className="h-4 w-4" />
                    Connect on LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Values Grid */}
      <section className="py-24 bg-white/2 border-y border-white/5 relative z-10">
        <ScrollReveal>
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4">
                Our Core Principles
              </h2>
              <p className="text-lg text-gray-400">
                The values that drive every decision we make.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {values.map((value) => {
                const Icon = value.icon;
                return (
                  <div
                    key={value.key}
                    className={`group relative overflow-hidden rounded-3xl p-8 transition-all hover:-translate-y-1 hover:shadow-lg border border-white/5 hover:border-white/10 ${value.color.split(" ")[0]} bg-opacity-10`}
                  >
                    <div
                      className={`inline-flex items-center justify-center rounded-2xl bg-white/10 p-3 mb-6 shadow-sm ${value.iconColor}`}
                    >
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">
                      {value.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Legal Expertise Section */}
      <section className="py-24 relative z-10">
        <ScrollReveal>
          <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white mb-12">
              Deep Legal Expertise
            </h2>
            <div className="grid sm:grid-cols-2 gap-4 text-left">
              {expertiseItems.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 p-4 rounded-xl border border-white/10 bg-white/5 hover:border-cyan-500/50 hover:bg-white/8 transition-colors"
                >
                  <div className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_5px_#22d3ee]" />
                  <span className="font-medium text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden z-10">
        <ScrollReveal>
          <div className="relative mx-auto max-w-4xl px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold tracking-tight text-white mb-6">
              Ready to start your journey?
            </h2>
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
              Join hundreds of international founders building legitimate US
              businesses with PayTrinity.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://wa.me/15513069930"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-8 py-4 text-base font-semibold text-white shadow-lg hover:bg-[#25D366]/90 transition-all hover:shadow-xl hover:-translate-y-1"
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp: +1 (551) 306-9930
              </a>
              <a
                href="https://calendly.com/paytrinity/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 text-base font-semibold text-[#0B1B3D] shadow-lg hover:bg-gray-200 transition-all hover:shadow-xl hover:-translate-y-1"
              >
                <Calendar className="h-5 w-5" />
                Book a Consultation
              </a>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
