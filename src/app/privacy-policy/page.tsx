import Link from "next/link";
import { Metadata } from "next";
import { ArrowLeft, Shield } from "lucide-react";

export const metadata: Metadata = {
    title: "Privacy & Data Security — Velora",
    description:
        "Velora's privacy and data security policy. Data minimization, encryption standards, and responsible automation.",
};

const securityMeasures = [
    "HTTPS enforced across all endpoints (SSL/TLS encryption)",
    "Encrypted data transmission for all client communications",
    "Secure hosting environment via Vercel Edge Network",
    "Role-based access control on internal systems",
    "Regular infrastructure audits and dependency updates",
    "Limited third-party integrations — only vetted services",
];

export default function PrivacyPolicy() {
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
                        Data Governance
                    </span>
                    <h1
                        className="font-serif font-semibold text-[#EAE6DD] tracking-tight leading-[1.1] mb-4"
                        style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
                    >
                        Privacy &{" "}
                        <span className="italic text-[#EAE6DD]/40 font-light">
                            Data Security
                        </span>
                    </h1>
                    <p className="text-[#A8A39B]/60 text-xs uppercase tracking-[0.2em]">
                        Last Updated: February 2026
                    </p>
                </div>

                <div className="space-y-16 text-[#A8A39B] font-light leading-relaxed">
                    {/* 1. Data Collection Philosophy */}
                    <section>
                        <h2 className="text-xl font-serif font-semibold text-[#EAE6DD] mb-4 flex items-center gap-3">
                            <span className="text-[#C2A35D]/30 font-light text-2xl">
                                01
                            </span>
                            Data Collection Philosophy
                        </h2>
                        <div className="space-y-4 pl-10">
                            <p>
                                Velora practices{" "}
                                <span className="text-[#EAE6DD] font-medium">
                                    data minimization
                                </span>
                                . We only collect what is required to deliver
                                services, and nothing beyond operational
                                necessity.
                            </p>
                            <p>
                                We do not sell, trade, or monetize your data.
                                Every piece of information collected serves a
                                direct operational purpose — from service
                                delivery to infrastructure optimization.
                            </p>
                            <div className="mt-6 space-y-3">
                                <p className="text-[#EAE6DD]/70 text-sm font-medium">
                                    Information we may collect:
                                </p>
                                <ul className="space-y-2 text-sm">
                                    {[
                                        "Contact details (name, email, phone) provided voluntarily through forms",
                                        "Technical metadata (IP address, browser type, access times) for security monitoring",
                                        "Project-related data necessary for service delivery",
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
                        </div>
                    </section>

                    {/* 2. Security Measures */}
                    <section>
                        <h2 className="text-xl font-serif font-semibold text-[#EAE6DD] mb-4 flex items-center gap-3">
                            <span className="text-[#C2A35D]/30 font-light text-2xl">
                                02
                            </span>
                            Security Measures
                        </h2>
                        <div className="pl-10">
                            <p className="mb-6">
                                Security is not an afterthought at Velora — it
                                is foundational. Every system we build and
                                operate follows cybersecurity-first principles.
                            </p>
                            <div className="bg-[#1A1C1E] rounded-xl border border-[#2A2E30] p-6 md:p-8">
                                <div className="flex items-center gap-3 mb-6">
                                    <Shield className="w-4 h-4 text-[#C2A35D]/60" />
                                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C2A35D]/60">
                                        Active Protocols
                                    </span>
                                </div>
                                <ul className="space-y-3">
                                    {securityMeasures.map((measure, i) => (
                                        <li
                                            key={i}
                                            className="flex items-start gap-3 text-sm"
                                        >
                                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/60 mt-1.5 shrink-0" />
                                            <span className="text-[#EAE6DD]/80">
                                                {measure}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* 3. How We Use Your Information */}
                    <section>
                        <h2 className="text-xl font-serif font-semibold text-[#EAE6DD] mb-4 flex items-center gap-3">
                            <span className="text-[#C2A35D]/30 font-light text-2xl">
                                03
                            </span>
                            Information Usage
                        </h2>
                        <div className="pl-10 space-y-4">
                            <p>
                                Information collected is used exclusively for:
                            </p>
                            <ul className="space-y-2 text-sm">
                                {[
                                    "Service delivery and project communication",
                                    "Infrastructure performance monitoring",
                                    "Security threat detection and prevention",
                                    "System improvement and optimization",
                                    "Legal compliance when required by law",
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

                    {/* 4. AI & Automation Transparency */}
                    <section>
                        <h2 className="text-xl font-serif font-semibold text-[#EAE6DD] mb-4 flex items-center gap-3">
                            <span className="text-[#C2A35D]/30 font-light text-2xl">
                                04
                            </span>
                            AI & Automation Transparency
                        </h2>
                        <div className="pl-10 space-y-4">
                            <p>
                                Certain workflows may utilize AI-assisted tools
                                for automation, content generation, and system
                                optimization. These tools are deployed{" "}
                                <span className="text-[#EAE6DD] font-medium">
                                    responsibly, with human oversight and strict
                                    data handling controls
                                </span>
                                .
                            </p>
                            <p>
                                Client data is never used to train external AI
                                models. All AI integrations are vetted for
                                security compliance and data isolation.
                            </p>
                        </div>
                    </section>

                    {/* 5. Third-Party Disclosure */}
                    <section>
                        <h2 className="text-xl font-serif font-semibold text-[#EAE6DD] mb-4 flex items-center gap-3">
                            <span className="text-[#C2A35D]/30 font-light text-2xl">
                                05
                            </span>
                            Third-Party Disclosure
                        </h2>
                        <div className="pl-10 space-y-4">
                            <p>
                                We do not sell or trade your information. Data
                                may be shared only with:
                            </p>
                            <ul className="space-y-2 text-sm">
                                {[
                                    "Vetted service providers essential to delivery (hosting, payment processing)",
                                    "Legal authorities when required by applicable law",
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

                    {/* 6. Children's Policy */}
                    <section>
                        <h2 className="text-xl font-serif font-semibold text-[#EAE6DD] mb-4 flex items-center gap-3">
                            <span className="text-[#C2A35D]/30 font-light text-2xl">
                                06
                            </span>
                            Policy for Minors
                        </h2>
                        <div className="pl-10">
                            <p>
                                We do not knowingly collect data from
                                individuals under the age of 13. If such data is
                                identified, it will be deleted immediately.
                            </p>
                        </div>
                    </section>

                    {/* 7. Contact for Security Concerns */}
                    <section>
                        <h2 className="text-xl font-serif font-semibold text-[#EAE6DD] mb-4 flex items-center gap-3">
                            <span className="text-[#C2A35D]/30 font-light text-2xl">
                                07
                            </span>
                            Security Concerns & Contact
                        </h2>
                        <div className="pl-10">
                            <p className="mb-6">
                                For privacy inquiries, data requests, or to
                                report a security concern:
                            </p>
                            <div className="bg-[#1A1C1E] rounded-xl border border-[#2A2E30] p-6 md:p-8">
                                <p className="text-[#C2A35D] font-serif text-lg mb-3">
                                    Velora Digital
                                </p>
                                <div className="space-y-1.5 text-sm text-[#A8A39B]">
                                    <p>Bangalore, India</p>
                                    <p>
                                        Email:{" "}
                                        <a
                                            href="mailto:veloraa007@gmail.com"
                                            className="text-[#EAE6DD] hover:text-[#C2A35D] transition-colors"
                                        >
                                            veloraa007@gmail.com
                                        </a>
                                    </p>
                                    <p>
                                        Phone:{" "}
                                        <a
                                            href="tel:+919901981097"
                                            className="text-[#EAE6DD] hover:text-[#C2A35D] transition-colors"
                                        >
                                            +91 99019 81097
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    );
}
