"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
    {
        q: "What is VELORA?",
        a: "VELORA is a digital infrastructure studio that builds secure, scalable, and automated digital systems for businesses. We go beyond traditional web design — we architect complete growth infrastructure including websites, automation pipelines, security layers, and conversion-optimized funnels designed for long-term dominance.",
    },
    {
        q: "What services does VELORA provide?",
        a: "We specialize in premium website development, SaaS platform engineering, WhatsApp & email automation systems, SEO optimization, digital identity systems, lead generation funnels, and NFC/paper business cards. Every solution is custom-engineered with security-first principles — no templates, no shortcuts.",
    },
    {
        q: "Who can work with VELORA?",
        a: "We work with small businesses, clinics, startups, local service companies, and personal brands — anyone who needs a professional digital presence backed by real infrastructure. Whether you're launching your first website or scaling an existing business, Velora is built to meet you where you are.",
    },
    {
        q: "How long does a project usually take?",
        a: "Timelines vary by scope and complexity. A premium website typically takes 2–4 weeks, while SaaS platforms and complex automation systems may take 6–12 weeks. We provide clear milestone schedules during onboarding so you always know where your project stands.",
    },
    {
        q: "How do I start a project with VELORA?",
        a: "Simply reach out via our Contact page, WhatsApp, or email at veloraa007@gmail.com. We'll schedule a free strategy call to understand your needs, define project scope, and propose a tailored solution. From there, we handle everything — from planning to deployment.",
    },
    {
        q: "Do you provide automation systems?",
        a: "Yes. Automation is one of our core strengths. We build custom automation pipelines including WhatsApp auto-responses, email sequences, lead capture funnels, CRM integrations, and workflow automations — all designed to save you time and scale your operations without manual effort.",
    },
    {
        q: "What makes VELORA different from other agencies?",
        a: "Most agencies focus on surface-level design. Velora focuses on infrastructure. Every project is built with cybersecurity-first architecture, scalable backend systems, and automation layers. We think like engineers, not decorators — and that's what gives our clients a lasting competitive advantage.",
    },
    {
        q: "Can VELORA help improve my existing website?",
        a: "Absolutely. We offer website audits, performance optimization, security hardening, and complete redesigns. Whether your site needs faster load times, better SEO, a modern UI overhaul, or backend improvements, we can diagnose the issues and engineer the right solution.",
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
