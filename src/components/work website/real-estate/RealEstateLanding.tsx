"use client";

import React from "react";
import { REAL_ESTATE_SYSTEM_CONFIG } from "./RealEstateConfig";

export default function RealEstateLanding() {
    const { heroTitle, heroSubtitle, metrics, properties } = REAL_ESTATE_SYSTEM_CONFIG;

    return (
        <div className="bg-[#050505] text-white min-h-screen font-sans selection:bg-amber-500 selection:text-black">
            {/* Hero Section */}
            <section className="relative min-h-[95vh] flex flex-col justify-center items-center px-6 py-24 border-b border-amber-900/20 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-950/20 via-black to-black pointer-events-none" />

                <div className="max-w-5xl w-full mx-auto text-center relative z-10">
                    <span className="inline-block px-4 py-1.5 rounded-full text-xs font-mono tracking-widest text-amber-400 bg-amber-950/40 border border-amber-800/40 uppercase mb-8">
                        ✦ VELORA INDUSTRY SYSTEM · LUXURY REAL ESTATE
                    </span>

                    <h1 className="text-4xl md:text-7xl font-serif tracking-tight text-amber-50 font-light mb-6 leading-tight">
                        {heroTitle}
                    </h1>

                    <p className="text-lg md:text-xl text-amber-100/70 max-w-2xl mx-auto font-sans font-light leading-relaxed mb-12">
                        {heroSubtitle}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20">
                        <a
                            href="https://api.whatsapp.com/message/CSJUP7QRLQFYL1?autoload=1&app_absent=0"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto px-8 py-4 bg-amber-400 text-black font-bold tracking-widest uppercase text-xs rounded hover:bg-amber-300 transition-all duration-300 shadow-xl shadow-amber-950/50"
                        >
                            Request Private Dossier
                        </a>
                        <a
                            href="#portfolio"
                            className="w-full sm:w-auto px-8 py-4 border border-amber-800/50 text-amber-200 font-medium tracking-widest uppercase text-xs rounded hover:border-amber-400 transition-all duration-300 bg-amber-950/10"
                        >
                            View Active Estates
                        </a>
                    </div>

                    {/* Key Metrics */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 border-t border-amber-900/30">
                        {metrics.map((m, idx) => (
                            <div key={idx} className="text-center p-4 rounded bg-amber-950/10 border border-amber-900/20">
                                <div className="text-2xl md:text-4xl font-serif font-light text-amber-300 mb-1">
                                    {m.value}
                                </div>
                                <div className="text-xs font-medium text-amber-100 uppercase tracking-wider mb-1">
                                    {m.label}
                                </div>
                                <div className="text-[11px] text-amber-400/50">
                                    {m.sub}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Estates Grid */}
            <section id="portfolio" className="py-24 px-6 max-w-7xl mx-auto border-b border-amber-900/20">
                <div className="text-center mb-16">
                    <span className="text-xs font-mono tracking-widest text-amber-400 uppercase block mb-3">
                        CURATED PORTFOLIO
                    </span>
                    <h2 className="text-3xl md:text-5xl font-serif font-light text-amber-50">
                        Featured Architectural Residences
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {properties.map((prop, idx) => (
                        <div
                            key={idx}
                            className="group bg-neutral-900/40 border border-neutral-800 rounded-xl overflow-hidden hover:border-amber-500/40 transition-all duration-500"
                        >
                            <div className="relative h-64 overflow-hidden">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={prop.image}
                                    alt={prop.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                                />
                                <div className="absolute top-4 right-4 px-3 py-1 bg-black/80 backdrop-blur border border-amber-500/30 text-amber-400 text-xs font-serif font-bold">
                                    {prop.price}
                                </div>
                            </div>

                            <div className="p-6">
                                <span className="text-[10px] font-mono tracking-widest uppercase text-amber-400/70 block mb-1">
                                    {prop.location}
                                </span>
                                <h3 className="text-xl font-serif font-light text-amber-50 mb-2">
                                    {prop.title}
                                </h3>
                                <p className="text-xs text-neutral-400 mb-6 font-mono">
                                    {prop.specs}
                                </p>

                                <a
                                    href="https://api.whatsapp.com/message/CSJUP7QRLQFYL1?autoload=1&app_absent=0"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block w-full py-3 text-center border border-amber-900/60 text-amber-300 hover:bg-amber-400 hover:text-black transition-all text-xs uppercase tracking-widest font-semibold rounded"
                                >
                                    Inquire via WhatsApp
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Direct Consultation CTA */}
            <section className="py-24 px-6 max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-5xl font-serif font-light text-amber-50 mb-6">
                    Private Estate Consultation
                </h2>
                <p className="text-neutral-400 text-sm mb-8 max-w-md mx-auto">
                    Connect directly with our luxury real estate portfolio director on WhatsApp for off-market listings.
                </p>
                <a
                    href="https://api.whatsapp.com/message/CSJUP7QRLQFYL1?autoload=1&app_absent=0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-10 py-5 bg-amber-400 text-black font-bold uppercase tracking-widest text-xs rounded hover:bg-amber-300 transition-colors shadow-2xl shadow-amber-950"
                >
                    Contact Senior Advisor (+91 85508 83051)
                </a>
            </section>
        </div>
    );
}
