"use client";

import { motion } from "framer-motion";
import GlassCard from "@/components/ui/glass-card";

const industries = [
    {
        name: "Real Estate",
        problem: "Lost leads in WhatsApp chats & unprofessional property showcasing.",
        tools: "Portfolio Website + CRM Integration + Lead Filtering.",
        velora_solution: "A premium property showcase site that automatically filters leads and syncs them to your phone."
    },
    {
        name: "Restaurants & Caterers",
        problem: "Reliance on Zomato/Swiggy commissions & manual booking chaos.",
        tools: "QR Menu + Table Booking System + Review Automation.",
        velora_solution: "Own your customer data. Automated table reservations and direct ordering systems."
    },
    {
        name: "Motors & Dealers",
        problem: "Low trust factor & difficulty showcasing inventory details.",
        tools: "High-Res Gallery + Test Drive Booking + Specs Sheet.",
        velora_solution: "Cinematic inventory displays that build instant trust and allow one-click test drive bookings."
    },
    {
        name: "Clinics & Healthcare",
        problem: "Patients can't book easily & lack of authority online.",
        tools: "Appointment Scheduler + Doctor Profiles + Trust Signals.",
        velora_solution: "Clean, professional medical portals that automate scheduling and patient reminders."
    },
    {
        name: "Gyms & Coaches",
        problem: "Chasing payments & manual membership tracking.",
        tools: "Membership Funnel + Success Stories + Class Scheduler.",
        velora_solution: "High-energy landing pages that convert visitors into paid members automatically."
    },
    {
        name: "Local Services",
        problem: "Invisible in local search & manual quoting.",
        tools: "Local SEO + Quote Calculator + Google Review Bot.",
        velora_solution: "Dominate local maps and automate the quoting process to capture leads 24/7."
    }
];

export default function IndustriesPage() {
    return (
        <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
            <section className="text-center mb-24">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-6xl font-serif text-white mb-6"
                >
                    Industries We <span className="text-gold">Transform</span>
                </motion.h1>
                <p className="text-white/50 uppercase tracking-widest max-w-2xl mx-auto text-sm md:text-base">
                    We don&apos;t sell generic templates. We build specialized systems for your specific business model.
                </p>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {industries.map((ind, i) => (
                    <GlassCard key={i} className="p-8 group hover:bg-white/5 transition-all duration-500 border-white/5 hover:border-gold/30 flex flex-col h-full" hoverEffect={true}>
                        <div className="mb-6 flex justify-between items-start">
                            <h3 className="text-2xl font-serif text-white group-hover:text-gold transition-colors">{ind.name}</h3>
                            <div className="p-2 rounded-full bg-white/5 text-white/30 group-hover:text-gold group-hover:bg-gold/10 transition-colors">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                            </div>
                        </div>

                        <div className="space-y-6 flex-grow">
                            <div>
                                <span className="text-[10px] text-red-400/80 uppercase tracking-wider block mb-1 font-bold">The Problem</span>
                                <p className="text-white/60 text-sm leading-relaxed">{ind.problem}</p>
                            </div>

                            <div>
                                <span className="text-[10px] text-blue-400/80 uppercase tracking-wider block mb-1 font-bold">The Toolkit</span>
                                <p className="text-white/60 text-sm leading-relaxed">{ind.tools}</p>
                            </div>

                            <div className="pt-4 border-t border-white/10">
                                <span className="text-[10px] text-gold uppercase tracking-wider block mb-2 font-bold">Velora Solution</span>
                                <p className="text-white text-sm font-medium leading-relaxed">{ind.velora_solution}</p>
                            </div>
                        </div>

                        <div className="mt-8 pt-4">
                            <a
                                href="/contact"
                                className="flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-white/5 hover:bg-gold hover:text-black text-white text-xs uppercase tracking-wider font-bold transition-all border border-white/10 hover:border-gold"
                            >
                                Book for {ind.name.split(' ')[0]}
                            </a>
                        </div>
                    </GlassCard>
                ))}
            </div>
        </main>
    );
}
