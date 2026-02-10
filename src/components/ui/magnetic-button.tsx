"use client";

import { useRef, useState, ReactNode, CSSProperties } from "react";
import { motion } from "framer-motion";

interface MagneticButtonProps {
    children: ReactNode;
    className?: string;
    onClick?: () => void;
    style?: CSSProperties;
    onMouseEnter?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    onMouseLeave?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function MagneticButton({
    children,
    className = "",
    onClick,
    style,
    onMouseEnter,
    onMouseLeave
}: MagneticButtonProps) {
    const ref = useRef<HTMLButtonElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouse = (e: React.MouseEvent<HTMLButtonElement>) => {
        const { clientX, clientY } = e;
        const { height, width, left, top } = ref.current!.getBoundingClientRect();
        const middleX = clientX - (left + width / 2);
        const middleY = clientY - (top + height / 2);
        setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
    };

    const reset = (e: React.MouseEvent<HTMLButtonElement>) => {
        setPosition({ x: 0, y: 0 });
        onMouseLeave?.(e);
    };

    const handleEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
        onMouseEnter?.(e);
    };

    return (
        <motion.button
            ref={ref}
            className={`${className}`}
            style={style}
            animate={{ x: position.x, y: position.y }}
            transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
            onMouseMove={handleMouse}
            onMouseEnter={handleEnter}
            onMouseLeave={reset}
            onClick={onClick}
        >
            {children}
        </motion.button>
    );
}
