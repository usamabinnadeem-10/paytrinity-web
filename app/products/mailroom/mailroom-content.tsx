"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, Scan, Truck, Trash2, MapPin, Globe, Check, ArrowRight, ShieldCheck, CreditCard } from 'lucide-react';
import { motion } from 'motion/react';

export function MailroomContent() {
  const features = [
    {
      title: "Real Physical Address",
      description: "Get a prestigious street address in New York, Delaware, or Wyoming. Not a PO Box.",
      icon: <MapPin className="h-6 w-6 text-blue-400" />,
      color: "bg-blue-500/20",
      colSpan: "col-span-1 md:col-span-2 lg:col-span-1"
    },
    {
      title: "Scan & View Online",
      description: "We scan the outside of every envelope. You tell us to open and scan the contents, forward, or recycle.",
      icon: <Scan className="h-6 w-6 text-indigo-400" />,
      color: "bg-indigo-500/20",
      colSpan: "col-span-1 md:col-span-2 lg:col-span-2"
    },
    {
      title: "Global Forwarding",
      description: "Forward mail and packages to anywhere in the world with discounted shipping rates.",
      icon: <Globe className="h-6 w-6 text-green-400" />,
      color: "bg-green-500/20",
      colSpan: "col-span-1 md:col-span-2 lg:col-span-1"
    },
    {
      title: "Check Deposit",
      description: "Receive checks? We can deposit them directly into your US bank account for you.",
      icon: <CreditCard className="h-6 w-6 text-amber-400" />,
      color: "bg-amber-500/20",
      colSpan: "col-span-1 md:col-span-2 lg:col-span-1"
    },
    {
      title: "Secure Shredding",
      description: "Keep your data safe. We securely shred and recycle any junk mail or sensitive documents you don't need.",
      icon: <Trash2 className="h-6 w-6 text-red-400" />,
      color: "bg-red-500/20",
      colSpan: "col-span-1 md:col-span-2 lg:col-span-1"
    }
  ];

  return (
    <div className="min-h-screen bg-[#020410] text-white font-sans selection:bg-blue-500 selection:text-white overflow-x-hidden">
      {/* Background Gradients */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-blue-600/10 blur-[120px] rounded-full mix-blend-screen animate-pulse duration-[10000ms]"></div>
        <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-indigo-600/10 blur-[120px] rounded-full mix-blend-screen"></div>
        <div className="absolute bottom-[-20%] left-[20%] w-[800px] h-[800px] bg-purple-600/10 blur-[120px] rounded-full mix-blend-screen"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
      </div>

      {/* Hero Section */}
      <div className="relative pt-32 pb-20 lg:pt-40 overflow-hidden z-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-sm font-medium text-blue-300 mb-6 backdrop-blur-sm">
               <Mail className="h-4 w-4 mr-2" />
               PayTrinity Mailroom
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl mb-6 leading-tight">
              Your physical mail, <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4A574] to-amber-200">digitized.</span>
            </h1>
            <p className="text-lg leading-relaxed text-blue-100/70 mb-8 font-light">
              Access your business mail from anywhere in the world. We receive, scan, and manage your physical mail so you can run your business remotely.
            </p>
            <div className="flex items-center gap-x-6">
              <Link
                href="/contact"
                className="rounded-full bg-[#D4A574] px-8 py-4 text-sm font-bold text-[#0B1B3D] shadow-[0_0_20px_rgba(212,165,116,0.3)] hover:bg-[#D4A574]/90 transition-all hover:scale-105 flex items-center gap-2"
              >
                Get your address <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-12 flex items-center gap-8 text-sm text-gray-400 border-t border-white/10 pt-8">
               <div className="flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-green-400" />
                  <span>SOC 2 Type II Certified</span>
               </div>
               <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-blue-400" />
                  <span>Prime US Locations</span>
               </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:h-[500px] w-full hidden lg:block"
          >
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg aspect-square bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
             <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-[#0B1B3D]/50 backdrop-blur-sm h-full">
                <Image
                   src="https://images.unsplash.com/photo-1641630376356-fb9e646b0ea4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFpbCUyMHNjYW5uaW5nJTIwdGFibGV0JTIwYnVzaW5lc3N8ZW58MXx8fHwxNzY5MjgwNTEwfDA&ixlib=rb-4.1.0&q=80&w=1080"
                   alt="Digital Mailroom Interface"
                   width={1080}
                   height={720}
                   className="w-full h-full object-cover opacity-80 mix-blend-overlay"
                />

                {/* Floating Notification */}
                <div className="absolute top-6 right-6 bg-[#0B1B3D]/90 border border-white/10 text-white p-4 rounded-xl shadow-lg flex items-center gap-3 backdrop-blur-md">
                   <div className="bg-blue-500/20 p-2 rounded-full">
                      <Mail className="h-5 w-5 text-blue-400" />
                   </div>
                   <div>
                      <div className="text-xs font-bold">New Mail Received</div>
                      <div className="text-xs text-gray-400">From: IRS (Tax Department)</div>
                   </div>
                </div>
             </div>
          </motion.div>
        </div>
      </div>

      {/* Features Grid (Bento) */}
      <div className="py-24 relative z-10 border-y border-white/5 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Complete control over your correspondence</h2>
            <p className="mt-4 text-lg text-gray-400 font-light">Never miss an important document again. Manage everything from your dashboard.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
             {features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className={`bg-white/5 rounded-3xl p-8 shadow-lg hover:bg-white/10 transition-colors border border-white/10 backdrop-blur-sm ${feature.colSpan || ''}`}
                >
                   <div className={`w-12 h-12 ${feature.color} rounded-xl flex items-center justify-center mb-6`}>
                      {feature.icon}
                   </div>
                   <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                   <p className="text-gray-400 leading-relaxed text-sm">{feature.description}</p>
                </motion.div>
             ))}

             {/* Image Card */}
             <div className="bg-[#0B1B3D]/50 rounded-3xl p-0 shadow-lg overflow-hidden relative col-span-1 md:col-span-2 lg:col-span-1 min-h-[300px] group border border-white/10">
                <Image
                  src="https://images.unsplash.com/photo-1521780171415-783b1cb576e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBidWlsZGluZyUyMGV4dGVyaW9yJTIwbW9kZXJuJTIwc2t5c2NyYXBlcnxlbnwxfHx8fDE3NjkyODA1MTN8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Office Building"
                  width={1080}
                  height={720}
                  className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700 mix-blend-overlay"
                />
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 to-transparent">
                   <h3 className="text-xl font-bold text-white mb-1">Premium Addresses</h3>
                   <p className="text-gray-300 text-sm">Impress clients with a real office address, not a PO Box.</p>
                </div>
             </div>
          </div>
        </div>
      </div>

      {/* How it Works */}
      <div className="py-24 relative z-10">
         <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl text-center mb-16">How PayTrinity Mailroom works</h2>

            <div className="relative">
               {/* Connecting Line (Desktop) */}
               <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-white/10 -z-10"></div>

               <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative p-6"
                  >
                     <div className="w-24 h-24 mx-auto bg-[#020410] rounded-full flex items-center justify-center mb-6 border border-blue-500/50 shadow-[0_0_20px_rgba(59,130,246,0.2)]">
                        <Truck className="h-10 w-10 text-blue-400" />
                     </div>
                     <h3 className="text-xl font-bold text-white mb-3">1. We receive mail</h3>
                     <p className="text-gray-400 font-light">Your mail arrives at our secure facility. We sort and log every item immediately.</p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="relative p-6"
                  >
                     <div className="w-24 h-24 mx-auto bg-[#020410] rounded-full flex items-center justify-center mb-6 border border-indigo-500/50 shadow-[0_0_20px_rgba(99,102,241,0.2)]">
                        <Scan className="h-10 w-10 text-indigo-400" />
                     </div>
                     <h3 className="text-xl font-bold text-white mb-3">2. We scan envelope</h3>
                     <p className="text-gray-400 font-light">You get an instant notification with a high-res image of the envelope.</p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="relative p-6"
                  >
                     <div className="w-24 h-24 mx-auto bg-[#020410] rounded-full flex items-center justify-center mb-6 border border-amber-500/50 shadow-[0_0_20px_rgba(245,158,11,0.2)]">
                        <Check className="h-10 w-10 text-amber-400" />
                     </div>
                     <h3 className="text-xl font-bold text-white mb-3">3. You take action</h3>
                     <p className="text-gray-400 font-light">Tell us to open & scan, forward, deposit check, or shred securely via the app.</p>
                  </motion.div>
               </div>
            </div>
         </div>
      </div>

      {/* Pricing/CTA */}
      <div className="py-24 relative z-10 border-t border-white/10 bg-white/[0.02]">
         <div className="mx-auto max-w-4xl text-center px-6">
            <h2 className="text-3xl font-bold text-white mb-6">Simple, transparent pricing</h2>
            <p className="text-gray-400 text-lg mb-10">No setup fees. Cancel anytime.</p>

            <div className="bg-[#0B1B3D]/50 rounded-3xl shadow-2xl overflow-hidden border border-white/10 max-w-lg mx-auto backdrop-blur-md">
               <div className="p-8 border-b border-white/10 bg-white/5">
                  <h3 className="text-xl font-semibold text-blue-300 uppercase tracking-wide">Unlimited Plan</h3>
                  <div className="mt-4 flex items-baseline justify-center gap-x-2">
                     <span className="text-5xl font-bold tracking-tight text-white">$35</span>
                     <span className="text-base text-gray-400">/month</span>
                  </div>
               </div>
               <div className="p-8 bg-[#020410]/50">
                  <ul role="list" className="space-y-4 text-left mb-8">
                     {[
                        'Real street address',
                        'Unlimited incoming mail',
                        'Unlimited scanning',
                        'Secure shredding',
                        'Check deposits ($5/check)',
                        'Global forwarding (shipping rates apply)'
                     ].map((feature) => (
                        <li key={feature} className="flex gap-x-3">
                           <Check className="h-6 w-5 flex-none text-green-400" aria-hidden="true" />
                           <span className="text-gray-300">{feature}</span>
                        </li>
                     ))}
                  </ul>
                  <Link href="/contact" className="block w-full rounded-xl bg-white text-[#0B1B3D] px-8 py-4 font-bold text-lg hover:bg-gray-200 transition-all shadow-lg transform hover:-translate-y-1 text-center">
                     Get Started
                  </Link>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
}
