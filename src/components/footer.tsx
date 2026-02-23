import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-background pt-24 pb-12 border-t border-white/5 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-16 mb-20">

                    {/* Brand Column */}
                    <div className="col-span-1 md:col-span-1 space-y-6">
                        <Link href="/" className="inline-block">
                            <span className="text-2xl font-serif font-medium text-primary tracking-tight">
                                VELORA
                            </span>
                        </Link>
                        <p className="text-secondary/50 max-w-xs leading-relaxed font-light text-xs tracking-wide">
                            Digital Growth Operating System™
                        </p>

                        {/* Social Links */}
                        <div className="flex gap-3 pt-2">
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
                                    className="group flex items-center justify-center w-8 h-8 rounded-full border border-white/5 hover:border-accent/30 bg-white/[0.02] transition-colors"
                                    aria-label={social.name}
                                >
                                    <span className="text-secondary/40 group-hover:text-accent text-[10px] uppercase tracking-wide font-medium">
                                        {social.name.slice(0, 2)}
                                    </span>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Infrastructure */}
                    <div>
                        <h4 className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-accent/50 mb-6">Infrastructure</h4>
                        <ul className="space-y-3">
                            {["Premium Websites", "SaaS Platforms", "WhatsApp Automation", "Lead Funnels"].map((item) => (
                                <li key={item}>
                                    <Link
                                        href={`/services/${item.toLowerCase().replace(/ /g, '-')}`}
                                        className="text-secondary/50 hover:text-primary transition-colors text-xs font-light tracking-wide"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Systems */}
                    <div>
                        <h4 className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-accent/50 mb-6">Systems</h4>
                        <ul className="space-y-3">
                            {[
                                { label: "About", href: "/about" },
                                { label: "Services", href: "/services" },
                                { label: "Work", href: "/work" },
                                { label: "Pricing", href: "/pricing" },
                            ].map((item) => (
                                <li key={item.label}>
                                    <Link
                                        href={item.href}
                                        className="text-secondary/50 hover:text-primary transition-colors text-xs font-light tracking-wide"
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact + Legal */}
                    <div>
                        <h4 className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-accent/50 mb-6">Contact</h4>
                        <div className="flex flex-col gap-4 text-xs text-secondary/50 font-light tracking-wide mb-8">
                            <a href="mailto:veloraa007@gmail.com" className="hover:text-primary transition-colors flex items-center gap-2">
                                <Mail className="w-3 h-3 text-accent/40" />
                                veloraa007@gmail.com
                            </a>
                            <a href="tel:+919901981097" className="hover:text-primary transition-colors flex items-center gap-2">
                                <Phone className="w-3 h-3 text-accent/40" />
                                +91 99019 81097
                            </a>
                            <div className="flex items-center gap-2">
                                <MapPin className="w-3 h-3 text-accent/40" />
                                Bangalore, India
                            </div>
                        </div>

                        <h4 className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-accent/50 mb-4">Legal</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/privacy-policy" className="text-secondary/40 hover:text-primary transition-colors text-xs font-light">
                                    Privacy & Data Security
                                </Link>
                            </li>
                            <li>
                                <Link href="/terms" className="text-secondary/40 hover:text-primary transition-colors text-xs font-light">
                                    Terms & Conditions
                                </Link>
                            </li>
                            <li>
                                <Link href="/security" className="text-secondary/40 hover:text-primary transition-colors text-xs font-light">
                                    Security & Compliance
                                </Link>
                            </li>
                            <li>
                                <Link href="/refund-policy" className="text-secondary/40 hover:text-primary transition-colors text-xs font-light">
                                    Refund & Cancellation
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-[10px] text-secondary/30 font-sans uppercase tracking-[0.2em] font-medium">
                        &copy; {currentYear} Veloraa — Digital Growth Operating System™
                    </p>
                    <p className="text-[9px] text-secondary/20 font-sans uppercase tracking-[0.15em]">
                        Engineered in Bangalore
                    </p>
                </div>
            </div>
        </footer>
    );
}
