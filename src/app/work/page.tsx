"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import styles from "./work.module.css";
import BackgroundSlideshow from "@/components/ui/background-slideshow";

// Projects Data — 8 Flagship Industry Systems
const projects = [
    {
        id: "real-estate",
        title: "Aura Luxury Residences System",
        industry: "REAL ESTATE & ARCHITECTURE",
        description: "An ultra-luxury architectural portfolio and high-value asset digital system engineered for private estate buyers and investors.",
        gradient: "linear-gradient(135deg, #1e1e1e 0%, #2a2a2a 100%)",
    },
    {
        id: "restaurant",
        title: "Maison Noir Michelin Dining",
        industry: "FINE DINING & HOSPITALITY",
        description: "An immersive 3-Michelin-star culinary web product with interactive tasting narratives, private salons, and WhatsApp table concierge.",
        gradient: "linear-gradient(135deg, #2c2520 0%, #4a3f35 100%)",
    },
    {
        id: "driving-school",
        title: "Apex Driving Academy System",
        industry: "EDUCATION & DRIVING ACADEMY",
        description: "A complete digital growth system engineered for driving academies featuring WhatsApp automated bookings, DMV simulator, and conversion architecture.",
        gradient: "linear-gradient(135deg, #0A0D0B 0%, #152219 100%)",
    },
    {
        id: "ecommerce",
        title: "Atelier Vélora Haute Couture",
        industry: "LUXURY FASHION & RETAIL",
        description: "An architectural luxury e-commerce flagship digital product featuring capsule lookbooks, limited edition numbered drops, and VIP WhatsApp concierge.",
        gradient: "linear-gradient(135deg, #1c2325 0%, #2f3a3d 100%)",
    },
    {
        id: "coffee",
        title: "Granum Specialty Roasters",
        industry: "LIFESTYLE & ARTISAN COFFEE",
        description: "A story-driven specialty coffee brand website with single-origin micro-lot harvest subscriptions.",
        gradient: "linear-gradient(135deg, #3e332a 0%, #5c4d40 100%)",
    },
    {
        id: "portfolio",
        title: "Alex Graham Executive Advisory",
        industry: "EXECUTIVE PERSONAL BRAND",
        description: "An executive personal authority and fractional C-suite advisory digital platform for venture partners and founders.",
        gradient: "linear-gradient(135deg, #25201c 0%, #403630 100%)",
    },
    {
        id: "agency",
        title: "AdSpace Agency Operating Engine",
        industry: "DIGITAL MARKETING & AUTOMATION",
        description: "An automation-first digital marketing agency platform engineered for performance scaling and automated client acquisition.",
        gradient: "linear-gradient(135deg, #1a1a2e 0%, #2a2a4a 100%)",
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
                                    <div className={styles.laptopFrame}>
                                        {project.id === "real-estate" ? (
                                            <div className={styles.miniSkPreview}>
                                                <div className={styles.miniSkHero}>
                                                    <h4 className={styles.miniSkTitle}>AURA LUXURY<br />ARCHITECTURAL<br />ESTATES</h4>
                                                    <div className={styles.miniSkBadge}>✦</div>
                                                </div>
                                            </div>
                                        ) : project.id === "restaurant" ? (
                                            <div style={{ width: '100%', height: '100%', overflow: 'hidden', background: '#080706' }}>
                                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                                <img
                                                    src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=2670&auto=format&fit=crop"
                                                    alt="Maison Noir Dining"
                                                    style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.9 }}
                                                />
                                            </div>
                                        ) : project.id === "driving-school" ? (
                                            <div style={{ width: '100%', height: '100%', overflow: 'hidden', background: '#0A0D0B', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '1rem', textAlign: 'center' }}>
                                                <span style={{ fontSize: '10px', fontFamily: 'monospace', color: '#24E5A4', letterSpacing: '0.2em' }}>APEX ACADEMY</span>
                                                <h4 style={{ fontFamily: 'serif', color: '#E2F1E7', fontSize: '14px', marginTop: '4px' }}>98.4% Pass Rate</h4>
                                            </div>
                                        ) : project.id === "ecommerce" ? (
                                            <div style={{ width: '100%', height: '100%', overflow: 'hidden', background: '#000000', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                                <span style={{ fontSize: '12px', fontFamily: 'serif', color: '#FFFFFF', letterSpacing: '0.3em' }}>ATELIER VÉLORA</span>
                                                <span style={{ fontSize: '9px', fontFamily: 'monospace', color: '#888', marginTop: '2px' }}>Capsule N°07</span>
                                            </div>
                                        ) : project.id === "coffee" ? (
                                            <div className={styles.miniCoffeePreview}>
                                                <div className={styles.miniCoffeeHeader}>
                                                    <span className={styles.coffeeIcon}>GRANUM</span>
                                                </div>
                                                <div className={styles.miniCoffeeContent}>
                                                    <div className={styles.miniCoffeeCard}>Single-Origin<br /><strong>Specialty Roasts</strong></div>
                                                </div>
                                            </div>
                                        ) : project.id === "portfolio" ? (
                                            <div className={styles.miniPortfolioPreview}>
                                                <div className={styles.portTextLayer}>
                                                    <span>ALEX</span>
                                                    <span>GRAHAM</span>
                                                </div>
                                            </div>
                                        ) : project.id === "agency" ? (
                                            <div style={{ width: '100%', height: '100%', overflow: 'hidden', background: '#05060A', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                                <span style={{ fontSize: '11px', fontFamily: 'monospace', color: '#818CF8' }}>ADSPACE OS</span>
                                                <span style={{ fontSize: '10px', color: '#9CA3AF', marginTop: '2px' }}>Automation Engine</span>
                                            </div>
                                        ) : (
                                            <div
                                                className={styles.mockupPlaceholder}
                                                style={{ background: project.gradient }}
                                            ></div>
                                        )}
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
