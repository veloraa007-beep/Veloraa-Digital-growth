"use client";

import React from "react";
import { ShieldCheck, Cpu, Server, Zap, Globe2, Award, Lock, FileCheck } from "lucide-react";

const credibilityCards = [
    {
        icon: Lock,
        badge: "CYBERSECURITY MINDSET",
        title: "Security-First Engineering",
        description: "Hardened server configurations, DDoS protection, edge authorization, and strict environment variable isolation."
    },
    {
        icon: Cpu,
        badge: "AI INTEGRATION",
        title: "AI-Powered Automation",
        description: "Intelligent lead qualification, automated WhatsApp notifications, and zero-latency operational pipelines built from day one."
    },
    {
        icon: Server,
        badge: "EDGE ARCHITECTURE",
        title: "Modern Infrastructure",
        description: "Deployed on high-availability edge networks (Vercel, Cloudflare CDN) with 99.9% uptime guarantees and redundant routing."
    },
    {
        icon: Zap,
        badge: "SPEED & CWV",
        title: "Performance Optimized",
        description: "Engineered for sub-second load times, clean React component architecture, and 100/100 Core Web Vitals compliance."
    },
    {
        icon: Globe2,
        badge: "BANGALORE HQ",
        title: "Indian Enterprise",
        description: "Designed, engineered, and operated in Bangalore, India, adhering to international software quality standards."
    }
];

export default function TrustAuthoritySection() {
    return (
        <section className="w-full px-6 md:px-12 lg:px-24 py-24 md:py-36 bg-[#070809] border-t border-accent/15 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-accent/5 rounded-full blur-[150px] pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10">
                {/* 1. Header & Authority Statement */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[10px] font-mono tracking-[0.25em] text-accent bg-accent/10 border border-accent/30 uppercase mb-6">
                        <Award className="w-3.5 h-3.5" />
                        REGISTERED ENTERPRISE · BUILT ON TRUST
                    </span>

                    <h2
                        className="font-serif text-primary leading-[1.15] tracking-tight mb-6 font-light"
                        style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)" }}
                    >
                        Engineered for Reliability. <br />
                        <span className="italic text-primary/50 font-extralight">Digital Systems Built to Last.</span>
                    </h2>

                    <p className="text-secondary/70 text-base md:text-lg font-serif italic font-light leading-relaxed">
                        "Built for businesses that value long-term digital growth. Engineered with performance, security, and scalability from the ground up."
                    </p>
                </div>

                {/* 2. Official Registration & Government Accreditation Bar */}
                <div className="mb-20 p-8 rounded-2xl bg-background/60 border border-accent/20 backdrop-blur-md">
                    <div className="text-center mb-6">
                        <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-accent/80">
                            OFFICIAL ENTERPRISE ACCREDITATIONS
                        </span>
                    </div>

                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
                        {/* MSME Official Badge */}
                        <div className="flex items-center gap-3 p-4 rounded-xl bg-accent/5 border border-accent/30">
                            <FileCheck className="w-6 h-6 text-accent" />
                            <div className="text-left">
                                <div className="text-xs font-bold font-sans text-primary tracking-wide">MSME REGISTERED ENTERPRISE</div>
                                <div className="text-[10px] font-mono text-secondary/60">Govt. of India Certified Micro/Small Enterprise</div>
                            </div>
                        </div>

                        {/* Made in India Badge */}
                        <div className="flex items-center gap-3 p-4 rounded-xl bg-accent/5 border border-accent/30">
                            <Award className="w-6 h-6 text-accent" />
                            <div className="text-left">
                                <div className="text-xs font-bold font-sans text-primary tracking-wide">INDIAN ENTERPRISE</div>
                                <div className="text-[10px] font-mono text-secondary/60">Engineered & Operated in Bangalore</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 3. Credibility Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {credibilityCards.map((card, idx) => {
                        const Icon = card.icon;
                        return (
                            <div
                                key={idx}
                                className="p-8 rounded-2xl bg-background/40 border border-white/5 hover:border-accent/40 transition-all duration-500 group flex flex-col justify-between"
                            >
                                <div>
                                    <div className="flex justify-between items-center mb-6">
                                        <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-black transition-all">
                                            <Icon className="w-5 h-5" />
                                        </div>
                                        <span className="text-[9px] font-mono text-accent/60 tracking-widest uppercase">
                                            {card.badge}
                                        </span>
                                    </div>

                                    <h3 className="text-xl font-serif text-primary font-light mb-3">
                                        {card.title}
                                    </h3>

                                    <p className="text-secondary/60 text-xs leading-relaxed font-light">
                                        {card.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
