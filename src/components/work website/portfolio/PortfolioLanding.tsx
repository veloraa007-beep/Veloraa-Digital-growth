"use client";

import React from "react";

export default function PortfolioLanding() {
    const whatsappLink = "https://wa.me/918550883051";

    return (
        <div className="bg-[#0A0A0B] text-[#F1F1F3] min-h-screen font-sans selection:bg-[#E2B859] selection:text-black">
            <header className="fixed top-0 left-0 right-0 z-50 px-8 py-6 flex justify-between items-center bg-[#0A0A0B]/80 backdrop-blur border-b border-[#E2B859]/15">
                <span className="text-xl font-serif text-[#E2B859] font-bold">ALEX GRAHAM</span>
                <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2 bg-[#E2B859] text-black text-xs font-bold uppercase tracking-widest rounded hover:bg-[#F3C96A] transition-colors"
                >
                    Book Private Advisory
                </a>
            </header>

            <section className="relative min-h-[90vh] flex flex-col justify-center items-center px-6 pt-32 pb-16 text-center border-b border-[#E2B859]/15">
                <span className="text-xs font-mono tracking-[0.3em] uppercase text-[#E2B859] mb-6">
                    ✦ VELORA WORK EXPERIENCE · EXECUTIVE PERSONAL AUTHORITY
                </span>
                <h1 className="text-5xl md:text-8xl font-serif text-[#F1F1F3] font-light mb-6">
                    ALEX GRAHAM
                </h1>
                <p className="text-lg md:text-xl font-serif italic text-neutral-400 max-w-2xl mx-auto mb-10">
                    "Venture Partner, Board Advisor & Fractional Chief Growth Officer for Series-B to IPO Tech Enterprises."
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl w-full my-12 text-center">
                    <div className="p-4 rounded bg-[#131316] border border-[#E2B859]/10">
                        <div className="text-3xl font-serif text-[#E2B859]">$1.2B+</div>
                        <div className="text-xs uppercase text-neutral-400 font-mono">Portfolio Value Created</div>
                    </div>
                    <div className="p-4 rounded bg-[#131316] border border-[#E2B859]/10">
                        <div className="text-3xl font-serif text-[#E2B859]">3</div>
                        <div className="text-xs uppercase text-neutral-400 font-mono">Unicorn Exits Advised</div>
                    </div>
                    <div className="p-4 rounded bg-[#131316] border border-[#E2B859]/10">
                        <div className="text-3xl font-serif text-[#E2B859]">18</div>
                        <div className="text-xs uppercase text-neutral-400 font-mono">Active Board Seats</div>
                    </div>
                    <div className="p-4 rounded bg-[#131316] border border-[#E2B859]/10">
                        <div className="text-3xl font-serif text-[#E2B859]">Top 10</div>
                        <div className="text-xs uppercase text-neutral-400 font-mono">Forbes Global Advisor</div>
                    </div>
                </div>

                <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-10 py-5 bg-[#E2B859] text-black font-bold uppercase tracking-widest text-xs rounded hover:bg-[#F3C96A] transition-colors"
                >
                    Connect Directly via Executive WhatsApp (+91 85508 83051)
                </a>
            </section>

            <footer className="py-12 text-center text-xs text-neutral-500">
                <p>&copy; {new Date().getFullYear()} Alex Graham Advisory. Engineered by VELORA Digital Systems.</p>
            </footer>
        </div>
    );
}
