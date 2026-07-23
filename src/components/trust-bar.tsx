"use client";

import React from "react";
import { ShieldCheck, Award, Cpu, Lock, Zap, Code2 } from "lucide-react";

const trustItems = [
    { icon: Award, label: "MSME Registered Enterprise" },
    { icon: ShieldCheck, label: "Made in India · Bangalore Engine" },
    { icon: Cpu, label: "AI-Powered Development" },
    { icon: Lock, label: "Security-First Engineering" },
    { icon: Zap, label: "Performance Optimized (Sub-Second Load)" },
    { icon: Code2, label: "Modern Next.js Stack" },
];

export default function TrustBar() {
    return (
        <div className="w-full bg-[#0A0D0B]/80 backdrop-blur-md border-y border-accent/20 py-4 overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12 text-xs font-mono tracking-widest text-secondary/80 uppercase">
                    {trustItems.map((item, idx) => {
                        const Icon = item.icon;
                        return (
                            <div
                                key={idx}
                                className="flex items-center gap-2.5 hover:text-accent transition-colors duration-300 group cursor-default"
                            >
                                <Icon className="w-4 h-4 text-accent/70 group-hover:text-accent transition-colors" />
                                <span>{item.label}</span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
