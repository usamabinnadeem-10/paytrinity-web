"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ChevronRight, Shield } from "lucide-react";

export function PrivacyContent() {
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
                <Shield className="h-4 w-4 text-cyan-400" />
                <span className="text-sm font-medium text-cyan-100 tracking-wide">
                  Legal
                </span>
              </div>
              <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl mb-6">
                Privacy Policy
              </h1>
              <div className="flex items-center justify-center gap-2 text-gray-400 text-sm">
                <Link
                  href="/"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Home
                </Link>
                <ChevronRight className="h-4 w-4" />
                <span className="text-cyan-400">Privacy Policy</span>
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
                  1. Information We Collect
                </h2>
                <p className="text-gray-400 leading-relaxed">
                  We collect information you provide directly to us, such as
                  when you create an account, fill out a form, request customer
                  support, or communicate with us. This may include your name,
                  email address, phone number, business details, and payment
                  information.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 }}
              >
                <h2 className="text-xl font-bold text-white mb-4">
                  2. How We Use Your Information
                </h2>
                <p className="text-gray-400 leading-relaxed mb-3">
                  We use the information we collect to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-400 leading-relaxed">
                  <li>Provide, maintain, and improve our Services.</li>
                  <li>
                    Process your transactions and send related information.
                  </li>
                  <li>
                    Send you technical notices, updates, security alerts, and
                    support messages.
                  </li>
                  <li>
                    Respond to your comments, questions, and requests.
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <h2 className="text-xl font-bold text-white mb-4">
                  3. Sharing of Information
                </h2>
                <p className="text-gray-400 leading-relaxed mb-3">
                  We may share information about you as follows or as otherwise
                  described in this Privacy Policy:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-400 leading-relaxed">
                  <li>
                    With vendors, consultants, and other service providers who
                    need access to such information to carry out work on our
                    behalf.
                  </li>
                  <li>
                    In response to a request for information if we believe
                    disclosure is in accordance with any applicable law,
                    regulation, or legal process.
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
              >
                <h2 className="text-xl font-bold text-white mb-4">
                  4. Data Security
                </h2>
                <p className="text-gray-400 leading-relaxed">
                  We take reasonable measures to help protect information about
                  you from loss, theft, misuse, and unauthorized access,
                  disclosure, alteration, and destruction.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <h2 className="text-xl font-bold text-white mb-4">
                  5. Your Rights
                </h2>
                <p className="text-gray-400 leading-relaxed">
                  Depending on your location, you may have rights regarding your
                  personal data, including the right to access, correct, delete,
                  or restrict use of your personal data.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.25 }}
              >
                <h2 className="text-xl font-bold text-white mb-4">
                  6. Changes to this Policy
                </h2>
                <p className="text-gray-400 leading-relaxed">
                  We may change this Privacy Policy from time to time. If we
                  make changes, we will notify you by revising the date at the
                  top of the policy.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
