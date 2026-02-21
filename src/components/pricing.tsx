"use client";

import { useState } from "react";
import { ArrowRight, ArrowUpRight, Award, Repeat2 } from "lucide-react";

const tiers = [
    {
        name: "Starter System",
        range: "₹7K – ₹15K",
        description: "Foundational digital presence for emerging brands.",
        layers: [
            { label: "Interface", detail: "2–5 page premium UI" },
            { label: "Security", detail: "SSL + basic hardening" },
            { label: "Automation", detail: "WhatsApp integration" },
            { label: "Scalability", detail: "Free-tier hosting supported" },
        ],
        delivery: "7–14 Days",
        recommended: false,
        hasKit: false,
        id: "starter",
    },
    {
        name: "Business Foundation",
        range: "₹20K – ₹25K",
        description: "Conversion-focused systems for growth-ready businesses.",
        layers: [
            { label: "Interface", detail: "5–8 page conversion architecture" },
            { label: "Security", detail: "Hardened + analytics tracking" },
            { label: "Automation", detail: "WhatsApp + CRM + lead capture" },
            { label: "Scalability", detail: "Cloud hosting + CDN" },
        ],
        delivery: "14–21 Days",
        recommended: true,
        hasKit: false,
        id: "business",
    },
    {
        name: "Authority Infrastructure",
        range: "₹30K – ₹60K",
        description: "Full-stack digital ecosystem for dominant brands.",
        layers: [
            { label: "Interface", detail: "Custom architecture + animations" },
            { label: "Security", detail: "Enterprise-grade protection" },
            { label: "Automation", detail: "CRM + payments + workflow engine" },
            { label: "Scalability", detail: "AWS / Cloud + edge caching" },
        ],
        delivery: "21–45 Days",
        recommended: false,
        hasKit: true,
        id: "authority",
    },
    {
        name: "Enterprise Custom",
        range: "₹95K+",
        description: "Bespoke systems for complex, high-stakes operations.",
        layers: [
            { label: "Interface", detail: "Fully custom + SaaS dashboards" },
            { label: "Security", detail: "Audit-grade + compliance-ready" },
            { label: "Automation", detail: "Full-stack automation engine" },
            { label: "Scalability", detail: "Multi-region cloud infra" },
        ],
        delivery: "Custom Timeline",
        recommended: false,
        hasKit: true,
        id: "enterprise",
    },
];

function PricingCard({ tier }: { tier: typeof tiers[number] }) {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <div
            className="relative w-full cursor-pointer [perspective:2000px]"
            onClick={() => setIsFlipped(!isFlipped)}
        >
            {/* Recommended Badge */}
            {tier.recommended && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10 bg-[#C2A35D] text-black text-[9px] font-bold px-3 py-1 rounded-full uppercase tracking-[0.2em] whitespace-nowrap">
                    Most Popular
                </div>
            )}

            <div
                className={`relative w-full transition-transform duration-600 ease-[cubic-bezier(0.22,1,0.36,1)] [transform-style:preserve-3d] ${isFlipped ? "[transform:rotateY(180deg)]" : ""
                    }`}
                style={{ minHeight: "380px" }}
            >
                {/* ——— FRONT: MRP + Overview ——— */}
                <div
                    className={`absolute inset-0 rounded-2xl bg-[#1A1C1E] p-6 md:p-8 flex flex-col justify-between [backface-visibility:hidden] border ${tier.recommended
                        ? "border-[#C2A35D]/30 shadow-[0_0_40px_rgba(194,163,93,0.08)]"
                        : "border-[#2A2E30] hover:border-[#2A2E30]/80"
                        }`}
                >
                    <div>
                        <div className="flex justify-between items-start">
                            <h3 className="text-lg font-serif font-semibold tracking-tight text-[#EAE6DD]">
                                {tier.name}
                            </h3>
                            <Repeat2 className="h-4 w-4 text-[#C2A35D] shrink-0 mt-1" />
                        </div>

                        <p className="text-xs text-[#A8A39B] mt-2 font-light leading-relaxed">
                            {tier.description}
                        </p>

                        {/* MRP — The Hero */}
                        <div className="mt-8">
                            <div className="text-3xl md:text-4xl font-sans font-extralight text-[#EAE6DD] tracking-tight">
                                {tier.range}
                            </div>
                            <span className="text-[10px] text-[#C2A35D]/60 uppercase tracking-widest font-medium mt-1 block">
                                {tier.delivery}
                            </span>
                        </div>

                        {/* Executive Kit Badge */}
                        {tier.hasKit && (
                            <div className="flex items-center gap-2 mt-6 px-3 py-2 border border-[#C2A35D]/15 bg-[#C2A35D]/[0.04] rounded">
                                <Award className="w-3.5 h-3.5 text-[#C2A35D]/70 shrink-0" />
                                <span className="text-[9px] uppercase tracking-[0.15em] text-[#C2A35D]/60 font-bold">
                                    Includes Executive Kit™
                                </span>
                            </div>
                        )}
                    </div>

                    <div className="mt-6">
                        <div className="h-[1px] w-full bg-[#2A2E30]" />
                        <p className="mt-4 text-sm text-[#C2A35D] flex items-center gap-2">
                            View Details
                            <ArrowRight className="h-3 w-3" />
                        </p>
                    </div>
                </div>

                {/* ——— BACK: Full Details ——— */}
                <div
                    className={`absolute inset-0 rounded-2xl bg-[#1A1C1E] p-6 md:p-8 flex flex-col justify-between [transform:rotateY(180deg)] [backface-visibility:hidden] border ${tier.recommended
                        ? "border-[#C2A35D]/30"
                        : "border-[#2A2E30]"
                        }`}
                >
                    <div>
                        <h3 className="text-lg font-serif font-semibold text-[#EAE6DD] mb-1">
                            {tier.name}
                        </h3>
                        <div className="text-xl font-sans font-extralight text-[#C2A35D] tracking-tight mb-5">
                            {tier.range}
                        </div>

                        <div className="h-[1px] w-full bg-[#2A2E30] mb-5" />

                        {/* System Layers */}
                        <div className="space-y-4">
                            {tier.layers.map((layer, i) => (
                                <div key={i}>
                                    <span className="text-[9px] uppercase tracking-[0.2em] text-[#C2A35D]/50 font-bold block mb-1">
                                        {layer.label}
                                    </span>
                                    <span className="text-[#A8A39B] text-xs font-light leading-relaxed">
                                        {layer.detail}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* CTA */}
                    <a
                        href={`https://api.whatsapp.com/send/?phone=919901981097&text=Hi%20Velora%2C%20I'm%20interested%20in%20the%20${encodeURIComponent(tier.name)}%20system.&type=phone_number&app_absent=0`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-6 block"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div
                            className={`w-full py-3 text-xs font-bold uppercase tracking-[0.2em] transition-all border flex items-center justify-center gap-2 rounded-lg ${tier.recommended
                                ? "bg-[#C2A35D] text-black border-[#C2A35D] hover:bg-[#EAE6DD] hover:border-[#EAE6DD]"
                                : "bg-transparent text-[#EAE6DD] border-[#2A2E30] hover:bg-[#2A2E30]/50 hover:border-[#A8A39B]/30"
                                }`}
                        >
                            <span>Select System</span>
                            <ArrowUpRight className="w-3 h-3" />
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default function Pricing() {
    return (
        <section className="w-full px-6 md:px-12 lg:px-24 py-20 md:py-32 relative bg-[#141618]">
            {/* Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#C2A35D]/5 blur-[120px] rounded-full pointer-events-none -z-10" />

            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="text-[10px] font-sans font-bold uppercase tracking-[0.25em] text-[#C2A35D]/80 border border-[#C2A35D]/20 px-4 py-2 rounded-full mb-8 inline-block bg-[#C2A35D]/[0.05]">
                        Investment Architecture
                    </span>
                    <h2
                        className="font-serif text-[#EAE6DD] leading-[1.1] tracking-tight mb-4"
                        style={{ fontSize: "clamp(1.8rem, 4vw, 3.5rem)" }}
                    >
                        Systems, Not{" "}
                        <span className="italic text-[#EAE6DD]/40 font-light">
                            Pages
                        </span>
                    </h2>
                    <p className="text-[#A8A39B]/70 text-sm max-w-md mx-auto font-light">
                        Tap any card to reveal infrastructure details. Every tier
                        includes security, automation, and scalability.
                    </p>
                </div>

                {/* Pricing Grid — CardFlip */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {tiers.map((tier) => (
                        <PricingCard key={tier.id} tier={tier} />
                    ))}
                </div>

                {/* Bottom Tagline */}
                <div className="text-center mt-16 pt-10 border-t border-[#2A2E30]">
                    <p className="text-lg md:text-xl font-serif text-[#C2A35D]/50 italic">
                        &quot;We don&apos;t build websites. We engineer growth
                        systems.&quot;
                    </p>
                </div>
            </div>
        </section>
    );
}
