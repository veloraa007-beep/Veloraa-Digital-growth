"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import styles from "./work.module.css";
import BackgroundSlideshow from "@/components/ui/background-slideshow";

// Projects Data — 7 Flagship Industry Systems with Realistic Photography
const projects = [
    {
        id: "real-estate",
        title: "Aura Luxury Residences System",
        industry: "REAL ESTATE & ARCHITECTURE",
        description: "An ultra-luxury architectural portfolio and high-value asset digital system engineered for private estate buyers and investors.",
        image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2675&auto=format&fit=crop",
    },
    {
        id: "restaurant",
        title: "Maison Noir Michelin Dining",
        industry: "FINE DINING & HOSPITALITY",
        description: "An immersive 3-Michelin-star culinary web product with interactive tasting narratives, private salons, and WhatsApp table concierge.",
        image: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=2670&auto=format&fit=crop",
    },
    {
        id: "driving-school",
        title: "Apex Driving Academy System",
        industry: "EDUCATION & DRIVING ACADEMY",
        description: "A complete digital growth system engineered for driving academies featuring WhatsApp automated bookings, DMV simulator, and conversion architecture.",
        image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2670&auto=format&fit=crop",
    },
    {
        id: "ecommerce",
        title: "Atelier Vélora Haute Couture",
        industry: "LUXURY FASHION & RETAIL",
        description: "An architectural luxury e-commerce flagship digital product featuring capsule lookbooks, limited edition numbered drops, and VIP WhatsApp concierge.",
        image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=2520&auto=format&fit=crop",
    },
    {
        id: "coffee",
        title: "Granum Specialty Roasters",
        industry: "LIFESTYLE & ARTISAN COFFEE",
        description: "A story-driven specialty coffee brand website with single-origin micro-lot harvest subscriptions.",
        image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2670&auto=format&fit=crop",
    },
    {
        id: "portfolio",
        title: "Alex Graham Executive Advisory",
        industry: "EXECUTIVE PERSONAL BRAND",
        description: "An executive personal authority and fractional C-suite advisory digital platform for venture partners and founders.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2574&auto=format&fit=crop",
    },
    {
        id: "agency",
        title: "AdSpace Agency Operating Engine",
        industry: "DIGITAL MARKETING & AUTOMATION",
        description: "An automation-first digital marketing agency platform engineered for performance scaling and automated client acquisition.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
    },
];

export default function WorkPage() {
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(styles.revealed);
                    }
                });
            },
            {
                threshold: 0.1,
                rootMargin: "0px 0px -50px 0px",
            }
        );

        const elements = document.querySelectorAll(`.${styles.reveal}`);
        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <main className={styles.container} ref={scrollRef}>
            <BackgroundSlideshow
                images={[
                    "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=2670&auto=format&fit=crop",
                    "https://images.unsplash.com/photo-1486406140926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop",
                    "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2670&auto=format&fit=crop"
                ]}
                duration={7}
                overlayOpacity={0.85}
            />

            {/* 1. Hero Section */}
            <section className={styles.hero}>
                <div className={`${styles.wrapper} ${styles.heroContent}`}>
                    <span className="inline-block text-xs font-mono tracking-[0.3em] text-[#D4AF37] uppercase mb-4">
                        ✦ VELORA INDUSTRY GROWTH SYSTEMS
                    </span>
                    <h1 className={`${styles.heroTitle} ${styles.reveal}`}>
                        Curated Digital Experiences.
                    </h1>
                    <p className={`${styles.heroSubtext} ${styles.reveal}`} style={{ transitionDelay: '0.1s' }}>
                        Production-ready starter systems and concept builds demonstrating how Velora engineers high-converting digital infrastructure across industries.
                    </p>
                    <div className={`${styles.heroButtons} ${styles.reveal}`} style={{ transitionDelay: '0.2s' }}>
                        <Link href="#projects" className={styles.btnPrimary}>
                            Explore Flagship Systems
                        </Link>
                        <a
                            href="https://api.whatsapp.com/message/CSJUP7QRLQFYL1?autoload=1&app_absent=0"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.btnSecondary}
                        >
                            Book Strategy Call via WhatsApp
                        </a>
                    </div>
                </div>
            </section>

            {/* 2. Philosophy Section */}
            <section className={styles.philosophy}>
                <div className={styles.wrapper}>
                    <h2 className={`${styles.philosophyTitle} ${styles.reveal}`}>
                        Concept Builds. Real Business Architecture.
                    </h2>
                    <p className={`${styles.philosophyText} ${styles.reveal}`} style={{ transitionDelay: '0.1s' }}>
                        Every system below is a complete, standalone digital application built to demonstrate Velora’s execution quality—combining luxury UX, conversion architecture, and WhatsApp automation.
                    </p>
                    <div className={`${styles.divider} ${styles.reveal}`} style={{ transitionDelay: '0.2s' }}></div>
                </div>
            </section>

            {/* 3. Demo Project Grid */}
            <section id="projects" className={styles.gridSection}>
                <div className={`${styles.wrapper} ${styles.grid}`}>
                    {projects.map((project, index) => (
                        <Link href={`/work/${project.id}`} key={project.id} className={styles.cardLink}>
                            <article
                                className={`${styles.card} ${styles.reveal}`}
                                style={{ transitionDelay: `${index * 0.1}s` }}
                            >
                                <div className={styles.cardImageFrame}>
                                    <div className={styles.laptopFrame} style={{ overflow: 'hidden', background: '#000' }}>
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover',
                                                opacity: 0.9,
                                                transition: 'transform 0.5s ease',
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className={styles.cardContent}>
                                    <span className={styles.industryLabel}>{project.industry}</span>
                                    <h3 className={styles.projectTitle}>{project.title}</h3>
                                    <p className={styles.projectDesc}>{project.description}</p>
                                    <div className={styles.viewBtn}>Explore Experience →</div>
                                </div>
                            </article>
                        </Link>
                    ))}
                </div>
            </section>

            {/* 4. Final CTA Section */}
            <section className={styles.cta}>
                <div className={styles.wrapper}>
                    <h2 className={`${styles.ctaTitle} ${styles.reveal}`}>
                        Ready to Build Your Industry System?
                    </h2>
                    <p className={`${styles.ctaText} ${styles.reveal}`} style={{ transitionDelay: '0.1s' }}>
                        Every system is engineered specifically for your brand's growth goals and target audience.
                    </p>
                    <a
                        href="https://api.whatsapp.com/message/CSJUP7QRLQFYL1?autoload=1&app_absent=0"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${styles.btnPrimary} ${styles.reveal}`}
                        style={{ transitionDelay: '0.2s' }}
                    >
                        Start Your Project on WhatsApp (+91 85508 83051)
                    </a>
                </div>
            </section>
        </main>
    );
}
