import { Activity, ShieldCheck, Settings, TrendingUp } from "lucide-react";

const postLaunchItems = [
    { icon: Activity, title: "Performance Tracking", desc: "Real-time monitoring of speed, uptime, and user behavior." },
    { icon: Settings, title: "Funnel Refinement", desc: "Continuous A/B testing and conversion optimization." },
    { icon: ShieldCheck, title: "Security Audits", desc: "Scheduled vulnerability scans and dependency updates." },
    { icon: TrendingUp, title: "Infrastructure Upgrades", desc: "Scaling resources and deploying new capabilities." },
];

export default function PostLaunch() {
    return (
        <section className="w-full px-6 md:px-12 lg:px-24 py-24 md:py-36 border-y border-white/5">
            <div className="max-w-5xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left */}
                    <div>
                        <span className="text-[10px] font-sans font-bold uppercase tracking-[0.25em] text-accent/70 mb-6 block">
                            Beyond Delivery
                        </span>
                        <h2
                            className="font-serif text-white leading-[1.1] tracking-tight mb-6"
                            style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}
                        >
                            Launch Is Not<br />
                            <span className="italic text-white/40 font-light">The Finish Line</span>
                        </h2>
                        <p className="text-secondary/50 text-sm leading-relaxed font-light max-w-md">
                            Most agencies disappear after deployment. We stay — monitoring,
                            optimizing, and scaling your infrastructure as your business grows.
                        </p>
                    </div>

                    {/* Right */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        {postLaunchItems.map((item, i) => {
                            const Icon = item.icon;
                            return (
                                <div key={i} className="group p-5 border border-white/5 bg-white/[0.01] hover:border-accent/15 transition-colors">
                                    <Icon className="w-4 h-4 text-accent/40 mb-3 group-hover:text-accent/60 transition-colors" />
                                    <h3 className="text-white text-sm font-medium mb-1">{item.title}</h3>
                                    <p className="text-secondary/40 text-[11px] font-light leading-relaxed">{item.desc}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
