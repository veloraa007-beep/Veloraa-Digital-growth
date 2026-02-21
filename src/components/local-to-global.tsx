const stages = [
    { from: "Local Shop", to: "Website", step: "01" },
    { from: "Website", to: "Lead System", step: "02" },
    { from: "Lead System", to: "Automation", step: "03" },
    { from: "Automation", to: "Scalable Brand", step: "04" },
];

export default function LocalToGlobal() {
    return (
        <section className="w-full px-6 md:px-12 lg:px-24 py-24 md:py-36">
            <div className="max-w-5xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="text-[10px] font-sans font-bold uppercase tracking-[0.25em] text-accent/70 mb-6 block">
                        Transformation
                    </span>
                    <h2
                        className="font-serif text-white leading-[1.1] tracking-tight mb-4"
                        style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}
                    >
                        From Local Presence<br />
                        <span className="italic text-white/40 font-light">to Digital Authority</span>
                    </h2>
                </div>

                {/* Transformation Steps */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {stages.map((stage, i) => (
                        <div key={i} className="relative p-6 border border-white/5 bg-white/[0.01] group hover:border-accent/15 transition-colors">
                            {/* Step Number */}
                            <span className="text-accent/20 font-serif text-3xl font-light block mb-4 group-hover:text-accent/40 transition-colors">
                                {stage.step}
                            </span>

                            {/* From */}
                            <div className="mb-3">
                                <span className="text-[9px] uppercase tracking-[0.2em] text-secondary/30 font-bold block mb-1">From</span>
                                <span className="text-white/40 text-sm font-light">{stage.from}</span>
                            </div>

                            {/* Arrow */}
                            <div className="w-6 h-[1px] bg-accent/30 my-3" />

                            {/* To */}
                            <div>
                                <span className="text-[9px] uppercase tracking-[0.2em] text-accent/50 font-bold block mb-1">To</span>
                                <span className="text-white text-sm font-medium">{stage.to}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
