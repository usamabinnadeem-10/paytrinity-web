"use client";

import Link from "next/link";
import {
  CheckCircle2,
  MapPin,
  Mail,
  Shield,
  ArrowRight,
  Bell,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";

const BENEFITS = [
  {
    icon: Shield,
    title: "Total Privacy",
    description:
      "Keep your personal home address off public records. Our registered address replaces yours on all state filings.",
    color: "orange",
    gradient: "from-orange-500/20 to-orange-600/10",
    iconColor: "text-orange-400",
    borderColor: "border-orange-500/20",
  },
  {
    icon: Mail,
    title: "Same-Day Scans",
    description:
      "Every piece of mail is scanned and uploaded to your dashboard the same day it arrives. No delays, no missed notices.",
    color: "blue",
    gradient: "from-blue-500/20 to-blue-600/10",
    iconColor: "text-blue-400",
    borderColor: "border-blue-500/20",
  },
  {
    icon: Bell,
    title: "Compliance Alerts",
    description:
      "Automatic reminders for annual reports, franchise taxes, and filing deadlines so you never fall out of good standing.",
    color: "green",
    gradient: "from-green-500/20 to-green-600/10",
    iconColor: "text-green-400",
    borderColor: "border-green-500/20",
  },
] as const;

const RISKS = [
  "Loss of Privacy",
  "Missed Notices",
  "Unprofessional",
] as const;

const SERVICE_ITEMS = [
  {
    number: "01",
    title: "Address Privacy",
    description:
      "Your personal address stays off public records. Our premium commercial address appears on all state and legal documents.",
  },
  {
    number: "02",
    title: "Digital Dashboard",
    description:
      "Access scanned mail, legal notices, and compliance documents from anywhere through a secure online portal.",
  },
  {
    number: "03",
    title: "State Compliance",
    description:
      "We monitor your annual report deadlines, franchise tax due dates, and filing requirements across all 50 states.",
  },
  {
    number: "04",
    title: "Junk Mail Filtering",
    description:
      "We sort and filter incoming mail so you only see what matters — legal notices, government correspondence, and business mail.",
  },
] as const;

export function RegisteredAgentContent() {
  return (
    <div className="min-h-screen bg-[#020410] text-white selection:bg-orange-500 selection:text-white font-sans">
      {/* Background gradients */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-orange-600/10 blur-[100px] rounded-full mix-blend-screen opacity-40" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-red-600/10 blur-[100px] rounded-full mix-blend-screen opacity-30" />
        <div className="absolute top-[40%] left-[30%] w-[400px] h-[400px] bg-amber-600/8 blur-[120px] rounded-full mix-blend-screen opacity-20" />
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
                <div className="h-2 w-2 rounded-full bg-orange-500" />
                <span className="text-sm font-medium text-orange-100 tracking-wide">
                  Legal Compliance & Privacy
                </span>
              </div>
              <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl mb-6">
                Premium Registered Agent{" "}
                <span className="bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">
                  & Virtual Address
                </span>
              </h1>
              <p className="text-xl leading-8 text-gray-400 mb-10">
                Keep your personal address private while maintaining full legal
                compliance. Our registered agent service handles legal notices,
                state filings, and mail forwarding so you never miss a deadline.
              </p>
              <Button
                asChild
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 text-base rounded-lg shadow-lg hover:shadow-orange-500/25 transition-all hover:-translate-y-0.5"
              >
                <Link href="/contact">
                  Get Protected
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
              Everything Your Business Needs
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Professional registered agent service with premium features to
              protect your privacy and keep you compliant.
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
                Why You Need a Registered Agent
              </h2>

              <div className="mb-8">
                <h3 className="text-lg font-semibold text-orange-300 mb-4">
                  The Risks of Being Your Own Agent
                </h3>
                <ul className="space-y-4">
                  {RISKS.map((risk) => (
                    <li
                      key={risk}
                      className="flex items-center gap-3 text-gray-300"
                    >
                      <CheckCircle2 className="h-5 w-5 text-orange-400 flex-shrink-0" />
                      <span className="font-medium">{risk}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-semibold text-white mb-3">
                  Availability Requirement
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  Every state requires your registered agent to be available at a
                  physical address during normal business hours. If you miss a
                  legal notice or service of process, your company could face
                  default judgments, loss of good standing, or even
                  administrative dissolution. A professional registered agent
                  ensures you never miss critical correspondence.
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
                  Our Service Includes
                </h3>
                <div className="space-y-6">
                  {SERVICE_ITEMS.map((item) => (
                    <div key={item.number} className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-500/20 border border-orange-500/30 flex items-center justify-center">
                        <span className="text-sm font-bold text-orange-400">
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
            <ShieldCheck className="h-12 w-12 text-orange-400 mx-auto mb-6" />
            <h2 className="text-4xl font-bold tracking-tight text-white mb-6">
              Protect Your Business Privacy
            </h2>
            <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">
              Stop using your home address on public filings. Get professional
              registered agent service with same-day mail scanning and compliance
              alerts.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button
                asChild
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 text-base rounded-lg shadow-lg hover:shadow-orange-500/25 transition-all hover:-translate-y-0.5"
              >
                <Link href="/contact">
                  Hire Registered Agent
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
