"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface BackgroundSlideshowProps {
    images: string[];
    duration?: number; // Duration in seconds
    overlayOpacity?: number; // Opacity of the black overlay (0-1)
}

export default function BackgroundSlideshow({ images, duration = 6, overlayOpacity = 0.8 }: BackgroundSlideshowProps) {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, duration * 1000);

        return () => clearInterval(timer);
    }, [images.length, duration]);

    return (
        <div className="fixed inset-0 -z-10 bg-black">
            <AnimatePresence mode="popLayout">
                <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                    className="absolute inset-0"
                >
                    <Image
                        src={images[index]}
                        alt="Background"
                        fill
                        className="object-cover opacity-30"
                        priority
                    />
                </motion.div>
            </AnimatePresence>

            {/* Gradient Overlay for Readability */}
            <div
                className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black"
                style={{ opacity: overlayOpacity }}
            />
        </div>
    );
}
