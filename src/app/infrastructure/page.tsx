import type { Metadata } from "next";
import { Shield, Server, Cloud, Lock, Zap, Globe } from "lucide-react";

export const metadata: Metadata = {
    title: "Infrastructure | Veloraa — Digital Growth Operating System",
    description: "Our hosting philosophy, security logic, automation stack, and performance architecture. Enterprise-grade infrastructure for growth-ready businesses.",
};

const philosophies = [
    {
        icon: Cloud,
        title: "Hosting Philosophy",
        description: "We don\u0027t use shared hosting. Every system is deployed on isolated cloud infrastructure with dedicated resources, CDN edge caching, and automated scaling triggers.",
        points: [
            "AWS / Vercel / Cloudflare deployment",
            "Isolated container environments",
            "Auto-scaling under traffic surges",
            "Global CDN for < 200ms TTFB",
        ],
    },
    {
        icon: Shield,
        title: "Security Architecture",
        description: "Security isn\u0027t an afterthought — it\u0027s the foundation. Every deployment goes through a hardening checklist before going live.",
        points: [
            "SSL/TLS enforcement across all endpoints",
            "HTTP security headers (CSP, HSTS, XSS)",
            "Input sanitization and rate limiting",
            "Regular dependency vulnerability audits",
        ],
    },
    {
        icon: Zap,
        title: "Automation Stack",
        description: "We wire intelligent automation into every system. Manual tasks become automated workflows that run 24/7 without human intervention.",
        points: [
            "Zapier / Make workflow orchestration",
            "CRM auto-sync and lead routing",
            "Payment webhook handling (Stripe/Razorpay)",
            "WhatsApp API for real-time notifications",
        ],
    },
    {
        icon: Globe,
        title: "Performance Philosophy",
        description: "Every system must pass our performance baseline before deployment. Speed is not optimization — it\u0027s architecture.",
        points: [
            "Target: < 1.8s full page load",
            "Target: 95+ Lighthouse performance",
            "Image optimization and lazy loading",
            "Code splitting and tree shaking",
        ],
    },
];

export default function InfrastructurePage() {
    return (
        <main className="pt-32 pb-20">
            {/* Hero */}
            <section className="px-6 md:px-12 lg:px-24 pb-20 md:pb-32">
                <div className="max-w-5xl mx-auto">
                    <span className="text-[10px] font-sans font-bold uppercase tracking-[0.3em] text-accent/70 mb-8 block">
                        Behind the Interface
                    </span>
                    <h1
                        className="font-serif text-white leading-[1.05] tracking-tight mb-8"
                        style={{ fontSize: 'clamp(2rem, 5vw, 4.5rem)' }}
                    >
                        Infrastructure<br />
                        <span className="italic text-white/40 font-light">Philosophy</span>
                    </h1>
                    <p className="text-secondary/60 text-base max-w-2xl font-light leading-relaxed">
                        Most agencies show what they build. We show how it runs.
                        This page explains the infrastructure decisions behind every Veloraa system.
                    </p>
                </div>
            </section>

            {/* Divider */}
            <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-accent/15 to-transparent" />

            {/* Philosophy Sections */}
            <div className="px-6 md:px-12 lg:px-24">
                <div className="max-w-5xl mx-auto">
                    {philosophies.map((phil, i) => {
                        const Icon = phil.icon;
                        return (
                            <section
                                key={i}
                                className="py-16 md:py-24 border-b border-white/5 last:border-b-0"
                            >
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                                    {/* Left */}
                                    <div>
                                        <Icon className="w-6 h-6 text-accent/50 mb-6" />
                                        <h2 className="font-serif text-white text-2xl md:text-3xl tracking-tight mb-4">
                                            {phil.title}
                                        </h2>
                                        <p className="text-secondary/50 text-sm leading-relaxed font-light">
                                            {phil.description}
                                        </p>
                                    </div>

                                    {/* Right */}
                                    <div className="p-6 md:p-8 border border-white/5 bg-white/[0.01]">
                                        <div className="flex flex-col gap-3">
                                            {phil.points.map((point, j) => (
                                                <div key={j} className="flex items-center gap-3 text-secondary/60 text-sm font-light">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-accent/30 shrink-0" />
                                                    {point}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </section>
                        );
                    })}
                </div>
            </div>

            {/* Bottom CTA */}
            <section className="px-6 md:px-12 lg:px-24 py-20 md:py-32 text-center">
                <div className="max-w-2xl mx-auto">
                    <h2
                        className="font-serif text-white leading-[1.1] tracking-tight mb-6"
                        style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)' }}
                    >
                        Want This Level of<br />
                        <span className="italic text-white/40 font-light">Infrastructure?</span>
                    </h2>
                    <a
                        href="https://api.whatsapp.com/send/?phone=919901981097&text=Hi%20Velora%2C%20I%27d%20like%20to%20discuss%20infrastructure%20for%20my%20project.&type=phone_number&app_absent=0"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-10 py-4 bg-accent text-black font-bold uppercase tracking-[0.2em] text-xs hover:bg-white transition-colors"
                    >
                        Initiate Consultation
                    </a>
                </div>
            </section>
        </main>
    );
}
