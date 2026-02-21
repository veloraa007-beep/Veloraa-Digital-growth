"use client";

import { ArrowRight, Repeat2 } from "lucide-react";
import { useState } from "react";

interface CardFlipProps {
    title?: string;
    subtitle?: string;
    description?: string;
    features?: string[];
}

export default function CardFlip({
    title = "AI Infrastructure",
    subtitle = "Enterprise-grade automation systems",
    description = "We architect scalable AI systems, secure backend infrastructure, and automated growth engines for serious businesses.",
    features = [
        "Secure Architecture",
        "Automation Pipelines",
        "AI Integrations",
        "Performance Optimization"
    ],
}: CardFlipProps) {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <div
            className="relative h-[340px] w-full max-w-[300px] cursor-pointer [perspective:2000px]"
            onClick={() => setIsFlipped(!isFlipped)}
        >
            <div
                className={`relative h-full w-full transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] [transform-style:preserve-3d] ${isFlipped ? "[transform:rotateY(180deg)]" : ""
                    }`}
            >
                {/* FRONT */}
                <div className="absolute inset-0 rounded-2xl bg-[#1A1C1E] border border-[#2A2E30] p-6 flex flex-col justify-between [backface-visibility:hidden]">

                    <div className="flex justify-between items-start">
                        <div>
                            <h3 className="text-lg font-semibold tracking-wide text-[#EAE6DD]">
                                {title}
                            </h3>
                            <p className="text-sm mt-2 text-[#A8A39B]">
                                {subtitle}
                            </p>
                        </div>

                        <Repeat2 className="h-4 w-4 text-[#C2A35D]" />
                    </div>

                    <div className="mt-8">
                        <div className="h-[1px] w-full bg-[#2A2E30]" />
                        <p className="mt-4 text-sm text-[#C2A35D]">
                            Explore Details
                        </p>
                    </div>
                </div>

                {/* BACK */}
                <div className="absolute inset-0 rounded-2xl bg-[#1A1C1E] border border-[#2A2E30] p-6 flex flex-col justify-between [transform:rotateY(180deg)] [backface-visibility:hidden]">

                    <div>
                        <h3 className="text-lg font-semibold text-[#EAE6DD]">
                            {title}
                        </h3>

                        <p className="mt-3 text-sm text-[#A8A39B]">
                            {description}
                        </p>

                        <div className="mt-6 space-y-3">
                            {features.map((feature) => (
                                <div
                                    key={feature}
                                    className="flex items-center gap-2 text-sm text-[#EAE6DD]"
                                >
                                    <ArrowRight className="h-3 w-3 text-[#C2A35D]" />
                                    {feature}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-6 border-t border-[#2A2E30] pt-4 flex justify-between items-center group">
                        <span className="text-sm text-[#A8A39B] group-hover:text-[#C2A35D] transition-colors">
                            Start Project
                        </span>
                        <ArrowRight className="h-4 w-4 text-[#C2A35D] transition-transform group-hover:translate-x-1" />
                    </div>
                </div>
            </div>
        </div>
    );
}
