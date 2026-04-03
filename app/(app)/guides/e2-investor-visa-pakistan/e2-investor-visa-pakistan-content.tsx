"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Users,
  TrendingUp,
  BadgeCheck,
  ChevronDown,
  ArrowRight,
  DollarSign,
  Globe,
  Building2,
  Target,
  CheckCircle2,
} from "lucide-react";
import { motion } from "motion/react";

const benefits = [
  {
    icon: Target,
    title: "Live & Work in USA",
    description:
      "Legally reside and operate your business in the United States",
  },
  {
    icon: Users,
    title: "Family Inclusion",
    description:
      "Spouse can work, children can study in the US",
  },
  {
    icon: TrendingUp,
    title: "Renewable Indefinitely",
    description:
      "5-year validity, renewable as long as business operates",
  },
  {
    icon: Building2,
    title: "Business Growth",
    description:
      "Scale your US business with full operational control",
  },
  {
    icon: DollarSign,
    title: "Lower Investment",
    description:
      "Typically $100K-$200K investment (less than EB-5)",
  },
  {
    icon: Globe,
    title: "Treaty Pathway",
    description:
      "Via Grenada citizenship or other treaty countries",
  },
];

const pathways = [
  {
    title: "Grenada Citizenship Route",
    description: "Most popular pathway for Pakistani nationals",
    steps: [
      "Obtain Grenada citizenship by investment ($235K)",
      "Grenada has E2 treaty with USA",
      "Apply for E2 visa as Grenada citizen",
      "Timeline: 6-9 months total",
    ],
    investment: "$235K (Grenada) + $100K+ (US business)",
  },
  {
    title: "Direct US Business Route",
    description:
      "If you already have treaty country citizenship",
    steps: [
      "Establish or purchase qualifying US business",
      "Investment must be substantial ($100K-$200K+)",
      "Create detailed business plan",
      "Apply for E2 visa at US embassy",
    ],
    investment: "$100K-$200K+ US business investment",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Eligibility Assessment",
    description:
      "Evaluate your profile, investment capacity, and optimal pathway (Grenada vs direct)",
  },
  {
    number: "02",
    title: "Treaty Citizenship",
    description:
      "If needed, obtain Grenada citizenship through investment program (6-9 months)",
  },
  {
    number: "03",
    title: "Business Planning",
    description:
      "Develop comprehensive business plan, financial projections, and market analysis",
  },
  {
    number: "04",
    title: "US Business Setup",
    description:
      "Form LLC/Corp, make substantial investment, establish operations",
  },
  {
    number: "05",
    title: "E2 Documentation",
    description:
      "Prepare extensive E2 application package with investment evidence",
  },
  {
    number: "06",
    title: "Consular Interview",
    description:
      "Interview coaching and representation at US embassy",
  },
  {
    number: "07",
    title: "E2 Approval & Relocation",
    description:
      "Receive 5-year E2 visa and relocate to operate your US business",
  },
];

const businessRequirements = [
  "Substantial Investment: Typically $100K-$200K minimum depending on business type",
  "Active Business: Must be operational, not passive investment or real estate",
  "Majority Ownership: Investor must own at least 50% of the business",
  "Job Creation: Must employ US workers or demonstrate economic impact",
  "Source of Funds: Must prove legal source of investment capital",
  "Business Plan: Comprehensive plan showing viability and growth potential",
];

const faqs = [
  {
    question:
      "Can Pakistani citizens apply for E2 investor visa?",
    answer:
      "Pakistan does not have an E2 treaty with the United States, so Pakistani passport holders cannot directly apply for E2 visas. However, the most popular solution is obtaining citizenship from a treaty country like Grenada through their Citizenship by Investment program ($235K investment), then applying for E2 as a Grenada citizen. This is a proven pathway used by many Pakistani entrepreneurs.",
  },
  {
    question:
      "How much do I need to invest for E2 visa from Pakistan?",
    answer:
      "The total investment typically ranges from $335K-$500K: Grenada citizenship by investment costs $235K (single applicant) + US business investment of $100K-$300K depending on the industry. The US business investment must be 'substantial' relative to the total cost of the business. More capital-intensive businesses may require higher investment.",
  },
  {
    question:
      "What is the Grenada citizenship route for E2 visa?",
    answer:
      "Grenada offers citizenship by investment and has an E2 treaty with the USA. Process: (1) Apply for Grenada citizenship ($235K National Transformation Fund or $270K+ real estate), (2) Receive Grenada passport in 6-9 months, (3) Establish US business and invest $100K-$200K+, (4) Apply for E2 visa as Grenada citizen. This is the most reliable pathway for Pakistani entrepreneurs.",
  },
  {
    question:
      "How long does E2 visa last and can it be renewed?",
    answer:
      "E2 visas are typically issued for 5 years (for Grenada citizens) and can be renewed indefinitely as long as your business continues to operate and meet E2 requirements. Many investors maintain E2 status for 10-20+ years. Your spouse and unmarried children under 21 are included on the same visa.",
  },
  {
    question:
      "What type of business qualifies for E2 visa?",
    answer:
      "Qualifying businesses include: restaurants, franchises, retail stores, consulting firms, tech startups, manufacturing, e-commerce with US operations, import/export companies. The business must be active and operational - passive investments like real estate or stocks don't qualify. It must also be substantial enough to support you and your family and create jobs for US workers.",
  },
  {
    question:
      "Can my spouse work in the US on E2 visa?",
    answer:
      "Yes! This is a major benefit. Your spouse (E2 dependent) can apply for Employment Authorization Document (EAD) and work for any employer in the US without restrictions. Your children can attend US schools and universities. However, children cannot work until they get their own work authorization.",
  },
  {
    question:
      "Does E2 visa lead to green card (permanent residence)?",
    answer:
      "E2 is a non-immigrant visa and doesn't directly lead to a green card. However, many E2 holders eventually qualify for green cards through other pathways: EB-2 NIW (National Interest Waiver), EB-1A (Extraordinary Ability), EB-5 (increased investment), or employer sponsorship if their business grows significantly. We can plan a long-term immigration strategy.",
  },
  {
    question:
      "What are the advantages of E2 visa over EB-5 investor visa?",
    answer:
      "E2 advantages: (1) Lower investment ($100K-$200K vs $800K-$1.05M for EB-5), (2) Faster processing (6-12 months vs 2-5+ years for EB-5), (3) More control over business operations, (4) Spouse can work immediately. EB-5 advantages: (1) Leads directly to green card, (2) No need to maintain treaty citizenship. We help you choose the right pathway based on your goals and budget.",
  },
];

export function E2InvestorVisaPakistanContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#020410] text-white selection:bg-blue-500 selection:text-white font-sans">
      {/* Background Gradients */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-blue-600/10 blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-purple-600/10 blur-[120px] rounded-full mix-blend-screen" />
      </div>

      {/* Hero Section */}
      <section className="relative pt-28 pb-20 lg:pt-36 lg:pb-28 px-6 z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm text-sm mb-6">
              <BadgeCheck className="w-4 h-4 text-[#D4A574]" />
              <span>
                Grenada Citizenship Pathway - Business
                Immigration Experts
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              E2 Investor Visa for{" "}
              <span className="text-[#D4A574]">Pakistani</span>{" "}
              Entrepreneurs
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-4">
              Live, Work & Build Your Business in the United
              States
            </p>

            <p className="text-lg text-gray-400 mb-8">
              Via Grenada Citizenship - $100K-$200K Investment -
              5-Year Renewable Visa - Spouse Can Work
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 rounded-lg bg-[#D4A574] text-white font-bold text-lg shadow-xl hover:bg-[#b88b5c] transition-all"
                >
                  Start E2 Visa Strategy
                </motion.button>
              </Link>
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 rounded-lg bg-white/5 border border-white/10 text-white font-bold text-lg hover:bg-white/10 transition-all backdrop-blur-sm"
                >
                  Free Consultation
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white/[0.02] relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Why E2 Investor Visa?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Build and operate your American business with full
              family benefits
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-[#D4A574]/50 transition-all"
              >
                <div className="mb-4">
                  <benefit.icon className="w-8 h-8 text-[#D4A574]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-400">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pathways Section */}
      <section className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              E2 Visa Pathways for Pakistani Nationals
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Two routes to achieve E2 treaty investor status
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {pathways.map((pathway, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-[#D4A574]/50 transition-all"
              >
                <h3 className="text-2xl font-bold text-white mb-3">
                  {pathway.title}
                </h3>
                <p className="text-gray-400 mb-6">
                  {pathway.description}
                </p>
                <ul className="space-y-3 mb-6">
                  {pathway.steps.map((step, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-gray-300"
                    >
                      <CheckCircle2 className="w-5 h-5 text-[#D4A574] mt-0.5 flex-shrink-0" />
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-6 border-t border-white/10">
                  <p className="text-sm font-bold text-white mb-1">
                    Total Investment:
                  </p>
                  <p className="text-lg text-[#D4A574] font-bold">
                    {pathway.investment}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Requirements */}
      <section className="py-20 bg-white/[0.02] relative z-10">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              E2 Business Requirements
            </h2>
            <p className="text-xl text-gray-400">
              What your US business must demonstrate
            </p>
          </div>

          <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
            <ul className="space-y-4">
              {businessRequirements.map((req, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 text-gray-300 text-lg"
                >
                  <CheckCircle2 className="w-6 h-6 text-[#D4A574] mt-1 flex-shrink-0" />
                  <span>{req}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Our E2 Visa Strategy Process
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              End-to-end support from citizenship to visa
              approval
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-white/5 border border-white/10 p-8 rounded-2xl h-full">
                  <div className="text-5xl font-bold text-[#D4A574] mb-4 opacity-50">
                    {step.number}
                  </div>
                  <h3 className="text-2xl font-bold mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-300">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative z-10">
        <div className="max-w-5xl mx-auto px-6">
          <div className="relative rounded-[3rem] overflow-hidden p-12 md:p-24 text-center border border-white/10">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 via-purple-900/40 to-cyan-900/40 backdrop-blur-sm" />
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Build Your American Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Get expert guidance on E2 visa pathway and
                Grenada citizenship strategy
              </p>
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-5 rounded-lg bg-[#D4A574] text-white font-bold text-xl shadow-xl hover:bg-[#b88b5c] transition-all inline-flex items-center gap-2"
                >
                  Schedule Strategy Call
                  <ArrowRight className="w-6 h-6" />
                </motion.button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 relative z-10">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-400">
              E2 visa answers for Pakistani entrepreneurs
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="border border-white/10 rounded-xl overflow-hidden hover:border-[#D4A574]/50 transition-all"
              >
                <button
                  onClick={() =>
                    setOpenFaq(openFaq === index ? null : index)
                  }
                  className="w-full px-8 py-6 flex items-center justify-between text-left bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <h3 className="text-lg font-bold text-white pr-4">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`w-6 h-6 text-[#D4A574] flex-shrink-0 transition-transform ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-8 py-6 bg-white/[0.02] border-t border-white/10">
                    <p className="text-gray-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-white/[0.02] relative z-10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Start Your E2 Visa Journey
          </h2>
          <p className="text-lg text-gray-400 mb-8">
            Expert E2 strategy - Grenada citizenship support -
            Business planning - Visa application
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <button className="px-8 py-4 rounded-lg bg-[#D4A574] text-white font-bold text-lg hover:bg-[#b88b5c] transition-all">
                Get Started
              </button>
            </Link>
            <Link href="/contact">
              <button className="px-8 py-4 rounded-lg bg-white/5 border border-white/10 text-white font-bold text-lg hover:bg-white/10 transition-all">
                Book Free Call
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
