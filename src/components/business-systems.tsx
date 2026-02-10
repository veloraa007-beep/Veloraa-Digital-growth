"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GlassCard from "./ui/glass-card";

const systems = [
    {
        id: "crm",
        title: "Eco-System CRM",
        content: "Centralize your client data with our bespoke CRM solutions designed for luxury service providers.",
        image: "linear-gradient(135deg, #1a1a1a, #0B0B0B)"
    },
    {
        id: "auto",
        title: "Workflow Autoscaling",
        content: "Intelligent automation that adapts to your business volume in real-time.",
        image: "linear-gradient(135deg, #2a2a2a, #0B0B0B)"
    },
    {
        id: "ai",
        title: "Predictive AI Models",
        content: "Leverage machine learning to forecast trends and client needs before they arise.",
        image: "linear-gradient(135deg, #1f1f1f, #0B0B0B)"
    }
];

export default function BusinessSystems() {
    const [activeSystem, setActiveSystem] = useState(systems[0]);

    return (
        <section className="py-32 px-4 md:px-12 max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row gap-16">
                {/* Navigation */}
                <div className="md:w-1/3 flex flex-col gap-4">
                    <h2 className="text-4xl font-serif text-white mb-8">System Architecture</h2>
                    {systems.map((system) => (
                        <button
                            key={system.id}
                            onClick={() => setActiveSystem(system)}
                            className={`text-left text-xl p-4 transition-all duration-300 border-l-2 ${activeSystem.id === system.id
                                ? "border-accent text-white pl-8"
                                : "border-white/10 text-white/40 pl-4 hover:text-white/70"
                                }`}
                        >
                            {system.title}
                        </button>
                    ))}
                </div>

                {/* Content Preview */}
                <div className="md:w-2/3 h-[400px] relative">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeSystem.id}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.5 }}
                            className="h-full w-full"
                        >
                            <GlassCard className="h-full flex items-center justify-center p-12">
                                <div
                                    className="absolute inset-0 z-0 opacity-50"
                                    style={{ background: activeSystem.image }}
                                />
                                <div className="relative z-10 text-center max-w-lg">
                                    <h3 className="text-3xl font-serif text-accent mb-6">{activeSystem.title}</h3>
                                    <p className="text-xl text-white/80">{activeSystem.content}</p>
                                </div>
                            </GlassCard>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
