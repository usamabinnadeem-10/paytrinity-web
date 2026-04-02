"use client";

import Link from "next/link";
import { useRef } from "react";
import {
  Star,
  Building2,
  FileText,
  CreditCard,
  MapPin,
  Calendar,
  Clock,
  CheckCircle2,
  Package,
  Landmark,
  Rocket,
} from "lucide-react";
import { motion, useInView } from "motion/react";

const services = [
  {
    icon: Star,
    title: "ITIN Application & Renewal",
    badge: "Most Popular",
    description:
      "Individual Taxpayer Identification Number for tax compliance, banking, and payment processors.",
    whoNeedsIt:
      "Non-US citizens without SSN who need to file US taxes, open bank accounts, or apply for payment processors",
    timeline: "2-4 weeks",
    link: "/services/itin-application",
    color: "emerald",
    deliverables: [
      "Form W-7 preparation and review",
      "Document certification coordination",
      "IRS submission handling",
      "ITIN confirmation letter",
      "Renewal tracking and reminders",
      "Tax compliance guidance",
    ],
    details:
      "The ITIN is the foundation of your US business operations. Required by the IRS for tax filing, accepted by most US banks, and essential for payment processor applications. Our lawyer-led process ensures proper documentation and maximizes approval likelihood.",
  },
  {
    icon: Building2,
    title: "US LLC / Corporation Formation",
    description:
      "Complete entity formation service with professional guidance through the incorporation process.",
    whoNeedsIt:
      "Founders establishing a US legal entity for business operations, banking, or investment",
    timeline: "2-4 weeks",
    color: "blue",
    deliverables: [
      "Articles of Organization/Incorporation",
      "EIN confirmation letter",
      "Operating Agreement / Bylaws",
      "Initial compliance checklist",
      "Registered agent service (first year)",
      "Formation certificate",
    ],
    details:
      "Professional entity formation with state filing coordination and complete documentation. We help you choose the right state and structure based on your business model and long-term goals.",
  },
  {
    icon: FileText,
    title: "EIN & Tax ID Support",
    description:
      "Federal tax identification number procurement with complete documentation support.",
    whoNeedsIt:
      "All US entities and some non-resident individuals conducting business in the US",
    timeline: "1-2 weeks",
    color: "purple",
    deliverables: [
      "EIN application preparation",
      "IRS Form SS-4 completion",
      "EIN confirmation letter",
      "Tax classification guidance",
      "IRS correspondence handling",
    ],
    details:
      "Essential for opening bank accounts, hiring employees, and meeting payment processor requirements. We handle the IRS application process for non-US citizens.",
  },
  {
    icon: CreditCard,
    title: "Stripe & Square Readiness (Advisory)",
    description:
      "Structured guidance on documentation and entity setup for payment processor applications.",
    whoNeedsIt:
      "E-commerce, SaaS, and service businesses requiring online payment processing",
    timeline: "Ongoing advisory",
    link: "/services/stripe-readiness",
    color: "pink",
    deliverables: [
      "Documentation requirements checklist",
      "Entity structure recommendations",
      "Application readiness review",
      "Risk assessment and mitigation",
      "Resubmission strategy guidance",
    ],
    details:
      "Note: We do not guarantee approval by any payment processor. This is advisory-only guidance based on published requirements and industry best practices.",
  },
  {
    icon: MapPin,
    title: "Registered Agent & US Address",
    description:
      "Professional registered agent service and mail forwarding solutions for your US entity.",
    whoNeedsIt: "All US entities (required by law in every state)",
    timeline: "Immediate setup",
    link: "/services/registered-agent",
    color: "orange",
    deliverables: [
      "Registered agent service",
      "US business address",
      "Mail scanning & forwarding",
      "Service of process handling",
      "Annual compliance reminders",
    ],
    details:
      "Required in all states for LLC/Corporation formation. Provides a stable US presence for legal correspondence and maintains compliance.",
  },
  {
    icon: Package,
    title: "PayTrinity Fulfillment Service",
    description:
      "End-to-end logistics and order fulfillment solution for international e-commerce founders.",
    whoNeedsIt:
      "E-commerce businesses requiring US warehousing and shipping infrastructure",
    timeline: "Setup in 1-2 weeks",
    link: "/services/fulfillment",
    color: "yellow",
    deliverables: [
      "US Warehousing & Storage",
      "Pick & Pack Service",
      "Same-day Shipping",
      "Inventory Management System",
      "Returns Processing",
      "Custom Packaging Options",
    ],
    details:
      "Scale your US operations without the overhead of leasing a warehouse. Our integrated fulfillment network ensures your customers receive their orders quickly and reliably, while you manage everything remotely.",
  },
  {
    icon: Landmark,
    title: "Physical Bank Account Service",
    description:
      "Concierge assistance for opening traditional brick-and-mortar US business bank accounts.",
    whoNeedsIt:
      "Founders requiring high-limit banking, traditional treasury services, or specific merchant support",
    timeline: "2-4 weeks",
    link: "/services/physical-banking",
    color: "green",
    deliverables: [
      "Bank Selection Advisory",
      "Application Documentation Prep",
      "Compliance Pre-check",
      "Relationship Manager Intro",
      "In-person Visit Coordination",
      "Initial Deposit Handling",
    ],
    details:
      "While digital neobanks serve many startups well, mature businesses often require the stability, higher limits, and specialized services of major US national banks. We bridge the gap between international founders and traditional US banking institutions.",
  },
  {
    icon: Calendar,
    title: "Annual Compliance & Tax Coordination",
    description:
      "Ongoing compliance support and annual filing coordination to maintain good standing.",
    whoNeedsIt:
      "Existing US entities requiring ongoing compliance management",
    timeline: "Annual service",
    link: "/services/annual-compliance",
    color: "cyan",
    deliverables: [
      "Annual report filing coordination",
      "State compliance monitoring",
      "Deadline tracking & reminders",
      "Renewal documentation",
      "Good standing certificate support",
    ],
    details:
      "Coordination service only. Tax preparation requires engagement with a licensed CPA or tax professional.",
  },
];

const colorMap: Record<string, string> = {
  emerald: "text-emerald-400 bg-emerald-500/20 border-emerald-500/20",
  blue: "text-blue-400 bg-blue-500/20 border-blue-500/20",
  purple: "text-purple-400 bg-purple-500/20 border-purple-500/20",
  pink: "text-pink-400 bg-pink-500/20 border-pink-500/20",
  orange: "text-orange-400 bg-orange-500/20 border-orange-500/20",
  yellow: "text-yellow-400 bg-yellow-500/20 border-yellow-500/20",
  green: "text-green-400 bg-green-500/20 border-green-500/20",
  cyan: "text-cyan-400 bg-cyan-500/20 border-cyan-500/20",
};

function ServiceCard({
  service,
  isLast,
}: {
  service: (typeof services)[0];
  isLast: boolean;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-30% 0px -30% 0px" });
  const Icon = service.icon;
  const activeColor = colorMap[service.color] ?? colorMap.blue;
  const [textColor, bgColor, borderColor] = activeColor.split(" ");

  return (
    <div ref={ref} className="relative pl-12 sm:pl-20 py-8 lg:py-16 group">
      {!isLast && (
        <div className="absolute left-[23px] sm:left-[39px] top-[100px] bottom-[-100px] w-0.5 bg-white/10 overflow-hidden">
          <motion.div
            className="w-full bg-cyan-500"
            initial={{ height: "0%" }}
            animate={{ height: isInView ? "100%" : "0%" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />
        </div>
      )}

      <div className="absolute left-[8px] sm:left-[16px] top-8 lg:top-16 z-10">
        <motion.div
          initial={{ borderColor: "rgba(255, 255, 255, 0.1)" }}
          animate={{
            scale: isInView ? 1.1 : 1,
            backgroundColor: isInView ? "#0B1B3D" : "#020410",
            borderColor: isInView ? "#06B6D4" : "rgba(255, 255, 255, 0.1)",
            boxShadow: isInView
              ? "0 0 20px rgba(6, 182, 212, 0.5)"
              : "none",
          }}
          className="w-8 h-8 sm:w-12 sm:h-12 rounded-full border-2 flex items-center justify-center transition-all duration-500"
        >
          <Icon
            className={`w-4 h-4 sm:w-6 sm:h-6 transition-colors duration-500 ${isInView ? "text-cyan-400" : "text-gray-600"}`}
          />
        </motion.div>
      </div>

      <motion.div
        animate={{
          opacity: isInView ? 1 : 0.3,
          filter: isInView ? "blur(0px)" : "blur(4px)",
          scale: isInView ? 1 : 0.98,
          x: isInView ? 0 : 20,
        }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative rounded-2xl lg:rounded-3xl bg-white/5 border border-white/10 p-6 sm:p-8 lg:p-12 backdrop-blur-sm hover:bg-white/[0.07] transition-colors"
      >
        {service.badge && (
          <div className="absolute -top-3 left-6 lg:-top-4 lg:left-8">
            <div className="flex items-center gap-1.5 lg:gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-3 py-1 lg:px-4 lg:py-2 rounded-full text-xs lg:text-sm font-semibold shadow-lg shadow-cyan-500/20">
              <Star className="h-3 w-3 lg:h-4 lg:w-4 fill-current" />
              {service.badge}
            </div>
          </div>
        )}

        <div className="flex flex-col lg:grid lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7 order-1">
            <div className="flex flex-col gap-4">
              <div className="flex-1 w-full">
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3 lg:mb-4">
                  {service.title}
                </h3>
                <p className="text-base lg:text-lg text-gray-400 mb-4 lg:mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="mb-4 lg:mb-6 p-4 bg-white/5 rounded-xl border border-white/10">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-1">
                    Who needs this:
                  </h4>
                  <p className="text-sm text-gray-300">{service.whoNeedsIt}</p>
                </div>

                <div className="flex items-center gap-2 text-sm text-gray-400 mb-4 lg:mb-6">
                  <Clock className="h-4 w-4 lg:h-5 lg:w-5 text-cyan-500" />
                  <span className="font-medium text-gray-300">Timeline:</span>
                  <span>{service.timeline}</span>
                </div>

                <div className="bg-transparent rounded-xl p-0 lg:p-0">
                  <p className="text-sm text-gray-500 leading-relaxed italic border-l-2 border-white/10 pl-4">
                    &ldquo;{service.details}&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 lg:mt-0 lg:col-span-5 order-2">
            <div
              className={`rounded-xl lg:rounded-2xl p-6 lg:p-8 border bg-opacity-20 ${bgColor} ${borderColor}`}
            >
              <h4
                className={`text-base lg:text-lg font-bold mb-4 lg:mb-6 ${textColor}`}
              >
                What&apos;s included
              </h4>
              <ul className="space-y-3 lg:space-y-4">
                {service.deliverables.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 lg:gap-3 text-sm text-gray-300"
                  >
                    <CheckCircle2
                      className={`h-4 w-4 lg:h-5 lg:w-5 flex-shrink-0 mt-0.5 ${textColor}`}
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={service.link ?? "/contact"}
                className="mt-6 lg:mt-8 block w-full text-center rounded-lg px-6 py-3 text-sm lg:text-base font-bold text-white transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 border border-white/10"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export function ServicesContent() {
  return (
    <div className="min-h-screen bg-[#020410] text-white selection:bg-cyan-500 selection:text-white font-sans">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-cyan-600/10 blur-[100px] rounded-full mix-blend-screen opacity-40" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-600/10 blur-[100px] rounded-full mix-blend-screen opacity-30" />
      </div>

      <section className="pt-28 pb-24 lg:pt-36 relative overflow-hidden z-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8">
                <Rocket className="h-4 w-4 text-cyan-400" />
                <span className="text-sm font-medium text-cyan-100 tracking-wide">
                  Comprehensive Solutions
                </span>
              </div>
              <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl mb-6">
                Our Services
              </h1>
              <p className="text-xl leading-8 text-gray-400">
                Everything you need to launch, manage, and scale your US
                business from anywhere in the world.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-20 relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                service={service}
                isLast={index === services.length - 1}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 relative z-10">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="rounded-3xl bg-amber-500/10 border border-amber-500/20 p-10 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-amber-400 mb-6 flex items-center gap-3">
              <span className="text-3xl">&#9888;&#65039;</span> Important Legal
              Disclaimer
            </h3>
            <div className="prose prose-sm prose-invert text-gray-300 space-y-4">
              <p>
                PayTrinity provides business formation and compliance
                coordination services. We do not:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-400">
                <li>
                  Guarantee approval by the IRS, banks, payment processors, or
                  government agencies
                </li>
                <li>
                  Provide tax preparation or accounting services (requires
                  licensed CPA)
                </li>
                <li>
                  Provide immigration representation (requires licensed
                  immigration attorney)
                </li>
                <li>
                  Guarantee specific timelines for third-party approvals
                </li>
              </ul>
              <p>
                All services are provided on an advisory and coordination basis.
                Final approval for ITINs, bank accounts, payment processors, and
                government applications depends on third-party review of your
                specific circumstances.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-white/10 bg-white/[0.02] relative z-10">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold tracking-tight text-white mb-6">
            Ready to get started?
          </h2>
          <p className="text-lg text-gray-400 mb-10">
            Schedule a consultation to discuss your specific needs and timeline.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-lg bg-gradient-to-r from-cyan-600 to-blue-600 px-8 py-4 text-base font-bold text-white shadow-lg hover:shadow-cyan-500/25 hover:scale-105 transition-all"
            >
              Contact Us
            </Link>
            <Link
              href="/pricing"
              className="rounded-lg border border-white/20 px-8 py-4 text-base font-semibold text-white hover:bg-white/5 transition-colors"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
