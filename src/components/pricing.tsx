"use client";

import GlassCard from "./ui/glass-card";
import MagneticButton from "./ui/magnetic-button";
import { ArrowUpRight } from "lucide-react";

const starterPlans = [
    {
        name: "Essential Launch",
        price: "6,999",
        description: "Foundational digital presence for emerging brands.",
        features: [
            "2–3 Web Pages",
            "Premium UI Design",
            "Mobile Optimization",
            "Basic Contact Form",
            "WhatsApp Integration",
            "Basic On-Page SEO",
            "Launch Deployment",
            "Free Hosting Supported",
            "Custom Domain Available"
        ],
        recommended: false,
        id: "starter-essential",
        delivery: "7–10 Days"
    },
    {
        name: "Business Foundation",
        price: "9,999",
        description: "Conversion-focused layout for growth.",
        features: [
            "3–5 Web Pages",
            "Conversion-Focused Layout",
            "Contact & Lead Form",
            "WhatsApp Automation (Basic)",
            "SEO Setup",
            "Performance Optimization",
            "Personalized Domain Setup",
            "Launch & Configuration"
        ],
        recommended: true,
        id: "starter-business",
        delivery: "14 Days"
    },
    {
        name: "Professional Presence",
        price: "14,999",
        description: "Structured architecture for professionals.",
        features: [
            "5–6 Pages",
            "Structured Service Architecture",
            "Portfolio / Showcase Section",
            "Lead Capture System",
            "Analytics Integration",
            "SEO + Schema Basics",
            "Custom Domain Setup",
            "Deployment & Optimization"
        ],
        recommended: false,
        id: "starter-professional",
        delivery: "21 Days"
    }
];

const growthPlans = [
    {
        name: "Growth System",
        price: "24,999",
        description: "For restaurants, real estate, clinics ready to scale.",
        features: [
            "6–8 Page Premium Build",
            "Advanced Animations",
            "Custom Logic / Calculators",
            "WhatsApp Automation (Advanced)",
            "Lead Database Integration",
            "Google Map & Review Sync",
            "Priority Support (30 Days)"
        ],
        recommended: false,
        id: "growth-system"
    },
    {
        name: "Authority System",
        price: "39,999",
        description: "For high-value brands & founders demanding dominance.",
        features: [
            "Fully Custom Architecture",
            "Brand Identity Kit",
            "Complex Integrations (CRM/API)",
            "CMS for Content Management",
            "Advanced Analytics Dashboard",
            "Complete SEO Foundation",
            "Priority Delivery",
            "45-Day Support"
        ],
        recommended: false,
        id: "authority-system"
    }
];

const PricingCard = ({ plan }: { plan: any }) => (
    <GlassCard
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
            <p className="text-secondary/50 text-xs uppercase tracking-wider mb-6 min-h-[32px]">{plan.description}</p>
            <div className="text-4xl md:text-5xl font-sans font-light text-primary tracking-tight">
                <span className="text-lg opacity-40 mr-1 font-serif">₹</span>
                {plan.price}
            </div>
            {plan.delivery && (
                <div className="mt-2 text-[10px] text-accent/60 uppercase tracking-widest font-medium">
                    Delivery: {plan.delivery}
                </div>
            )}
        </div>

        <div className="w-full h-[1px] bg-white/5 mb-8" />

        <ul className="flex flex-col gap-5 mb-10 w-full text-left flex-grow">
            {plan.features.map((feat: string, i: number) => (
                <li key={i} className="flex items-start gap-3 text-secondary/80 text-sm font-light tracking-wide leading-relaxed">
                    <span className={`mt-1.5 w-1 h-1 rounded-full shrink-0 ${plan.recommended ? 'bg-accent' : 'bg-white/30'}`} />
                    {feat}
                </li>
            ))}
        </ul>

        {plan.id.includes('starter') && (
            <p className="text-[10px] text-secondary/30 mb-4 italic text-center">
                *Domain charges paid by client
            </p>
        )}

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
);

export default function Pricing() {
    return (
        <section className="py-24 px-5 md:px-12 max-w-7xl mx-auto relative z-10">
            {/* Background elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 blur-[120px] rounded-full pointer-events-none -z-10" />

            {/* SECTION 1: STARTER SYSTEMS */}
            <div className="text-center mb-16">
                <span className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-accent/80 border border-accent/20 px-4 py-2 rounded-full mb-6 inline-block backdrop-blur-sm bg-accent/[0.05]">
                    Starter Systems
                </span>
                <h2 className="text-3xl md:text-5xl font-serif text-primary tracking-tight">Foundational Digital Presence</h2>
                <p className="text-secondary/60 mt-4 font-light tracking-wide max-w-lg mx-auto">
                    For emerging brands ready to make their mark.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch relative mb-32">
                {starterPlans.map((plan, index) => (
                    <PricingCard key={index} plan={plan} />
                ))}
            </div>

            {/* DIVIDER */}
            <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-accent/20 to-transparent mb-24" />

            {/* SECTION 2: GROWTH SYSTEMS */}
            <div className="text-center mb-16">
                <span className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-accent/80 border border-accent/20 px-4 py-2 rounded-full mb-6 inline-block backdrop-blur-sm bg-accent/[0.05]">
                    Growth Systems
                </span>
                <h2 className="text-3xl md:text-5xl font-serif text-primary tracking-tight">Engineered for Scale</h2>
                <p className="text-secondary/60 mt-4 font-light tracking-wide max-w-lg mx-auto">
                    Robust infrastructure for brands ready to dominate their market.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch relative max-w-5xl mx-auto mb-24">
                {growthPlans.map((plan, index) => (
                    <PricingCard key={index} plan={plan} />
                ))}
            </div>

            {/* POSITIONING LINE */}
            <div className="text-center mt-32 border-t border-white/5 pt-12">
                <p className="text-xl md:text-2xl font-serif text-accent/60 italic">
                    &quot;We don&apos;t build websites. We engineer growth systems.&quot;
                </p>
            </div>

        </section>
    );
}
