const steps = [
    {
        number: "01",
        title: "Strategic Architecture Audit",
        description: "We analyze your business model, competitors, and digital gaps before writing a single line of code.",
    },
    {
        number: "02",
        title: "System Blueprint Design",
        description: "Custom architecture plan covering interface, automation, conversion, and infrastructure layers.",
    },
    {
        number: "03",
        title: "Infrastructure Deployment",
        description: "Cloud setup, domain configuration, security hardening, and performance baseline established.",
    },
    {
        number: "04",
        title: "Automation Integration",
        description: "CRM, payment systems, WhatsApp workflows, and lead routing connected and tested.",
    },
    {
        number: "05",
        title: "Launch + Optimization",
        description: "Production deployment, performance tuning, analytics setup, and 30-day monitoring window.",
    },
];

export default function ProcessTimeline() {
    return (
        <section className="w-full px-6 md:px-12 lg:px-24 py-20 md:py-32">
            <div className="max-w-5xl mx-auto">
                {/* Header */}
                <div className="mb-16">
                    <span className="text-[10px] font-sans font-bold uppercase tracking-[0.25em] text-accent/70 mb-6 block">
                        Deployment Process
                    </span>
                    <h2
                        className="font-serif text-white leading-[1.1] tracking-tight"
                        style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}
                    >
                        The Veloraa <span className="italic text-white/40 font-light">Deployment Process</span>
                    </h2>
                </div>

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical Line */}
                    <div className="hidden md:block absolute left-[39px] top-0 bottom-0 w-[1px] bg-gradient-to-b from-accent/20 via-accent/10 to-transparent" />

                    <div className="flex flex-col gap-8 md:gap-0">
                        {steps.map((step, i) => (
                            <div key={i} className="flex gap-6 md:gap-10 group md:py-8">
                                {/* Number */}
                                <div className="shrink-0 relative">
                                    <div className="w-[80px] h-[80px] border border-white/5 group-hover:border-accent/20 flex items-center justify-center transition-colors bg-black">
                                        <span className="text-accent/30 font-serif text-2xl font-light group-hover:text-accent/60 transition-colors">
                                            {step.number}
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex-1 pt-2">
                                    <h3 className="text-white font-serif text-lg md:text-xl tracking-tight mb-2 group-hover:text-accent/80 transition-colors">
                                        {step.title}
                                    </h3>
                                    <p className="text-secondary/50 text-sm font-light leading-relaxed max-w-lg">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
