import { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps {
    children: ReactNode;
    className?: string;
    hoverEffect?: boolean;
}

export default function GlassCard({ children, className, hoverEffect = true }: GlassCardProps) {
    return (
        <motion.div
            className={cn(
                "glass-card rounded-2xl p-8 transition-colors duration-300 relative overflow-hidden group",
                hoverEffect && "hover:border-gold/30 hover:bg-white/5",
                className
            )}
            whileHover={hoverEffect ? { y: -5 } : undefined}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
            <div className="relative z-10">{children}</div>

            {/* Subtle Gold Glow on Hover */}
            <div
                className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            />
        </motion.div>
    );
}
