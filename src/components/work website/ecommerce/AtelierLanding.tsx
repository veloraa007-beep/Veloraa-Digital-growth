"use client";

import React from "react";
import AtelierHero from "./AtelierHero";
import { ATELIER_CONFIG } from "./AtelierConfig";

export default function AtelierLanding() {
    const { products, whatsappLink, phone } = ATELIER_CONFIG;

    return (
        <div className="bg-[#000000] text-white min-h-screen font-sans selection:bg-white selection:text-black">
            {/* Standalone Header */}
            <header className="fixed top-0 left-0 right-0 z-50 px-8 py-6 flex justify-between items-center bg-black/80 backdrop-blur-md border-b border-neutral-900">
                <div className="flex items-center gap-4">
                    <span className="text-xl font-serif tracking-widest text-white font-bold">ATELIER VÉLORA</span>
                    <span className="hidden md:inline-block text-[10px] font-mono tracking-widest text-neutral-500 border-l border-neutral-800 pl-4">
                        MILAN · TOKYO · BANGALORE
                    </span>
                </div>
                <div className="flex items-center gap-6">
                    <a href="#lookbook" className="hidden sm:inline-block text-xs uppercase tracking-widest text-neutral-400 hover:text-white transition-colors">
                        Capsule '26
                    </a>
                    <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2.5 bg-white text-black text-xs font-semibold uppercase tracking-widest rounded hover:bg-neutral-200 transition-colors"
                    >
                        VIP Concierge
                    </a>
                </div>
            </header>

            {/* Hero */}
            <AtelierHero />

            {/* Lookbook / Product Collection Grid */}
            <section id="lookbook" className="py-32 px-6 max-w-7xl mx-auto border-b border-neutral-900">
                <div className="text-center mb-20">
                    <span className="text-xs font-mono tracking-[0.3em] uppercase text-neutral-400 block mb-4">
                        AUTUMN / WINTER EDITION
                    </span>
                    <h2 className="text-3xl md:text-6xl font-serif font-light text-white">
                        The Capsule Collection
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {products.map((item) => (
                        <div
                            key={item.id}
                            className="group bg-neutral-950 border border-neutral-900 rounded-xl overflow-hidden hover:border-neutral-700 transition-all duration-500 flex flex-col justify-between"
                        >
                            <div>
                                <div className="relative h-96 overflow-hidden">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                                    />
                                    <div className="absolute top-4 right-4 px-3 py-1 bg-black/80 text-white text-xs font-mono font-bold border border-neutral-800">
                                        {item.price}
                                    </div>
                                </div>

                                <div className="p-6">
                                    <span className="text-[10px] font-mono tracking-widest uppercase text-neutral-500 block mb-1">
                                        {item.category}
                                    </span>
                                    <h3 className="text-xl font-serif font-light text-white mb-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-xs text-neutral-400 font-mono mb-6">
                                        {item.material}
                                    </p>
                                </div>
                            </div>

                            <div className="p-6 pt-0">
                                <a
                                    href={whatsappLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block w-full py-3.5 text-center border border-white text-white hover:bg-white hover:text-black transition-all text-xs uppercase tracking-widest font-semibold rounded"
                                >
                                    Order via WhatsApp
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Craftsmanship & Material Standards */}
            <section className="py-32 px-6 max-w-5xl mx-auto text-center border-b border-neutral-900">
                <span className="text-xs font-mono tracking-[0.3em] uppercase text-neutral-400 block mb-4">
                    MATERIA PRIMA
                </span>
                <h2 className="text-3xl md:text-5xl font-serif font-light text-white mb-8">
                    "Sculpted with Zero Compromise."
                </h2>
                <p className="text-base md:text-lg text-neutral-400 font-serif italic max-w-3xl mx-auto leading-relaxed mb-12">
                    Every garment is individually cut and stitched by master artisans in Milan and Tokyo. We utilize organic, ethically-harvested heavy wools, raw selvedge denims, and custom-cast titanium hardware designed to last generations.
                </p>
            </section>

            {/* Direct VIP Ordering & Fitting Concierge */}
            <section className="py-32 px-6 max-w-4xl mx-auto text-center">
                <div className="p-12 rounded-2xl bg-neutral-950 border border-neutral-800 shadow-2xl">
                    <span className="text-xs font-mono tracking-[0.3em] uppercase text-neutral-400 block mb-4">
                        PRIVATE FITTING & CONCIERGE
                    </span>
                    <h2 className="text-3xl md:text-5xl font-serif font-light text-white mb-6">
                        Reserve Your Private Fitting
                    </h2>
                    <p className="text-neutral-400 text-sm max-w-md mx-auto mb-8">
                        Connect with our private stylist on WhatsApp to request size recommendations, bespoke alterations, or home fittings.
                    </p>
                    <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-10 py-5 bg-white text-black font-bold uppercase tracking-[0.2em] text-xs rounded hover:bg-neutral-200 transition-all"
                    >
                        Connect on WhatsApp ({phone})
                    </a>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-16 px-6 border-t border-neutral-900 text-center text-xs text-neutral-500">
                <p className="font-serif text-white text-lg mb-2">ATELIER VÉLORA</p>
                <p className="text-[10px] uppercase tracking-widest text-neutral-600">
                    &copy; {new Date().getFullYear()} Atelier Velora Luxury Group. Engineered by VELORA Digital Infrastructure.
                </p>
            </footer>
        </div>
    );
}
