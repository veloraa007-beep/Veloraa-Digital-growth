import React from "react";
import MaisonNoirLanding from "@/components/work website/restaurant/MaisonNoirLanding";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Maison Noir | Michelin Dining & Cellar Privé | Velora Work Experience",
    description: "An immersive flagship dining experience concept featuring 3-Michelin-star tasting narratives, private dining chambers, and WhatsApp table concierge.",
};

export default function RestaurantWorkPage() {
    return <MaisonNoirLanding />;
}
