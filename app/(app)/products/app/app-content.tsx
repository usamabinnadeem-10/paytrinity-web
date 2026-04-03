"use client";

import { motion, AnimatePresence } from "motion/react";
import {
  Shield,
  FileText,
  Calendar,
  Phone,
  Globe,
  Bell,
  CheckCircle2,
  ArrowRight,
  Star,
  Lock,
  Package,
  Building2,
  CreditCard,
  ExternalLink,
  Sparkles,
  ChevronDown,
  BarChart3,
  MapPin,
  Rocket,
  Calculator,
  Scale,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const features = [
  {
    icon: FileText,
    title: "Confidential Document Vault",
    description:
      "All your state documents, EIN letters, certificates of formation, and operating agreements secured with bank-grade encryption. Download anytime, from anywhere.",
    gradient: "from-blue-500 to-cyan-500",
    benefits: [
      "State Formation Documents",
      "EIN Letter from IRS",
      "Operating Agreement",
      "Certificates & Amendments",
    ],
  },
  {
    icon: Calendar,
    title: "Smart Compliance Reminders",
    description:
      "Never miss a deadline again. Trinity App tracks your tax filing dates, annual report deadlines, BOI filing requirements, and sends you timely reminders.",
    gradient: "from-purple-500 to-pink-500",
    benefits: [
      "Tax Filing Deadlines",
      "Annual Report Reminders",
      "BOI Compliance Alerts",
      "State-Specific Notifications",
    ],
  },
  {
    icon: Building2,
    title: "Multi-Company Overview",
    description:
      "Manage multiple LLCs and C-Corps from one dashboard. See the active count, formation dates, states, and compliance status at a glance.",
    gradient: "from-emerald-500 to-green-500",
    benefits: [
      "Active Company Count",
      "Formation Timeline",
      "Multi-State Management",
      "Entity Status Dashboard",
    ],
  },
  {
    icon: MapPin,
    title: "Business Address Management",
    description:
      "Your registered agent address and virtual mailroom address visible in one place. Track where your business mail goes and manage address changes.",
    gradient: "from-amber-500 to-orange-500",
    benefits: [
      "Registered Agent Address",
      "Virtual Mailroom Address",
      "Address Change History",
      "Mail Forwarding Settings",
    ],
  },
  {
    icon: Phone,
    title: "Phone & Communication Services",
    description:
      "US phone numbers, call forwarding, voicemail transcription, and SMS management. Appear local to your American customers.",
    gradient: "from-cyan-500 to-blue-500",
    benefits: [
      "US Phone Numbers",
      "Call Forwarding",
      "Voicemail Transcription",
      "SMS Management",
    ],
  },
  {
    icon: Globe,
    title: "Website Development Hub",
    description:
      "Track your website development projects, domain registration, hosting status, and SSL certificates. Coming soon: one-click WordPress deployment.",
    gradient: "from-rose-500 to-red-500",
    benefits: [
      "Domain Management",
      "Hosting Dashboard",
      "SSL Certificates",
      "Development Tracking",
    ],
  },
  {
    icon: Bell,
    title: "Real-Time Notifications",
    description:
      "Get instant alerts for mail arrivals, compliance deadlines, document updates, and service renewals. Email + Dashboard + SMS notifications.",
    gradient: "from-violet-500 to-purple-500",
    benefits: [
      "Email Notifications",
      "In-App Alerts",
      "SMS Reminders",
      "Custom Alert Settings",
    ],
  },
  {
    icon: BarChart3,
    title: "Business Analytics",
    description:
      "Track your company growth, service usage, document downloads, and compliance score. Data-driven insights for your business operations.",
    gradient: "from-indigo-500 to-blue-500",
    benefits: [
      "Company Performance",
      "Service Usage Stats",
      "Compliance Score",
      "Growth Metrics",
    ],
  },
];

const dashboardHighlights = [
  {
    title: "Secure Document Vault",
    icon: Lock,
    description:
      "256-bit encryption protects your EIN letters, state certificates, and operating agreements",
    stat: "100% Secure",
  },
  {
    title: "Active Companies",
    icon: Building2,
    description:
      "Track all your LLCs and C-Corps with formation dates, states, and compliance status",
    stat: "Unlimited",
  },
  {
    title: "Compliance Score",
    icon: CheckCircle2,
    description:
      "Real-time compliance tracking ensures you never miss an annual report or tax deadline",
    stat: "99.9%",
  },
  {
    title: "Weekly Updates",
    icon: Sparkles,
    description:
      "Core development team ships new features, integrations, and improvements every week",
    stat: "Continuous",
  },
];

const clientTestimonials = [
  {
    name: "Salar Amin",
    company: "InfinityRefinder LLC",
    avatar:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop",
    quote:
      "The Trinity App dashboard makes managing my US company incredibly easy. I can access all my documents instantly and never worry about missing a compliance deadline.",
    rating: 5,
  },
  {
    name: "Riyan Nasir",
    company: "Blitzers LLC",
    avatar:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=150&h=150&fit=crop",
    quote:
      "Having everything in one place\u2014documents, tax reminders, phone services\u2014has saved me countless hours. The dashboard experience is exceptional.",
    rating: 5,
  },
  {
    name: "Usama Bin Nadeem",
    company: "TechTrinity LLC",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
    quote:
      "Best part? I can manage multiple companies from one dashboard and track all compliance requirements. Trinity App is a game-changer for international founders.",
    rating: 5,
  },
];

const linkedServices = [
  {
    name: "US Company Formation",
    description: "Launch your LLC or C-Corp with Trinity Start",
    icon: Rocket,
    link: "/products/start",
    color: "blue",
  },
  {
    name: "Trinity Mailroom",
    description: "Physical US address with mail scanning",
    icon: Package,
    link: "/products/mailroom",
    color: "purple",
  },
  {
    name: "Tax Compliance",
    description: "Annual tax filing and CPA review",
    icon: Calculator,
    link: "/products/tax",
    color: "green",
  },
  {
    name: "Legal Services",
    description: "IP protection and trademark registration",
    icon: Scale,
    link: "/legal-services",
    color: "amber",
  },
  {
    name: "Banking & Payments",
    description: "Mercury, Stripe, and payment setup",
    icon: CreditCard,
    link: "/services/physical-banking",
    color: "cyan",
  },
  {
    name: "Trinity Pro",
    description: "All-in-one annual subscription",
    icon: Star,
    link: "/products/pro",
    color: "pink",
  },
];

const faqs = [
  {
    question: "How do I access the Trinity App dashboard?",
    answer:
      "Once you purchase any PayTrinity service (company formation, mailroom, tax filing, etc.), you automatically get access to Trinity App. We'll send you login credentials via email within 24 hours of your purchase. You can access the dashboard at app.paytrinity.co",
  },
  {
    question: "Is Trinity App included for free?",
    answer:
      "Yes! Trinity App is completely free for all PayTrinity customers. Whether you purchase a one-time service like company formation or subscribe to Trinity Pro, you get lifetime access to the dashboard at no additional cost.",
  },
  {
    question: "What documents can I access in the dashboard?",
    answer:
      "You can access your Certificate of Formation, Operating Agreement, EIN Letter (SS-4 confirmation), Articles of Organization/Incorporation, any amendments, annual reports, registered agent documents, and all tax filings (Form 5472, 1120, 1065). Everything is downloadable as PDF with bank-grade encryption.",
  },
  {
    question: "Can I manage multiple companies from one account?",
    answer:
      "Absolutely! Trinity App is designed for entrepreneurs managing multiple entities. You can switch between companies using the company selector dropdown and see all your businesses in one unified dashboard.",
  },
  {
    question: "How do compliance reminders work?",
    answer:
      "Trinity App tracks your company's formation date, state requirements, and federal tax deadlines. We automatically calculate when your annual reports, BOI filings, and tax returns are due. You'll receive email reminders 60 days, 30 days, 14 days, and 7 days before each deadline. You can also view your compliance calendar directly in the dashboard.",
  },
  {
    question: "What new features are being added?",
    answer:
      "Our core development team ships new features weekly. Recent additions include: website development tracking, phone service management, business analytics dashboard, and multi-company overview. Upcoming features: accounting integration (QuickBooks, Xero), payment gateway dashboard (Stripe, PayPal revenue tracking), and one-click contract generation.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Yes. Trinity App uses bank-grade 256-bit encryption for all documents and data. We're hosted on AWS with SOC 2 Type II compliance. All documents are encrypted at rest and in transit. We never sell or share your data with third parties. You can enable two-factor authentication (2FA) for additional security.",
  },
  {
    question: "Can I purchase additional services through the dashboard?",
    answer:
      'Yes! The dashboard includes a "Services" section where you can purchase additional services like mailroom subscriptions, tax filing, trademark registration, phone numbers, website development, and more. All purchases are integrated directly into your dashboard for seamless management.',
  },
];

const colorMap: Record<string, string> = {
  blue: "from-blue-500/20 to-blue-600/20 border-blue-500/30 hover:border-blue-500/50",
  purple:
    "from-purple-500/20 to-purple-600/20 border-purple-500/30 hover:border-purple-500/50",
  green:
    "from-green-500/20 to-green-600/20 border-green-500/30 hover:border-green-500/50",
  amber:
    "from-amber-500/20 to-amber-600/20 border-amber-500/30 hover:border-amber-500/50",
  cyan: "from-cyan-500/20 to-cyan-600/20 border-cyan-500/30 hover:border-cyan-500/50",
  pink: "from-pink-500/20 to-pink-600/20 border-pink-500/30 hover:border-pink-500/50",
};

export function AppContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#020410] text-white">
      {/* Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-blue-600/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-purple-600/10 blur-[120px] rounded-full" />
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-24 px-6">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 border border-blue-500/30 mb-6 shadow-[0_0_30px_rgba(59,130,246,0.1)]">
                <Sparkles className="w-5 h-5 text-blue-400" />
                <span className="text-sm font-bold text-blue-200">
                  NEW FEATURES ADDED EVERY WEEK
                </span>
              </div>

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-[1.1]">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-400">
                  Your Business Command Center.
                </span>
                <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
                  Built for Entrepreneurs.
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed mb-12">
                Trinity App is the modern dashboard where international founders
                manage their US business&mdash;state documents, EIN letters, tax
                reminders, phone services, website development, and multi-company
                overview.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
                <Link href="/products/start">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-10 py-5 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg shadow-[0_0_30px_rgba(37,99,235,0.5)] hover:shadow-[0_0_50px_rgba(124,58,237,0.7)] transition-all flex items-center gap-3"
                  >
                    Get Started with Trinity App
                    <ArrowRight className="w-6 h-6" />
                  </motion.button>
                </Link>
              </div>

              {/* Free Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-300">
                <CheckCircle2 className="w-5 h-5" />
                <span className="text-sm font-semibold">
                  Free for all PayTrinity customers
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Dashboard Highlights Grid */}
      <section className="py-20 bg-white/[0.02] relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {dashboardHighlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-white/20 transition-all"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center mb-6 border border-blue-500/30">
                  <highlight.icon className="w-7 h-7 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {highlight.stat}
                </h3>
                <h4 className="text-lg font-semibold text-white mb-2">
                  {highlight.title}
                </h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {highlight.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Everything You Need in One Dashboard
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Trinity App consolidates your entire US business operation into a
              single, secure command center
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative p-8 rounded-3xl bg-gradient-to-br from-white/[0.07] to-white/[0.02] border border-white/10 hover:border-white/20 backdrop-blur-xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:shadow-[0_20px_60px_rgba(59,130,246,0.2)] transition-all duration-500"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-700`}
                />

                <div className="relative z-10">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 shadow-lg`}
                  >
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    {feature.description}
                  </p>

                  <div className="space-y-2">
                    {feature.benefits.map((benefit, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 text-sm text-gray-400"
                      >
                        <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Preview Section */}
      <section className="py-20 bg-white/[0.02] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Modern. Secure. Intuitive.
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Built by developers who understand what entrepreneurs need
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-[#0B1B3D]"
          >
            <div className="absolute top-0 left-0 right-0 h-12 bg-[#1A2C4E] flex items-center px-6 gap-2 border-b border-white/5">
              <div className="w-3 h-3 rounded-full bg-red-500/50" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
              <div className="w-3 h-3 rounded-full bg-green-500/50" />
              <div className="ml-6 px-4 py-1.5 bg-[#020410]/50 rounded-lg text-xs text-gray-500 font-mono">
                app.paytrinity.co/dashboard
              </div>
            </div>
            <div className="pt-12">
              <Image
                src="https://images.unsplash.com/photo-1590010358311-55d7c0769a3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXNoYm9hcmQlMjB1aSUyMGRhcmslMjBtb2RlfGVufDF8fHx8MTc2OTg3MjI5NXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Trinity App Dashboard"
                width={1080}
                height={720}
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-400">
              Real feedback about the Trinity App experience
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {clientTestimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-500 fill-yellow-500"
                    />
                  ))}
                </div>
                <p className="text-gray-300 leading-relaxed mb-6 italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-800">
                    <Image
                      src={testimonial.avatar}
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
                    <div className="text-sm text-gray-400">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Linked Services Section */}
      <section className="py-20 bg-white/[0.02] relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Services Integrated with Trinity App
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Purchase these services and manage everything directly from your
              dashboard
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {linkedServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={service.link} className="block group">
                  <div
                    className={`p-6 rounded-2xl bg-gradient-to-br ${colorMap[service.color]} border backdrop-blur-sm transition-all duration-300 h-full`}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="p-3 rounded-xl bg-white/5">
                        <service.icon className="w-6 h-6 text-gray-300" />
                      </div>
                      <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">
                      {service.name}
                    </h3>
                    <p className="text-sm text-gray-400">
                      {service.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-400">
              Everything you need to know about Trinity App
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
                className="rounded-2xl bg-white/5 border border-white/10 overflow-hidden"
              >
                <button
                  onClick={() =>
                    setOpenFaq(openFaq === index ? null : index)
                  }
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                >
                  <span className="font-semibold text-lg pr-8 text-white">
                    {faq.question}
                  </span>
                  <div
                    className={`transition-transform duration-300 ${openFaq === index ? "rotate-180" : ""}`}
                  >
                    <ChevronDown className="w-5 h-5 text-blue-400" />
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

      {/* Final CTA */}
      <section className="py-20 relative">
        <div className="max-w-5xl mx-auto px-6">
          <div className="relative rounded-3xl overflow-hidden p-16 text-center border border-white/10 bg-gradient-to-br from-blue-900/30 via-purple-900/30 to-cyan-900/30 backdrop-blur-xl">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />

            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                Ready to Experience Trinity App?
              </h2>
              <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
                Get instant access to Trinity App when you purchase any
                PayTrinity service. Start managing your US business like a pro.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link href="/products/start">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-10 py-5 rounded-full bg-white text-[#020410] font-bold text-lg shadow-2xl hover:shadow-white/30 transition-all inline-flex items-center gap-3"
                  >
                    Get Started Now
                    <ArrowRight className="w-6 h-6" />
                  </motion.button>
                </Link>
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-10 py-5 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 text-white font-bold text-lg transition-all"
                  >
                    Schedule Demo
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
