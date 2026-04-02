"use client";

import { motion } from "motion/react";
import {
  ArrowRight,
  Calendar,
  MessageCircle,
  Star,
  Award,
  Briefcase,
  Users,
  MapPin,
  Phone,
  Mail,
  ExternalLink,
  CheckCircle2,
  Building2,
  Scale,
  Globe,
  Clock,
  TrendingUp,
  Shield,
  Zap,
  Sparkles,
  Target,
  FileCheck,
  Stamp,
  CreditCard,
} from "lucide-react";

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 100 12.324 6.162 6.162 0 100-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405a1.441 1.441 0 11-2.882 0 1.441 1.441 0 012.882 0z" />
    </svg>
  );
}
import Link from "next/link";

const socialLinks = [
  {
    name: "Book Consultation",
    icon: Calendar,
    href: "https://calendly.com/paytrinity/30min",
    color: "blue",
    description: "Schedule a 30-min strategy call",
    cta: "Book Now",
  },
  {
    name: "WhatsApp Business",
    icon: MessageCircle,
    href: "https://wa.me/5513069930",
    color: "green",
    description: "Quick response guaranteed",
    cta: "Chat Now",
  },
  {
    name: "LinkedIn - Haris Bin Nadeem",
    icon: LinkedinIcon,
    href: "https://www.linkedin.com/in/haris-bin-nadeem/",
    color: "blue",
    description: "Attorney & IRS CAA",
    cta: "Connect",
  },
  {
    name: "Instagram - Mamai",
    icon: InstagramIcon,
    href: "https://www.instagram.com/mamaieducationpathfinders",
    color: "pink",
    description: "Education Pathfinders",
    cta: "Follow",
  },
  {
    name: "PayTrinity Company",
    icon: LinkedinIcon,
    href: "https://www.linkedin.com/company/paytrinity-llc/",
    color: "blue",
    description: "Follow our company updates",
    cta: "Follow",
  },
  {
    name: "Instagram",
    icon: InstagramIcon,
    href: "https://www.instagram.com/paytrinity.co",
    color: "pink",
    description: "@paytrinity.co",
    cta: "Follow",
  },
  {
    name: "Upwork Profile",
    icon: Briefcase,
    href: "https://www.upwork.com/freelancers/~01ebfddea3211d7340?mp_source=share",
    color: "green",
    description: "Top Rated Plus \u2022 100% Job Success",
    cta: "View Profile",
  },
  {
    name: "Google Business",
    icon: MapPin,
    href: "https://www.google.com/maps?cid=17794399362452837640",
    color: "red",
    description: "Trinity Legal Chambers",
    cta: "View Reviews",
  },
];

const stats = [
  { label: "Clients Served", value: "500+", icon: Users },
  { label: "Success Rate", value: "99.9%", icon: TrendingUp },
  { label: "Years Experience", value: "8+", icon: Award },
  { label: "Countries", value: "50+", icon: Globe },
];

const services = [
  {
    title: "US Company Formation",
    description: "LLC & C-Corp setup with EIN in 48 hours",
    icon: Building2,
    link: "/services/us-formation",
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    title: "ITIN Application",
    description: "IRS Certified Acceptance Agent - No passport mailing",
    icon: Shield,
    link: "/services/itin-application",
    color: "from-amber-500/20 to-yellow-500/20",
  },
  {
    title: "Tax Compliance",
    description: "Form 5472, 1120, 1065 - CPA reviewed",
    icon: Scale,
    link: "/products/tax",
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    title: "IP Strategy",
    description: "Trademarks, patents, and trade secrets",
    icon: Zap,
    link: "/legal-services/trademark-registration",
    color: "from-cyan-500/20 to-blue-500/20",
  },
];

const testimonials = [
  {
    name: "Salar Amin",
    role: "Founder, InfinityRefinder LLC",
    text: "I had an excellent experience using his services. He handled everything from registering my LLC in the United States to creating my Stripe account. Highly recommended!",
    rating: 5,
    platform: "Upwork Client",
  },
  {
    name: "Riyan Nasir",
    role: "Founder, Blitzers LLC",
    text: "Company and EIN completed in just 12 hours. Quarterly tax services, trademark filing, and Stripe setup handled professionally.",
    rating: 5,
    platform: "Upwork Client",
  },
  {
    name: "Usama Bin Nadeem",
    role: "TechTrinity LLC, Wyoming",
    text: "From ITIN to company formation and tax services, PayTrinity has been our go-to compliance partner.",
    rating: 5,
    platform: "Direct Client",
  },
];

const companiesHelped = [
  {
    name: "Refinder LLC",
    industry: "Refining & Manufacturing",
    services: "US Formation, EIN, Tax Compliance",
    icon: Building2,
  },
  {
    name: "Safe Buy LLC",
    industry: "E-Commerce & Retail",
    services: "LLC Formation, Stripe Setup, ITIN",
    icon: Shield,
  },
  {
    name: "Movex Logistics LLC",
    industry: "Logistics & Supply Chain",
    services: "C-Corp Formation, Tax Strategy",
    icon: Target,
  },
  {
    name: "Monade LLC",
    industry: "Technology & Software",
    services: "IP Protection, Trademark Registration",
    icon: Zap,
  },
];

const specializations = [
  {
    title: "US Business Formation",
    description: "LLC & C-Corp for international entrepreneurs",
    icon: Building2,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "Tax Compliance",
    description: "ITIN, EIN, Form 5472, 1120, Annual filing",
    icon: FileCheck,
    gradient: "from-emerald-500 to-green-500",
  },
  {
    title: "IP & Trademark",
    description: "Brand protection & patent registration",
    icon: Stamp,
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "UK Ltd PayPal Setup",
    description: "Get PayPal on UK Limited in just 24 hours",
    icon: CreditCard,
    gradient: "from-amber-500 to-orange-500",
  },
];

const colorClasses: Record<string, string> = {
  blue: "from-blue-500/20 to-blue-600/20 border-blue-500/30 hover:border-blue-500/50",
  green:
    "from-green-500/20 to-green-600/20 border-green-500/30 hover:border-green-500/50",
  pink: "from-pink-500/20 to-pink-600/20 border-pink-500/30 hover:border-pink-500/50",
  red: "from-red-500/20 to-red-600/20 border-red-500/30 hover:border-red-500/50",
  amber:
    "from-amber-500/20 to-amber-600/20 border-amber-500/30 hover:border-amber-500/50",
};

export function StartContent() {
  return (
    <div className="min-h-screen bg-[#020410] text-white">
      {/* Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-blue-600/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-purple-600/10 blur-[120px] rounded-full" />
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-24 px-6">
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            {/* Profile Image */}
            <div className="mb-8 flex justify-center">
              <div className="relative">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1">
                  <div className="w-full h-full rounded-full bg-[#0B1B3D] flex items-center justify-center">
                    <Scale className="w-16 h-16 text-amber-400" />
                  </div>
                </div>
                <div className="absolute -bottom-2 -right-2 bg-green-500 rounded-full p-2 border-4 border-[#020410]">
                  <CheckCircle2 className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>

            {/* Title & Credentials */}
            <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-gradient-to-r from-amber-500/10 via-yellow-500/10 to-amber-500/10 border border-amber-500/30 backdrop-blur-md mb-6 shadow-[0_0_20px_rgba(251,191,36,0.15)]">
              <Scale className="w-5 h-5 text-amber-400" />
              <span className="text-base font-bold text-amber-100 tracking-wide">
                Haris Bin Nadeem
              </span>
              <div className="w-px h-5 bg-amber-500/30" />
              <span className="text-sm font-medium text-amber-200/80">
                Attorney & IRS CAA
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-400">
                Your Cross-Border Legal
              </span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
                & Business Partner
              </span>
            </h1>

            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-12">
              UK-trained attorney specializing in US company formation, IRS tax
              compliance (ITIN/EIN), intellectual property, and cross-border
              business advisory. Trusted by 500+ international founders.
            </p>

            {/* Primary CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
              <a
                href="https://calendly.com/paytrinity/30min"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-5 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg shadow-[0_0_30px_rgba(37,99,235,0.5)] hover:shadow-[0_0_50px_rgba(124,58,237,0.7)] transition-all flex items-center gap-3"
                >
                  <Calendar className="w-6 h-6" />
                  Schedule Free Consultation
                </motion.button>
              </a>
              <a
                href="https://wa.me/5513069930"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-5 rounded-full bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold text-lg shadow-[0_0_30px_rgba(34,197,94,0.5)] hover:shadow-[0_0_50px_rgba(16,185,129,0.7)] transition-all flex items-center gap-3"
                >
                  <MessageCircle className="w-6 h-6" />
                  WhatsApp Now
                </motion.button>
              </a>
            </div>

            {/* Stats Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm"
                >
                  <stat.icon className="w-8 h-8 text-blue-400 mb-3 mx-auto" />
                  <div className="text-3xl font-bold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Connect With Me Section */}
      <section className="py-20 bg-white/[0.02] relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Connect With Me
            </h2>
            <p className="text-xl text-gray-400">
              Choose your preferred way to reach out
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className={`group relative p-6 rounded-2xl bg-gradient-to-br ${colorClasses[link.color]} border backdrop-blur-sm transition-all duration-300`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 rounded-xl bg-white/5 group-hover:scale-110 transition-transform">
                      <link.icon className="w-6 h-6 text-gray-300" />
                    </div>
                    <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors" />
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2">
                    {link.name}
                  </h3>
                  <p className="text-sm text-gray-400 mb-4">
                    {link.description}
                  </p>

                  <div className="flex items-center text-sm font-semibold text-blue-400 group-hover:text-blue-300 transition-colors">
                    {link.cta}{" "}
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section - Upwork Highlights */}
      <section className="py-20 relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-300 text-sm font-bold mb-6">
              <Award className="w-4 h-4" />
              TOP RATED PLUS ON UPWORK
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Portfolio & Track Record
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Verified success across 500+ projects
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20"
            >
              <div className="text-5xl font-bold text-green-400 mb-2">
                100%
              </div>
              <div className="text-lg font-semibold text-white mb-1">
                Job Success Score
              </div>
              <p className="text-sm text-gray-400">
                Perfect track record on Upwork
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-8 rounded-2xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20"
            >
              <div className="text-5xl font-bold text-blue-400 mb-2">
                $500K+
              </div>
              <div className="text-lg font-semibold text-white mb-1">
                Revenue Earned
              </div>
              <p className="text-sm text-gray-400">
                Verified Upwork earnings
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-8 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20"
            >
              <div className="text-5xl font-bold text-purple-400 mb-2">
                4.9&#9733;
              </div>
              <div className="text-lg font-semibold text-white mb-1">
                Client Rating
              </div>
              <p className="text-sm text-gray-400">
                Based on 200+ reviews
              </p>
            </motion.div>
          </div>

          {/* View Full Upwork Profile CTA */}
          <div className="text-center">
            <a
              href="https://www.upwork.com/freelancers/~01ebfddea3211d7340?mp_source=share"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="px-8 py-4 rounded-full bg-green-600 hover:bg-green-500 text-white font-bold text-lg shadow-[0_0_30px_rgba(34,197,94,0.3)] transition-all inline-flex items-center gap-2"
              >
                <Briefcase className="w-5 h-5" />
                View Complete Upwork Profile
                <ExternalLink className="w-5 h-5" />
              </motion.button>
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white/[0.02] relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Client Testimonials
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-500 fill-yellow-500"
                    />
                  ))}
                </div>
                <p className="text-gray-300 leading-relaxed mb-6 italic">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div>
                  <div className="font-bold text-white">{t.name}</div>
                  <div className="text-sm text-gray-400">{t.role}</div>
                  <div className="text-xs text-blue-400 mt-1">
                    {t.platform}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Companies We've Helped Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 blur-[100px] rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 blur-[100px] rounded-full" />

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 border border-blue-500/30 mb-6 shadow-[0_0_30px_rgba(59,130,246,0.1)]"
            >
              <Sparkles className="w-5 h-5 text-blue-400" />
              <span className="text-sm font-bold text-blue-200">
                TRUSTED BY INTERNATIONAL ENTREPRENEURS
              </span>
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-purple-100">
              Companies We&apos;ve Helped
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              International entrepreneurs who invested their money in US business
              formation, tax compliance, and IP protection with confidence
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {companiesHelped.map((company, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, type: "spring", stiffness: 100 }}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                <div className="relative p-8 rounded-3xl bg-gradient-to-br from-white/[0.07] to-white/[0.02] border border-white/10 backdrop-blur-xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.3)] group-hover:shadow-[0_20px_60px_rgba(59,130,246,0.3)] transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-purple-500/0 to-cyan-500/0 group-hover:from-blue-500/10 group-hover:via-purple-500/5 group-hover:to-cyan-500/10 transition-all duration-700 opacity-0 group-hover:opacity-100" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />

                  <div className="relative z-10">
                    <div className="mb-6 relative">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center border border-blue-500/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-[0_8px_16px_rgba(59,130,246,0.2)]">
                        <company.icon className="w-8 h-8 text-blue-400 group-hover:text-blue-300 transition-colors" />
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300 group-hover:from-blue-200 group-hover:to-purple-200 transition-all duration-500">
                      {company.name}
                    </h3>

                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-4">
                      <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                      <span className="text-sm text-gray-400 font-medium">
                        {company.industry}
                      </span>
                    </div>

                    <p className="text-gray-300 leading-relaxed flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>{company.services}</span>
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-16 text-center"
          >
            <p className="text-lg text-gray-400 italic">
              <span className="text-blue-400 font-semibold">50+ countries</span>{" "}
              |{" "}
              <span className="text-purple-400 font-semibold">
                500+ founders
              </span>{" "}
              |{" "}
              <span className="text-cyan-400 font-semibold">$50M+</span> in
              business value protected
            </p>
          </motion.div>
        </div>
      </section>

      {/* Corporate Law Expertise Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-purple-900/10 via-transparent to-transparent" />

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-amber-500/10 via-yellow-500/10 to-amber-500/10 border border-amber-500/30 mb-6 shadow-[0_0_30px_rgba(251,191,36,0.15)]"
            >
              <Scale className="w-6 h-6 text-amber-400" />
              <span className="text-sm font-bold text-amber-200 tracking-wide">
                ATTORNEY WITH CORPORATE LAW EXPERTISE
              </span>
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-amber-200 via-yellow-100 to-amber-200">
              Specialized Legal Services
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Comprehensive corporate law expertise serving international
              entrepreneurs with precision and speed
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {specializations.map((spec, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 80,
                }}
                whileHover={{ scale: 1.05 }}
                className="group relative"
              >
                <div className="relative p-10 rounded-3xl bg-gradient-to-br from-white/[0.08] via-white/[0.04] to-transparent border border-white/20 backdrop-blur-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.4)] group-hover:shadow-[0_30px_70px_rgba(251,191,36,0.2)] transition-all duration-700">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 via-yellow-500/0 to-orange-500/0 group-hover:from-amber-500/5 group-hover:via-yellow-500/5 group-hover:to-orange-500/5 transition-all duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />

                  <div className="relative z-10">
                    <div className="mb-6 relative inline-block">
                      <div
                        className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${spec.gradient} flex items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.3)] group-hover:shadow-[0_15px_40px_rgba(251,191,36,0.4)] group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500 border border-white/20`}
                      >
                        <spec.icon className="w-10 h-10 text-white drop-shadow-lg" />
                      </div>
                    </div>

                    <h3 className="text-3xl font-bold mb-4 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-amber-200 group-hover:to-yellow-200 transition-all duration-500">
                      {spec.title}
                    </h3>

                    <p className="text-gray-300 text-lg leading-relaxed group-hover:text-gray-200 transition-colors duration-500">
                      {spec.description}
                    </p>

                    <div className="mt-6 flex items-center gap-2 text-amber-400 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                      <span className="text-sm font-semibold">Learn More</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-500" />
                    </div>
                  </div>

                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* UK Ltd PayPal Highlight */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-16"
          >
            <div className="relative p-12 rounded-3xl bg-gradient-to-br from-amber-500/10 via-yellow-500/5 to-orange-500/10 border-2 border-amber-500/30 backdrop-blur-xl overflow-hidden shadow-[0_20px_60px_rgba(251,191,36,0.2)]">
              <div className="relative z-10 text-center">
                <div className="inline-flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-full bg-amber-500/20 border border-amber-500/30">
                    <Sparkles className="w-6 h-6 text-amber-400" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    Special: UK Ltd PayPal Setup
                  </h3>
                </div>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-6 leading-relaxed">
                  Get your{" "}
                  <span className="text-amber-400 font-bold">
                    PayPal approved on UK Limited
                  </span>{" "}
                  company in just{" "}
                  <span className="text-green-400 font-bold">24 hours</span>.
                  Fast-track payment processing for international businesses.
                </p>
                <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
                  {[
                    "24-Hour Turnaround",
                    "Full Compliance",
                    "Payment Gateway Ready",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-400" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 relative">
        <div className="max-w-5xl mx-auto px-6">
          <div className="relative rounded-3xl overflow-hidden p-16 text-center border border-white/10 bg-gradient-to-br from-blue-900/30 via-purple-900/30 to-cyan-900/30 backdrop-blur-xl">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />

            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
                Book your free 30-minute strategy call today and let&apos;s
                discuss how we can help you build and scale your US business.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a
                  href="https://calendly.com/paytrinity/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-10 py-5 rounded-full bg-white text-[#020410] font-bold text-lg shadow-2xl hover:shadow-white/30 transition-all inline-flex items-center gap-3"
                  >
                    <Calendar className="w-6 h-6" />
                    Book Free Consultation
                  </motion.button>
                </a>
                <a
                  href="https://wa.me/5513069930"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-10 py-5 rounded-full bg-green-600 hover:bg-green-500 text-white font-bold text-lg transition-all inline-flex items-center gap-3"
                  >
                    <MessageCircle className="w-6 h-6" />
                    Message on WhatsApp
                  </motion.button>
                </a>
              </div>

              <div className="mt-12 pt-8 border-t border-white/10">
                <p className="text-sm text-gray-400 mb-4">
                  Or reach out directly:
                </p>
                <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-300">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-blue-400" />
                    <a
                      href="mailto:contact@paytrinity.com"
                      className="hover:text-white transition-colors"
                    >
                      contact@paytrinity.com
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-green-400" />
                    <span>Available via WhatsApp</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-purple-400" />
                    <span>24-48hr response time</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Footer */}
      <section className="py-12 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-400">
            {[
              "IRS Certified Acceptance Agent",
              "Top Rated Plus on Upwork",
              "500+ Successful Projects",
              "99.9% Success Rate",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-400" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
