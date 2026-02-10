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
            <section className="px-4 md:px-12 max-w-7xl mx-auto mb-32">
                <div className="relative p-8 md:p-12 border border-white/5 rounded-2xl overflow-hidden bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2301&auto=format&fit=crop')] bg-cover bg-center">
                    <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
                        <div>
                            <h3 className="text-3xl font-serif text-white mb-2">Crown Enterprise Build</h3>
                            <p className="text-white/60 font-light max-w-lg">
                                For those who need everything customizable. CRM, funnels, complex integrations, and multi-language support.
                            </p>
                        </div>
                        <div className="flex flex-col items-center md:items-end gap-2">
                            <span className="text-sm uppercase tracking-widest text-accent">Starting from</span>
                            <span className="text-4xl font-serif text-white">₹59,999</span>
                            <a
                                href="https://api.whatsapp.com/send/?phone=919901981097&text=Hi%20Velora%2C%20I%27d%20like%20to%20discuss%20an%20Enterprise%20Custom%20Build.&type=phone_number&app_absent=0"
                                className="mt-2 text-xs font-bold uppercase tracking-[0.2em] border-b border-white hover:border-accent hover:text-accent transition-colors pb-1"
                            >
                                Inquire Directly
                            </a>
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
