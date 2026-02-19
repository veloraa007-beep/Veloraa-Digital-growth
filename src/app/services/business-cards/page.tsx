import ServicePageTemplate from "@/components/service-page-template";
import Link from "next/link";
import Image from "next/image";

export default function BusinessCardsPage() {
    return (
        <ServicePageTemplate
            title="Business Cards"
            description="Luxury physical identity. Premium paper, foil stamping, and optional NFC smart integration."
            heroImage="https://images.unsplash.com/photo--W6V8m0VPoA?q=80&w=2670&auto=format&fit=crop"
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
                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {[
                            {
                                title: "Premium Paper Cards",
                                desc: "Matte finish, gold foil, high GSM.",
                                link: "/services/business-cards/paper",
                                image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?q=80&w=2070&auto=format&fit=crop"
                            },
                            {
                                title: "NFC Smart Cards",
                                desc: "Digital profile integration. Tap & Share.",
                                link: "/services/business-cards/nfc",
                                image: "https://images.unsplash.com/photo-1562564055-71e051d33c19?q=80&w=2670&auto=format&fit=crop"
                            }
                        ].map((type, i) => (
                            <Link key={i} href={type.link} className="group block relative aspect-[16/9] overflow-hidden border border-white/10 bg-surface">
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
        </ServicePageTemplate>
    );
}
