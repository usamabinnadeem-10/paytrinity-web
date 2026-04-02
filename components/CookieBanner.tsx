"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Cookie, ShieldCheck } from "lucide-react";
import Link from "next/link";

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const cookieConsent = localStorage.getItem("paytrinity_cookie_consent");
    if (!cookieConsent) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("paytrinity_cookie_consent", "accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("paytrinity_cookie_consent", "declined");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6"
        >
          <div className="mx-auto max-w-5xl rounded-2xl border border-white/10 bg-[#020410]/90 p-1 backdrop-blur-xl shadow-2xl ring-1 ring-white/5">
            <div className="rounded-xl bg-white/5 p-4 md:p-6 flex flex-col md:flex-row items-start md:items-center gap-6 relative overflow-hidden">
              {/* Background Gradients */}
              <div className="absolute top-[-50%] left-[-10%] w-[200px] h-[200px] bg-blue-600/20 blur-[60px] rounded-full pointer-events-none mix-blend-screen" />
              <div className="absolute bottom-[-50%] right-[-10%] w-[200px] h-[200px] bg-purple-600/20 blur-[60px] rounded-full pointer-events-none mix-blend-screen" />

              <div className="flex items-start gap-4 flex-1 relative z-10">
                <div className="rounded-full bg-blue-500/20 p-3 text-blue-400 shrink-0">
                  <Cookie className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">
                    We value your privacy
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed max-w-2xl">
                    We use cookies to enhance your browsing experience, serve
                    personalized ads or content, and analyze our traffic. By
                    clicking &quot;Accept All&quot;, you consent to our use of
                    cookies. Read our{" "}
                    <Link
                      href="/privacy"
                      className="text-blue-400 hover:text-blue-300 hover:underline"
                    >
                      Privacy Policy
                    </Link>
                    .
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto mt-2 md:mt-0 relative z-10">
                <button
                  onClick={handleDecline}
                  className="px-4 py-2.5 rounded-lg text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white transition-colors border border-white/10"
                >
                  Decline
                </button>
                <button
                  onClick={handleAccept}
                  className="px-6 py-2.5 rounded-lg text-sm font-bold bg-white text-[#020410] hover:bg-gray-100 transition-colors shadow-lg shadow-blue-900/20 flex items-center justify-center gap-2"
                >
                  <ShieldCheck className="h-4 w-4" />
                  Accept All
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
