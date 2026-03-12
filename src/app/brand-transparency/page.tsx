import Link from "next/link";
import { Metadata } from "next";
import { ArrowLeft, Eye, Clock, CreditCard, FileText, MessageSquare } from "lucide-react";

export const metadata: Metadata = {
    title: "Brand Transparency — Velora | Honest Digital Practices",
    description:
        "VELORA's commitment to transparency in communication, project timelines, pricing, and digital practices. No hidden fees, no vague promises.",
    alternates: {
        canonical: "https://velora.digital/brand-transparency",
    },
};

const transparencyPillars = [
    {
        icon: MessageSquare,
        title: "Communication",
        points: [
            "Regular project updates at every milestone",
            "Dedicated point of contact for every project",
            "Direct access via WhatsApp, email, and calls",
            "Honest feedback — even when it's not what you want to hear",
        ],
    },
    {
        icon: Clock,
        title: "Project Timelines",
        points: [
            "Clear milestone schedules provided during onboarding",
            "Realistic timelines — we don't overpromise",
            "Proactive communication if timelines shift",
            "Written scope documents before any work begins",
        ],
    },
    {
        icon: CreditCard,
        title: "Pricing",
        points: [
            "Tier-based pricing published on our website",
            "No hidden fees, setup charges, or surprise invoices",
            "Custom quotes provided before project commitment",
            "Milestone-based payments tied to deliverables",
        ],
    },
    {
        icon: FileText,
        title: "Digital Practices",
        points: [
            "Full ownership of code, assets, and content upon delivery",
            "No vendor lock-in — your infrastructure belongs to you",
            "Privacy-first data handling with no third-party data sales",
            "Open documentation of all tools, platforms, and integrations used",
        ],
    },
];

export default function BrandTransparencyPage() {
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
                        Our Promise
                    </span>
                    <h1
                        className="font-serif font-semibold text-[#EAE6DD] tracking-tight leading-[1.1] mb-4"
                        style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
                    >
                        Brand{" "}
                        <span className="italic text-[#EAE6DD]/40 font-light">
                            Transparency
                        </span>
                    </h1>
                    <p className="text-[#A8A39B] text-base sm:text-lg leading-relaxed font-light max-w-2xl">
                        At VELORA, transparency isn&apos;t a marketing buzzword — it&apos;s the
                        foundation of how we operate. We believe you deserve to know exactly
                        what you&apos;re getting, what it costs, and when it will be delivered.
                    </p>
                </div>

                <div className="space-y-16 text-[#A8A39B] font-light leading-relaxed">
                    {/* Our Commitment */}
                    <section>
                        <h2 className="text-xl font-serif font-semibold text-[#EAE6DD] mb-4 flex items-center gap-3">
                            <span className="text-[#C2A35D]/30 font-light text-2xl">
                                01
                            </span>
                            Our Commitment
                        </h2>
                        <div className="pl-10 space-y-4">
                            <p>
                                We built VELORA on the principle that{" "}
                                <span className="text-[#EAE6DD] font-medium">
                                    trust is earned through clarity, not claims
                                </span>
                                . Too many agencies operate behind vague proposals, unclear
                                pricing, and opaque processes. We reject that model entirely.
                            </p>
                            <p>
                                From the first conversation to final delivery, every step of our
                                process is documented, communicated, and open for review. Our
                                clients are never left guessing about the status of their
                                project, the cost of additional features, or the security
                                practices protecting their data.
                            </p>
                        </div>
                    </section>

                    {/* The Four Pillars of Transparency */}
                    <section>
                        <h2 className="text-xl font-serif font-semibold text-[#EAE6DD] mb-6 flex items-center gap-3">
                            <span className="text-[#C2A35D]/30 font-light text-2xl">
                                02
                            </span>
                            The Four Pillars
                        </h2>
                        <div className="pl-10 space-y-6">
                            {transparencyPillars.map((pillar, i) => {
                                const Icon = pillar.icon;
                                return (
                                    <div
                                        key={i}
                                        className="bg-[#1A1C1E] rounded-xl border border-[#2A2E30] p-6 md:p-8"
                                    >
                                        <div className="flex items-center gap-3 mb-5">
                                            <Icon className="w-4 h-4 text-[#C2A35D]/60" />
                                            <h3 className="text-[#EAE6DD] font-serif font-semibold text-base">
                                                {pillar.title}
                                            </h3>
                                        </div>
                                        <ul className="space-y-2.5">
                                            {pillar.points.map((point, j) => (
                                                <li
                                                    key={j}
                                                    className="flex items-start gap-3 text-sm"
                                                >
                                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/60 mt-1.5 shrink-0" />
                                                    <span className="text-[#EAE6DD]/80">
                                                        {point}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                );
                            })}
                        </div>
                    </section>

                    {/* What This Means for You */}
                    <section>
                        <h2 className="text-xl font-serif font-semibold text-[#EAE6DD] mb-4 flex items-center gap-3">
                            <span className="text-[#C2A35D]/30 font-light text-2xl">
                                03
                            </span>
                            What This Means for You
                        </h2>
                        <div className="pl-10 space-y-4">
                            <p>
                                When you work with VELORA, you&apos;ll always know:
                            </p>
                            <ul className="space-y-2 text-sm">
                                {[
                                    "Exactly what services are included in your project scope",
                                    "The total cost — with no hidden charges or surprise add-ons",
                                    "Your project timeline, milestones, and expected delivery dates",
                                    "What tools and platforms are being used in your infrastructure",
                                    "How your data is handled, stored, and protected",
                                    "Who to contact and how to reach them at any time",
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
                            <div className="bg-[#C2A35D]/5 rounded-xl border border-[#C2A35D]/20 p-5 mt-6">
                                <div className="flex items-start gap-3">
                                    <Eye className="w-4 h-4 text-[#C2A35D]/60 mt-0.5 shrink-0" />
                                    <p className="text-sm text-[#EAE6DD]/70">
                                        Transparency is not optional at VELORA. It is built into
                                        every contract, every conversation, and every deliverable.
                                        If something changes, you&apos;ll be the first to know.
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
