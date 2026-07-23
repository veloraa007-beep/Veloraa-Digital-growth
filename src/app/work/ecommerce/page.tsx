import React from "react";
import AtelierLanding from "@/components/work website/ecommerce/AtelierLanding";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Atelier Vélora | Luxury Fashion & E-Commerce System | Velora Work Experience",
    description: "An architectural luxury e-commerce flagship digital product featuring capsule lookbooks, limited edition numbered drops, and VIP WhatsApp concierge.",
};

export default function EcommerceWorkPage() {
    return <AtelierLanding />;
}
