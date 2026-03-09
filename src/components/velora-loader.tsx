"use client";

import { useEffect, useRef, useState } from "react";

export default function VeloraLoader() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (typeof window === "undefined") return;

        const alreadyLoaded = sessionStorage.getItem("velora-loaded");

        if (alreadyLoaded) {
            setVisible(false);
            return;
        }

        setVisible(true);
        sessionStorage.setItem("velora-loaded", "true");
    }, []);

    useEffect(() => {
        if (!visible) return;

        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const letters = "VELORA0123456789";
        const fontSize = 18;
        const columns = Math.floor(canvas.width / fontSize);
        const drops: number[] = Array(columns).fill(1);

        const draw = () => {
            ctx.fillStyle = "rgba(15,17,19,0.15)";
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = "rgba(194,163,93,0.35)";
            ctx.font = `${fontSize}px monospace`;

            for (let i = 0; i < drops.length; i++) {
                const text = letters[Math.floor(Math.random() * letters.length)];
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);

                if (drops[i] * fontSize > canvas.height && Math.random() > 0.98) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
        };

        const interval = setInterval(draw, 50);

        const timeout = setTimeout(() => {
            setVisible(false);
            clearInterval(interval);
        }, 1600);

        return () => {
            clearInterval(interval);
            clearTimeout(timeout);
        };
    }, [visible]);

    if (!visible) return null;

    return (
        <div className="fixed inset-0 bg-[#0F1113] flex items-center justify-center z-[9999]">
            <canvas
                ref={canvasRef}
                className="absolute inset-0 opacity-40"
            />

            <h1 className="relative text-5xl md:text-6xl font-serif text-[#C2A35D] tracking-[8px]">
                VELORA
            </h1>
        </div>
    );
}
