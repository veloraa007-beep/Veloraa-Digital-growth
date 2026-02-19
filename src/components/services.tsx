"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const services = [
    {
        id: "01",
        title: "Brand Strategy",
        description: "We distill your brand's essence into a strategic narrative that resonates with elite audiences. Positioning, voice, and visual identity aligned for maximum authority.",
        tags: ["Identity", "Positioning", "Voice"],
    },
    {
        id: "02",
        title: "Web Experience",
        description: "Engineering immersive digital environments. We merge high-performance code with fluid motion to create websites that feel like interactive cinema.",
        tags: ["Development", "Motion", "3D"],
    },
    {
        id: "03",
        title: "Growth Systems",
        description: "Data-driven infrastructure for scalable acquisition. We build the engines that power your business, from CRM integrations to automated marketing flows.",
        tags: ["Automation", "Analytics", "Scale"],
    },
];

export default function Services() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const items = gsap.utils.toArray<HTMLElement>(".service-item");

            items.forEach((item, i) => {
                gsap.from(item, {
                    y: 50,
                    opacity: 0,
                    duration: 1,
                    scrollTrigger: {
                        trigger: item,
                        start: "top 85%",
                        toggleActions: "play none none reverse",
                    }
                });
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="py-24 md:py-32 bg-background relative overflow-hidden">

            <div className="max-w-7xl mx-auto px-6">

                {/* Section Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
                    <div>
                        <span className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-accent/80 border border-accent/20 px-4 py-2 rounded-full mb-8 inline-block backdrop-blur-sm bg-accent/[0.05]">
                            Our Expertise
                        </span>
                        <h2 className="text-5xl md:text-7xl font-serif text-primary leading-[0.9] tracking-tight">
                            Engineered for <br />
                            <span className="text-secondary/60 italic font-light">Dominance</span>
                        </h2>
                    </div>
                    <div className="max-w-md">
                        <p className="text-secondary text-lg leading-relaxed font-light tracking-wide">
                            Comprehensive digital solutions that bridge the gap between aesthetic luxury and technical performance.
                        </p>
                    </div>
                </div>

                {/* Service List */}
                <div className="flex flex-col">
                    {services.map((service, index) => (
                        <div key={index} className="service-item group relative border-t border-white/5 py-16 transition-colors duration-500 hover:bg-white/[0.01]">
                            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">

                                {/* 01. ID */}
                                <div className="md:col-span-2">
                                    <span className="text-xs font-sans font-medium text-secondary/40 tracking-[0.2em]">
                                        ({service.id})
                                    </span>
                                </div>

                                {/* 02. Title */}
                                <div className="md:col-span-4">
                                    <h3 className="text-3xl md:text-4xl font-serif text-primary group-hover:text-accent transition-colors duration-300 font-normal">
                                        {service.title}
                                    </h3>
                                </div>

                                {/* 03. Description */}
                                <div className="md:col-span-4">
                                    <p className="text-secondary/80 leading-relaxed mb-8 font-light tracking-wide">
                                        {service.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {service.tags.map((tag, t) => (
                                            <span key={t} className="text-[10px] font-sans uppercase tracking-[0.15em] border border-white/5 px-3 py-1.5 rounded-full text-secondary/60 group-hover:border-white/10 transition-colors">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* 04. Arrow */}
                                <div className="md:col-span-2 flex justify-end">
                                    <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all duration-300 transform group-hover:-rotate-45">
                                        <ArrowUpRight className="w-5 h-5 text-white group-hover:text-black" />
                                    </div>
                                </div>

                            </div>
                        </div>
                    ))}
                    {/* Final Border */}
                    <div className="w-full h-[1px] bg-white/10" />
                </div>

                <div className="mt-16 text-center">
                    <Link href="/services" className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-white hover:text-accent transition-colors">
                        View Full Capability Deck
                    </Link>
                </div>

            </div>
        </section>
    );
}
