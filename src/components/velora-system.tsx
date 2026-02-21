"use client";

const layers = [
    {
        number: "01",
        name: "Interface Layer",
        description: "Premium website + UI architecture",
        details: "Next.js, React, Tailwind, GSAP animations, responsive design systems",
        accent: "from-white/10 to-white/[0.02]",
    },
    {
        number: "02",
        name: "Conversion Layer",
        description: "Funnels + WhatsApp automation",
        details: "Lead capture, automated follow-ups, qualification bots, CRM sync",
        accent: "from-accent/10 to-accent/[0.02]",
    },
    {
        number: "03",
        name: "Automation Layer",
        description: "CRM + payment + integrations",
        details: "Stripe, Razorpay, Zapier workflows, database pipelines, webhooks",
        accent: "from-accent/15 to-accent/[0.03]",
    },
    {
        number: "04",
        name: "Infrastructure Layer",
        description: "Cloud + security + scalability",
        details: "AWS, Cloudflare CDN, SSL hardening, DDoS protection, edge caching",
        accent: "from-accent/20 to-accent/[0.05]",
    },
];

export default function VeloraSystem() {
    return (
        <section className="w-full px-6 md:px-12 lg:px-24 py-20 md:py-32 relative">
            {/* Subtle background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 blur-[150px] rounded-full pointer-events-none -z-10" />

            <div className="max-w-5xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16 md:mb-20">
                    <span className="text-[10px] font-sans font-bold uppercase tracking-[0.25em] text-accent/80 border border-accent/20 px-4 py-2 rounded-full mb-8 inline-block bg-accent/[0.05]">
                        System Architecture
                    </span>
                    <h2
                        className="font-serif text-white leading-[1.1] tracking-tight"
                        style={{ fontSize: 'clamp(1.8rem, 4vw, 3.5rem)' }}
                    >
                        The VELORA <span className="italic text-white/50 font-light">System™</span>
                    </h2>
                    <p className="text-secondary/50 text-sm mt-4 max-w-lg mx-auto font-light tracking-wide">
                        Four integrated layers that transform a website into a digital growth engine.
                    </p>
                </div>

                {/* 4-Layer Stacked Diagram */}
                <div className="flex flex-col gap-3">
                    {layers.map((layer, i) => (
                        <div
                            key={layer.number}
                            className={`
                                group relative overflow-hidden
                                border border-white/5 hover:border-accent/20
                                bg-gradient-to-r ${layer.accent}
                                transition-all duration-500
                                p-6 md:p-8
                            `}
                            style={{
                                marginLeft: `${i * 12}px`,
                                marginRight: `${(3 - i) * 12}px`,
                            }}
                        >
                            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
                                {/* Layer Number */}
                                <span className="text-accent/30 font-serif text-3xl md:text-4xl font-light shrink-0 group-hover:text-accent/50 transition-colors">
                                    {layer.number}
                                </span>

                                {/* Layer Content */}
                                <div className="flex-1 min-w-0">
                                    <h3 className="text-white font-serif text-lg md:text-xl tracking-tight mb-1">
                                        {layer.name}
                                    </h3>
                                    <p className="text-secondary/60 text-sm font-light">
                                        {layer.description}
                                    </p>
                                </div>

                                {/* Details (visible on hover/always on mobile) */}
                                <p className="text-secondary/30 text-xs font-light tracking-wide sm:max-w-[280px] sm:text-right group-hover:text-secondary/50 transition-colors">
                                    {layer.details}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Label */}
                <div className="text-center mt-10">
                    <p className="text-[10px] uppercase tracking-[0.3em] text-accent/40 font-medium">
                        Not a service provider — an ecosystem
                    </p>
                </div>
            </div>
        </section>
    );
}
