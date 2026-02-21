"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ServiceCard from "./service-card";

gsap.registerPlugin(ScrollTrigger);

const services = [
    {
        id: "01",
        title: "Premium Websites",
        description: "Authority, Conversion, and E-commerce architecture. Optimized for brands that demand excellence.",
        link: "/services/premium-websites",
        image: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg",
        tags: ["Authority", "E-commerce", "Conversion"],
    },
    {
        id: "02",
        title: "SaaS Platforms",
        description: "MVP SaaS & Web Applications. Scalable dashboards, auth systems, and payment integration.",
        link: "/services/saas-platforms",
        image: "https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg",
        tags: ["Dasboard", "Auth", "Payments"],
    },
    {
        id: "03",
        title: "WhatsApp Automation",
        description: "Auto-replies, CRM integration, and lead qualification bots engineered for speed.",
        link: "/services/whatsapp-automation",
        image: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg",
        tags: ["Chatbots", "CRM", "Speed"],
    },
    {
        id: "04",
        title: "Lead Funnel Systems",
        description: "Traffic → Capture → Convert. Engineered funnels that turn visitors into revenue.",
        link: "/services/lead-funnels",
        image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
        tags: ["Funnels", "Growth", "Retention"],
    },
    {
        id: "05",
        title: "SEO Optimization",
        description: "We engineer search visibility. Technical audits, schema markup, and Core Web Vitals.",
        link: "/services/seo-optimization",
        image: "https://images.pexels.com/photos/905163/pexels-photo-905163.jpeg",
        tags: ["Technical", "Schema", "Vitals"],
    },
    {
        id: "06",
        title: "Digital Identity",
        description: "Logo, typography, and color psychology. Identity architecture for premium brands.",
        link: "/services/digital-identity",
        image: "https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg",
        tags: ["Branding", "Design", "Psychology"],
    },
    {
        id: "07",
        title: "Business Cards",
        description: "Luxury physical identity. Premium paper, foil stamping, and NFC integration.",
        link: "/services/business-cards",
        image: "https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg",
        tags: ["Print", "NFC", "Luxury"],
    },
];

export default function Services() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const items = gsap.utils.toArray<HTMLElement>(".group"); // Target the group class from ServiceCard

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
            className="py-16 md:py-24 bg-background relative overflow-hidden"
        >
            <div className="max-w-[1200px] mx-auto px-5 md:px-8">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24 gap-8">
                    <div>
                        <span className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-[#C6A76E]/80 border border-[#C6A76E]/20 px-4 py-2 rounded-full mb-8 inline-block backdrop-blur-sm bg-[#C6A76E]/[0.05]">
                            Our Expertise
                        </span>
                        <h2 className="text-[clamp(1.8rem,4vw,3.5rem)] font-serif text-[#EAE6DD] leading-[0.9] tracking-tight">
                            Engineered for <br />
                            <span className="text-[#A8A39B]/60 italic font-light">
                                Dominance
                            </span>
                        </h2>
                    </div>
                    <div className="max-w-md">
                        <p className="text-[#A8A39B] text-base md:text-lg leading-relaxed font-light tracking-wide">
                            Comprehensive digital solutions that bridge the gap between
                            aesthetic luxury and technical performance.
                        </p>
                    </div>
                </div>

                {/* Service Grid */}
                <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    {services.map((service) => (
                        <ServiceCard
                            key={service.id}
                            title={service.title}
                            description={service.description}
                            number={service.id}
                            tags={service.tags}
                            image={service.image}
                            href={service.link}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
}
