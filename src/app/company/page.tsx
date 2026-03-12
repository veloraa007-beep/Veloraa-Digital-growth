import Link from "next/link";
import { Metadata } from "next";
import { ArrowLeft, ArrowRight, Users, Zap, Target, Building2 } from "lucide-react";

export const metadata: Metadata = {
    title: "Company Overview — Velora | Digital Infrastructure Studio",
    description:
        "Learn about VELORA — the digital infrastructure studio serving small businesses, clinics, startups, and personal brands with secure, scalable digital systems.",
    alternates: {
        canonical: "https://velora.digital/company",
    },
};

const audiences = [
    {
        icon: Building2,
        name: "Small Businesses",
        description:
            "Local businesses looking to establish a professional digital presence that generates leads and builds credibility.",
    },
    {
        icon: Users,
        name: "Clinics & Healthcare",
        description:
            "Medical practices and wellness clinics needing secure, patient-friendly digital platforms with appointment systems.",
    },
    {
        icon: Zap,
        name: "Startups",
        description:
            "Early-stage ventures requiring scalable infrastructure that can grow with their ambitions — from MVP to market leader.",
    },
    {
        icon: Target,
        name: "Personal Brands",
        description:
            "Professionals and creators building authority online with custom digital identities, portfolios, and lead funnels.",
    },
];

const services = [
    "Premium Website Development",
    "SaaS Platform Engineering",
    "WhatsApp & Email Automation",
    "SEO & Performance Optimization",
    "Digital Identity Systems",
    "Lead Generation Funnels",
    "NFC & Paper Business Cards",
    "Security Audits & Hardening",
];

export default function CompanyOverviewPage() {
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
                        About the Studio
                    </span>
                    <h1
                        className="font-serif font-semibold text-[#EAE6DD] tracking-tight leading-[1.1] mb-4"
                        style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
                    >
                        Company{" "}
                        <span className="italic text-[#EAE6DD]/40 font-light">
                            Overview
                        </span>
                    </h1>
                    <p className="text-[#A8A39B] text-base sm:text-lg leading-relaxed font-light max-w-2xl">
                        VELORA is a digital infrastructure studio headquartered in Bangalore, India.
                        We engineer secure, scalable, and automated digital systems for businesses
                        that refuse to settle for average.
                    </p>
                </div>

                <div className="space-y-16 text-[#A8A39B] font-light leading-relaxed">
                    {/* What We Do */}
                    <section>
                        <h2 className="text-xl font-serif font-semibold text-[#EAE6DD] mb-4 flex items-center gap-3">
                            <span className="text-[#C2A35D]/30 font-light text-2xl">
                                01
                            </span>
                            What We Do
                        </h2>
                        <div className="pl-10 space-y-4">
                            <p>
                                VELORA provides{" "}
                                <span className="text-[#EAE6DD] font-medium">
                                    end-to-end digital infrastructure services
                                </span>{" "}
                                — from premium websites and SaaS platforms to automation
                                systems and security hardening. We don&apos;t just build digital
                                products; we engineer complete growth ecosystems designed to
                                operate, scale, and convert with minimal manual intervention.
                            </p>
                            <p>
                                Every solution is custom-built to address specific business
                                challenges — whether it&apos;s generating leads, automating
                                customer communication, establishing online authority, or
                                securing sensitive data.
                            </p>
                        </div>
                    </section>

                    {/* Our Services */}
                    <section>
                        <h2 className="text-xl font-serif font-semibold text-[#EAE6DD] mb-4 flex items-center gap-3">
                            <span className="text-[#C2A35D]/30 font-light text-2xl">
                                02
                            </span>
                            Our Services
                        </h2>
                        <div className="pl-10">
                            <div className="bg-[#1A1C1E] rounded-xl border border-[#2A2E30] p-6 md:p-8">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {services.map((service, i) => (
                                        <div
                                            key={i}
                                            className="flex items-start gap-3 text-sm"
                                        >
                                            <span className="w-1.5 h-1.5 rounded-full bg-[#C2A35D]/40 mt-1.5 shrink-0" />
                                            <span className="text-[#EAE6DD]/80">
                                                {service}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Problems We Solve */}
                    <section>
                        <h2 className="text-xl font-serif font-semibold text-[#EAE6DD] mb-4 flex items-center gap-3">
                            <span className="text-[#C2A35D]/30 font-light text-2xl">
                                03
                            </span>
                            Problems We Solve
                        </h2>
                        <div className="pl-10 space-y-4">
                            <p>
                                Most businesses struggle with fragmented digital tools,
                                unreliable agencies, and websites that look good but don&apos;t
                                perform. VELORA solves this by providing:
                            </p>
                            <ul className="space-y-2 text-sm">
                                {[
                                    "A unified digital infrastructure that connects your website, CRM, and communication channels",
                                    "Automation systems that eliminate repetitive tasks and nurture leads automatically",
                                    "Security-first architecture that protects your business and client data",
                                    "Performance optimization that ensures fast load times, strong SEO, and high conversion rates",
                                    "Transparent project management with clear timelines, pricing, and milestones",
                                ].map((item, i) => (
                                    <li
                                        key={i}
                                        className="flex items-start gap-3"
                                    >
                                        <span className="w-1 h-1 rounded-full bg-[#C2A35D]/40 mt-2 shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </section>

                    {/* Who We Serve */}
                    <section>
                        <h2 className="text-xl font-serif font-semibold text-[#EAE6DD] mb-6 flex items-center gap-3">
                            <span className="text-[#C2A35D]/30 font-light text-2xl">
                                04
                            </span>
                            Who We Serve
                        </h2>
                        <div className="pl-10 grid grid-cols-1 sm:grid-cols-2 gap-5">
                            {audiences.map((aud, i) => {
                                const Icon = aud.icon;
                                return (
                                    <div
                                        key={i}
                                        className="bg-[#1A1C1E] rounded-xl border border-[#2A2E30] p-6 hover:border-[#C2A35D]/20 transition-colors duration-500"
                                    >
                                        <Icon className="w-5 h-5 text-[#C2A35D]/50 mb-4" />
                                        <h3 className="text-[#EAE6DD] font-serif text-sm font-semibold mb-2">
                                            {aud.name}
                                        </h3>
                                        <p className="text-[#A8A39B]/70 text-xs leading-relaxed">
                                            {aud.description}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                        <p className="pl-10 mt-6 text-sm">
                            We also work with{" "}
                            <span className="text-[#EAE6DD] font-medium">
                                local service companies
                            </span>{" "}
                            — from restaurants and salons to law firms and
                            real estate agencies — helping them transition
                            from traditional operations to digitally-powered
                            growth engines.
                        </p>
                    </section>

                    {/* CTA */}
                    <section className="pt-8">
                        <div className="bg-[#1A1C1E] rounded-2xl border border-[#2A2E30] p-8 md:p-10 text-center">
                            <h3
                                className="font-serif font-semibold text-[#EAE6DD] tracking-tight mb-4"
                                style={{ fontSize: "clamp(1.2rem, 2.5vw, 1.8rem)" }}
                            >
                                Let&apos;s Build{" "}
                                <span className="italic text-[#EAE6DD]/40 font-light">
                                    Together
                                </span>
                            </h3>
                            <p className="text-[#A8A39B] text-sm mb-8 max-w-md mx-auto">
                                Whether you&apos;re launching from scratch or scaling an existing
                                operation, VELORA has the infrastructure expertise to make it
                                happen.
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
