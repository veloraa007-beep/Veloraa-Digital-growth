"use client";

import React from "react";

export default function CoffeeLanding() {
    const whatsappLink = "https://wa.me/918550883051";

    return (
        <div className="bg-[#0D0B09] text-[#F3EFEA] min-h-screen font-sans selection:bg-[#C29B72] selection:text-black">
            {/* Header */}
            <header className="fixed top-0 left-0 right-0 z-50 px-8 py-6 flex justify-between items-center bg-[#0D0B09]/80 backdrop-blur border-b border-[#C29B72]/15">
                <span className="text-xl font-serif text-[#C29B72] font-bold">GRANUM ROASTERS</span>
                <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2 bg-[#C29B72] text-black text-xs font-bold uppercase tracking-widest rounded hover:bg-[#D8B48B] transition-colors"
                >
                    Order Beans via WhatsApp
                </a>
            </header>

            {/* Hero */}
            <section className="relative min-h-[90vh] flex flex-col justify-center items-center px-6 pt-32 pb-16 text-center border-b border-[#C29B72]/15">
                <span className="text-xs font-mono tracking-[0.3em] uppercase text-[#C29B72] mb-6">
                    ✦ VELORA WORK EXPERIENCE · ARTISAN COFFEE & SUBSCRIPTIONS
                </span>
                <h1 className="text-5xl md:text-8xl font-serif text-[#F3EFEA] font-light mb-6">
                    GRANUM COFFEE ROASTERS
                </h1>
                <p className="text-lg md:text-xl font-serif italic text-[#A39B92] max-w-2xl mx-auto mb-10">
                    "Single-Origin Single-Estate Micro-Lot Beans Roasted Daily in Small Batches."
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl w-full my-12 text-center">
                    <div className="p-4 rounded bg-[#161310] border border-[#C29B72]/10">
                        <div className="text-3xl font-serif text-[#C29B72]">100%</div>
                        <div className="text-xs uppercase text-neutral-400 font-mono">Arabica Specialty</div>
                    </div>
                    <div className="p-4 rounded bg-[#161310] border border-[#C29B72]/10">
                        <div className="text-3xl font-serif text-[#C29B72]">88+</div>
                        <div className="text-xs uppercase text-neutral-400 font-mono">SCA Cupping Score</div>
                    </div>
                    <div className="p-4 rounded bg-[#161310] border border-[#C29B72]/10">
                        <div className="text-3xl font-serif text-[#C29B72]">Direct</div>
                        <div className="text-xs uppercase text-neutral-400 font-mono">Farmer Trade</div>
                    </div>
                    <div className="p-4 rounded bg-[#161310] border border-[#C29B72]/10">
                        <div className="text-3xl font-serif text-[#C29B72]">24h</div>
                        <div className="text-xs uppercase text-neutral-400 font-mono">Roast-to-Ship</div>
                    </div>
                </div>

                <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-10 py-5 bg-[#C29B72] text-black font-bold uppercase tracking-widest text-xs rounded hover:bg-[#D8B48B] transition-colors"
                >
                    Subscribe to Roaster's Choice on WhatsApp (+91 85508 83051)
                </a>
            </section>

            {/* Micro-Lots */}
            <section className="py-24 px-6 max-w-6xl mx-auto text-center border-b border-[#C29B72]/15">
                <span className="text-xs font-mono tracking-widest text-[#C29B72] block mb-4">CURRENT ROASTS</span>
                <h2 className="text-3xl md:text-5xl font-serif mb-16">Active Micro-Lot Harvests</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                    <div className="p-8 rounded bg-[#161310] border border-[#C29B72]/20">
                        <div className="text-xs font-mono text-[#C29B72] mb-2">ETHIOPIA YIRGACHEFFE</div>
                        <h3 className="text-xl font-serif mb-2">Jasmine & Bergamot</h3>
                        <p className="text-xs text-neutral-400 mb-6">Washed process · Altitude 2,100m · Notes of Peach & Wild Honey</p>
                        <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="text-xs font-mono uppercase text-[#C29B72] hover:underline">Order Bag →</a>
                    </div>
                    <div className="p-8 rounded bg-[#161310] border border-[#C29B72]/20">
                        <div className="text-xs font-mono text-[#C29B72] mb-2">COLOMBIA GEISHA</div>
                        <h3 className="text-xl font-serif mb-2">Tropical Nectar</h3>
                        <p className="text-xs text-neutral-400 mb-6">Anaerobic Fermentation · Notes of Mango, Guava & Black Tea</p>
                        <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="text-xs font-mono uppercase text-[#C29B72] hover:underline">Order Bag →</a>
                    </div>
                    <div className="p-8 rounded bg-[#161310] border border-[#C29B72]/20">
                        <div className="text-xs font-mono text-[#C29B72] mb-2">COSTA RICA TARRAZÚ</div>
                        <h3 className="text-xl font-serif mb-2">Dark Chocolate & Cacao</h3>
                        <p className="text-xs text-neutral-400 mb-6">Honey Process · Notes of Toasted Almond, Praline & Plum</p>
                        <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="text-xs font-mono uppercase text-[#C29B72] hover:underline">Order Bag →</a>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 text-center text-xs text-[#A39B92]">
                <p>&copy; {new Date().getFullYear()} Granum Coffee Roasters. Engineered by VELORA Digital Systems.</p>
            </footer>
        </div>
    );
}
