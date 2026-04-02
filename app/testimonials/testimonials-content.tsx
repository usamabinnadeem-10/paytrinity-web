"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { Star, Quote, MessageSquare } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface Testimonial {
  readonly name: string;
  readonly company: string;
  readonly location: string;
  readonly quote: string;
  readonly image: string;
  readonly services?: readonly string[];
}

const testimonials: readonly Testimonial[] = [
  {
    name: "Salar Amin",
    company: "InfinityRefinder LLC",
    location: "Michigan",
    quote:
      "I had an excellent experience using his services. He handled everything from registering my LLC to creating my Stripe account. Highly recommended!",
    image: "/images/salar.png",
    services: ["LLC Formation", "Stripe Account"],
  },
  {
    name: "Usama Bin Nadeem",
    company: "TechTrinity LLC",
    location: "Wyoming",
    quote:
      "From ITIN to company formation and tax services, PayTrinity has been our go-to compliance partner.",
    image:
      "https://images.unsplash.com/photo-1543879739-ab87be3df369?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBhc2lhbiUyMGJ1c2luZXNzbWFufGVufDF8fHx8MTc2OTI5NzkzOHww&ixlib=rb-4.1.0&q=80&w=400&utm_source=figma&utm_medium=referral",
  },
  {
    name: "Usama Sheraz",
    company: "SherazStainlessSteel LLC",
    location: "New Jersey",
    quote:
      "Complete US setup plus Amazon business and payment processor support. Smooth experience.",
    image:
      "https://images.unsplash.com/photo-1656399910084-4138117677c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1hbiUyMHNtaWxpbmclMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjkzNzAwMzR8MA&ixlib=rb-4.1.0&q=80&w=400&utm_source=figma&utm_medium=referral",
  },
  {
    name: "Riyan Nasir",
    company: "Blitzers LLC",
    location: "New Jersey",
    quote:
      "Company and EIN completed in just 12 hours. Quarterly tax services and trademark filing handled professionally.",
    image:
      "https://images.unsplash.com/photo-1582989710213-96b0be274b95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwc3RhcnR1cCUyMG93bmVyfGVufDF8fHx8MTc2OTM3MDA0Mnww&ixlib=rb-4.1.0&q=80&w=400&utm_source=figma&utm_medium=referral",
  },
  {
    name: "Muhammad Waqas Shahid",
    company: "Safe Surf LLC",
    location: "Florida",
    quote:
      "Excellent support for our US expansion. The team is knowledgeable and responsive.",
    image:
      "https://images.unsplash.com/photo-1762163831325-7e54185ae70f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBvZmZpY2UlMjBzdWl0fGVufDF8fHx8MTc2OTM2OTk0M3ww&ixlib=rb-4.1.0&q=80&w=400&utm_source=figma&utm_medium=referral",
  },
  {
    name: "Samina Adil",
    company: "One Stop Shopping LLC",
    location: "New Jersey",
    quote:
      "A seamless process for setting up our US entity. Highly recommended for international founders.",
    image:
      "https://images.unsplash.com/photo-1581065178047-8ee15951ede6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMHdvbWFuJTIwYnVzaW5lc3N8ZW58MXx8fHwxNzY5MzY5OTIwfDA&ixlib=rb-4.1.0&q=80&w=400&utm_source=figma&utm_medium=referral",
  },
  {
    name: "Hassan Majeef",
    company: "Jager LLC",
    location: "Delaware",
    quote:
      "Amazon Seller Central setup and PayTrinity VA support helped scale operations significantly.",
    image:
      "https://images.unsplash.com/photo-1722938203650-99afb12419f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtaWRkbGUlMjBlYXN0ZXJuJTIwYnVzaW5lc3NtYW58ZW58MXx8fHwxNzY5MzY5OTU0fDA&ixlib=rb-4.1.0&q=80&w=400&utm_source=figma&utm_medium=referral",
  },
  {
    name: "Muhammad Mouhid Khan",
    company: "GITMIT LLC",
    location: "Maryland",
    quote:
      "Physical business address and compliance support led to strong business growth.",
    image:
      "https://images.unsplash.com/photo-1758598497635-48cbbb1f6555?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWlsaW5nJTIwaGFwcHklMjBmb3VuZGVyfGVufDF8fHx8MTc2OTM3MDAwNnww&ixlib=rb-4.1.0&q=80&w=400&utm_source=figma&utm_medium=referral",
  },
  {
    name: "Talha Bin Nadeem",
    company: "Monade LLC",
    location: "Fair Lawn, New Jersey",
    quote:
      "Physical business setup with proper documentation and compliance.",
    image:
      "https://images.unsplash.com/photo-1758519291709-79701a6feeb3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMG1hbiUyMGxhcHRvcHxlbnwxfHx8fDE3NjkzNjk5ODJ8MA&ixlib=rb-4.1.0&q=80&w=400&utm_source=figma&utm_medium=referral",
  },
  {
    name: "Haris Bin Nadeem",
    company: "Filingly LLC",
    location: "New Jersey",
    quote:
      "Founded Filingly LLC in 2024, expanded into PayTrinity as a full legal-tech platform.",
    image:
      "https://images.unsplash.com/photo-1549923746-c502d488b3ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWlsaW5nJTIwYnVzaW5lc3NtYW4lMjBoYW5kc2hha2UlMjBvZmZpY2V8ZW58MXx8fHwxNzY5MzY5OTYzfDA&ixlib=rb-4.1.0&q=80&w=400&utm_source=figma&utm_medium=referral",
  },
] as const;

function isLocalImage(src: string): boolean {
  return src.startsWith("/");
}

function TestimonialCard({
  testimonial,
  className = "w-full mb-6",
}: {
  readonly testimonial: Testimonial;
  readonly className?: string;
}) {
  return (
    <div
      className={`bg-[#0B1B3D]/50 p-8 rounded-2xl shadow-lg border border-white/10 hover:bg-white/10 transition-all duration-300 hover:border-[#D4A574]/30 backdrop-blur-sm break-inside-avoid flex-shrink-0 ${className}`}
    >
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={14}
            className="fill-[#D4A574] text-[#D4A574]"
          />
        ))}
      </div>
      <Quote className="text-white/10 w-8 h-8 mb-2 -ml-1" />
      <p className="text-gray-300 mb-6 leading-relaxed text-sm whitespace-normal">
        &ldquo;{testimonial.quote}&rdquo;
      </p>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 bg-white/10 border border-white/10">
          {isLocalImage(testimonial.image) ? (
            <Image
              src={testimonial.image}
              alt={testimonial.name}
              width={40}
              height={40}
              className="w-full h-full object-cover"
            />
          ) : (
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-full h-full object-cover"
            />
          )}
        </div>
        <div>
          <h5 className="font-bold text-white text-sm">
            {testimonial.name}
          </h5>
          <p className="text-xs text-gray-500 font-medium">
            {testimonial.company}
          </p>
        </div>
      </div>
    </div>
  );
}

function InfiniteScrollColumn({
  testimonials: items,
  direction = "up",
  speed = 50,
  className = "",
}: {
  readonly testimonials: readonly Testimonial[];
  readonly direction?: "up" | "down";
  readonly speed?: number;
  readonly className?: string;
}) {
  const [contentHeight, setContentHeight] = useState(0);
  const columnRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (columnRef.current) {
      setContentHeight(columnRef.current.scrollHeight / 3);
    }
  }, []);

  const tripled = [...items, ...items, ...items];

  return (
    <div className={`relative h-[800px] overflow-hidden ${className}`}>
      <motion.div
        ref={columnRef}
        initial={{ y: direction === "up" ? 0 : -contentHeight }}
        animate={{ y: direction === "up" ? -contentHeight : 0 }}
        transition={{
          y: {
            duration: speed,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop",
          },
        }}
        className="flex flex-col"
      >
        {tripled.map((t, i) => (
          <TestimonialCard key={`${t.name}-${i}`} testimonial={t} />
        ))}
      </motion.div>

      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#020410] to-transparent z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#020410] to-transparent z-10 pointer-events-none" />
    </div>
  );
}

function HorizontalInfiniteScroll({
  testimonials: items,
  direction = "left",
  speed = 30,
}: {
  readonly testimonials: readonly Testimonial[];
  readonly direction?: "left" | "right";
  readonly speed?: number;
}) {
  const doubled = [...items, ...items];

  return (
    <div className="relative overflow-hidden w-full">
      <div className="absolute top-0 left-0 bottom-0 w-8 bg-gradient-to-r from-[#020410] to-transparent z-10" />
      <div className="absolute top-0 right-0 bottom-0 w-8 bg-gradient-to-l from-[#020410] to-transparent z-10" />

      <motion.div
        className="flex gap-4 w-max"
        initial={{ x: direction === "left" ? 0 : "-50%" }}
        animate={{ x: direction === "left" ? "-50%" : 0 }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
      >
        {doubled.map((t, i) => (
          <TestimonialCard
            key={`h-${t.name}-${i}`}
            testimonial={t}
            className="w-[300px] sm:w-[350px]"
          />
        ))}
      </motion.div>
    </div>
  );
}

export function TestimonialsContent() {
  const col1 = testimonials.slice(0, 3);
  const col2 = testimonials.slice(3, 7);
  const col3 = testimonials.slice(7);

  const mobileRow1 = testimonials.slice(0, 5);
  const mobileRow2 = testimonials.slice(5);

  return (
    <div className="w-full bg-[#020410] text-white overflow-x-hidden font-sans selection:bg-[#D4A574] selection:text-white pt-20">
      {/* Background Gradients */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-blue-600/10 blur-[120px] rounded-full mix-blend-screen animate-pulse duration-[10000ms]" />
        <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-[#D4A574]/5 blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
      </div>

      {/* Hero */}
      <section className="relative py-24 overflow-hidden z-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 text-white/90 text-xs font-bold uppercase tracking-wider mb-6 border border-white/10 backdrop-blur-sm">
              <MessageSquare size={12} fill="currentColor" />
              Wall of Love
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
              Trusted by ambitious{" "}
              <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4A574] to-amber-200">
                founders worldwide.
              </span>
            </h1>
            <p className="text-xl text-blue-100/70 max-w-2xl mx-auto leading-relaxed font-light">
              Join hundreds of entrepreneurs who have successfully launched
              and scaled their US businesses with PayTrinity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3D Scrolling Wall - Desktop */}
      <section className="hidden md:block py-12 border-t border-white/5 bg-white/[0.02] relative z-10 overflow-hidden">
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="relative" style={{ perspective: "1000px" }}>
            <motion.div
              initial={{ rotateX: 20, opacity: 0 }}
              animate={{ rotateX: 5, opacity: 1 }}
              transition={{ duration: 1 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 transform-gpu"
              style={{ transformStyle: "preserve-3d" }}
            >
              <InfiniteScrollColumn
                testimonials={col1}
                direction="up"
                speed={40}
              />
              <InfiniteScrollColumn
                testimonials={col2}
                direction="down"
                speed={55}
              />
              <InfiniteScrollColumn
                testimonials={col3}
                direction="up"
                speed={45}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Horizontal Sliding - Mobile */}
      <section className="md:hidden py-12 border-t border-white/5 bg-white/[0.02] relative z-10 flex flex-col gap-6">
        <div className="mb-2 px-6">
          <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">
            Latest Stories
          </h3>
        </div>
        <HorizontalInfiniteScroll
          testimonials={mobileRow1}
          direction="left"
          speed={30}
        />
        <HorizontalInfiniteScroll
          testimonials={mobileRow2}
          direction="right"
          speed={35}
        />
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-white/5 bg-[#0B1B3D]/30 relative z-10">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to write your own success story?
          </h2>
          <p className="text-lg text-gray-400 mb-10 font-light">
            Join the growing community of founders who trust PayTrinity
            with their business compliance.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto rounded-full bg-[#D4A574] px-10 py-4 text-base font-bold text-[#0B1B3D] shadow-[0_0_20px_rgba(212,165,116,0.3)] hover:bg-[#D4A574]/90 hover:scale-105 transition-all duration-300"
            >
              Get Started Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
