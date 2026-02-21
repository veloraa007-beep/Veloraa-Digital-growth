import ServicePageTemplate from "@/components/service-page-template";
import ServiceCard from "@/components/service-card";
import Image from "next/image";

export default function PremiumWebsitesPage() {
    return (
        <ServicePageTemplate
            title="Premium Websites"
            description="Authority, Conversion, and E-commerce architecture built for brands that demand excellence."
            heroImage="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2301&auto=format&fit=crop"
            offerings={[
                "Authority Websites: For Brands, Agencies, Professionals.",
                "Conversion Websites: For Coaches, Local Businesses, Real Estate.",
                "E-commerce Websites: For D2C Brands & Product Businesses.",
                "Portfolio & Personal Brand Sites: For Creators & Founders.",
                "High-End Corporate Sites: For Established Infrastructure Firms."
            ]}
            techStack={[
                "Next.js", "React", "TypeScript", "Tailwind CSS",
                "Framer Motion", "Sanity CMS", "HTML5", "CSS3",
                "JavaScript", "Node.js"
            ]}
            process={[
                {
                    number: "01",
                    title: "Discovery & Strategy",
                    description: "We analyze your brand positioning and define the architectural requirements for your digital presence.",
                },
                {
                    number: "02",
                    title: "Design & UX",
                    description: "Crafting a visual identity that commands authority while guiding users seamlessly toward conversion.",
                },
                {
                    number: "03",
                    title: "Engineered Development",
                    description: "Building with clean, semantic code optimized for speed, SEO, and scalability.",
                },
                {
                    number: "04",
                    title: "Launch & Growth",
                    description: "Deploying your system and integrating analytics to track performance and scale.",
                },
            ]}
        >
            <section className="py-20 bg-black/50 border-t border-white/5">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-serif text-white mb-12 text-center">Explore Website Types</h2>
                    <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                        {[
                            {
                                title: "Authority Websites",
                                description: "For Brands, Agencies, Professionals.",
                                link: "/services/premium-websites/authority",
                                image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2574&auto=format&fit=crop",
                                tags: ["Brand", "Authority"]
                            },
                            {
                                title: "Conversion Websites",
                                description: "For Coaches, Local Businesses, Real Estate.",
                                link: "/services/premium-websites/conversion",
                                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
                                tags: ["Sales", "Growth"]
                            },
                            {
                                title: "E-commerce Websites",
                                description: "For D2C Brands & Product Businesses.",
                                link: "/services/premium-websites/ecommerce",
                                image: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?q=80&w=2670&auto=format&fit=crop",
                                tags: ["Shop", "Scale"]
                            },
                            {
                                title: "Portfolio Sites",
                                description: "For Creators & Founders.",
                                link: "/services/premium-websites/portfolio",
                                image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
                                tags: ["Personal", "Showcase"]
                            },
                            {
                                title: "Corporate Sites",
                                description: "For Established Infrastructure Firms.",
                                link: "/services/premium-websites/corporate",
                                image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
                                tags: ["Enterprise", "Trust"]
                            }
                        ].map((type, i) => (
                            <ServiceCard
                                key={i}
                                title={type.title}
                                description={type.description}
                                number={`0${i + 1}`}
                                tags={type.tags}
                                image={type.image}
                                href={type.link}
                            />
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 border-t border-white/5 bg-black">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-2xl font-serif text-white mb-6">Global Design Standards</h2>
                    <p className="text-secondary/60 text-sm mb-8 max-w-2xl mx-auto">
                        We benchmark our work against the world&apos;s best. Explore the caliber of design we aspire to and exceed.
                    </p>
                    <a
                        href="https://dribbble.com/shots/popular/web-design"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-accent border-b border-accent/20 pb-1 hover:text-white hover:border-white transition-colors"
                    >
                        View Design Benchmarks <span className="text-lg">→</span>
                    </a>
                </div>
            </section>
        </ServicePageTemplate>
    );
}
