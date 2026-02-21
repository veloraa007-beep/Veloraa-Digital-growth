const specs = [
    { label: "CDN Edge Caching", desc: "Content served from nearest global node, < 200ms TTFB" },
    { label: "API Rate Limiting", desc: "Brute-force protection on all endpoints and form submissions" },
    { label: "Secure Token Handling", desc: "Session tokens encrypted, rotated, and scoped per user context" },
    { label: "SSL Enforcement", desc: "TLS 1.3 with HSTS preload and certificate auto-renewal" },
    { label: "DNS Hardening", desc: "DNSSEC-ready with Cloudflare proxy and DDoS mitigation" },
    { label: "Dependency Auditing", desc: "Automated vulnerability scanning on every deployment cycle" },
];

export default function TechnicalDepth() {
    return (
        <section className="w-full px-6 md:px-12 lg:px-24 py-24 md:py-36">
            <div className="max-w-5xl mx-auto">
                {/* Header */}
                <div className="mb-14">
                    <span className="text-[10px] font-sans font-bold uppercase tracking-[0.25em] text-accent/70 mb-6 block">
                        Under the Hood
                    </span>
                    <h2
                        className="font-serif text-white leading-[1.1] tracking-tight mb-4"
                        style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.8rem)' }}
                    >
                        Engineered with<br />
                        <span className="italic text-white/40 font-light">Production-Grade Infrastructure</span>
                    </h2>
                    <p className="text-secondary/50 text-sm max-w-lg font-light leading-relaxed">
                        Every system passes our deployment checklist before going live.
                        This isn&apos;t design — it&apos;s engineering.
                    </p>
                </div>

                {/* Specs Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {specs.map((spec, i) => (
                        <div
                            key={i}
                            className="p-5 border border-white/5 bg-white/[0.01] hover:border-accent/15 transition-colors group"
                        >
                            <h3 className="text-white text-sm font-medium mb-2 group-hover:text-accent/80 transition-colors">
                                {spec.label}
                            </h3>
                            <p className="text-secondary/40 text-[11px] font-light leading-relaxed">
                                {spec.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
