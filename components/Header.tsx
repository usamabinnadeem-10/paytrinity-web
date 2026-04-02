"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import {
  Menu,
  X,
  ChevronDown,
  HelpCircle,
  FileText,
  Zap,
  Rocket,
  Mail,
  Building2,
  CreditCard,
  MapPin,
  Scale,
  Package,
  Calculator,
  LayoutDashboard,
  Shield,
  Users,
  HeartHandshake,
  Landmark,
  TrendingUp,
  Network,
  BookOpen,
  Lightbulb,
  GraduationCap,
  Plane,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  const isActive = (path: string) => pathname === path;

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-[#020410]/80 backdrop-blur-md border-b border-white/10 shadow-sm transition-transform duration-300 ${
        isVisible || mobileMenuOpen ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-6 lg:px-8" aria-label="Top">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center">
            <Link
              href="/"
              className="flex items-center gap-3"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <Image
                src="/images/logo.png"
                alt="PayTrinity Logo"
                width={160}
                height={40}
                className="h-10 w-auto object-contain"
                priority
              />
            </Link>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex md:items-center md:gap-8">
            <ProductsDropdown pathname={pathname} />
            <ServicesDropdown pathname={pathname} isActive={isActive} />
            <LegalServicesDropdown pathname={pathname} />
            <PolicyResearchDropdown pathname={pathname} />
            <CompanyDropdown pathname={pathname} />
            <ResourcesDropdown pathname={pathname} />

            <Link
              href="/pricing"
              className={`text-sm font-medium transition-colors ${
                isActive("/pricing")
                  ? "text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Pricing
            </Link>
          </div>

          {/* CTA button */}
          <div className="hidden md:flex md:items-center md:gap-6">
            <Link
              href="/contact"
              className="rounded-lg bg-white text-[#020410] px-6 py-2.5 text-sm font-bold shadow-sm hover:bg-gray-100 transition-all hover:shadow-[0_0_15px_rgba(255,255,255,0.3)]"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden rounded-md p-2 text-gray-400 hover:bg-white/10 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open menu</span>
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <MobileMenu onClose={() => setMobileMenuOpen(false)} />
        )}
      </nav>
    </header>
  );
}

/* ─── Desktop Dropdowns ─── */

function ProductsDropdown({ pathname }: { pathname: string }) {
  const productPaths = [
    "/products/start",
    "/products/mailroom",
    "/products/tax",
    "/products/app",
    "/products/agent",
    "/products/pro",
  ];

  return (
    <div className="relative group">
      <button
        className={`flex items-center gap-1 text-sm font-medium transition-colors py-4 ${
          productPaths.includes(pathname)
            ? "text-white"
            : "text-gray-400 hover:text-white"
        }`}
      >
        Products <ChevronDown className="h-4 w-4" />
      </button>
      <div className="absolute left-1/2 -translate-x-1/2 top-[90%] w-80 bg-[#0B1B3D] rounded-2xl shadow-xl border border-white/10 p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-2 group-hover:translate-y-0 z-50">
        <DropdownLink
          href="/products/start"
          icon={Rocket}
          color="blue"
          title="PayTrinity Start"
          desc="Launch your US business"
        />
        <DropdownLink
          href="/products/mailroom"
          icon={Mail}
          color="indigo"
          title="PayTrinity Mailroom"
          desc="Virtual business address"
        />
        <DropdownLink
          href="/products/agent"
          icon={Shield}
          color="rose"
          title="PayTrinity Agent"
          desc="Compliance & Privacy"
        />
        <DropdownLink
          href="/products/tax"
          icon={Calculator}
          color="emerald"
          title="PayTrinity Tax"
          desc="Automated sales tax compliance"
        />
        <DropdownLink
          href="/products/app"
          icon={LayoutDashboard}
          color="amber"
          title="Trinity App"
          desc="All-in-one founder dashboard"
        />
        <DropdownLink
          href="/products/pro"
          icon={Zap}
          color="purple"
          title="PayTrinity Pro"
          desc="Automated compliance subscription"
        />
      </div>
    </div>
  );
}

function ServicesDropdown({
  pathname,
  isActive,
}: {
  pathname: string;
  isActive: (path: string) => boolean;
}) {
  return (
    <div className="relative group">
      <Link
        href="/services"
        className={`flex items-center gap-1 text-sm font-medium transition-colors py-4 ${
          isActive("/services") || pathname.startsWith("/services/")
            ? "text-white"
            : "text-gray-400 hover:text-white"
        }`}
      >
        Services <ChevronDown className="h-4 w-4" />
      </Link>
      <div className="absolute left-1/2 -translate-x-1/2 top-[90%] w-[480px] bg-[#0B1B3D] rounded-2xl shadow-xl border border-white/10 p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-2 group-hover:translate-y-0 z-50 grid grid-cols-2 gap-2">
        <DropdownLinkSmall
          href="/services/itin-application"
          icon={FileText}
          color="emerald"
          title="ITIN Application"
          desc="Tax ID & Renewal"
        />
        <DropdownLinkSmall
          href="/services/us-formation"
          icon={Building2}
          color="blue"
          title="US Formation"
          desc="LLC & C-Corp"
        />
        <DropdownLinkSmall
          href="/services/stripe-readiness"
          icon={CreditCard}
          color="purple"
          title="Stripe Readiness"
          desc="Payment account prep"
        />
        <DropdownLinkSmall
          href="/services/registered-agent"
          icon={MapPin}
          color="orange"
          title="Registered Agent"
          desc="US Address & Compliance"
        />
        <DropdownLinkSmall
          href="/services/annual-compliance"
          icon={Scale}
          color="cyan"
          title="Annual Compliance"
          desc="Tax Coordination"
        />
        <DropdownLinkSmall
          href="/services/physical-banking"
          icon={Landmark}
          color="green"
          title="Physical Banking"
          desc="Bank Account Setup"
        />
        <DropdownLinkSmall
          href="/services/fulfillment"
          icon={Package}
          color="yellow"
          title="Fulfillment House"
          desc="Logistics Solutions"
        />
      </div>
    </div>
  );
}

function LegalServicesDropdown({ pathname }: { pathname: string }) {
  return (
    <div className="relative group">
      <Link
        href="/legal-services"
        className={`flex items-center gap-1 text-sm font-medium transition-colors py-4 ${
          pathname.startsWith("/legal-services")
            ? "text-white"
            : "text-gray-400 hover:text-white"
        }`}
      >
        Legal Services <ChevronDown className="h-4 w-4" />
      </Link>
      <div className="absolute left-1/2 -translate-x-1/2 top-[90%] w-80 bg-[#0B1B3D] rounded-2xl shadow-xl border border-white/10 p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-2 group-hover:translate-y-0 z-50">
        <DropdownLink
          href="/legal-services/patent-filing"
          icon={Shield}
          color="blue"
          title="Patent Filing"
          desc="US & International"
        />
        <DropdownLink
          href="/legal-services/trademark-registration"
          icon={Scale}
          color="purple"
          title="Trademark Registration"
          desc="Brand protection"
        />
        <DropdownLink
          href="/legal-services/copyright-protection"
          icon={FileText}
          color="cyan"
          title="Copyright Protection"
          desc="Creative works"
        />
        <DropdownLink
          href="/legal-services/ip-strategy"
          icon={Zap}
          color="amber"
          title="IP Strategy"
          desc="Intellectual Property"
        />
        <DropdownLink
          href="/legal-services/technology-startup-law"
          icon={Rocket}
          color="pink"
          title="Technology & Startup Law"
          desc="Legal counsel"
        />
      </div>
    </div>
  );
}

function PolicyResearchDropdown({ pathname }: { pathname: string }) {
  return (
    <div className="relative group">
      <Link
        href="/policy-research"
        className={`flex items-center gap-1 text-sm font-medium transition-colors py-4 ${
          pathname.startsWith("/policy-research")
            ? "text-white"
            : "text-gray-400 hover:text-white"
        }`}
      >
        Policy & Research <ChevronDown className="h-4 w-4" />
      </Link>
      <div className="absolute left-1/2 -translate-x-1/2 top-[90%] w-80 bg-[#0B1B3D] rounded-2xl shadow-xl border border-white/10 p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-2 group-hover:translate-y-0 z-50">
        <DropdownLink
          href="/policy-research/business-economic-policy"
          icon={TrendingUp}
          color="blue"
          title="Business & Economic Policy"
          desc="Market analysis"
        />
        <DropdownLink
          href="/policy-research/law-regulatory-systems"
          icon={Scale}
          color="emerald"
          title="Law & Regulatory Systems"
          desc="Legal frameworks"
        />
        <DropdownLink
          href="/policy-research/federalism-governance"
          icon={Building2}
          color="purple"
          title="Federalism & Governance"
          desc="Government structures"
        />
        <DropdownLink
          href="/policy-research/institutional-fragmentation"
          icon={Network}
          color="orange"
          title="Institutional Fragmentation"
          desc="System complexity"
        />
        <DropdownLink
          href="/policy-research/digital-economy-fintech"
          icon={Zap}
          color="cyan"
          title="Digital Economy & Fintech"
          desc="Technology regulation"
        />
      </div>
    </div>
  );
}

function CompanyDropdown({ pathname }: { pathname: string }) {
  return (
    <div className="relative group">
      <button
        className={`flex items-center gap-1 text-sm font-medium transition-colors py-4 ${
          ["/about", "/testimonials"].includes(pathname)
            ? "text-white"
            : "text-gray-400 hover:text-white"
        }`}
      >
        Company <ChevronDown className="h-4 w-4" />
      </button>
      <div className="absolute left-1/2 -translate-x-1/2 top-[90%] w-60 bg-[#0B1B3D] rounded-2xl shadow-xl border border-white/10 p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-2 group-hover:translate-y-0 z-50">
        <DropdownLink
          href="/about"
          icon={Users}
          color="gray"
          title="About Us"
          desc="Our mission & team"
        />
        <DropdownLink
          href="/testimonials"
          icon={HeartHandshake}
          color="pink"
          title="Testimonials"
          desc="Client success stories"
        />
      </div>
    </div>
  );
}

function ResourcesDropdown({ pathname }: { pathname: string }) {
  const resourcePaths = [
    "/help-center",
    "/blog",
    "/resources",
    "/guides",
  ];
  const isResourceActive =
    resourcePaths.some((p) => pathname.startsWith(p));

  return (
    <div className="relative group">
      <button
        className={`flex items-center gap-1 text-sm font-medium transition-colors py-4 ${
          isResourceActive ? "text-white" : "text-gray-400 hover:text-white"
        }`}
      >
        Resources <ChevronDown className="h-4 w-4" />
      </button>
      <div className="absolute left-1/2 -translate-x-1/2 top-[90%] w-[520px] bg-[#0B1B3D] rounded-2xl shadow-xl border border-white/10 p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-2 group-hover:translate-y-0 z-50 grid grid-cols-2 gap-2">
        <DropdownLinkSmall
          href="/help-center"
          icon={HelpCircle}
          color="blue"
          title="Help Center"
          desc="Questions & answers"
        />
        <DropdownLinkSmall
          href="/blog"
          icon={FileText}
          color="amber"
          title="Blog"
          desc="Fresh news & stories"
        />

        {/* Featured Articles */}
        <div className="col-span-2 border-t border-white/10 pt-2 mt-2">
          <p className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider px-3 mb-2">
            Featured Articles
          </p>
        </div>

        <FeaturedLink
          href="/resources/business-regulation-federal-systems"
          icon={Scale}
          color="blue"
          title="Business Regulation in Federal Systems"
          desc="Multi-jurisdictional compliance frameworks"
        />
        <FeaturedLink
          href="/resources/institutional-fragmentation-emerging-markets"
          icon={Network}
          color="orange"
          title="Institutional Fragmentation in Emerging Markets"
          desc="Navigating regulatory complexity"
        />
        <FeaturedLink
          href="/resources/ip-strategy-global-startups"
          icon={Lightbulb}
          color="purple"
          title="IP Strategy for Global Startups"
          desc="Cross-border intellectual property"
        />

        {/* Popular Guides */}
        <div className="col-span-2 border-t border-white/10 pt-2 mt-2">
          <p className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider px-3 mb-2">
            Popular Guides
          </p>
        </div>

        <DropdownLinkSmall
          href="/guides/us-llc-formation-pakistan"
          icon={Building2}
          color="green"
          title="US LLC Formation"
          desc="Pakistan guide"
        />
        <DropdownLinkSmall
          href="/guides/itin-application-pakistan"
          icon={FileText}
          color="emerald"
          title="ITIN Application"
          desc="Pakistan guide"
        />
        <DropdownLinkSmall
          href="/guides/f1-visa-strategy-pakistan"
          icon={GraduationCap}
          color="blue"
          title="F1 Visa Strategy"
          desc="Student visa guide"
        />
        <DropdownLinkSmall
          href="/guides/e2-investor-visa-pakistan"
          icon={TrendingUp}
          color="purple"
          title="E2 Investor Visa"
          desc="Pakistan guide"
        />
        <DropdownLinkSmall
          href="/guides/b1-b2-visa-strategy"
          icon={Plane}
          color="cyan"
          title="B1/B2 Visa Strategy"
          desc="Visitor visa guide"
        />
      </div>
    </div>
  );
}

/* ─── Color map (static strings so Tailwind can detect them at build time) ─── */

const colorMap: Record<
  string,
  { bg: string; text: string; hover: string; gradientFrom: string; border: string }
> = {
  blue:    { bg: "bg-blue-500/20",    text: "text-blue-400",    hover: "group-hover/item:text-blue-300",    gradientFrom: "from-blue-500/10",    border: "border-blue-500/20" },
  indigo:  { bg: "bg-indigo-500/20",  text: "text-indigo-400",  hover: "group-hover/item:text-indigo-300",  gradientFrom: "from-indigo-500/10",  border: "border-indigo-500/20" },
  rose:    { bg: "bg-rose-500/20",    text: "text-rose-400",    hover: "group-hover/item:text-rose-300",    gradientFrom: "from-rose-500/10",    border: "border-rose-500/20" },
  emerald: { bg: "bg-emerald-500/20", text: "text-emerald-400", hover: "group-hover/item:text-emerald-300", gradientFrom: "from-emerald-500/10", border: "border-emerald-500/20" },
  amber:   { bg: "bg-amber-500/20",   text: "text-amber-400",   hover: "group-hover/item:text-amber-300",   gradientFrom: "from-amber-500/10",   border: "border-amber-500/20" },
  purple:  { bg: "bg-purple-500/20",  text: "text-purple-400",  hover: "group-hover/item:text-purple-300",  gradientFrom: "from-purple-500/10",  border: "border-purple-500/20" },
  orange:  { bg: "bg-orange-500/20",  text: "text-orange-400",  hover: "group-hover/item:text-orange-300",  gradientFrom: "from-orange-500/10",  border: "border-orange-500/20" },
  cyan:    { bg: "bg-cyan-500/20",    text: "text-cyan-400",    hover: "group-hover/item:text-cyan-300",    gradientFrom: "from-cyan-500/10",    border: "border-cyan-500/20" },
  green:   { bg: "bg-green-500/20",   text: "text-green-400",   hover: "group-hover/item:text-green-300",   gradientFrom: "from-green-500/10",   border: "border-green-500/20" },
  yellow:  { bg: "bg-yellow-500/20",  text: "text-yellow-400",  hover: "group-hover/item:text-yellow-300",  gradientFrom: "from-yellow-500/10",  border: "border-yellow-500/20" },
  gray:    { bg: "bg-gray-500/20",    text: "text-gray-400",    hover: "group-hover/item:text-gray-300",    gradientFrom: "from-gray-500/10",    border: "border-gray-500/20" },
  pink:    { bg: "bg-pink-500/20",    text: "text-pink-400",    hover: "group-hover/item:text-pink-300",    gradientFrom: "from-pink-500/10",    border: "border-pink-500/20" },
};

/* ─── Shared dropdown link components ─── */

function DropdownLink({
  href,
  icon: Icon,
  color,
  title,
  desc,
}: {
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  title: string;
  desc: string;
}) {
  return (
    <Link
      href={href}
      className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors group/item"
    >
      <div
        className={`${colorMap[color].bg} p-2 rounded-lg ${colorMap[color].text} ${colorMap[color].hover} transition-colors`}
      >
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <div className="font-semibold text-white text-sm">{title}</div>
        <div className="text-xs text-gray-400 mt-1">{desc}</div>
      </div>
    </Link>
  );
}

function DropdownLinkSmall({
  href,
  icon: Icon,
  color,
  title,
  desc,
}: {
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  title: string;
  desc: string;
}) {
  return (
    <Link
      href={href}
      className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group/item"
    >
      <div
        className={`${colorMap[color].bg} p-2 rounded-lg ${colorMap[color].text} ${colorMap[color].hover} transition-colors`}
      >
        <Icon className="h-4 w-4" />
      </div>
      <div>
        <div className="font-semibold text-white text-sm">{title}</div>
        <div className="text-[10px] text-gray-400 mt-0.5">{desc}</div>
      </div>
    </Link>
  );
}

function FeaturedLink({
  href,
  icon: Icon,
  color,
  title,
  desc,
}: {
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  title: string;
  desc: string;
}) {
  return (
    <Link
      href={href}
      className={`flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group/item col-span-2 bg-gradient-to-r ${colorMap[color].gradientFrom} to-transparent border ${colorMap[color].border}`}
    >
      <div
        className={`${colorMap[color].bg} p-2 rounded-lg ${colorMap[color].text} ${colorMap[color].hover} transition-colors`}
      >
        <Icon className="h-4 w-4" />
      </div>
      <div>
        <div className="font-semibold text-white text-sm">{title}</div>
        <div className="text-[10px] text-gray-400 mt-0.5">{desc}</div>
      </div>
    </Link>
  );
}

/* ─── Mobile Menu ─── */

function MobileMenu({ onClose }: { onClose: () => void }) {
  return (
    <div className="md:hidden relative border-t border-white/10 overflow-hidden bg-[#020410] m-4 rounded-3xl border border-white/10 h-[calc(100vh-112px)]">
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-[#0B1B3D] to-[#020410] opacity-50" />
      </div>

      <div className="relative z-10 flex flex-col gap-4 p-6 overflow-y-auto h-full">
        {/* Products */}
        <div className="border-b border-white/10 pb-4 mb-2">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
            Products
          </p>
          <MobileLink href="/products/start" icon={Rocket} color="blue" onClick={onClose}>
            PayTrinity Start
          </MobileLink>
          <MobileLink href="/products/mailroom" icon={Mail} color="indigo" onClick={onClose}>
            PayTrinity Mailroom
          </MobileLink>
          <MobileLink href="/products/agent" icon={Shield} color="rose" onClick={onClose}>
            PayTrinity Agent
          </MobileLink>
          <MobileLink href="/products/tax" icon={Calculator} color="emerald" onClick={onClose}>
            PayTrinity Tax
          </MobileLink>
          <MobileLink href="/products/app" icon={LayoutDashboard} color="amber" onClick={onClose}>
            Trinity App
          </MobileLink>
          <MobileLink href="/products/pro" icon={Zap} color="purple" onClick={onClose}>
            PayTrinity Pro
          </MobileLink>
        </div>

        {/* Services */}
        <div className="border-b border-white/10 pb-4 mb-2">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
            Services
          </p>
          <MobileLink href="/services/itin-application" icon={FileText} color="emerald" onClick={onClose}>
            ITIN Application
          </MobileLink>
          <MobileLink href="/services/us-formation" icon={Building2} color="blue" onClick={onClose}>
            US Formation
          </MobileLink>
          <MobileLink href="/services/stripe-readiness" icon={CreditCard} color="purple" onClick={onClose}>
            Stripe Readiness
          </MobileLink>
          <MobileLink href="/services/registered-agent" icon={MapPin} color="orange" onClick={onClose}>
            Registered Agent
          </MobileLink>
          <MobileLink href="/services/annual-compliance" icon={Scale} color="cyan" onClick={onClose}>
            Annual Compliance
          </MobileLink>
          <MobileLink href="/services/physical-banking" icon={Landmark} color="green" onClick={onClose}>
            Physical Banking
          </MobileLink>
          <MobileLink href="/services/fulfillment" icon={Package} color="yellow" onClick={onClose}>
            Fulfillment House
          </MobileLink>
        </div>

        {/* Quick Links */}
        <div className="space-y-2">
          <Link
            href="/pricing"
            className="block py-2 text-base font-medium text-gray-300 hover:text-white"
            onClick={onClose}
          >
            Pricing
          </Link>
          <Link
            href="/about"
            className="block py-2 text-base font-medium text-gray-300 hover:text-white"
            onClick={onClose}
          >
            About Us
          </Link>
          <Link
            href="/contact"
            className="block py-2 text-base font-medium text-gray-300 hover:text-white"
            onClick={onClose}
          >
            Contact
          </Link>
        </div>

        {/* CTA */}
        <div className="mt-6 pt-6 border-t border-white/10">
          <Link
            href="/contact"
            className="flex w-full items-center justify-center rounded-lg bg-white px-4 py-2 text-base font-bold text-[#020410] hover:bg-gray-100"
            onClick={onClose}
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}

function MobileLink({
  href,
  icon: Icon,
  color,
  onClick,
  children,
}: {
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="flex items-center gap-3 py-2 text-sm font-medium text-gray-300 hover:text-white"
      onClick={onClick}
    >
      <Icon className={`h-4 w-4 ${colorMap[color].text}`} />
      {children}
    </Link>
  );
}
