import MagneticButton from "./ui/magnetic-button";

export default function StrategyCall() {
    return (
        <section className="w-full px-6 md:px-12 lg:px-24 py-44 md:py-56 relative overflow-hidden bg-[#0a0b0c] flex items-center justify-center text-center">
            {/* Extremely dark subtle background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/[0.03] blur-[200px] rounded-full pointer-events-none" />

            <div className="max-w-4xl mx-auto text-center relative z-10">
                {/* Headline */}
                <h2
                    className="font-serif text-primary leading-[1.1] tracking-tight mb-16"
                    style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}
                >
                    Ready for Structural<br />
                    <span className="italic text-primary/50 font-extralight">Excellence?</span>
                </h2>

                {/* CTA */}
                <a
                    href="https://api.whatsapp.com/send/?phone=919901981097&text=Hi%20Velora%2C%20I'd%20like%20to%20apply%20for%20Growth%20Architecture.&type=phone_number&app_absent=0"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <MagneticButton
                        className="px-16 py-6 bg-accent text-background font-bold tracking-[0.2em] text-sm hover:bg-primary transition-colors duration-500 uppercase"
                    >
                        Initiate Infrastructure Strategy
                    </MagneticButton>
                </a>
            </div>
        </section>
    );
}
