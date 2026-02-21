"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function FloatingCTA() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show after scrolling past the hero (roughly 100vh)
            setVisible(window.scrollY > window.innerHeight);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="fixed bottom-8 right-8 z-50"
                >
                    <a
                        href="https://api.whatsapp.com/send/?phone=919901981097&text=Hi%20Velora%2C%20I%27d%20like%20to%20apply%20for%20a%20growth%20system.&type=phone_number&app_absent=0"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-2 px-5 py-3 bg-accent/90 hover:bg-accent text-black text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-300 shadow-[0_4px_20px_rgba(198,167,110,0.2)]"
                    >
                        <span>Apply for Growth System</span>
                        <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
