"use client";

import GlassCard from "./ui/glass-card";
import MagneticButton from "./ui/magnetic-button";
import { ArrowUpRight } from "lucide-react";

const plans = [
    {
        name: "Starter System",
        price: "12,999",
        description: "For local businesses starting online.",
        features: [
            "1-page premium website",
            "WhatsApp integration",
            "Basic logo (text-based)",
            "Google Business setup",
            "10-day support"
        ],
        recommended: false,
        id: "starter"
    },
    {
        name: "Growth System",
        price: "24,999",
        description: "For restaurants, real estate, clinics.",
        features: [
            "4–6 page premium website",
            "Custom logo design",
            "WhatsApp automation",
            "Lead capture forms",
            "Google Business optimization",
            "SEO-ready structure",
            "30-day support"
        ],
        recommended: true,
        id: "growth"
    },
    {
        name: "Authority System",
        price: "39,999",
        description: "For high-value brands & founders.",
        features: [
            "Fully custom website",
            "Brand identity kit",
            "Advanced WhatsApp automation",
            "Portfolio / case study section",
            "Analytics setup",
            "SEO foundation",
            "Priority delivery",
            "45-day support"
        ],
        recommended: false,
        id: "authority"
    }
];

export default function Pricing() {
    return (
        <section className="py-24 px-5 md:px-12 max-w-7xl mx-auto relative z-10">
            {/* Background elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 blur-[120px] rounded-full pointer-events-none -z-10" />

            <div className="text-center mb-20">
                <span className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-accent/80 border border-accent/20 px-4 py-2 rounded-full mb-6 inline-block backdrop-blur-sm bg-accent/[0.05]">
                    System Bundles
                </span>
                <h2 className="text-4xl md:text-5xl font-serif text-primary tracking-tight">Choice of <span className="italic text-secondary/60 font-light">Power</span></h2>
                <p className="text-secondary/60 mt-6 font-light tracking-wide max-w-lg mx-auto leading-relaxed">
                    Every system is built for performance, scalability, and long-term growth. Choose a ready system or build your own.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch relative">
                {plans.map((plan, index) => (
                    <GlassCard
                        key={index}
                        className={`h-full flex flex-col p-8 transition-all duration-500 ${plan.recommended
                            ? 'border-accent/40 bg-accent/[0.03] shadow-[0_0_50px_rgba(191,163,106,0.1)] scale-105 z-10'
                            : 'border-white/10 hover:border-white/20'
                            }`}
                        hoverEffect={true}
                    >
                        {plan.recommended && (
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-black text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-[0.2em] shadow-lg shadow-accent/20 whitespace-nowrap">
                                Most Popular
                            </div>
                        )}

                        <div className="mb-8 text-center md:text-left">
                            <h3 className="text-xl font-serif text-primary mb-2 tracking-tight">{plan.name}</h3>
                            <p className="text-secondary/50 text-xs uppercase tracking-wider mb-6 h-8">{plan.description}</p>
                            <div className="text-4xl md:text-5xl font-sans font-light text-primary tracking-tight">
                                <span className="text-lg opacity-40 mr-1 font-serif">₹</span>
                                {plan.price}
                            </div>
                        </div>

                        <div className="w-full h-[1px] bg-white/5 mb-8" />

                        <ul className="flex flex-col gap-5 mb-10 w-full text-left flex-grow">
                            {plan.features.map((feat, i) => (
                                <li key={i} className="flex items-start gap-3 text-secondary/80 text-sm font-light tracking-wide leading-relaxed">
                                    <span className={`mt-1.5 w-1 h-1 rounded-full shrink-0 ${plan.recommended ? 'bg-accent' : 'bg-white/30'}`} />
                                    {feat}
                                </li>
                            ))}
                        </ul>

                        <a
                            href={`https://api.whatsapp.com/send/?phone=919901981097&text=Hi%20Velora%2C%20I&apos;m%20interested%20in%20the%20${encodeURIComponent(plan.name)}.&type=phone_number&app_absent=0`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-auto block"
                        >
                            <MagneticButton className={`w-full py-4 rounded-none text-xs font-bold uppercase tracking-[0.2em] transition-all border flex items-center justify-center gap-2 ${plan.recommended
                                ? 'bg-accent text-black border-accent hover:bg-white hover:text-black hover:border-white'
                                : 'bg-transparent text-white border-white/10 hover:bg-white/5 hover:border-white/30'
                                }`}>
                                <span>Select System</span>
                                <ArrowUpRight className="w-3 h-3" />
                            </MagneticButton>
                        </a>
                    </GlassCard>
                ))}
            </div>
        </section>
    );
}
