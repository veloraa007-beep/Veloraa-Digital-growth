"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import LaunchTimer from "@/components/launch-timer";

export default function LaunchPage() {
  // Hide global header/footer/whatsapp on mount
  useEffect(() => {
    document.body.classList.add("launch-page");
    return () => document.body.classList.remove("launch-page");
  }, []);

  return (
    <main className="min-h-screen bg-[#0F1113] text-[#EAE6DD] flex flex-col relative overflow-hidden font-sans selection:bg-[#C2A35D] selection:text-black">
      {/* BACKGROUND EFFECTS */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Subtle Dark Gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#2A2E30_0%,#0F1113_60%)] opacity-40"></div>
        {/* Architectural Grid / Matrix Pattern (Subtle) */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.5) 1px, transparent 1px)",
            backgroundSize: "40px 40px"
          }}
        ></div>
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#C2A35D] to-transparent opacity-20 gold-line-animated"></div>
      </div>

      {/* HERO SECTION */}
      <section className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 py-20 md:py-32 text-center max-w-5xl mx-auto">
        
        {/* Headlines */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-4xl md:text-6xl lg:text-8xl font-serif font-light tracking-tight mb-6"
        >
          🚀 VELORA<br/>LAUNCHING SOON
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-lg md:text-2xl text-[#EAE6DD]/90 font-light max-w-3xl mx-auto mb-8"
        >
          We are launching our Digital Growth Infrastructure platform globally.
        </motion.p>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="text-sm md:text-base text-[#A8A39B] max-w-2xl mx-auto leading-relaxed mb-16"
        >
          Elite websites, automation systems, and scalable digital architecture engineered for businesses that want to dominate their industry.
        </motion.p>

        {/* TIMER */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          className="mb-16 w-full max-w-3xl p-8 md:p-12 relative"
        >
          <div className="absolute inset-0 bg-[#141618] rounded-xl border border-white/[0.04] backdrop-blur-md"></div>
          {/* Edge highlights */}
          <div className="absolute top-0 left-[20%] right-[20%] h-[1px] bg-gradient-to-r from-transparent via-[#C2A35D]/30 to-transparent"></div>
          <div className="absolute bottom-0 left-[20%] right-[20%] h-[1px] bg-gradient-to-r from-transparent via-[#C2A35D]/10 to-transparent"></div>
          
          <div className="relative z-10">
            <LaunchTimer />
          </div>
        </motion.div>

        {/* BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full max-w-md mx-auto"
        >
          <a
            href="https://api.whatsapp.com/send/?phone=919901981097&text=I%20want%20to%20unlock%20launch%20discounts!&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-full sm:w-auto flex items-center justify-center px-8 py-4 bg-[#C2A35D]/10 border border-[#C2A35D] text-[#C2A35D] text-sm font-bold uppercase tracking-[0.2em] transition-all duration-500 hover:bg-[#C2A35D] hover:text-black overflow-hidden"
          >
            <div className="absolute inset-0 bg-[#C2A35D] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-20 blur-md bg-[#C2A35D] transition-opacity duration-500" />
            <span className="relative z-10 whitespace-nowrap">Unlock Launch Discounts</span>
          </a>

          <a
            href="https://api.whatsapp.com/send/?phone=919901981097&text=I%27d%20like%20to%20book%20a%20strategy%20call.&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto text-center px-8 py-4 border border-white/10 text-[#EAE6DD]/70 text-sm font-bold uppercase tracking-[0.2em] transition-all duration-300 hover:border-white/30 hover:text-white bg-[#141618]/50 overflow-hidden"
          >
            <span className="whitespace-nowrap">Book Strategy Call</span>
          </a>
        </motion.div>

      </section>

      {/* DISCOUNTS SECTION */}
      <section className="relative z-10 py-16 px-6 mb-20 max-w-4xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative rounded-2xl p-[1px] overflow-hidden group"
        >
          {/* Glowing Border Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#141618] via-[#141618] to-[#141618] group-hover:via-[#C2A35D]/20 transition-all duration-1000"></div>
          
          <div className="relative bg-[#141618] rounded-2xl p-8 md:p-12 border border-white/5 h-full backdrop-blur-xl flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/3 flex flex-col items-center md:items-start text-center md:text-left border-b md:border-b-0 md:border-r border-white/5 pb-8 md:pb-0 md:pr-8">
              <span className="text-5xl md:text-6xl mb-4 font-bold text-[#C2A35D]">60%</span>
              <h2 className="text-2xl md:text-3xl font-serif text-[#EAE6DD] mb-2">Discount</h2>
              <p className="text-[10px] uppercase font-sans tracking-[0.2em] text-[#C2A35D]">Limited Launch Offer</p>
            </div>
            
            <div className="md:w-2/3">
              <p className="text-sm md:text-base text-[#A8A39B] mb-6 leading-relaxed">
                Early clients who book during the launch window receive an exclusive 60% discount on their development packages.
              </p>
              <ul className="space-y-4 mb-6">
                {[
                  "60% discount on complete system architecture packages",
                  "Priority project onboarding & execution timeline",
                  "Strategic automation & growth consultation included"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-[#C2A35D] mt-1 shrink-0">•</span>
                    <span className="text-sm text-[#EAE6DD]/80">{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="pt-6 border-t border-white/5">
                <p className="text-xs text-[#A8A39B]/60 italic font-light leading-relaxed">
                  * Terms & Conditions apply: The 60% discount applies to development & setup packages only. Domain costs, hosting fees, and third-party service costs remain standard.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* MINIMAL FOOTER */}
      <footer className="relative z-10 w-full py-12 px-6 border-t border-white/[0.03]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <p className="text-xs font-sans uppercase tracking-[0.2em] text-[#A8A39B] mb-2">
              &copy; 2026 VELORA
            </p>
            <p className="text-[10px] text-[#A8A39B]/50 uppercase tracking-[0.1em]">
              Digital Growth Operating System
            </p>
          </div>

          <div className="flex gap-6">
            {[
              "Instagram",
              "LinkedIn",
              "TikTok",
              "Pinterest"
            ].map((social) => (
              <a
                key={social}
                href="#"
                className="text-[10px] font-sans uppercase tracking-[0.2em] text-[#A8A39B] hover:text-[#C2A35D] transition-colors"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </footer>

    </main>
  );
}
