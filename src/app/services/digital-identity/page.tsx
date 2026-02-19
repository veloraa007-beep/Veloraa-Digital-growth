import ServicePageTemplate from "@/components/service-page-template";

export default function DigitalIdentityPage() {
    return (
        <ServicePageTemplate
            title="Digital Identity"
            description="Logo, typography, and color psychology. Identity architecture for premium brands."
            heroImage="https://images.unsplash.com/photo-1634942537034-2531766767d1?q=80&w=2070&auto=format&fit=crop"
            offerings={[
                "Logo Design: Timeless, memorable visual identifiers.",
                "Color Psychology: Strategic palettes that evoke the right emotion.",
                "Typography System: Hierarchical font selection for readability and tone.",
                "Brand Positioning Tone: Defining your unique voice in the market.",
                "Social Media Visual Kit: Consistent branding across all channels."
            ]}
            techStack={[
                "Figma", "Adobe Illustrator", "Photoshop", "After Effects",
                "Blender", "Spline", "Cinema 4D", "Procreate"
            ]}
            process={[
                {
                    number: "01",
                    title: "Brand Audit",
                    description: "Evaluating your current brand perception and market position.",
                },
                {
                    number: "02",
                    title: "Concept Development",
                    description: "Exploring visual directions that align with your strategic goals.",
                },
                {
                    number: "03",
                    title: "System Design",
                    description: "Creating a comprehensive design system for consistency.",
                },
                {
                    number: "04",
                    title: "Guidelines & Handoff",
                    description: "Documenting rules to ensure brand integrity everywhere.",
                },
            ]}
            ctaTitle="Refine Your Identity"
        >
            <section className="py-20 border-t border-white/5 bg-black">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-2xl font-serif text-white mb-6">Identity Systems Inspiration</h2>
                    <p className="text-secondary/60 text-sm mb-8 max-w-2xl mx-auto">
                        See how global brands tell their stories. We use these galleries to push the boundaries of corporate identity.
                    </p>
                    <a
                        href="https://www.behance.net/galleries/branding"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-accent border-b border-accent/20 pb-1 hover:text-white hover:border-white transition-colors"
                    >
                        Explore Branding Gallery <span className="text-lg">→</span>
                    </a>
                </div>
            </section>
        </ServicePageTemplate>
    );
}
