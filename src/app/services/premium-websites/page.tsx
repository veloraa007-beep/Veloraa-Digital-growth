import ServicePageTemplate from "@/components/service-page-template";
import Link from "next/link";
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
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                title: "Authority Websites",
                                desc: "For Brands, Agencies, Professionals.",
                                link: "/services/premium-websites/authority",
                                image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2574&auto=format&fit=crop"
                            },
                            {
                                title: "Conversion Websites",
                                desc: "For Coaches, Local Businesses, Real Estate.",
                                link: "/services/premium-websites/conversion",
                                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
                            },
                            {
                                title: "E-commerce Websites",
                                desc: "For D2C Brands & Product Businesses.",
                                link: "/services/premium-websites/ecommerce",
                                image: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?q=80&w=2574&auto=format&fit=crop"
                            },
                            {
                                title: "Portfolio Sites",
                                desc: "For Creators & Founders.",
                                link: "/services/premium-websites/portfolio",
                                image: "https://images.unsplash.com/photo-1545665277-5937bf04499c?q=80&w=2546&auto=format&fit=crop"
                            },
                            {
                                title: "Corporate Sites",
                                desc: "For Established Infrastructure Firms.",
                                link: "/services/premium-websites/corporate",
                                image: "https://images.unsplash.com/photo-1486406140926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop"
                            }
                        ].map((type, i) => (
                            <Link key={i} href={type.link} className="group block relative aspect-[4/3] overflow-hidden border border-white/10 bg-surface">
                                <Image src={type.image} alt={type.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-60 group-hover:opacity-80" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent p-6 flex flex-col justify-end">
                                    <h3 className="text-xl font-serif text-white mb-1 group-hover:text-accent transition-colors">{type.title}</h3>
                                    <p className="text-secondary text-sm">{type.desc}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 border-t border-white/5 bg-black">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-2xl font-serif text-white mb-6">Global Design Standards</h2>
                    <p className="text-secondary/60 text-sm mb-8 max-w-2xl mx-auto">
                        We benchmark our work against the world's best. Explore the caliber of design we aspire to and exceed.
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
