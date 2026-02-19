"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import Image from "next/image";
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

            items.forEach((item, i) => {
                gsap.from(item, {
                    y: 50,
                    opacity: 0,
                    duration: 0.8,
                    delay: i * 0.1, // Stagger effect
                    scrollTrigger: {
                        trigger: item,
                        start: "top 90%",
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
            className="py-20 md:py-32 bg-background relative overflow-hidden"
        >
            <div className="w-[90%] md:max-w-[1200px] mx-auto">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24 gap-8">
                    <div>
                        <span className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-accent/80 border border-accent/20 px-4 py-2 rounded-full mb-8 inline-block backdrop-blur-sm bg-accent/[0.05]">
                            Our Expertise
                        </span>
                        <h2 className="text-[var(--font-h2)] font-serif text-primary leading-[0.9] tracking-tight">
                            Engineered for <br />
                            <span className="text-secondary/60 italic font-light">
                                Dominance
                            </span>
                        </h2>
                    </div>
                    <div className="max-w-md">
                        <p className="text-secondary text-base md:text-lg leading-relaxed font-light tracking-wide">
                            Comprehensive digital solutions that bridge the gap between
                            aesthetic luxury and technical performance.
                        </p>
                    </div>
                </div>

                {/* Service Grid - Updated from List */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <Link
                            key={index}
                            href={service.link}
                            className="service-item group relative border border-white/5 bg-surface overflow-hidden hover:border-accent/50 transition-colors duration-500 block h-full flex flex-col"
                        >
                            {/* Image Section */}
                            <div className="h-48 md:h-64 relative overflow-hidden w-full">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-90" />
                            </div>

                            {/* Content Section */}
                            <div className="p-6 md:p-8 flex flex-col flex-grow relative z-10 -mt-12">
                                <div className="flex justify-between items-start mb-4">
                                    <span className="text-[10px] font-sans font-medium text-secondary/40 tracking-[0.2em] bg-surface/80 backdrop-blur-sm px-2 py-1 rounded">
                                        ({service.id})
                                    </span>
                                    <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all duration-300 transform group-hover:-rotate-45 bg-surface/80 backdrop-blur-sm">
                                        <ArrowUpRight className="w-3 h-3 text-white group-hover:text-black" />
                                    </div>
                                </div>

                                <h3 className="text-2xl md:text-3xl font-serif text-primary group-hover:text-accent transition-colors duration-300 font-normal mb-3">
                                    {service.title}
                                </h3>

                                <p className="text-secondary/80 text-sm leading-relaxed mb-6 font-light tracking-wide flex-grow">
                                    {service.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {service.tags.map((tag, t) => (
                                        <span
                                            key={t}
                                            className="text-[9px] font-sans uppercase tracking-[0.15em] border border-white/5 px-2 py-1 rounded-full text-secondary/60 group-hover:border-white/10 transition-colors"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

            </div>
        </section>
    );
}
