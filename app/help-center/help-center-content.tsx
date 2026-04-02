"use client";

import Link from "next/link";
import {
  Search,
  FileText,
  CreditCard,
  ShieldCheck,
  User,
  MessageCircle,
  ArrowRight,
  X,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const categories = [
  {
    id: "formation",
    icon: FileText,
    title: "Company Formation",
    description: "Guides on LLCs, C-Corps, and state filings.",
    color: "bg-blue-500/10 text-blue-400",
    iconColor: "text-blue-400",
  },
  {
    id: "compliance",
    icon: ShieldCheck,
    title: "ITIN & Tax Compliance",
    description: "Everything you need to know about IRS requirements.",
    color: "bg-amber-500/10 text-amber-400",
    iconColor: "text-amber-400",
  },
  {
    id: "banking",
    icon: CreditCard,
    title: "Banking & Payments",
    description: "Setting up Mercury, Brex, Stripe, and PayPal.",
    color: "bg-emerald-500/10 text-emerald-400",
    iconColor: "text-emerald-400",
  },
  {
    id: "account",
    icon: User,
    title: "Account Management",
    description: "Managing your PayTrinity profile and documents.",
    color: "bg-indigo-500/10 text-indigo-400",
    iconColor: "text-indigo-400",
  },
];

const popularArticles = [
  {
    title: "How long does it take to get an ITIN?",
    category: "ITIN & Tax",
    categoryId: "compliance",
    slug: "itin-timeline",
  },
  {
    title: "LLC vs C-Corp for International Founders",
    category: "Formation",
    categoryId: "formation",
    slug: "llc-vs-c-corp",
  },
  {
    title: "Required documents for Mercury Bank",
    category: "Banking",
    categoryId: "banking",
    slug: "mercury-bank-documents",
  },
  {
    title: "Understanding US Tax Deadlines",
    category: "Compliance",
    categoryId: "compliance",
    slug: "us-tax-deadlines",
  },
  {
    title: "Can I use Stripe from Pakistan?",
    category: "Payments",
    categoryId: "banking",
    slug: "stripe-pakistan",
  },
  {
    title: "How to renew my Registered Agent",
    category: "Services",
    categoryId: "account",
    slug: "renew-registered-agent",
  },
];

export function HelpCenterContent() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredArticles = popularArticles.filter((article) => {
    const matchesSearch = article.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory
      ? article.categoryId === selectedCategory
      : true;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-[#020410] text-white selection:bg-blue-500 selection:text-white font-sans overflow-x-hidden">
      {/* Background Gradients */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-blue-600/10 blur-[120px] rounded-full mix-blend-screen animate-pulse duration-[10000ms]" />
        <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-purple-600/10 blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-[-20%] left-[20%] w-[800px] h-[800px] bg-cyan-600/10 blur-[120px] rounded-full mix-blend-screen" />
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 border-b border-white/5">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl mb-6">
            How can we help you?
          </h1>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Search our knowledge base or browse categories below to find answers
            about US business formation.
          </p>

          <div className="relative max-w-xl mx-auto">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <Input
              type="text"
              placeholder="Search for articles (e.g., 'ITIN timeline')..."
              className="h-14 pl-12 rounded-2xl bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-blue-500 focus:ring-blue-500 text-base"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-20 relative z-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-white">
              Browse by Category
            </h2>
            {selectedCategory && (
              <button
                onClick={() => setSelectedCategory(null)}
                className="text-sm font-medium text-gray-400 hover:text-white flex items-center gap-1 transition-colors"
              >
                Clear filter <X className="h-4 w-4" />
              </button>
            )}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => {
              const Icon = category.icon;
              const isSelected = selectedCategory === category.id;
              return (
                <div
                  key={category.id}
                  onClick={() =>
                    setSelectedCategory(isSelected ? null : category.id)
                  }
                  className={`group relative overflow-hidden rounded-3xl p-8 transition-all hover:-translate-y-1 hover:shadow-lg cursor-pointer border ${isSelected ? "border-blue-500 ring-2 ring-blue-500/20" : "border-white/10 hover:border-white/20"} ${category.color.split(" ")[0]} bg-white/5`}
                >
                  <div
                    className={`inline-flex items-center justify-center rounded-2xl bg-white/10 p-3 mb-6 shadow-sm ${category.iconColor}`}
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {category.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {category.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Popular Articles */}
      <section className="py-20 relative z-10 border-t border-white/5 min-h-[500px]">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">
            {selectedCategory ? "Filtered Articles" : "Popular Articles"}
            {searchTerm && (
              <span className="text-gray-400 font-normal ml-2">
                matching &quot;{searchTerm}&quot;
              </span>
            )}
          </h2>

          {filteredArticles.length > 0 ? (
            <div className="grid gap-4">
              {filteredArticles.map((article) => (
                <Link
                  href={`/help-center/${article.slug}`}
                  key={article.slug}
                  className="group flex items-center justify-between p-6 rounded-2xl border border-white/10 hover:border-blue-500/50 hover:bg-white/5 transition-all cursor-pointer bg-white/[0.02]"
                >
                  <div className="flex items-center gap-4">
                    <div className="h-2 w-2 rounded-full bg-blue-500" />
                    <div>
                      <h3 className="font-semibold text-white group-hover:text-blue-400 transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-xs text-gray-400 mt-1">
                        {article.category}
                      </p>
                    </div>
                  </div>
                  <ArrowRight className="h-5 w-5 text-gray-500 group-hover:text-blue-400 transition-colors" />
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="bg-white/5 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Search className="h-8 w-8 text-gray-500" />
              </div>
              <h3 className="text-lg font-semibold text-white">
                No articles found
              </h3>
              <p className="text-gray-400 mt-2">
                Try adjusting your search or category filter.
              </p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory(null);
                }}
                className="mt-6 text-blue-400 font-medium hover:underline"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 relative overflow-hidden z-10">
        <div className="absolute inset-0 bg-blue-900/10" />

        <div className="relative mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white mb-6">
            Still need help?
          </h2>
          <p className="text-lg text-gray-400 mb-10">
            Our team is available to assist you with specific questions about
            your case.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/15513069930"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-8 py-4 text-base font-semibold text-white shadow-lg hover:bg-[#25D366]/90 transition-all hover:shadow-xl hover:-translate-y-1"
            >
              <MessageCircle className="h-5 w-5" />
              Chat on WhatsApp
            </a>
            <Link
              href="/contact"
              className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 text-base font-semibold text-[#020410] shadow-lg hover:bg-gray-100 transition-all hover:shadow-xl hover:-translate-y-1"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
