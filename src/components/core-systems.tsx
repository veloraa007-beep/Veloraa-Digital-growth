import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const systems = [
    {
        number: "I",
        title: "Premium Web Architecture",
        services: ["Luxury Websites", "3D Interactive Experiences", "Scroll Cinematic Design", "Authority Landing Pages"],
        link: "/services/premium-websites",
    },
    {
        number: "II",
        title: "Conversion & Growth Systems",
        services: ["Lead Funnels", "WhatsApp Automation", "SEO Optimization", "Conversion Rate Engineering"],
        link: "/services/lead-funnels",
    },
    {
        number: "III",
        title: "AI Content & Social Engine",
        services: ["Reels Production", "UGC Strategy", "AI-Generated Brand Assets", "Social Architecture"],
        link: "/services",
    },
    {
        number: "IV",
        title: "Infrastructure & SaaS Setup",
        services: ["Custom Dashboards", "Automation Workflows", "Payment Systems", "Cloud Integration"],
        link: "/services/saas-platforms",
    },
];

export default function CoreSystems() {
    return (
        <section className="w-full px-6 md:px-12 lg:px-24 py-20 md:py-32">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
                    <div>
                        <span className="text-[10px] font-sans font-bold uppercase tracking-[0.25em] text-accent/70 mb-6 block">
                            Core Systems
                        </span>
                        <h2
                            className="font-serif text-white leading-[1.1] tracking-tight"
                            style={{ fontSize: 'clamp(1.8rem, 4vw, 3.5rem)' }}
                        >
                            Four Pillars of
                            <br />
                            <span className="italic text-white/40 font-light">Digital Dominance</span>
                        </h2>
                    </div>
                    <p className="text-secondary/50 text-sm max-w-sm font-light leading-relaxed">
                        Not random services. Integrated systems engineered to work together.
                    </p>
                </div>

                {/* Systems Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {systems.map((system) => (
                        <Link
                            key={system.number}
                            href={system.link}
                            className="group relative p-8 md:p-10 border border-white/5 hover:border-accent/20 bg-white/[0.01] hover:bg-white/[0.02] transition-all duration-500"
                        >
                            {/* System Number */}
                            <span className="text-accent/20 font-serif text-5xl md:text-6xl font-light absolute top-6 right-8 group-hover:text-accent/35 transition-colors">
                                {system.number}
                            </span>

                            {/* Content */}
                            <div className="relative z-10">
                                <h3 className="text-white font-serif text-xl md:text-2xl tracking-tight mb-6 pr-16">
                                    {system.title}
                                </h3>

                                <ul className="space-y-3 mb-8">
                                    {system.services.map((service, i) => (
                                        <li key={i} className="flex items-center gap-3 text-secondary/50 text-sm font-light group-hover:text-secondary/70 transition-colors">
                                            <span className="w-1 h-1 rounded-full bg-accent/40 shrink-0" />
                                            {service}
                                        </li>
                                    ))}
                                </ul>

                                <span className="inline-flex items-center gap-2 text-accent/60 text-xs uppercase tracking-[0.2em] font-bold group-hover:text-accent transition-colors">
                                    Explore System
                                    <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
