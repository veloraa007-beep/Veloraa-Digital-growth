import React from "react";
import CoffeeLanding from "@/components/work website/coffee/CoffeeLanding";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Granum Coffee Roasters | Specialty Coffee System | Velora Work Experience",
    description: "An artisan coffee brand and subscription system engineered for specialty roasters and single-origin coffee lovers.",
};

export default function CoffeeWorkPage() {
    return <CoffeeLanding />;
}
