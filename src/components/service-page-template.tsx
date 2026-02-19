"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Check, ArrowRight } from "lucide-react";
import { fadeIn, staggerContainer } from "@/lib/animations";

interface ProcessStep {
    number: string;
    title: string;
    description: string;
}

interface ServicePageProps {
    title: string;
    description: string;
    heroImage: string;
    offerings: string[];
    techStack?: string[];
    process: ProcessStep[];
    ctaTitle?: string;
    children?: React.ReactNode;
}

export default function ServicePageTemplate({
    title,
    description,
    heroImage,
    offerings,
    techStack,
    process,
    ctaTitle = "Ready to Build Your System?",
    children,
}: ServicePageProps) {
    return (
        <main className="min-h-screen bg-background text-primary selection:bg-accent selection:text-black">
            {/* NAVIGATION BACK */}
            <div className="fixed top-6 left-6 z-50">
                <Link
                    href="/"
                    className="flex items-center gap-2 text-sm uppercase tracking-widest text-secondary hover:text-white transition-colors group"
                >
                    <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                    Back
                </Link>
            </div>

            {/* HERO SECTION */}
            <section className="relative h-[70vh] flex items-end pb-20 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src={heroImage}
                        alt={title}
                        fill
                        className="object-cover opacity-60"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        initial="hidden"
                        animate="show"
                        variants={staggerContainer}
                        className="max-w-4xl"
                    >
                        <motion.h1
                            variants={fadeIn}
                            className="text-5xl md:text-8xl font-serif text-white mb-6 leading-tight"
                        >
                            {title}
                        </motion.h1>
                        <motion.p
                            variants={fadeIn}
                            className="text-lg md:text-2xl text-secondary max-w-2xl font-light"
                        >
                            {description}
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* OFFERINGS & TECH */}
            <section className="py-20 md:py-32 border-b border-white/5">
                <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 md:gap-32">
                    {/* LEFT: WHAT WE OFFER */}
                    <div>
                        <h2 className="text-3xl font-serif text-white mb-10">What We Offer</h2>
                        <ul className="space-y-6">
                            {offerings.map((offer, index) => (
                                <li key={index} className="flex items-start gap-4 group">
                                    <span className="flex-shrink-0 w-6 h-6 rounded-full border border-white/20 flex items-center justify-center mt-1 group-hover:border-accent group-hover:bg-accent/10 transition-colors">
                                        <Check size={12} className="text-accent" />
                                    </span>
                                    <span className="text-lg text-secondary group-hover:text-white transition-colors">
                                        {offer}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* RIGHT: TECH STACK (Optional) */}
                    {techStack && (
                        <div>
                            <h2 className="text-3xl font-serif text-white mb-10">Tools & Technology</h2>
                            <div className="grid grid-cols-2 gap-4">
                                {techStack.map((tech, index) => (
                                    <div
                                        key={index}
                                        className="p-4 border border-white/5 bg-white/[0.02] text-secondary text-sm uppercase tracking-widest hover:border-white/20 hover:text-white transition-colors text-center"
                                    >
                                        {tech}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </section>

            {/* PROCESS */}
            <section className="py-20 md:py-32 bg-black relative">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-serif text-white mb-16 text-center">Our Process</h2>
                    <div className="grid md:grid-cols-4 gap-8">
                        {process.map((step, index) => (
                            <div key={index} className="group relative">
                                <div className="text-6xl font-serif text-white/5 mb-6 group-hover:text-accent/20 transition-colors">
                                    {step.number}
                                </div>
                                <h3 className="text-xl text-white mb-4">{step.title}</h3>
                                <p className="text-secondary text-sm leading-relaxed border-l border-white/10 pl-4 group-hover:border-accent transition-colors">
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CUSTOM CHILDREN (Sub-page Links) */}
            {children}

            {/* CTA */}
            <section className="py-32 bg-background text-center px-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-accent/5 blur-[100px] rounded-full opacity-20 pointer-events-none" />
                <div className="relative z-10 max-w-3xl mx-auto">
                    <h2 className="text-4xl md:text-6xl font-serif text-white mb-8">
                        {ctaTitle}
                    </h2>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                        <a
                            href="https://api.whatsapp.com/send/?phone=919901981097&text=I%27m+interested+in+building+a+system&type=phone_number&app_absent=0"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-accent text-black px-12 py-4 rounded-none text-sm font-bold uppercase tracking-widest hover:bg-white transition-colors min-w-[200px]"
                        >
                            Start Project
                        </a>
                        <Link
                            href="/contact"
                            className="px-12 py-4 rounded-none text-sm font-bold uppercase tracking-widest text-white border border-white/20 hover:border-accent hover:text-accent transition-colors min-w-[200px]"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
