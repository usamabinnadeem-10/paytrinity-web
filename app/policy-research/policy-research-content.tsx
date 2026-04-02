"use client";

import Link from "next/link";
import {
  TrendingUp,
  Scale,
  Building2,
  Network,
  Zap,
  ArrowRight,
  BookOpen,
  FileText,
  Award,
} from "lucide-react";
import { motion } from "motion/react";

const focusAreas = [
  {
    title: "Business & Economic Policy",
    icon: TrendingUp,
    iconColor: "text-blue-400",
    description:
      "Analysis of market structures, competition policy, and economic regulatory frameworks across jurisdictions.",
    gradient: "from-blue-500/20 to-cyan-500/20",
    link: "/policy-research/business-economic-policy",
    topics: [
      "Market Competition",
      "Trade Policy",
      "Economic Development",
      "Investment Regulation",
    ],
  },
  {
    title: "Law & Regulatory Systems",
    icon: Scale,
    iconColor: "text-emerald-400",
    description:
      "Examination of legal frameworks, regulatory institutions, and enforcement mechanisms shaping business environments.",
    gradient: "from-emerald-500/20 to-green-500/20",
    link: "/policy-research/law-regulatory-systems",
    topics: [
      "Administrative Law",
      "Regulatory Reform",
      "Judicial Systems",
      "Enforcement Mechanisms",
    ],
  },
  {
    title: "Federalism & Governance",
    icon: Building2,
    iconColor: "text-purple-400",
    description:
      "Study of federal structures, interstate relations, and multi-level governance systems.",
    gradient: "from-purple-500/20 to-pink-500/20",
    link: "/policy-research/federalism-governance",
    topics: [
      "Federal Systems",
      "State Powers",
      "Interstate Commerce",
      "Governance Structures",
    ],
  },
  {
    title: "Institutional Fragmentation",
    icon: Network,
    iconColor: "text-orange-400",
    description:
      "Research on fragmented regulatory authority, jurisdictional complexity, and coordination challenges.",
    gradient: "from-orange-500/20 to-red-500/20",
    link: "/policy-research/institutional-fragmentation",
    topics: [
      "Regulatory Overlap",
      "Coordination Failures",
      "System Complexity",
      "Reform Pathways",
    ],
  },
  {
    title: "Digital Economy & Fintech Regulation",
    icon: Zap,
    iconColor: "text-cyan-400",
    description:
      "Analysis of regulatory approaches to digital platforms, fintech innovation, and emerging technologies.",
    gradient: "from-cyan-500/20 to-blue-500/20",
    link: "/policy-research/digital-economy-fintech",
    topics: [
      "Platform Regulation",
      "Fintech Policy",
      "Data Governance",
      "Technology Standards",
    ],
  },
];

const outputs = [
  {
    title: "Policy Papers",
    description:
      "In-depth research documents examining specific policy questions, regulatory frameworks, or institutional arrangements.",
    icon: FileText,
    iconColor: "text-blue-400",
  },
  {
    title: "Regulatory Analysis",
    description:
      "Technical assessments of proposed or existing regulations, evaluating effectiveness, compliance burden, and market impact.",
    icon: Scale,
    iconColor: "text-emerald-400",
  },
  {
    title: "Advisory Briefs",
    description:
      "Concise documents providing actionable guidance on navigating complex legal and regulatory environments.",
    icon: Award,
    iconColor: "text-purple-400",
  },
];

export function PolicyResearchContent() {
  return (
    <div className="min-h-screen bg-[#020410] text-white">
      {/* Background Gradients */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-blue-600/10 blur-[120px] rounded-full animate-pulse duration-[10000ms]" />
        <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-purple-600/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-20%] left-[20%] w-[800px] h-[800px] bg-cyan-600/10 blur-[120px] rounded-full" />
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8">
              <BookOpen className="h-4 w-4 text-blue-400" />
              <span className="text-sm font-medium text-blue-100 tracking-wide">
                Policy & Research Center
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-[1.1]">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-400">
                Law, Economics &
              </span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-600">
                Institutional Design
              </span>
            </h1>

            <p className="mt-6 text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              The PayTrinity Policy & Research Center is an integrated unit
              within the firm focused on the study of legal, economic, and
              institutional systems shaping global markets.
            </p>

            <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 max-w-4xl mx-auto">
              <p className="text-lg text-white font-medium">
                We operate at the intersection of law, economics, and
                institutional design.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-20 relative bg-white/[0.02]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our Approach
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our work combines legal analysis with policy research, producing
              insights grounded in both doctrine and real-world application.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {outputs.map((output, i) => {
              const Icon = output.icon;
              return (
                <motion.div
                  key={output.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                >
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 border border-white/10">
                    <Icon className={`w-5 h-5 ${output.iconColor}`} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {output.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed text-sm">
                    {output.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Focus Areas Section */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Focus Areas
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our research spans five core areas examining how legal and
              institutional structures shape economic activity
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {focusAreas.map((area, i) => {
              const Icon = area.icon;
              return (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -10 }}
                  className={i === 4 ? "md:col-span-2 lg:col-span-1" : ""}
                >
                  <Link href={area.link} className="block h-full">
                    <div className="group relative p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-all overflow-hidden h-full flex flex-col">
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${area.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl`}
                      />

                      <div className="relative z-10 flex flex-col h-full">
                        <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 border border-white/10 group-hover:scale-110 transition-transform duration-300">
                          <Icon className={`w-6 h-6 ${area.iconColor}`} />
                        </div>
                        <h3 className="text-2xl font-bold mb-3 text-white">
                          {area.title}
                        </h3>
                        <p className="text-gray-400 leading-relaxed mb-6 flex-grow">
                          {area.description}
                        </p>

                        <div className="space-y-2 mb-6">
                          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                            Key Topics
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {area.topics.map((topic) => (
                              <span
                                key={topic}
                                className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300"
                              >
                                {topic}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="mt-auto flex items-center text-sm font-medium text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity">
                          Explore research{" "}
                          <ArrowRight className="ml-1 w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="max-w-5xl mx-auto px-6">
          <div className="relative rounded-[3rem] overflow-hidden p-12 md:p-24 text-center border border-white/10">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 via-purple-900/40 to-cyan-900/40 backdrop-blur-sm" />

            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white">
                Interested in Our Research?
              </h2>
              <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
                Contact us to learn more about our work or discuss collaboration
                opportunities
              </p>

              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-12 py-5 rounded-full bg-white text-[#020410] font-bold text-xl shadow-2xl hover:shadow-white/20 transition-all"
                >
                  Get in Touch
                </motion.button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
