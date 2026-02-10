"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import styles from "./real-estate.module.css";

export default function RealEstatePage() {
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
                        <span className={`${styles.label} ${styles.reveal}`}>System 01 // Real Estate</span>
                        <h1 className={`${styles.heroTitle} ${styles.reveal}`} style={{ transitionDelay: "0.1s" }}>
                            The Modern Estate.
                        </h1>
                        <p className={`${styles.heroDesc} ${styles.reveal}`} style={{ transitionDelay: "0.2s" }}>
                            A high-precision digital architecture engineered for elite consultancies.
                            Seamlessly merging property showcasing with automated client acquisition.
                        </p>

                        <div className={`${styles.heroStats} ${styles.reveal}`} style={{ transitionDelay: "0.3s" }}>
                            <div className={styles.statItem}>
                                <h3>0.4s</h3>
                                <p>Page Load</p>
                            </div>
                            <div className={styles.statItem}>
                                <h3>100%</h3>
                                <p>SEO Structure</p>
                            </div>
                            <div className={styles.statItem}>
                                <h3>Auto</h3>
                                <p>Lead Routing</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Features Grid */}
            <section className={styles.features}>
                <div className={styles.wrapper}>
                    <div className={`${styles.sectionHeader} ${styles.reveal}`}>
                        <h2 className={styles.sectionTitle}>Engineered for Growth</h2>
                    </div>

                    <div className={styles.featureGrid}>
                        <div className={`${styles.featureCard} ${styles.reveal}`} style={{ transitionDelay: "0.1s" }}>
                            <span className={styles.featureIcon}>✦</span>
                            <h3 className={styles.featureTitle}>Automated Lead Capture</h3>
                            <p className={styles.featureDesc}>
                                Intelligent forms and CRM integration route high-value inquiries directly to agents instantly.
                            </p>
                        </div>

                        <div className={`${styles.featureCard} ${styles.reveal}`} style={{ transitionDelay: "0.2s" }}>
                            <span className={styles.featureIcon}>◈</span>
                            <h3 className={styles.featureTitle}>Immersive Listings</h3>
                            <p className={styles.featureDesc}>
                                Cinematic layout support for 4K tours, drone footage, and high-res architectural photography.
                            </p>
                        </div>

                        <div className={`${styles.featureCard} ${styles.reveal}`} style={{ transitionDelay: "0.3s" }}>
                            <span className={styles.featureIcon}>⦿</span>
                            <h3 className={styles.featureTitle}>Private Client Portal</h3>
                            <p className={styles.featureDesc}>
                                Secure login areas for investors to view off-market opportunities and portfolio performance.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Visual Showcase */}
            <section className={styles.showcase}>
                <div className={styles.wrapper}>
                    <div className={`${styles.showcaseImage} ${styles.reveal}`}>
                        {/* SK Builders Concept Implementation (Green Theme) */}
                        <div className={styles.greenPreviewContainer}>
                            {/* Header */}
                            <nav className={styles.greenNav}>
                                <div className={styles.greenLogo}>
                                    <span className={styles.icon}>M</span> SK BUILDERS
                                </div>
                                <div className={styles.greenLinks}>
                                    <span className={styles.active}>Home</span>
                                    <span>Properties</span>
                                    <span>Buy</span>
                                    <span>Sell</span>
                                    <span>Rent</span>
                                </div>
                                <div className={styles.greenAuth}>
                                    <button className={styles.btnLogin}>Login</button>
                                    <button className={styles.btnGetStarted}>Get started</button>
                                </div>
                            </nav>

                            {/* Main Hero Content */}
                            <div className={styles.greenHero}>

                                {/* Left Pill Image */}
                                <div className={styles.pillImageLeft}>
                                    <div className={styles.dreamHouseLabel}>DREAM HOUSE</div>
                                    <div className={styles.playButton}>▶</div>
                                </div>

                                {/* Center Content */}
                                <div className={styles.heroTextContent}>
                                    <h1>EXPERIENCE THE<br />EPITOME OF HOME<br />COMFORT.</h1>
                                    <div className={styles.heroSubContent}>
                                        <p>Our international brand specializes in property appraisal, sales, purchases, and investments. Trust us to deliver exceptional service.</p>
                                        <div className={styles.circularBadge}>
                                            <svg viewBox="0 0 100 100" width="80" height="80">
                                                <path id="curve" d="M 50 50 m -37 0 a 37 37 0 1 1 74 0 a 37 37 0 1 1 -74 0" fill="transparent" />
                                                <text fill="white" fontSize="13" letterSpacing="2">
                                                    <textPath href="#curve">THE BEST PROPERTY PLATFORM</textPath>
                                                </text>
                                            </svg>
                                            <span className={styles.star}>✦</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Right Pill Image Section */}
                                <div className={styles.pillImageRightContainer}>
                                    <div className={styles.arrowButton}>↗</div>
                                    <div className={styles.pillImageRight}></div>
                                </div>

                            </div>

                            {/* Template Link */}
                            <div className={styles.templateLinkContainer}>
                                <a
                                    href="https://dribbble.com/search/shots/popular?tag=luxury&q=real%20estate%20website"
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
                    <h2 className={`${styles.ctaTitle} ${styles.reveal}`}>Ready to Scale?</h2>
                    <Link href="/contact" className={`${styles.btnPrimary} ${styles.reveal}`} style={{ transitionDelay: "0.1s" }}>
                        Deploy This System
                    </Link>
                </div>
            </section>
        </main>
    );
}
