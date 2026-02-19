import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-background pt-24 pb-12 border-t border-white/5 relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

            <div className="max-w-7xl mx-auto px-5 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-20 mb-24">
                    {/* Brand Column */}
                    <div className="col-span-1 md:col-span-2 space-y-10">
                        <Link href="/" className="inline-block">
                            <span className="text-3xl font-serif font-medium text-primary tracking-tight">
                                VELORA
                            </span>
                        </Link>
                        <p className="text-secondary/80 max-w-sm leading-loose font-light text-sm tracking-wide">
                            Engineering invisible excellence. We build ultra-luxury digital growth systems for brands that refuse to be ordinary.
                        </p>

                        {/* Social Links - Clean & Minimal */}
                        <div className="flex gap-4 pt-4">
                            {[
                                { name: "Instagram", url: "https://www.instagram.com/veloraa.digital/" },
                                { name: "LinkedIn", url: "#" },
                                { name: "Twitter", url: "#" }
                            ].map((social) => (
                                <a
                                    key={social.name}
                                    href={social.url}
                                    target={social.url !== "#" ? "_blank" : "_self"}
                                    rel={social.url !== "#" ? "noopener noreferrer" : ""}
                                    className="group flex items-center justify-center w-10 h-10 rounded-full border border-white/5 hover:border-accent/40 bg-white/[0.02] transition-colors"
                                    aria-label={social.name}
                                >
                                    <span className="text-secondary group-hover:text-accent text-xs uppercase tracking-wide">
                                        {social.name.slice(0, 2)}
                                    </span>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h4 className="text-primary font-serif text-lg mb-8 font-medium">Menu</h4>
                        <ul className="space-y-4">
                            {["About", "Services", "Work", "Pricing"].map((item) => (
                                <li key={item}>
                                    <Link
                                        href={`/${item.toLowerCase()}`}
                                        className="text-secondary hover:text-primary transition-colors text-xs font-sans font-medium uppercase tracking-[0.15em] flex items-center gap-2 group"
                                    >
                                        <span className="w-0 overflow-hidden group-hover:w-2 h-[1px] bg-accent transition-all duration-300 inline-block" />
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact & Legal */}
                    <div>
                        <h4 className="text-primary font-serif text-lg mb-8 font-medium">Connect</h4>
                        <div className="flex flex-col gap-6 text-sm text-secondary/80 font-light tracking-wide mb-10">
                            <a href="mailto:veloraa007@gmail.com" className="hover:text-primary transition-colors flex items-center gap-3">
                                <Mail className="w-4 h-4 text-accent/70" />
                                veloraa007@gmail.com
                            </a>
                            <a href="tel:+919901981097" className="hover:text-primary transition-colors flex items-center gap-3">
                                <Phone className="w-4 h-4 text-accent/70" />
                                +91 99019 81097
                            </a>
                            <div className="flex items-center gap-3">
                                <MapPin className="w-4 h-4 text-accent/70" />
                                Bangalore, India
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-secondary/40 font-sans uppercase tracking-[0.2em] font-medium">
                    <p>&copy; {currentYear} Velora Digital systems.</p>
                    <div className="flex gap-8">
                        <Link href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-primary transition-colors">Terms & Conditions</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
