export default function ROIJustification() {
    const comparisons = [
        { left: "Cheap Website", leftLabel: "Static", right: "Velora System", rightLabel: "Lead Engine" },
        { left: "Freelancer", leftLabel: "Template", right: "Velora", rightLabel: "Engineered System" },
        { left: "DIY", leftLabel: "Fragile", right: "Velora", rightLabel: "Scalable Infrastructure" },
    ];

    return (
        <section className="w-full px-6 md:px-12 lg:px-24 py-24 md:py-36">
            <div className="max-w-5xl mx-auto">
                {/* Header */}
                <div className="mb-16">
                    <span className="text-[10px] font-sans font-bold uppercase tracking-[0.25em] text-accent/70 mb-6 block">
                        Investment Logic
                    </span>
                    <h2
                        className="font-serif text-white leading-[1.1] tracking-tight mb-6"
                        style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}
                    >
                        Why Businesses Invest<br />
                        <span className="italic text-white/40 font-light">in Infrastructure</span>
                    </h2>

                    <div className="max-w-lg space-y-4 mb-16">
                        <p className="text-secondary/60 text-sm leading-relaxed font-light">
                            A <span className="text-white/80">₹25K system</span> that generates <span className="text-accent/70">₹2L in revenue</span> is not an expense.
                        </p>
                        <p className="text-secondary/40 text-sm leading-relaxed font-light">
                            A ₹7K website that brings no leads — is.
                        </p>
                    </div>
                </div>

                {/* Comparison Blocks */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {comparisons.map((comp, i) => (
                        <div key={i} className="border border-white/5 overflow-hidden">
                            {/* Left: The Alternative */}
                            <div className="p-6 bg-white/[0.01] border-b border-white/5">
                                <span className="text-[9px] uppercase tracking-[0.2em] text-red-500/40 font-bold block mb-2">
                                    Without Us
                                </span>
                                <h3 className="text-white/40 font-serif text-base mb-1">{comp.left}</h3>
                                <span className="text-secondary/30 text-xs font-light">→ {comp.leftLabel}</span>
                            </div>

                            {/* Right: Velora */}
                            <div className="p-6 bg-accent/[0.02]">
                                <span className="text-[9px] uppercase tracking-[0.2em] text-accent/50 font-bold block mb-2">
                                    With Velora
                                </span>
                                <h3 className="text-white font-serif text-base mb-1">{comp.right}</h3>
                                <span className="text-accent/60 text-xs font-light">→ {comp.rightLabel}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
