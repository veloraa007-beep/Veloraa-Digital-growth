"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import styles from "./work.module.css";
import BackgroundSlideshow from "@/components/ui/background-slideshow";

// Projects Data
const projects = [
    {
        id: "real-estate",
        title: "Real Estate Portfolio System",
        industry: "REAL ESTATE",
        description:
            "A premium property portfolio concept built for high-value listings and automated lead capture.",
        gradient: "linear-gradient(135deg, #1e1e1e 0%, #2a2a2a 100%)",
    },
    {
        id: "restaurant",
        title: "Luxury Restaurant Experience",
        industry: "HOSPITALITY",
        description:
            "An immersive dining experience concept with reservation flow and cinematic brand presence.",
        gradient: "linear-gradient(135deg, #2c2520 0%, #4a3f35 100%)",
    },
    {
        id: "coffee",
        title: "Coffee Brand Editorial Site",
        industry: "LIFESTYLE BRAND",
        description:
            "A story-driven coffee brand website inspired by modern premium cafe experiences.",
        gradient: "linear-gradient(135deg, #3e332a 0%, #5c4d40 100%)",
    },
    {
        id: "ecommerce",
        title: "E-Commerce Premium Store",
        industry: "RETAIL",
        description:
            "A conversion-focused e-commerce concept showcasing premium products with clean UX.",
        gradient: "linear-gradient(135deg, #1c2325 0%, #2f3a3d 100%)",
    },
    {
        id: "portfolio",
        title: "Personal Authority Portfolio",
        industry: "PERSONAL BRANDING",
        description: "A structured portfolio concept for consultants, founders, and professionals.",
        gradient: "linear-gradient(135deg, #25201c 0%, #403630 100%)",
    },
    {
        id: "agency",
        title: "Digital Marketing Agency Concept",
        industry: "AGENCY",
        description:
            "A scalable agency website concept designed for automation-first client acquisition.",
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
                    <h1 className={`${styles.heroTitle} ${styles.reveal}`}>
                        Curated Digital Experiences.
                    </h1>
                    <p className={`${styles.heroSubtext} ${styles.reveal}`} style={{ transitionDelay: '0.1s' }}>
                        Concept builds designed to demonstrate how Velora engineers premium digital systems across industries.
                    </p>
                    <div className={`${styles.heroButtons} ${styles.reveal}`} style={{ transitionDelay: '0.2s' }}>
                        <Link href="#projects" className={styles.btnPrimary}>
                            Explore Concepts
                        </Link>
                        <Link href="/contact" className={styles.btnSecondary}>
                            Book a Strategy Call
                        </Link>
                    </div>
                </div>
            </section>

            {/* 2. Philosophy Section */}
            <section className={styles.philosophy}>
                <div className={styles.wrapper}>
                    <h2 className={`${styles.philosophyTitle} ${styles.reveal}`}>
                        Concept Builds. Real Standards.
                    </h2>
                    <p className={`${styles.philosophyText} ${styles.reveal}`} style={{ transitionDelay: '0.1s' }}>
                        These projects are structured demonstrations of Velora’s execution quality. Each concept reflects real-world digital architecture tailored for specific industries.
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
                                                    <h4 className={styles.miniSkTitle}>EXPERIENCE THE<br />EPITOME OF HOME<br />COMFORT.</h4>
                                                    <div className={styles.miniSkBadge}>✦</div>
                                                </div>
                                                <div className={styles.miniSkPill}></div>
                                            </div>
                                        ) : project.id === "restaurant" ? (
                                            // Restaurant Image Preview
                                            <div style={{ width: '100%', height: '100%', overflow: 'hidden', background: '#000' }}>
                                                <img
                                                    src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2670&auto=format&fit=crop"
                                                    alt="Restaurant Food"
                                                    style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.9 }}
                                                />
                                            </div>
                                        ) : project.id === "coffee" ? (
                                            // Mini Coffee Preview
                                            <div className={styles.miniCoffeePreview}>
                                                <div className={styles.miniCoffeeHeader}>
                                                    <span className={styles.coffeeIcon}>G</span>
                                                </div>
                                                <div className={styles.miniCoffeeContent}>
                                                    <div className={styles.miniCoffeeCard}>Available<br /><strong>Coffee</strong></div>
                                                    <div className={styles.miniCoffeeCard}>Restock<br /><strong>Snack</strong></div>
                                                </div>
                                                <div className={styles.miniCoffeeBtn}>+</div>
                                            </div>
                                        ) : project.id === "ecommerce" ? (
                                            // Mini Fashion Preview
                                            <div className={styles.miniFashionPreview}>
                                                <div className={styles.fashionTitle}>STUDIO</div>
                                                <div className={styles.fashionGrid}>
                                                    <div className={styles.fashionItem}></div>
                                                    <div className={styles.fashionItem + " " + styles.large}></div>
                                                    <div className={styles.fashionItem}></div>
                                                </div>
                                                <div className={styles.fashionFooter}></div>
                                            </div>
                                        ) : project.id === "portfolio" ? (
                                            // Mini Portfolio Preview
                                            <div className={styles.miniPortfolioPreview}>
                                                <div className={styles.portTextLayer}>
                                                    <span>ALEX</span>
                                                    <span>GRAHAM</span>
                                                </div>
                                                <div className={styles.portImage}></div>
                                            </div>
                                        ) : project.id === "agency" ? (
                                            // Agency Dashboard Image Preview
                                            <div style={{ width: '100%', height: '100%', overflow: 'hidden', background: '#000' }}>
                                                <img
                                                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
                                                    alt="AdSpace Dashboard"
                                                    style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.9 }}
                                                />
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
                                    <div className={styles.viewBtn}>View Project</div>
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
                        Your Brand Could Be Next.
                    </h2>
                    <p className={`${styles.ctaText} ${styles.reveal}`} style={{ transitionDelay: '0.1s' }}>
                        These are concept builds. Your project will be engineered specifically for your goals.
                    </p>
                    <Link href="/contact" className={`${styles.btnPrimary} ${styles.reveal}`} style={{ transitionDelay: '0.2s' }}>
                        Start Your Project
                    </Link>
                </div>
            </section>
        </main>
    );
}
