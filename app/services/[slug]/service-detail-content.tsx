"use client";

import Link from "next/link";
import {
  CheckCircle2,
  HelpCircle,
  Shield,
  ArrowRight,
  BadgeCheck,
  Building2,
  CreditCard,
  FileText,
  Landmark,
  MapPin,
  Package,
  Scale,
} from "lucide-react";
import { servicesData, type ServiceData } from "@/data/services";

const iconMap: Record<string, React.ElementType> = {
  BadgeCheck,
  Building2,
  CreditCard,
  FileText,
  Landmark,
  MapPin,
  Package,
  Scale,
};

export function ServiceDetailContent({ slug }: { slug: string }) {
  const service: ServiceData | undefined = servicesData[slug];

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#020410]">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">
            Service Not Found
          </h1>
          <p className="text-gray-400 mb-8">
            The service you are looking for does not exist.
          </p>
          <Link href="/" className="text-[#D4A574] font-semibold hover:underline">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  const Icon = iconMap[service.iconName];

  return (
    <div className="bg-[#020410] min-h-screen font-sans text-white">
      <section className="relative bg-[#0B1B3D] text-white pt-24 pb-20 overflow-hidden">
        <div className="absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] bg-[#D4A574]/20 blur-[100px] rounded-full mix-blend-screen" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            {Icon && (
              <div className="inline-flex items-center justify-center p-3 bg-white/10 rounded-xl mb-6 backdrop-blur-sm border border-white/10">
                <Icon className="w-12 h-12 text-[#D4A574]" />
              </div>
            )}
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              {service.title}
            </h1>
            <p className="text-xl text-blue-100/80 mb-8 leading-relaxed">
              {service.subtitle}
            </p>
            <div className="flex items-center gap-4 text-[#D4A574] font-bold text-lg">
              <span>Starting at {service.price}</span>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 -mt-10 pb-20 relative z-20">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7 space-y-10">
            <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
              <h2 className="text-2xl font-bold mb-6">Overview</h2>
              <p className="text-gray-400 leading-relaxed text-lg">
                {service.description}
              </p>
            </div>

            <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
              <h2 className="text-2xl font-bold mb-6">
                What&apos;s Included
              </h2>
              <ul className="space-y-4">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {service.faqs.length > 0 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold flex items-center gap-2">
                  <HelpCircle className="text-[#D4A574]" /> Frequently Asked
                  Questions
                </h2>
                <div className="grid gap-4">
                  {service.faqs.map((faq, i) => (
                    <div
                      key={i}
                      className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:bg-white/[0.07] transition-colors"
                    >
                      <h3 className="font-bold text-lg mb-2">{faq.q}</h3>
                      <p className="text-gray-400">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="lg:col-span-5">
            <div className="sticky top-28">
              <div className="bg-white/5 rounded-3xl border border-white/10 overflow-hidden">
                <div className="bg-[#0B1B3D] p-6 text-white text-center">
                  <h3 className="text-xl font-bold">Get Started</h3>
                  <p className="text-blue-200 text-sm mt-1">
                    Contact us to begin {service.title}
                  </p>
                </div>

                <div className="p-8 space-y-6">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-[#D4A574] mb-2">
                      {service.price}
                    </p>
                    <p className="text-sm text-gray-400">
                      Schedule a consultation to discuss your specific needs
                    </p>
                  </div>

                  <Link
                    href="/contact"
                    className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold py-4 rounded-xl hover:from-cyan-500 hover:to-blue-500 transition-all shadow-lg hover:shadow-cyan-500/25 hover:-translate-y-0.5"
                  >
                    Contact Us
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <p className="text-xs text-gray-500 text-center">
                    We&apos;ll respond within 24 hours
                  </p>
                </div>
              </div>

              <div className="mt-6 flex items-center gap-4 p-4 bg-cyan-500/10 rounded-xl border border-cyan-500/20">
                <div className="w-10 h-10 bg-cyan-500/20 rounded-full flex items-center justify-center text-cyan-400 flex-shrink-0">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">
                    PayTrinity Guarantee
                  </h4>
                  <p className="text-xs text-gray-400">
                    We ensure compliance with all US regulations or your money
                    back.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
