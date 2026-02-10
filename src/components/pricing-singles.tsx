"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const SINGLES = [
    {
        name: "Premium One-Page Website",
        price: "7,999",
        desc: "Ultra-luxury single page with WhatsApp integration.",
        audience: "Small shops, personal brands"
    },
    {
        name: "Multi-Page Business Website",
        price: "14,999",
        desc: "4–6 pages, glassmorphism UI, contact forms.",
        audience: "Growing businesses"
    },
    {
        name: "Portfolio / Showcase Website",
        price: "9,999",
        desc: "Case study layout optimized for sharing.",
        audience: "Designers, freelancers"
    },
    {
        name: "Logo & Brand Starter",
        price: "4,999",
        desc: "Custom logo, brand colors, font pairing.",
        audience: "New ventures"
    },
    {
        name: "WhatsApp Automation",
        price: "3,999",
        desc: "Auto-reply flow, business hours, FAQ logic.",
        audience: "Service businesses"
    }
];

export default function PricingSingles() {
    return (
        <section className="py-24 px-4 md:px-12 max-w-7xl mx-auto border-t border-white/5">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-serif text-primary mb-2">À La Carte Services</h2>
                <p className="text-secondary/50 text-sm uppercase tracking-widest">Specific solutions for specific needs</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {SINGLES.map((item, i) => (
                    <a
                        key={i}
                        href={`https://api.whatsapp.com/send/?phone=919901981097&text=Hi%20Velora%2C%20I%27m%20interested%20in%20the%20${encodeURIComponent(item.name)}.&type=phone_number&app_absent=0`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative p-8 border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] hover:border-white/10 transition-all duration-300 flex flex-col items-start gap-4"
                    >
                        <div className="flex justify-between items-start w-full">
                            <h3 className="text-lg font-serif text-primary group-hover:text-accent transition-colors max-w-[70%]">
                                {item.name}
                            </h3>
                            <ArrowUpRight className="w-4 h-4 text-white/20 group-hover:text-accent transition-colors opacity-0 group-hover:opacity-100" />
                        </div>

                        <div className="text-2xl font-light text-white font-sans tracking-tight">
                            <span className="text-sm opacity-40 mr-1 font-serif">₹</span>{item.price}
                        </div>

                        <p className="text-secondary/60 text-sm font-light leading-relaxed">
                            {item.desc}
                        </p>

                        <div className="mt-auto pt-4 w-full border-t border-white/5">
                            <span className="text-[10px] uppercase tracking-wider text-secondary/40">
                                Best for: {item.audience}
                            </span>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
}
