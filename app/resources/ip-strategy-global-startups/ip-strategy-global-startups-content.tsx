"use client";

import Link from "next/link";
import {
  Lightbulb,
  ArrowRight,
  CheckCircle2,
  BookOpen,
  Clock,
} from "lucide-react";
import { motion } from "motion/react";

export function IPStrategyGlobalStartupsContent() {
  return (
    <div className="min-h-screen bg-[#020410] text-white">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-purple-600/10 blur-[120px] rounded-full" />
      </div>

      <section className="relative pt-32 pb-16 lg:pt-48 lg:pb-20 px-6">
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Link
              href="/policy-research"
              className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white mb-8 transition-colors"
            >
              <ArrowRight className="w-4 h-4 rotate-180" />
              Back to Policy & Research
            </Link>

            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-purple-500/20 flex items-center justify-center border border-purple-500/30">
                <Lightbulb className="w-6 h-6 text-purple-400" />
              </div>
              <div className="flex items-center gap-4 text-sm text-gray-400">
                <span className="flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4" />
                  Research Article
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  18 min read
                </span>
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              IP Strategy for Global Startups
            </h1>

            <p className="text-xl text-gray-400 leading-relaxed mb-8">
              Cross-Border Intellectual Property Protection and Strategic
              Portfolio Development
            </p>

            <div className="p-6 rounded-2xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20">
              <p className="text-sm text-purple-100 leading-relaxed">
                <span className="font-semibold">Abstract:</span> Global startups
                face complex intellectual property challenges as they scale
                across borders. This article provides a strategic framework for
                IP protection, examining patent strategy, trademark portfolios,
                trade secret management, and international IP treaties. We
                develop actionable recommendations for resource-constrained
                startups building defensible competitive positions.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-12 relative">
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose prose-invert prose-lg max-w-none">
            {/* Section 1 */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6 text-white">
                1. The IP Landscape for Startups
              </h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Intellectual property represents both a strategic asset and a
                significant cost center for startups. Unlike established firms
                with mature IP portfolios, startups must make difficult
                trade-offs between IP protection and cash preservation while
                building competitive moats.
              </p>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 my-8">
                <h3 className="text-xl font-bold mb-4 text-white">
                  Core IP Asset Classes
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-purple-400 flex-shrink-0 mt-1" />
                    <span>
                      <strong>Patents:</strong> Legal monopolies on inventions
                      (utility patents) and designs (design patents). Expensive
                      but powerful for technology startups
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-purple-400 flex-shrink-0 mt-1" />
                    <span>
                      <strong>Trademarks:</strong> Brand identifiers including
                      names, logos, and slogans. Relatively affordable and
                      critical for consumer-facing businesses
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-purple-400 flex-shrink-0 mt-1" />
                    <span>
                      <strong>Copyrights:</strong> Protection for creative works,
                      software code, and content. Automatic protection with
                      low-cost registration available
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-purple-400 flex-shrink-0 mt-1" />
                    <span>
                      <strong>Trade Secrets:</strong> Confidential business
                      information providing competitive advantage. No
                      registration required but requires active protection
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Section 2 */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6 text-white">
                2. Patent Strategy for Startups
              </h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Patent strategy requires careful analysis of costs, competitive
                dynamics, and business model:
              </p>

              <div className="space-y-6 my-8">
                <div className="border-l-4 border-purple-500 pl-6 py-2">
                  <h4 className="font-bold text-white mb-2">When to Patent</h4>
                  <p className="text-gray-400 text-sm mb-3">
                    Patents make sense when:
                  </p>
                  <ul className="text-gray-400 text-sm space-y-1 ml-4">
                    <li>
                      &bull; Core technology is easily reverse-engineered
                    </li>
                    <li>
                      &bull; Licensing revenue is part of business model
                    </li>
                    <li>
                      &bull; Defensive patents needed against competitors
                    </li>
                    <li>
                      &bull; Patent portfolio increases company valuation for
                      fundraising
                    </li>
                  </ul>
                </div>

                <div className="border-l-4 border-pink-500 pl-6 py-2">
                  <h4 className="font-bold text-white mb-2">
                    When Trade Secrets May Be Better
                  </h4>
                  <p className="text-gray-400 text-sm mb-3">
                    Trade secret protection is preferable when:
                  </p>
                  <ul className="text-gray-400 text-sm space-y-1 ml-4">
                    <li>
                      &bull; Technology is difficult to reverse-engineer (e.g.,
                      algorithms, processes)
                    </li>
                    <li>
                      &bull; Product cycles are shorter than patent examination
                      periods
                    </li>
                    <li>&bull; Cash preservation is critical</li>
                    <li>
                      &bull; Publication through patent application would help
                      competitors
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-2xl p-8 my-8">
                <h3 className="text-xl font-bold mb-4 text-white">
                  International Patent Protection
                </h3>
                <p className="text-gray-300 text-sm mb-4">
                  Patents are territorial—protection in the U.S. doesn&apos;t
                  extend to Europe or Asia. Global startups must make strategic
                  decisions about geographic coverage:
                </p>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-purple-300 mb-1 text-sm">
                      PCT (Patent Cooperation Treaty)
                    </h4>
                    <p className="text-gray-400 text-xs">
                      File one international application, preserving rights in
                      150+ countries while delaying national phase costs by 30
                      months. Cost: $4,000-10,000 for filing.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-pink-300 mb-1 text-sm">
                      National Phase Strategy
                    </h4>
                    <p className="text-gray-400 text-xs">
                      Select specific countries for patent protection based on
                      market size, manufacturing locations, and competitive
                      threats. Major markets: US, EU, China, Japan. Cost:
                      $5,000-15,000 per country.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-cyan-300 mb-1 text-sm">
                      Phased Approach
                    </h4>
                    <p className="text-gray-400 text-xs">
                      File in home country first, use PCT to extend timeline,
                      then select national phases strategically based on market
                      traction and fundraising success.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 3 */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6 text-white">
                3. Trademark Portfolio Development
              </h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Trademarks are often the most valuable IP asset for
                consumer-facing startups. A strong trademark portfolio should be
                built systematically:
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                  <h4 className="font-bold text-white mb-3">
                    Core Brand Elements
                  </h4>
                  <p className="text-sm text-gray-400 mb-3">
                    Register primary brand name, logo, and tagline in all
                    operating jurisdictions. Priority for consumer-facing
                    startups.
                  </p>
                  <p className="text-xs text-purple-400">
                    Cost: $250-1,500 per mark per country
                  </p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                  <h4 className="font-bold text-white mb-3">
                    Product Line Marks
                  </h4>
                  <p className="text-sm text-gray-400 mb-3">
                    Register distinctive product names that may become valuable
                    brand extensions or licensing opportunities.
                  </p>
                  <p className="text-xs text-purple-400">
                    Strategic expansion of portfolio
                  </p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                  <h4 className="font-bold text-white mb-3">
                    Defensive Registrations
                  </h4>
                  <p className="text-sm text-gray-400 mb-3">
                    Register variations, common misspellings, and translations to
                    prevent brand confusion and cybersquatting.
                  </p>
                  <p className="text-xs text-purple-400">
                    Protect brand integrity
                  </p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                  <h4 className="font-bold text-white mb-3">
                    International Priority
                  </h4>
                  <p className="text-sm text-gray-400 mb-3">
                    Madrid Protocol allows centralized filing across 120+
                    countries. Critical for global brands.
                  </p>
                  <p className="text-xs text-purple-400">
                    Efficient international coverage
                  </p>
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed mb-6 mt-8">
                <strong className="text-white">Geographic Strategy:</strong>{" "}
                File trademarks first in home market and the U.S. (if
                different). Then expand to major markets (EU, UK, China, India)
                and markets where counterfeiting risk is high. Use Madrid
                Protocol for efficiency when covering multiple jurisdictions.
              </p>
            </div>

            {/* Section 4 */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6 text-white">
                4. Trade Secret Management
              </h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Trade secrets require no registration but demand active
                protection. Unlike patents, trade secret protection can last
                indefinitely (Coca-Cola&apos;s formula remains protected after
                130+ years).
              </p>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 my-8">
                <h3 className="text-xl font-bold mb-4 text-white">
                  Essential Trade Secret Protections
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-purple-500/20 p-2 rounded-lg text-purple-400 flex-shrink-0">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">
                        Confidentiality Agreements
                      </h4>
                      <p className="text-sm text-gray-400">
                        All employees, contractors, and third parties with access
                        sign NDAs before exposure to confidential information
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-pink-500/20 p-2 rounded-lg text-pink-400 flex-shrink-0">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">
                        Employee Agreements
                      </h4>
                      <p className="text-sm text-gray-400">
                        Employment contracts with IP assignment clauses,
                        non-compete provisions (where enforceable), and
                        confidentiality obligations
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-cyan-500/20 p-2 rounded-lg text-cyan-400 flex-shrink-0">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">
                        Access Controls
                      </h4>
                      <p className="text-sm text-gray-400">
                        Physical and digital access restrictions limiting
                        exposure to need-to-know basis. Document control and
                        tracking systems
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-emerald-500/20 p-2 rounded-lg text-emerald-400 flex-shrink-0">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">
                        Documentation
                      </h4>
                      <p className="text-sm text-gray-400">
                        Mark confidential materials clearly. Maintain records of
                        protection measures for potential litigation
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 5 */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6 text-white">
                5. Open Source and Dual Licensing Strategies
              </h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Many successful startups use open source strategically, balancing
                community benefits against commercial protection:
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                <strong className="text-white">
                  Core Open/Premium Closed:
                </strong>{" "}
                Release core functionality as open source to drive adoption,
                while keeping premium features proprietary (Elastic, GitLab
                model).
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                <strong className="text-white">Dual Licensing:</strong> Offer
                permissive license for open source use, require commercial
                license for enterprise deployment (MySQL, Qt model).
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                <strong className="text-white">
                  Open Core with Services:
                </strong>{" "}
                Open source software with monetization through support, hosting,
                and enterprise features (Red Hat, Automattic model).
              </p>
            </div>

            {/* Section 6 */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6 text-white">
                6. IP Due Diligence and Clean Room Development
              </h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Investors conducting due diligence will scrutinize IP ownership
                and freedom to operate. Startups must demonstrate:
              </p>

              <div className="space-y-4 my-8">
                <div className="bg-purple-500/10 border border-purple-500/20 rounded-xl p-6">
                  <h4 className="font-bold text-white mb-2">
                    Clean IP Chain of Title
                  </h4>
                  <p className="text-gray-400 text-sm">
                    All IP created by founders, employees, and contractors
                    properly assigned to company. No gaps in assignment
                    agreements.
                  </p>
                </div>

                <div className="bg-pink-500/10 border border-pink-500/20 rounded-xl p-6">
                  <h4 className="font-bold text-white mb-2">
                    Freedom to Operate
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Analysis showing company&apos;s products don&apos;t infringe
                    third-party patents. Particularly critical in crowded
                    technology spaces.
                  </p>
                </div>

                <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-xl p-6">
                  <h4 className="font-bold text-white mb-2">
                    Open Source Compliance
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Inventory of all open source components, license compliance
                    verification, and management of copyleft obligations.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 7 */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6 text-white">
                7. Budget-Conscious IP Strategy
              </h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Early-stage startups must prioritize IP spending strategically:
              </p>

              <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-2xl p-8 my-8">
                <h3 className="text-2xl font-bold mb-6 text-white">
                  Phased IP Investment Strategy
                </h3>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-purple-300 mb-2">
                      Pre-Seed Stage ($0-500k raised)
                    </h4>
                    <ul className="text-gray-300 text-sm space-y-2 ml-4">
                      <li>
                        &bull; Provisional patent application on core technology
                        ($2-5k)
                      </li>
                      <li>
                        &bull; Primary trademark registration in home market
                        ($500-1,500)
                      </li>
                      <li>
                        &bull; Strong employee IP assignment agreements (legal
                        cost: $2-5k)
                      </li>
                      <li>
                        &bull; Trade secret protection protocols (mostly internal
                        process)
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-pink-300 mb-2">
                      Seed Stage ($500k-2M raised)
                    </h4>
                    <ul className="text-gray-300 text-sm space-y-2 ml-4">
                      <li>
                        &bull; Convert provisional to utility patent application
                        ($10-20k)
                      </li>
                      <li>
                        &bull; Trademark registration in major markets: US, EU
                        ($3-6k)
                      </li>
                      <li>
                        &bull; Freedom-to-operate analysis for core technology
                        ($10-25k)
                      </li>
                      <li>
                        &bull; Copyright registration for significant software
                        ($50-100 per registration)
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-cyan-300 mb-2">
                      Series A+ ($2M+ raised)
                    </h4>
                    <ul className="text-gray-300 text-sm space-y-2 ml-4">
                      <li>
                        &bull; PCT application and international patent strategy
                        ($15-50k)
                      </li>
                      <li>
                        &bull; Madrid Protocol trademark application for global
                        coverage ($10-30k)
                      </li>
                      <li>
                        &bull; Comprehensive IP portfolio management
                      </li>
                      <li>
                        &bull; Defensive patent acquisitions if needed
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Conclusion */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6 text-white">Conclusion</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                IP strategy for global startups requires balancing protection
                costs against competitive necessity. Unlike established firms
                with dedicated IP budgets, startups must make strategic
                trade-offs, prioritizing high-value protection while accepting
                some exposure.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                The most successful startups view IP strategically rather than
                comprehensively. They protect core technology and brand assets
                aggressively while using trade secrets and speed-to-market for
                peripheral innovations. As startups scale and raise capital, IP
                protection expands accordingly.
              </p>
              <p className="text-gray-300 leading-relaxed">
                For startups operating globally, understanding international IP
                treaties (PCT, Madrid Protocol, Paris Convention) enables
                cost-effective protection across multiple jurisdictions. Early
                planning prevents costly gaps in IP chain of title that emerge
                during due diligence.
              </p>
            </div>

            {/* Services Box */}
            <div className="border-t border-white/10 pt-12 mt-16">
              <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-2xl p-8">
                <h3 className="text-xl font-bold mb-4 text-white">
                  PayTrinity&apos;s IP Services
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  PayTrinity provides comprehensive IP strategy and filing
                  services for global startups. From provisional patents to
                  international trademark portfolios, we help founders protect
                  their innovations cost-effectively.
                </p>
                <Link href="/legal-services/ip-strategy">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="px-8 py-3 rounded-full bg-white text-[#020410] font-bold text-sm hover:shadow-lg transition-all"
                  >
                    Develop Your IP Strategy
                  </motion.button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-20 bg-white/[0.02]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">Related Articles</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link
              href="/resources/business-regulation-federal-systems"
              className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all group"
            >
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                Business Regulation in Federal Systems
              </h3>
              <p className="text-sm text-gray-400">
                Multi-jurisdictional compliance frameworks
              </p>
            </Link>
            <Link
              href="/resources/institutional-fragmentation-emerging-markets"
              className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-orange-500/30 transition-all group"
            >
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">
                Institutional Fragmentation in Emerging Markets
              </h3>
              <p className="text-sm text-gray-400">
                Navigating regulatory complexity
              </p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
