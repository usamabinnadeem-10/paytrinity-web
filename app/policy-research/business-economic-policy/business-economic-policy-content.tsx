"use client";

import Link from "next/link";
import { TrendingUp, ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";

const researchAreas = [
  {
    title: "Market Competition & Antitrust",
    description:
      "Analysis of competition policy, merger review processes, and antitrust enforcement across jurisdictions. Examination of market power, monopolistic practices, and regulatory responses.",
    insights: [
      "Cross-border merger approval procedures",
      "Market definition in digital economies",
      "Vertical integration analysis",
      "Competition authority coordination",
    ],
  },
  {
    title: "Trade Policy & Market Access",
    description:
      "Study of trade agreements, tariff structures, and non-tariff barriers. Assessment of how trade policy shapes market entry strategies and competitive dynamics.",
    insights: [
      "Free trade agreement frameworks",
      "Rules of origin analysis",
      "Services trade liberalization",
      "Trade remedy mechanisms",
    ],
  },
  {
    title: "Economic Development Strategies",
    description:
      "Research on industrial policy, special economic zones, and development incentives. Evaluation of different approaches to attracting investment and fostering growth.",
    insights: [
      "Tax incentive effectiveness",
      "Special zone governance models",
      "Foreign investment screening",
      "Technology transfer requirements",
    ],
  },
  {
    title: "Investment Regulation",
    description:
      "Examination of foreign investment restrictions, national security reviews, and capital controls. Analysis of bilateral investment treaties and dispute resolution mechanisms.",
    insights: [
      "Investment treaty arbitration",
      "Sector-specific restrictions",
      "National security frameworks",
      "Capital flow management",
    ],
  },
];

const policyPapers = [
  {
    title: "Competition Policy in Platform Markets",
    year: "2024",
    summary:
      "Examines how traditional antitrust frameworks apply to digital platforms with network effects.",
  },
  {
    title: "Trade Agreements and Regulatory Harmonization",
    year: "2024",
    summary:
      "Analysis of how trade agreements facilitate (or impede) regulatory convergence across jurisdictions.",
  },
  {
    title: "Investment Screening and National Security",
    year: "2023",
    summary:
      "Comparative study of investment review mechanisms and their impact on cross-border M&A activity.",
  },
];

export function BusinessEconomicPolicyContent() {
  return (
    <div className="min-h-screen bg-[#020410] text-white">
      {/* Background Gradient */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-blue-600/10 blur-[120px] rounded-full" />
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
                <TrendingUp className="w-8 h-8 text-blue-400" />
              </div>
              <div>
                <h1 className="text-5xl md:text-7xl font-bold">
                  Business & Economic Policy
                </h1>
                <p className="text-xl text-blue-400 mt-2">
                  Market Analysis & Regulatory Frameworks
                </p>
              </div>
            </div>

            <p className="mt-6 text-xl text-gray-400 max-w-4xl">
              Analysis of market structures, competition policy, and economic
              regulatory frameworks across jurisdictions. Our research examines
              how legal institutions shape market outcomes and competitive
              dynamics.
            </p>

            <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 max-w-4xl">
              <p className="text-lg text-blue-100">
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
                      <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                      {insight}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Policy Papers */}
      <section className="py-20 relative">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Recent Policy Papers
            </h2>
            <p className="text-xl text-gray-400">
              Selected publications and research outputs
            </p>
          </div>

          <div className="space-y-6">
            {policyPapers.map((paper, i) => (
              <motion.div
                key={paper.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {paper.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-3">
                      {paper.summary}
                    </p>
                  </div>
                  <span className="text-sm text-blue-400 font-medium">
                    {paper.year}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="relative rounded-[3rem] p-12 md:p-24 text-center border border-white/10">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 to-cyan-900/40" />
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
