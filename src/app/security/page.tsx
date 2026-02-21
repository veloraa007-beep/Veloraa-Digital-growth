import Link from "next/link";
import { Metadata } from "next";
import { ArrowLeft, Shield, Lock, Server, Eye, RefreshCw } from "lucide-react";

export const metadata: Metadata = {
    title: "Security & Compliance — Velora",
    description:
        "Velora's security principles — encryption, infrastructure discipline, access control, and responsible automation.",
};

const principles = [
    {
        number: "01",
        title: "Encryption",
        description:
            "All data transmitted through Velora systems is secured using industry-standard TLS encryption. Client communications, form submissions, and API calls are encrypted end-to-end.",
        icon: Lock,
    },
    {
        number: "02",
        title: "Infrastructure Discipline",
        description:
            "We deploy on secure hosting environments (Vercel Edge Network, Cloudflare) with monitored access, automated updates, and edge-level DDoS protection. Environment variables and API keys are never exposed in client-side code.",
        icon: Server,
    },
    {
        number: "03",
        title: "Access Control",
        description:
            "Internal systems follow least-privilege principles. Access to production environments, client data, and deployment pipelines is restricted to authorized personnel only.",
        icon: Shield,
    },
    {
        number: "04",
        title: "Responsible Automation",
        description:
            "Automation workflows are monitored, sandboxed, and secured to prevent misuse. AI-assisted tools operate under strict data handling controls with human oversight at every critical step.",
        icon: Eye,
    },
    {
        number: "05",
        title: "Continuous Improvement",
        description:
            "Security protocols are reviewed and refined regularly. Dependencies are audited for vulnerabilities. Infrastructure configurations are tested against known attack vectors.",
        icon: RefreshCw,
    },
];

const implementations = [
    "Secure hosting via Vercel with edge-level protection",
    "Environment variable protection — no secrets in client bundles",
    "API key secrecy via server-side routes and edge functions",
    "Form validation and input sanitization on all endpoints",
    "Content Security Policy (CSP) headers enforced",
    "Strict HTTPS enforcement with HSTS preloading",
    "Regular dependency audits via automated tooling",
    "Rate limiting on API endpoints and form submissions",
];

export default function SecurityPage() {
    return (
        <main className="min-h-screen bg-[#0F1113] pt-32 pb-24 px-6 md:px-12">
            <div className="max-w-4xl mx-auto">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-[#A8A39B]/50 hover:text-[#C2A35D] transition-colors mb-12 text-xs uppercase tracking-[0.2em] font-medium"
                >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    Home
                </Link>

                {/* Header */}
                <div className="mb-20">
                    <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#C2A35D]/60 mb-4 block">
                        Trust & Infrastructure
                    </span>
                    <h1
                        className="font-serif font-semibold text-[#EAE6DD] tracking-tight leading-[1.1] mb-6"
                        style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
                    >
                        Security &{" "}
                        <span className="italic text-[#EAE6DD]/40 font-light">
                            Compliance
                        </span>
                    </h1>
                    <p className="text-[#A8A39B] text-base sm:text-lg max-w-2xl leading-relaxed font-light">
                        Security is not a feature we add. It is the foundation
                        we build on. Every system, every deployment, every line
                        of code is governed by cybersecurity-first principles.
                    </p>
                </div>

                {/* Security Principles */}
                <div className="mb-20">
                    <h2 className="text-xs font-bold uppercase tracking-[0.25em] text-[#C2A35D]/60 mb-10">
                        Our Security Principles
                    </h2>

                    <div className="space-y-6">
                        {principles.map((p) => {
                            const Icon = p.icon;
                            return (
                                <div
                                    key={p.number}
                                    className="bg-[#1A1C1E] rounded-xl border border-[#2A2E30] p-6 md:p-8 hover:border-[#C2A35D]/20 transition-colors duration-500"
                                >
                                    <div className="flex items-start gap-6">
                                        <div className="shrink-0 flex flex-col items-center gap-3">
                                            <span className="text-3xl font-serif font-light text-[#C2A35D]/30">
                                                {p.number}
                                            </span>
                                            <Icon className="w-4 h-4 text-[#C2A35D]/40" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-serif font-semibold text-[#EAE6DD] mb-2">
                                                {p.title}
                                            </h3>
                                            <p className="text-[#A8A39B] text-sm leading-relaxed font-light">
                                                {p.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* What We Actually Implement */}
                <div className="mb-20">
                    <h2 className="text-xs font-bold uppercase tracking-[0.25em] text-[#C2A35D]/60 mb-6">
                        Active Implementation
                    </h2>
                    <p className="text-[#A8A39B] font-light leading-relaxed mb-8">
                        Security claims must match reality. Here is what we
                        actively enforce across all Velora systems:
                    </p>

                    <div className="bg-[#1A1C1E] rounded-xl border border-[#2A2E30] p-6 md:p-8">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-500/80">
                                All Systems Operational
                            </span>
                        </div>
                        <ul className="space-y-3">
                            {implementations.map((item, i) => (
                                <li
                                    key={i}
                                    className="flex items-start gap-3 text-sm"
                                >
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/60 mt-1.5 shrink-0" />
                                    <span className="text-[#EAE6DD]/80">
                                        {item}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Report a Vulnerability */}
                <div>
                    <h2 className="text-xs font-bold uppercase tracking-[0.25em] text-[#C2A35D]/60 mb-6">
                        Report a Security Concern
                    </h2>
                    <p className="text-[#A8A39B] font-light leading-relaxed mb-6">
                        If you discover a potential vulnerability or have
                        security concerns about any Velora system, contact us
                        immediately:
                    </p>
                    <div className="bg-[#1A1C1E] rounded-xl border border-[#2A2E30] p-6 md:p-8">
                        <p className="text-[#C2A35D] font-serif text-lg mb-3">
                            Security Contact
                        </p>
                        <div className="space-y-1.5 text-sm text-[#A8A39B]">
                            <p>
                                Email:{" "}
                                <a
                                    href="mailto:veloraa007@gmail.com"
                                    className="text-[#EAE6DD] hover:text-[#C2A35D] transition-colors"
                                >
                                    veloraa007@gmail.com
                                </a>
                            </p>
                            <p className="text-xs text-[#A8A39B]/50 mt-3">
                                We take all security reports seriously and will
                                respond within 48 hours.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
