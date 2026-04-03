"use client";

import Link from "next/link";
import {
  CheckCircle2,
  Package,
  Truck,
  Boxes,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";

const benefits = [
  {
    icon: Package,
    title: "Pick & Pack",
    description:
      "Professional warehouse staff pick, pack, and label every order with care. Custom packaging and inserts available.",
    iconColor: "text-yellow-400",
    bgColor: "bg-yellow-500/10",
    borderColor: "border-yellow-500/20",
  },
  {
    icon: Truck,
    title: "Discounted Shipping",
    description:
      "Access our negotiated carrier rates with USPS, UPS, and FedEx. Save up to 60% compared to retail shipping prices.",
    iconColor: "text-blue-400",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/20",
  },
  {
    icon: Boxes,
    title: "Inventory Sync",
    description:
      "Real-time inventory tracking across Shopify, Amazon, WooCommerce, and more. Never oversell again.",
    iconColor: "text-green-400",
    bgColor: "bg-green-500/10",
    borderColor: "border-green-500/20",
  },
];

const advantages = [
  "Faster Delivery — Ship from US warehouses with 2-day ground delivery to 95% of the continental United States.",
  "Lower Costs — Eliminate international shipping on every order. Bulk-ship inventory once, fulfill domestically.",
  "Simplified Returns — US return address and local processing means happier customers and fewer chargebacks.",
];

const howItWorks = [
  {
    step: 1,
    title: "Connect Your Store",
    description:
      "Integrate your Shopify, Amazon, WooCommerce, or custom store in minutes. Orders flow in automatically.",
  },
  {
    step: 2,
    title: "Send Inventory",
    description:
      "Ship your products to our US warehouse. We receive, inspect, and shelve everything with barcode tracking.",
  },
  {
    step: 3,
    title: "We Ship Orders",
    description:
      "As orders come in, our team picks, packs, and ships same-day. You choose the carrier and speed.",
  },
  {
    step: 4,
    title: "Tracking Updates",
    description:
      "Your customers receive real-time tracking notifications. You get a full dashboard with analytics and inventory levels.",
  },
];

export function FulfillmentContent() {
  return (
    <div className="min-h-screen bg-[#020410] text-white selection:bg-yellow-500 selection:text-black font-sans">
      {/* Background gradients */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-yellow-600/10 blur-[100px] rounded-full mix-blend-screen opacity-40" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-orange-600/10 blur-[100px] rounded-full mix-blend-screen opacity-30" />
        <div className="absolute top-[40%] left-[30%] w-[400px] h-[400px] bg-red-600/8 blur-[100px] rounded-full mix-blend-screen opacity-20" />
      </div>

      {/* Hero */}
      <section className="pt-28 pb-24 lg:pt-36 relative overflow-hidden z-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8">
                <span className="h-2 w-2 rounded-full bg-yellow-400" />
                <span className="text-sm font-medium text-yellow-100 tracking-wide">
                  US Logistics & Warehousing
                </span>
              </div>
              <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl mb-4">
                Ship to US Customers
              </h1>
              <p className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-yellow-400 to-orange-300 bg-clip-text text-transparent mb-6">
                Like a Local Brand
              </p>
              <p className="text-lg leading-8 text-gray-400 mb-10 max-w-2xl mx-auto">
                Store your inventory in our US warehouses and deliver to American
                customers with 2-day shipping. We handle pick, pack, shipping,
                and returns so you can compete with domestic brands from anywhere
                in the world.
              </p>
              <Button asChild size="lg">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-lg bg-yellow-500 px-8 py-4 text-base font-bold text-black shadow-lg hover:shadow-yellow-500/25 hover:scale-105 transition-all"
                >
                  Get a Quote
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 relative z-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold tracking-tight text-white mb-4">
              End-to-End Fulfillment
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              From warehouse to doorstep, we handle every step of the logistics
              chain.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="rounded-2xl bg-white/5 border border-white/10 p-8 backdrop-blur-sm hover:bg-white/[0.07] transition-colors text-center"
                >
                  <div
                    className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl ${benefit.bgColor} ${benefit.borderColor} border mb-6`}
                  >
                    <Icon className={`w-7 h-7 ${benefit.iconColor}`} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {benefit.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Educational 2-col */}
      <section className="py-20 relative z-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold tracking-tight text-white mb-6">
                Scale Your US Operations
              </h2>
              <p className="text-gray-400 leading-relaxed mb-8">
                Selling into the US from overseas means long shipping times, high
                costs, and a poor customer experience. A third-party logistics
                (3PL) partner with US-based warehouses eliminates these barriers
                and lets you compete on equal footing with domestic brands.
              </p>

              <h3 className="text-xl font-bold text-white mb-4">
                The 3PL Advantage
              </h3>
              <div className="space-y-4 mb-8">
                {advantages.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm leading-relaxed">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>

              <h3 className="text-xl font-bold text-white mb-4">
                Transparent Pricing
              </h3>
              <p className="text-gray-400 leading-relaxed">
                No hidden fees. You pay only for storage, pick-and-pack, and
                shipping. Volume discounts kick in automatically as you scale.
                Every invoice is itemized so you know exactly where your money
                goes.
              </p>
            </motion.div>

            {/* Right Column */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="rounded-3xl bg-white/5 border border-white/10 p-8 lg:p-10 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-8">
                  <ShieldCheck className="w-6 h-6 text-yellow-400" />
                  <h3 className="text-2xl font-bold text-white">
                    How It Works
                  </h3>
                </div>
                <div className="space-y-6">
                  {howItWorks.map((step, index) => (
                    <motion.div
                      key={step.step}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex items-start gap-4"
                    >
                      <div className="w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center text-black font-bold text-sm flex-shrink-0">
                        {step.step}
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-white mb-1">
                          {step.title}
                        </h4>
                        <p className="text-gray-400 text-sm leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 border-t border-white/10 bg-white/[0.02] relative z-10">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold tracking-tight text-white mb-6">
              Streamline Your Logistics
            </h2>
            <p className="text-lg text-gray-400 mb-10">
              Stop losing customers to slow shipping. Get US-based fulfillment
              and deliver like a local brand.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button asChild size="lg">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-lg bg-yellow-500 px-8 py-4 text-base font-bold text-black shadow-lg hover:shadow-yellow-500/25 hover:scale-105 transition-all"
                >
                  Get Started
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link
                  href="https://calendly.com/paytrinity/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-transparent px-8 py-4 text-base font-semibold text-white hover:bg-white/5 transition-colors"
                >
                  Speak to an Expert
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
