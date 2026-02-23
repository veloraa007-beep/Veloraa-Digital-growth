"use client";

import { useState, useEffect } from "react";
import { Quote } from "lucide-react";

const testimonials = [
    {
        name: "Arjun Mehta",
        role: "Founder, Scale Digital",
        text: "Velora didn't just build us a website — they engineered an entire digital system. Our lead generation increased by 340% within the first quarter.",
        rating: 5,
    },
    {
        name: "Priya Sharma",
        role: "CEO, Bloom Interiors",
        text: "The attention to detail is extraordinary. Every animation, every interaction feels intentional. Our clients are constantly impressed by the quality.",
        rating: 5,
    },
    {
        name: "Rahul Krishnan",
        role: "Director, CloudStack Solutions",
        text: "Working with Velora felt like working with a top Silicon Valley agency, but with the personal touch and dedication of a boutique studio. Exceptional work.",
        rating: 5,
    },
    {
        name: "Sneha Patel",
        role: "Founder, Artisan Roasters",
        text: "Our e-commerce platform went from zero to processing 500+ orders per month within weeks of launch. The ROI speaks for itself.",
        rating: 5,
    },
    {
        name: "Vikram Reddy",
        role: "Managing Partner, Apex Real Estate",
        text: "The WhatsApp automation system alone saved us 20 hours per week in client communications. Velora understands business systems at a fundamental level.",
        rating: 5,
    },
];

export default function Testimonials() {
    const [active, setActive] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setActive((prev) => (prev + 1) % testimonials.length);
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="py-24 px-6 md:px-12 bg-[#0F1113] relative overflow-hidden">
            {/* Subtle background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#C2A35D]/[0.02] rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-3xl mx-auto relative">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#C2A35D]/60 mb-4 block">
                        Client Feedback
                    </span>
                    <h2
                        className="font-serif font-semibold text-[#EAE6DD] tracking-tight leading-[1.1]"
                        style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}
                    >
                        What Our Clients{" "}
                        <span className="italic text-[#EAE6DD]/40 font-light">
                            Say
                        </span>
                    </h2>
                </div>

                {/* Testimonial card */}
                <div className="bg-[#1A1C1E] rounded-2xl border border-[#2A2E30] p-8 md:p-12 min-h-[280px] flex flex-col justify-between">
                    <div>
                        <Quote className="w-8 h-8 text-[#C2A35D]/20 mb-6" />
                        <p
                            className="text-[#EAE6DD]/80 font-light leading-relaxed text-base md:text-lg transition-opacity duration-500"
                            key={active}
                        >
                            &ldquo;{testimonials[active].text}&rdquo;
                        </p>
                    </div>

                    <div className="mt-8 flex items-center justify-between">
                        <div>
                            <p className="text-[#EAE6DD] font-medium text-sm">
                                {testimonials[active].name}
                            </p>
                            <p className="text-[#A8A39B]/50 text-xs font-light mt-0.5">
                                {testimonials[active].role}
                            </p>
                        </div>
                        <div className="flex gap-1">
                            {Array.from({ length: 5 }).map((_, i) => (
                                <span
                                    key={i}
                                    className={`text-xs ${i < testimonials[active].rating
                                            ? "text-[#C2A35D]"
                                            : "text-[#2A2E30]"
                                        }`}
                                >
                                    ★
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Dots navigation */}
                <div className="flex items-center justify-center gap-2 mt-8">
                    {testimonials.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setActive(i)}
                            className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${i === active
                                    ? "bg-[#C2A35D] w-6"
                                    : "bg-[#2A2E30] hover:bg-[#C2A35D]/30"
                                }`}
                            aria-label={`View testimonial ${i + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
