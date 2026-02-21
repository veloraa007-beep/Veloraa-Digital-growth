"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function AboutFounderHero() {
    const scrollToStory = () => {
        document.getElementById('founder-story')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="pt-32 pb-20 px-5 md:px-12 max-w-7xl mx-auto">
            {/* HERO SECTION */}
            <div className="text-center md:text-left mb-24">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-6xl font-serif text-white mb-6 leading-tight"
                >
                    Built by a <span className="text-secondary opacity-80 italic">Cybersecurity Mindset.</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-lg md:text-xl text-white/60 font-light max-w-3xl leading-relaxed"
                >
                    &ldquo;Most agencies design for looks. We engineer for longevity, performance, and protection.&rdquo;
                </motion.p>
            </div>

            {/* FOUNDER BLOCK */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start max-w-6xl mx-auto">
                {/* LEFT: IMAGE */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="relative group w-full max-w-[420px] mx-auto md:mx-0"
                >
                    <div className="relative overflow-hidden rounded-2xl shadow-2xl shadow-black/50 border border-white/5 aspect-[4/5] bg-neutral-900">
                        <Image
                            src="/images/founder.jpg"
                            alt="Founder — Dhanush Gangadhar, Velora"
                            fill
                            className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                            priority
                        />
                    </div>

                    {/* Compact Intro Card */}
                    <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[90%] md:w-[85%] bg-black/80 backdrop-blur-md border border-white/10 p-5 rounded-xl text-center shadow-xl">
                        <div className="text-white font-serif text-lg tracking-wide">Founder of Velora</div>
                        <div className="text-[10px] uppercase tracking-wider text-secondary/60 mt-1 font-medium">
                            18-Year-Old Entrepreneur • Engineering Student • Cybersecurity Enthusiast
                        </div>
                    </div>
                </motion.div>

                {/* RIGHT: CONTENT */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="flex flex-col justify-center h-full pt-8 md:pt-12"
                >
                    <div className="self-start mb-8">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold uppercase tracking-[0.15em]">
                            18-Year-Old Founder — Built like an attacker thinks
                        </span>
                    </div>

                    <p className="text-xl md:text-2xl font-serif text-white/90 leading-relaxed mb-10">
                        Velora was founded with a simple realization: large enterprises win because they engineer systems — not just websites. <br />
                        <span className="text-white/50 italic">Small businesses deserve that same infrastructure.</span>
                    </p>

                    <button
                        onClick={scrollToStory}
                        aria-label="Read full founder story"
                        className="self-start px-8 py-4 bg-accent text-black rounded-full font-bold uppercase tracking-widest text-xs hover:bg-white hover:shadow-[0_0_20px_rgba(197,162,83,0.3)] transition-all duration-300 flex items-center gap-3 group"
                    >
                        <span>Read Full Story</span>
                        <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
