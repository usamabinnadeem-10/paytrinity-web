"use client";

import { useState } from "react";
import {
  Mail,
  MessageSquare,
  Calendar,
  Loader2,
  ArrowRight,
  ShieldCheck,
  CreditCard,
  Plane,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { motion } from "motion/react";

interface ContactFormData {
  name: string;
  email: string;
  company: string;
  country: string;
  service: string;
  message: string;
}

const INITIAL_FORM_DATA: ContactFormData = {
  name: "",
  email: "",
  company: "",
  country: "",
  service: "",
  message: "",
};

const CONTACT_METHODS = [
  {
    icon: MessageSquare,
    title: "WhatsApp Priority",
    description: "Fastest response.",
    contact: "+1 (551) 306-9930",
    action: "https://wa.me/15513069930",
    color: "text-[#25D366] bg-[#25D366]/10 border-[#25D366]/20",
  },
  {
    icon: Calendar,
    title: "Schedule a Call",
    description: "30-min consultation.",
    contact: "Book time",
    action: "https://calendly.com/paytrinity/30min",
    color: "text-blue-400 bg-blue-500/10 border-blue-500/20",
  },
  {
    icon: Mail,
    title: "Email Support",
    description: "General inquiries.",
    contact: "hello@paytrinity.co",
    action: "mailto:hello@paytrinity.co",
    color: "text-white bg-white/10 border-white/20",
  },
] as const;

const SERVICES = [
  "ITIN Application & Renewal",
  "US LLC / Corporation Formation",
  "Founder Bundle (ITIN + LLC + EIN)",
  "Total Compliance Package",
  "Visa & Immigration Services",
  "Banking & Financial Setup",
  "Other / Not sure yet",
] as const;

export function ContactContent() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<ContactFormData>(INITIAL_FORM_DATA);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      toast.success(
        "Thank you for your inquiry. We will respond within 1 business day.",
      );
      setFormData(INITIAL_FORM_DATA);
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Unknown error occurred";
      toast.error(
        `Failed to send message: ${message}. Please try again or contact us directly.`,
      );
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpsellClick = (serviceName: string, defaultMsg: string) => {
    setFormData({
      ...formData,
      service: serviceName,
      message: defaultMsg,
    });
    document
      .getElementById("contact-form")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#020410] text-white selection:bg-cyan-500 selection:text-white font-sans">
      {/* Background Gradients */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-blue-600/10 blur-[100px] rounded-full mix-blend-screen opacity-40" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[800px] h-[800px] bg-cyan-600/10 blur-[100px] rounded-full mix-blend-screen opacity-30" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden z-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-white mb-8 leading-tight">
              Let&apos;s build your <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                American success story.
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
              We&apos;re here to help you navigate US business formation,
              banking, and compliance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="relative -mt-10 z-20 px-6 lg:px-8 pb-24">
        <div className="mx-auto max-w-7xl bg-[#0B1B3D]/30 rounded-3xl shadow-2xl overflow-hidden border border-white/10 backdrop-blur-xl">
          <div className="grid lg:grid-cols-12 min-h-[800px]">
            {/* Left Sidebar: Contact Info & Upsells */}
            <div className="lg:col-span-5 bg-white/5 p-8 lg:p-12 border-r border-white/5 flex flex-col h-full">
              {/* Contact Methods List */}
              <div className="mb-12">
                <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-6">
                  Contact Channels
                </h3>
                <div className="space-y-6">
                  {CONTACT_METHODS.map((method, index) => {
                    const Icon = method.icon;
                    return (
                      <a
                        key={index}
                        href={method.action}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-start gap-4 group p-2 -ml-2 rounded-xl hover:bg-white/5 transition-all"
                      >
                        <div
                          className={`p-2.5 rounded-lg border transition-colors ${method.color}`}
                        >
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="font-bold text-white flex items-center gap-2 group-hover:text-cyan-400 transition-colors">
                            {method.title}
                            <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-cyan-400" />
                          </div>
                          <p className="text-sm text-gray-400">
                            {method.description}
                          </p>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>

              <div className="w-full h-px bg-white/10 mb-12" />

              {/* Upsell Section */}
              <div className="space-y-10 flex-1">
                <div>
                  <div className="flex items-center gap-2 mb-3 text-white">
                    <CreditCard className="w-5 h-5 text-purple-400" />
                    <h3 className="font-bold text-lg">Need an ITIN?</h3>
                  </div>
                  <p className="text-sm text-gray-400 mb-4 leading-relaxed">
                    Essential for non-US residents to open bank accounts and file
                    taxes.
                  </p>
                  <button
                    type="button"
                    onClick={() =>
                      handleUpsellClick(
                        "ITIN Application & Renewal",
                        "I am interested in applying for an ITIN number.",
                      )
                    }
                    className="text-sm font-semibold text-white border-b border-white/20 hover:border-cyan-400 hover:text-cyan-400 transition-colors pb-0.5"
                  >
                    Get ITIN Support
                  </button>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-3 text-white">
                    <Plane className="w-5 h-5 text-blue-400" />
                    <h3 className="font-bold text-lg">Visa Consultation</h3>
                  </div>
                  <p className="text-sm text-gray-400 mb-4 leading-relaxed">
                    Expert guidance on O-1, E-2, and L-1 visas for founders
                    relocating to the US.
                  </p>
                  <button
                    type="button"
                    onClick={() =>
                      handleUpsellClick(
                        "Visa & Immigration Services",
                        "I am interested in US Visa consultation.",
                      )
                    }
                    className="text-sm font-semibold text-white border-b border-white/20 hover:border-cyan-400 hover:text-cyan-400 transition-colors pb-0.5"
                  >
                    Book Consultation
                  </button>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-white/10">
                <div className="flex items-center gap-2 text-xs text-gray-500 font-medium">
                  <ShieldCheck className="w-4 h-4" />
                  <span>256-bit Secure Encryption</span>
                </div>
              </div>
            </div>

            {/* Right Content: Form */}
            <div className="lg:col-span-7 p-8 lg:p-12 relative" id="contact-form">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-white mb-3">
                  Send us a message
                </h2>
                <p className="text-gray-400">
                  Tell us about your business goals. We typically respond within
                  1 business day.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label
                      htmlFor="name"
                      className="text-sm font-bold text-gray-300"
                    >
                      Full Name <span className="text-red-400">*</span>
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="h-12 bg-white/5 border-white/10 text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 rounded-xl placeholder:text-gray-600"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="email"
                      className="text-sm font-bold text-gray-300"
                    >
                      Email Address <span className="text-red-400">*</span>
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="h-12 bg-white/5 border-white/10 text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 rounded-xl placeholder:text-gray-600"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label
                      htmlFor="company"
                      className="text-sm font-bold text-gray-300"
                    >
                      Company Name
                    </Label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleChange}
                      className="h-12 bg-white/5 border-white/10 text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 rounded-xl placeholder:text-gray-600"
                      placeholder="Acme Inc."
                    />
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="country"
                      className="text-sm font-bold text-gray-300"
                    >
                      Country of Residence{" "}
                      <span className="text-red-400">*</span>
                    </Label>
                    <Input
                      id="country"
                      name="country"
                      type="text"
                      required
                      value={formData.country}
                      onChange={handleChange}
                      className="h-12 bg-white/5 border-white/10 text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 rounded-xl placeholder:text-gray-600"
                      placeholder="United Kingdom"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="service"
                    className="text-sm font-bold text-gray-300"
                  >
                    How can we help? <span className="text-red-400">*</span>
                  </Label>
                  <div className="relative">
                    <select
                      id="service"
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full h-12 appearance-none rounded-xl bg-white/5 border border-white/10 px-4 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors cursor-pointer [&>option]:text-black"
                    >
                      <option value="" disabled>
                        Select a topic...
                      </option>
                      {SERVICES.map((service) => (
                        <option
                          key={service}
                          value={service}
                          className="text-black bg-white"
                        >
                          {service}
                        </option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                      <svg
                        className="h-4 w-4 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="message"
                    className="text-sm font-bold text-gray-300"
                  >
                    Message <span className="text-red-400">*</span>
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    placeholder="Please describe your business needs..."
                    className="resize-none bg-white/5 border-white/10 text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 rounded-xl p-4 placeholder:text-gray-600"
                  />
                </div>

                <div className="pt-4">
                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white h-14 text-lg font-bold rounded-xl shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] transition-all flex items-center justify-center gap-2 group"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="animate-spin h-5 w-5" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Footer */}
      <section className="py-12 border-t border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-30 grayscale">
            <div className="text-lg font-bold text-white">TECHCRUNCH</div>
            <div className="text-lg font-bold text-white">FORBES</div>
            <div className="text-lg font-bold text-white">BLOOMBERG</div>
            <div className="text-lg font-bold text-white">INC. 5000</div>
          </div>
        </div>
      </section>
    </div>
  );
}
