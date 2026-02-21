"use client";

import GlassCard from "./ui/glass-card";
import MagneticButton from "./ui/magnetic-button";
import { ArrowUpRight } from "lucide-react";

const retainerTiers = [
    {
        name: "Growth Maintenance",
        price: "₹4K",
        period: "/ month",
        includes: [
            "Hosting management",
            "Security monitoring",
            "Performance optimization",
            "Minor updates",
        ],
        id: "maintenance",
    },
    {
        name: "Conversion Optimization",
        price: "₹8K",
        period: "/ month",
        includes: [
            "Funnel improvement",
            "A/B testing",
            "Lead tracking",
            "WhatsApp workflow refinement",
        ],
        featured: true,
        id: "conversion",
    },
    {
        name: "Authority Growth",
        price: "₹15K+",
        period: "/ month",
        includes: [
            "SEO scaling",
            "Paid ads integration",
            "Automation expansion",
            "New feature deployment",
        ],
        id: "authority",
    },
];

export default function RetainerProgram() {
    return (
        <section className="w-full px-6 md:px-12 lg:px-24 py-24 md:py-36">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="text-[10px] font-sans font-bold uppercase tracking-[0.25em] text-accent/70 mb-6 block">
                        Ongoing Partnership
                    </span>
                    <h2
                        className="font-serif text-white leading-[1.1] tracking-tight mb-4"
                        style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}
                    >
                        Ongoing Growth &amp;<br />
                        <span className="italic text-white/40 font-light">Optimization</span>
                    </h2>
                    <p className="text-secondary/50 text-sm max-w-md mx-auto font-light leading-relaxed">
                        Infrastructure is built once.<br />
                        Growth is engineered continuously.
                    </p>
                </div>

                {/* Retainer Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {retainerTiers.map((tier) => (
                        <GlassCard
                            key={tier.id}
                            className={`h-full flex flex-col p-6 md:p-8 transition-all duration-500 ${tier.featured
                                    ? 'border-accent/25 bg-accent/[0.03]'
                                    : 'border-white/5 hover:border-white/10'
                                }`}
                            hoverEffect={true}
                        >
                            {tier.featured && (
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-black text-[9px] font-bold px-3 py-1 rounded-full uppercase tracking-[0.2em] whitespace-nowrap">
                                    Recommended
                                </div>
                            )}

                            <h3 className="text-white font-serif text-lg tracking-tight mb-4">{tier.name}</h3>

                            <div className="flex items-baseline gap-1 mb-6">
                                <span className="text-3xl md:text-4xl font-sans font-extralight text-primary tracking-tight">
                                    {tier.price}
                                </span>
                                <span className="text-secondary/40 text-sm font-light">{tier.period}</span>
                            </div>

                            <div className="w-full h-[1px] bg-white/5 mb-6" />

                            <div className="flex flex-col gap-3 flex-grow mb-8">
                                {tier.includes.map((item, i) => (
                                    <div key={i} className="flex items-center gap-3 text-secondary/60 text-sm font-light">
                                        <span className="w-1 h-1 rounded-full bg-accent/40 shrink-0" />
                                        {item}
                                    </div>
                                ))}
                            </div>

                            <a
                                href={`https://api.whatsapp.com/send/?phone=919901981097&text=Hi%20Velora%2C%20I'm%20interested%20in%20the%20${encodeURIComponent(tier.name)}%20retainer.&type=phone_number&app_absent=0`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-auto block"
                            >
                                <MagneticButton
                                    className={`w-full py-3 text-xs font-bold uppercase tracking-[0.2em] transition-all border flex items-center justify-center gap-2 ${tier.featured
                                            ? 'bg-accent text-black border-accent hover:bg-white hover:border-white'
                                            : 'bg-transparent text-white border-white/10 hover:bg-white/5 hover:border-white/20'
                                        }`}
                                >
                                    <span>Start Retainer</span>
                                    <ArrowUpRight className="w-3 h-3" />
                                </MagneticButton>
                            </a>
                        </GlassCard>
                    ))}
                </div>
            </div>
        </section>
    );
}
