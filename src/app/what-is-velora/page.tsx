import Link from "next/link";
import { Metadata } from "next";
import { ArrowLeft, ArrowRight, Shield, Cpu, Network, Lock } from "lucide-react";

export const metadata: Metadata = {
    title: "What is VELORA — Digital Infrastructure Studio",
    description:
        "VELORA builds secure, scalable digital infrastructure and automation systems for businesses. Discover what makes us different.",
    alternates: {
        canonical: "https://velora.digital/what-is-velora",
    },
};

const capabilities = [
    {
        icon: Shield,
        title: "Security-First Architecture",
        description:
            "Every system is built with cybersecurity principles at its core — from encrypted data pipelines to hardened server configurations.",
    },
    {
        icon: Cpu,
        title: "Automation Systems",
        description:
            "Custom automation pipelines that handle repetitive tasks, nurture leads, and scale your operations — all running 24/7 without manual effort.",
    },
    {
        icon: Network,
        title: "Scalable Digital Architecture",
        description:
            "Infrastructure designed to grow with your business. No rebuilds, no breakdowns — just seamless expansion when you're ready.",
    },
    {
        icon: Lock,
        title: "Data Protection",
        description:
            "Enterprise-grade data handling practices, SSL/TLS enforcement, and privacy-focused design that keeps your business and your clients safe.",
    },
];

export default function WhatIsVeloraPage() {
    return (
        <main className="min-h-screen bg-[#0F1113] pt-32 pb-24 px-6 md:px-12">
            <div className="max-w-3xl mx-auto">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-[#A8A39B]/50 hover:text-[#C2A35D] transition-colors mb-12 text-xs uppercase tracking-[0.2em] font-medium"
                >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    Home
                </Link>

                {/* Header */}
                <div className="mb-16">
                    <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#C2A35D]/60 mb-4 block">
                        Digital Infrastructure
                    </span>
                    <h1
                        className="font-serif font-semibold text-[#EAE6DD] tracking-tight leading-[1.1] mb-4"
                        style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
                    >
                        What is{" "}
                        <span className="italic text-[#EAE6DD]/40 font-light">
                            VELORA?
                        </span>
                    </h1>
                    <p className="text-[#A8A39B] text-base sm:text-lg leading-relaxed font-light max-w-2xl">
                        VELORA is not a marketing agency. It is a{" "}
                        <span className="text-[#EAE6DD] font-medium">
                            digital infrastructure studio
                        </span>{" "}
                        built to architect secure, scalable, and automated
                        growth systems for ambitious businesses.
                    </p>
                </div>

                <div className="space-y-16 text-[#A8A39B] font-light leading-relaxed">
                    {/* The Mission */}
                    <section>
                        <h2 className="text-xl font-serif font-semibold text-[#EAE6DD] mb-4 flex items-center gap-3">
                            <span className="text-[#C2A35D]/30 font-light text-2xl">
                                01
                            </span>
                            The Mission
                        </h2>
                        <div className="pl-10 space-y-4">
                            <p>
                                At VELORA, we believe that{" "}
                                <span className="text-[#EAE6DD] font-medium">
                                    real digital growth starts with infrastructure, not aesthetics
                                </span>
                                . While most agencies focus on how a website looks, we focus on how
                                it works — the backend logic, automation pipelines, security layers,
                                and scalable architecture that power long-term success.
                            </p>
                            <p>
                                We build digital systems the way enterprises do — structured,
                                resilient, and engineered for sustained expansion. The difference?
                                We make this level of engineering accessible to businesses of every
                                size.
                            </p>
                        </div>
                    </section>

                    {/* What We Build */}
                    <section>
                        <h2 className="text-xl font-serif font-semibold text-[#EAE6DD] mb-4 flex items-center gap-3">
                            <span className="text-[#C2A35D]/30 font-light text-2xl">
                                02
                            </span>
                            What We Build
                        </h2>
                        <div className="pl-10 space-y-4">
                            <p>
                                VELORA creates complete digital ecosystems — not just websites. Our
                                systems include high-performance web platforms, automated workflows,
                                lead generation funnels, CRM integrations, and security-hardened
                                hosting environments.
                            </p>
                            <p>
                                Every solution is{" "}
                                <span className="text-[#EAE6DD] font-medium">
                                    custom-engineered from the ground up
                                </span>
                                . No templates. No shortcuts. No generic solutions. Each project is
                                treated as a unique engineering challenge with a bespoke
                                infrastructure blueprint.
                            </p>
                        </div>
                    </section>

                    {/* Core Capabilities */}
                    <section>
                        <h2 className="text-xl font-serif font-semibold text-[#EAE6DD] mb-6 flex items-center gap-3">
                            <span className="text-[#C2A35D]/30 font-light text-2xl">
                                03
                            </span>
                            Core Capabilities
                        </h2>
                        <div className="pl-10 grid grid-cols-1 sm:grid-cols-2 gap-5">
                            {capabilities.map((cap, i) => {
                                const Icon = cap.icon;
                                return (
                                    <div
                                        key={i}
                                        className="bg-[#1A1C1E] rounded-xl border border-[#2A2E30] p-6 hover:border-[#C2A35D]/20 transition-colors duration-500"
                                    >
                                        <Icon className="w-5 h-5 text-[#C2A35D]/50 mb-4" />
                                        <h3 className="text-[#EAE6DD] font-serif text-sm font-semibold mb-2">
                                            {cap.title}
                                        </h3>
                                        <p className="text-[#A8A39B]/70 text-xs leading-relaxed">
                                            {cap.description}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </section>

                    {/* The Philosophy */}
                    <section>
                        <h2 className="text-xl font-serif font-semibold text-[#EAE6DD] mb-4 flex items-center gap-3">
                            <span className="text-[#C2A35D]/30 font-light text-2xl">
                                04
                            </span>
                            The Philosophy
                        </h2>
                        <div className="pl-10 space-y-4">
                            <p>
                                We operate under a simple philosophy:{" "}
                                <span className="text-[#C2A35D] font-medium italic">
                                    Build. Automate. Dominate.
                                </span>
                            </p>
                            <p>
                                Build systems that are structurally sound. Automate processes that
                                waste your time. Dominate your market with infrastructure your
                                competitors don&apos;t have.
                            </p>
                            <p className="text-[#EAE6DD]/70 font-normal">
                                Because growth without infrastructure is just noise.
                            </p>
                        </div>
                    </section>

                    {/* CTA */}
                    <section className="pt-8">
                        <div className="bg-[#1A1C1E] rounded-2xl border border-[#2A2E30] p-8 md:p-10 text-center">
                            <h3
                                className="font-serif font-semibold text-[#EAE6DD] tracking-tight mb-4"
                                style={{ fontSize: "clamp(1.2rem, 2.5vw, 1.8rem)" }}
                            >
                                Ready to Build Your{" "}
                                <span className="italic text-[#EAE6DD]/40 font-light">
                                    Infrastructure?
                                </span>
                            </h3>
                            <p className="text-[#A8A39B] text-sm mb-8 max-w-md mx-auto">
                                Let&apos;s discuss how VELORA can engineer the digital backbone
                                your business needs to scale.
                            </p>
                            <a
                                href="https://api.whatsapp.com/send/?phone=919901981097&text=Hi%20Velora%2C%20I%27d%20like%20to%20start%20the%20conversation.&type=phone_number&app_absent=0"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 px-8 py-4 border border-[#C2A35D]/30 text-[#C2A35D] text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#C2A35D]/10 hover:border-[#C2A35D]/50 transition-all duration-300 rounded-lg"
                            >
                                <span>Start the Conversation</span>
                                <ArrowRight className="w-3.5 h-3.5" />
                            </a>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    );
}
