"use client";

import Link from "next/link";
import { ArrowLeft, MessageCircle, Mail } from "lucide-react";

export default function Contact() {
    return (
        <main className="min-h-screen bg-background pt-32 pb-24 px-6 md:px-12 relative overflow-hidden flex flex-col justify-center">
            {/* Background Effects */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-4xl mx-auto w-full relative z-10 text-center">

                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-secondary hover:text-accent transition-colors mb-12 text-xs uppercase tracking-[0.2em]"
                >
                    <ArrowLeft className="w-3 h-3" />
                    Back to Home
                </Link>

                <h1 className="text-5xl md:text-8xl font-serif text-primary mb-8 tracking-tight leading-[0.9] font-light">
                    Let&apos;s Engineer <br />
                    <span className="text-accent italic font-extralight opacity-80">Dominance.</span>
                </h1>

                <p className="text-secondary/80 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed mb-16 tracking-wide">
                    Velora partners with select brands to build high-performance digital systems.
                    Skip the formalities—chat with us directly to discuss your vision.
                </p>

                <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                    <a
                        href="https://api.whatsapp.com/send/?phone=919901981097&text=Hi%20Velora%2C%20I%27d%20like%20to%20discuss%20a%20project.&type=phone_number&app_absent=0"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative px-10 py-5 bg-accent/90 text-black overflow-hidden transition-all hover:bg-white min-w-[280px] backdrop-blur-sm"
                    >
                        <div className="relative z-10 flex items-center justify-center gap-3 font-sans font-bold uppercase tracking-[0.2em] text-[10px]">
                            <MessageCircle className="w-4 h-4" />
                            <span>Start on WhatsApp</span>
                        </div>
                    </a>

                    <a
                        href="mailto:veloraa007@gmail.com"
                        className="group relative px-10 py-5 bg-transparent border border-white/10 text-primary overflow-hidden transition-all hover:border-accent hover:text-accent min-w-[280px]"
                    >
                        <div className="relative z-10 flex items-center justify-center gap-3 font-sans font-bold uppercase tracking-[0.2em] text-[10px]">
                            <Mail className="w-4 h-4" />
                            <span>Email Us</span>
                        </div>
                    </a>
                </div>

                <div className="mt-24 pt-12 border-t border-white/5">
                    <p className="text-secondary/50 text-xs uppercase tracking-widest mb-4">Direct Line</p>
                    <a href="tel:+919901981097" className="text-2xl md:text-3xl font-serif text-primary hover:text-accent transition-colors">
                        +91 99019 81097
                    </a>
                    <p className="text-secondary/50 text-xs mt-4">Bangalore, India</p>
                </div>

            </div>
        </main>
    );
}
