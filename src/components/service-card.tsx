"use client";

import Image from "next/image";
import Link from "next/link";

interface ServiceCardProps {
    title: string;
    description: string;
    number: string;
    tags: string[];
    image: string;
    href: string;
}

export default function ServiceCard({
    title,
    description,
    number,
    tags,
    image,
    href,
}: ServiceCardProps) {
    return (
        <Link href={href} className="group block">
            <div className="relative rounded-2xl overflow-hidden group border border-white/10">

                {/* Image Container - Aspect 4/3 */}
                <div className="relative aspect-[4/3] w-full">

                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover brightness-75 group-hover:brightness-90 transition duration-500"
                    />

                    {/* New Overlay System */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/20"></div>

                    {/* Content */}
                    <div className="absolute bottom-6 left-6 right-6">

                        <span className="text-xs tracking-widest text-white/40">
                            ({number})
                        </span>

                        {/* Standardized Typography */}
                        <h3 className="text-2xl md:text-3xl font-serif text-white mt-2">
                            {title}
                        </h3>

                        <p className="text-white/70 mt-2 text-sm md:text-base">
                            {description}
                        </p>

                        {/* Unified Tag Pills */}
                        <div className="flex flex-wrap gap-2 mt-4">
                            {tags.map((tag, index) => (
                                <span
                                    key={index}
                                    className="text-xs border border-white/20 px-3 py-1 rounded-full text-white/60"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Arrow Button */}
                    <div className="absolute top-6 right-6 w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 group-hover:bg-[#C6A76E] group-hover:text-black transition">
                        ↗
                    </div>

                </div>
            </div>
        </Link>
    );
}
