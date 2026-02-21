"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import styles from "./restaurant.module.css";

export default function RestaurantPage() {
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
                        <span className={`${styles.label} ${styles.reveal}`}>System 02 // Hospitality</span>
                        <h1 className={`${styles.heroTitle} ${styles.reveal}`} style={{ transitionDelay: "0.1s" }}>
                            The Culinary Stange.
                        </h1>
                        <p className={`${styles.heroDesc} ${styles.reveal}`} style={{ transitionDelay: "0.2s" }}>
                            An immersive dining experience concept with reservation flow and cinematic brand presence.
                            Engineered to turn visitors into guests.
                        </p>

                        <div className={`${styles.heroStats} ${styles.reveal}`} style={{ transitionDelay: "0.3s" }}>
                            <div className={styles.statItem}>
                                <h3>+45%</h3>
                                <p>Reservation Rate</p>
                            </div>
                            <div className={styles.statItem}>
                                <h3>0.3s</h3>
                                <p>Menu Load</p>
                            </div>
                            <div className={styles.statItem}>
                                <h3>Auto</h3>
                                <p>Table Mgmt</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Features Grid */}
            <section className={styles.features}>
                <div className={styles.wrapper}>
                    <div className={`${styles.sectionHeader} ${styles.reveal}`}>
                        <h2 className={styles.sectionTitle}>Served to Perfection</h2>
                    </div>

                    <div className={styles.featureGrid}>
                        <div className={`${styles.featureCard} ${styles.reveal}`} style={{ transitionDelay: "0.1s" }}>
                            <span className={styles.featureIcon}>📅</span>
                            <h3 className={styles.featureTitle}>Smart Reservations</h3>
                            <p className={styles.featureDesc}>
                                Seamless booking flow with real-time availability, deposit handling, and automated reminders.
                            </p>
                        </div>

                        <div className={`${styles.featureCard} ${styles.reveal}`} style={{ transitionDelay: "0.2s" }}>
                            <span className={styles.featureIcon}>🍷</span>
                            <h3 className={styles.featureTitle}>Visual Menu</h3>
                            <p className={styles.featureDesc}>
                                High-fidelity visual menus that upsell pairings and specials dynamically based on inventory.
                            </p>
                        </div>

                        <div className={`${styles.featureCard} ${styles.reveal}`} style={{ transitionDelay: "0.3s" }}>
                            <span className={styles.featureIcon}>✨</span>
                            <h3 className={styles.featureTitle}>Event Management</h3>
                            <p className={styles.featureDesc}>
                                Dedicated workflows for private dining inquiries, large parties, and seasonal ticketed events.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Visual Showcase - Pizza House Concept */}
            <section className={styles.showcase}>
                <div className={styles.wrapper}>
                    <div className={`${styles.showcaseImage} ${styles.reveal}`}>

                        {/* Pizza House Implementation */}
                        <div className={styles.pizzaContainer}>

                            {/* Chalkboard Texture Background */}
                            <div className={styles.chalkboardBg}></div>

                            {/* Wood Menu Bar */}
                            <nav className={styles.woodNav}>
                                <span className={styles.brandName}>PIZZA HOUSE</span>
                                <div className={styles.woodLinks}>
                                    <span className={styles.active}>Home</span>
                                    <span>Menu</span>
                                    <span>About</span>
                                    <span>Contact</span>
                                </div>
                                <div className={styles.socialIcons}>
                                    <span>fb</span>
                                    <span>in</span>
                                    <span>ig</span>
                                </div>
                            </nav>

                            {/* Main Content Area */}
                            <div className={styles.pizzaHero}>

                                {/* Text Side */}
                                <div className={styles.pizzaContent}>
                                    <h2 className={styles.scriptHeader}>Authentic<br />Italian Pizza</h2>
                                    <p className={styles.subtext}>from Chef Fabio Vitriani</p>

                                    <div className={styles.priceTag}>
                                        <span className={styles.starting}>starting from</span>
                                        <span className={styles.price}>$8.99</span>
                                    </div>

                                    <div className={styles.sliderDots}>
                                        <span className={styles.dotActive}></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                </div>

                                {/* Image Side with Wood Frame Effect */}
                                <div className={styles.pizzaVisual}>
                                    <div className={styles.woodFrame}>
                                        {/* Placeholder for Pizza Image */}
                                        <div className={styles.pizzaImage}>
                                            <div className={styles.garnish1}>🌿</div>
                                            <div className={styles.garnish2}>🍅</div>
                                            <div className={styles.garnish3}>🍄</div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            {/* Ingredients Scattered */}
                            <div className={styles.ingredient1}>🧀</div>
                            <div className={styles.ingredient2}>🥖</div>
                            <div className={styles.ingredient3}>🍝</div>

                            {/* Template Link */}
                            <div className={styles.templateLinkContainer}>
                                <a
                                    href="https://dribbble.com/search/shots/popular?q=restraunt"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.templateLink}
                                >
                                    find more templates ↗
                                </a>
                            </div>

                        </div>

                    </div>
                </div>
            </section>

            {/* 4. CTA */}
            <section className={styles.cta}>
                <div className={styles.wrapper}>
                    <h2 className={`${styles.ctaTitle} ${styles.reveal}`}>Elevate Your Dining</h2>
                    <Link href="/contact" className={`${styles.btnPrimary} ${styles.reveal}`} style={{ transitionDelay: "0.1s" }}>
                        Book Strategy Call
                    </Link>
                </div>
            </section>
        </main>
    );
}
