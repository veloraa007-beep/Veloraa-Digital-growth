import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-background pt-32 pb-12 relative overflow-hidden flex flex-col items-center">

            <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">

                {/* Top Line */}
                <div className="mb-16 text-center md:text-left">
                    <Link href="/" className="inline-block group">
                        <span className="text-3xl md:text-4xl font-serif font-light text-primary tracking-tighter group-hover:text-accent transition-colors duration-500">
                            VELORA
                        </span>
                    </Link>
                </div>

                {/* Middle Grid (3 Columns) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 mb-24">

                    {/* Column 1: Links */}
                    <div>
                        <h4 className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-accent/50 mb-8">Navigation</h4>
                        <ul className="space-y-4">
                            {[
                                { label: "About", href: "/about" },
                                { label: "Services", href: "/services" },
                                { label: "Work", href: "/work" },
                                { label: "Pricing", href: "/pricing" },
                            ].map((item) => (
                                <li key={item.label}>
                                    <Link
                                        href={item.href}
                                        className="text-secondary/60 hover:text-accent transition-colors text-sm font-light tracking-wide"
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 2: Services */}
                    <div>
                        <h4 className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-accent/50 mb-8">Architecture</h4>
                        <ul className="space-y-4">
                            {[
                                "Web Architecture",
                                "Automation",
                                "Infrastructure",
                                "SaaS Systems"
                            ].map((item) => (
                                <li key={item}>
                                    <Link
                                        href={`/services/${item.toLowerCase().replace(/ /g, '-')}`}
                                        className="text-secondary/60 hover:text-accent transition-colors text-sm font-light tracking-wide"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Contact */}
                    <div>
                        <h4 className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-accent/50 mb-8">Contact</h4>
                        <ul className="space-y-4 text-sm text-secondary/60 font-light tracking-wide">
                            <li>
                                <a href="mailto:veloraa007@gmail.com" className="hover:text-accent transition-colors">
                                    veloraa007@gmail.com
                                </a>
                            </li>
                            <li>
                                <a href="tel:+919901981097" className="hover:text-accent transition-colors">
                                    +91 99019 81097
                                </a>
                            </li>
                            <li className="text-secondary/40 pt-2">
                                Bangalore, India
                            </li>
                        </ul>
                    </div>

                </div>

                {/* Footer Accent Line */}
                <div className="w-full relative h-[2px] mb-8 opacity-70">
                    <Image
                        src="/images/footer_accent.png"
                        alt=""
                        fill
                        className="object-cover mix-blend-screen"
                        sizes="(max-width: 768px) 100vw, 1200px"
                    />
                </div>

                {/* Bottom Line */}
                <div className="flex flex-col lg:flex-row justify-between items-center gap-6 pt-6 text-center lg:text-left">

                    <div className="flex flex-col gap-2">
                        <p className="text-[10px] sm:text-xs text-primary/80 font-sans uppercase tracking-[0.2em] font-medium">
                            &copy; {currentYear} Velora — Digital Growth Operating System™
                        </p>
                        <p className="text-[9px] text-secondary/40 font-sans uppercase tracking-[0.15em]">
                            Engineered in Bangalore
                        </p>
                    </div>

                    {/* Social Row */}
                    <div className="flex gap-6">
                        {[
                            { name: "Instagram", url: "https://www.instagram.com/veloraa.digital/" },
                        ].map((social) => (
                            <a
                                key={social.name}
                                href={social.url}
                                target={social.url !== "#" ? "_blank" : "_self"}
                                rel={social.url !== "#" ? "noopener noreferrer" : ""}
                                className="text-secondary/50 hover:text-accent text-[10px] uppercase tracking-widest font-medium transition-colors duration-300"
                            >
                                {social.name}
                            </a>
                        ))}
                    </div>
                </div>

            </div>
        </footer>
    );
}
