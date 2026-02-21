"use client";

import { motion } from "framer-motion";
import Pricing from "@/components/pricing";
import PricingSingles from "@/components/pricing-singles";
import PricingBuilder from "@/components/pricing-builder";
import GlassCard from "@/components/ui/glass-card";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PricingPage() {
    return (
        <main className="pt-32 pb-20 px-0 relative overflow-hidden">

            {/* Nav Back */}
            <div className="absolute top-24 left-6 md:left-12 z-20">
                <Link href="/" className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-secondary/50 hover:text-accent transition-colors">
                    <ArrowLeft className="w-3 h-3" />
                    Home
                </Link>
            </div>

            <section className="text-center mb-24 max-w-7xl mx-auto px-6">
                <div className="mb-6">
                    <span className="text-[10px] font-sans font-bold uppercase tracking-[0.25em] text-accent/80 border border-accent/20 px-4 py-2 rounded-full inline-block backdrop-blur-sm bg-accent/[0.05]">
                        Strategic Value
                    </span>
                </div>
                <motion.h1
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-5xl md:text-8xl font-serif text-primary mb-8 tracking-tight font-light"
                >
                    Investment <br /><span className="italic text-secondary/50 font-extralight">Architecture</span>
                </motion.h1>
                <p className="text-secondary/70 font-sans font-light tracking-wide max-w-2xl mx-auto text-lg leading-relaxed">
                    Transparent pricing for digital systems engineered to generate compounding returns.
                </p>
            </section>

            {/* 1. Main Bundles */}
            <div className="mb-20">
                <Pricing />
            </div>

            {/* 2. Enterprise Banner */}
            <section className="py-20 px-6">
                <div className="max-w-5xl mx-auto">
                    <div className="relative rounded-2xl border border-white/10 overflow-hidden bg-black/40 backdrop-blur-sm">
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80"></div>

                        <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center p-10 md:p-14">

                            {/* LEFT SIDE */}
                            <div>
                                <h3 className="text-3xl font-serif text-white mb-2">Enterprise Systems</h3>
                                <p className="text-white/60 font-light max-w-lg">
                                    Fully customized digital infrastructure.
                                </p>
                            </div>

                            {/* RIGHT SIDE */}
                            <div className="md:text-right">
                                <p className="text-sm tracking-widest text-accent uppercase">
                                    Starting From
                                </p>

                                <p className="text-4xl md:text-5xl font-serif text-white mt-2">
                                    ₹59,999
                                </p>

                                <a
                                    href="https://api.whatsapp.com/send/?phone=919901981097&text=Hi%20Velora%2C%20I%27d%20like%20to%20discuss%20an%20Enterprise%20Custom%20Build.&type=phone_number&app_absent=0"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <button className="mt-6 border border-white/20 px-6 py-3 rounded-full text-sm tracking-wide hover:bg-white hover:text-black transition text-white">
                                        Inquire Directly
                                    </button>
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Custom Builder */}
            <div className="mb-20 bg-gradient-to-b from-transparent via-white/[0.01] to-transparent">
                <PricingBuilder />
            </div>

            {/* 4. Single Services */}
            <div className="mb-20">
                <PricingSingles />
            </div>

            {/* FAQ Section */}
            <section className="max-w-3xl mx-auto px-6 mb-24">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-serif text-white">Frequently Asked Questions</h2>
                </div>

                <div className="space-y-4">
                    {[
                        { q: "Do you provide support?", a: "Yes, all plans come with dedicated support (15-30 days) to ensure everything runs smoothly." },
                        { q: "How long does it take?", a: "Essential plans usually launch in under a week. Growth plans take about 7-10 days." },
                        { q: "Is hosting included?", a: "We provide hosted solutions and guide you through domain setup. Maintenance plans are available." },
                        { q: "Can I upgrade later?", a: "Absolutely. Our systems are scalable. You can move from Starter to Growth or Enterprise at any time." }
                    ].map((faq, i) => (
                        <GlassCard key={i} className="p-6 cursor-default hover:bg-white/[0.02]">
                            <h3 className="text-lg text-white font-serif mb-2">{faq.q}</h3>
                            <p className="text-white/60 text-sm font-light leading-relaxed">{faq.a}</p>
                        </GlassCard>
                    ))}
                </div>
            </section>
        </main>
    );
}
