"use client";

import Link from "next/link";
import {
  CheckCircle2,
  Building2,
  Globe,
  FileText,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";

const benefitCards = [
  {
    icon: Building2,
    title: "Delaware & Wyoming",
    description:
      "Choose from the most business-friendly states in the US, with flexible structures and strong legal protections for founders.",
  },
  {
    icon: Globe,
    title: "100% Remote",
    description:
      "Complete the entire formation process from anywhere in the world. No US presence or travel required.",
  },
  {
    icon: FileText,
    title: "Complete Documentation",
    description:
      "Receive all formation documents, operating agreements, and compliance checklists ready for banking and operations.",
  },
];

const llcFeatures = [
  "Pass-through taxation (no double tax)",
  "Flexible management structure",
  "Fewer compliance requirements",
  "Ideal for small businesses and solo founders",
];

const cCorpFeatures = [
  "Preferred by venture capital investors",
  "Issue multiple classes of stock",
  "Well-established legal framework",
  "Best for high-growth startups seeking funding",
];

const includedItems = [
  {
    step: 1,
    title: "Company Formation",
    description:
      "Articles of Organization or Incorporation filed with your chosen state.",
  },
  {
    step: 2,
    title: "EIN (Tax ID)",
    description:
      "Federal Employer Identification Number obtained from the IRS.",
  },
  {
    step: 3,
    title: "Registered Agent",
    description:
      "First year of registered agent service included in your formation package.",
  },
  {
    step: 4,
    title: "Post-Incorporation Documents",
    description:
      "Operating Agreement, Bylaws, initial resolutions, and compliance checklist.",
  },
];

export function USFormationContent() {
  return (
    <div className="min-h-screen bg-[#020410] text-white selection:bg-blue-500 selection:text-white font-sans">
      {/* Background gradients */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-600/10 blur-[100px] rounded-full mix-blend-screen opacity-40" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-purple-600/10 blur-[100px] rounded-full mix-blend-screen opacity-30" />
        <div className="absolute top-[40%] left-[50%] w-[400px] h-[400px] bg-cyan-600/8 blur-[100px] rounded-full mix-blend-screen opacity-20" />
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
                <Building2 className="h-4 w-4 text-blue-400" />
                <span className="text-sm font-medium text-blue-100 tracking-wide">
                  US Business Incorporation
                </span>
              </div>
              <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl mb-4">
                Launch Your US Company
              </h1>
              <p className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-[#D4A574] to-[#F3E5AB] bg-clip-text text-transparent mb-6">
                From Anywhere in the World
              </p>
              <p className="text-lg leading-8 text-gray-400 mb-10 max-w-2xl mx-auto">
                Form your Delaware LLC or C-Corporation in days. We handle the
                paperwork, registered agent, and state filings so you can focus
                on building your business.
              </p>
              <Button asChild size="lg">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 text-base font-bold text-white shadow-lg hover:shadow-blue-500/25 hover:scale-105 transition-all"
                >
                  Start Your Formation
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
              Why Form in the US?
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Access the world&apos;s largest market with a US legal entity.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {benefitCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="rounded-2xl bg-white/5 border border-white/10 p-8 backdrop-blur-sm hover:bg-white/[0.07] transition-colors text-center"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 mb-6">
                    <Icon className="w-7 h-7 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {card.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {card.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Educational: LLC vs C-Corp + What's Included */}
      <section className="py-20 relative z-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
            {/* Left: LLC vs C-Corporation */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-white mb-8">
                LLC vs C-Corporation
              </h2>

              <div className="space-y-8">
                <div className="rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <ShieldCheck className="w-6 h-6 text-emerald-400" />
                    <h3 className="text-xl font-bold text-white">LLC</h3>
                  </div>
                  <ul className="space-y-3">
                    {llcFeatures.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-gray-300 text-sm"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <Building2 className="w-6 h-6 text-purple-400" />
                    <h3 className="text-xl font-bold text-white">
                      C-Corporation
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {cCorpFeatures.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-gray-300 text-sm"
                      >
                        <CheckCircle2 className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Right: What's Included */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-white mb-8">
                What&apos;s Included
              </h2>

              <div className="rounded-2xl bg-white/5 border border-white/10 p-8 backdrop-blur-sm space-y-6">
                {includedItems.map((item, index) => (
                  <motion.div
                    key={item.step}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1">
                        {item.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
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
              Ready to launch your US company?
            </h2>
            <p className="text-lg text-gray-400 mb-10">
              Get started today or speak with our team to find the right
              structure for your business.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button asChild size="lg">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 text-base font-bold text-white shadow-lg hover:shadow-blue-500/25 hover:scale-105 transition-all"
                >
                  Start Formation
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a
                  href="https://calendly.com/paytrinity/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-transparent px-8 py-4 text-base font-semibold text-white hover:bg-white/5 transition-colors"
                >
                  Speak to an Expert
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
