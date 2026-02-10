"use client";

import { motion } from "framer-motion";
import GlassCard from "@/components/ui/glass-card";
import MagneticButton from "@/components/ui/magnetic-button";

export default function AboutPage() {
    return (
        <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
            {/* HERO */}
            <section className="text-center mb-32">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-5xl md:text-7xl font-serif text-white mb-8 tracking-tight"
                >
                    Engineering Digital<br />
                    <span className="text-white/50">Growth Systems</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-white/60 max-w-2xl mx-auto text-lg leading-relaxed"
                >
                    We don&apos;t just build websites. We architect complete digital ecosystems designed to dominate local markets and scale consistently.
                </motion.p>
            </section>

            {/* PHILOSOPHY */}
            <section className="mb-32 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-3xl font-serif text-white mb-6">Our Philosophy</h2>
                    <div className="w-16 h-[1px] bg-gold mb-8 opacity-50" />
                    <p className="text-white/70 leading-relaxed mb-6">
                        In a world of noise, clarity is the ultimate luxury. We believe that true digital power comes from the seamless integration of design, psychology, and automation.
                    </p>
                    <p className="text-white/70 leading-relaxed">
                        Every pixel we place and every line of code we write has a singular purpose: to elevate your brand authority and convert attention into revenue.
                    </p>
                </div>
                <div className="relative">
                    <div className="absolute inset-0 bg-gold/5 blur-[80px] rounded-full" />
                    <GlassCard className="p-8 md:p-12 relative border-gold/20">
                        <h3 className="text-2xl font-serif text-white mb-4">&quot;Luxury is not about excess. It&apos;s about the absence of friction.&quot;</h3>
                        <p className="text-gold text-right uppercase tracking-widest text-sm">— Velora Doctrine</p>
                    </GlassCard>
                </div>
            </section>

            {/* FOUNDER */}
            <section className="mb-32">
                <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden md:p-12 p-8 flex flex-col md:flex-row gap-12 items-center">
                    <div className="w-full md:w-1/3">
                        {/* Placeholder for Founder Image if needed, using a gradient div for now */}
                        <div className="aspect-[3/4] bg-gradient-to-br from-neutral-800 to-black rounded-xl border border-white/10 flex items-center justify-center relative overflow-hidden group">
                            <span className="text-white/20 font-serif text-9xl absolute -bottom-10 -right-10 opacity-50 select-none">V</span>
                        </div>
                    </div>
                    <div className="w-full md:w-2/3">
                        <span className="text-gold uppercase tracking-widest text-xs font-bold mb-2 block">The Architect</span>
                        <h2 className="text-4xl font-serif text-white mb-6">Meet the Founder</h2>
                        <h3 className="text-xl text-white/50 mb-8">18-Year-Old Digital Growth Architect</h3>

                        <p className="text-white/70 leading-relaxed mb-6">
                            Obsessed with automation and scalable systems, I founded Velora to bridge the gap between high-end aesthetics and ruthless performance.
                        </p>
                        <p className="text-white/70 leading-relaxed mb-10">
                            My vision is simple: To provide local businesses with the same caliber of digital infrastructure used by global enterprises.
                        </p>

                        <MagneticButton className="px-8 py-3 bg-white/5 border border-white/10 text-white rounded-full hover:bg-gold hover:text-black hover:border-gold transition-all uppercase text-sm tracking-wider">
                            Read Full Story
                        </MagneticButton>
                    </div>
                </div>
            </section>

            {/* APPROACH */}
            <section className="mb-32">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-serif text-white mb-4">Our Approach</h2>
                    <p className="text-white/50 uppercase tracking-widest text-sm">The 4 Pillars of Velora</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {['Strategy', 'Design', 'Automation', 'Optimization'].map((item, i) => (
                        <GlassCard key={item} className="p-8 text-center hover:bg-white/5 transition-colors" hoverEffect={true}>
                            <div className="text-6xl text-white/5 font-bold mb-4">0{i + 1}</div>
                            <h3 className="text-xl text-white font-serif mb-2">{item}</h3>
                            <p className="text-white/50 text-sm">
                                {item === 'Strategy' && "Market analysis & positioning."}
                                {item === 'Design' && "Visual identity & UI/UX."}
                                {item === 'Automation' && "Streamlined workflows."}
                                {item === 'Optimization' && "Data-driven refinement."}
                            </p>
                        </GlassCard>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="text-center">
                <h2 className="text-4xl font-serif text-white mb-8">Ready to Scale?</h2>
                <a
                    href="https://api.whatsapp.com/send/?phone=919901981097&text&type=phone_number&app_absent=0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-12 py-4 bg-gold text-black text-lg font-bold rounded-full uppercase tracking-wider hover:scale-105 transition-transform shadow-[0_0_40px_rgba(212,175,55,0.3)]"
                >
                    Book a Strategy Call
                </a>
            </section>

        </main>
    );
}
