"use client";

import React, { useState } from "react";
import MaisonNoirHero from "./MaisonNoirHero";
import { MAISON_NOIR_CONFIG } from "./MaisonNoirConfig";

export default function MaisonNoirLanding() {
    const { tastingMenus, privateDiningRooms, accolades, whatsappLink, phone, location } = MAISON_NOIR_CONFIG;
    const [selectedGuests, setSelectedGuests] = useState("2 Guests");
    const [selectedSession, setSelectedSession] = useState("7:30 PM (Dinner)");

    return (
        <div className="bg-[#080706] text-[#F7F5F0] min-h-screen font-sans selection:bg-[#D4AF37] selection:text-black">
            {/* Navigation Header for Standalone Experience */}
            <header className="fixed top-0 left-0 right-0 z-50 px-8 py-6 flex justify-between items-center bg-[#080706]/80 backdrop-blur-md border-b border-[#D4AF37]/15">
                <div className="flex items-center gap-4">
                    <span className="text-xl font-serif tracking-widest text-[#D4AF37] font-bold">MAISON NOIR</span>
                    <span className="hidden md:inline-block text-[10px] font-mono tracking-widest text-[#A39E93] border-l border-[#D4AF37]/20 pl-4">
                        INDIRANAGAR & MAYFAIR
                    </span>
                </div>
                <div className="flex items-center gap-6">
                    <a href="#tasting-menu" className="hidden sm:inline-block text-xs uppercase tracking-widest text-[#A39E93] hover:text-[#D4AF37] transition-colors">
                        Menu
                    </a>
                    <a href="#private-dining" className="hidden sm:inline-block text-xs uppercase tracking-widest text-[#A39E93] hover:text-[#D4AF37] transition-colors">
                        Private Dining
                    </a>
                    <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2.5 bg-[#D4AF37] text-black text-xs font-semibold uppercase tracking-widest rounded hover:bg-[#F3E5AB] transition-colors"
                    >
                        Reserve
                    </a>
                </div>
            </header>

            {/* 1. Hero Section */}
            <MaisonNoirHero />

            {/* 2. Philosophy & Culinary Story */}
            <section className="py-32 px-6 max-w-5xl mx-auto text-center border-b border-[#D4AF37]/15">
                <span className="text-xs font-mono tracking-[0.3em] uppercase text-[#D4AF37] block mb-4">
                    OUR PHILOSOPHY
                </span>
                <h2 className="text-3xl md:text-5xl font-serif font-light text-[#F7F5F0] mb-8 leading-tight">
                    "Gastronomy as a High Art Form of Sensory Memory."
                </h2>
                <p className="text-base md:text-lg text-[#A39E93] font-serif italic max-w-3xl mx-auto leading-relaxed mb-12">
                    Every dish at Maison Noir is prepared using heirloom organic botanicals harvested daily at sunrise, paired with dry-aged prime cuts cooked over Japanese Binchotan charcoal. We honor traditional French culinary precision merged with modern Scandinavian purity.
                </p>
                <div className="flex justify-center gap-8 text-xs font-mono uppercase tracking-widest text-[#D4AF37]/70">
                    {accolades.map((acc, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                            <span>✦</span>
                            <span>{acc}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* 3. Interactive Tasting Menus */}
            <section id="tasting-menu" className="py-32 px-6 max-w-6xl mx-auto border-b border-[#D4AF37]/15">
                <div className="text-center mb-20">
                    <span className="text-xs font-mono tracking-[0.3em] uppercase text-[#D4AF37] block mb-4">
                        TASTING NARRATIVE
                    </span>
                    <h2 className="text-3xl md:text-5xl font-serif font-light text-[#F7F5F0]">
                        Seasonal Tasting Menus
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {tastingMenus.map((menu, idx) => (
                        <div
                            key={idx}
                            className="p-10 rounded-xl bg-[#110E0C] border border-[#D4AF37]/20 hover:border-[#D4AF37]/60 transition-all duration-500 flex flex-col justify-between"
                        >
                            <div>
                                <div className="text-xs font-mono text-[#D4AF37] mb-2 tracking-widest">{menu.title}</div>
                                <div className="text-3xl font-serif font-light text-[#F7F5F0] mb-2">{menu.price}</div>
                                <div className="text-xs text-[#A39E93] italic mb-6">{menu.pairing}</div>
                                <p className="text-sm text-[#F7F5F0]/80 leading-relaxed mb-8">{menu.description}</p>

                                <div className="space-y-3 mb-8">
                                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#D4AF37]">Course Highlights</span>
                                    {menu.highlights.map((item, hIdx) => (
                                        <div key={hIdx} className="flex items-center gap-3 text-xs text-[#A39E93]">
                                            <span className="text-[#D4AF37]">✦</span>
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <a
                                href={whatsappLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full py-4 text-center border border-[#D4AF37] text-[#D4AF37] font-semibold text-xs uppercase tracking-widest hover:bg-[#D4AF37] hover:text-black transition-all rounded"
                            >
                                Inquire Availability via WhatsApp
                            </a>
                        </div>
                    ))}
                </div>
            </section>

            {/* 4. Private Dining Chambers */}
            <section id="private-dining" className="py-32 px-6 max-w-6xl mx-auto border-b border-[#D4AF37]/15">
                <div className="text-center mb-20">
                    <span className="text-xs font-mono tracking-[0.3em] uppercase text-[#D4AF37] block mb-4">
                        EXCLUSIVE EVENTS
                    </span>
                    <h2 className="text-3xl md:text-5xl font-serif font-light text-[#F7F5F0]">
                        Private Salons & Chef's Table
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {privateDiningRooms.map((room, idx) => (
                        <div key={idx} className="group rounded-xl overflow-hidden bg-[#110E0C] border border-[#D4AF37]/20">
                            <div className="relative h-72 overflow-hidden">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={room.image}
                                    alt={room.name}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"
                                />
                                <div className="absolute top-4 left-4 px-3 py-1 bg-[#080706]/90 backdrop-blur text-xs font-mono text-[#D4AF37] border border-[#D4AF37]/30">
                                    {room.capacity}
                                </div>
                            </div>

                            <div className="p-8">
                                <h3 className="text-2xl font-serif text-[#F7F5F0] mb-3">{room.name}</h3>
                                <p className="text-xs text-[#A39E93] leading-relaxed mb-6">{room.features}</p>
                                <a
                                    href={whatsappLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block text-xs uppercase tracking-widest text-[#D4AF37] hover:underline"
                                >
                                    Book Private Salon →
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* 5. Direct Reservation Concierge Widget */}
            <section className="py-32 px-6 max-w-4xl mx-auto text-center">
                <div className="p-12 rounded-2xl bg-[#110E0C] border border-[#D4AF37]/30 shadow-2xl relative overflow-hidden">
                    <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />

                    <span className="text-xs font-mono tracking-[0.3em] uppercase text-[#D4AF37] block mb-4">
                        INSTANT TABLE CONCIERGE
                    </span>
                    <h2 className="text-3xl md:text-5xl font-serif font-light text-[#F7F5F0] mb-8">
                        Reserve Your Experience
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md mx-auto mb-8 text-left">
                        <div>
                            <label className="text-[10px] font-mono uppercase tracking-widest text-[#A39E93] block mb-2">Party Size</label>
                            <select
                                value={selectedGuests}
                                onChange={(e) => setSelectedGuests(e.target.value)}
                                className="w-full px-4 py-3 bg-[#080706] border border-[#D4AF37]/30 text-xs text-[#F7F5F0] rounded focus:border-[#D4AF37] outline-none"
                            >
                                <option>2 Guests</option>
                                <option>4 Guests</option>
                                <option>6 Guests (Private Suite)</option>
                                <option>Full Restaurant Takeover</option>
                            </select>
                        </div>
                        <div>
                            <label className="text-[10px] font-mono uppercase tracking-widest text-[#A39E93] block mb-2">Preferred Session</label>
                            <select
                                value={selectedSession}
                                onChange={(e) => setSelectedSession(e.target.value)}
                                className="w-full px-4 py-3 bg-[#080706] border border-[#D4AF37]/30 text-xs text-[#F7F5F0] rounded focus:border-[#D4AF37] outline-none"
                            >
                                <option>7:30 PM (Dinner)</option>
                                <option>9:00 PM (Late Night Omakase)</option>
                                <option>1:00 PM (Weekend Lunch)</option>
                            </select>
                        </div>
                    </div>

                    <a
                        href={`https://api.whatsapp.com/message/CSJUP7QRLQFYL1?autoload=1&app_absent=0`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-10 py-5 bg-[#D4AF37] text-black font-bold uppercase tracking-[0.2em] text-xs rounded hover:bg-[#F3E5AB] transition-all shadow-xl shadow-[#D4AF37]/20"
                    >
                        Confirm Booking on WhatsApp ({phone})
                    </a>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-16 px-6 border-t border-[#D4AF37]/15 text-center text-xs text-[#A39E93]">
                <p className="font-serif text-[#D4AF37] text-lg mb-2">MAISON NOIR</p>
                <p className="mb-4 font-mono">{location}</p>
                <p className="text-[10px] uppercase tracking-widest text-[#A39E93]/60">
                    &copy; {new Date().getFullYear()} Maison Noir Hospitality Group. Engineered by VELORA Digital Systems.
                </p>
            </footer>
        </div>
    );
}
