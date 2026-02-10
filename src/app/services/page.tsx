"use client";

import { motion } from "framer-motion";
import GlassCard from "@/components/ui/glass-card";

const services = [
    {
        title: "Premium Websites",
        desc: "High-performance, visually stunning websites built on Next.js.",
        for: "Brands seeking authority.",
    },
    {
        title: "WhatsApp Automation",
        desc: "Automated customer flows, abandoned cart recovery, and support bots.",
        for: "Businesses needing efficiency.",
    },
    {
        title: "Lead Funnels",
        desc: "Optimized landing pages designed to convert traffic into qualified leads.",
        for: "Aggressive growth goals.",
    },
    {
        title: "SEO Optimization",
        desc: "Technical and content SEO to dominate local search rankings.",
        for: "Long-term organic traffic.",
    },
    {
        title: "Digital Identity",
        desc: "Logo design, color psychology, and brand voice development.",
        for: "New or rebranding businesses.",
    },
    {
        title: "NFC Business Cards",
        desc: "Physical-to-digital bridge for seamless contact sharing.",
        for: "Networking professionals.",
    }
];

export default function ServicesPage() {
    return (
        <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
            {/* HERO */}
            <section className="text-center mb-24">
                <motion.h1
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-5xl md:text-7xl font-serif text-white mb-6"
                >
                    Complete Digital<br /><span className="text-gold">Systems</span>
                </motion.h1>
                <p className="text-white/50 uppercase tracking-widest">From Infrastructure to Automation</p>
            </section>

            {/* SERVICES GRID */}
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
                {services.map((service, index) => (
                    <GlassCard key={index} className="p-8 flex flex-col" hoverEffect={true}>
                        <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-gold font-serif text-xl">
                            {index + 1}
                        </div>
                        <h3 className="text-2xl text-white font-serif mb-4">{service.title}</h3>
                        <p className="text-white/60 mb-6 flex-grow">{service.desc}</p>

                        <div className="border-t border-white/10 pt-4 mt-auto">
                            <span className="text-xs text-white/30 uppercase tracking-widest block mb-2">Best For</span>
                            <span className="text-sm text-white/80">{service.for}</span>
                        </div>
                    </GlassCard>
                ))}
            </section>

            {/* PROCESS */}
            <section className="mb-32">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-serif text-white mb-4">The Process</h2>
                    <p className="text-white/50 uppercase tracking-widest text-sm">How we deliver excellence</p>
                </div>

                <div className="flex flex-col md:flex-row gap-4 justify-between items-center relative">
                    <div className="hidden md:block absolute top-1/2 left-0 right-0 h-[1px] bg-white/10 -z-10" />

                    {['Discovery', 'Build', 'Optimize', 'Scale'].map((step, i) => (
                        <div key={step} className="bg-black border border-white/10 p-6 rounded-xl w-full md:w-64 text-center z-10">
                            <div className="text-gold text-sm font-bold mb-2">PHASE 0{i + 1}</div>
                            <h3 className="text-xl text-white font-serif">{step}</h3>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="bg-white/5 border border-white/10 rounded-2xl p-12 text-center">
                <h2 className="text-3xl font-serif text-white mb-6">Need a custom solution?</h2>
                <a
                    href="/contact"
                    className="inline-block px-8 py-3 bg-transparent border border-white/30 text-white rounded-full hover:bg-white hover:text-black transition-all uppercase text-sm tracking-widest"
                >
                    Lets Discuss
                </a>
            </section>

        </main>
    );
}
