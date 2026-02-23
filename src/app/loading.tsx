export default function Loading() {
    return (
        <main className="min-h-screen bg-[#0F1113] flex items-center justify-center">
            <div className="flex flex-col items-center gap-8">
                {/* Animated spinner */}
                <div className="relative w-12 h-12">
                    <div className="absolute inset-0 rounded-full border-2 border-[#2A2E30]" />
                    <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-[#C2A35D]/60 animate-spin" />
                </div>

                {/* Brand text */}
                <div className="text-center">
                    <span className="font-serif text-[#EAE6DD]/20 text-lg tracking-tight">
                        VELORA
                    </span>
                    <p className="text-[9px] text-[#A8A39B]/30 uppercase tracking-[0.3em] mt-1">
                        Loading Systems
                    </p>
                </div>
            </div>
        </main>
    );
}
