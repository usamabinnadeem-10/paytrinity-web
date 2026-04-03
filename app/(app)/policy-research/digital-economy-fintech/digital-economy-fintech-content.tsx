"use client";

import Link from "next/link";
import { Zap, ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";

const researchAreas = [
  {
    title: "Platform Regulation & Market Power",
    description:
      "Analysis of regulatory approaches to digital platforms, network effects, and market dominance.",
    insights: [
      "Platform designation criteria",
      "Interoperability requirements",
      "Data portability mandates",
      "Ex-ante regulation frameworks",
    ],
  },
  {
    title: "Fintech Innovation & Regulation",
    description:
      "Study of regulatory responses to fintech innovation including payments, lending, and digital assets.",
    insights: [
      "Regulatory sandboxes",
      "Licensing frameworks",
      "Consumer protection",
      "Prudential regulation",
    ],
  },
  {
    title: "Data Governance & Privacy",
    description:
      "Examination of data protection regimes, cross-border data flows, and privacy regulation.",
    insights: [
      "GDPR compliance",
      "Data localization requirements",
      "Privacy-by-design",
      "Enforcement mechanisms",
    ],
  },
  {
    title: "Technology Standards & Interoperability",
    description:
      "Research on technical standards, open protocols, and interoperability mandates.",
    insights: [
      "Standard-setting bodies",
      "Open API requirements",
      "Protocol governance",
      "Compatibility obligations",
    ],
  },
];

export function DigitalEconomyFintechContent() {
  return (
    <div className="min-h-screen bg-[#020410] text-white">
      {/* Background Gradient */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-cyan-600/10 blur-[120px] rounded-full" />
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-20 px-6">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Link
              href="/policy-research"
              className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white mb-8"
            >
              <ArrowRight className="w-4 h-4 rotate-180" />
              Back to Policy & Research
            </Link>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10">
                <Zap className="w-8 h-8 text-cyan-400" />
              </div>
              <div>
                <h1 className="text-5xl md:text-7xl font-bold">
                  Digital Economy & Fintech
                </h1>
                <p className="text-xl text-cyan-400 mt-2">
                  Technology Regulation & Innovation Policy
                </p>
              </div>
            </div>

            <p className="mt-6 text-xl text-gray-400 max-w-4xl">
              Analysis of regulatory approaches to digital platforms, fintech
              innovation, and emerging technologies. Our research examines how
              regulators balance innovation incentives with consumer protection
              and market stability.
            </p>

            <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 max-w-4xl">
              <p className="text-lg text-cyan-100">
                &ldquo;We operate at the intersection of law, economics, and
                institutional design.&rdquo;
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-20 relative bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Research Areas
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our work combines legal analysis with policy research, producing
              insights grounded in both doctrine and real-world application
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {researchAreas.map((area, i) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
              >
                <h3 className="text-2xl font-bold text-white mb-3">
                  {area.title}
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {area.description}
                </p>
                <ul className="space-y-3">
                  {area.insights.map((insight) => (
                    <li
                      key={insight}
                      className="flex items-start gap-3 text-sm text-gray-300"
                    >
                      <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                      {insight}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="relative rounded-[3rem] p-12 md:p-24 text-center border border-white/10">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/40 to-blue-900/40" />
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-bold mb-8">
                Explore More Research
              </h2>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Link href="/policy-research">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="px-12 py-5 rounded-full bg-white text-[#020410] font-bold text-xl"
                  >
                    View All Focus Areas
                  </motion.button>
                </Link>
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="px-12 py-5 rounded-full bg-white/5 border border-white/10 text-white font-bold text-xl hover:bg-white/10"
                  >
                    Contact Us
                  </motion.button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
