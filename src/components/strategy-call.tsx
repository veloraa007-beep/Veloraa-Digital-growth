import MagneticButton from "./ui/magnetic-button";

export default function StrategyCall() {
    return (
        <section className="w-full px-6 md:px-12 lg:px-24 py-28 md:py-44 relative overflow-hidden">
            {/* Subtle background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/5 blur-[150px] rounded-full pointer-events-none" />

            <div className="max-w-3xl mx-auto text-center relative z-10">
                {/* Label */}
                <span className="text-[10px] font-sans font-bold uppercase tracking-[0.25em] text-accent/70 mb-8 block">
                    Next Step
                </span>

                {/* Headline */}
                <h2
                    className="font-serif text-white leading-[1.1] tracking-tight mb-6"
                    style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
                >
                    Apply for Growth<br />
                    <span className="italic text-white/50 font-light">Architecture</span>
                </h2>

                {/* Subtext */}
                <p className="text-secondary/60 text-sm sm:text-base max-w-md mx-auto mb-14 leading-relaxed font-light">
                    We evaluate your business model before accepting projects.
                    This ensures every system we build is strategically aligned.
                </p>

                {/* CTA */}
                <a
                    href="https://api.whatsapp.com/send/?phone=919901981097&text=Hi%20Velora%2C%20I'd%20like%20to%20apply%20for%20Growth%20Architecture.&type=phone_number&app_absent=0"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <MagneticButton
                        className="px-14 py-5 bg-accent text-black font-bold uppercase tracking-[0.2em] text-xs hover:bg-white transition-colors duration-300"
                    >
                        Request Infrastructure Strategy
                    </MagneticButton>
                </a>

                {/* Trust Microcopy */}
                <p className="text-secondary/30 text-[10px] uppercase tracking-[0.2em] mt-10">
                    Response within 24 hours · No obligation · Confidential
                </p>
            </div>
        </section>
    );
}
