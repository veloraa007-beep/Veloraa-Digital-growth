import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "About — Velora | Digital Infrastructure Studio",
    description:
        "Velora is a digital infrastructure studio built to architect scalable, secure, and automated growth systems for ambitious businesses.",
    alternates: {
        canonical: "https://velora.digital/about",
    },
};

/* ── TESTIMONIALS DATA ── */
const testimonials = [
    {
        quote: "Velora didn't just build us a website. They engineered an entire growth system that runs 24/7.",
        author: "Operations Director",
        company: "Premium Real Estate Firm",
    },
    {
        quote: "The attention to security and infrastructure was something we'd never seen from a digital partner before.",
        author: "Founder",
        company: "FinTech Startup",
    },
    {
        quote: "Our conversion rate tripled within 60 days of launching the system Velora built.",
        author: "CEO",
        company: "E-commerce Brand",
    },
    {
        quote: "They think like engineers, not designers. That's exactly what we needed.",
        author: "CTO",
        company: "SaaS Platform",
    },
];

/* ── CORE PRINCIPLES ── */
const principles = [
    {
        number: "01",
        title: "Scalability",
        description: "Built to expand without rebuilding.",
    },
    {
        number: "02",
        title: "Performance",
        description: "Optimized for speed, clarity, and efficiency.",
    },
    {
        number: "03",
        title: "Security",
        description: "Cybersecurity-first architecture from day one.",
    },
];

export default function AboutPage() {
    return (
        <main className="bg-[#0F1113] text-[#EAE6DD] overflow-x-hidden">
            {/* ═══════════════════════════════════════════════
                1. HERO — CINEMATIC BUT CONTROLLED
            ═══════════════════════════════════════════════ */}
            <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden grain-overlay">
                {/* Background Image */}
                <div className="absolute inset-0 -z-20">
                    <Image
                        src="/hero-bg.png"
                        alt=""
                        fill
                        priority
                        className="object-cover blur-[4px]"
                        sizes="100vw"
                    />
                    <div className="absolute inset-0 bg-[rgba(15,17,19,0.92)]" />
                </div>

                <div className="max-w-4xl mx-auto text-center px-6 py-32">
                    <h1
                        className="font-serif font-semibold tracking-tight leading-[1.1] mb-6"
                        style={{ fontSize: "clamp(2rem, 5vw, 4.5rem)" }}
                    >
                        The Architecture
                        <br />
                        <span className="italic text-[#EAE6DD]/40 font-light">
                            Behind Velora
                        </span>
                    </h1>

                    <p className="text-[#C2A35D]/80 font-serif italic text-lg sm:text-xl tracking-wide mb-8">
                        Engineered for Scale. Designed for Authority.
                    </p>

                    <p className="text-[#A8A39B] text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-light mb-12">
                        Velora is not a marketing agency. It is a digital
                        infrastructure studio built to architect scalable,
                        secure, and automated growth systems for ambitious
                        businesses.
                    </p>

                    <Link
                        href="/services"
                        className="inline-flex items-center gap-3 px-8 py-4 border border-[#C2A35D]/30 text-[#C2A35D] text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#C2A35D]/10 hover:border-[#C2A35D]/50 transition-all duration-300 rounded-lg"
                    >
                        <span>Explore Our Systems</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════
                2. THE PHILOSOPHY — CLEAN TEXT BLOCK
            ═══════════════════════════════════════════════ */}
            <section className="py-24 md:py-32 px-6 md:px-12">
                <div className="max-w-5xl mx-auto flex gap-12 md:gap-16">
                    {/* Gold vertical divider */}
                    <div className="hidden md:block w-[2px] bg-gradient-to-b from-transparent via-[#C2A35D]/40 to-transparent shrink-0" />

                    <div className="max-w-3xl">
                        <h2
                            className="font-serif font-semibold tracking-tight leading-[1.1] mb-8"
                            style={{
                                fontSize: "clamp(1.6rem, 3.5vw, 3rem)",
                            }}
                        >
                            Infrastructure First.
                            <br />
                            <span className="italic text-[#EAE6DD]/40 font-light">
                                Aesthetics Second.
                            </span>
                        </h2>

                        <div className="space-y-6 text-[#A8A39B] text-base sm:text-lg leading-relaxed font-light">
                            <p>
                                Most agencies focus on appearance.
                                <br />
                                We focus on architecture.
                            </p>
                            <p>
                                Every brand we build is supported by backend
                                logic, automation pipelines, performance
                                optimization, and cybersecurity-first design
                                principles.
                            </p>
                            <p className="text-[#EAE6DD]/70 font-normal">
                                Because real growth isn&apos;t visual.
                                <br />
                                It&apos;s structural.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════
                2.5 FOUNDER INTRO — PERSONAL PRESENCE
            ═══════════════════════════════════════════════ */}
            <section className="py-24 md:py-32 px-6 md:px-12 bg-[#141618]">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
                    {/* LEFT: Founder Image */}
                    <div className="relative group w-full max-w-[420px] mx-auto md:mx-0">
                        <div className="relative overflow-hidden rounded-2xl shadow-2xl shadow-black/50 border border-[#2A2E30] aspect-[4/5] bg-[#1A1C1E]">
                            <Image
                                src="/images/founder.jpg"
                                alt="Founder — Dhanush Gangadhar, Velora"
                                fill
                                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                            />
                        </div>

                        {/* Intro Card */}
                        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[90%] md:w-[85%] bg-black/80 backdrop-blur-md border border-[#2A2E30] p-5 rounded-xl text-center shadow-xl">
                            <div className="text-[#EAE6DD] font-serif text-lg tracking-wide">
                                Founder of Velora
                            </div>
                            <div className="text-[10px] uppercase tracking-wider text-[#A8A39B]/60 mt-1 font-medium">
                                Engineering Student • Cybersecurity Enthusiast
                            </div>
                        </div>
                    </div>

                    {/* RIGHT: Positioning Text */}
                    <div className="flex flex-col justify-center h-full pt-8 md:pt-12">
                        <div className="self-start mb-8">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-[#C2A35D]/10 border border-[#C2A35D]/20 text-[#C2A35D] text-xs font-bold uppercase tracking-[0.15em]">
                                Built Like an Attacker Thinks
                            </span>
                        </div>

                        <p className="text-xl md:text-2xl font-serif text-[#EAE6DD]/90 leading-relaxed mb-10">
                            Velora was founded with a simple realization: large
                            enterprises win because they engineer systems — not
                            just websites.
                            <br />
                            <span className="text-[#EAE6DD]/50 italic">
                                Small businesses deserve that same
                                infrastructure.
                            </span>
                        </p>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════
                3. THE FOUNDER — SYSTEMS ARCHITECT POSITIONING
            ═══════════════════════════════════════════════ */}
            <section className="py-24 md:py-32 px-6 md:px-12">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 items-center">
                    {/* LEFT: Text */}
                    <div>
                        <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#C2A35D]/60 mb-6 block">
                            The Systems Architect
                        </span>

                        <h2
                            className="font-serif font-semibold tracking-tight leading-[1.1] mb-8"
                            style={{
                                fontSize: "clamp(1.6rem, 3vw, 2.8rem)",
                            }}
                        >
                            The Systems
                            <br />
                            <span className="italic text-[#EAE6DD]/40 font-light">
                                Architect
                            </span>
                        </h2>

                        <div className="space-y-6 text-[#A8A39B] text-base sm:text-lg leading-relaxed font-light">
                            <p>
                                Velora was founded with one principle — build
                                businesses like systems, not experiments.
                            </p>
                            <p>
                                I approach growth the way cybersecurity
                                approaches defense: intentionally, methodically,
                                and without weak points.
                            </p>
                            <p className="text-[#EAE6DD]/70 font-normal">
                                Every automation, funnel, and infrastructure
                                layer is designed for scale.
                            </p>
                        </div>
                    </div>

                    {/* RIGHT: Workstation Image */}
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[#2A2E30]">
                        <Image
                            src="/images/founder-workstation.png"
                            alt="Systems architecture workstation"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0F1113]/60 to-transparent" />
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════
                3.2 CO-FOUNDER — STRUCTURAL DESIGN LEAD
            ═══════════════════════════════════════════════ */}
            <section className="py-24 md:py-32 px-6 md:px-12 bg-[#141618]">
                <div className="max-w-5xl mx-auto">
                    <div className="flex gap-12 md:gap-16">
                        {/* Gold vertical divider */}
                        <div className="hidden md:block w-[2px] bg-gradient-to-b from-transparent via-[#C2A35D]/40 to-transparent shrink-0" />

                        <div className="max-w-3xl">
                            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#C2A35D]/60 mb-6 block">
                                Co-Founder &amp; Structural Design Lead
                            </span>

                            <h2
                                className="font-serif font-semibold tracking-tight leading-[1.1] mb-8"
                                style={{
                                    fontSize: "clamp(1.6rem, 3vw, 2.8rem)",
                                }}
                            >
                                Structural{" "}
                                <span className="italic text-[#EAE6DD]/40 font-light">
                                    Precision
                                </span>
                            </h2>

                            <div className="space-y-6 text-[#A8A39B] text-base sm:text-lg leading-relaxed font-light">
                                <p>
                                    Harshit Gowda brings architectural thinking
                                    into Velora&apos;s foundation.
                                </p>
                                <p>
                                    With a background in architectural
                                    engineering, he approaches systems through
                                    structure, proportion, and long-term
                                    durability. His design philosophy extends
                                    beyond aesthetics — every visual identity,
                                    logo, and brand system is treated as a
                                    structural framework, not decoration.
                                </p>
                                <p>
                                    While Velora operates with
                                    cybersecurity-first principles, Harshit
                                    contributes a grounded understanding of
                                    business realities, spatial logic, and
                                    emerging technology landscapes. His
                                    awareness of how digital presence translates
                                    into real-world credibility strengthens
                                    Velora&apos;s strategic depth.
                                </p>
                                <p className="text-[#EAE6DD]/70 font-normal">
                                    Together, Velora merges digital
                                    infrastructure with architectural precision
                                    — building brands that are not only secure
                                    and scalable, but structurally intentional.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* ── Partnership Grid ── */}
                    <div className="mt-20 grid grid-cols-2 gap-0 border border-[#2A2E30] rounded-2xl overflow-hidden">
                        {/* Headers */}
                        <div className="p-6 md:p-8 bg-[#1A1C1E] border-b border-r border-[#2A2E30] text-center">
                            <span className="text-[#EAE6DD] font-serif text-lg font-semibold">
                                Founder
                            </span>
                        </div>
                        <div className="p-6 md:p-8 bg-[#1A1C1E] border-b border-[#2A2E30] text-center">
                            <span className="text-[#EAE6DD] font-serif text-lg font-semibold">
                                Co-Founder
                            </span>
                        </div>

                        {/* Row 1 */}
                        <div className="p-5 md:p-6 border-b border-r border-[#2A2E30] text-center">
                            <span className="text-[#C2A35D]/80 text-sm font-medium">
                                Systems Architecture
                            </span>
                        </div>
                        <div className="p-5 md:p-6 border-b border-[#2A2E30] text-center">
                            <span className="text-[#C2A35D]/80 text-sm font-medium">
                                Structural Design
                            </span>
                        </div>

                        {/* Row 2 */}
                        <div className="p-5 md:p-6 border-b border-r border-[#2A2E30] text-center">
                            <span className="text-[#A8A39B]/60 text-sm font-light">
                                Cybersecurity Mindset
                            </span>
                        </div>
                        <div className="p-5 md:p-6 border-b border-[#2A2E30] text-center">
                            <span className="text-[#A8A39B]/60 text-sm font-light">
                                Architectural Precision
                            </span>
                        </div>

                        {/* Row 3 */}
                        <div className="p-5 md:p-6 border-r border-[#2A2E30] text-center">
                            <span className="text-[#A8A39B]/60 text-sm font-light">
                                Automation &amp; Infrastructure
                            </span>
                        </div>
                        <div className="p-5 md:p-6 text-center">
                            <span className="text-[#A8A39B]/60 text-sm font-light">
                                Brand Identity &amp; Spatial Logic
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════
                3.5 INFRASTRUCTURE SHOWCASE — THE CRAFT
            ═══════════════════════════════════════════════ */}
            <section className="relative py-24 md:py-32 overflow-hidden bg-[#0D0F11]">
                <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* LEFT: Headline + Scattered Tech Images */}
                    <div className="relative min-h-[500px] flex items-center justify-center">
                        {/* VS Code — top left */}
                        <div className="absolute -top-4 -left-4 md:top-0 md:left-0 w-[180px] md:w-[220px] rounded-xl overflow-hidden border border-[#2A2E30] shadow-2xl shadow-black/60 rotate-[-6deg] hover:rotate-0 transition-transform duration-700 z-10">
                            <Image
                                src="/images/vscode-dark.png"
                                alt="VS Code editor"
                                width={220}
                                height={160}
                                className="object-cover"
                            />
                        </div>

                        {/* Kali Linux — top right */}
                        <div className="absolute -top-8 right-0 md:right-4 w-[160px] md:w-[200px] rounded-xl overflow-hidden border border-[#2A2E30] shadow-2xl shadow-black/60 rotate-[8deg] hover:rotate-0 transition-transform duration-700 z-10">
                            <Image
                                src="/images/kali-terminal.png"
                                alt="Kali Linux terminal"
                                width={200}
                                height={150}
                                className="object-cover"
                            />
                        </div>

                        {/* Matrix Rain — bottom left */}
                        <div className="absolute bottom-0 -left-4 md:left-8 w-[150px] md:w-[190px] rounded-xl overflow-hidden border border-[#2A2E30] shadow-2xl shadow-black/60 rotate-[5deg] hover:rotate-0 transition-transform duration-700 z-10">
                            <Image
                                src="/images/matrix-rain.png"
                                alt="Matrix code rain"
                                width={190}
                                height={140}
                                className="object-cover"
                            />
                        </div>

                        {/* Cyber Shield — bottom right */}
                        <div className="absolute -bottom-4 right-4 md:right-0 w-[140px] md:w-[170px] rounded-xl overflow-hidden border border-[#2A2E30] shadow-2xl shadow-black/60 rotate-[-4deg] hover:rotate-0 transition-transform duration-700 z-10">
                            <Image
                                src="/images/cyber-shield.png"
                                alt="Cybersecurity shield"
                                width={170}
                                height={130}
                                className="object-cover"
                            />
                        </div>

                        {/* Center Headline */}
                        <div className="relative z-20 text-center px-4">
                            <h2
                                className="font-serif font-semibold leading-[1.15] tracking-tight"
                                style={{
                                    fontSize: "clamp(1.8rem, 4vw, 3.5rem)",
                                }}
                            >
                                That&apos;s where
                                <br />
                                <span className="italic text-[#C2A35D]">
                                    infrastructure
                                </span>
                                <br />
                                <span className="italic text-[#C2A35D]">
                                    engineering
                                </span>
                                <br />
                                comes in.
                            </h2>
                        </div>
                    </div>

                    {/* RIGHT: Copy + Gold Divider */}
                    <div className="flex gap-8">
                        {/* Gold vertical divider */}
                        <div className="hidden md:block w-[2px] bg-gradient-to-b from-transparent via-[#C2A35D]/40 to-transparent shrink-0 self-stretch" />

                        <div className="space-y-6 text-[#A8A39B] text-base leading-relaxed font-light">
                            <p>
                                Digital infrastructure means different things to
                                different businesses — which is why you
                                won&apos;t find generic promises here. But at
                                its core, a well-engineered digital system
                                conveys a strong sense of{" "}
                                <span className="text-[#EAE6DD]">
                                    precision and authority
                                </span>
                                . It feels secure, scalable, and built to last.
                            </p>

                            <p>
                                Yes, you need a website and an online presence.
                                But real infrastructure goes deeper — automated
                                pipelines, hardened security layers,
                                conversion-optimized funnels, and systems that{" "}
                                <span className="text-[#EAE6DD]">
                                    run while you sleep
                                </span>
                                .
                            </p>

                            <p className="text-[#EAE6DD] font-semibold text-lg">
                                That&apos;s what we engineer.
                            </p>

                            <p>
                                Together, we&apos;ll architect your digital
                                backbone — from code to deployment, from
                                security to scale. Because when your
                                infrastructure is{" "}
                                <span className="text-[#EAE6DD] font-semibold">
                                    engineered properly, you grow faster and
                                    break less
                                </span>
                                .
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════
                4. CORE PRINCIPLES — VISUAL GRID
            ═══════════════════════════════════════════════ */}
            <section className="py-24 md:py-32 px-6 md:px-12">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#C2A35D]/60 mb-4 block">
                            Foundation
                        </span>
                        <h2
                            className="font-serif font-semibold tracking-tight"
                            style={{
                                fontSize: "clamp(1.6rem, 3.5vw, 3rem)",
                            }}
                        >
                            Core Principles
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {principles.map((p) => (
                            <div
                                key={p.number}
                                className="p-8 md:p-10 rounded-2xl bg-[#1A1C1E] border border-[#2A2E30] hover:border-[#C2A35D]/20 transition-colors duration-500"
                            >
                                <span className="text-4xl md:text-5xl font-serif font-light text-[#C2A35D]/30 block mb-6">
                                    {p.number}
                                </span>
                                <h3 className="text-xl font-serif font-semibold text-[#EAE6DD] mb-3">
                                    {p.title}
                                </h3>
                                <p className="text-[#A8A39B] text-sm leading-relaxed font-light">
                                    {p.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════
                5. TESTIMONIALS — CENTERED SERIF QUOTES
            ═══════════════════════════════════════════════ */}
            <section className="py-24 md:py-32 px-6 md:px-12 bg-[#141618]">
                <div className="max-w-4xl mx-auto text-center">
                    <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#C2A35D]/60 mb-4 block">
                        Client Signal
                    </span>

                    {/* Gold divider */}
                    <div className="w-16 h-[2px] bg-[#C2A35D]/30 mx-auto mb-12" />

                    <div className="space-y-16">
                        {testimonials.map((t, i) => (
                            <div key={i}>
                                <blockquote className="font-serif italic text-xl sm:text-2xl md:text-3xl text-[#EAE6DD]/80 leading-relaxed mb-6">
                                    &ldquo;{t.quote}&rdquo;
                                </blockquote>
                                <div className="text-sm text-[#A8A39B]">
                                    <span className="text-[#C2A35D]/70 font-medium">
                                        {t.author}
                                    </span>
                                    <span className="mx-2 text-[#2A2E30]">
                                        —
                                    </span>
                                    <span className="font-light">
                                        {t.company}
                                    </span>
                                </div>
                                {i < testimonials.length - 1 && (
                                    <div className="w-8 h-[1px] bg-[#2A2E30] mx-auto mt-16" />
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════
                6. VISION — THINK BIG
            ═══════════════════════════════════════════════ */}
            <section className="py-24 md:py-32 px-6 md:px-12">
                <div className="max-w-4xl mx-auto">
                    <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#C2A35D]/60 mb-6 block">
                        Long-Term Architecture
                    </span>

                    <h2
                        className="font-serif font-semibold tracking-tight leading-[1.1] mb-8"
                        style={{
                            fontSize: "clamp(1.6rem, 3.5vw, 3rem)",
                        }}
                    >
                        The Long-Term
                        <br />
                        <span className="italic text-[#EAE6DD]/40 font-light">
                            Vision
                        </span>
                    </h2>

                    <div className="space-y-6 text-[#A8A39B] text-base sm:text-lg leading-relaxed font-light max-w-3xl">
                        <p>
                            Velora is being built as more than a service
                            provider. It is the foundation for a scalable
                            digital ecosystem — AI systems, automation
                            platforms, and enterprise-level infrastructure.
                        </p>
                        <p className="text-[#EAE6DD]/70 font-normal">
                            The goal is not short-term growth.
                            <br />
                            The goal is enduring architecture.
                        </p>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════
                7. FINAL CTA — CINEMATIC RETURN
            ═══════════════════════════════════════════════ */}
            <section className="relative py-32 md:py-40 px-6 overflow-hidden grain-overlay">
                {/* Background Image */}
                <div className="absolute inset-0 -z-20">
                    <Image
                        src="/hero-bg.png"
                        alt=""
                        fill
                        className="object-cover blur-[4px]"
                        sizes="100vw"
                    />
                    <div className="absolute inset-0 bg-[rgba(15,17,19,0.92)]" />
                </div>

                <div className="max-w-3xl mx-auto text-center relative z-10">
                    <h2
                        className="font-serif font-semibold tracking-tight leading-[1.1] mb-8"
                        style={{
                            fontSize: "clamp(1.6rem, 4vw, 3.5rem)",
                        }}
                    >
                        Build Your Digital
                        <br />
                        Infrastructure{" "}
                        <span className="italic text-[#EAE6DD]/40 font-light">
                            Properly.
                        </span>
                    </h2>

                    <a
                        href="https://api.whatsapp.com/send/?phone=919901981097&text=Hi%20Velora%2C%20I%27d%20like%20to%20start%20the%20conversation.&type=phone_number&app_absent=0"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 px-10 py-4 border-2 border-[#C2A35D]/50 text-[#C2A35D] text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#C2A35D] hover:text-black transition-all duration-300 rounded-lg"
                    >
                        <span>Start the Conversation</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                </div>
            </section>
        </main>
    );
}
