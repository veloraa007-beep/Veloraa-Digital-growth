"use client";

import React from "react";

export default function AgencyLanding() {
    const whatsappLink = "https://api.whatsapp.com/message/CSJUP7QRLQFYL1?autoload=1&app_absent=0";

    return (
        <div className="bg-[#05060A] text-[#E6E8F0] min-h-screen font-sans selection:bg-[#4F46E5] selection:text-white">
            <header className="fixed top-0 left-0 right-0 z-50 px-8 py-6 flex justify-between items-center bg-[#05060A]/80 backdrop-blur border-b border-[#4F46E5]/20">
                <span className="text-xl font-mono text-[#818CF8] font-bold">ADSPACE OPERATING SYSTEM</span>
                <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2 bg-[#4F46E5] text-white text-xs font-mono font-bold uppercase tracking-widest rounded hover:bg-[#6366F1] transition-colors"
                >
                    Deploy Growth Engine
                </a>
            </header>

            <section className="relative min-h-[90vh] flex flex-col justify-center items-center px-6 pt-32 pb-16 text-center border-b border-[#4F46E5]/20">
                <span className="text-xs font-mono tracking-[0.3em] uppercase text-[#818CF8] mb-6">
                    ✦ VELORA WORK EXPERIENCE · AUTOMATION-FIRST AGENCY SYSTEM
                </span>
                <h1 className="text-5xl md:text-8xl font-serif text-white font-light mb-6">
                    ADSPACE AGENCY ENGINE
                </h1>
                <p className="text-lg md:text-xl font-mono text-[#9CA3AF] max-w-2xl mx-auto mb-10">
                    "AI-Driven Client Acquisition, Automated Funnels & Multi-Channel Performance Scaling for High-Growth Brands."
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl w-full my-12 text-center">
                    <div className="p-4 rounded bg-[#0B0F19] border border-[#4F46E5]/20">
                        <div className="text-3xl font-mono text-[#818CF8]">4.8x</div>
                        <div className="text-xs uppercase text-neutral-400 font-mono">Average ROAS Delivered</div>
                    </div>
                    <div className="p-4 rounded bg-[#0B0F19] border border-[#4F46E5]/20">
                        <div className="text-3xl font-mono text-[#818CF8]">$42M+</div>
                        <div className="text-xs uppercase text-neutral-400 font-mono">Managed Ad Spend</div>
                    </div>
                    <div className="p-4 rounded bg-[#0B0F19] border border-[#4F46E5]/20">
                        <div className="text-3xl font-mono text-[#818CF8]">0</div>
                        <div className="text-xs uppercase text-neutral-400 font-mono">Manual Operations</div>
                    </div>
                    <div className="p-4 rounded bg-[#0B0F19] border border-[#4F46E5]/20">
                        <div className="text-3xl font-mono text-[#818CF8]">24/7</div>
                        <div className="text-xs uppercase text-neutral-400 font-mono">Real-Time Dashboards</div>
                    </div>
                </div>

                <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-10 py-5 bg-[#4F46E5] text-white font-mono font-bold uppercase tracking-widest text-xs rounded hover:bg-[#6366F1] transition-colors shadow-2xl shadow-indigo-900/50"
                >
                    Request Agency Growth Proposal via WhatsApp (+91 85508 83051)
                </a>
            </section>

            <footer className="py-12 text-center text-xs text-neutral-500 font-mono">
                <p>&copy; {new Date().getFullYear()} AdSpace Agency Systems. Engineered by VELORA Digital Infrastructure.</p>
            </footer>
        </div>
    );
}
