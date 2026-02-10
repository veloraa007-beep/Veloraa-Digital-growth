"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import styles from "./coffee.module.css";

export default function CoffeePage() {
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
                        <span className={`${styles.label} ${styles.reveal}`}>System 03 // F&B Lifestyle</span>
                        <h1 className={`${styles.heroTitle} ${styles.reveal}`} style={{ transitionDelay: "0.1s" }}>
                            The Modern Grind.
                        </h1>
                        <p className={`${styles.heroDesc} ${styles.reveal}`} style={{ transitionDelay: "0.2s" }}>
                            A story-driven brand experience connecting physical cafe culture with effortless digital commerce.
                        </p>

                        <div className={`${styles.heroStats} ${styles.reveal}`} style={{ transitionDelay: "0.3s" }}>
                            <div className={styles.statItem}>
                                <h3>3x</h3>
                                <p>Customer LTV</p>
                            </div>
                            <div className={styles.statItem}>
                                <h3>Fast</h3>
                                <p>Checkout Flow</p>
                            </div>
                            <div className={styles.statItem}>
                                <h3>App</h3>
                                <p>Native Feel</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Features Grid */}
            <section className={styles.features}>
                <div className={styles.wrapper}>
                    <div className={`${styles.sectionHeader} ${styles.reveal}`}>
                        <h2 className={styles.sectionTitle}>Brewed for Business</h2>
                    </div>

                    <div className={styles.featureGrid}>
                        <div className={`${styles.featureCard} ${styles.reveal}`} style={{ transitionDelay: "0.1s" }}>
                            <span className={styles.featureIcon}>☕</span>
                            <h3 className={styles.featureTitle}>Omnichannel Ordering</h3>
                            <p className={styles.featureDesc}>
                                Unified Kiosk, Mobile App, and Web ordering system synced in real-time.
                            </p>
                        </div>

                        <div className={`${styles.featureCard} ${styles.reveal}`} style={{ transitionDelay: "0.2s" }}>
                            <span className={styles.featureIcon}>🎁</span>
                            <h3 className={styles.featureTitle}>Loyalty Integrated</h3>
                            <p className={styles.featureDesc}>
                                Built-in rewards engine that drives repeat visits and gamifies the coffee run.
                            </p>
                        </div>

                        <div className={`${styles.featureCard} ${styles.reveal}`} style={{ transitionDelay: "0.3s" }}>
                            <span className={styles.featureIcon}>🔄</span>
                            <h3 className={styles.featureTitle}>Inventory Sync</h3>
                            <p className={styles.featureDesc}>
                                Smart inventory management that automatically manages sold-out items across all endpoints.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Visual Showcase - Green Grounds POS Concept */}
            <section className={styles.showcase}>
                <div className={styles.wrapper}>
                    <div className={`${styles.showcaseImage} ${styles.reveal}`}>

                        {/* Green Grounds Implementation */}
                        <div className={styles.posContainer}>

                            {/* POS Header */}
                            <div className={styles.posHeader}>
                                <div className={styles.brand}>
                                    <div className={styles.logoIcon}>G</div>
                                    <div className={styles.logoText}>
                                        <span>GREEN</span>
                                        <span>GROUNDS</span>
                                        <span>COFFEE</span>
                                    </div>
                                </div>
                                <div className={styles.headerInfo}>
                                    <span className={styles.date}>Thursday, 23 June</span>
                                    <div className={styles.userProfile}>
                                        <div className={styles.avatar}></div>
                                    </div>
                                </div>
                            </div>

                            {/* POS Body */}
                            <div className={styles.posBody}>

                                {/* Left: Search & Categories */}
                                <div className={styles.posMain}>
                                    <div className={styles.searchBar}>
                                        <span>🔍 Search</span>
                                    </div>

                                    {/* Categories */}
                                    <div className={styles.categoryGrid}>
                                        <div className={`${styles.categoryCard} ${styles.active}`}>
                                            <span className={styles.catLabel}>Available</span>
                                            <h3>Coffee</h3>
                                            <p>50 items</p>
                                        </div>
                                        <div className={styles.categoryCard}>
                                            <span className={styles.catLabel}>Available</span>
                                            <h3>Tea</h3>
                                            <p>20 items</p>
                                        </div>
                                        <div className={styles.categoryCard}>
                                            <span className={`${styles.catLabel} ${styles.alert}`}>Restock</span>
                                            <h3>Snack</h3>
                                            <p>10 items</p>
                                        </div>
                                    </div>

                                    {/* Products */}
                                    <div className={styles.productGrid}>
                                        <div className={styles.productCard}>
                                            <div className={styles.prodImg}>☕</div>
                                            <h4>Espresso</h4>
                                            <p>$4.2</p>
                                            <button className={styles.addBtn}>+</button>
                                        </div>
                                        <div className={styles.productCard}>
                                            <div className={styles.prodImg}>🥛</div>
                                            <h4>Cappuccino</h4>
                                            <p>$3.3</p>
                                            <button className={styles.addBtn}>+</button>
                                        </div>
                                        <div className={styles.productCard}>
                                            <div className={styles.prodImg}>🍵</div>
                                            <h4>Latte</h4>
                                            <p>$4.0</p>
                                            <button className={styles.addBtn}>+</button>
                                        </div>
                                        <div className={styles.productCard}>
                                            <div className={styles.prodImg}>🧊</div>
                                            <h4>Iced</h4>
                                            <p>$3.8</p>
                                            <button className={styles.addBtn}>+</button>
                                        </div>
                                    </div>
                                </div>

                                {/* Right: Cart/Sidebar */}
                                <div className={styles.posSidebar}>
                                    <div className={styles.orderHeader}>
                                        <div className={styles.orderNo}>Order #27362</div>
                                        <div className={styles.toggle}>
                                            <span className={styles.active}>Dine In</span>
                                            <span>To Go</span>
                                        </div>
                                    </div>
                                    <div className={styles.orderList}>
                                        <div className={styles.orderItem}>
                                            <div className={styles.thumb}>☕</div>
                                            <div className={styles.details}>
                                                <h5>Americano</h5>
                                                <span>x2</span>
                                            </div>
                                            <div className={styles.price}>$8.4</div>
                                        </div>
                                        <div className={styles.orderItem}>
                                            <div className={styles.thumb}>🥛</div>
                                            <div className={styles.details}>
                                                <h5>Espresso</h5>
                                                <span>x1</span>
                                            </div>
                                            <div className={styles.price}>$5.3</div>
                                        </div>
                                    </div>
                                    <div className={styles.checkoutBtn}>
                                        Pay Now
                                    </div>
                                </div>
                            </div>

                            {/* Template Link */}
                            <div className={styles.templateLinkContainer}>
                                <a
                                    href="https://dribbble.com/search/cafe"
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
                    <h2 className={`${styles.ctaTitle} ${styles.reveal}`}>Launch Your Cafe</h2>
                    <Link href="/contact" className={`${styles.btnPrimary} ${styles.reveal}`} style={{ transitionDelay: "0.1s" }}>
                        Start Your Project
                    </Link>
                </div>
            </section>
        </main>
    );
}
