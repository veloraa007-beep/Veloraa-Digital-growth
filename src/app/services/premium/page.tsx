import ServicePageTemplate from "@/components/service-page-template";
import Link from "next/link";
import Image from "next/image";

export default function PremiumDesignPage() {
    return (
        <ServicePageTemplate
            title="Premium Website Design"
            description="Visual masterpieces engineered for impact. Where art meets digital architecture to create an immersive brand experience."
            heroImage="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2400&auto=format&fit=crop"
            offerings={[
                "Award-Winning Aesthetics: Designs that compete on a global stage.",
                "Advanced Motion (GSAP/WebGL): Fluid, physics-based interactions.",
                "Immersive Storytelling: Narrative-driven layouts that engage users.",
                "Custom 3D Elements: Unique visual assets that define your brand.",
                "Editorial Typography: Precision type systems for maximum readability and style."
            ]}
            techStack={[
                "Next.js", "React", "TypeScript", "Tailwind CSS",
                "Three.js", "GSAP", "WebGL", "Framer Motion",
                "HTML5", "CSS3", "JavaScript", "Node.js"
            ]}
            process={[
                {
                    number: "01",
                    title: "Art Direction",
                    description: "Defining the visual language, mood, and aesthetic pillars of the project.",
                },
                {
                    number: "02",
                    title: "Motion Design",
                    description: "Choreographing every interaction and transition for a cinematic feel.",
                },
                {
                    number: "03",
                    title: "Creative Development",
                    description: "Implementing complex visuals with clean, performant code.",
                },
                {
                    number: "04",
                    title: "Polish & Refine",
                    description: "Obsessive attention to micro-interactions and responsiveness.",
                },
            ]}
            ctaTitle="Create a Masterpiece"
        >
            <section className="py-20 bg-black/50 border-t border-white/5">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-serif text-white mb-12 text-center">Design Capabilities</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                title: "Immersive Experiences",
                                desc: "WebGL & 3D powered journeys.",
                                image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2340&auto=format&fit=crop"
                            },
                            {
                                title: "Editorial Layouts",
                                desc: "Magazine-style typography and grids.",
                                image: "https://images.unsplash.com/photo-1509343256512-d77a5cb3791b?q=80&w=2340&auto=format&fit=crop"
                            },
                            {
                                title: "Interactive Showcases",
                                desc: "Product reveals and story-driven scrolls.",
                                image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop"
                            }
                        ].map((type, i) => (
                            <div key={i} className="group block relative aspect-[4/3] overflow-hidden border border-white/10 bg-surface">
                                <Image src={type.image} alt={type.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-60 group-hover:opacity-80" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent p-6 flex flex-col justify-end">
                                    <h3 className="text-xl font-serif text-white mb-1 group-hover:text-accent transition-colors">{type.title}</h3>
                                    <p className="text-secondary text-sm">{type.desc}</p>
                                </div>
                            </div>
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
