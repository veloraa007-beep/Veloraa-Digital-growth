"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Work", href: "/work" },
    { name: "Pricing", href: "/pricing" },
];

export default function Header() {
    const { scrollY } = useScroll();
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        setScrolled(latest > 20);
    });

    // Close mobile menu on route change
    useEffect(() => {
        setMobileMenuOpen(false);
    }, [pathname]);

    return (
        <>
            <motion.header
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-700",
                    scrolled
                        ? "bg-[#0F1113]/80 backdrop-blur-xl border-b border-white/5 py-4 md:py-5"
                        : "bg-transparent py-8 md:py-12"
                )}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
                {/* Subtle Radial Glow behind header for depth */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(194,163,93,0.06)_0%,transparent_60%)] pointer-events-none -z-10" />

                <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
                    {/* LOGO - Luxury Authority */}
                    <Link
                        href="/"
                        className="z-50 relative text-[20px] font-serif font-light tracking-[0.35em] text-neutral-300 transition-all duration-300 hover:text-[#C6A75E]"
                        onClick={(e) => {
                            if (pathname === "/") {
                                e.preventDefault();
                                window.scrollTo({ top: 0, behavior: "smooth" });
                            }
                            setMobileMenuOpen(false);
                        }}
                    >
                        VELORA
                    </Link>

                    {/* DESKTOP NAV - REFINED HIERARCHY */}
                    <nav className="hidden md:flex items-center gap-10 tracking-[0.2em] text-[15px] uppercase">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={cn(
                                        "relative text-neutral-300 font-medium font-sans transition-all duration-300 ease-in-out",
                                        "hover:text-[#C6A75E] hover:tracking-[0.25em]",
                                        "after:absolute after:left-0 after:-bottom-2 after:h-[1px] after:w-0 after:bg-[#C6A75E] after:transition-all after:duration-300 hover:after:w-full",
                                        isActive ? "text-[#C6A75E] after:w-full" : ""
                                    )}
                                >
                                    {link.name}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* CTA & MOBILE TOGGLE */}
                    <div className="flex items-center gap-6">
                        <motion.a
                            href="https://api.whatsapp.com/send/?phone=919901981097&text&type=phone_number&app_absent=0"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className={cn(
                                "hidden md:block border border-[#C6A75E]/40 px-6 py-2 text-sm tracking-[0.2em] uppercase font-bold font-sans text-neutral-200 transition-all duration-300",
                                "bg-white/[0.03] backdrop-blur-md hover:bg-[#C6A75E] hover:text-black"
                            )}
                        >
                            Book a Call
                        </motion.a>

                        {/* MOBILE HAMBURGER - Larger Touch Target */}
                        <button
                            className="md:hidden z-50 flex flex-col gap-1.5 p-3 -mr-3 group"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            <motion.span
                                animate={mobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                                className="w-6 h-[1px] bg-white block transition-colors group-hover:bg-accent"
                            />
                            <motion.span
                                animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                                className="w-4 h-[1px] bg-white block ml-auto transition-colors group-hover:bg-accent"
                            />
                            <motion.span
                                animate={mobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                                className="w-6 h-[1px] bg-white block transition-colors group-hover:bg-accent"
                            />
                        </button>
                    </div>
                </div>
            </motion.header>

            {/* MOBILE MENU OVERLAY - LUXURY DISCLOSURE */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, transition: { delay: 0.2 } }}
                        className="fixed inset-0 z-40 bg-[#0A0A0E] md:hidden overflow-y-auto"
                    >
                        <div className="min-h-full flex flex-col items-center justify-center py-24 px-6 relative">
                            {/* Background Grain */}
                            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay fixed" />

                            <nav className="flex flex-col items-center gap-8 relative z-10 w-full px-4">
                                {navLinks.map((link, i) => (
                                    <motion.div
                                        key={link.name}
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        transition={{ delay: 0.1 + i * 0.05, ease: [0.22, 1, 0.36, 1], duration: 0.8 }}
                                        className="w-full text-center border-b border-white/[0.03] pb-6 last:border-none"
                                    >
                                        <Link
                                            href={link.href}
                                            className={cn(
                                                "text-4xl font-serif transition-all duration-500 block",
                                                pathname === link.href ? "text-accent italic" : "text-white/60 hover:text-white"
                                            )}
                                            onClick={() => setMobileMenuOpen(false)}
                                        >
                                            {link.name}
                                        </Link>
                                    </motion.div>
                                ))}
                            </nav>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ delay: 0.5, ease: "easeOut" }}
                                className="mt-12 relative z-10 w-full px-4 max-w-sm"
                            >
                                <a
                                    href="https://api.whatsapp.com/send/?phone=919901981097&text&type=phone_number&app_absent=0"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="border border-accent/30 text-accent px-10 py-5 text-xs font-bold uppercase tracking-[0.2em] hover:bg-accent hover:text-black transition-all duration-500 w-full block text-center"
                                >
                                    Initiate Consultation
                                </a>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
