import Image from "next/image";

const pipeline = [
    { label: "Traffic", detail: "SEO, Ads, Social" },
    { label: "Landing Architecture", detail: "Optimized UI + Copy" },
    { label: "Lead Capture", detail: "Forms, WhatsApp, CTA" },
    { label: "WhatsApp Automation", detail: "Instant Response Bot" },
    { label: "CRM", detail: "Lead Scoring + Routing" },
    { label: "Payment Gateway", detail: "Stripe / Razorpay" },
    { label: "Analytics", detail: "Heatmaps + Tracking" },
    { label: "Optimization Engine", detail: "A/B + Funnel Tuning" },
];

export default function SystemArchitecture() {
    return (
        <section className="w-full px-6 md:px-12 lg:px-24 py-24 md:py-36 relative overflow-hidden bg-background">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16 relative z-10">
                {/* Left Side: Pipeline Flow */}
                <div className="w-full lg:w-1/2">
                    {/* Header */}
                    <div className="mb-16">
                        <span className="text-[10px] font-sans font-bold uppercase tracking-[0.25em] text-accent/80 border border-accent/20 px-4 py-2 rounded-full inline-block bg-accent/[0.05] mb-8">
                            System Blueprint
                        </span>
                        <h2
                            className="font-serif text-primary leading-[1.1] tracking-tight mb-4"
                            style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}
                        >
                            Inside a Veloraa<br />
                            <span className="italic text-primary/40 font-light">Growth System</span>
                        </h2>
                        <p className="text-secondary/80 text-sm max-w-md font-light">
                            Not marketing copy. This is the actual pipeline we deploy.
                        </p>
                    </div>

                    {/* Pipeline Flow */}
                    <div className="relative">
                        {/* Vertical Connection Line */}
                        <div className="absolute left-6 md:left-8 top-0 bottom-0 w-[1px] bg-gradient-to-b from-accent/30 via-accent/15 to-transparent" />

                        <div className="flex flex-col gap-0">
                            {pipeline.map((step, i) => (
                                <div key={i} className="relative flex items-stretch gap-6 md:gap-8 group">
                                    {/* Node */}
                                    <div className="shrink-0 relative z-10 flex flex-col items-center pt-6">
                                        <div className="w-3 h-3 rounded-full border-2 border-accent/30 bg-black group-hover:border-accent/60 group-hover:bg-accent/10 transition-colors" />
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 py-5 border-b border-primary/[0.03] group-last:border-b-0">
                                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                                            <h3 className="text-primary font-serif text-base tracking-tight group-hover:text-accent/80 transition-colors">
                                                {step.label}
                                            </h3>
                                            <span className="text-secondary/50 text-xs font-light tracking-wide">
                                                {step.detail}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Side: Abstract Visual */}
                <div className="w-full lg:w-1/2 relative flex justify-end opacity-40 blur-[1px]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src="/images/system_architecture.png"
                        alt="System Architecture Visual"
                        className="w-full max-w-lg object-contain mix-blend-screen"
                    />
                </div>
            </div>
        </section>
    );
}
