"use client";

import GlassCard from "@/components/ui/glass-card";

interface ServiceCardProps {
    title: string;
    description: string;
    icon: string;
    className?: string; // Allow passing className for animations/styling
}

export default function ServiceCard({ title, description, icon, className }: ServiceCardProps) {
    return (
        <div className={className}>
            <GlassCard className="h-full flex flex-col justify-between min-h-[300px]">
                <div className="text-gold text-4xl mb-6">{icon}</div>
                <div>
                    <h3 className="text-2xl font-serif text-white mb-4">
                        {title}
                    </h3>
                    <p className="text-white/60 leading-relaxed">
                        {description}
                    </p>
                </div>
            </GlassCard>
        </div>
    );
}
