"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import styles from "./portfolio.module.css";

export default function PortfolioPage() {
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
                        <span className={`${styles.label} ${styles.reveal}`}>System 05 // Personal Brand</span>
                        <h1 className={`${styles.heroTitle} ${styles.reveal}`} style={{ transitionDelay: "0.1s" }}>
                            Authority<br />Builder.
                        </h1>
                        <p className={`${styles.heroDesc} ${styles.reveal}`} style={{ transitionDelay: "0.2s" }}>
                            A text-forward portfolio system designed to position consultants and founders as undisputed industry leaders.
                        </p>

                        <div className={`${styles.heroStats} ${styles.reveal}`} style={{ transitionDelay: "0.3s" }}>
                            <div className={styles.statItem}>
                                <h3>100%</h3>
                                <p>Brand Control</p>
                            </div>
                            <div className={styles.statItem}>
                                <h3>Smart</h3>
                                <p>Lead Capture</p>
                            </div>
                            <div className={styles.statItem}>
                                <h3>SEO</h3>
                                <p>Optimized</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Features Grid */}
            <section className={styles.features}>
                <div className={styles.wrapper}>
                    <div className={`${styles.sectionHeader} ${styles.reveal}`}>
                        <h2 className={styles.sectionTitle}>The Expert&apos;s Edge</h2>
                    </div>

                    <div className={styles.featureGrid}>
                        <div className={`${styles.featureCard} ${styles.reveal}`} style={{ transitionDelay: "0.1s" }}>
                            <span className={styles.featureIcon}>✒️</span>
                            <h3 className={styles.featureTitle}>Content Engine</h3>
                            <p className={styles.featureDesc}>
                                CMS-driven thought leadership sections to easily publish articles, case studies, and insights.
                            </p>
                        </div>

                        <div className={`${styles.featureCard} ${styles.reveal}`} style={{ transitionDelay: "0.2s" }}>
                            <span className={styles.featureIcon}>📅</span>
                            <h3 className={styles.featureTitle}>Smart Booking</h3>
                            <p className={styles.featureDesc}>
                                Frictionless calendar integration for high-ticket strategy calls and consultations.
                            </p>
                        </div>

                        <div className={`${styles.featureCard} ${styles.reveal}`} style={{ transitionDelay: "0.3s" }}>
                            <span className={styles.featureIcon}>🛡️</span>
                            <h3 className={styles.featureTitle}>Trust Signals</h3>
                            <p className={styles.featureDesc}>
                                Architected social proof sections, client logos, and testimonials to build instant credibility.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Visual Showcase - Alex Graham Concept */}
            <section className={styles.showcase}>
                <div className={styles.wrapper}>
                    <div className={`${styles.showcaseImage} ${styles.reveal}`}>

                        {/* Portfolio Mockup Implementation */}
                        <div className={styles.mockupContainer}>

                            {/* Nav Bar */}
                            <nav className={styles.mockupNav}>
                                <div className={styles.logo}>© Alex Design & Strategy</div>
                                <div className={styles.navLinks}>
                                    <span>About</span>
                                    <span>Projects</span>
                                    <span>Contact</span>
                                </div>
                            </nav>

                            {/* Main Content */}
                            <div className={styles.mockupContent}>

                                {/* Background Text Layer */}
                                <div className={styles.bgTextLayer}>
                                    <span className={styles.bigTextLeft}>Alex</span>
                                    <span className={styles.bigTextRight}>Graham</span>
                                </div>

                                {/* Image Layer (Portrait) */}
                                <div className={styles.portraitLayer}>
                                    {/* Placeholder for portrait */}
                                    {/* <div className={styles.fakePortrait}></div> */}
                                    <img
                                        src="https://images.unsplash.com/photo-1531384441138-2736e62e0919?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                        alt="Portrait"
                                        className={styles.portraitImg}
                                    />
                                </div>

                                {/* Foreground Text Overlay */}
                                <div className={styles.fgTextLayer}>
                                    <h2>Web Designer<br />Art Director</h2>
                                </div>

                                {/* Social Sideline */}
                                <div className={styles.socialSidebar}>
                                    <span>tw</span>
                                    <span>in</span>
                                    <span>ig</span>
                                </div>
                            </div>

                            {/* Template Link */}
                            <div className={styles.templateLinkContainer}>
                                <a
                                    href="https://dribbble.com/search/portfolio"
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
                    <h2 className={`${styles.ctaTitle} ${styles.reveal}`}>Build Your Authority</h2>
                    <Link href="/contact" className={`${styles.btnPrimary} ${styles.reveal}`} style={{ transitionDelay: "0.1s" }}>
                        Start Your Project
                    </Link>
                </div>
            </section>
        </main>
    );
}
