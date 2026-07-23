import React from "react";
import AgencyLanding from "@/components/work website/agency/AgencyLanding";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "AdSpace Agency Engine | Automation Marketing System | Velora Work Experience",
    description: "An automation-first digital marketing agency platform engineered for performance scaling and automated client acquisition.",
};

export default function AgencyWorkPage() {
    return <AgencyLanding />;
}
