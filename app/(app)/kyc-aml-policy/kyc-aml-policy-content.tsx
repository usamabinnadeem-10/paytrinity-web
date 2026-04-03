"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ChevronRight, ScanSearch } from "lucide-react";

export function KYCAMLPolicyContent() {
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
                <ScanSearch className="h-4 w-4 text-cyan-400" />
                <span className="text-sm font-medium text-cyan-100 tracking-wide">
                  Compliance
                </span>
              </div>
              <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl mb-6">
                KYC / AML Policy
              </h1>
              <div className="flex items-center justify-center gap-2 text-gray-400 text-sm">
                <Link
                  href="/"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Home
                </Link>
                <ChevronRight className="h-4 w-4" />
                <span className="text-cyan-400">KYC / AML Policy</span>
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
              Last Updated: January 31, 2026
            </p>

            <p className="text-gray-400 leading-relaxed mb-10">
              PayTrinity LLC (&ldquo;PayTrinity&rdquo;, &ldquo;we&rdquo;,
              &ldquo;us&rdquo;) is committed to the highest standards of
              Anti-Money Laundering (AML) and Know Your Customer (KYC)
              compliance. We have implemented a comprehensive program to detect,
              prevent, and report suspicious activity in accordance with
              applicable laws and regulations, including the Bank Secrecy Act
              (BSA) and the USA PATRIOT Act.
            </p>

            <div className="space-y-10">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-xl font-bold text-white mb-4">
                  1. Objective
                </h2>
                <p className="text-gray-400 leading-relaxed">
                  The objective of this Policy is to prevent PayTrinity&apos;s
                  services from being used for money laundering, terrorist
                  financing, or other illegal activities. We screen all customers
                  and monitor transactions to ensure compliance with global
                  financial standards.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 }}
              >
                <h2 className="text-xl font-bold text-white mb-4">
                  2. Customer Identification Program (CIP)
                </h2>
                <p className="text-gray-400 leading-relaxed mb-3">
                  To comply with federal laws and protect our platform, we must
                  obtain, verify, and record information that identifies each
                  person who opens an account.
                </p>
                <p className="text-gray-400 leading-relaxed mb-3">
                  <strong className="text-white">
                    What this means for you:
                  </strong>{" "}
                  When you register for our services, we will ask for your:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-400 leading-relaxed mb-3">
                  <li>Full Legal Name</li>
                  <li>Date of Birth</li>
                  <li>
                    Physical Address (PO Boxes are not accepted for this
                    purpose)
                  </li>
                  <li>
                    Government-Issued Identification Number (Passport,
                    Driver&apos;s License, or National ID)
                  </li>
                </ul>
                <p className="text-gray-400 leading-relaxed">
                  We may also ask to see a copy of your driver&apos;s license or
                  other identifying documents. For business accounts, we require
                  documentation such as Articles of Incorporation, proof of
                  address, and beneficial ownership information.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <h2 className="text-xl font-bold text-white mb-4">
                  3. Customer Due Diligence (CDD)
                </h2>
                <p className="text-gray-400 leading-relaxed mb-3">
                  We perform due diligence on all clients to verify their
                  identity and assess the risk associated with doing business
                  with them. This includes:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-400 leading-relaxed">
                  <li>
                    Verifying the identity of the customer using reliable,
                    independent source documents, data, or information.
                  </li>
                  <li>
                    Understanding the nature and purpose of the business
                    relationship.
                  </li>
                  <li>
                    Identifying beneficial owners of legal entity customers.
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
                  4. Enhanced Due Diligence (EDD)
                </h2>
                <p className="text-gray-400 leading-relaxed">
                  For high-risk customers or transactions, we apply Enhanced Due
                  Diligence measures. This may include obtaining additional
                  information on the customer&apos;s source of funds, source of
                  wealth, and the purpose of the transaction.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <h2 className="text-xl font-bold text-white mb-4">
                  5. Sanctions Screening
                </h2>
                <p className="text-gray-400 leading-relaxed">
                  PayTrinity screens all customers against government
                  watchlists, including the Office of Foreign Assets Control
                  (OFAC) Specially Designated Nationals (SDN) list and other
                  international sanctions lists. We are prohibited from
                  transacting with individuals, entities, or countries subject to
                  certain sanctions.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.25 }}
              >
                <h2 className="text-xl font-bold text-white mb-4">
                  6. Monitoring and Reporting
                </h2>
                <p className="text-gray-400 leading-relaxed">
                  We monitor account activity for unusual or suspicious
                  behavior. If we detect suspicious activity, we may be required
                  to file a Suspicious Activity Report (SAR) with the Financial
                  Crimes Enforcement Network (FinCEN) or other relevant
                  authorities. We reserve the right to suspend or terminate
                  accounts that fail to comply with our KYC/AML requests or are
                  suspected of illegal activity.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <h2 className="text-xl font-bold text-white mb-4">
                  7. Record Keeping
                </h2>
                <p className="text-gray-400 leading-relaxed">
                  We maintain records of all customer identification documents
                  and transaction data for a minimum period of five years, or as
                  required by applicable law.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.35 }}
              >
                <h2 className="text-xl font-bold text-white mb-4">
                  8. Contact Us
                </h2>
                <p className="text-gray-400 leading-relaxed">
                  If you have questions regarding our KYC/AML Policy, please
                  contact our compliance team at{" "}
                  <a
                    href="mailto:hello@paytrinity.co"
                    className="text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    hello@paytrinity.co
                  </a>
                  .
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
