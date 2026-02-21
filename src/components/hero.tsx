"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";
import Image from "next/image";
import MagneticButton from "./ui/magnetic-button";

const marqueeItems = [
    "AWS", "Google Cloud", "Azure", "Supabase", "Stripe",
    "Razorpay", "Cloudflare", "Zapier", "Make"
];

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const subtextRef = useRef<HTMLParagraphElement>(null);
    const ctaRef = useRef<HTMLDivElement>(null);
    const taglineRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

            tl.fromTo(taglineRef.current,
                { y: 20, opacity: 0 },
                { y: 0, opacity: 1, duration: 1 }
            )
                .fromTo(titleRef.current,
                    { y: 60, opacity: 0 },
                    { y: 0, opacity: 1, duration: 1.4 },
                    "-=0.6"
                )
                .fromTo(subtextRef.current,
                    { y: 30, opacity: 0 },
                    { y: 0, opacity: 1, duration: 1.2 },
                    "-=0.8"
                )
                .fromTo(ctaRef.current,
                    { y: 20, opacity: 0 },
                    { y: 0, opacity: 1, duration: 1 },
                    "-=0.6"
                );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={containerRef}
            className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative overflow-hidden grain-overlay"
        >
            {/* Cinematic Background Image */}
            <div className="absolute inset-0 -z-40">
                <Image
                    src="/hero-bg.png"
                    alt=""
                    fill
                    priority
                    className="object-cover blur-[3px]"
                    sizes="100vw"
                />
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-[rgba(15,17,19,0.88)]" />
            </div>

            {/* Background — Deep cinematic gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0F1113]/60 via-[#141619]/40 to-[#0D0F11]/80 -z-30" />

            {/* Slow-breathing radial glow */}
            <div
                className="absolute inset-0 pointer-events-none -z-20 gradient-mask-slow"
                style={{
                    background: 'radial-gradient(ellipse 60% 50% at 50% 40%, rgba(194,163,93,0.06), transparent 70%)'
                }}
            />

            {/* Animated gold accent line */}
            <div className="absolute bottom-[72px] left-0 w-full h-[1px] -z-10 overflow-hidden pointer-events-none">
                <div className="h-full w-32 bg-gradient-to-r from-transparent via-[#C2A35D]/30 to-transparent gold-line-animated" />
            </div>

            {/* Main Content */}
            <div className="max-w-[1000px] mx-auto z-[2] flex flex-col items-center pt-24 pb-32">

                {/* Pre-heading */}
                <span
                    ref={taglineRef}
                    className="text-[10px] sm:text-xs tracking-[0.3em] uppercase text-accent/70 mb-8 block font-medium"
                >
                    Digital Growth Infrastructure
                </span>

                {/* Headline */}
                <h1
                    ref={titleRef}
                    className="font-serif leading-[1.05] tracking-[-0.03em] text-primary font-light mb-8"
                    style={{ fontSize: 'clamp(2.2rem, 5vw, 5.5rem)' }}
                >
                    AI-Powered Digital
                    <br />
                    Growth <span className="italic text-white/50 font-extralight">Infrastructure</span>
                </h1>

                {/* Sub-headline */}
                <p className="text-accent/80 font-serif italic text-lg sm:text-xl tracking-wide mb-6">
                    Engineered for Scale. Built for Authority.
                </p>

                {/* Subtext */}
                <p
                    ref={subtextRef}
                    className="text-secondary/60 text-sm sm:text-base tracking-widest uppercase font-light mb-12"
                >
                    Websites · Automation · SaaS Systems · Conversion Architecture
                </p>

                {/* CTA Buttons */}
                <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full">
                    <a
                        href="https://api.whatsapp.com/send/?phone=919901981097&text=Hi%20Velora%2C%20I%27d%20like%20to%20book%20a%20strategy%20call.&type=phone_number&app_absent=0"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto"
                    >
                        <MagneticButton
                            className="w-full sm:min-w-[220px] px-10 py-4 bg-accent text-black font-bold uppercase tracking-[0.2em] text-xs hover:bg-white transition-colors duration-300"
                        >
                            Book Strategy Call
                        </MagneticButton>
                    </a>

                    <Link href="/services" className="w-full sm:w-auto">
                        <MagneticButton
                            className="w-full sm:min-w-[220px] px-10 py-4 border border-white/15 text-white font-bold uppercase tracking-[0.2em] text-xs hover:border-accent hover:text-accent transition-colors duration-300 bg-transparent"
                        >
                            Explore Systems
                        </MagneticButton>
                    </Link>
                </div>
            </div>

            {/* Infrastructure Marquee */}
            <div className="absolute bottom-0 left-0 right-0 border-t border-white/5 bg-black/30 backdrop-blur-sm z-[3]">
                <div className="overflow-hidden py-5">
                    <div className="marquee-track flex gap-16 whitespace-nowrap">
                        {[...marqueeItems, ...marqueeItems].map((item, i) => (
                            <span
                                key={i}
                                className="text-[11px] uppercase tracking-[0.25em] text-white/20 font-medium shrink-0"
                            >
                                {item}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40 z-[1]">
                <span className="text-[9px] uppercase tracking-[0.3em] text-accent">Scroll</span>
                <div className="w-[1px] h-10 bg-gradient-to-b from-accent to-transparent" />
            </div>
        </section>
    );
}
