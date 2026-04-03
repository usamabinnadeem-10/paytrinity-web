"use client";

import Link from "next/link";
import {
  ArrowLeft,
  FileText,
  Clock,
  CheckCircle,
  Info,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const articles: Record<
  string,
  {
    title: string;
    category: string;
    lastUpdated: string;
    content: React.ReactNode;
  }
> = {
  "itin-timeline": {
    title: "How long does it take to get an ITIN?",
    category: "ITIN & Tax",
    lastUpdated: "Updated 2 days ago",
    content: (
      <div className="space-y-6 text-gray-400">
        <p>
          The timeline for obtaining an Individual Taxpayer Identification Number
          (ITIN) can vary depending on the time of year and the IRS&apos;s
          current backlog. Generally, the process takes between{" "}
          <strong>7 to 11 weeks</strong> (Standard Processing) or{" "}
          <strong>4 to 6 weeks</strong> (Expedited Processing).
        </p>
        <h3 className="text-xl font-bold text-white mt-6">
          Standard vs. Peak Processing Times
        </h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Standard Processing:</strong> 7 weeks is the typical wait
            time.
          </li>
          <li>
            <strong>Peak Tax Season (January - April):</strong> Processing can
            take up to 11 weeks or longer.
          </li>
          <li>
            <strong>International Applicants:</strong> If applying from overseas,
            allow extra time for mail delivery.
          </li>
        </ul>
        <div className="bg-blue-500/10 p-4 rounded-lg border border-blue-500/20 flex gap-3 mt-4">
          <Info className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-blue-200">
            PayTrinity offers an expedited service that ensures your application
            is error-free, preventing common delays that can add months to the
            process.
          </p>
        </div>
      </div>
    ),
  },
  "llc-vs-c-corp": {
    title: "LLC vs C-Corp for International Founders",
    category: "Formation",
    lastUpdated: "Updated 1 week ago",
    content: (
      <div className="space-y-6 text-gray-400">
        <p>
          Choosing between an LLC (Limited Liability Company) and a
          C-Corporation is one of the first major decisions for an international
          founder. The right choice depends on your goals for funding and
          taxation.
        </p>

        <h3 className="text-xl font-bold text-white mt-6">
          Limited Liability Company (LLC)
        </h3>
        <p>
          Best for: Bootstrapped businesses, lifestyle businesses, and solo
          founders.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Taxation:</strong> Pass-through taxation (no double tax).
          </li>
          <li>
            <strong>Maintenance:</strong> Lower compliance burden and annual
            fees.
          </li>
          <li>
            <strong>Investors:</strong> Difficult to raise venture capital.
          </li>
        </ul>

        <h3 className="text-xl font-bold text-white mt-6">
          C-Corporation (C-Corp)
        </h3>
        <p>
          Best for: Startups seeking venture capital or equity compensation for
          employees.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Taxation:</strong> Double taxation (corporate tax + dividend
            tax), but qualified small business stock (QSBS) exemptions may
            apply.
          </li>
          <li>
            <strong>Maintenance:</strong> Higher compliance requirements (board
            meetings, minutes).
          </li>
          <li>
            <strong>Investors:</strong> The standard for VCs and accelerators
            like Y Combinator.
          </li>
        </ul>
      </div>
    ),
  },
  "mercury-bank-documents": {
    title: "Required documents for Mercury Bank",
    category: "Banking",
    lastUpdated: "Updated 3 days ago",
    content: (
      <div className="space-y-6 text-gray-400">
        <p>
          Opening a US business bank account with Mercury is a streamlined
          process for PayTrinity clients. You will generally need the following
          documents:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>
              Articles of Organization (LLC) or Incorporation (C-Corp):
            </strong>{" "}
            Proof of your company&apos;s formation.
          </li>
          <li>
            <strong>EIN Verification Letter (Form CP575 or 147C):</strong>{" "}
            Issued by the IRS.
          </li>
          <li>
            <strong>Passport:</strong> A valid government-issued passport for all
            beneficial owners (25%+ ownership).
          </li>
          <li>
            <strong>Address Proof:</strong> Personal address proof for the
            founder (utility bill or bank statement).
          </li>
          <li>
            <strong>US Company Address:</strong> Provided by PayTrinity (if
            using our Registered Agent service).
          </li>
        </ul>
        <p className="mt-4">
          Note: Mercury is a financial technology company, not a bank. Banking
          services provided by Choice Financial Group and Evolve Bank &
          Trust&reg;; Members FDIC.
        </p>
      </div>
    ),
  },
  "us-tax-deadlines": {
    title: "Understanding US Tax Deadlines",
    category: "Compliance",
    lastUpdated: "Updated 2 weeks ago",
    content: (
      <div className="space-y-6 text-gray-400">
        <p>
          Missing tax deadlines can lead to hefty fines. Here are the critical
          dates for foreign-owned US businesses:
        </p>

        <h3 className="text-xl font-bold text-white mt-6">Key Dates</h3>
        <div className="space-y-4">
          <div className="flex gap-4 items-start">
            <div className="bg-amber-500/10 text-amber-400 font-bold px-3 py-1 rounded text-sm min-w-[80px] text-center border border-amber-500/20">
              Apr 15
            </div>
            <div>
              <p className="font-semibold text-white">
                Form 1120 (C-Corps) & Form 5472
              </p>
              <p className="text-sm">
                Deadline for C-Corporations operating on a calendar year.
              </p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <div className="bg-amber-500/10 text-amber-400 font-bold px-3 py-1 rounded text-sm min-w-[80px] text-center border border-amber-500/20">
              Apr 15
            </div>
            <div>
              <p className="font-semibold text-white">Form 1040-NR</p>
              <p className="text-sm">
                Non-resident alien income tax return (if you have US-sourced
                income).
              </p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <div className="bg-amber-500/10 text-amber-400 font-bold px-3 py-1 rounded text-sm min-w-[80px] text-center border border-amber-500/20">
              Jun 15
            </div>
            <div>
              <p className="font-semibold text-white">
                Form 1040-NR (Extended)
              </p>
              <p className="text-sm">
                Automatic extension for those living outside the US (must still
                pay taxes by Apr 15).
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  "stripe-pakistan": {
    title: "Can I use Stripe from Pakistan?",
    category: "Payments",
    lastUpdated: "Updated 5 days ago",
    content: (
      <div className="space-y-6 text-gray-400">
        <p>
          Yes! While Stripe is not directly available in Pakistan, you can
          legally access Stripe by forming a US company (LLC or C-Corp).
        </p>
        <h3 className="text-xl font-bold text-white mt-6">How it works</h3>
        <ol className="list-decimal pl-6 space-y-2">
          <li>
            <strong>Form a US LLC:</strong> This gives you a legal US entity.
          </li>
          <li>
            <strong>Get an EIN:</strong> The Tax ID required to open bank and
            Stripe accounts.
          </li>
          <li>
            <strong>Open a US Bank Account:</strong> Using services like Mercury
            or Relay (PayTrinity helps with this).
          </li>
          <li>
            <strong>Sign up for Stripe:</strong> Use your US LLC details, EIN,
            and US bank account.
          </li>
        </ol>
        <div className="bg-green-500/10 p-4 rounded-lg border border-green-500/20 flex gap-3 mt-4">
          <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-green-200">
            PayTrinity has successfully helped hundreds of Pakistani founders set
            up their Stripe accounts through US LLC formation.
          </p>
        </div>
      </div>
    ),
  },
  "renew-registered-agent": {
    title: "How to renew my Registered Agent",
    category: "Services",
    lastUpdated: "Updated 3 weeks ago",
    content: (
      <div className="space-y-6 text-gray-400">
        <p>
          Maintaining a Registered Agent is a legal requirement for all US LLCs
          and Corporations. PayTrinity makes renewal automatic and simple.
        </p>
        <h3 className="text-xl font-bold text-white mt-6">Renewal Process</h3>
        <p>
          If you formed your company with PayTrinity, your Registered Agent
          service is typically billed annually. You will receive an email
          notification 30 days before the renewal date.
        </p>
        <p>To manually renew or check your status:</p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Log in to your PayTrinity dashboard.</li>
          <li>
            Navigate to the <strong>&quot;Compliance&quot;</strong> tab.
          </li>
          <li>
            Look for <strong>&quot;Registered Agent Status&quot;</strong>.
          </li>
          <li>
            Click <strong>&quot;Renew Now&quot;</strong> if your service is
            expiring soon.
          </li>
        </ol>
      </div>
    ),
  },
};

export function HelpArticleContent({ slug }: { slug: string }) {
  const article = articles[slug];

  if (!article) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-[#020410] text-white">
        <h1 className="text-3xl font-bold text-white mb-4">
          Article Not Found
        </h1>
        <p className="text-gray-400 mb-8">
          Sorry, the article you are looking for does not exist.
        </p>
        <Link href="/help-center">
          <Button variant="secondary">Back to Help Center</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-[#020410] text-white selection:bg-blue-500 selection:text-white font-sans overflow-x-hidden">
      {/* Background Gradients */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-blue-600/10 blur-[120px] rounded-full mix-blend-screen animate-pulse duration-[10000ms]" />
        <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-purple-600/10 blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-[-20%] left-[20%] w-[800px] h-[800px] bg-cyan-600/10 blur-[120px] rounded-full mix-blend-screen" />
      </div>

      <div className="relative z-10 py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <Link
            href="/help-center"
            className="inline-flex items-center text-sm font-medium text-gray-400 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Help Center
          </Link>

          <div className="flex items-center gap-3 text-sm font-medium text-blue-400 mb-4">
            <span className="bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
              {article.category}
            </span>
          </div>

          <h1 className="text-4xl font-bold text-white mb-6 leading-tight">
            {article.title}
          </h1>

          <div className="flex items-center gap-6 text-sm text-gray-400 mb-10 pb-10 border-b border-white/10">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              {article.lastUpdated}
            </div>
            <div className="flex items-center gap-2">
              <FileText className="h-4 w-4" />3 min read
            </div>
          </div>

          <article className="prose prose-lg prose-invert max-w-none">
            {article.content}
          </article>

          <div className="mt-16 pt-10 border-t border-white/10">
            <h3 className="text-lg font-bold text-white mb-4">
              Was this article helpful?
            </h3>
            <div className="flex gap-4">
              <Button
                variant="outline"
                className="gap-2 border-white/10 hover:bg-white/5 text-white bg-transparent"
              >
                Yes, it helped
              </Button>
              <Button
                variant="outline"
                className="gap-2 border-white/10 hover:bg-white/5 text-white bg-transparent"
              >
                No, I need more help
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
