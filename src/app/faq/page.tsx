import { Metadata } from "next";
import FAQ from "@/components/faq";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
    title: "FAQ — Velora | Frequently Asked Questions",
    description:
        "Answers to common questions about VELORA — what we do, who we serve, our services, project timelines, automation systems, and how to get started.",
    alternates: {
        canonical: "https://velora.digital/faq",
    },
};

export default function FAQPage() {
    return (
        <main className="min-h-screen bg-[#0F1113] pt-32 pb-24 px-6 md:px-12">
            <div className="max-w-3xl mx-auto">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-[#A8A39B]/50 hover:text-[#C2A35D] transition-colors mb-12 text-xs uppercase tracking-[0.2em] font-medium"
                >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    Home
                </Link>

                {/* Header */}
                <div className="mb-8">
                    <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#C2A35D]/60 mb-4 block">
                        Support
                    </span>
                    <h1
                        className="font-serif font-semibold text-[#EAE6DD] tracking-tight leading-[1.1] mb-4"
                        style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
                    >
                        Frequently{" "}
                        <span className="italic text-[#EAE6DD]/40 font-light">
                            Asked Questions
                        </span>
                    </h1>
                    <p className="text-[#A8A39B] text-base leading-relaxed font-light max-w-2xl">
                        Everything you need to know about working with VELORA. Can&apos;t find
                        what you&apos;re looking for?{" "}
                        <Link
                            href="/contact"
                            className="text-[#C2A35D] hover:text-[#C2A35D]/80 transition-colors"
                        >
                            Get in touch
                        </Link>
                        .
                    </p>
                </div>
            </div>

            {/* FAQ Component */}
            <FAQ />
        </main>
    );
}
