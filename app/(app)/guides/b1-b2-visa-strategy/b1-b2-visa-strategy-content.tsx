"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Plane,
  CheckCircle2,
  ArrowRight,
  Users,
  Briefcase,
  Globe,
  BadgeCheck,
  ChevronDown,
  Target,
  FileText,
  Calendar,
} from "lucide-react";
import { motion } from "motion/react";

const benefits = [
  {
    icon: Target,
    title: "Higher Approval Rate",
    description:
      "Strategic documentation and interview preparation",
  },
  {
    icon: FileText,
    title: "Documentation Strategy",
    description:
      "Comprehensive package proving ties and genuine intent",
  },
  {
    icon: Users,
    title: "Interview Coaching",
    description:
      "Mock interviews with actual consular questions",
  },
  {
    icon: Calendar,
    title: "10-Year Validity",
    description:
      "Multiple entries for business or tourism (if approved)",
  },
  {
    icon: Briefcase,
    title: "Business & Tourism",
    description:
      "Dual purpose visa for meetings and travel",
  },
  {
    icon: Globe,
    title: "Family Applications",
    description:
      "Strategy for family group visa applications",
  },
];

const visaTypes = [
  {
    type: "B-1 Business Visa",
    icon: Briefcase,
    purposes: [
      "Business meetings and negotiations",
      "Attending conferences or conventions",
      "Contract negotiations",
      "Consulting with business associates",
      "Settling an estate",
      "Short-term training programs",
    ],
  },
  {
    type: "B-2 Tourist Visa",
    icon: Plane,
    purposes: [
      "Tourism and sightseeing",
      "Visiting family or friends",
      "Medical treatment",
      "Participating in social events",
      "Amateur sports or musical events",
      "Short-term study (recreational)",
    ],
  },
];

const processSteps = [
  {
    number: "01",
    title: "Purpose Assessment",
    description:
      "Determine whether B1, B2, or combined B1/B2 fits your travel purpose",
  },
  {
    number: "02",
    title: "Ties Analysis",
    description:
      "Evaluate and strengthen your home country ties (employment, property, family)",
  },
  {
    number: "03",
    title: "Financial Documentation",
    description:
      "Prepare bank statements, employment letters, income proof, and sponsor docs",
  },
  {
    number: "04",
    title: "DS-160 Optimization",
    description:
      "Complete DS-160 application strategically to avoid red flags",
  },
  {
    number: "05",
    title: "Supporting Documents",
    description:
      "Compile invitation letters, itinerary, hotel bookings, and purpose evidence",
  },
  {
    number: "06",
    title: "Interview Preparation",
    description:
      "Mock interviews covering all likely questions and scenarios",
  },
  {
    number: "07",
    title: "Consular Interview",
    description:
      "Final briefing and day-of strategy for your visa interview",
  },
];

const criticalFactors = [
  {
    title: "Strong Home Country Ties",
    description:
      "The #1 factor consular officers evaluate",
    elements: [
      "Permanent employment with verifiable income",
      "Property ownership or long-term lease",
      "Family ties (spouse, children, parents)",
      "Bank accounts and financial commitments",
      "Business ownership or professional practice",
      "Evidence of return intent",
    ],
  },
  {
    title: "Financial Stability",
    description: "Prove ability to fund your trip",
    elements: [
      "Bank statements (6-12 months history)",
      "Employment letter with salary details",
      "Income tax returns",
      "Sponsor's financial documents (if applicable)",
      "Property valuations",
      "Credit worthiness indicators",
    ],
  },
  {
    title: "Trip Purpose Clarity",
    description: "Clear, credible reason for visit",
    elements: [
      "Invitation letter (business or personal)",
      "Detailed travel itinerary",
      "Hotel reservations or host address",
      "Conference registration (if applicable)",
      "Medical appointment letter (if medical tourism)",
      "Consistency across all documents",
    ],
  },
  {
    title: "Travel History",
    description: "Previous compliance with visa terms",
    elements: [
      "Prior US visa stamps and compliance",
      "Schengen, UK, Canada travel history",
      "Demonstrated return from previous trips",
      "No overstays or violations",
      "Clean immigration record",
      "Professional travel pattern",
    ],
  },
];

const faqs = [
  {
    question:
      "What is the difference between B1 and B2 visa?",
    answer:
      "B-1 is for business purposes like meetings, conferences, contract negotiations, and consultations. B-2 is for tourism, visiting family/friends, medical treatment, or social events. Most applicants receive a combined B-1/B-2 visa allowing both purposes. During the interview, clearly state your primary purpose while being honest about potential secondary purposes.",
  },
  {
    question:
      "How can I increase my B1/B2 visa approval chances?",
    answer:
      "Four key strategies: (1) Demonstrate strong ties to your home country through employment, property, family, and financial commitments, (2) Show sufficient financial capacity to fund your trip without working in the US, (3) Present a clear, credible purpose with supporting documents like invitation letters and itineraries, (4) Excellent interview performance with honest, confident answers. Our program optimizes all four areas.",
  },
  {
    question:
      "What documents do I need for B1/B2 visa interview?",
    answer:
      "Required: Valid passport, DS-160 confirmation, visa fee receipt, appointment confirmation, passport photo. Supporting: Employment letter, bank statements (6-12 months), property documents, invitation letter, travel itinerary, hotel bookings, family ties proof, previous visa stamps, income tax returns. The exact documents vary by case - we create a customized package for your profile.",
  },
  {
    question:
      "How long does B1/B2 visa processing take?",
    answer:
      "Timeline breakdown: DS-160 completion (1-2 days), visa fee payment (immediate), interview appointment (varies from 2 weeks to 6+ months depending on location and season), interview processing (3-5 business days for approval, up to 2-4 weeks if administrative processing required). We help you book the earliest possible appointment and prepare thoroughly.",
  },
  {
    question:
      "What are common B1/B2 visa rejection reasons?",
    answer:
      "Most common: (1) Insufficient ties to home country - officer suspects you won't return, (2) Inadequate financial documentation or unclear funding source, (3) Weak or inconsistent trip purpose, (4) Poor interview performance or vague answers, (5) Previous immigration violations, (6) Suspected immigrant intent. Our documentation engineering and interview coaching addresses each systematically.",
  },
  {
    question:
      "Can I change my B-2 tourist visa to B-1 business visa?",
    answer:
      "You don't need to 'change' visas - most applicants receive a combined B-1/B-2 stamp that allows both purposes. If you only have B-2 and need business activities, you may need to apply for a new visa. However, if you already have a valid B-2, you can request a B-1 classification at the port of entry by explaining your business purpose (though this isn't guaranteed).",
  },
  {
    question:
      "How long can I stay in the US on a B1/B2 visa?",
    answer:
      "The visa validity (typically 10 years) determines how long you can ENTER the US, not how long you can STAY. Each entry allows up to 6 months stay, granted by the CBP officer at the port of entry. You can request extensions, but frequent long stays or immediate returns may trigger scrutiny. We provide guidance on optimal travel patterns to maintain visa validity.",
  },
  {
    question:
      "Do I need travel insurance for B1/B2 visa application?",
    answer:
      "Travel insurance isn't mandatory for visa approval, but it's highly recommended for the actual trip. Some consular officers view it positively as it shows preparation and financial responsibility. It also protects you from expensive medical bills during your US visit. We can recommend suitable travel insurance providers as part of our pre-departure support.",
  },
];

export function B1B2VisaStrategyContent() {
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
                Expert Visa Strategy - Higher Approval Rates
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              B1/B2 Visa{" "}
              <span className="text-[#D4A574]">Strategy</span> &
              Preparation
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-4">
              Maximize Your US Business & Tourist Visa Approval
              Chances
            </p>

            <p className="text-lg text-gray-400 mb-8">
              Documentation Engineering - Interview Coaching -
              DS-160 Optimization - 10-Year Visa
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 rounded-lg bg-[#D4A574] text-white font-bold text-lg shadow-xl hover:bg-[#b88b5c] transition-all"
                >
                  Start Visa Preparation
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
              Why Our B1/B2 Visa Strategy Works
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Proven approach to visitor visa success
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

      {/* Visa Types */}
      <section className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Understanding B-1 vs B-2 Visa
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Most applicants receive combined B-1/B-2 visa
              allowing both purposes
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {visaTypes.map((visa, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-[#D4A574]/50 transition-all"
              >
                <div className="flex items-center gap-3 mb-6">
                  <visa.icon className="w-6 h-6 text-[#D4A574]" />
                  <h3 className="text-2xl font-bold text-white">
                    {visa.type}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {visa.purposes.map((purpose, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-gray-300"
                    >
                      <CheckCircle2 className="w-5 h-5 text-[#D4A574] mt-0.5 flex-shrink-0" />
                      <span>{purpose}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Critical Success Factors */}
      <section className="py-20 bg-white/[0.02] relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Four Pillars of B1/B2 Visa Approval
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              What consular officers evaluate in your
              application
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
                <h3 className="text-2xl font-bold text-white mb-2">
                  {factor.title}
                </h3>
                <p className="text-gray-400 mb-4">
                  {factor.description}
                </p>
                <ul className="space-y-2">
                  {factor.elements.map((element, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-gray-300 text-sm"
                    >
                      <ArrowRight className="w-4 h-4 text-[#D4A574] mt-0.5 flex-shrink-0" />
                      <span>{element}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Our B1/B2 Visa Preparation Process
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive strategy from application to
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
                Don&apos;t Leave Your Visa to Chance
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Get expert B1/B2 strategy and interview
                preparation for maximum approval probability
              </p>
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-5 rounded-lg bg-[#D4A574] text-white font-bold text-xl shadow-xl hover:bg-[#b88b5c] transition-all inline-flex items-center gap-2"
                >
                  Start Preparation Now
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
              B1/B2 visa answers and strategies
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
            Ready for Your US Visit?
          </h2>
          <p className="text-lg text-gray-400 mb-8">
            Expert strategy - Documentation engineering -
            Interview coaching - Higher approval rates
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
