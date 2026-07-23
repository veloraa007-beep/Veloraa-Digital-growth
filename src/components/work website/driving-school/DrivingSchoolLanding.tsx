"use client";

import React from "react";
import DrivingSchoolHero from "./DrivingSchoolHero";
import { DRIVING_SCHOOL_SYSTEM_CONFIG } from "./DrivingSchoolConfig";

export default function DrivingSchoolLanding() {
    const { features, pricing, testimonials } = DRIVING_SCHOOL_SYSTEM_CONFIG;

    return (
        <div className="bg-[#0A0D0B] text-white min-h-screen font-sans selection:bg-emerald-500 selection:text-black">
            {/* Hero Section */}
            <DrivingSchoolHero />

            {/* Features System Section */}
            <section className="py-24 px-6 max-w-6xl mx-auto border-b border-emerald-900/30">
                <div className="text-center mb-16">
                    <span className="text-xs font-mono tracking-widest text-emerald-400 uppercase block mb-3">
                        SYSTEM ARCHITECTURE
                    </span>
                    <h2 className="text-3xl md:text-5xl font-serif font-light text-emerald-50">
                        Engineered for Safe Driving & Effortless Management
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {features.map((feat, idx) => (
                        <div
                            key={idx}
                            className="p-8 rounded-2xl bg-emerald-950/20 border border-emerald-900/40 hover:border-emerald-500/40 transition-all duration-300 group"
                        >
                            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 font-mono text-sm mb-6 group-hover:bg-emerald-400 group-hover:text-black transition-all">
                                0{idx + 1}
                            </div>
                            <h3 className="text-xl font-serif font-medium text-emerald-100 mb-3">
                                {feat.title}
                            </h3>
                            <p className="text-emerald-200/70 text-sm leading-relaxed">
                                {feat.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Packages / Pricing Section */}
            <section id="packages" className="py-24 px-6 max-w-6xl mx-auto border-b border-emerald-900/30">
                <div className="text-center mb-16">
                    <span className="text-xs font-mono tracking-widest text-emerald-400 uppercase block mb-3">
                        INVESTMENT & PACKAGES
                    </span>
                    <h2 className="text-3xl md:text-5xl font-serif font-light text-emerald-50 mb-4">
                        Transparent Training Plans
                    </h2>
                    <p className="text-emerald-200/60 text-sm max-w-xl mx-auto">
                        No hidden fees. Every package includes certified instructor time, safety vehicles, and test preparation.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {pricing.map((tier, idx) => (
                        <div
                            key={idx}
                            className={`relative p-8 rounded-2xl flex flex-col justify-between border transition-all duration-300 ${
                                tier.popular
                                    ? "bg-emerald-950/40 border-emerald-400 shadow-xl shadow-emerald-950/80"
                                    : "bg-emerald-950/10 border-emerald-900/40 hover:border-emerald-800"
                            }`}
                        >
                            {tier.popular && (
                                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-emerald-400 text-black text-[10px] font-bold uppercase tracking-widest">
                                    MOST POPULAR
                                </span>
                            )}

                            <div>
                                <h3 className="text-xl font-serif font-medium text-emerald-100 mb-2">
                                    {tier.name}
                                </h3>
                                <p className="text-xs font-mono text-emerald-400 mb-6">{tier.duration}</p>
                                <div className="text-4xl font-serif font-bold text-white mb-8">
                                    {tier.price}
                                </div>

                                <ul className="space-y-3 mb-8">
                                    {tier.features.map((item, fIdx) => (
                                        <li key={fIdx} className="flex items-center gap-3 text-xs text-emerald-200/80">
                                            <span className="text-emerald-400">✓</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <a
                                href="https://api.whatsapp.com/message/CSJUP7QRLQFYL1?autoload=1&app_absent=0"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`w-full py-3 text-center rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors ${
                                    tier.popular
                                        ? "bg-emerald-400 text-black hover:bg-emerald-300"
                                        : "bg-emerald-900/40 text-emerald-200 hover:bg-emerald-800/60"
                                }`}
                            >
                                Enroll Now via WhatsApp
                            </a>
                        </div>
                    ))}
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-24 px-6 max-w-5xl mx-auto text-center border-b border-emerald-900/30">
                <span className="text-xs font-mono tracking-widest text-emerald-400 uppercase block mb-3">
                    STUDENT PROOF
                </span>
                <h2 className="text-3xl md:text-5xl font-serif font-light text-emerald-50 mb-16">
                    What Our Graduate Drivers Say
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                    {testimonials.map((t, idx) => (
                        <div key={idx} className="p-8 rounded-2xl bg-emerald-950/20 border border-emerald-900/30">
                            <div className="text-yellow-400 text-sm mb-4">{"★".repeat(t.rating)}</div>
                            <p className="text-emerald-100/90 text-sm italic mb-6">"{t.comment}"</p>
                            <div>
                                <div className="text-sm font-semibold text-emerald-300">{t.name}</div>
                                <div className="text-xs text-emerald-400/60">{t.role}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Final CTA Banner */}
            <section className="py-24 px-6 max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-5xl font-serif font-light text-emerald-50 mb-6">
                    Ready to Get Your Driving License?
                </h2>
                <p className="text-emerald-200/70 text-base mb-8 max-w-lg mx-auto">
                    Speak directly with an Apex Master Instructor on WhatsApp and schedule your first behind-the-wheel session today.
                </p>
                <a
                    href="https://api.whatsapp.com/message/CSJUP7QRLQFYL1?autoload=1&app_absent=0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-10 py-5 bg-emerald-400 text-black font-bold uppercase tracking-widest text-xs rounded-lg hover:bg-emerald-300 transition-colors shadow-2xl shadow-emerald-950"
                >
                    Chat Directly on WhatsApp (+91 85508 83051)
                </a>
            </section>
        </div>
    );
}
