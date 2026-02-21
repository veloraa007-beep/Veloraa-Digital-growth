"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
    { value: "< 1.8s", label: "Load Speed" },
    { value: "95+", label: "Lighthouse Score" },
    { value: "99.9%", label: "Infrastructure Uptime" },
    { value: "E2E", label: "Encrypted Workflows" },
];

export default function PerformanceProof() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.utils.toArray<HTMLElement>(".perf-stat").forEach((el, i) => {
                gsap.from(el, {
                    y: 30,
                    opacity: 0,
                    duration: 0.8,
                    delay: i * 0.15,
                    scrollTrigger: {
                        trigger: el,
                        start: "top 90%",
                        toggleActions: "play none none reverse",
                    },
                });
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="w-full px-6 md:px-12 lg:px-24 py-20 md:py-32 border-y border-white/5">
            <div className="max-w-5xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="text-[10px] font-sans font-bold uppercase tracking-[0.25em] text-accent/70 mb-6 block">
                        Architecture Standards
                    </span>
                    <h2
                        className="font-serif text-white leading-[1.1] tracking-tight"
                        style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}
                    >
                        Engineered for <span className="italic text-white/40 font-light">Performance</span>
                    </h2>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                    {stats.map((stat, i) => (
                        <div
                            key={i}
                            className="perf-stat text-center p-6 md:p-8 border border-white/5 bg-white/[0.01]"
                        >
                            <div className="text-3xl sm:text-4xl md:text-5xl font-sans font-extralight text-white tracking-tight mb-3">
                                {stat.value}
                            </div>
                            <span className="text-[10px] uppercase tracking-[0.2em] text-secondary/40 font-medium">
                                {stat.label}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Disclaimer */}
                <p className="text-center text-[10px] text-secondary/20 uppercase tracking-widest mt-8">
                    Architecture benchmark — measured across deployed systems
                </p>
            </div>
        </section>
    );
}
