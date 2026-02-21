"use client";

import GlassCard from "./ui/glass-card";
import MagneticButton from "./ui/magnetic-button";
import { ArrowUpRight, Award } from "lucide-react";

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

export default function Pricing() {
    return (
        <section className="w-full px-6 md:px-12 lg:px-24 py-20 md:py-32 relative">
            {/* Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 blur-[120px] rounded-full pointer-events-none -z-10" />

            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="text-[10px] font-sans font-bold uppercase tracking-[0.25em] text-accent/80 border border-accent/20 px-4 py-2 rounded-full mb-8 inline-block bg-accent/[0.05]">
                        Investment Architecture
                    </span>
                    <h2
                        className="font-serif text-white leading-[1.1] tracking-tight mb-4"
                        style={{ fontSize: 'clamp(1.8rem, 4vw, 3.5rem)' }}
                    >
                        Systems, Not <span className="italic text-white/40 font-light">Pages</span>
                    </h2>
                    <p className="text-secondary/50 text-sm max-w-md mx-auto font-light">
                        Every tier includes infrastructure, security, automation, and scalability.
                    </p>
                </div>

                {/* Pricing Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {tiers.map((tier) => (
                        <GlassCard
                            key={tier.id}
                            className={`h-full flex flex-col p-6 md:p-8 transition-all duration-500 ${tier.recommended
                                    ? 'border-accent/30 bg-accent/[0.03] shadow-[0_0_40px_rgba(191,163,106,0.08)]'
                                    : 'border-white/5 hover:border-white/10'
                                }`}
                            hoverEffect={true}
                        >
                            {tier.recommended && (
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-black text-[9px] font-bold px-3 py-1 rounded-full uppercase tracking-[0.2em] whitespace-nowrap">
                                    Most Popular
                                </div>
                            )}

                            {/* Tier Name */}
                            <h3 className="text-white font-serif text-lg tracking-tight mb-2">{tier.name}</h3>
                            <p className="text-secondary/40 text-xs mb-6 min-h-[32px] font-light">{tier.description}</p>

                            {/* Price Range */}
                            <div className="text-2xl md:text-3xl font-sans font-extralight text-primary tracking-tight mb-2">
                                {tier.range}
                            </div>
                            <span className="text-[10px] text-accent/50 uppercase tracking-widest font-medium mb-6 block">
                                {tier.delivery}
                            </span>

                            {/* Executive Kit Badge */}
                            {tier.hasKit && (
                                <div className="flex items-center gap-2 mb-6 px-3 py-2 border border-accent/15 bg-accent/[0.04] rounded">
                                    <Award className="w-3.5 h-3.5 text-accent/70 shrink-0" />
                                    <span className="text-[9px] uppercase tracking-[0.15em] text-accent/60 font-bold">
                                        Includes Executive Kit™
                                    </span>
                                </div>
                            )}

                            <div className="w-full h-[1px] bg-white/5 mb-6" />

                            {/* System Layers */}
                            <div className="flex flex-col gap-4 flex-grow mb-8">
                                {tier.layers.map((layer, i) => (
                                    <div key={i}>
                                        <span className="text-[9px] uppercase tracking-[0.2em] text-accent/50 font-bold block mb-1">
                                            {layer.label}
                                        </span>
                                        <span className="text-secondary/60 text-xs font-light leading-relaxed">
                                            {layer.detail}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            {/* CTA */}
                            <a
                                href={`https://api.whatsapp.com/send/?phone=919901981097&text=Hi%20Velora%2C%20I'm%20interested%20in%20the%20${encodeURIComponent(tier.name)}%20system.&type=phone_number&app_absent=0`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-auto block"
                            >
                                <MagneticButton
                                    className={`w-full py-3 text-xs font-bold uppercase tracking-[0.2em] transition-all border flex items-center justify-center gap-2 ${tier.recommended
                                            ? 'bg-accent text-black border-accent hover:bg-white hover:border-white'
                                            : 'bg-transparent text-white border-white/10 hover:bg-white/5 hover:border-white/20'
                                        }`}
                                >
                                    <span>Select System</span>
                                    <ArrowUpRight className="w-3 h-3" />
                                </MagneticButton>
                            </a>
                        </GlassCard>
                    ))}
                </div>

                {/* Bottom Tagline */}
                <div className="text-center mt-16 pt-10 border-t border-white/5">
                    <p className="text-lg md:text-xl font-serif text-accent/50 italic">
                        &quot;We don&apos;t build websites. We engineer growth systems.&quot;
                    </p>
                </div>
            </div>
        </section>
    );
}
