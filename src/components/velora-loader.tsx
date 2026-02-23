"use client";

import { useEffect, useRef, useState } from "react";

export default function VeloraLoader() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const canvas = canvasRef.current!;
        const ctx = canvas.getContext("2d")!;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const letters = "VELORA0123456789";
        const fontSize = 18;
        const columns = Math.floor(canvas.width / fontSize);
        const drops: number[] = Array(columns).fill(1);

        function draw() {
            ctx.fillStyle = "rgba(15,17,19,0.12)";
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = "rgba(194,163,93,0.35)";
            ctx.font = `${fontSize}px monospace`;

            for (let i = 0; i < drops.length; i++) {
                const x = i * fontSize;
                const centerZone =
                    x > canvas.width * 0.3 && x < canvas.width * 0.7;

                if (!centerZone || Math.random() > 0.85) {
                    const text =
                        letters[Math.floor(Math.random() * letters.length)];
                    ctx.fillText(text, x, drops[i] * fontSize);
                }

                if (drops[i] * fontSize > canvas.height && Math.random() > 0.98) {
                    drops[i] = 0;
                }

                drops[i]++;
            }
        }

        const interval = setInterval(draw, 55);

        const timeout = setTimeout(() => {
            setVisible(false);
        }, 1800);

        return () => {
            clearInterval(interval);
            clearTimeout(timeout);
        };
    }, []);

    if (!visible) return null;

    return (
        <div className="fixed inset-0 bg-[#0F1113] flex items-center justify-center z-[9999]">
            <canvas
                ref={canvasRef}
                className="absolute inset-0 blur-[0.5px]"
            />

            <h1 className="relative text-5xl md:text-6xl font-serif text-[#C2A35D] tracking-[8px]">
                VELORA
            </h1>
        </div>
    );
}
