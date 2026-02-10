"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import GlassCard from "./ui/glass-card";

const features = [
    {
        title: "Limitless Speed",
        description: "NVMe SSD storage & Edge CDN for instant load times.",
        stat: "0.1s",
        statLabel: "TTFB",
    },
    {
        title: "Fortress Security",
        description: "Enterprise-grade DDoS protection & WAF.",
        stat: "24/7",
        statLabel: "Monitoring",
    },
    {
        title: "Uptime Guarantee",
        description: "Redundant infrastructure ensuring you're always online.",
        stat: "99.9%",
        statLabel: "SLA",
    },
];

export default function WebHosting() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

    return (
        <section ref={containerRef} className="py-32 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-accent/5 -skew-y-3 transform origin-top-left z-0 pointer-events-none opacity-20" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row items-end justify-between mb-20">
                    <div className="max-w-2xl">
                        <span className="text-accent uppercase tracking-widest text-sm font-bold mb-4 block">Infrastructure</span>
                        <h2 className="text-4xl md:text-6xl font-serif text-white leading-tight">
                            Powering Your <br />
                            <span className="text-white/50 italic">Digital Empire</span>
                        </h2>
                    </div>
                    <p className="text-white/60 max-w-md mt-6 md:mt-0">
                        Our premium hosting infrastructure is engineered for speed, security, and scale. Built for brands that cannot afford downtime.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {features.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            style={{ y: idx % 2 === 0 ? 0 : y }} // Parallax effect on middle card? or just simple stagger
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.2, duration: 0.8 }}
                        >
                            <GlassCard className="h-full group hover:bg-white/10 transition-colors">
                                <div className="mb-8">
                                    <div className="text-5xl font-serif text-accent mb-2">{feature.stat}</div>
                                    <div className="text-xs uppercase tracking-widest text-white/40">{feature.statLabel}</div>
                                </div>
                                <h3 className="text-2xl text-white mb-3">{feature.title}</h3>
                                <p className="text-white/60 text-sm leading-relaxed">{feature.description}</p>
                            </GlassCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
