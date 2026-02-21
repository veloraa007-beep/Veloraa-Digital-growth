export default function ProblemSection() {
    const problems = [
        { label: "Template Websites", desc: "Generic layouts that blend into the noise. No authority. No conversion." },
        { label: "Weak Hosting", desc: "Shared servers that crash under traffic. No CDN. No edge caching." },
        { label: "No Automation", desc: "Manual follow-ups. Missed leads. Zero workflow intelligence." },
        { label: "No Conversion Structure", desc: "Traffic without funnels. Visitors without capture. Revenue left on the table." },
        { label: "No Security Awareness", desc: "Exposed APIs. Default passwords. No SSL hardening. Easy targets." },
    ];

    return (
        <section className="w-full px-6 md:px-12 lg:px-24 py-20 md:py-32">
            <div className="max-w-5xl mx-auto">
                {/* Section Label */}
                <span className="text-[10px] font-sans font-bold uppercase tracking-[0.25em] text-accent/70 mb-8 block">
                    The Reality
                </span>

                {/* Headline */}
                <h2
                    className="font-serif text-white leading-[1.1] tracking-tight mb-6"
                    style={{ fontSize: 'clamp(1.8rem, 4vw, 3.5rem)' }}
                >
                    Most Businesses Are
                    <br />
                    <span className="italic text-white/40 font-light">Digitally Fragile.</span>
                </h2>

                <p className="text-secondary/60 text-sm sm:text-base max-w-2xl mb-16 leading-relaxed font-light">
                    They operate on borrowed infrastructure, patched solutions, and hope-based marketing.
                    Velora exists to engineer the alternative.
                </p>

                {/* Problem Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {problems.map((problem, i) => (
                        <div
                            key={i}
                            className="p-6 border border-white/5 bg-white/[0.01] hover:border-white/10 transition-colors group"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-2 h-2 rounded-full bg-red-500/40 group-hover:bg-red-500/70 transition-colors shrink-0" />
                                <h3 className="text-white font-serif text-base tracking-tight">{problem.label}</h3>
                            </div>
                            <p className="text-secondary/50 text-sm leading-relaxed font-light">
                                {problem.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
