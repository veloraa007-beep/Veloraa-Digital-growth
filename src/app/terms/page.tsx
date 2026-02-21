import Link from "next/link";
import { Metadata } from "next";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
    title: "Terms & Conditions — Velora",
    description:
        "Terms of use governing access to Velora's digital infrastructure services and website.",
};

export default function TermsAndConditions() {
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
                        Legal Framework
                    </span>
                    <h1
                        className="font-serif font-semibold text-[#EAE6DD] tracking-tight leading-[1.1] mb-4"
                        style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
                    >
                        Terms &{" "}
                        <span className="italic text-[#EAE6DD]/40 font-light">
                            Conditions
                        </span>
                    </h1>
                    <p className="text-[#A8A39B]/60 text-xs uppercase tracking-[0.2em]">
                        Last Updated: February 2026
                    </p>
                </div>

                <div className="space-y-16 text-[#A8A39B] font-light leading-relaxed">
                    {/* 1. Agreement */}
                    <section>
                        <h2 className="text-xl font-serif font-semibold text-[#EAE6DD] mb-4 flex items-center gap-3">
                            <span className="text-[#C2A35D]/30 font-light text-2xl">
                                01
                            </span>
                            Agreement to Terms
                        </h2>
                        <div className="pl-10 space-y-4">
                            <p>
                                These Terms of Use constitute a legally binding
                                agreement between you and Velora
                                (&ldquo;Company,&rdquo; &ldquo;we,&rdquo;
                                &ldquo;us,&rdquo; or &ldquo;our&rdquo;),
                                concerning your access to and use of the Velora
                                website and all related digital services,
                                platforms, and infrastructure.
                            </p>
                            <p className="text-[#EAE6DD]/70 font-medium text-sm">
                                By accessing this site, you acknowledge that you
                                have read, understood, and agree to be bound by
                                these terms. If you do not agree, discontinue
                                use immediately.
                            </p>
                        </div>
                    </section>

                    {/* 2. Intellectual Property */}
                    <section>
                        <h2 className="text-xl font-serif font-semibold text-[#EAE6DD] mb-4 flex items-center gap-3">
                            <span className="text-[#C2A35D]/30 font-light text-2xl">
                                02
                            </span>
                            Intellectual Property Rights
                        </h2>
                        <div className="pl-10 space-y-4">
                            <p>
                                All source code, designs, databases,
                                functionality, software, website architecture,
                                text, photographs, graphics, and proprietary
                                systems on this site are owned by or licensed to
                                Velora and are protected under Indian and
                                international intellectual property laws.
                            </p>
                            <p>
                                Unauthorized reproduction, distribution, or
                                modification of any Velora property is strictly
                                prohibited and may result in legal action.
                            </p>
                        </div>
                    </section>

                    {/* 3. Service Terms */}
                    <section>
                        <h2 className="text-xl font-serif font-semibold text-[#EAE6DD] mb-4 flex items-center gap-3">
                            <span className="text-[#C2A35D]/30 font-light text-2xl">
                                03
                            </span>
                            Service Engagement Terms
                        </h2>
                        <div className="pl-10 space-y-4">
                            <p>
                                All project engagements are governed by
                                individual service agreements executed between
                                Velora and the client. These terms cover:
                            </p>
                            <ul className="space-y-2 text-sm">
                                {[
                                    "Project scope, deliverables, and timelines",
                                    "Payment terms and milestone schedules",
                                    "Revision policies and change management",
                                    "Ownership transfer upon full payment",
                                    "Confidentiality and non-disclosure obligations",
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

                    {/* 4. User Representations */}
                    <section>
                        <h2 className="text-xl font-serif font-semibold text-[#EAE6DD] mb-4 flex items-center gap-3">
                            <span className="text-[#C2A35D]/30 font-light text-2xl">
                                04
                            </span>
                            User Representations
                        </h2>
                        <div className="pl-10">
                            <p className="mb-4">
                                By using the site, you represent and warrant
                                that:
                            </p>
                            <ul className="space-y-2 text-sm">
                                {[
                                    "All information you submit is accurate, current, and complete",
                                    "You have the legal capacity to enter into these terms",
                                    "You will not access the site through automated or non-human means",
                                    "You will not use the site for any unauthorized or illegal purpose",
                                    "Your use will comply with all applicable laws and regulations",
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

                    {/* 5. Limitation of Liability */}
                    <section>
                        <h2 className="text-xl font-serif font-semibold text-[#EAE6DD] mb-4 flex items-center gap-3">
                            <span className="text-[#C2A35D]/30 font-light text-2xl">
                                05
                            </span>
                            Limitation of Liability
                        </h2>
                        <div className="pl-10 space-y-4">
                            <p>
                                Velora shall not be liable for any indirect,
                                incidental, special, consequential, or punitive
                                damages arising from your use of the site or
                                services. Our total liability shall not exceed
                                the amount paid by you for the specific service
                                in question.
                            </p>
                        </div>
                    </section>

                    {/* 6. Governing Law */}
                    <section>
                        <h2 className="text-xl font-serif font-semibold text-[#EAE6DD] mb-4 flex items-center gap-3">
                            <span className="text-[#C2A35D]/30 font-light text-2xl">
                                06
                            </span>
                            Governing Law & Jurisdiction
                        </h2>
                        <div className="pl-10 space-y-4">
                            <p>
                                These Terms shall be governed by the laws of
                                India. Any disputes shall be resolved
                                exclusively in the courts of Bangalore,
                                Karnataka, India.
                            </p>
                            <p>
                                Parties agree to attempt informal resolution for
                                at least thirty (30) days before initiating
                                formal proceedings.
                            </p>
                        </div>
                    </section>

                    {/* 7. Modifications */}
                    <section>
                        <h2 className="text-xl font-serif font-semibold text-[#EAE6DD] mb-4 flex items-center gap-3">
                            <span className="text-[#C2A35D]/30 font-light text-2xl">
                                07
                            </span>
                            Modifications & Corrections
                        </h2>
                        <div className="pl-10">
                            <p>
                                Velora reserves the right to update these terms,
                                correct errors, and modify pricing or service
                                information at any time without prior notice.
                                Continued use of the site constitutes acceptance
                                of any changes.
                            </p>
                        </div>
                    </section>

                    {/* 8. Contact */}
                    <section>
                        <h2 className="text-xl font-serif font-semibold text-[#EAE6DD] mb-4 flex items-center gap-3">
                            <span className="text-[#C2A35D]/30 font-light text-2xl">
                                08
                            </span>
                            Contact
                        </h2>
                        <div className="pl-10">
                            <p className="mb-6">
                                For questions regarding these terms:
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
