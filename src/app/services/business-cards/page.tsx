import ServicePageTemplate from "@/components/service-page-template";
import ServiceCard from "@/components/service-card";
import Image from "next/image";

export default function BusinessCardsPage() {
    return (
        <ServicePageTemplate
            title="Business Cards"
            description="Luxury physical identity. Premium paper, foil stamping, and optional NFC smart integration."
            heroImage="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2070&auto=format&fit=crop"
            offerings={[
                "Premium Paper Cards: Matte finish, foil stamping, high GSM.",
                "Embossed Typography: Tactile elegance that leaves a lasting impression.",
                "Minimal Luxury Layout: Clean design that breathes sophistication.",
                "NFC Smart Cards (On Request): Digital profile integration.",
                "Custom Contact Sharing: Update details instantly without reprinting."
            ]}
            techStack={[
                "NFC Technology", "vCard+", "QR Codes",
                "Custom Dashboard", "Laser Printing", "Foil Stamping"
            ]}
            process={[
                {
                    number: "01",
                    title: "Design Consultation",
                    description: "Selecting materials, finishes, and layout styles.",
                },
                {
                    number: "02",
                    title: "Proofing",
                    description: "Digital previews to ensure every detail is perfect.",
                },
                {
                    number: "03",
                    title: "Premium Printing",
                    description: "High-quality production with strict quality control.",
                },
                {
                    number: "04",
                    title: "Delivery",
                    description: "Packaged securely and delivered to your doorstep.",
                },
            ]}
            ctaTitle="Order Your Cards"
        >
            <section className="py-20 bg-black/50 border-t border-white/5">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-2xl font-serif text-white mb-6">Networking Efficiency</h2>
                    <p className="text-secondary/60 text-sm mb-8 max-w-2xl mx-auto">
                        Digital cards reduce exchange time and ensure your details are never lost. Networking reimagined.
                    </p>
                    <a
                        href="https://www.forbes.com/sites/forbesbusinesscouncil/2022/07/20/why-digital-business-cards-are-essential-for-networking-in-2022/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-accent border-b border-accent/20 pb-1 hover:text-white hover:border-white transition-colors"
                    >
                        Read Forbes Article <span className="text-lg">→</span>
                    </a>
                </div>
            </section>

            <section className="py-20 bg-black/50 border-t border-white/5">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-serif text-white mb-12 text-center">Select Card Type</h2>
                    <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                        {[
                            {
                                title: "Premium Paper Cards",
                                description: "Matte finish, gold foil, high GSM.",
                                link: "/services/business-cards/paper",
                                image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?q=80&w=2070&auto=format&fit=crop",
                                tags: ["Tactile", "Luxury"]
                            },
                            {
                                title: "NFC Smart Cards",
                                description: "Digital profile integration. Tap & Share.",
                                link: "/services/business-cards/nfc",
                                image: "https://images.unsplash.com/photo-1562564055-71e051d33c19?q=80&w=2670&auto=format&fit=crop",
                                tags: ["Tech", "Smart"]
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
        </ServicePageTemplate>
    );
}
