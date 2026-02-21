"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
    return (
        <motion.a
            href="https://api.whatsapp.com/send/?phone=919901981097&text=Hi%20Velora%2C%20I%27d%20like%20to%20discuss%20a%20project.&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1.5, type: "spring", stiffness: 200 }}
            className="
                fixed bottom-6 right-6 z-50
                w-14 h-14
                rounded-full
                bg-accent
                flex items-center justify-center
                shadow-[0_4px_15px_rgba(198,167,110,0.2)]
                hover:shadow-[0_0_25px_rgba(198,167,110,0.4)]
                transition-shadow duration-300
                group
            "
            aria-label="Chat with Veloraa"
        >
            <MessageCircle className="w-6 h-6 text-black" />

            {/* Hover Label */}
            <div className="
                absolute right-full mr-4
                bg-black/80 border border-white/10
                px-3 py-1.5 rounded
                text-[10px] text-white uppercase tracking-[0.15em] font-medium
                opacity-0 group-hover:opacity-100
                transition-opacity duration-300
                whitespace-nowrap
                hidden md:block
                pointer-events-none
            ">
                Chat with Veloraa
            </div>
        </motion.a>
    );
}
