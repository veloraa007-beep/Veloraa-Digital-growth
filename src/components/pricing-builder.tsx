"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ArrowRight, Calculator } from "lucide-react";
import GlassCard from "./ui/glass-card";

const ADD_ONS = [
    { id: "page", name: "Extra Page", price: 1500 },
    { id: "logo", name: "Logo Design", price: 3000 },
    { id: "wa", name: "WhatsApp Automation", price: 4000 },
    { id: "seo", name: "SEO Setup", price: 3500 },
    { id: "portfolio", name: "Portfolio Section", price: 3000 },
    { id: "ecom", name: "E-commerce Setup", price: 8000 },
    { id: "booking", name: "Booking System", price: 4000 },
    { id: "analytics", name: "Analytics Dashboard", price: 2500 },
];

const BASE_PRICE = 6999;
const BASE_NAME = "Base System";

export default function PricingBuilder() {
    const [selectedAdds, setSelectedAdds] = useState<string[]>([]);

    // Toggle selection
    const toggleAddOn = (id: string) => {
        setSelectedAdds(prev =>
            prev.includes(id)
                ? prev.filter(item => item !== id)
                : [...prev, id]
        );
    };

    // Calculate total
    const totalAddOnPrice = selectedAdds.reduce((sum, id) => {
        const item = ADD_ONS.find(addon => addon.id === id);
        return sum + (item ? item.price : 0);
    }, 0);

    const grandTotal = BASE_PRICE + totalAddOnPrice;

    // Generate WhatsApp Link
    const generateLink = () => {
        const selectedNames = selectedAdds.map(id => ADD_ONS.find(a => a.id === id)?.name).join(", ");
        const message = `Hi Velora, I want to build a custom system.
Base: ${BASE_NAME} (₹${BASE_PRICE})
Add-ons: ${selectedNames || "None"}
Total Estimate: ₹${grandTotal}
`;
        return `https://api.whatsapp.com/send/?phone=919901981097&text=${encodeURIComponent(message)}&type=phone_number&app_absent=0`;
    };

    return (
        <section className="py-24 px-4 md:px-12 max-w-4xl mx-auto">
            <div className="text-center mb-16">
                <span className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-accent/80 border border-accent/20 px-4 py-2 rounded-full mb-6 inline-block backdrop-blur-sm bg-accent/[0.05]">
                    Custom Builder
                </span>
                <h2 className="text-4xl md:text-5xl font-serif text-primary tracking-tight mb-6">Build Your<span className="italic text-secondary/60 font-light ml-3">System</span></h2>
                <p className="text-secondary/60 font-light tracking-wide max-w-lg mx-auto leading-relaxed">
                    Select exactly what you need. We'll engineer the rest.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">

                {/* Menu / Options */}
                <div className="space-y-3">
                    <div className="p-4 border border-white/10 rounded-lg bg-white/[0.02] flex justify-between items-center mb-6">
                        <div>
                            <h4 className="text-primary font-serif">Base System</h4>
                            <p className="text-secondary/50 text-xs mt-1">Foundational Site + Hosting</p>
                        </div>
                        <div className="text-primary font-mono text-sm">₹{BASE_PRICE}</div>
                    </div>

                    <p className="text-xs uppercase tracking-[0.2em] text-secondary/40 font-bold mb-4 ml-1">Add Modules</p>

                    {ADD_ONS.map((addon) => (
                        <motion.div
                            key={addon.id}
                            className={`p-4 border rounded-lg cursor-pointer transition-all duration-300 flex justify-between items-center group ${selectedAdds.includes(addon.id)
                                    ? "bg-accent/[0.08] border-accent/40 shadow-[0_0_20px_rgba(191,163,106,0.05)]"
                                    : "bg-white/[0.02] border-white/5 hover:border-white/20"
                                }`}
                            onClick={() => toggleAddOn(addon.id)}
                            whileTap={{ scale: 0.98 }}
                        >
                            <div className="flex items-center gap-3">
                                <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${selectedAdds.includes(addon.id) ? "bg-accent border-accent" : "border-white/20 group-hover:border-white/40"
                                    }`}>
                                    {selectedAdds.includes(addon.id) && <Check className="w-3 h-3 text-black" />}
                                </div>
                                <span className={`text-sm ${selectedAdds.includes(addon.id) ? "text-primary" : "text-secondary/80"}`}>
                                    {addon.name}
                                </span>
                            </div>
                            <span className={`text-xs font-mono transition-colors ${selectedAdds.includes(addon.id) ? "text-accent" : "text-secondary/40"
                                }`}>
                                +₹{addon.price}
                            </span>
                        </motion.div>
                    ))}
                </div>

                {/* Summary / Calculator */}
                <div className="sticky top-24">
                    <GlassCard className="p-8 border-accent/20 bg-accent/[0.02]">
                        <div className="flex items-center gap-3 mb-6 text-accent/80">
                            <Calculator className="w-5 h-5" />
                            <span className="text-xs font-bold uppercase tracking-[0.2em]">Estimate</span>
                        </div>

                        <div className="space-y-4 mb-8">
                            <div className="flex justify-between text-sm text-secondary/60">
                                <span>Base System</span>
                                <span>₹{BASE_PRICE}</span>
                            </div>
                            <AnimatePresence>
                                {selectedAdds.map(id => {
                                    const item = ADD_ONS.find(a => a.id === id);
                                    if (!item) return null;
                                    return (
                                        <motion.div
                                            key={id}
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: "auto" }}
                                            exit={{ opacity: 0, height: 0 }}
                                            className="flex justify-between text-sm text-primary/80"
                                        >
                                            <span>{item.name}</span>
                                            <span>+₹{item.price}</span>
                                        </motion.div>
                                    );
                                })}
                            </AnimatePresence>

                            <div className="h-[1px] bg-white/10 my-4" />

                            <div className="flex justify-between items-end">
                                <span className="text-sm uppercase tracking-wider text-secondary">Total Investment</span>
                                <span className="text-3xl font-serif text-accent">₹{grandTotal}</span>
                            </div>
                        </div>

                        <a
                            href={generateLink()}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block w-full"
                        >
                            <button className="w-full py-4 bg-accent text-black font-bold uppercase tracking-[0.2em] text-xs hover:bg-white transition-colors duration-300 flex items-center justify-center gap-2">
                                <span>Get Quote on WhatsApp</span>
                                <ArrowRight className="w-4 h-4" />
                            </button>
                        </a>

                        <p className="text-center text-[10px] text-accent/40 mt-4 uppercase tracking-wider">
                            Instant quote • No obligations
                        </p>
                    </GlassCard>
                </div>

            </div>
        </section>
    );
}
