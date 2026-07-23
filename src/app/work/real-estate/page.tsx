import React from "react";
import RealEstateLanding from "@/components/work website/real-estate/RealEstateLanding";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Aura Luxury Residences | High-Value Real Estate System | Velora Work Experience",
    description: "An ultra-luxury architectural portfolio and high-value asset digital system engineered for private estate buyers and investors.",
};

export default function RealEstateWorkPage() {
    return <RealEstateLanding />;
}
