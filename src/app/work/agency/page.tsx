"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import styles from "./agency.module.css";

export default function AgencyPage() {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(styles.revealed);
                    }
                });
            },
            { threshold: 0.1 }
        );

        document.querySelectorAll(`.${styles.reveal}`).forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <main className={styles.container}>
            {/* 1. Hero Section */}
            <section className={styles.hero}>
                <div className={styles.wrapper}>
                    <div className={styles.heroContent}>
                        <span className={`${styles.label} ${styles.reveal}`}>System 06 // Agency Scale</span>
                        <h1 className={`${styles.heroTitle} ${styles.reveal}`} style={{ transitionDelay: "0.1s" }}>
                            Growth<br />Engineered.
                        </h1>
                        <p className={`${styles.heroDesc} ${styles.reveal}`} style={{ transitionDelay: "0.2s" }}>
                            A data-first agency interface designed to productize services and automate client acquisition.
                        </p>

                        <div className={`${styles.heroStats} ${styles.reveal}`} style={{ transitionDelay: "0.3s" }}>
                            <div className={styles.statItem}>
                                <h3>10x</h3>
                                <p>Lead Flow</p>
                            </div>
                            <div className={styles.statItem}>
                                <h3>Auto</h3>
                                <p>Onboarding</p>
                            </div>
                            <div className={styles.statItem}>
                                <h3>KPI</h3>
                                <p>Real-time</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Features Grid */}
            <section className={styles.features}>
                <div className={styles.wrapper}>
                    <div className={`${styles.sectionHeader} ${styles.reveal}`}>
                        <h2 className={styles.sectionTitle}>Built to Scale</h2>
                    </div>

                    <div className={styles.featureGrid}>
                        <div className={`${styles.featureCard} ${styles.reveal}`} style={{ transitionDelay: "0.1s" }}>
                            <span className={styles.featureIcon}>🚀</span>
                            <h3 className={styles.featureTitle}>Automated Outreach</h3>
                            <p className={styles.featureDesc}>
                                Integrated prospecting tools that fill your pipeline while you focus on fulfillment.
                            </p>
                        </div>

                        <div className={`${styles.featureCard} ${styles.reveal}`} style={{ transitionDelay: "0.2s" }}>
                            <span className={styles.featureIcon}>📊</span>
                            <h3 className={styles.featureTitle}>Predictive Analytics</h3>
                            <p className={styles.featureDesc}>
                                Client dashboards that visualize ROI and campaign performance in real-time.
                            </p>
                        </div>

                        <div className={`${styles.featureCard} ${styles.reveal}`} style={{ transitionDelay: "0.3s" }}>
                            <span className={styles.featureIcon}>🤝</span>
                            <h3 className={styles.featureTitle}>Client Portal</h3>
                            <p className={styles.featureDesc}>
                                A unified hub for assets, chat, and approvals, reducing admin time by 70%.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Visual Showcase - AdSpace Concept */}
            <section className={styles.showcase}>
                <div className={styles.wrapper}>
                    <div className={`${styles.showcaseImage} ${styles.reveal}`}>

                        {/* AdSpace Implementation */}
                        <div className={styles.agencyContainer}>

                            {/* Nav */}
                            <nav className={styles.agencyNav}>
                                <div className={styles.brand}>ADSPACE</div>
                                <div className={styles.navLinks}>
                                    <span>Services</span>
                                    <span>Work</span>
                                    <span className={styles.btnNav}>Get Started</span>
                                </div>
                            </nav>

                            {/* Hero Content */}
                            <div className={styles.agencyHero}>
                                <h2 className={styles.bigText}>
                                    Reach<br />
                                    <span className={styles.serifItalic}>New</span><br />
                                    Horizons
                                </h2>

                                <div className={styles.glowBtn}>
                                    Get Started
                                </div>
                            </div>

                            {/* Floating Data Cards */}
                            <div className={styles.floatingCard1}>
                                <div className={styles.cardHeader}>
                                    <div className={styles.dot}></div>
                                    <span>NodPod</span>
                                </div>
                                <div className={styles.statRow}>
                                    <div>
                                        <h4>178%</h4>
                                        <p>Traffic</p>
                                    </div>
                                    <div>
                                        <h4>56%</h4>
                                        <p>LTV</p>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.floatingCard2}>
                                <div className={styles.cardHeader}>
                                    <div className={styles.dot}></div>
                                    <span>Bearfruit</span>
                                </div>
                                <div className={styles.statRow}>
                                    <div>
                                        <h4>154%</h4>
                                        <p>Traffic</p>
                                    </div>
                                    <div>
                                        <h4>48%</h4>
                                        <p>LTV</p>
                                    </div>
                                </div>
                            </div>

                            {/* Background Glows */}
                            <div className={styles.bgGlow1}></div>
                            <div className={styles.bgGlow2}></div>

                            {/* Template Link */}
                            <div className={styles.templateLinkContainer}>
                                <a
                                    href="https://dribbble.com/search/marketing-agency"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.templateLink}
                                >
                                    for more templates ↗
                                </a>
                            </div>

                        </div>

                    </div>
                </div>
            </section>

            {/* 4. CTA */}
            <section className={styles.cta}>
                <div className={styles.wrapper}>
                    <h2 className={`${styles.ctaTitle} ${styles.reveal}`}>Scale Your Agency</h2>
                    <Link href="/contact" className={`${styles.btnPrimary} ${styles.reveal}`} style={{ transitionDelay: "0.1s" }}>
                        Start Your Project
                    </Link>
                </div>
            </section>
        </main>
    );
}
