"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import Image from "next/image"; // Added for images
import { ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const services = [
    {
        id: "01",
        title: "Premium Websites",
        description: "Authority, Conversion, and E-commerce architecture. Optimized for brands that demand excellence.",
        link: "/services/premium-websites",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2301&auto=format&fit=crop",
        tags: ["Authority", "E-commerce", "Conversion"],
    },
    {
        id: "02",
        title: "SaaS Platforms",
        description: "MVP SaaS & Web Applications. Scalable dashboards, auth systems, and payment integration.",
        link: "/services/saas-platforms",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
        tags: ["Dasboard", "Auth", "Payments"],
    },
    {
        id: "03",
        title: "WhatsApp Automation",
        description: "Auto-replies, CRM integration, and lead qualification bots engineered for speed.",
        link: "/services/whatsapp-automation",
        image: "https://images.unsplash.com/photo-1611746362936-ac317009189d?q=80&w=2070&auto=format&fit=crop",
        tags: ["Chatbots", "CRM", "Speed"],
    },
    {
        id: "04",
        title: "Lead Funnel Systems",
        description: "Traffic → Capture → Convert. Engineered funnels that turn visitors into revenue.",
        link: "/services/lead-funnels",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
        tags: ["Funnels", "Growth", "Retention"],
    },
    {
        id: "05",
        title: "SEO Optimization",
        description: "We engineer search visibility. Technical audits, schema markup, and Core Web Vitals.",
        link: "/services/seo-optimization",
        image: "https://images.unsplash.com/photo-1572177812156-58036aae439c?q=80&w=2070&auto=format&fit=crop",
        tags: ["Technical", "Schema", "Vitals"],
    },
    {
        id: "06",
        title: "Digital Identity",
        description: "Logo, typography, and color psychology. Identity architecture for premium brands.",
        link: "/services/digital-identity",
        image: "https://images.unsplash.com/photo-1558655146-d09347e0b7a9?q=80&w=2070&auto=format&fit=crop",
        tags: ["Branding", "Design", "Psychology"],
    },
    {
        id: "07",
        title: "Business Cards",
        description: "Luxury physical identity. Premium paper, foil stamping, and NFC integration.",
        link: "/services/business-cards",
        image: "https://images.unsplash.com/photo--W6V8m0VPoA?q=80&w=2670&auto=format&fit=crop",
        tags: ["Print", "NFC", "Luxury"],
    },
];

export default function Services() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const items = gsap.utils.toArray<HTMLElement>(".service-item");

            items.forEach((item) => {
                gsap.from(item, {
                    y: 50,
                    opacity: 0,
                    duration: 1,
                    scrollTrigger: {
                        trigger: item,
                        start: "top 85%",
                        toggleActions: "play none none reverse",
                    },
                });
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={containerRef}
            className="py-24 md:py-32 bg-background relative overflow-hidden"
        >
            <div className="max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
                    <div>
                        <span className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-accent/80 border border-accent/20 px-4 py-2 rounded-full mb-8 inline-block backdrop-blur-sm bg-accent/[0.05]">
                            Our Expertise
                        </span>
                        <h2 className="text-5xl md:text-7xl font-serif text-primary leading-[0.9] tracking-tight">
                            Engineered for <br />
                            <span className="text-secondary/60 italic font-light">
                                Dominance
                            </span>
                        </h2>
                    </div>
                    <div className="max-w-md">
                        <p className="text-secondary text-lg leading-relaxed font-light tracking-wide">
                            Comprehensive digital solutions that bridge the gap between
                            aesthetic luxury and technical performance.
                        </p>
                    </div>
                </div>

                {/* Service List */}
                <div className="flex flex-col gap-8">
                    {services.map((service, index) => (
                        <Link
                            key={index}
                            href={service.link}
                            className="service-item group relative border border-white/5 bg-surface overflow-hidden hover:border-accent/50 transition-colors duration-500 block"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-12 gap-0 md:gap-8 items-center">

                                {/* Image Section - Visible on all devices, large on desktop */}
                                <div className="md:col-span-5 h-64 md:h-full min-h-[250px] relative overflow-hidden">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-r from-surface/0 via-surface/0 to-surface/0 md:from-transparent md:to-surface" />
                                    {/* Gradient for smooth blend if needed, or keeping crisp */}
                                </div>

                                {/* Content Section */}
                                <div className="md:col-span-7 p-8 md:py-16 md:pr-16 flex flex-col justify-center">
                                    <div className="flex justify-between items-start mb-6">
                                        <span className="text-xs font-sans font-medium text-secondary/40 tracking-[0.2em]">
                                            ({service.id})
                                        </span>
                                        <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all duration-300 transform group-hover:-rotate-45">
                                            <ArrowUpRight className="w-4 h-4 text-white group-hover:text-black" />
                                        </div>
                                    </div>

                                    <h3 className="text-3xl md:text-4xl font-serif text-primary group-hover:text-accent transition-colors duration-300 font-normal mb-4">
                                        {service.title}
                                    </h3>

                                    <p className="text-secondary/80 leading-relaxed mb-6 font-light tracking-wide max-w-xl">
                                        {service.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2">
                                        {service.tags.map((tag, t) => (
                                            <span
                                                key={t}
                                                className="text-[10px] font-sans uppercase tracking-[0.15em] border border-white/5 px-3 py-1.5 rounded-full text-secondary/60 group-hover:border-white/10 transition-colors"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

            </div>
        </section>
    );
}
