"use client";

import { motion } from "framer-motion";

export default function AboutFounderStory() {
    return (
        <section id="founder-story" className="py-24 px-5 md:px-12 max-w-4xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-3xl md:text-4xl font-serif text-white mb-10 text-center md:text-left">
                    The Philosophy Behind Velora
                </h2>

                <div className="space-y-8 text-lg text-white/70 font-light leading-relaxed">
                    <p>
                        Most people build websites. Very few understand how they break. <br />
                        Velora was founded by an 18-year-old entrepreneur and cybersecurity-focused engineering student who approaches digital systems differently — <span className="text-white font-medium">with an attacker’s mindset.</span>
                    </p>

                    <p>
                        In cybersecurity, the goal is simple: find vulnerabilities before someone else does. That same principle guides every system built at Velora.
                    </p>

                    <div className="bg-white/[0.03] border-l-2 border-accent p-6 my-8 rounded-r-lg">
                        <p className="mb-4 text-white/90">
                            When we engineer websites, SaaS platforms, automation systems, or backend workflows, we do more than design for speed and visuals. We analyze:
                        </p>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-secondary/80">
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-red-500/60"></span>
                                Attack surfaces
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-red-500/60"></span>
                                Data exposure risks
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-red-500/60"></span>
                                API vulnerabilities
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-red-500/60"></span>
                                Authentication flaws
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-red-500/60"></span>
                                Hosting weaknesses
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-red-500/60"></span>
                                Domain misconfigurations
                            </li>
                        </ul>
                    </div>

                    <p>
                        The internet is not safe by default, and small businesses are often the easiest targets. Velora integrates frontend, backend, automation, and security into one engineered system — not a set of patched solutions.
                    </p>
                    <p>
                        We choose hosting and domain configurations strategically. We structure authentication properly. We build automation responsibly. If higher security costs more, we explain why — <span className="text-white italic">security is protection, not an expense.</span>
                    </p>
                </div>

                <div className="mt-16 text-center pt-10 border-t border-white/5">
                    <p className="text-xl md:text-2xl font-serif text-white">
                        Built with growth in mind. Built with <span className="text-accent">security in mind.</span> Built to last.
                    </p>
                </div>
            </motion.div>
        </section>
    );
}
