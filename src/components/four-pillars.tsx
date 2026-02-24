import React from "react";
import { Shield, Cpu, Zap, Activity } from "lucide-react";

export default function FourPillars() {
    const pillars = [
        {
            title: "Resilient Infrastructure",
            description: "Systems engineered for absolute stability. Zero downtime architecture.",
            icon: <Shield className="w-8 h-8 text-accent" />,
        },
        {
            title: "Algorithmic Precision",
            description: "Data-driven logic that eliminates human error and accelerates output.",
            icon: <Cpu className="w-8 h-8 text-accent" />,
        },
        {
            title: "Kinetic Performance",
            description: "Sub-second response times. Performance built in, not bolted on.",
            icon: <Zap className="w-8 h-8 text-accent" />,
        },
        {
            title: "Continuous Evolution",
            description: "Living systems that adapt, scale, and improve autonomously.",
            icon: <Activity className="w-8 h-8 text-accent" />,
        },
    ];

    return (
        <section className="py-24 bg-background relative w-full flex justify-center">
            <div className="max-w-[1200px] w-[90%] flex flex-col items-center">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-serif text-primary mb-6">
                        The Structural Foundation
                    </h2>
                    <p className="text-secondary max-w-2xl mx-auto text-lg leading-relaxed">
                        Every system we design is supported by four immutable pillars of engineering excellence.
                    </p>
                </div>

                {/* Pillars Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 w-full">
                    {pillars.map((pillar, index) => (
                        <div key={index} className="flex flex-col items-center text-center group">
                            {/* Icon Container with Gold Line */}
                            <div className="mb-8 relative flex flex-col items-center w-full">
                                <div className="p-4 bg-surface border border-accent/20 rounded-full mb-6 group-hover:border-accent transition-colors duration-500">
                                    {pillar.icon}
                                </div>
                                {/* Horizontal Minimal Gold Line under Icon */}
                                <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-accent/50 to-transparent"></div>
                            </div>

                            <h3 className="text-xl font-serif text-primary mb-4">{pillar.title}</h3>
                            <p className="text-secondary text-sm leading-relaxed max-w-[240px]">
                                {pillar.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
