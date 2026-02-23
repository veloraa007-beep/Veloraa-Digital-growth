"use client";

import { useEffect } from "react";

/**
 * Applies soft frontend protection measures.
 * NOTE: This is purely deterrence and NOT real security.
 */
export default function FrontendProtection() {
    useEffect(() => {
        // 1. Disable right-click context menu
        const handleContextMenu = (e: MouseEvent) => {
            e.preventDefault();
        };

        // 2. Disable common developer shortcuts (F12, Ctrl+Shift+I, Ctrl+U, etc.)
        const handleKeyDown = (e: KeyboardEvent) => {
            if (
                (e.key === "F12") ||
                (e.ctrlKey && e.shiftKey && e.key === "I") || // Windows inspector
                (e.metaKey && e.altKey && e.key === "I") || // Mac inspector
                (e.ctrlKey && e.key === "u") || // Windows view source
                (e.metaKey && e.key === "U") || // Mac view source
                (e.ctrlKey && e.key === "s") || // Windows save
                (e.metaKey && e.key === "S") || // Mac save
                (e.ctrlKey && e.key === "p") || // Windows print
                (e.metaKey && e.key === "P")    // Mac print
            ) {
                e.preventDefault();
            }
        };

        // 3. Prevent dragging of entire document
        const handleDragStart = (e: DragEvent) => {
            e.preventDefault();
        };

        document.addEventListener("contextmenu", handleContextMenu);
        document.addEventListener("keydown", handleKeyDown);
        document.addEventListener("dragstart", handleDragStart);

        return () => {
            document.removeEventListener("contextmenu", handleContextMenu);
            document.removeEventListener("keydown", handleKeyDown);
            document.removeEventListener("dragstart", handleDragStart);
        };
    }, []);

    return null;
}
