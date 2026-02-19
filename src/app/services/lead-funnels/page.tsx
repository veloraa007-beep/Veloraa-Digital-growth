import ServicePageTemplate from "@/components/service-page-template";

export default function LeadFunnelsPage() {
    return (
        <ServicePageTemplate
            title="Lead Funnel Systems"
            description="Traffic → Capture → Convert. Engineered funnels that turn visitors into revenue."
            heroImage="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
            offerings={[
                "Landing Page Architecture: High-converting single-purpose pages.",
                "Meta Ads Funnel Integration: Seamless connection from ad click to lead.",
                "Google Ads Conversion Tracking: Precise measurement of ROI.",
                "Retargeting Pixel Setup: Staying top-of-mind for interested visitors.",
                "CRM Tagging System: Organizing leads by interest and behavior."
            ]}
            techStack={[
                "Next.js", "React", "TypeScript", "Tailwind CSS",
                "Framer Motion", "Google Analytics 4", "Meta Pixel",
                "Zapier", "Make.com", "Hotjar"
            ]}
            process={[
                {
                    number: "01",
                    title: "Funnel Strategy",
                    description: "Mapping out the complete customer journey from awareness to conversion.",
                },
                {
                    number: "02",
                    title: "Asset Creation",
                    description: "Designing high-impact landing pages and lead magnets.",
                },
                {
                    number: "03",
                    title: "Integration",
                    description: "Connecting ads, pages, and CRM for seamless data flow.",
                },
                {
                    number: "04",
                    title: "A/B Testing",
                    description: "Continuous optimization of headlines, copy, and offers.",
                },
            ]}
            ctaTitle="Build Your Funnel"
        >
            <section className="py-20 border-t border-white/5 bg-black">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-2xl font-serif text-white mb-6">Performance Benchmarks</h2>
                    <p className="text-secondary/60 text-sm mb-8 max-w-2xl mx-auto">
                        We engineer funnels to exceed industry standards. Compare our targets with global conversion data.
                    </p>
                    <a
                        href="https://unbounce.com/conversion-benchmark-report/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-accent border-b border-accent/20 pb-1 hover:text-white hover:border-white transition-colors"
                    >
                        View Conversion Data <span className="text-lg">→</span>
                    </a>
                </div>
            </section>
        </ServicePageTemplate>
    );
}
