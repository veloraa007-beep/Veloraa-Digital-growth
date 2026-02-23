"use client";

import { useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, RefreshCw } from "lucide-react";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error("Application error:", error);
    }, [error]);

    return (
        <main className="min-h-screen bg-[#0F1113] flex items-center justify-center px-6">
            <div className="text-center max-w-xl">
                <div className="w-16 h-16 mx-auto mb-8 rounded-full border border-red-500/20 bg-red-500/5 flex items-center justify-center">
                    <span className="text-red-400/60 text-2xl font-serif font-bold">!</span>
                </div>

                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-red-400/40 mb-4 block">
                    System Fault
                </span>

                <h1
                    className="font-serif font-semibold text-[#EAE6DD] tracking-tight leading-[1.1] mb-4"
                    style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}
                >
                    Something Went{" "}
                    <span className="italic text-[#EAE6DD]/40 font-light">
                        Wrong
                    </span>
                </h1>

                <p className="text-[#A8A39B]/60 font-light text-sm leading-relaxed mb-10 max-w-sm mx-auto">
                    An unexpected error occurred within our system. Our team has
                    been notified. Please try again or return to the homepage.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button
                        onClick={() => reset()}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-[#C2A35D] text-[#0F1113] text-xs font-semibold uppercase tracking-[0.15em] rounded-lg hover:bg-[#D4B56E] transition-colors cursor-pointer"
                    >
                        <RefreshCw className="w-3.5 h-3.5" />
                        Try Again
                    </button>
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 px-6 py-3 border border-[#2A2E30] text-[#A8A39B] text-xs font-medium uppercase tracking-[0.15em] rounded-lg hover:border-[#C2A35D]/30 hover:text-[#EAE6DD] transition-colors"
                    >
                        <ArrowLeft className="w-3.5 h-3.5" />
                        Return Home
                    </Link>
                </div>

                {error.digest && (
                    <p className="mt-8 text-[10px] text-[#A8A39B]/30 uppercase tracking-[0.15em]">
                        Error ID: {error.digest}
                    </p>
                )}
            </div>
        </main>
    );
}
