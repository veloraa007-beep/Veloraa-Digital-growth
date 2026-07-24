import MagneticButton from "./ui/magnetic-button";
import { SITE_CONFIG } from "@/lib/constants";

export default function StrategyCall() {
    return (
        <section className="py-24 px-6 relative bg-background border-t border-white/5">
            <div className="max-w-[800px] mx-auto text-center">
                <span className="text-xs uppercase tracking-[0.2em] text-accent font-medium mb-4 block">
                    Direct Access
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl text-primary font-light mb-6">
                    Book a High-Growth Strategy Session
                </h2>
                <p className="text-secondary/70 text-sm sm:text-base font-light mb-8 max-w-[600px] mx-auto">
                    Speak directly with our senior system architects to map out your digital infrastructure, custom funnels, and automated pipeline.
                </p>
                <a
                    href={SITE_CONFIG.whatsappUrl}
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
