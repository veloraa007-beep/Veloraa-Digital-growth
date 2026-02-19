"use client";

import MagneticButton from "./ui/magnetic-button";

export default function FounderSection() {
    return (
        <section className="py-32 px-6 max-w-7xl mx-auto">
            <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
                <div className="grid grid-cols-1 md:grid-cols-2">

                    {/* Visual Side - Abstract/Dark */}
                    <div className="relative min-h-[500px] bg-neutral-900 group overflow-hidden flex flex-col items-center justify-center p-12 text-center">
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 z-10" />

                        <h3 className="text-3xl font-serif text-white mb-6 relative z-20">&quot;The Gap&quot;</h3>
                        <p className="text-white/60 relative z-20 max-w-sm mx-auto leading-relaxed">
                            Most businesses are stuck between cheap, broken templates and overpriced agencies that move too slow. <br /><br />
                            <span className="text-gold">Velora exists to close that gap.</span>
                        </p>


                        {/* Decorative Elements */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gold/10 rounded-full blur-3xl -z-0" />
                    </div>

                    {/* Content Side */}
                    <div className="p-12 md:p-20 flex flex-col justify-center bg-black/40 backdrop-blur-sm">
                        <div className="mb-8">
                            <span className="text-gold uppercase tracking-[0.2em] text-xs font-bold block mb-2">The Vision</span>
                            <h2 className="text-4xl md:text-5xl font-serif text-white mb-4">Authority & Scale</h2>
                            <p className="text-xl text-white/50 font-light">
                                It&apos;s not just a website. It&apos;s a digital ecosystem.
                            </p>
                        </div>

                        <div className="space-y-8 text-white/70 leading-relaxed mb-12">
                            <div>
                                <h4 className="text-white font-serif text-lg mb-2">Why Velora Exists</h4>
                                <p className="text-sm">
                                    To replace &quot;online brochures&quot; with high-performance growth engines. We believe that precision, automation, and speed are the new standards of luxury.
                                </p>
                            </div>

                            <div>
                                <h4 className="text-white font-serif text-lg mb-2">Our Principles</h4>
                                <ul className="grid grid-cols-2 gap-4 text-sm">
                                    <li className="flex items-center gap-2"><span className="w-1 h-1 bg-gold rounded-full" /> Precision Design</li>
                                    <li className="flex items-center gap-2"><span className="w-1 h-1 bg-gold rounded-full" /> Ruthless Automation</li>
                                    <li className="flex items-center gap-2"><span className="w-1 h-1 bg-gold rounded-full" /> Performance First</li>
                                    <li className="flex items-center gap-2"><span className="w-1 h-1 bg-gold rounded-full" /> Long-term Growth</li>
                                </ul>
                            </div>
                        </div>

                        <MagneticButton className="self-start px-8 py-4 bg-white text-black rounded-full font-bold uppercase tracking-wider hover:bg-gold transition-colors text-sm shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                            Book a Strategy Call
                        </MagneticButton>
                    </div>

                </div>
            </div>
        </section>
    );
}
