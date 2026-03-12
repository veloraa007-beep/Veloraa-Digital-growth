import Link from "next/link";
import { Metadata } from "next";
import { ArrowLeft, ArrowRight, Hammer, Cog, Crown } from "lucide-react";

export const metadata: Metadata = {
    title: "Trust Statement — Velora | Build. Automate. Dominate.",
    description:
        "VELORA's trust statement and philosophy: Build. Automate. Dominate. Learn how this philosophy drives business growth and digital stability.",
    alternates: {
        canonical: "https://velora.digital/trust",
    },
};

const philosophy = [
    {
        icon: Hammer,
        word: "Build",
        tagline: "Architect systems that last.",
        description:
            "We don't create temporary fixes or fragile websites. We build robust digital infrastructure — backend systems, frontend experiences, and data pipelines — all engineered for long-term durability. Every line of code, every design decision, and every automation is built to withstand scale, traffic, and time.",
    },
    {
        icon: Cog,
        word: "Automate",
        tagline: "Eliminate manual overhead.",
        description:
            "Growth shouldn't require you to work harder — it should require you to work smarter. We automate lead capture, customer communication, follow-ups, reporting, and operational workflows so your business runs efficiently around the clock. Your systems should work even when you don't.",
    },
    {
        icon: Crown,
        word: "Dominate",
        tagline: "Own your market digitally.",
        description:
            "With the right infrastructure and automation in place, market dominance becomes a function of execution. We position your business with the digital authority, speed, and reliability that outpaces competitors still relying on outdated tools and manual processes.",
    },
];

export default function TrustStatementPage() {
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
                        Our Philosophy
                    </span>
                    <h1
                        className="font-serif font-semibold text-[#EAE6DD] tracking-tight leading-[1.1] mb-4"
                        style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
                    >
                        Trust{" "}
                        <span className="italic text-[#EAE6DD]/40 font-light">
                            Statement
                        </span>
                    </h1>
                    <p className="text-[#C2A35D]/80 font-serif italic text-lg sm:text-xl tracking-wide">
                        Build. Automate. Dominate.
                    </p>
                </div>

                <div className="space-y-16 text-[#A8A39B] font-light leading-relaxed">
                    {/* The Promise */}
                    <section>
                        <h2 className="text-xl font-serif font-semibold text-[#EAE6DD] mb-4 flex items-center gap-3">
                            <span className="text-[#C2A35D]/30 font-light text-2xl">
                                01
                            </span>
                            The Promise
                        </h2>
                        <div className="pl-10 space-y-4">
                            <p>
                                At VELORA, our philosophy isn&apos;t just a tagline — it&apos;s a
                                commitment to every client we serve.{" "}
                                <span className="text-[#C2A35D] font-medium italic">
                                    Build. Automate. Dominate.
                                </span>{" "}
                                represents the three pillars of sustainable digital growth
                                that we engineer into every project.
                            </p>
                            <p>
                                We believe that businesses deserve more than a pretty website.
                                They deserve{" "}
                                <span className="text-[#EAE6DD] font-medium">
                                    digital infrastructure that generates revenue, protects data,
                                    and scales without breaking
                                </span>
                                . That&apos;s not a promise — that&apos;s our standard.
                            </p>
                        </div>
                    </section>

                    {/* The Three Pillars */}
                    <section>
                        <h2 className="text-xl font-serif font-semibold text-[#EAE6DD] mb-6 flex items-center gap-3">
                            <span className="text-[#C2A35D]/30 font-light text-2xl">
                                02
                            </span>
                            The Three Pillars
                        </h2>
                        <div className="pl-10 space-y-6">
                            {philosophy.map((pillar, i) => {
                                const Icon = pillar.icon;
                                return (
                                    <div
                                        key={i}
                                        className="bg-[#1A1C1E] rounded-xl border border-[#2A2E30] p-6 md:p-8 hover:border-[#C2A35D]/20 transition-colors duration-500"
                                    >
                                        <div className="flex items-center gap-4 mb-4">
                                            <Icon className="w-5 h-5 text-[#C2A35D]/60" />
                                            <div>
                                                <h3 className="text-[#C2A35D] font-serif font-semibold text-lg">
                                                    {pillar.word}
                                                </h3>
                                                <p className="text-[#EAE6DD]/50 text-xs italic">
                                                    {pillar.tagline}
                                                </p>
                                            </div>
                                        </div>
                                        <p className="text-sm text-[#A8A39B]/80 leading-relaxed">
                                            {pillar.description}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </section>

                    {/* How This Supports Your Growth */}
                    <section>
                        <h2 className="text-xl font-serif font-semibold text-[#EAE6DD] mb-4 flex items-center gap-3">
                            <span className="text-[#C2A35D]/30 font-light text-2xl">
                                03
                            </span>
                            How This Supports Your Growth
                        </h2>
                        <div className="pl-10 space-y-4">
                            <p>
                                When your digital infrastructure is{" "}
                                <span className="text-[#EAE6DD] font-medium">
                                    properly built, intelligently automated, and strategically
                                    deployed
                                </span>
                                , growth becomes predictable. You stop worrying about system
                                failures, security breaches, or manual bottlenecks — and start
                                focusing on what matters: scaling your business.
                            </p>
                            <p>
                                VELORA&apos;s philosophy ensures that every project delivers:
                            </p>
                            <ul className="space-y-2 text-sm">
                                {[
                                    "Structural stability — systems built to handle growth without rebuilds",
                                    "Operational efficiency — automated workflows that save time and reduce errors",
                                    "Competitive advantage — digital authority that positions you above the market",
                                    "Data security — enterprise-grade protection for your business and clients",
                                    "Long-term value — infrastructure that appreciates, not depreciates, over time",
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

                    {/* Digital Stability */}
                    <section>
                        <h2 className="text-xl font-serif font-semibold text-[#EAE6DD] mb-4 flex items-center gap-3">
                            <span className="text-[#C2A35D]/30 font-light text-2xl">
                                04
                            </span>
                            Digital Stability
                        </h2>
                        <div className="pl-10 space-y-4">
                            <p>
                                In an industry full of agencies that overpromise and underdeliver,
                                VELORA stands for something different:{" "}
                                <span className="text-[#EAE6DD] font-medium">
                                    digital stability
                                </span>
                                .
                            </p>
                            <p>
                                Stability means your website won&apos;t crash under traffic.
                                Your automation won&apos;t break mid-campaign. Your data
                                won&apos;t be exposed due to lazy security practices. And your
                                digital presence will continue to perform — month after month,
                                year after year.
                            </p>
                            <p className="text-[#EAE6DD] font-medium italic pt-2">
                                That&apos;s the VELORA standard. That&apos;s what we build.
                            </p>
                        </div>
                    </section>

                    {/* CTA */}
                    <section className="pt-8">
                        <div className="bg-[#1A1C1E] rounded-2xl border border-[#2A2E30] p-8 md:p-10 text-center">
                            <p className="text-[#C2A35D]/80 font-serif italic text-xl tracking-wide mb-4">
                                Build. Automate. Dominate.
                            </p>
                            <p className="text-[#A8A39B] text-sm mb-8 max-w-md mx-auto">
                                Ready to build digital infrastructure that lasts?
                                Let&apos;s start the conversation.
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
