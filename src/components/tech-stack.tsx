const techStack = [
    "AWS", "Google Cloud", "Azure", "Stripe", "Razorpay",
    "Supabase", "Kubernetes", "Cloudflare", "Zapier", "Make",
    "Twilio", "WhatsApp Cloud API",
];

export default function TechStack() {
    return (
        <section className="w-full py-20 md:py-28 border-y border-white/5">
            <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-24 mb-10">
                <div className="text-center">
                    <span className="text-[10px] font-sans font-bold uppercase tracking-[0.25em] text-accent/70 mb-4 block">
                        Infrastructure Powered By
                    </span>
                </div>
            </div>

            {/* Scrolling Marquee */}
            <div className="overflow-hidden">
                <div className="marquee-track flex gap-16 md:gap-20 whitespace-nowrap">
                    {[...techStack, ...techStack].map((tech, i) => (
                        <span
                            key={i}
                            className="text-sm md:text-base font-sans font-medium tracking-[0.12em] text-white/12 hover:text-white/35 transition-colors duration-500 uppercase cursor-default shrink-0"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>

            <p className="text-center text-[9px] text-secondary/15 uppercase tracking-widest mt-8 px-6">
                Enterprise-grade tools — not template plugins
            </p>
        </section>
    );
}
