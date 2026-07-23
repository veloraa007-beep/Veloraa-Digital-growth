import React from "react";
import DrivingSchoolLanding from "@/components/work website/driving-school/DrivingSchoolLanding";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Driving School Growth System | Velora Industry Systems",
    description: "A complete digital growth system engineered for driving academies featuring WhatsApp automated bookings, DMV simulator, and conversion architecture.",
};

export default function DrivingSchoolPage() {
    return <DrivingSchoolLanding />;
}
