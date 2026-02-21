import Image from "next/image";
import { Check } from "lucide-react";

const kitContents = [
    "Personalized Strategy Letter",
    "Infrastructure Blueprint Summary",
    "NFC Digital Business Card",
    "Brand System Overview",
    "Growth Roadmap Document",
];

export default function ExecutiveOnboarding() {
    return (
        <section className="w-full px-6 md:px-12 lg:px-24 py-20 md:py-32">
            <div className="max-w-5xl mx-auto">
                {/* Label */}
                <div className="text-center mb-4">
                    <span className="text-[10px] font-sans font-bold uppercase tracking-[0.25em] text-accent/80 border border-accent/20 px-4 py-2 rounded-full inline-block bg-accent/[0.05]">
                        Executive Onboarding Experience™
                    </span>
                </div>
                <p className="text-center text-secondary/40 text-xs uppercase tracking-widest mb-14">
                    For projects above ₹25,000
                </p>

                {/* Two-Column Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                    {/* Left: Images */}
                    <div className="flex flex-col gap-4">
                        <div className="relative aspect-[4/3] overflow-hidden">
                            <Image
                                src="/images/welcome-kit-box.png"
                                alt="Veloraa Executive Welcome Kit — Closed"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                        <div className="relative aspect-[4/3] overflow-hidden">
                            <Image
                                src="/images/welcome-kit-open.png"
                                alt="Veloraa Executive Welcome Kit — Contents"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                    </div>

                    {/* Right: Content */}
                    <div>
                        <h2
                            className="font-serif text-white leading-[1.1] tracking-tight mb-6"
                            style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.8rem)' }}
                        >
                            The Veloraa<br />
                            <span className="italic text-white/50 font-light">Executive Welcome Kit™</span>
                        </h2>

                        <p className="text-secondary/60 text-sm leading-relaxed font-light mb-10 max-w-md">
                            Every Authority Infrastructure project includes a curated premium
                            onboarding package — designed to formalize your transition into
                            structured digital growth.
                        </p>

                        {/* Kit Contents */}
                        <div className="flex flex-col gap-4 mb-10">
                            {kitContents.map((item, i) => (
                                <div key={i} className="flex items-center gap-3 group">
                                    <div className="w-5 h-5 rounded-full border border-accent/20 flex items-center justify-center shrink-0 group-hover:border-accent/40 transition-colors">
                                        <Check className="w-2.5 h-2.5 text-accent/50" />
                                    </div>
                                    <span className="text-white/70 text-sm font-light">{item}</span>
                                </div>
                            ))}
                        </div>

                        {/* Exclusivity Tag */}
                        <div className="inline-flex items-center gap-2 border border-accent/15 bg-accent/[0.03] px-4 py-2 rounded-full">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent/50" />
                            <span className="text-[10px] uppercase tracking-[0.2em] text-accent/60 font-medium">
                                Exclusive to Authority &amp; Enterprise Clients
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
