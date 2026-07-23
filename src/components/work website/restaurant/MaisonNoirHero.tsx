"use client";

import React from "react";
import { MAISON_NOIR_CONFIG } from "./MaisonNoirConfig";

export default function MaisonNoirHero() {
    const { brandName, subBrand, michelinStars, tagline, stats, whatsappLink } = MAISON_NOIR_CONFIG;

    return (
        <section className="relative min-h-screen flex flex-col justify-between items-center px-6 pt-32 pb-16 bg-[#080706] text-[#F7F5F0] overflow-hidden border-b border-[#D4AF37]/20">
            {/* Ambient Background Gradient & Smoke Effect */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#D4AF37]/10 via-[#080706] to-[#080706] pointer-events-none" />

            {/* Top Badge */}
            <div className="relative z-10 text-center">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono tracking-[0.25em] text-[#D4AF37] bg-[#110E0C] border border-[#D4AF37]/30 uppercase mb-8 shadow-lg shadow-black">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse" />
                    {michelinStars}
                </span>

                <h1 className="text-5xl md:text-8xl lg:text-9xl font-serif tracking-tighter text-[#F7F5F0] font-extralight uppercase mb-4 leading-none">
                    {brandName}
                </h1>
                <p className="text-xs md:text-sm font-mono tracking-[0.4em] uppercase text-[#D4AF37]/80 mb-6">
                    {subBrand}
                </p>
                <p className="text-base md:text-xl font-serif italic text-[#A39E93] max-w-2xl mx-auto font-light leading-relaxed">
                    "{tagline}"
                </p>
            </div>

            {/* Center Action Buttons */}
            <div className="relative z-10 my-12 flex flex-col sm:flex-row gap-6 items-center">
                <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-10 py-5 bg-[#D4AF37] text-black font-semibold text-xs uppercase tracking-[0.25em] rounded hover:bg-[#F3E5AB] transition-all duration-500 shadow-2xl shadow-[#D4AF37]/20"
                >
                    Reserve Table Privé
                </a>
                <a
                    href="#tasting-menu"
                    className="px-10 py-5 border border-[#D4AF37]/40 text-[#F7F5F0] font-medium text-xs uppercase tracking-[0.25em] rounded hover:border-[#D4AF37] transition-all duration-500 bg-[#110E0C]/40 backdrop-blur"
                >
                    Explore Tasting Narrative
                </a>
            </div>

            {/* Bottom Metrics Bar */}
            <div className="relative z-10 w-full max-w-6xl grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 border-t border-[#D4AF37]/15">
                {stats.map((s, idx) => (
                    <div key={idx} className="text-center p-4 rounded bg-[#110E0C]/60 border border-[#D4AF37]/10 backdrop-blur">
                        <div className="text-3xl md:text-5xl font-serif font-light text-[#D4AF37] mb-1">
                            {s.value}
                        </div>
                        <div className="text-xs font-mono uppercase tracking-wider text-[#F7F5F0] mb-1">
                            {s.label}
                        </div>
                        <div className="text-[10px] text-[#A39E93]">
                            {s.sub}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
