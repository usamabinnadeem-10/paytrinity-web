"use client";

import Link from "next/link";
import Image from "next/image";
import { Shield, EyeOff, Bell, FileText, CheckCircle2, MapPin, Lock, ArrowRight, Building, Mail } from 'lucide-react';
import { motion } from 'motion/react';

export function AgentContent() {
  return (
    <div className="min-h-screen bg-[#020410] text-white font-sans selection:bg-blue-500 selection:text-white overflow-x-hidden">
      {/* Background Gradients */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-blue-600/10 blur-[120px] rounded-full mix-blend-screen animate-pulse duration-[10000ms]"></div>
        <div className="absolute bottom-[-20%] left-[20%] w-[800px] h-[800px] bg-indigo-600/10 blur-[120px] rounded-full mix-blend-screen"></div>
        <div className="absolute top-[40%] left-[-10%] w-[600px] h-[600px] bg-[#D4A574]/5 blur-[120px] rounded-full mix-blend-screen"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20 lg:pt-48 lg:pb-32 z-10">
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 text-xs font-bold uppercase tracking-wider mb-6 backdrop-blur-sm">
                <Shield className="h-3 w-3" />
                <span>Official Registered Agent</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
                Your Company's <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4A574] to-amber-200">Compliance Shield.</span>
              </h1>
              <p className="text-lg text-blue-100/70 mb-8 max-w-xl leading-relaxed font-light">
                Every US LLC and Corporation requires a Registered Agent. PayTrinity Agent protects your privacy, handles legal correspondence, and keeps you compliant in all 50 states.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="rounded-full bg-[#D4A574] px-8 py-4 text-[#0B1B3D] font-bold text-lg shadow-[0_0_20px_rgba(212,165,116,0.3)] hover:bg-[#D4A574]/90 transition-all hover:scale-105 flex items-center justify-center gap-2"
                >
                  Get Protected
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link
                  href="/contact"
                  className="rounded-full bg-white/5 border border-white/10 px-8 py-4 text-white font-bold text-lg hover:bg-white/10 transition-all flex items-center justify-center backdrop-blur-sm"
                >
                  Transfer Agent
                </Link>
              </div>
              <p className="mt-6 text-sm text-blue-200/50 flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-400" />
                <span>Available in all 50 states</span>
              </p>
            </motion.div>

            {/* Hero Visual */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl bg-white/5 border border-white/10 p-2 shadow-2xl rotate-1 hover:rotate-0 transition-transform duration-500 backdrop-blur-md">
                <div className="rounded-xl bg-[#0B1B3D]/80 p-6 relative overflow-hidden">
                   <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px]"></div>

                   <div className="relative z-10">
                      <div className="flex items-center gap-4 mb-8">
                         <div className="h-12 w-12 rounded-full bg-[#D4A574] flex items-center justify-center text-[#0B1B3D] shadow-lg shadow-[#D4A574]/20">
                            <Shield className="h-6 w-6" />
                         </div>
                         <div>
                            <div className="text-white font-bold text-lg">Compliance Status</div>
                            <div className="text-green-400 text-sm flex items-center gap-1">
                               <span className="relative flex h-2 w-2 mr-1">
                                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                 <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                               </span>
                               Active & Good Standing
                            </div>
                         </div>
                      </div>

                      <div className="space-y-4">
                         <div className="bg-white/5 border border-white/10 rounded-lg p-4 flex items-center justify-between hover:bg-white/10 transition-colors">
                            <div className="flex items-center gap-3">
                               <div className="h-8 w-8 bg-blue-500/20 rounded-md flex items-center justify-center text-blue-400">
                                  <MapPin className="h-4 w-4" />
                               </div>
                               <div>
                                  <div className="text-white text-sm font-medium">Registered Address</div>
                                  <div className="text-gray-400 text-xs">1209 Orange St, Wilmington, DE</div>
                               </div>
                            </div>
                            <div className="text-green-400 text-xs bg-green-500/10 px-2 py-1 rounded border border-green-500/20">Active</div>
                         </div>

                         <div className="bg-white/5 border border-white/10 rounded-lg p-4 flex items-center justify-between hover:bg-white/10 transition-colors">
                            <div className="flex items-center gap-3">
                               <div className="h-8 w-8 bg-purple-500/20 rounded-md flex items-center justify-center text-purple-400">
                                  <FileText className="h-4 w-4" />
                               </div>
                               <div>
                                  <div className="text-white text-sm font-medium">Service of Process</div>
                                  <div className="text-gray-400 text-xs">0 pending documents</div>
                               </div>
                            </div>
                            <CheckCircle2 className="h-4 w-4 text-gray-500" />
                         </div>

                         <div className="bg-white/5 border border-white/10 rounded-lg p-4 flex items-center justify-between hover:bg-white/10 transition-colors">
                            <div className="flex items-center gap-3">
                               <div className="h-8 w-8 bg-amber-500/20 rounded-md flex items-center justify-center text-amber-400">
                                  <Bell className="h-4 w-4" />
                               </div>
                               <div>
                                  <div className="text-white text-sm font-medium">State Alerts</div>
                                  <div className="text-gray-400 text-xs">Annual Report due in 45 days</div>
                               </div>
                            </div>
                            <div className="text-amber-400 text-xs bg-amber-500/10 px-2 py-1 rounded border border-amber-500/20">Action</div>
                         </div>
                      </div>
                   </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The "Why" Section */}
      <section className="py-24 relative z-10 border-y border-white/5 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4">
              Why do I need a Registered Agent?
            </h2>
            <p className="text-lg text-gray-400 font-light">
              It's not just a recommendation—it's the law. Every state requires a designated contact to receive government correspondence.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
             <div className="bg-white/5 p-8 rounded-2xl shadow-lg border border-white/10 transition-all hover:-translate-y-1 hover:bg-white/10 backdrop-blur-sm">
               <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center text-blue-400 mb-6">
                 <Building className="h-6 w-6" />
               </div>
               <h3 className="text-xl font-bold text-white mb-3">Legal Compliance</h3>
               <p className="text-gray-400 text-sm leading-relaxed">
                 The state needs a reliable way to contact you during business hours. Failing to maintain an agent can lead to fines or company dissolution.
               </p>
             </div>
             <div className="bg-white/5 p-8 rounded-2xl shadow-lg border border-white/10 transition-all hover:-translate-y-1 hover:bg-white/10 backdrop-blur-sm">
               <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center text-purple-400 mb-6">
                 <EyeOff className="h-6 w-6" />
               </div>
               <h3 className="text-xl font-bold text-white mb-3">Privacy Protection</h3>
               <p className="text-gray-400 text-sm leading-relaxed">
                 Registered Agent addresses are public record. By using PayTrinity Agent, your personal home address stays off public databases.
               </p>
             </div>
             <div className="bg-white/5 p-8 rounded-2xl shadow-lg border border-white/10 transition-all hover:-translate-y-1 hover:bg-white/10 backdrop-blur-sm">
               <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center text-emerald-400 mb-6">
                 <Mail className="h-6 w-6" />
               </div>
               <h3 className="text-xl font-bold text-white mb-3">Never Miss a Notice</h3>
               <p className="text-gray-400 text-sm leading-relaxed">
                 We receive legal mail (Service of Process) and state notices on your behalf, scan them immediately, and notify you digitally.
               </p>
             </div>
          </div>
        </div>
      </section>

      {/* Feature Showcase */}
      <section className="py-24 relative z-10 overflow-hidden">
         <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
               <div className="order-2 lg:order-1 relative">
                  <div className="absolute inset-0 bg-blue-500/10 rounded-full blur-[100px] opacity-50"></div>
                  <Image
                     src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=1000"
                     alt="Secure document handling"
                     width={1000}
                     height={667}
                     className="relative rounded-2xl shadow-2xl border border-white/10 z-10 opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
                  />
                  <div className="absolute -bottom-8 -right-8 bg-[#0B1B3D] p-6 rounded-xl shadow-xl border border-white/10 z-20 max-w-xs hidden md:block">
                     <div className="flex items-start gap-3">
                        <div className="bg-green-500/20 p-2 rounded-lg">
                           <Lock className="h-5 w-5 text-green-400" />
                        </div>
                        <div>
                           <div className="font-bold text-white">Bank-Grade Security</div>
                           <p className="text-xs text-gray-400 mt-1">All documents are encrypted and stored securely in your dashboard.</p>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="order-1 lg:order-2">
                  <h2 className="text-3xl font-bold text-white sm:text-4xl mb-6">
                     Modern compliance for modern founders
                  </h2>
                  <p className="text-lg text-gray-400 mb-8 font-light">
                     Old-school registered agents send you physical mail weeks late. PayTrinity Agent is built for the digital age.
                  </p>

                  <ul className="space-y-6">
                     {[
                        { title: 'Digital Mailroom', desc: 'Documents are scanned and uploaded to your dashboard within 24 hours.' },
                        { title: 'Privacy Shield', desc: 'We list our address on public filing documents, keeping yours private.' },
                        { title: 'Junk Mail Filtering', desc: 'We shred solicitations and junk mail so you only see what matters.' },
                        { title: 'State Dashboard', desc: 'View compliance status for all your entities in one place.' }
                     ].map((item, i) => (
                        <li key={i} className="flex gap-4">
                           <div className="mt-1 h-6 w-6 rounded-full bg-[#D4A574]/20 flex items-center justify-center text-[#D4A574] flex-shrink-0">
                              <CheckCircle2 className="h-4 w-4" />
                           </div>
                           <div>
                              <h4 className="font-bold text-white">{item.title}</h4>
                              <p className="text-sm text-gray-500">{item.desc}</p>
                           </div>
                        </li>
                     ))}
                  </ul>
               </div>
            </div>
         </div>
      </section>

      {/* Pricing / CTA */}
      <section className="py-24 relative z-10 border-t border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-4xl px-6 text-center">
           <h2 className="text-3xl font-bold text-white sm:text-4xl mb-6">
              Complete peace of mind.
           </h2>
           <p className="text-xl text-blue-100/70 mb-10 max-w-2xl mx-auto font-light">
              Included free for the first year with PayTrinity Start. <br/>
              <span className="text-[#D4A574]">Just $199/year after.</span>
           </p>
           <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                 href="/contact"
                 className="w-full sm:w-auto rounded-full bg-[#D4A574] px-8 py-4 text-[#0B1B3D] font-bold text-lg shadow-lg hover:bg-[#D4A574]/90 transition-all hover:scale-105"
              >
                 Sign Up Now
              </Link>
              <Link
                 href="/contact"
                 className="w-full sm:w-auto rounded-full bg-transparent border border-white/20 px-8 py-4 text-white font-bold text-lg hover:bg-white/10 transition-all"
              >
                 Incorporate Instead
              </Link>
           </div>
        </div>
      </section>
    </div>
  );
}
