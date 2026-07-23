import React from "react";
import PortfolioLanding from "@/components/work website/portfolio/PortfolioLanding";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Alex Graham Advisory | Executive Personal Authority | Velora Work Experience",
    description: "An executive personal authority and fractional C-suite advisory digital platform engineered for high-value consultants and founders.",
};

export default function PortfolioWorkPage() {
    return <PortfolioLanding />;
}
