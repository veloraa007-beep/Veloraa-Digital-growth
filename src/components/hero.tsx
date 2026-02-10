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

            // Word-by-word reveal for ultra luxury feel
            titleLinesRef.current.forEach((line, index) => {
                if (line) {
                    tl.fromTo(
                        line,
                        { y: 100, opacity: 0, clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)" },
                        { y: 0, opacity: 1, duration: 1.8, clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)" },
                        index * 0.3
                    );
                }
            });

            tl.fromTo(
                subtextRef.current,
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 1.2 },
                "-=0.6"
            )
                .fromTo(
                    ctaRef.current,
                    { y: 20, opacity: 0 },
                    { y: 0, opacity: 1, duration: 1.2 },
                    "-=0.8"
                );

            // Parallax Effect - Optimized for Performance
            // Removed expensive backgroundPosition animation that triggers paints
            // Using transform-only animations if needed, but keeping simpler for now to ensure 60FPS
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
            className="relative flex flex-col items-center justify-center overflow-hidden perf-contain min-h-[90vh] md:min-h-screen px-6 pt-32 pb-24 md:pt-32 md:pb-24"
        >

            {/* Layer 1 → Deep charcoal gradient (Static, GPU friendly) */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0F] via-[#111117] to-[#0A0A0E] -z-30 will-change-transform" />

            {/* Layer 2 → Radial Gradient (Replaces heavy blur) */}
            {/* Desktop: Minimal radial glow */}
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none -z-20 hidden md:block"
                style={{
                    width: '900px',
                    height: '700px',
                    background: 'radial-gradient(circle at center, rgba(198,169,107,0.08), transparent 60%)',
                    willChange: 'transform'
                }}
            />
            {/* Mobile: No background blur/glow as requested */}

            {/* Layer 3 → Grain (Optimized opacity) */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none -z-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />

            <div className="text-center z-[2] flex flex-col items-center w-full relative">

                {/* HEADLINE BLOCK */}
                <div className="flex flex-col items-center mb-8 md:mb-16 w-full max-w-[90%] md:max-w-[900px]">
                    <h1 ref={addToTitleRefs} className="font-serif text-primary text-center font-light leading-[1.15] md:leading-[0.9] drop-shadow-2xl">
                        <span className="block text-[clamp(2.2rem,8vw,3rem)] md:text-[clamp(3rem,6vw,4rem)] lg:text-[clamp(4rem,5vw,6rem)]">
                            Invisible
                        </span>
                        <span className="block text-[clamp(2.2rem,8vw,3rem)] md:text-[clamp(3rem,6vw,4rem)] lg:text-[clamp(4rem,5vw,6rem)] font-medium">
                            <span className="italic text-secondary/70 font-light text-[0.6em] mr-2 md:mr-4">Digital</span>
                            Excellence
                        </span>
                    </h1>
                </div>

                {/* SUBTEXT */}
                <p
                    ref={subtextRef}
                    className="text-base md:text-xl text-secondary font-light max-w-[90%] md:max-w-2xl leading-relaxed md:leading-loose mb-10 md:mb-16 tracking-wide"
                >
                    We engineer premium digital infrastructure for ambitious brands.
                    <span className="hidden md:inline"> </span>
                    Merging systems thinking with high-end aesthetics.
                </p>

                {/* CTA BUTTONS - Vertical Mobile, Inline Desktop */}
                <div ref={ctaRef} className="flex flex-col md:flex-row gap-6 md:gap-12 items-center w-full max-w-sm md:max-w-none">
                    <Link href="/services" className="w-full md:w-auto">
                        <MagneticButton
                            className="group relative w-full md:w-auto px-12 py-4 md:py-5 bg-accent/90 text-black rounded-none text-[10px] md:text-xs font-bold uppercase tracking-[0.25em] overflow-hidden transition-transform duration-300 hover:-translate-y-1 block text-center"
                            // Removed backdrop-filter, heavy shadows
                            style={{ willChange: 'transform' }}
                        >
                            Explore Services
                        </MagneticButton>
                    </Link>

                    <Link href="/contact" className="w-full md:w-auto">
                        <MagneticButton
                            className="group relative w-full md:w-auto px-12 py-4 md:py-5 bg-white/[0.05] border border-white/10 text-white rounded-none text-[10px] md:text-xs font-bold uppercase tracking-[0.25em] transition-transform duration-300 hover:border-accent hover:text-accent hover:-translate-y-1 block text-center"
                            style={{ willChange: 'transform' }}
                        >
                            Book Strategy Call
                        </MagneticButton>
                    </Link>
                </div>
            </div>

            {/* SCROLL INDICATOR - Z-Index 1 (Lower than content) */}
            <div className="absolute bottom-[40px] left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-[1] mix-blend-normal pointer-events-none opacity-50">
                <span className="text-[8px] uppercase tracking-[0.3em] text-[#C6A96B] font-medium">Scroll</span>
                <div className="relative flex flex-col items-center h-16 md:h-20">
                    <div className="w-[1px] h-full bg-gradient-to-b from-[#C6A96B]/60 to-transparent" />
                </div>
            </div>

        </section>
    );
}
