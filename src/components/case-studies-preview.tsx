const simulations = [
    {
        title: "Luxury Restaurant System",
        before: "No online orders, walk-in only, zero digital inquiry capture",
        after: "WhatsApp booking automation + QR menu + review system",
        result: "+42% inquiry increase",
        tags: ["WhatsApp API", "Booking Engine", "Review Automation"],
    },
    {
        title: "Real Estate Conversion Engine",
        before: "Static brochure website, leads lost in inbox, no follow-up",
        after: "Property showcase + lead filtering + CRM auto-routing",
        result: "3x lead qualification rate",
        tags: ["Lead Funnels", "CRM Integration", "Automated Follow-up"],
    },
    {
        title: "E-Commerce Automation Stack",
        before: "Manual inventory, cart abandonment untracked, no recovery",
        after: "Inventory sync + payment flow + cart recovery automation",
        result: "+28% revenue recovery",
        tags: ["Stripe", "Inventory System", "Cart Recovery"],
    },
];

export default function CaseStudiesPreview() {
    return (
        <section className="w-full px-6 md:px-12 lg:px-24 py-24 md:py-36">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="text-[10px] font-sans font-bold uppercase tracking-[0.25em] text-accent/70 mb-6 block">
                        System Simulations
                    </span>
                    <h2
                        className="font-serif text-white leading-[1.1] tracking-tight mb-4"
                        style={{ fontSize: 'clamp(1.8rem, 4vw, 3.5rem)' }}
                    >
                        What a Velora System <span className="italic text-white/40 font-light">Delivers</span>
                    </h2>
                    <p className="text-secondary/40 text-xs uppercase tracking-widest mt-4">
                        Projected outcomes based on system architecture
                    </p>
                </div>

                {/* Simulation Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {simulations.map((sim, i) => (
                        <div
                            key={i}
                            className="p-6 md:p-8 border border-white/5 bg-white/[0.01] hover:border-accent/15 transition-colors group"
                        >
                            <h3 className="text-white font-serif text-lg mb-6 tracking-tight">
                                {sim.title}
                            </h3>

                            {/* Before */}
                            <div className="mb-4">
                                <span className="text-[9px] uppercase tracking-[0.2em] text-red-500/40 font-bold block mb-1.5">
                                    Before
                                </span>
                                <p className="text-secondary/40 text-xs font-light leading-relaxed">
                                    {sim.before}
                                </p>
                            </div>

                            {/* After */}
                            <div className="mb-4">
                                <span className="text-[9px] uppercase tracking-[0.2em] text-accent/50 font-bold block mb-1.5">
                                    After
                                </span>
                                <p className="text-secondary/60 text-xs font-light leading-relaxed">
                                    {sim.after}
                                </p>
                            </div>

                            {/* Result */}
                            <div className="py-3 px-4 bg-accent/[0.04] border border-accent/10 mb-6">
                                <span className="text-accent/70 font-serif text-lg tracking-tight">
                                    {sim.result}
                                </span>
                            </div>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-1.5">
                                {sim.tags.map((tag, t) => (
                                    <span key={t} className="text-[9px] uppercase tracking-wider text-secondary/30 border border-white/5 px-2 py-0.5">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
