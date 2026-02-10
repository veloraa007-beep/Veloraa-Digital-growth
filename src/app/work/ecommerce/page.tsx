"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import styles from "./ecommerce.module.css";

export default function EcommercePage() {
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
                        <span className={`${styles.label} ${styles.reveal}`}>System 04 // Retail</span>
                        <h1 className={`${styles.heroTitle} ${styles.reveal}`} style={{ transitionDelay: "0.1s" }}>
                            Visual<br />Commerce.
                        </h1>
                        <p className={`${styles.heroDesc} ${styles.reveal}`} style={{ transitionDelay: "0.2s" }}>
                            A high-conversion retail system that merges editorial storytelling with frictionless purchasing power.
                        </p>

                        <div className={`${styles.heroStats} ${styles.reveal}`} style={{ transitionDelay: "0.3s" }}>
                            <div className={styles.statItem}>
                                <h3>+28%</h3>
                                <p>AOV Increase</p>
                            </div>
                            <div className={styles.statItem}>
                                <h3>0.1s</h3>
                                <p>Page Load</p>
                            </div>
                            <div className={styles.statItem}>
                                <h3>Global</h3>
                                <p>Payments</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Features Grid */}
            <section className={styles.features}>
                <div className={styles.wrapper}>
                    <div className={`${styles.sectionHeader} ${styles.reveal}`}>
                        <h2 className={styles.sectionTitle}>Engineered for Sales</h2>
                    </div>

                    <div className={styles.featureGrid}>
                        <div className={`${styles.featureCard} ${styles.reveal}`} style={{ transitionDelay: "0.1s" }}>
                            <span className={styles.featureIcon}>🛍️</span>
                            <h3 className={styles.featureTitle}>Visual Merchandising</h3>
                            <p className={styles.featureDesc}>
                                Dynamic product grids that adapt to campaign goals and inventory levels automatically.
                            </p>
                        </div>

                        <div className={`${styles.featureCard} ${styles.reveal}`} style={{ transitionDelay: "0.2s" }}>
                            <span className={styles.featureIcon}>⚡</span>
                            <h3 className={styles.featureTitle}>Conversion Core</h3>
                            <p className={styles.featureDesc}>
                                Optimized checkout flows with abandoned cart recovery and one-click purchasing.
                            </p>
                        </div>

                        <div className={`${styles.featureCard} ${styles.reveal}`} style={{ transitionDelay: "0.3s" }}>
                            <span className={styles.featureIcon}>🌍</span>
                            <h3 className={styles.featureTitle}>Global scale</h3>
                            <p className={styles.featureDesc}>
                                Multi-currency and multi-language support built in for international expansion.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Visual Showcase - Fashion Concept */}
            <section className={styles.showcase}>
                <div className={styles.wrapper}>
                    <div className={`${styles.showcaseImage} ${styles.reveal}`}>

                        {/* Fashion Grid Implementation */}
                        <div className={styles.shopContainer}>

                            {/* Nav */}
                            <nav className={styles.shopNav}>
                                <div className={styles.navLinks}>
                                    <span>ABOUT</span>
                                    <span>CAMPAIGN</span>
                                </div>
                                <div className={styles.logoBox}>
                                    <span>THE</span>
                                    <span>STUDIO</span>
                                </div>
                                <div className={styles.navLinks}>
                                    <span>SHOP</span>
                                    <span>CONTACT</span>
                                </div>
                            </nav>

                            {/* Hero Headline */}
                            <div className={styles.shopHero}>
                                <h2>CONNECT WITH</h2>
                                <h2>OUR STUDIO</h2>
                            </div>

                            {/* Editorial Grid */}
                            <div className={styles.editorialGrid}>
                                {/* Column 1 */}
                                <div className={styles.gridCol} style={{ marginTop: '100px' }}>
                                    <span className={styles.imgNumber}>01</span>
                                    <div className={styles.imgFrame} style={{ height: '200px' }}>
                                        <div className={styles.fakeImg}></div>
                                    </div>
                                </div>

                                {/* Column 2 */}
                                <div className={styles.gridCol} style={{ marginTop: '50px' }}>
                                    <span className={styles.imgNumber}>02</span>
                                    <div className={styles.imgFrame} style={{ height: '300px' }}>
                                        <div className={styles.fakeImg}></div>
                                    </div>
                                </div>

                                {/* Column 3 (Center Large) */}
                                <div className={styles.gridCol}>
                                    <span className={styles.imgNumber}>03</span>
                                    <div className={styles.imgFrame} style={{ height: '400px' }}>
                                        <div className={styles.fakeImg}></div>
                                    </div>
                                </div>

                                {/* Column 4 */}
                                <div className={styles.gridCol} style={{ marginTop: '50px' }}>
                                    <span className={styles.imgNumber}>04</span>
                                    <div className={styles.imgFrame} style={{ height: '300px' }}>
                                        <div className={styles.fakeImg}></div>
                                    </div>
                                </div>

                                {/* Column 5 */}
                                <div className={styles.gridCol} style={{ marginTop: '100px' }}>
                                    <span className={styles.imgNumber}>05</span>
                                    <div className={styles.imgFrame} style={{ height: '200px' }}>
                                        <div className={styles.fakeImg}></div>
                                    </div>
                                </div>
                            </div>

                            {/* Background Text */}
                            <div className={styles.bgText}>THE STUDIO</div>

                            {/* Footer Bar */}
                            <div className={styles.shopFooter}>
                                <div className={styles.footerName}>[ YOUR NAME ]</div>
                                <div className={styles.footerLine}></div>
                            </div>

                            {/* Template Link */}
                            <div className={styles.templateLinkContainer}>
                                <a
                                    href="https://dribbble.com/search/ecommerce-website"
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
                    <h2 className={`${styles.ctaTitle} ${styles.reveal}`}>Scale Your Brand</h2>
                    <Link href="/contact" className={`${styles.btnPrimary} ${styles.reveal}`} style={{ transitionDelay: "0.1s" }}>
                        Start Your Project
                    </Link>
                </div>
            </section>
        </main>
    );
}
