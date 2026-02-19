"use client";



export default function CaseStudy() {
    return (
        <section className="py-24 md:py-40 px-5 md:px-6 max-w-7xl mx-auto">
            <div className="text-center mb-16 md:mb-24">
                <h2 className="text-[var(--font-h2)] font-serif text-primary mb-6 font-light tracking-tight">Proof of Work</h2>
                <p className="text-secondary/70 uppercase tracking-[0.3em] text-xs font-bold">Real Results. No Hype.</p>
            </div>

            {/* CINEMATIC FULL-WIDTH LAYOUT */}
            <div
                className="relative bg-gradient-to-br from-white/[0.02] to-transparent rounded-2xl p-6 md:p-20 overflow-hidden"
                style={{
                    boxShadow: '0 20px 80px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.03)'
                }}
            >
                {/* Soft inner glow instead of border */}
                <div className="absolute inset-0 rounded-2xl" style={{
                    background: 'radial-gradient(ellipse at top left, rgba(214,194,168,0.03) 0%, transparent 50%)'
                }} />

                {/* Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10">

                    {/* Visual - Invitation Mockup - Floating with soft shadow */}
                    <div className="relative aspect-[9/16] md:aspect-square w-full max-w-md mx-auto rounded-2xl overflow-hidden"
                        style={{
                            boxShadow: '0 30px 80px rgba(0, 0, 0, 0.5), 0 0 1px rgba(214,194,168,0.1)',
                            transform: 'scale(0.95)',
                            transition: 'transform 0.8s cubic-bezier(0.2, 1, 0.2, 1)'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(0.95)'}
                    >
                        <div className="absolute inset-0 bg-[#050505] flex flex-col items-center justify-center p-8">
                            {/* Abstract Mobile Screen */}
                            <div className="w-full max-w-[280px] aspect-[9/18] border border-white/5 rounded-[2rem] bg-black relative overflow-hidden shadow-[0_0_50px_rgba(214,194,168,0.08)]">
                                <div className="absolute top-0 left-0 right-0 h-6 bg-white/5 z-20"></div> {/* Notch */}
                                <div className="w-full h-full bg-gradient-to-br from-neutral-900 to-black p-6 flex flex-col items-center text-center">
                                    <div className="mt-8 text-accent font-serif text-2xl">Invited</div>
                                    <div className="w-16 h-[1px] bg-accent/50 my-4"></div>
                                    <div className="text-white/80 text-sm mb-8 font-light">Join us for an evening of excellence.</div>
                                    <div className="w-24 h-24 bg-white rounded-lg mb-8 p-1">
                                        <div className="w-full h-full bg-black flex items-center justify-center text-[8px] text-white/30">QR CODE</div>
                                    </div>
                                    <div className="w-full py-2 bg-accent text-black text-[10px] font-bold uppercase rounded">RSVP Now</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Content - Problem/Solution with DRAMATIC HIERARCHY */}
                    <div>
                        <div className="flex items-center gap-4 mb-8">
                            <span className="px-4 py-1.5 bg-accent/5 text-accent text-[10px] font-bold uppercase tracking-[0.2em] rounded-full border border-accent/10">Client Success</span>
                            <span className="text-white/20 text-xs uppercase tracking-wider font-light">Local Event Integration</span>
                        </div>

                        <h3 className="text-4xl md:text-5xl font-serif text-primary mb-12 font-light leading-tight tracking-tight">Digital Invitation System</h3>

                        <div className="space-y-12 relative">
                            {/* Vertical Line - More subtle */}
                            <div className="absolute left-[7px] top-2 bottom-2 w-[1px] bg-gradient-to-b from-white/5 via-white/10 to-white/5"></div>

                            {/* THE PROBLEM - Thin font */}
                            <div className="pl-12 relative">
                                <div className="absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full bg-red-500/10 border border-red-500/30"></div>
                                <h4 className="text-primary/80 font-serif italic mb-3 text-lg tracking-wide opacity-80">The Problem</h4>
                                <p className="text-secondary/70 text-sm leading-loose font-light tracking-wide">
                                    Client needed a professional, digital invite for a high-stakes local event. Paper was too slow; static images felt cheap. They needed seamless WhatsApp sharing and quick delivery.
                                </p>
                            </div>

                            {/* THE SOLUTION - Medium weight */}
                            <div className="pl-12 relative">
                                <div className="absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full bg-accent/10 border border-accent/30"></div>
                                <h4 className="text-primary font-serif font-medium mb-3 text-lg tracking-wide">The Velora Solution</h4>
                                <p className="text-secondary/80 text-sm leading-loose font-light tracking-wide">
                                    We engineered a mobile-first &quot;Micro-Site&quot; invitation with integrated Maps location, one-tap RSVP, and optimized metadata for beautiful WhatsApp link previews.
                                </p>
                            </div>

                            {/* THE RESULT - Bold beige (powerful) */}
                            <div className="pl-12 relative">
                                <div className="absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full bg-accent/20 border border-accent/60 shadow-[0_0_15px_rgba(214,194,168,0.2)]"></div>
                                <h4 className="text-accent font-serif font-bold mb-3 text-xl tracking-tight">The Result</h4>
                                <p className="text-primary/90 text-sm leading-loose font-medium tracking-wide">
                                    Delivered in 48 hours. Zero friction for guests. Client reported a higher RSVP rate than previous manual methods.
                                </p>
                            </div>
                        </div>

                        <div className="mt-16 pt-10 border-t border-white/5">
                            <a
                                href="/contact"
                                className="inline-flex items-center gap-3 text-accent hover:text-white transition-all duration-500 text-sm font-bold uppercase tracking-[0.15em] group"
                                style={{
                                    textShadow: '0 0 20px rgba(214,194,168,0.3)'
                                }}
                            >
                                Want a similar system?
                                <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
