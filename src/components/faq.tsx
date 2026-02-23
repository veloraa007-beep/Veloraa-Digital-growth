"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
    {
        q: "What services does Velora offer?",
        a: "We specialize in premium website development, SaaS platform engineering, WhatsApp automation, SEO optimization, digital identity systems, lead funnels, and NFC/paper business cards. Every solution is custom-engineered — no templates.",
    },
    {
        q: "How long does a typical project take?",
        a: "Timelines vary by scope. A premium website typically takes 2–4 weeks, while SaaS platforms and complex systems may take 6–12 weeks. We provide clear milestone schedules during onboarding.",
    },
    {
        q: "What is your pricing structure?",
        a: "We offer transparent, tier-based pricing starting from growth plans for emerging brands to enterprise-level retainer programs. Visit our Pricing page for detailed breakdowns, or schedule a strategy call for a custom quote.",
    },
    {
        q: "Do you offer revisions?",
        a: "Yes. Every project includes up to 2 complimentary revision rounds. Additional revisions can be accommodated at a nominal fee. We want you to love the final result.",
    },
    {
        q: "What is your refund policy?",
        a: "We follow a milestone-based refund structure. Refund eligibility depends on project completion stage — from 85% refund before work begins to 0% after final delivery. Full details are on our Refund Policy page.",
    },
    {
        q: "Do you work with clients outside India?",
        a: "Absolutely. We serve clients globally with seamless remote collaboration. Our infrastructure is built for asynchronous communication and timezone-flexible workflows.",
    },
    {
        q: "What technologies do you use?",
        a: "Our core stack includes Next.js, React, TypeScript, and Tailwind CSS — deployed on Vercel's Edge Network. We also integrate GSAP for animations, Lenis for smooth scrolling, and custom automation pipelines.",
    },
    {
        q: "How do I get started?",
        a: "Simply reach out via our Contact page, WhatsApp, or email at veloraa007@gmail.com. We'll schedule a free strategy call to understand your needs and propose a tailored solution.",
    },
];

export default function FAQ() {
    const [open, setOpen] = useState<number | null>(null);

    return (
        <section className="py-24 px-6 md:px-12 bg-[#0F1113]">
            <div className="max-w-3xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#C2A35D]/60 mb-4 block">
                        Common Questions
                    </span>
                    <h2
                        className="font-serif font-semibold text-[#EAE6DD] tracking-tight leading-[1.1]"
                        style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}
                    >
                        Frequently{" "}
                        <span className="italic text-[#EAE6DD]/40 font-light">
                            Asked
                        </span>
                    </h2>
                </div>

                {/* Accordion */}
                <div className="space-y-2">
                    {faqs.map((faq, i) => (
                        <div
                            key={i}
                            className="border border-[#2A2E30] rounded-xl overflow-hidden transition-colors hover:border-[#C2A35D]/20"
                        >
                            <button
                                onClick={() => setOpen(open === i ? null : i)}
                                className="w-full flex items-center justify-between p-5 md:p-6 text-left cursor-pointer"
                            >
                                <span className="text-sm font-medium text-[#EAE6DD] pr-4 leading-relaxed">
                                    {faq.q}
                                </span>
                                <ChevronDown
                                    className={`w-4 h-4 text-[#C2A35D]/50 shrink-0 transition-transform duration-300 ${open === i ? "rotate-180" : ""
                                        }`}
                                />
                            </button>
                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${open === i
                                        ? "max-h-60 opacity-100"
                                        : "max-h-0 opacity-0"
                                    }`}
                            >
                                <p className="px-5 md:px-6 pb-5 md:pb-6 text-sm text-[#A8A39B]/70 font-light leading-relaxed">
                                    {faq.a}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
