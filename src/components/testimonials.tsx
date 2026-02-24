"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
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
        <section className="py-24 px-6 md:px-12 relative overflow-hidden bg-background">
            {/* Texture Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/testimonial_texture.png"
                    alt="Dark Texture Background"
                    fill
                    className="object-cover opacity-60"
                    sizes="100vw"
                />
                <div className="absolute inset-0 bg-background/40 mix-blend-multiply" />
            </div>

            <div className="max-w-4xl mx-auto relative z-10 w-full flex flex-col items-center">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="text-xs font-medium uppercase tracking-[0.3em] text-accent/80 mb-6 block">
                        Client Feedback
                    </span>
                    <h2
                        className="font-serif font-light text-primary tracking-tight leading-[1.1]"
                        style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
                    >
                        What Our Clients{" "}
                        <span className="italic text-primary/40 font-extralight">
                            Say
                        </span>
                    </h2>
                </div>

                {/* Testimonial card */}
                <div className="bg-surface/60 backdrop-blur-md rounded-none border border-accent/20 p-10 md:p-16 min-h-[320px] w-full flex flex-col justify-between hover:border-accent/50 transition-colors duration-500">
                    <div>
                        <Quote className="w-10 h-10 text-accent/30 mb-8" />
                        <p
                            className="text-primary/90 font-light leading-relaxed text-lg md:text-xl transition-opacity duration-500"
                            key={active}
                        >
                            &ldquo;{testimonials[active].text}&rdquo;
                        </p>
                    </div>

                    <div className="mt-12 flex items-center justify-between border-t border-accent/10 pt-6">
                        <div>
                            <p className="text-primary font-medium text-base tracking-wide uppercase">
                                {testimonials[active].name}
                            </p>
                            <p className="text-secondary/70 text-sm font-light mt-1">
                                {testimonials[active].role}
                            </p>
                        </div>
                        <div className="flex gap-1.5 hidden sm:flex">
                            {Array.from({ length: 5 }).map((_, i) => (
                                <span
                                    key={i}
                                    className={`text-sm ${i < testimonials[active].rating
                                        ? "text-accent"
                                        : "text-surface"
                                        }`}
                                >
                                    ★
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Dots navigation */}
                <div className="flex items-center justify-center gap-3 mt-12">
                    {testimonials.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setActive(i)}
                            className={`h-[1px] transition-all duration-300 cursor-pointer ${i === active
                                ? "bg-accent w-12"
                                : "bg-surface w-6 hover:bg-accent/50"
                                }`}
                            aria-label={`View testimonial ${i + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
