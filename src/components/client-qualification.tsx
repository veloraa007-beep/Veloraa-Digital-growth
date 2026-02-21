import { X } from "lucide-react";

const exclusions = [
    { text: "Not for bargain hunters", desc: "We engineer systems, not discount templates." },
    { text: "Not for template seekers", desc: "Every build is architectured from scratch." },
    { text: "Not for short-term thinking", desc: "Infrastructure compounds. Quick fixes don\u0027t." },
];

export default function ClientQualification() {
    return (
        <section className="w-full px-6 md:px-12 lg:px-24 py-24 md:py-36">
            <div className="max-w-4xl mx-auto text-center">
                {/* Header */}
                <span className="text-[10px] font-sans font-bold uppercase tracking-[0.25em] text-accent/70 mb-6 block">
                    Selective Partnership
                </span>
                <h2
                    className="font-serif text-white leading-[1.1] tracking-tight mb-6"
                    style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}
                >
                    We Are Not<br />
                    <span className="italic text-white/40 font-light">For Everyone</span>
                </h2>
                <p className="text-secondary/50 text-sm max-w-md mx-auto font-light leading-relaxed mb-14">
                    We build for businesses that understand the difference between cost and investment.
                </p>

                {/* Exclusion Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {exclusions.map((item, i) => (
                        <div
                            key={i}
                            className="p-6 border border-white/5 bg-white/[0.01] text-left group hover:border-red-500/10 transition-colors"
                        >
                            <div className="flex items-center gap-3 mb-3">
                                <X className="w-4 h-4 text-red-500/30 group-hover:text-red-500/50 transition-colors shrink-0" />
                                <h3 className="text-white text-sm font-medium">{item.text}</h3>
                            </div>
                            <p className="text-secondary/40 text-xs font-light leading-relaxed pl-7">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
