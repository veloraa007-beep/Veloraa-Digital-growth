export default function ProblemSection() {
    const problems = [
        { label: "Template Websites", desc: "Generic layouts that blend into the noise. No authority. No conversion." },
        { label: "Weak Hosting", desc: "Shared servers that crash under traffic. No CDN. No edge caching." },
        { label: "No Automation", desc: "Manual follow-ups. Missed leads. Zero workflow intelligence." },
        { label: "No Conversion Structure", desc: "Traffic without funnels. Visitors without capture. Revenue left on the table." },
        { label: "No Security Awareness", desc: "Exposed APIs. Default passwords. No SSL hardening. Easy targets." },
    ];

    return (
        <section className="w-full px-6 md:px-12 lg:px-24 py-32 bg-[#141618]">
            <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
                {/* Section Label */}
                <span className="text-xs sm:text-sm font-sans font-medium uppercase tracking-[0.3em] text-accent/80 mb-10 block">
                    The Reality
                </span>

                {/* Headline */}
                <h2
                    className="font-serif text-primary leading-[1.1] tracking-tight mb-8"
                    style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}
                >
                    Most Businesses Are
                    <br />
                    <span className="italic text-primary/40 font-light">Digitally Fragile.</span>
                </h2>

                <p className="text-secondary/80 text-base sm:text-lg max-w-3xl mb-24 leading-relaxed font-light">
                    They operate on borrowed infrastructure, patched solutions, and hope-based marketing.
                    Velora exists to engineer the alternative.
                </p>

                {/* Problem Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
                    {problems.map((problem, i) => (
                        <div
                            key={i}
                            className="p-10 border border-primary/5 bg-background/50 hover:border-accent/40 transition-colors duration-500 group flex flex-col items-center text-center"
                        >
                            <div className="flex flex-col items-center gap-6 mb-6">
                                <div className="w-12 h-[1px] bg-accent/40 group-hover:bg-accent transition-colors shrink-0" />
                                <h3 className="text-primary font-serif text-xl tracking-tight">{problem.label}</h3>
                            </div>
                            <p className="text-secondary/70 text-sm leading-relaxed font-light">
                                {problem.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
