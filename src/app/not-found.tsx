import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
    return (
        <main className="min-h-screen bg-[#0F1113] flex items-center justify-center px-6">
            <div className="text-center max-w-xl">
                {/* Glitch number */}
                <div className="relative mb-8">
                    <span
                        className="font-serif font-bold text-[#EAE6DD]/[0.03] select-none"
                        style={{ fontSize: "clamp(8rem, 20vw, 16rem)" }}
                    >
                        404
                    </span>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span
                            className="font-serif font-semibold text-[#C2A35D]/20"
                            style={{ fontSize: "clamp(4rem, 10vw, 8rem)" }}
                        >
                            404
                        </span>
                    </div>
                </div>

                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#C2A35D]/50 mb-4 block">
                    System Error
                </span>

                <h1
                    className="font-serif font-semibold text-[#EAE6DD] tracking-tight leading-[1.1] mb-4"
                    style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}
                >
                    This Route Doesn&apos;t{" "}
                    <span className="italic text-[#EAE6DD]/40 font-light">
                        Exist
                    </span>
                </h1>

                <p className="text-[#A8A39B]/60 font-light text-sm leading-relaxed mb-10 max-w-sm mx-auto">
                    The page you&apos;re looking for has been moved, deleted, or
                    never existed in our system architecture.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-[#C2A35D] text-[#0F1113] text-xs font-semibold uppercase tracking-[0.15em] rounded-lg hover:bg-[#D4B56E] transition-colors"
                    >
                        <ArrowLeft className="w-3.5 h-3.5" />
                        Return Home
                    </Link>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 px-6 py-3 border border-[#2A2E30] text-[#A8A39B] text-xs font-medium uppercase tracking-[0.15em] rounded-lg hover:border-[#C2A35D]/30 hover:text-[#EAE6DD] transition-colors"
                    >
                        Contact Support
                    </Link>
                </div>
            </div>
        </main>
    );
}
