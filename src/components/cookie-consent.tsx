"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Shield, X } from "lucide-react";

export default function CookieConsent() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem("velora-cookie-consent");
        if (!consent) {
            // Delay showing banner for better UX
            const timer = setTimeout(() => setVisible(true), 2000);
            return () => clearTimeout(timer);
        }
    }, []);

    const accept = () => {
        localStorage.setItem("velora-cookie-consent", "accepted");
        setVisible(false);
    };

    const decline = () => {
        localStorage.setItem("velora-cookie-consent", "declined");
        setVisible(false);
    };

    if (!visible) return null;

    return (
        <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:bottom-6 md:max-w-sm z-[9999] animate-in slide-in-from-bottom-4 duration-500">
            <div className="bg-[#1A1C1E] border border-[#2A2E30] rounded-2xl p-5 shadow-2xl shadow-black/40">
                {/* Close */}
                <button
                    onClick={decline}
                    className="absolute top-3 right-3 text-[#A8A39B]/30 hover:text-[#A8A39B] transition-colors cursor-pointer"
                    aria-label="Close cookie banner"
                >
                    <X className="w-3.5 h-3.5" />
                </button>

                <div className="flex items-start gap-3 mb-4">
                    <Shield className="w-4 h-4 text-[#C2A35D]/60 mt-0.5 shrink-0" />
                    <div>
                        <p className="text-xs font-medium text-[#EAE6DD] mb-1">
                            Privacy & Cookies
                        </p>
                        <p className="text-[11px] text-[#A8A39B]/60 font-light leading-relaxed">
                            We use essential cookies to ensure our site works properly.
                            No tracking, no ads, no third-party analytics.{" "}
                            <Link
                                href="/privacy-policy"
                                className="text-[#C2A35D]/60 hover:text-[#C2A35D] transition-colors underline underline-offset-2"
                            >
                                Privacy Policy
                            </Link>
                        </p>
                    </div>
                </div>

                <div className="flex gap-2">
                    <button
                        onClick={accept}
                        className="flex-1 px-4 py-2 bg-[#C2A35D] text-[#0F1113] text-[10px] font-bold uppercase tracking-[0.15em] rounded-lg hover:bg-[#D4B56E] transition-colors cursor-pointer"
                    >
                        Accept
                    </button>
                    <button
                        onClick={decline}
                        className="px-4 py-2 border border-[#2A2E30] text-[#A8A39B]/60 text-[10px] font-medium uppercase tracking-[0.15em] rounded-lg hover:border-[#C2A35D]/20 hover:text-[#A8A39B] transition-colors cursor-pointer"
                    >
                        Decline
                    </button>
                </div>
            </div>
        </div>
    );
}
