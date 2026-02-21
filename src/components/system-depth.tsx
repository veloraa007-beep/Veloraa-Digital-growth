"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const layers = [
    {
        title: "Infrastructure Layer",
        items: ["Cloud deployment", "Security hardening", "Domain protection", "CDN + performance tuning"],
    },
    {
        title: "Automation Layer",
        items: ["CRM integration", "Lead routing", "Payment automation", "Workflow triggers"],
    },
    {
        title: "Conversion Layer",
        items: ["Behavior tracking", "Form optimization", "WhatsApp triggers", "Analytics heatmaps"],
    },
    {
        title: "Intelligence Layer",
        items: ["AI content generation", "Predictive workflows", "Smart funnels", "Automated follow-ups"],
    },
];

export default function SystemDepth() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="w-full px-6 md:px-12 lg:px-24 py-20 md:py-32">
            <div className="max-w-5xl mx-auto">
                {/* Header */}
                <div className="mb-16">
                    <span className="text-[10px] font-sans font-bold uppercase tracking-[0.25em] text-accent/70 mb-6 block">
                        System Architecture
                    </span>
                    <h2
                        className="font-serif text-white leading-[1.1] tracking-tight mb-4"
                        style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}
                    >
                        What Actually Happens<br />
                        <span className="italic text-white/40 font-light">Behind the Interface</span>
                    </h2>
                    <p className="text-secondary/50 text-sm max-w-lg font-light leading-relaxed">
                        Every system we deploy is multi-layered. Here&apos;s what runs beneath the surface.
                    </p>
                </div>

                {/* Accordions */}
                <div className="flex flex-col gap-2">
                    {layers.map((layer, i) => {
                        const isOpen = openIndex === i;
                        return (
                            <div key={i} className="border border-white/5 hover:border-white/10 transition-colors">
                                {/* Header */}
                                <button
                                    onClick={() => setOpenIndex(isOpen ? null : i)}
                                    className="w-full flex items-center justify-between p-6 text-left group"
                                >
                                    <div className="flex items-center gap-4">
                                        <span className="text-accent/30 font-serif text-lg font-light">
                                            0{i + 1}
                                        </span>
                                        <h3 className="text-white font-serif text-lg tracking-tight group-hover:text-accent/80 transition-colors">
                                            {layer.title}
                                        </h3>
                                    </div>
                                    <ChevronDown
                                        className={`w-4 h-4 text-white/30 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                                    />
                                </button>

                                {/* Content */}
                                <AnimatePresence>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                            className="overflow-hidden"
                                        >
                                            <div className="px-6 pb-6 pt-2">
                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pl-10">
                                                    {layer.items.map((item, j) => (
                                                        <div
                                                            key={j}
                                                            className="flex items-center gap-3 text-secondary/60 text-sm font-light"
                                                        >
                                                            <span className="w-1 h-1 rounded-full bg-accent/40 shrink-0" />
                                                            {item}
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
