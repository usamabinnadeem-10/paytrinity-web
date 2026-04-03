"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Briefcase,
  Building2,
  Calculator,
  CheckCircle2,
  CreditCard,
  Globe,
  GraduationCap,
  LayoutDashboard,
  Package,
  Plus,
  Rocket,
  Scale,
  Shield,
  Sparkles,
  Star,
  TrendingUp,
  User,
  Zap,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Marquee from "react-fast-marquee";

import { CountUpStat } from "@/components/CountUpStat";

const PLATFORM_LOGOS = [
  { name: "Stripe", opacity: 0.8 },
  { name: "Mercury", opacity: 0.8 },
  { name: "Wise", opacity: 0.8 },
  { name: "Brex", opacity: 0.8 },
  { name: "Deel", opacity: 0.8 },
  { name: "Rippling", opacity: 0.8 },
  { name: "AngelList", opacity: 0.8 },
  { name: "Carta", opacity: 0.8 },
  { name: "Ramp", opacity: 0.8 },
  { name: "Gusto", opacity: 0.8 },
  { name: "Zenefits", opacity: 0.8 },
  { name: "Lattice", opacity: 0.8 },
  { name: "Expensify", opacity: 0.8 },
  { name: "Bill.com", opacity: 0.8 },
  { name: "Divvy", opacity: 0.8 },
  { name: "QuickBooks", opacity: 0.8 },
  { name: "Xero", opacity: 0.8 },
  { name: "Remote", opacity: 0.8 },
  { name: "Payoneer", opacity: 0.8 },
  { name: "TransferWise", opacity: 0.8 },
] as const;

const FEATURES = [
  {
    title: "Legal Services",
    desc: "Intellectual property, business law, and regulatory compliance for global startups.",
    icon: <Scale className="w-6 h-6 text-amber-400" />,
    gradient: "from-amber-500/20 to-yellow-500/20",
    link: "/legal-services",
  },
  {
    title: "US Formation & ITIN",
    desc: "Launch your LLC/C-Corp and get your Tax ID without visiting the US.",
    icon: <Building2 className="w-6 h-6 text-cyan-400" />,
    gradient: "from-cyan-500/20 to-blue-500/20",
    link: "/products/start",
  },
  {
    title: "Trinity Mailroom",
    desc: "A physical US address where we scan and upload your mail daily.",
    icon: <Package className="w-6 h-6 text-blue-400" />,
    gradient: "from-blue-500/20 to-purple-500/20",
    link: "/products/mailroom",
  },
  {
    title: "Banking & Payments",
    desc: "Guaranteed access to Mercury, Brex, Stripe, and physical US banks.",
    icon: <CreditCard className="w-6 h-6 text-purple-400" />,
    gradient: "from-purple-500/20 to-pink-500/20",
    link: "/services/physical-banking",
  },
  {
    title: "Tax & Compliance",
    desc: "Automated state filings, annual reports, and federal tax returns.",
    icon: <Calculator className="w-6 h-6 text-pink-400" />,
    gradient: "from-pink-500/20 to-red-500/20",
    link: "/products/tax",
  },
] as const;

const TESTIMONIALS = [
  {
    name: "Salar Amin",
    company: "InfinityRefinder LLC",
    role: "Founder",
    quote:
      "I had an excellent experience using his services. He handled everything from registering my LLC in the United States to creating my Stripe account. Highly recommended!",
    image: "/images/salar.png",
  },
  {
    name: "Usama Bin Nadeem",
    company: "TechTrinity LLC",
    role: "Wyoming",
    quote:
      "From ITIN to company formation and tax services, PayTrinity has been our go-to compliance partner.",
    image:
      "https://images.unsplash.com/photo-1543879739-ab87be3df369?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBhc2lhbiUyMGJ1c2luZXNzbWFufGVufDF8fHx8MTc2OTI5NzkzOHww&ixlib=rb-4.1.0&q=80&w=400&utm_source=figma&utm_medium=referral",
  },
  {
    name: "Usama Sheraz",
    company: "SherazStainlessSteel LLC",
    role: "New Jersey",
    quote:
      "Complete US setup plus Amazon business and payment processor support. Smooth experience.",
    image:
      "https://images.unsplash.com/photo-1656399910084-4138117677c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1hbiUyMHNtaWxpbmclMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjkzNzAwMzR8MA&ixlib=rb-4.1.0&q=80&w=400&utm_source=figma&utm_medium=referral",
  },
  {
    name: "Riyan Nasir",
    company: "Blitzers LLC",
    role: "New Jersey",
    quote:
      "Company and EIN completed in just 12 hours. Quarterly tax services, trademark filing, and Stripe setup handled professionally.",
    image:
      "https://images.unsplash.com/photo-1582989710213-96b0be274b95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwc3RhcnR1cCUyMG93bmVyfGVufDF8fHx8MTc2OTM3MDA0Mnww&ixlib=rb-4.1.0&q=80&w=400&utm_source=figma&utm_medium=referral",
  },
  {
    name: "Muhammad Waqas Shahid",
    company: "Safe Surf LLC",
    role: "Florida",
    quote:
      "Excellent support for our US expansion. The team is knowledgeable and responsive.",
    image:
      "https://images.unsplash.com/photo-1762163831325-7e54185ae70f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBvZmZpY2UlMjBzdWl0fGVufDF8fHx8MTc2OTM2OTk0M3ww&ixlib=rb-4.1.0&q=80&w=400&utm_source=figma&utm_medium=referral",
  },
  {
    name: "Samina Adil",
    company: "One Stop Shopping LLC",
    role: "New Jersey",
    quote:
      "A seamless process for setting up our US entity. Highly recommended for international founders.",
    image:
      "https://images.unsplash.com/photo-1581065178047-8ee15951ede6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMHdvbWFuJTIwYnVzaW5lc3N8ZW58MXx8fHwxNzY5MzY5OTIwfDA&ixlib=rb-4.1.0&q=80&w=400&utm_source=figma&utm_medium=referral",
  },
] as const;

const FAQS = [
  {
    question: "Do I need to visit the US to open a bank account?",
    answer:
      "No, you do not need to visit the US. Our partner banks (Mercury, Brex, Relay) allow you to open business bank accounts remotely using the documents we provide.",
  },
  {
    question: "How long does company formation take?",
    answer:
      "Typically, we can form your Wyoming or Delaware LLC in 2-4 business days. Getting your EIN (Employer Identification Number) from the IRS can take an additional 10-14 business days depending on IRS processing times.",
  },
  {
    question:
      "What is the difference between Trinity Start and Trinity Pro?",
    answer:
      "Trinity Start is our formation package that gets your business up and running with incorporation, EIN, and operating agreement. Trinity Pro is an annual subscription that includes ongoing compliance, annual report filings, registered agent service, and unlimited mailroom.",
  },
  {
    question: "Do I get a real physical address?",
    answer:
      "Yes! Unlike competitors who provide PO Boxes, we provide a real physical street address in the US. This is critical for opening bank accounts and complying with federal regulations.",
  },
  {
    question: "Do you support non-US residents?",
    answer:
      "Absolutely. 95% of our clients are international founders. We specialize in helping non-US residents launch and manage their US businesses compliantly.",
  },
] as const;

export function HomeContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#020410] text-white selection:bg-blue-500 selection:text-white font-sans overflow-x-hidden">
      {/* Background Gradients */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-blue-600/10 blur-[120px] rounded-full mix-blend-screen animate-pulse duration-[10000ms]" />
        <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-purple-600/10 blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-[-20%] left-[20%] w-[800px] h-[800px] bg-cyan-600/10 blur-[120px] rounded-full mix-blend-screen" />
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
            {/* Trinity Legal Chambers Badge */}
            <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-gradient-to-r from-amber-500/10 via-yellow-500/10 to-amber-500/10 border border-amber-500/30 backdrop-blur-md mb-6 hover:border-amber-500/50 transition-all cursor-default shadow-[0_0_20px_rgba(251,191,36,0.15)]">
              <Scale className="w-5 h-5 text-amber-400" />
              <span className="text-base font-bold text-amber-100 tracking-wide">
                Trinity Legal Chambers
              </span>
              <div className="w-px h-5 bg-amber-500/30" />
              <span className="text-sm font-medium text-amber-200/80">
                IRS Certified Acceptance Agent
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-[1.1]">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-400">
                Legal, Tax & Business
              </span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-gradient-x">
                Infrastructure for Global Founders
              </span>
            </h1>

            {/* Law Firm Tagline */}
            <div className="mt-8 mb-6">
              <p className="text-2xl md:text-3xl font-semibold text-gray-300 tracking-wide">
                Attorney & IRS CAA | Cross-Border Legal Authority
              </p>
            </div>

            <p className="mt-6 text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-light">
              Trinity Legal Chambers provides legal services, regulatory
              compliance, and business infrastructure for entrepreneurs
              navigating US formation, intellectual property, tax matters, and
              cross-border operations.
            </p>

            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href="/legal-services">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 rounded-full bg-gradient-to-r from-amber-600 to-yellow-600 text-white font-bold text-lg shadow-[0_0_20px_rgba(217,119,6,0.5)] hover:shadow-[0_0_40px_rgba(217,119,6,0.7)] transition-all flex items-center gap-2"
                >
                  Legal Services
                  <Scale className="w-5 h-5" />
                </motion.button>
              </Link>
              <Link href="/products/start">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg shadow-[0_0_20px_rgba(37,99,235,0.5)] hover:shadow-[0_0_40px_rgba(124,58,237,0.6)] transition-all flex items-center gap-2"
                >
                  US Business Formation
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-medium text-lg hover:bg-white/10 transition-all backdrop-blur-sm"
                >
                  Schedule Consultation
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Logo Ticker */}
      <section className="py-10 border-y border-white/5 bg-white/[0.02]">
        <Marquee gradient={true} gradientColor="#020410" speed={60}>
          {PLATFORM_LOGOS.map((logo) => (
            <div
              key={logo.name}
              className="mx-12 opacity-40 hover:opacity-100 transition-opacity duration-300"
            >
              <span className="text-2xl font-bold text-white">
                {logo.name}
              </span>
            </div>
          ))}
        </Marquee>
      </section>

      {/* Featured Products Section */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          {/* WHO WE WORK WITH Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-24 text-center max-w-4xl mx-auto"
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-bold uppercase tracking-wider mb-6">
              WHO WE WORK WITH
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
              We work with:
            </h2>

            <div className="grid md:grid-cols-2 gap-4 text-left">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <div className="p-2 rounded-lg bg-blue-500/20 mt-1">
                  <Rocket className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <p className="text-lg font-semibold text-white">
                    Startups and technology companies
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <div className="p-2 rounded-lg bg-purple-500/20 mt-1">
                  <Globe className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <p className="text-lg font-semibold text-white">
                    International entrepreneurs
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <div className="p-2 rounded-lg bg-cyan-500/20 mt-1">
                  <CreditCard className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <p className="text-lg font-semibold text-white">
                    Investors and venture platforms
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <div className="p-2 rounded-lg bg-pink-500/20 mt-1">
                  <Scale className="w-5 h-5 text-pink-400" />
                </div>
                <div>
                  <p className="text-lg font-semibold text-white">
                    Policy stakeholders and institutions
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Complete Product Suite Banner */}
          <div className="relative rounded-3xl overflow-hidden mb-24 bg-gradient-to-r from-[#0B1B3D] via-[#112240] to-[#0B1B3D] border border-white/10">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] -translate-x-1/2 translate-y-1/2" />

            <div className="relative z-10 px-8 py-16 md:px-16 text-center">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                The{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  Complete Product Suite
                </span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
                Everything you need to launch, manage, and scale your US
                business from anywhere in the world.
              </p>

              {/* Quick Navigation Pills */}
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="#trinity-start"
                  className="px-6 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 hover:bg-cyan-500/20 transition-colors flex items-center gap-2 font-medium"
                >
                  <Rocket size={16} /> Trinity Start
                </a>
                <a
                  href="#trinity-pro"
                  className="px-6 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 hover:bg-purple-500/20 transition-colors flex items-center gap-2 font-medium"
                >
                  <Star size={16} /> Trinity Pro
                </a>
                <a
                  href="#paytrinity-tax"
                  className="px-6 py-2 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-300 hover:bg-pink-500/20 transition-colors flex items-center gap-2 font-medium"
                >
                  <Calculator size={16} /> PayTrinity Tax
                </a>
                <a
                  href="#trinity-one"
                  className="px-6 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 hover:bg-amber-500/20 transition-colors flex items-center gap-2 font-medium"
                >
                  <Zap size={16} /> Trinity One
                </a>
              </div>
            </div>
          </div>

          {/* Feature Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {FEATURES.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="h-full"
              >
                <Link href={feature.link} className="block h-full">
                  <div className="group relative p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-all overflow-hidden h-full">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl`}
                    />

                    <div className="relative z-10 flex flex-col h-full">
                      <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 border border-white/10 group-hover:scale-110 transition-transform duration-300">
                        {feature.icon}
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-white">
                        {feature.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed text-sm flex-grow">
                        {feature.desc}
                      </p>
                      <div className="mt-4 flex items-center text-sm font-medium text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-[-10px] group-hover:translate-x-0">
                        Learn more <ArrowRight className="ml-1 w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Popular Services Section */}
          <div className="mt-20 flex flex-col gap-8">
            {/* ITIN Service Card - Full Width */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative w-full rounded-[2rem] border border-white/10 overflow-hidden shadow-2xl bg-[#0B1B3D]/30 backdrop-blur-xl group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="p-10 relative z-20 flex flex-col md:flex-row items-center gap-12">
                <div className="flex-1">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-wider mb-6 border border-blue-500/20 w-fit">
                    <CheckCircle2 size={12} fill="currentColor" />
                    Essential for Founders
                  </div>
                  <h3 className="text-3xl font-bold mb-4 text-white">
                    ITIN Application Service
                  </h3>
                  <p className="text-gray-400 mb-8 leading-relaxed">
                    Get your US Tax ID (ITIN) without mailing your passport. We
                    are IRS Certified Acceptance Agents authorized to verify you
                    via video call.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2 text-sm text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-blue-400" /> No
                      passport mailing required
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-blue-400" /> 100%
                      Success Guarantee
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-blue-400" /> IRS
                      Certified Agents
                    </li>
                  </ul>
                </div>
                <div className="w-full md:w-auto flex-shrink-0">
                  <Link href="/services/itin-application">
                    <button type="button" className="w-full md:w-auto px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold transition-all shadow-lg shadow-blue-900/20 whitespace-nowrap">
                      Get Your ITIN
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Grid of 3 Products */}
            <div className="grid md:grid-cols-3 gap-6">
              {/* Trinity Pro Card - Most Popular */}
              <motion.div
                id="trinity-pro"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="relative rounded-[2rem] border border-white/10 overflow-hidden shadow-2xl bg-[#0B1B3D]/50 backdrop-blur-xl group flex flex-col"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-[#020410] via-transparent to-transparent z-10" />
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="p-8 relative z-20 flex flex-col h-full">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs font-bold uppercase tracking-wider mb-6 border border-purple-500/20 w-fit">
                    <Star size={12} fill="currentColor" />
                    Most Popular
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">
                    Trinity Pro
                  </h3>
                  <p className="text-gray-400 mb-8 flex-1 text-sm leading-relaxed">
                    The all-in-one operating system. Incorporate your company,
                    manage mail, file taxes, and handle compliance in one
                    dashboard.
                  </p>

                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center gap-2 text-sm text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-purple-400" /> Free
                      Registered Agent
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-purple-400" />{" "}
                      Annual Tax Filings Included
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-purple-400" />{" "}
                      Unlimited Mailroom
                    </li>
                  </ul>

                  <Link href="/products/pro" className="mt-auto">
                    <button type="button" className="w-full py-4 rounded-xl bg-white text-black font-bold hover:bg-gray-100 transition-all shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                      Get Trinity Pro Access
                    </button>
                  </Link>
                </div>
              </motion.div>

              {/* Trinity Mailroom Card */}
              <motion.div
                id="trinity-mailroom"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="relative rounded-[2rem] border border-white/10 overflow-hidden shadow-2xl bg-[#0B1B3D]/30 backdrop-blur-xl group flex flex-col"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="p-8 relative z-20 flex flex-col h-full">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-wider mb-6 border border-blue-500/20 w-fit">
                    <Package size={12} fill="currentColor" />
                    Virtual Address
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">
                    Trinity Mailroom
                  </h3>
                  <p className="text-gray-400 mb-8 flex-1 text-sm leading-relaxed">
                    A prestigious US physical address for your business. We scan
                    your mail and upload it to your dashboard same-day.
                  </p>

                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center gap-2 text-sm text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-blue-400" /> Real
                      US Street Address
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-blue-400" />{" "}
                      Unlimited Mail Scanning
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-blue-400" /> Check
                      Deposit Support
                    </li>
                  </ul>

                  <Link href="/products/mailroom" className="mt-auto">
                    <button type="button" className="w-full py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold transition-all shadow-lg shadow-blue-900/20">
                      Get Mailroom
                    </button>
                  </Link>
                </div>
              </motion.div>

              {/* PayTrinity Tax Card */}
              <motion.div
                id="paytrinity-tax"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="relative rounded-[2rem] border border-white/10 overflow-hidden shadow-2xl bg-[#0B1B3D]/30 backdrop-blur-xl group flex flex-col"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-pink-600/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="p-8 relative z-20 flex flex-col h-full">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/20 text-pink-300 text-xs font-bold uppercase tracking-wider mb-6 border border-pink-500/20 w-fit">
                    <Calculator size={12} fill="currentColor" />
                    Tax Services
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">
                    PayTrinity Tax
                  </h3>
                  <p className="text-gray-400 mb-8 flex-1 text-sm leading-relaxed">
                    Stress-free tax filing for non-US founders. We handle 1065,
                    1120, and 5472 forms with expert CPA review.
                  </p>

                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center gap-2 text-sm text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-pink-400" /> CPA
                      Reviewed Returns
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-pink-400" /> Form
                      5472 & 1120 Compliance
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-pink-400" /> State
                      & Federal Filing
                    </li>
                  </ul>

                  <Link href="/products/tax" className="mt-auto">
                    <button type="button" className="w-full py-4 rounded-xl bg-pink-600 hover:bg-pink-500 text-white font-bold transition-all shadow-lg shadow-pink-900/20">
                      File Your Taxes
                    </button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* TRINITY LEGAL CHAMBERS TEAM SECTION */}
      <section className="py-32 relative overflow-hidden bg-gradient-to-b from-[#0B1B3D]/20 via-[#020410] to-[#020410] border-y border-white/5">
        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-amber-500/5 blur-[120px] rounded-full" />
          <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-500/5 blur-[120px] rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-500/10 via-blue-500/10 to-purple-500/10 border border-amber-500/30 mb-6 shadow-[0_0_30px_rgba(212,165,116,0.1)]">
              <Scale className="w-5 h-5 text-amber-400" />
              <span className="text-sm font-bold text-amber-200 tracking-wide">
                TRINITY LEGAL CHAMBERS
              </span>
            </div>

            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="text-white">Meet Our</span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-200 via-blue-200 to-purple-200">
                Legal & Advisory Team
              </span>
            </h2>

            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              UK-trained legal expertise combined with cross-border business
              infrastructure, serving international founders navigating US
              formation, tax compliance, and regulatory matters.
            </p>
          </motion.div>

          {/* Team Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Founder - Haris Bin Nadeem (Large Featured Card) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="md:col-span-3 lg:col-span-3"
            >
              <div className="group relative p-10 rounded-3xl bg-gradient-to-br from-white/[0.08] via-white/[0.04] to-transparent border-2 border-amber-500/30 backdrop-blur-xl overflow-hidden shadow-[0_20px_60px_rgba(212,165,116,0.2)] hover:shadow-[0_30px_80px_rgba(212,165,116,0.3)] transition-all duration-700">
                {/* Animated gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 via-blue-500/0 to-purple-500/0 group-hover:from-amber-500/5 group-hover:via-blue-500/5 group-hover:to-purple-500/5 transition-all duration-700" />
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />

                <div className="relative z-10 flex flex-col lg:flex-row items-center gap-10">
                  {/* Image */}
                  <div className="relative flex-shrink-0">
                    <div className="relative w-64 h-64 rounded-2xl overflow-hidden border-4 border-amber-500/30 shadow-2xl group-hover:border-amber-500/50 transition-all duration-500">
                      <Image
                        src="/images/founder.png"
                        alt="Haris Bin Nadeem - Founder & Attorney"
                        width={256}
                        height={256}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      {/* Image overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#020410]/60 via-transparent to-transparent" />
                    </div>
                    {/* Floating badge */}
                    <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-amber-500 text-[#020410] font-bold text-sm shadow-lg whitespace-nowrap">
                      Founder & Attorney
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 text-center lg:text-left">
                    <div className="mb-6">
                      <h3 className="text-4xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-amber-200 group-hover:to-blue-200 transition-all duration-500">
                        Haris Bin Nadeem
                      </h3>
                      <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 text-sm text-gray-400 mb-4">
                        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20">
                          <Shield className="w-4 h-4 text-blue-400" />
                          <span>Attorney</span>
                        </div>
                        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20">
                          <CheckCircle2 className="w-4 h-4 text-green-400" />
                          <span>IRS Certified Acceptance Agent</span>
                        </div>
                        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20">
                          <GraduationCap className="w-4 h-4 text-purple-400" />
                          <span>UK-Trained Legal Professional</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-lg text-gray-300 leading-relaxed mb-6">
                      Founder of Trinity Legal Chambers and PayTrinity, Haris
                      brings UK legal training and cross-border expertise to
                      help international entrepreneurs navigate US business
                      formation, tax compliance, intellectual property, and
                      regulatory systems. As an IRS Certified Acceptance Agent,
                      he specializes in ITIN applications and federal tax
                      matters for non-US residents.
                    </p>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                        <div className="text-3xl font-bold text-amber-400 mb-1">
                          500+
                        </div>
                        <div className="text-sm text-gray-400">
                          Companies Formed
                        </div>
                      </div>
                      <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                        <div className="text-3xl font-bold text-blue-400 mb-1">
                          50+
                        </div>
                        <div className="text-sm text-gray-400">
                          Countries Served
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                      <a
                        href="https://www.linkedin.com/in/haris-bin-nadeem/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          className="px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm shadow-lg transition-all inline-flex items-center gap-2"
                        >
                          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                          LinkedIn Profile
                        </motion.button>
                      </a>
                      <Link href="/about">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          className="px-6 py-3 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 text-white font-semibold text-sm transition-all inline-flex items-center gap-2"
                        >
                          <User className="w-4 h-4" />
                          Full Bio
                        </motion.button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Associate 1 - Legal Counsel */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group"
            >
              <div className="relative h-full p-8 rounded-2xl bg-gradient-to-br from-white/[0.06] to-white/[0.02] border border-white/10 hover:border-white/20 backdrop-blur-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/5 group-hover:to-cyan-500/5 transition-all duration-700" />

                <div className="relative z-10">
                  {/* Avatar */}
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-3 border-blue-500/30 shadow-xl group-hover:border-blue-500/50 transition-all">
                    <Image
                      src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop"
                      alt="Senior Legal Counsel"
                      width={128}
                      height={128}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>

                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Ahmed Khan
                    </h3>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm mb-4">
                      <Briefcase className="w-3 h-3" />
                      Senior Legal Counsel
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Specializes in corporate law, contract drafting, and
                      compliance matters. Advises on US entity structuring and
                      international business transactions.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Associate 2 - Tax Specialist */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="group"
            >
              <div className="relative h-full p-8 rounded-2xl bg-gradient-to-br from-white/[0.06] to-white/[0.02] border border-white/10 hover:border-white/20 backdrop-blur-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/0 to-emerald-500/0 group-hover:from-green-500/5 group-hover:to-emerald-500/5 transition-all duration-700" />

                <div className="relative z-10">
                  {/* Avatar */}
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-3 border-green-500/30 shadow-xl group-hover:border-green-500/50 transition-all">
                    <Image
                      src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=300&h=300&fit=crop"
                      alt="Tax & Compliance Specialist"
                      width={128}
                      height={128}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>

                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Sarah Mitchell
                    </h3>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-300 text-sm mb-4">
                      <Calculator className="w-3 h-3" />
                      Tax & Compliance Specialist
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Expert in US federal and state tax compliance for
                      non-residents. Handles ITIN applications, annual filings,
                      and international tax matters.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Associate 3 - Business Development */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="group"
            >
              <div className="relative h-full p-8 rounded-2xl bg-gradient-to-br from-white/[0.06] to-white/[0.02] border border-white/10 hover:border-white/20 backdrop-blur-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/5 group-hover:to-pink-500/5 transition-all duration-700" />

                <div className="relative z-10">
                  {/* Avatar */}
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-3 border-purple-500/30 shadow-xl group-hover:border-purple-500/50 transition-all">
                    <Image
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop"
                      alt="Business Development Manager"
                      width={128}
                      height={128}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>

                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      David Chen
                    </h3>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm mb-4">
                      <TrendingUp className="w-3 h-3" />
                      Business Development Manager
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Focuses on helping international entrepreneurs establish
                      their US presence. Coordinates banking, payment
                      processing, and infrastructure services.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-center"
          >
            <div className="max-w-4xl mx-auto p-10 rounded-3xl bg-gradient-to-br from-amber-500/5 via-blue-500/5 to-purple-500/5 border border-white/10 backdrop-blur-xl">
              <p className="text-xl text-gray-300 leading-relaxed mb-6">
                <span className="text-white font-semibold">
                  Trinity Legal Chambers
                </span>{" "}
                operates at the intersection of legal practice, policy research,
                and global business infrastructure -- supporting those building
                and operating in an increasingly regulated and interconnected
                economy.
              </p>
              <Link href="/about">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="px-8 py-4 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold shadow-lg transition-all inline-flex items-center gap-2"
                >
                  Learn More About Us
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trinity App Teaser Section */}
      <section
        id="trinity-one"
        className="py-24 relative overflow-hidden border-t border-white/5"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1B3D]/20 to-transparent" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                  <span className="text-white">
                    Your Business Command Center.
                  </span>
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500">
                    Built for Entrepreneurs.
                  </span>
                </h2>
                <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                  Meet{" "}
                  <strong className="text-white">Trinity App</strong>. The
                  modern dashboard where international founders manage their US
                  business -- state documents, EIN letters, tax reminders, phone
                  services, and more.
                </p>

                <div className="flex flex-col gap-4 mb-10">
                  <div className="flex items-start gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all group">
                    <div className="bg-green-500/20 p-3 rounded-xl group-hover:scale-110 transition-transform">
                      <Shield className="w-6 h-6 text-green-400" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white mb-1">
                        Confidential Document Vault
                      </h3>
                      <p className="text-sm text-gray-400">
                        State documents, EIN letters, and certificates secured
                        with bank-grade encryption
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all group">
                    <div className="bg-blue-500/20 p-3 rounded-xl group-hover:scale-110 transition-transform">
                      <Zap className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white mb-1">
                        Smart Compliance Reminders
                      </h3>
                      <p className="text-sm text-gray-400">
                        Tax deadlines, annual reports, BOI filing -- never miss
                        a critical date
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all group">
                    <div className="bg-purple-500/20 p-3 rounded-xl group-hover:scale-110 transition-transform">
                      <LayoutDashboard className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white mb-1">
                        Multi-Company Overview
                      </h3>
                      <p className="text-sm text-gray-400">
                        Manage multiple LLCs and track phone services, websites,
                        and business addresses
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/products/app">
                    <button type="button" className="px-8 py-4 rounded-xl bg-white text-[#020410] font-bold hover:bg-gray-100 transition-all flex items-center gap-2">
                      Explore Trinity App <ArrowRight className="w-4 h-4" />
                    </button>
                  </Link>
                  <div className="flex items-center gap-2 px-6 py-4 rounded-xl bg-white/5 border border-white/10">
                    <Sparkles className="w-5 h-5 text-amber-400" />
                    <span className="text-sm text-gray-300">
                      New features added weekly
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Column */}
            <motion.div
              initial={{ opacity: 0, x: 30, rotateY: 10 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative perspective-1000"
            >
              <div className="relative rounded-xl overflow-hidden shadow-2xl border border-white/10 bg-[#0B1B3D] group">
                <div className="absolute top-0 left-0 right-0 h-10 bg-[#1A2C4E] flex items-center px-4 gap-2 border-b border-white/5">
                  <div className="w-3 h-3 rounded-full bg-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/50" />
                  <div className="ml-4 px-3 py-1 bg-[#020410]/50 rounded-md text-[10px] text-gray-500 font-mono w-64">
                    app.paytrinity.co/dashboard
                  </div>
                </div>
                <div className="pt-10">
                  <Image
                    src="https://images.unsplash.com/photo-1590010358311-55d7c0769a3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXNoYm9hcmQlMjB1aSUyMGRhcmslMjBtb2RlfGVufDF8fHx8MTc2OTg3MjI5NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Trinity One Dashboard Interface"
                    width={1080}
                    height={720}
                    className="w-full h-auto opacity-90 group-hover:opacity-100 transition-opacity"
                  />
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020410] via-transparent to-transparent opacity-50" />
                </div>
              </div>

              {/* Floating Elements for Depth */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -right-8 -bottom-8 p-4 rounded-xl bg-[#1A2C4E]/90 backdrop-blur-md border border-white/10 shadow-xl hidden md:block"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-green-500/20 rounded-lg">
                    <CheckCircle2 className="w-4 h-4 text-green-400" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400">Status</div>
                    <div className="text-sm font-bold text-white">
                      Active & Compliant
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bento Grid Stats */}
      <section className="py-20 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-8 rounded-3xl bg-gradient-to-br from-blue-900/20 to-transparent border border-white/10 flex flex-col items-center justify-center text-center"
            >
              <h3 className="text-5xl font-bold text-blue-400 mb-2">
                <CountUpStat value={15} suffix="k+" />
              </h3>
              <p className="text-gray-400">Founders Onboarded</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-8 rounded-3xl bg-gradient-to-br from-purple-900/20 to-transparent border border-white/10 flex flex-col items-center justify-center text-center"
            >
              <h3 className="text-5xl font-bold text-purple-400 mb-2">
                <CountUpStat value={99.9} suffix="%" decimals={1} />
              </h3>
              <p className="text-gray-400">Success Rate</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-8 rounded-3xl bg-gradient-to-br from-cyan-900/20 to-transparent border border-white/10 flex flex-col items-center justify-center text-center"
            >
              <h3 className="text-5xl font-bold text-cyan-400 mb-2">
                <CountUpStat value={500} prefix="$" suffix="M+" />
              </h3>
              <p className="text-gray-400">Client Revenue Processed</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Trusted by Founders
            </h2>
            <p className="text-gray-400">
              Don&apos;t just take our word for it.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial, i) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors flex flex-col"
              >
                <div className="flex gap-1 mb-4">
                  <Star size={16} className="text-yellow-500 fill-yellow-500" />
                  <Star size={16} className="text-yellow-500 fill-yellow-500" />
                  <Star size={16} className="text-yellow-500 fill-yellow-500" />
                  <Star size={16} className="text-yellow-500 fill-yellow-500" />
                  <Star size={16} className="text-yellow-500 fill-yellow-500" />
                </div>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed flex-1">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="flex items-center gap-4 mt-auto">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-800 flex-shrink-0">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-bold text-white">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-500">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="relative rounded-[3rem] overflow-hidden p-12 md:p-24 text-center border border-white/10">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 via-purple-900/40 to-cyan-900/40 backdrop-blur-sm" />

            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white">
                Ready to Launch?
              </h2>
              <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
                Join the platform that powers the next generation of global
                startups.
              </p>

              <Link href="/products/start">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-12 py-5 rounded-full bg-white text-[#020410] font-bold text-xl shadow-2xl hover:shadow-white/20 transition-all"
                >
                  Get Started Now
                </motion.button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-400">
                Everything you need to know about setting up your US business.
              </p>
            </motion.div>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-2xl bg-white/5 border border-white/10 overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() =>
                    setOpenFaq(openFaq === index ? null : index)
                  }
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                >
                  <span className="font-semibold text-lg pr-8 text-white">
                    {faq.question}
                  </span>
                  <div
                    className={`p-2 rounded-full bg-white/5 transition-transform duration-300 ${openFaq === index ? "rotate-45" : ""}`}
                  >
                    <Plus className="w-5 h-5 text-blue-400" />
                  </div>
                </button>
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 text-gray-400 leading-relaxed border-t border-white/5 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
