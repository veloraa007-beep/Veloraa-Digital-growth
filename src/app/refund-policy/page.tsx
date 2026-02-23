import Link from "next/link";
import { Metadata } from "next";
import { ArrowLeft, AlertTriangle, Clock, RefreshCw } from "lucide-react";

export const metadata: Metadata = {
    title: "Refund & Cancellation Policy — Velora",
    description:
        "Velora's refund and cancellation policy. Transparent milestone-based refund structure for all digital services.",
};

const refundTiers = [
    {
        stage: "Before Work Begins",
        timeline: "Within 24 hours of order placement",
        refund: "85%",
        note: "A 15% non-refundable consultation & onboarding fee applies to cover initial strategy, resource allocation, and project setup.",
        color: "bg-emerald-500/60",
    },
    {
        stage: "Discovery & Planning Phase",
        timeline: "Up to 25% project completion",
        refund: "50%",
        note: "Research, strategy mapping, wireframing, and initial creative direction have been completed. These deliverables are non-recoverable.",
        color: "bg-amber-500/60",
    },
    {
        stage: "Active Development",
        timeline: "25% – 50% project completion",
        refund: "25%",
        note: "Significant design, development, and creative work has been executed. The majority of the project cost reflects labor and expertise already deployed.",
        color: "bg-orange-500/60",
    },
    {
        stage: "Advanced Development",
        timeline: "50% – 75% project completion",
        refund: "10%",
        note: "The project is in its final stages. Deliverables are near-complete and resources have been fully committed.",
        color: "bg-red-500/40",
    },
    {
        stage: "Final Review & Delivery",
        timeline: "75%+ project completion",
        refund: "0%",
        note: "No refund is applicable once the project enters final review, QA, or has been delivered. All files and assets transferred are considered accepted.",
        color: "bg-red-500/60",
    },
];

const nonRefundableItems = [
    "Initial consultation and strategy session fees",
    "Domain registration, hosting setup, or third-party tool purchases made on your behalf",
    "Custom assets already created (logos, graphics, copy, code)",
    "Rush delivery or priority queue surcharges",
    "Completed milestone deliverables that have been approved",
];

export default function RefundPolicy() {
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
                        Client Protection
                    </span>
                    <h1
                        className="font-serif font-semibold text-[#EAE6DD] tracking-tight leading-[1.1] mb-4"
                        style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
                    >
                        Refund &{" "}
                        <span className="italic text-[#EAE6DD]/40 font-light">
                            Cancellation Policy
                        </span>
                    </h1>
                    <p className="text-[#A8A39B]/60 text-xs uppercase tracking-[0.2em]">
                        Last Updated: February 2026
                    </p>
                </div>

                <div className="space-y-16 text-[#A8A39B] font-light leading-relaxed">
                    {/* 1. Policy Overview */}
                    <section>
                        <h2 className="text-xl font-serif font-semibold text-[#EAE6DD] mb-4 flex items-center gap-3">
                            <span className="text-[#C2A35D]/30 font-light text-2xl">
                                01
                            </span>
                            Policy Overview
                        </h2>
                        <div className="pl-10 space-y-4">
                            <p>
                                At Velora, we believe in{" "}
                                <span className="text-[#EAE6DD] font-medium">
                                    transparent and fair business practices
                                </span>
                                . Every project we undertake involves dedicated
                                time, creative effort, and specialized expertise
                                from our team — resources that cannot be
                                &ldquo;returned&rdquo; like a physical product.
                            </p>
                            <p>
                                This policy outlines our structured,
                                milestone-based refund framework designed to
                                protect both our clients and the integrity of
                                our work.
                            </p>
                            <div className="bg-[#1A1C1E] rounded-xl border border-[#2A2E30] p-5 mt-6">
                                <div className="flex items-start gap-3">
                                    <AlertTriangle className="w-4 h-4 text-[#C2A35D]/60 mt-0.5 shrink-0" />
                                    <p className="text-sm text-[#EAE6DD]/70">
                                        All refund requests are evaluated on a
                                        case-by-case basis and processed within
                                        7–10 business days of approval.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* 2. Milestone-Based Refund Structure */}
                    <section>
                        <h2 className="text-xl font-serif font-semibold text-[#EAE6DD] mb-4 flex items-center gap-3">
                            <span className="text-[#C2A35D]/30 font-light text-2xl">
                                02
                            </span>
                            Milestone-Based Refund Structure
                        </h2>
                        <div className="pl-10">
                            <p className="mb-8">
                                Refund eligibility is determined by the{" "}
                                <span className="text-[#EAE6DD] font-medium">
                                    stage of project completion
                                </span>{" "}
                                at the time of cancellation request. The
                                following tiers apply:
                            </p>
                            <div className="space-y-4">
                                {refundTiers.map((tier, i) => (
                                    <div
                                        key={i}
                                        className="bg-[#1A1C1E] rounded-xl border border-[#2A2E30] p-5 md:p-6"
                                    >
                                        <div className="flex items-center justify-between mb-3">
                                            <div className="flex items-center gap-3">
                                                <span
                                                    className={`w-2 h-2 rounded-full ${tier.color} shrink-0`}
                                                />
                                                <h3 className="text-[#EAE6DD] font-medium text-sm">
                                                    {tier.stage}
                                                </h3>
                                            </div>
                                            <span className="text-[#C2A35D] font-serif font-semibold text-lg">
                                                {tier.refund} Refund
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-2 mb-3">
                                            <Clock className="w-3 h-3 text-[#A8A39B]/40" />
                                            <span className="text-[10px] uppercase tracking-[0.15em] text-[#A8A39B]/50 font-medium">
                                                {tier.timeline}
                                            </span>
                                        </div>
                                        <p className="text-sm text-[#A8A39B]/70 leading-relaxed">
                                            {tier.note}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* 3. Non-Refundable Items */}
                    <section>
                        <h2 className="text-xl font-serif font-semibold text-[#EAE6DD] mb-4 flex items-center gap-3">
                            <span className="text-[#C2A35D]/30 font-light text-2xl">
                                03
                            </span>
                            Non-Refundable Items
                        </h2>
                        <div className="pl-10 space-y-4">
                            <p>
                                The following costs are{" "}
                                <span className="text-[#EAE6DD] font-medium">
                                    non-refundable under any circumstances
                                </span>
                                , as they represent work completed or
                                third-party expenses incurred:
                            </p>
                            <ul className="space-y-2 text-sm">
                                {nonRefundableItems.map((item, i) => (
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

                    {/* 4. Revision Policy */}
                    <section>
                        <h2 className="text-xl font-serif font-semibold text-[#EAE6DD] mb-4 flex items-center gap-3">
                            <span className="text-[#C2A35D]/30 font-light text-2xl">
                                04
                            </span>
                            Revision Policy
                        </h2>
                        <div className="pl-10 space-y-4">
                            <p>
                                Before considering a refund, we encourage
                                clients to use our{" "}
                                <span className="text-[#EAE6DD] font-medium">
                                    complimentary revision rounds
                                </span>
                                . We want you to love the final result.
                            </p>
                            <div className="bg-[#1A1C1E] rounded-xl border border-[#2A2E30] p-5 md:p-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <RefreshCw className="w-4 h-4 text-[#C2A35D]/60" />
                                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C2A35D]/60">
                                        Revision Allowance
                                    </span>
                                </div>
                                <ul className="space-y-3">
                                    {[
                                        "Up to 2 free revision rounds are included with every project",
                                        "Additional revisions may be accommodated at a nominal fee",
                                        "Revision requests must be submitted within 7 days of delivery",
                                        "Revisions cover design changes, content updates, and layout adjustments — not scope changes",
                                    ].map((item, i) => (
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
                    </section>

                    {/* 5. How to Request a Refund */}
                    <section>
                        <h2 className="text-xl font-serif font-semibold text-[#EAE6DD] mb-4 flex items-center gap-3">
                            <span className="text-[#C2A35D]/30 font-light text-2xl">
                                05
                            </span>
                            How to Request a Refund
                        </h2>
                        <div className="pl-10 space-y-4">
                            <p>
                                To initiate a refund or cancellation request,
                                follow these steps:
                            </p>
                            <ol className="space-y-4 text-sm">
                                {[
                                    {
                                        step: "Contact Us",
                                        desc: "Email veloraa007@gmail.com or call +91 99019 81097 with your project details and reason for cancellation.",
                                    },
                                    {
                                        step: "Project Review",
                                        desc: "Our team will assess the current project stage, work completed, and applicable refund tier within 48 hours.",
                                    },
                                    {
                                        step: "Resolution",
                                        desc: "We will propose a fair resolution — whether a partial refund, additional revisions, or project continuation with adjustments.",
                                    },
                                    {
                                        step: "Processing",
                                        desc: "Approved refunds are processed within 7–10 business days to the original payment method.",
                                    },
                                ].map((item, i) => (
                                    <li
                                        key={i}
                                        className="flex items-start gap-4"
                                    >
                                        <span className="text-[#C2A35D]/50 font-serif font-semibold text-base mt-0.5 shrink-0">
                                            {String(i + 1).padStart(2, "0")}
                                        </span>
                                        <div>
                                            <p className="text-[#EAE6DD] font-medium mb-1">
                                                {item.step}
                                            </p>
                                            <p className="text-[#A8A39B]/70 leading-relaxed">
                                                {item.desc}
                                            </p>
                                        </div>
                                    </li>
                                ))}
                            </ol>
                        </div>
                    </section>

                    {/* 6. Dispute Resolution */}
                    <section>
                        <h2 className="text-xl font-serif font-semibold text-[#EAE6DD] mb-4 flex items-center gap-3">
                            <span className="text-[#C2A35D]/30 font-light text-2xl">
                                06
                            </span>
                            Dispute Resolution
                        </h2>
                        <div className="pl-10 space-y-4">
                            <p>
                                In the event of a dispute, both parties agree to
                                attempt{" "}
                                <span className="text-[#EAE6DD] font-medium">
                                    informal resolution
                                </span>{" "}
                                for a minimum of thirty (30) days before
                                pursuing formal legal proceedings.
                            </p>
                            <p>
                                All disputes shall be governed by the laws of
                                India, with exclusive jurisdiction in the courts
                                of Bangalore, Karnataka.
                            </p>
                        </div>
                    </section>

                    {/* 7. Contact */}
                    <section>
                        <h2 className="text-xl font-serif font-semibold text-[#EAE6DD] mb-4 flex items-center gap-3">
                            <span className="text-[#C2A35D]/30 font-light text-2xl">
                                07
                            </span>
                            Contact for Refund Requests
                        </h2>
                        <div className="pl-10">
                            <p className="mb-6">
                                For refund inquiries, cancellation requests, or
                                billing questions:
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
