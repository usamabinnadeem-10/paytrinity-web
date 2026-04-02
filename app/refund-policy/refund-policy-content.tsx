"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ChevronRight, RotateCcw } from "lucide-react";

export function RefundPolicyContent() {
  return (
    <div className="min-h-screen bg-[#020410] text-white selection:bg-cyan-500 selection:text-white font-sans">
      {/* Background Gradients */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-cyan-600/10 blur-[100px] rounded-full mix-blend-screen opacity-40" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-600/10 blur-[100px] rounded-full mix-blend-screen opacity-30" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
      </div>

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 lg:pt-32 z-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8">
                <RotateCcw className="h-4 w-4 text-cyan-400" />
                <span className="text-sm font-medium text-cyan-100 tracking-wide">
                  Legal
                </span>
              </div>
              <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl mb-6">
                Refund Policy
              </h1>
              <div className="flex items-center justify-center gap-2 text-gray-400 text-sm">
                <Link
                  href="/"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Home
                </Link>
                <ChevronRight className="h-4 w-4" />
                <span className="text-cyan-400">Refund Policy</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 relative z-10">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-8 md:p-12"
          >
            <p className="text-sm text-gray-500 mb-10">
              Last Updated: January 24, 2026
            </p>

            <div className="space-y-10">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-xl font-bold text-white mb-4">
                  1. General Policy
                </h2>
                <p className="text-gray-400 leading-relaxed">
                  At PayTrinity, we strive to ensure your satisfaction with our
                  services. However, due to the nature of our administrative and
                  filing services, often involving government fees and
                  third-party processing, refunds are subject to specific
                  conditions.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 }}
              >
                <h2 className="text-xl font-bold text-white mb-4">
                  2. Non-Refundable Fees
                </h2>
                <p className="text-gray-400 leading-relaxed">
                  Government filing fees (e.g., state incorporation fees, IRS
                  fees) are non-refundable once paid to the respective agency.
                  If we have already remitted these fees on your behalf, we
                  cannot refund them.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <h2 className="text-xl font-bold text-white mb-4">
                  3. Service Fees
                </h2>
                <p className="text-gray-400 leading-relaxed mb-3">
                  Our service fees are refundable if:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-400 leading-relaxed">
                  <li>
                    We have not yet commenced work on your order.
                  </li>
                  <li>
                    We made a significant error in your filing that cannot be
                    corrected.
                  </li>
                </ul>
                <p className="text-gray-400 leading-relaxed mt-3">
                  If work has commenced but the filing is not yet complete, a
                  partial refund may be issued at our discretion based on the
                  work performed.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
              >
                <h2 className="text-xl font-bold text-white mb-4">
                  4. Refund Requests
                </h2>
                <p className="text-gray-400 leading-relaxed">
                  To request a refund, please contact our support team at
                  support@paytrinity.co with your order details and the reason
                  for the request. We will review your request and notify you of
                  the approval or rejection of your refund within 5-7 business
                  days.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <h2 className="text-xl font-bold text-white mb-4">
                  5. Processing of Refunds
                </h2>
                <p className="text-gray-400 leading-relaxed">
                  If your refund is approved, it will be processed, and a credit
                  will automatically be applied to your original method of
                  payment within 10 business days.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
