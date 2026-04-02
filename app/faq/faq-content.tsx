"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { motion } from "motion/react";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    category: "ITIN (Individual Taxpayer Identification Number)",
    questions: [
      {
        q: "What is an ITIN and who needs it?",
        a: "An ITIN (Individual Taxpayer Identification Number) is a tax processing number issued by the IRS for individuals who are required to have a US taxpayer identification number but do not have and are not eligible to obtain a Social Security Number (SSN). Non-US citizens who need to file US tax returns, open US bank accounts, or apply for payment processors typically need an ITIN.",
      },
      {
        q: "Why is ITIN required for non-US founders?",
        a: "Non-US founders need an ITIN for several critical reasons: (1) IRS requires it for filing US tax returns if you have US-sourced income, (2) Most US banks require either SSN or ITIN for business account opening, (3) Payment processors like Stripe and Square often require ITIN for non-resident business owners, (4) It establishes your tax compliance status in the US system.",
      },
      {
        q: "How long does the ITIN application process take?",
        a: "ITIN applications typically take 2-4 weeks for IRS processing after submission. However, processing times can vary based on IRS workload, time of year (tax season is slower), and completeness of your application. Our service includes proper preparation to minimize delays and rejections.",
      },
      {
        q: "Do I need an ITIN before forming my LLC?",
        a: "No, you can form an LLC without an ITIN. However, you will likely need an ITIN later for banking and payment processor applications. Many founders apply for their ITIN and LLC formation simultaneously to streamline the process and avoid delays when opening accounts.",
      },
      {
        q: "Can I apply for ITIN myself without professional help?",
        a: "Yes, you can apply directly with the IRS using Form W-7. However, improper documentation or errors can result in rejection and significant delays. Our service ensures proper form completion, document certification guidance, and submission coordination to maximize approval likelihood.",
      },
      {
        q: "How long is an ITIN valid?",
        a: "ITINs that have not been used on a federal tax return at least once in the last three consecutive tax years will expire. You must renew your ITIN before filing a tax return. We provide renewal tracking and reminders to ensure your ITIN remains active.",
      },
    ],
  },
  {
    category: "Entity Formation",
    questions: [
      {
        q: "Should I form an LLC or Corporation?",
        a: "Most international founders form LLCs due to simpler compliance requirements and flexible tax treatment. However, Corporations may be preferable if you plan to raise venture capital or issue stock options. We provide guidance based on your specific business model, funding plans, and long-term goals.",
      },
      {
        q: "Which state should I incorporate in?",
        a: "Delaware, Wyoming, and your state of primary business activity are common choices. Delaware offers established corporate law and is preferred by venture-backed companies. Wyoming offers low fees and privacy. We help you evaluate based on your specific needs, business type, and operational plans.",
      },
      {
        q: "Can non-US citizens form a US company?",
        a: "Yes. US law allows non-citizens and non-residents to form and own US LLCs and Corporations. You do not need a visa, Social Security Number, ITIN, or US address to form a company. However, you will need proper documentation (including likely an ITIN) for banking and payment processor applications.",
      },
    ],
  },
  {
    category: "EIN & Tax Compliance",
    questions: [
      {
        q: "What is an EIN and why do I need it?",
        a: "An EIN (Employer Identification Number) is a federal tax ID issued by the IRS for your business entity. It's required for opening US bank accounts, hiring employees, filing business tax returns, and most payment processor applications. Think of it as a Social Security Number for your business.",
      },
      {
        q: "Can I get an EIN without an ITIN?",
        a: "Yes, your business entity (LLC/Corporation) can obtain an EIN without you personally having an ITIN. However, you as an individual may still need an ITIN for personal tax filing, banking requirements, or payment processor applications. Many founders obtain both.",
      },
      {
        q: "Do I need to file US taxes?",
        a: "Tax obligations depend on your business activities, income sources, and entity structure. Non-US citizens with US-sourced income typically have filing obligations. We provide initial guidance and can refer you to licensed CPAs who specialize in international taxation and cross-border compliance.",
      },
    ],
  },
  {
    category: "Payment Processors (Stripe & Square)",
    questions: [
      {
        q: "Can I get Stripe or Square as a non-US founder?",
        a: "Yes, but approval is not guaranteed. Stripe and Square review business model, transaction patterns, website quality, business legitimacy, documentation completeness, and risk factors. We help you present your business professionally and meet documentation requirements, but cannot guarantee approval.",
      },
      {
        q: "What documents do Stripe and Square require?",
        a: "Typically: EIN confirmation, Articles of Organization/Incorporation, Operating Agreement/Bylaws, business bank account, professional website, owner identification (often including ITIN for non-US citizens), and identity verification. Requirements vary by processor and are subject to change.",
      },
      {
        q: "Why do payment processor applications get rejected?",
        a: "Common reasons include: incomplete documentation, high-risk business model, poor website quality, inconsistent information, missing ITIN or tax documentation, suspicious transaction patterns, or previous violations. Each processor has internal risk policies that are not publicly disclosed.",
      },
    ],
  },
  {
    category: "Banking",
    questions: [
      {
        q: "Can I open a US bank account remotely?",
        a: "Some banks allow remote account opening for US entities, but many require in-person visits or video verification. Requirements have become stricter due to anti-money laundering regulations. Most banks require ITIN or SSN for non-resident business owners. We provide guidance on bank options.",
      },
      {
        q: "What documents do banks require?",
        a: "Typically: EIN confirmation letter, Articles of Organization/Incorporation, Operating Agreement/Bylaws, business address proof, ownership information, personal identification, and ITIN or SSN for non-US citizens. Requirements vary significantly by bank and account type.",
      },
    ],
  },
  {
    category: "Services & Pricing",
    questions: [
      {
        q: "What is included in your service fees?",
        a: "Our fees cover professional service, document preparation, filing coordination, and advisory guidance. Government filing fees (paid to IRS or state agencies) are billed separately. See our Pricing page for detailed bundle breakdowns.",
      },
      {
        q: "Do you guarantee approval by the IRS or payment processors?",
        a: "No. We do not and cannot guarantee approval by the IRS, banks, payment processors, or any third party. These institutions make independent decisions based on their internal policies. We help you present applications professionally but cannot influence underwriting decisions.",
      },
      {
        q: "What is your refund policy?",
        a: "Service fees are non-refundable once work has commenced. Government filing fees paid to the IRS or state agencies are non-refundable under any circumstances. We believe in transparent expectations rather than guaranteed outcomes.",
      },
      {
        q: "How long do your services take?",
        a: "ITIN applications: 2-4 weeks. LLC formation: 2-4 weeks. EIN procurement: 1-2 weeks. Actual timelines depend on government processing speeds and application completeness. We provide realistic estimates, not promises.",
      },
    ],
  },
];

export function FAQContent() {
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
                <HelpCircle className="h-4 w-4 text-cyan-400" />
                <span className="text-sm font-medium text-cyan-100 tracking-wide">
                  Knowledge Base
                </span>
              </div>
              <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl mb-6">
                Frequently Asked Questions
              </h1>
              <p className="text-xl leading-8 text-gray-400">
                Common questions about ITIN, US business formation, and
                compliance for international founders
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 relative z-10">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="space-y-16">
            {faqs.map((category, catIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: catIndex * 0.1 }}
              >
                <h2 className="text-2xl font-bold text-white mb-8 border-b border-white/10 pb-4">
                  {category.category}
                </h2>
                <Accordion type="single" collapsible className="space-y-4">
                  {category.questions.map((faq, qIndex) => (
                    <AccordionItem
                      key={`${catIndex}-${qIndex}`}
                      value={`${catIndex}-${qIndex}`}
                      className="border border-white/10 rounded-2xl px-6 bg-white/5 hover:bg-white/[0.08] transition-all"
                    >
                      <AccordionTrigger className="text-left hover:no-underline py-6 [&[data-state=open]]:text-cyan-400">
                        <span className="text-lg font-semibold text-white pr-4">
                          {faq.q}
                        </span>
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-400 pb-6 leading-relaxed">
                        {faq.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-20 border-t border-white/10 bg-white/[0.02] relative z-10">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold tracking-tight text-white mb-6">
            Still have questions?
          </h2>
          <p className="text-lg text-gray-400 mb-10">
            Schedule a consultation to discuss your specific situation and get
            personalized guidance.
          </p>
          <Link
            href="/contact"
            className="inline-block rounded-lg bg-white text-[#020410] px-8 py-4 text-base font-bold shadow-lg hover:bg-gray-200 transition-all hover:shadow-xl hover:-translate-y-1"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
