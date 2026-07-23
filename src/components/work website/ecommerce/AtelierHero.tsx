"use client";

import React from "react";
import { ATELIER_CONFIG } from "./AtelierConfig";

export default function AtelierHero() {
    const { brandName, collectionName, tagline, stats, whatsappLink } = ATELIER_CONFIG;

    return (
        <section className="relative min-h-screen flex flex-col justify-between items-center px-6 pt-32 pb-16 bg-[#000000] text-[#FFFFFF] overflow-hidden border-b border-neutral-800">
            {/* Minimalist Editorial Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30 pointer-events-none" />

            <div className="relative z-10 text-center max-w-5xl mx-auto">
                <span className="inline-block px-4 py-1.5 rounded-full text-xs font-mono tracking-[0.3em] text-neutral-400 bg-neutral-900 border border-neutral-800 uppercase mb-8">
                    ✦ VELORA WORK EXPERIENCE · LUXURY FASHION & RETAIL
                </span>

                <h1 className="text-5xl md:text-8xl lg:text-9xl font-serif tracking-tighter text-white font-extralight uppercase mb-4 leading-none">
                    {brandName}
                </h1>

                <p className="text-xs md:text-sm font-mono tracking-[0.4em] uppercase text-neutral-400 mb-6">
                    {collectionName}
                </p>

                <p className="text-base md:text-xl font-serif italic text-neutral-300 max-w-xl mx-auto font-light leading-relaxed mb-12">
                    "{tagline}"
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                    <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-10 py-5 bg-white text-black font-semibold text-xs uppercase tracking-[0.25em] rounded hover:bg-neutral-200 transition-all duration-300 shadow-2xl shadow-white/10"
                    >
                        Order via VIP WhatsApp Concierge
                    </a>
                    <a
                        href="#lookbook"
                        className="px-10 py-5 border border-neutral-700 text-white font-medium text-xs uppercase tracking-[0.25em] rounded hover:border-white transition-all duration-300 bg-neutral-900/50 backdrop-blur"
                    >
                        Explore Lookbook
                    </a>
                </div>
            </div>

            {/* Metrics Counter */}
            <div className="relative z-10 w-full max-w-6xl grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 border-t border-neutral-900">
                {stats.map((s, idx) => (
                    <div key={idx} className="text-center p-4 rounded bg-neutral-950 border border-neutral-900">
                        <div className="text-3xl md:text-5xl font-serif font-light text-white mb-1">
                            {s.value}
                        </div>
                        <div className="text-xs font-mono uppercase tracking-wider text-neutral-300 mb-1">
                            {s.label}
                        </div>
                        <div className="text-[10px] text-neutral-500">
                            {s.sub}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
