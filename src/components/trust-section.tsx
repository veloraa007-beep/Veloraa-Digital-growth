import { Shield, Server, Lock, Cloud } from "lucide-react";

const trustPoints = [
    {
        icon: Shield,
        title: "Secure Deployment",
        description: "Hardened server configurations with enterprise-grade DDoS protection and WAF.",
    },
    {
        icon: Lock,
        title: "Authentication Systems",
        description: "Structured auth flows with proper session management and encryption.",
    },
    {
        icon: Server,
        title: "Backend Architecture",
        description: "Clean API design, structured database logic, and secure data pipelines.",
    },
    {
        icon: Cloud,
        title: "Cloud Infrastructure",
        description: "AWS, Cloudflare CDN, edge caching, and redundant hosting for 99.9% uptime.",
    },
];

export default function TrustSection() {
    return (
        <section className="w-full px-6 md:px-12 lg:px-24 py-20 md:py-32 border-y border-white/5">
            <div className="max-w-5xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left: Content */}
                    <div>
                        <span className="text-[10px] font-sans font-bold uppercase tracking-[0.25em] text-accent/70 mb-6 block">
                            Security-First
                        </span>
                        <h2
                            className="font-serif text-white leading-[1.1] tracking-tight mb-6"
                            style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}
                        >
                            Built by a<br />
                            <span className="italic text-white/50 font-light">Cybersecurity Mindset</span>
                        </h2>
                        <p className="text-secondary/60 text-sm leading-relaxed font-light max-w-md">
                            Every system we build is analyzed for attack surfaces, data exposure risks,
                            and infrastructure weaknesses before it goes live.
                        </p>
                    </div>

                    {/* Right: Trust Points */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {trustPoints.map((point, i) => {
                            const Icon = point.icon;
                            return (
                                <div key={i} className="group">
                                    <Icon className="w-5 h-5 text-accent/50 mb-4 group-hover:text-accent transition-colors" />
                                    <h3 className="text-white font-serif text-base mb-2 tracking-tight">
                                        {point.title}
                                    </h3>
                                    <p className="text-secondary/40 text-xs leading-relaxed font-light">
                                        {point.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
