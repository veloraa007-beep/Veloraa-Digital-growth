"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Check, ArrowRight } from "lucide-react";
import { fadeIn, staggerContainer } from "@/lib/animations";

interface ServiceTypeProps {
    category: string;
    categoryLink: string;
    title: string;
    description: string;
    heroImage: string;
    features: string[];
    techStack?: string[];
    targetAudience: string[];
    ctaTitle?: string;
    priceRange?: string;
}

export default function ServiceTypeTemplate({
    category,
    categoryLink,
    title,
    description,
    heroImage,
    features,
    techStack,
    targetAudience,
    ctaTitle = "Start This Project",
    priceRange,
}: ServiceTypeProps) {
    return (
        <main className="min-h-screen bg-background text-primary selection:bg-accent selection:text-black">
            {/* NAVIGATION BACK */}
            <div className="fixed top-6 left-6 z-50">
                <Link
                    href={categoryLink}
                    className="flex items-center gap-2 text-sm uppercase tracking-widest text-secondary hover:text-white transition-colors group bg-black/50 backdrop-blur-md px-4 py-2 rounded-full border border-white/10"
                >
                    <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                    Back to {category}
                </Link>
            </div>

            <div className="container mx-auto px-6 pt-32 pb-20">
                <div className="grid lg:grid-cols-2 gap-16 items-start">

                    {/* LEFT: CONTENT */}
                    <motion.div
                        initial="hidden"
                        animate="show"
                        variants={staggerContainer}
                        className="sticky top-32"
                    >
                        <motion.span variants={fadeIn} className="text-accent text-sm font-bold uppercase tracking-widest mb-4 block">
                            {category}
                        </motion.span>

                        <motion.h1
                            variants={fadeIn}
                            className="text-4xl md:text-6xl font-serif text-white mb-6 leading-tight"
                        >
                            {title}
                        </motion.h1>

                        <motion.p
                            variants={fadeIn}
                            className="text-lg text-secondary leading-relaxed mb-12"
                        >
                            {description}
                        </motion.p>

                        <motion.div variants={fadeIn} className="mb-12">
                            <h3 className="text-white font-serif text-xl mb-6">Best For</h3>
                            <div className="flex flex-wrap gap-3">
                                {targetAudience.map((audience, i) => (
                                    <span key={i} className="px-4 py-2 border border-white/10 rounded-full text-sm text-secondary/80 bg-white/5">
                                        {audience}
                                    </span>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div variants={fadeIn} className="mb-12">
                            <h3 className="text-white font-serif text-xl mb-6">What's Included</h3>
                            <ul className="space-y-4">
                                {features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                                        <span className="text-secondary">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {techStack && (
                            <motion.div variants={fadeIn} className="mb-12">
                                <h3 className="text-white font-serif text-xl mb-6">Powered By</h3>
                                <div className="flex flex-wrap gap-2">
                                    {techStack.map((tech, t) => (
                                        <span key={t} className="text-xs uppercase tracking-wider text-secondary/60 border border-white/5 px-2 py-1">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {priceRange && (
                            <motion.div variants={fadeIn} className="mb-12 p-6 border border-accent/20 bg-accent/5 rounded-lg">
                                <span className="text-xs uppercase tracking-widest text-accent mb-2 block">Starting Investment</span>
                                <span className="text-2xl font-serif text-white">{priceRange}</span>
                            </motion.div>
                        )}

                        <motion.div variants={fadeIn} className="flex gap-4">
                            <a
                                href="https://api.whatsapp.com/send/?phone=919901981097&text=I%27m+interested+in+this+service&type=phone_number&app_absent=0"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-accent text-black px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-white transition-colors"
                            >
                                {ctaTitle}
                            </a>
                        </motion.div>

                    </motion.div>

                    {/* RIGHT: MOCKUP IMAGE */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative aspect-[9/16] md:aspect-auto md:h-[80vh] bg-surface border border-white/5 rounded-2xl overflow-hidden"
                    >
                        <Image
                            src={heroImage}
                            alt={title}
                            fill
                            className="object-cover"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    </motion.div>

                </div>
            </div>
        </main>
    );
}
