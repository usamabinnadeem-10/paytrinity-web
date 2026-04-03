"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Shield,
  Users,
  TrendingUp,
  BadgeCheck,
  ChevronDown,
  ArrowRight,
  FileText,
  Clock,
  Target,
  CheckCircle2,
} from "lucide-react";
import { motion } from "motion/react";

const benefits = [
  {
    icon: Target,
    title: "High Approval Rate",
    description:
      "Our strategic approach has helped 200+ Pakistani students",
  },
  {
    icon: FileText,
    title: "Documentation Engineering",
    description:
      "Comprehensive DS-160, financial docs, and tie demonstration",
  },
  {
    icon: Users,
    title: "Interview Coaching",
    description:
      "Mock interviews with actual F1 visa questions and strategies",
  },
  {
    icon: Shield,
    title: "I-20 Guidance",
    description:
      "University selection, admission support, and I-20 processing",
  },
  {
    icon: Clock,
    title: "Timeline Planning",
    description:
      "Appointment booking strategy and optimal submission timing",
  },
  {
    icon: TrendingUp,
    title: "Post-Visa Support",
    description:
      "Pre-departure briefing and US arrival preparation",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Profile Assessment",
    description:
      "Evaluate academic background, financial strength, and ties to Pakistan",
  },
  {
    number: "02",
    title: "University Strategy",
    description:
      "Select optimal universities based on visa approval probability and your goals",
  },
  {
    number: "03",
    title: "Documentation Package",
    description:
      "Prepare DS-160, financial evidence, property docs, family ties, and intent proof",
  },
  {
    number: "04",
    title: "I-20 Acquisition",
    description:
      "Guide you through university admission and I-20 certificate processing",
  },
  {
    number: "05",
    title: "Interview Preparation",
    description:
      "Conduct 3-5 mock interviews with actual consular officer questions",
  },
  {
    number: "06",
    title: "Visa Interview",
    description:
      "Final briefing, document checklist, and day-of strategy",
  },
  {
    number: "07",
    title: "Post-Approval",
    description:
      "Travel planning, housing, banking, and US arrival orientation",
  },
];

const criticalFactors = [
  {
    title: "Strong Home Country Ties",
    points: [
      "Family property ownership documentation",
      "Parents' employment and business evidence",
      "Siblings' education and family structure",
      "Future career prospects in Pakistan",
    ],
  },
  {
    title: "Financial Documentation",
    points: [
      "Sponsor's bank statements (6-12 months)",
      "Income tax returns and wealth evidence",
      "Education loan approval (if applicable)",
      "Property valuations and assets",
    ],
  },
  {
    title: "Academic Credibility",
    points: [
      "Strong academic record and progression",
      "Relevant field of study alignment",
      "Clear educational goals statement",
      "Post-study career plan",
    ],
  },
  {
    title: "Interview Performance",
    points: [
      "Confident and honest communication",
      "Prepared answers to common questions",
      "Non-immigrant intent demonstration",
      "Professional demeanor and dress",
    ],
  },
];

const faqs = [
  {
    question:
      "What is the current F1 visa approval rate for Pakistani students?",
    answer:
      "The F1 visa approval rate for Pakistani students varies between 60-75% depending on the applicant's profile, documentation quality, and interview performance. With our strategic preparation, our clients have achieved a significantly higher approval rate by addressing common rejection reasons proactively.",
  },
  {
    question:
      "How can I improve my F1 visa chances from Pakistan?",
    answer:
      "Success depends on four pillars: (1) Strong financial documentation showing ability to pay all expenses, (2) Clear evidence of ties to Pakistan (property, family, future prospects), (3) Well-articulated study plan that makes sense for your background, and (4) Excellent interview performance. We help you optimize all four areas through our comprehensive F1 visa strategy program.",
  },
  {
    question:
      "What financial documents do I need for F1 visa from Pakistan?",
    answer:
      "You'll need: Sponsor's bank statements for 6-12 months showing sufficient funds, income tax returns for 2-3 years, salary slips or business income proof, property documents and valuations, affidavit of support, and education loan approval letter if taking a loan. The total should cover tuition + living expenses for at least the first year.",
  },
  {
    question:
      "How long does F1 visa processing take from Pakistan?",
    answer:
      "The timeline is: University admission (2-4 months), I-20 receipt (2-4 weeks), DS-160 completion (1-2 days), visa fee payment (immediate), interview appointment booking (can vary from 2 weeks to 6 months), and visa processing post-interview (3-5 business days if approved). We help you optimize each step for fastest processing.",
  },
  {
    question:
      "What are common F1 visa rejection reasons for Pakistani students?",
    answer:
      "Most common reasons: (1) Weak ties to Pakistan - consular officer isn't convinced you'll return, (2) Insufficient financial documentation or unclear funding source, (3) Poor interview performance or inconsistent answers, (4) Study plan doesn't align with previous education or career, (5) Suspected immigrant intent. Our documentation engineering addresses each of these systematically.",
  },
  {
    question:
      "Do I need a specific IELTS/TOEFL score for F1 visa from Pakistan?",
    answer:
      "The F1 visa itself doesn't have a minimum score requirement, but your university does. Most US universities require TOEFL 79-100 or IELTS 6.5-7.5. A strong English test score strengthens your visa application by proving you can succeed academically. We help you choose universities that match your test scores.",
  },
  {
    question: "Can I work in the US on an F1 visa?",
    answer:
      "Yes, but with restrictions. You can work on-campus up to 20 hours/week during studies and full-time during breaks. After one year, you're eligible for CPT (Curricular Practical Training) for internships. After graduation, you can apply for OPT (Optional Practical Training) - 12 months standard or 36 months for STEM fields. We include this information in your visa strategy.",
  },
  {
    question:
      "Should I mention scholarships or assistantships in my F1 visa interview?",
    answer:
      "Yes, definitely! Scholarships, teaching assistantships, or research assistantships strengthen your application by showing academic merit and reducing financial burden on your family. However, you still need to demonstrate sufficient funds for uncovered expenses. We help you present this information optimally during the interview.",
  },
];

export function F1VisaStrategyPakistanContent() {
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
                200+ Pakistani Students Successfully Approved
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              F1 Student Visa Strategy for{" "}
              <span className="text-[#D4A574]">Pakistan</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-4">
              Maximize Your F1 Visa Approval Chances with Expert
              Strategy
            </p>

            <p className="text-lg text-gray-400 mb-8">
              Documentation Engineering - Interview Coaching -
              I-20 Guidance - Appointment Strategy
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 rounded-lg bg-[#D4A574] text-white font-bold text-lg shadow-xl hover:bg-[#b88b5c] transition-all"
                >
                  Start F1 Visa Preparation
                </motion.button>
              </Link>
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 rounded-lg bg-white/5 border border-white/10 text-white font-bold text-lg hover:bg-white/10 transition-all backdrop-blur-sm"
                >
                  Free Assessment
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
              Comprehensive F1 Visa Strategy Program
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Everything you need to secure your US student visa
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

      {/* Critical Success Factors */}
      <section className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Four Pillars of F1 Visa Success
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              What consular officers evaluate in Pakistani F1
              visa applicants
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {criticalFactors.map((factor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-[#D4A574]/50 transition-all"
              >
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <CheckCircle2 className="w-8 h-8 text-[#D4A574]" />
                  {factor.title}
                </h3>
                <ul className="space-y-3">
                  {factor.points.map((point, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-gray-300"
                    >
                      <ArrowRight className="w-5 h-5 text-[#D4A574] mt-0.5 flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white/[0.02] relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Our F1 Visa Strategy Process
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Step-by-step guidance from profile assessment to
              visa approval
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
                Ready to Pursue Your American Education?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Don&apos;t leave your F1 visa to chance. Get
                expert strategy and preparation.
              </p>
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-5 rounded-lg bg-[#D4A574] text-white font-bold text-xl shadow-xl hover:bg-[#b88b5c] transition-all inline-flex items-center gap-2"
                >
                  Schedule Free Assessment
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
              F1 visa answers for Pakistani students
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
            Start Your F1 Visa Journey Today
          </h2>
          <p className="text-lg text-gray-400 mb-8">
            Expert guidance - Proven strategies - 200+ successful
            approvals
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <button className="px-8 py-4 rounded-lg bg-[#D4A574] text-white font-bold text-lg hover:bg-[#b88b5c] transition-all">
                Begin Preparation
              </button>
            </Link>
            <Link href="/contact">
              <button className="px-8 py-4 rounded-lg bg-white/5 border border-white/10 text-white font-bold text-lg hover:bg-white/10 transition-all">
                Free Consultation
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
