"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import MagneticButton from "./ui/magnetic-button";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const titleLinesRef = useRef<(HTMLHeadingElement | null)[]>([]);
    const subtextRef = useRef<HTMLParagraphElement>(null);
    const ctaRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

            // Animate layout elements
            tl.fromTo(titleLinesRef.current,
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 1.5, stagger: 0.2 }
            )
                .fromTo(subtextRef.current,
                    { y: 30, opacity: 0 },
                    { y: 0, opacity: 1, duration: 1.2 },
                    "-=1.0"
                )
                .fromTo(ctaRef.current,
                    { y: 20, opacity: 0 },
                    { y: 0, opacity: 1, duration: 1.2 },
                    "-=0.8"
                );

        }, containerRef);

        return () => ctx.revert();
    }, []);

    const addToTitleRefs = (el: HTMLHeadingElement | null) => {
        if (el && !titleLinesRef.current.includes(el)) {
            titleLinesRef.current.push(el);
        }
    };

    return (
        <section
            ref={containerRef}
            className="min-h-screen flex items-center justify-center text-center px-5 relative overflow-hidden py-16 md:py-24"
        >
            {/* Background → Deep charcoal gradient + Subtle Center Radial */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0F] via-[#111117] to-[#0A0A0E] -z-30" />
            <div
                className="absolute inset-0 pointer-events-none -z-20"
                style={{
                    background: 'radial-gradient(circle at center, rgba(198,167,110,0.08), transparent 60%)'
                }}
            />

            {/* Grain Overlay */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none -z-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />

            <div className="max-w-[900px] mx-auto z-[2] flex flex-col items-center">

                {/* Pre-heading */}
                <span className="text-sm tracking-widest uppercase text-[#C6A96B]/70 mb-6 block">
                    Digital Excellence
                </span>

                {/* Heading */}
                <h1 ref={addToTitleRefs} className="font-serif leading-[1.1] tracking-[-0.02em] text-[clamp(2.4rem,5vw,6rem)] text-primary font-light drop-shadow-2xl">
                    Invisible
                    <br />
                    Excellence
                </h1>

                {/* Subtext */}
                <p
                    ref={subtextRef}
                    className="mt-6 text-base md:text-lg text-white/70 max-w-[650px] mx-auto leading-relaxed"
                >
                    We engineer premium digital infrastructure for ambitious brands.
                    Merging systems thinking with high-end aesthetics.
                </p>

                {/* CTA Buttons - Stacked on Mobile */}
                <div ref={ctaRef} className="flex flex-col md:flex-row gap-4 justify-center items-center mt-10 w-full">
                    <Link href="/services" className="w-full md:w-auto">
                        <MagneticButton
                            className="w-full md:min-w-[200px] max-w-[320px] px-8 py-4 bg-[#C6A76E] text-black font-bold uppercase tracking-[0.2em] text-xs hover:bg-white transition-colors duration-300"
                        >
                            Explore Services
                        </MagneticButton>
                    </Link>

                    <Link href="/contact" className="w-full md:w-auto">
                        <MagneticButton
                            className="w-full md:min-w-[200px] max-w-[320px] px-8 py-4 border border-white/20 text-white font-bold uppercase tracking-[0.2em] text-xs hover:border-[#C6A76E] hover:text-[#C6A76E] transition-colors duration-300 bg-transparent"
                        >
                            Initiate Consultation
                        </MagneticButton>
                    </Link>
                </div>
            </div>

            {/* Scroll Indicator - Bottom Anchored */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 mix-blend-overlay opacity-50 z-[1]">
                <span className="text-[9px] uppercase tracking-[0.3em] text-[#C6A96B]">Scroll</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-[#C6A96B] to-transparent" />
            </div>

        </section>
    );
}
