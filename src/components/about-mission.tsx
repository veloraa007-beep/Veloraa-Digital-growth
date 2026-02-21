"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Layers, TrendingUp } from "lucide-react";
import GlassCard from "./ui/glass-card";

export default function AboutMission() {
    return (
        <section className="py-20 px-5 md:px-12 max-w-7xl mx-auto">
            {/* MISSION */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-5xl font-serif text-white mb-6">Our Mission</h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="space-y-6"
                >
                    <div className="flex items-start gap-4 p-4 border border-white/5 rounded-lg bg-white/[0.02]">
                        <span className="text-accent text-3xl font-serif mt-[-8px]">01</span>
                        <p className="text-white/80 font-light">Transform local businesses into scalable digital brands.</p>
                    </div>
                    <div className="flex items-start gap-4 p-4 border border-white/5 rounded-lg bg-white/[0.02]">
                        <span className="text-accent text-3xl font-serif mt-[-8px]">02</span>
                        <p className="text-white/80 font-light">Move businesses from <span className="text-white">local</span> → <span className="text-white">regional</span> → <span className="text-white">national</span> → <span className="text-white">global</span>.</p>
                    </div>
                    <div className="flex items-start gap-4 p-4 border border-white/5 rounded-lg bg-white/[0.02]">
                        <span className="text-accent text-3xl font-serif mt-[-8px]">03</span>
                        <p className="text-white/80 font-light">Provide premium systems (not just sites) at practical price points for small businesses.</p>
                    </div>
                </motion.div>
            </div>

            {/* TRUST BADGES */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                    {
                        icon: ShieldCheck,
                        title: "Secure",
                        desc: "Security-first architecture"
                    },
                    {
                        icon: Layers,
                        title: "Structured",
                        desc: "Systems, not one-off builds"
                    },
                    {
                        icon: TrendingUp,
                        title: "Scalable",
                        desc: "Built to grow with you"
                    }
                ].map((item, i) => (
                    <GlassCard
                        key={i}
                        className="py-8 px-6 text-center flex flex-col items-center gap-4"
                        hoverEffect={true}
                    >
                        <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-2">
                            <item.icon className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-serif text-white">{item.title}</h3>
                        <p className="text-secondary/60 text-sm uppercase tracking-wider">{item.desc}</p>
                    </GlassCard>
                ))}
            </div>
        </section>
    );
}
