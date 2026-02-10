"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CustomCursor() {
    const cursorRef = useRef<HTMLDivElement>(null);
    const followerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const cursor = cursorRef.current;
        const follower = followerRef.current;

        if (!cursor || !follower) return;

        const moveCursor = (e: MouseEvent) => {
            gsap.to(cursor, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.1,
                ease: "power2.out",
            });
            gsap.to(follower, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.5,
                ease: "power2.out",
            });
        };

        // Initial hide
        gsap.set([cursor, follower], { xPercent: -50, yPercent: -50, opacity: 0 });

        // Show on first move
        const onFirstMove = () => {
            gsap.to([cursor, follower], { opacity: 1, duration: 0.3 });
            window.removeEventListener("mousemove", onFirstMove);
        }

        window.addEventListener("mousemove", moveCursor);
        window.addEventListener("mousemove", onFirstMove);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            window.removeEventListener("mousemove", onFirstMove);
        };
    }, []);

    return (
        <>
            <div
                ref={cursorRef}
                className="fixed top-0 left-0 w-2 h-2 bg-gold rounded-full pointer-events-none z-50 mix-blend-difference"
            />
            <div
                ref={followerRef}
                className="fixed top-0 left-0 w-8 h-8 border border-gold/30 rounded-full pointer-events-none z-40 transition-transform duration-300 ease-out"
            />
        </>
    );
}
