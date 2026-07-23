"use client";

import React from "react";
import { DRIVING_SCHOOL_SYSTEM_CONFIG } from "./DrivingSchoolConfig";

export default function DrivingSchoolHero() {
    const { heroTitle, heroSubtitle, metrics } = DRIVING_SCHOOL_SYSTEM_CONFIG;

    return (
        <section className="relative min-h-[90vh] flex flex-col justify-center items-center px-6 py-20 bg-[#0A0D0B] text-white overflow-hidden border-b border-emerald-900/30">
            {/* Background Glow */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />

            <div className="max-w-5xl w-full mx-auto text-center relative z-10">
                <span className="inline-block px-4 py-1.5 rounded-full text-xs font-mono tracking-widest text-emerald-400 bg-emerald-950/60 border border-emerald-800/40 uppercase mb-8">
                    ✦ VELORA INDUSTRY SYSTEM · DRIVING ACADEMY
                </span>

                <h1 className="text-4xl md:text-7xl font-serif tracking-tight text-emerald-50 font-light mb-6 leading-tight">
                    {heroTitle}
                </h1>

                <p className="text-lg md:text-xl text-emerald-100/70 max-w-2xl mx-auto font-sans font-light leading-relaxed mb-12">
                    {heroSubtitle}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                    <a
                        href="https://api.whatsapp.com/message/CSJUP7QRLQFYL1?autoload=1&app_absent=0"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto px-8 py-4 bg-emerald-400 text-black font-semibold tracking-wider uppercase text-sm rounded-lg hover:bg-emerald-300 transition-all duration-300 shadow-lg shadow-emerald-950/50"
                    >
                        Book Trial Driving Lesson
                    </a>
                    <a
                        href="#packages"
                        className="w-full sm:w-auto px-8 py-4 border border-emerald-800/60 text-emerald-200 font-medium tracking-wider uppercase text-sm rounded-lg hover:border-emerald-400 transition-all duration-300 bg-emerald-950/20"
                    >
                        Explore Packages
                    </a>
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 border-t border-emerald-900/40">
                    {metrics.map((m, idx) => (
                        <div key={idx} className="text-center p-4 rounded-xl bg-emerald-950/20 border border-emerald-900/30">
                            <div className="text-2xl md:text-4xl font-serif font-semibold text-emerald-300 mb-1">
                                {m.value}
                            </div>
                            <div className="text-xs font-medium text-emerald-100 uppercase tracking-wider mb-1">
                                {m.label}
                            </div>
                            <div className="text-[11px] text-emerald-400/60">
                                {m.sub}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
