"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

function MatrixBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const letters = "VELORA0123456789";
        const fontSize = 16;
        const columns = Math.floor(canvas.width / fontSize);
        const drops: number[] = Array(columns).fill(1);

        function draw() {
            ctx!.fillStyle = "rgba(15,17,19,0.15)";
            ctx!.fillRect(0, 0, canvas!.width, canvas!.height);

            ctx!.fillStyle = "rgba(194,163,93,0.2)";
            ctx!.font = `${fontSize}px monospace`;

            for (let i = 0; i < drops.length; i++) {
                const x = i * fontSize;
                const centerZone = x > canvas!.width * 0.3 && x < canvas!.width * 0.7;

                if (!centerZone || Math.random() > 0.9) {
                    const text = letters[Math.floor(Math.random() * letters.length)];
                    ctx!.fillText(text, x, drops[i] * fontSize);
                }

                if (drops[i] * fontSize > canvas!.height && Math.random() > 0.97) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
        }

        const interval = setInterval(draw, 50);
        return () => clearInterval(interval);
    }, []);

    return <canvas ref={canvasRef} className="absolute inset-0 blur-[0.5px] opacity-60" />;
}

export default function Template({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1200);

        return () => clearTimeout(timer);
    }, [pathname]);

    if (loading) {
        return (
            <div className="fixed inset-0 bg-[#0F1113] flex items-center justify-center z-[9999]">
                <MatrixBackground />

                <div className="relative flex font-serif text-5xl md:text-6xl tracking-[0.5rem]">
                    {["V", "E", "L", "O", "R", "A"].map((letter, i) => (
                        <span
                            key={i}
                            className="inline-block animate-velora-reveal"
                            style={{
                                animationDelay: `${0.1 + i * 0.1}s`,
                                backgroundImage:
                                    "linear-gradient(90deg, #C6A85E, #E5C97A, #C6A85E)",
                                backgroundSize: "200% auto",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                            }}
                        >
                            {letter}
                        </span>
                    ))}
                </div>

                <style>{`
                    @keyframes veloraReveal {
                        from { opacity: 0; transform: translateY(40px); }
                        to { opacity: 1; transform: translateY(0); }
                    }
                    .animate-velora-reveal {
                        opacity: 0;
                        transform: translateY(40px);
                        animation: veloraReveal 0.8s forwards;
                    }
                `}</style>
            </div>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeInOut", duration: 0.75 }}
        >
            {children}
        </motion.div>
    );
}
