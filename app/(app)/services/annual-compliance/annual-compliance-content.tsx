"use client";

import Link from "next/link";
import {
  CheckCircle2,
  FileText,
  Calendar,
  ShieldAlert,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";

const benefits = [
  {
    icon: FileText,
    title: "Annual Reports",
    description:
      "Automated filing of annual reports across all 50 states. We track every deadline so you never fall behind.",
    color: "cyan",
    iconColor: "text-cyan-400",
    bgColor: "bg-cyan-500/10",
    borderColor: "border-cyan-500/20",
  },
  {
    icon: ShieldAlert,
    title: "BOI Filing",
    description:
      "FinCEN Beneficial Ownership Information reporting handled end-to-end. Stay compliant with the new federal mandate.",
    color: "blue",
    iconColor: "text-blue-400",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/20",
  },
  {
    icon: Calendar,
    title: "Deadline Tracking",
    description:
      "Proactive monitoring and reminders for every compliance deadline. Never pay a late fee again.",
    color: "green",
    iconColor: "text-green-400",
    bgColor: "bg-green-500/10",
    borderColor: "border-green-500/20",
  },
];

const consequences = [
  "Heavy Fines — States impose penalties of $200-$10,000+ for late or missed annual reports and franchise taxes.",
  "Administrative Dissolution — Your LLC or Corporation can be involuntarily dissolved, losing its legal protections.",
  "Banking Issues — Banks may freeze your account if your entity falls out of good standing with the state.",
];

const complianceSteps = [
  {
    step: 1,
    title: "Franchise Tax Filing",
    description:
      "We calculate and file your franchise taxes on time in every state where your entity is registered.",
  },
  {
    step: 2,
    title: "Annual Report Filing",
    description:
      "State-specific annual or biennial reports prepared and submitted before every deadline.",
  },
  {
    step: 3,
    title: "FinCEN BOI Reporting",
    description:
      "Beneficial Ownership Information reports filed with FinCEN to meet the new federal transparency requirements.",
  },
  {
    step: 4,
    title: "Certificate of Good Standing",
    description:
      "We obtain and maintain your Certificate of Good Standing so your entity remains in full compliance.",
  },
];

export function AnnualComplianceContent() {
  return (
    <div className="min-h-screen bg-[#020410] text-white selection:bg-cyan-500 selection:text-white font-sans">
      {/* Background gradients */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-cyan-600/10 blur-[100px] rounded-full mix-blend-screen opacity-40" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-600/10 blur-[100px] rounded-full mix-blend-screen opacity-30" />
        <div className="absolute top-[40%] left-[30%] w-[400px] h-[400px] bg-teal-600/8 blur-[100px] rounded-full mix-blend-screen opacity-20" />
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
                <span className="h-2 w-2 rounded-full bg-cyan-400" />
                <span className="text-sm font-medium text-cyan-100 tracking-wide">
                  State & Federal Compliance
                </span>
              </div>
              <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl mb-4">
                Automated Compliance
              </h1>
              <p className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-teal-300 bg-clip-text text-transparent mb-6">
                & Annual Reporting
              </p>
              <p className="text-lg leading-8 text-gray-400 mb-10 max-w-2xl mx-auto">
                Missing a single filing deadline can result in thousands in fines,
                involuntary dissolution, or loss of good standing. Our automated
                compliance engine tracks every obligation including the new FinCEN
                BOI requirement so you never fall behind.
              </p>
              <Button asChild size="lg">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-lg bg-cyan-500 px-8 py-4 text-base font-bold text-white shadow-lg hover:shadow-cyan-500/25 hover:scale-105 transition-all"
                >
                  Stay Compliant
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
              Complete Compliance Coverage
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Every filing, every state, every deadline handled for you.
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
                The Cost of Non-Compliance
              </h2>
              <p className="text-gray-400 leading-relaxed mb-8">
                Every US entity has ongoing obligations to the state where it was
                formed and the federal government. Annual reports, franchise
                taxes, and the new Beneficial Ownership Information report are not
                optional. Failing to meet these obligations puts your business,
                your bank accounts, and your personal liability protection at
                risk.
              </p>

              <h3 className="text-xl font-bold text-white mb-4">
                Consequences of Missing Deadlines
              </h3>
              <div className="space-y-4 mb-8">
                {consequences.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm leading-relaxed">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>

              <h3 className="text-xl font-bold text-white mb-4">
                New Requirement: BOI Report
              </h3>
              <p className="text-gray-400 leading-relaxed">
                The Corporate Transparency Act now requires most US entities to
                file a Beneficial Ownership Information report with FinCEN. New
                companies must file within 90 days of formation, and existing
                companies have a yearly reporting obligation. Non-compliance
                carries civil penalties of up to $500 per day and potential
                criminal liability.
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
                  <ShieldCheck className="w-6 h-6 text-cyan-400" />
                  <h3 className="text-2xl font-bold text-white">
                    Our Compliance Guard
                  </h3>
                </div>
                <div className="space-y-6">
                  {complianceSteps.map((step, index) => (
                    <motion.div
                      key={step.step}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex items-start gap-4"
                    >
                      <div className="w-8 h-8 rounded-full bg-cyan-500 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
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
              Automate Your Compliance
            </h2>
            <p className="text-lg text-gray-400 mb-10">
              Stop worrying about deadlines and penalties. Let our system handle
              every filing automatically.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button asChild size="lg">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-lg bg-cyan-500 px-8 py-4 text-base font-bold text-white shadow-lg hover:shadow-cyan-500/25 hover:scale-105 transition-all"
                >
                  Start Compliance
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
