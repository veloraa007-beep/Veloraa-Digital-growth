import { Check, Minus } from "lucide-react";

const features = [
    {
        feature: "Security Level",
        starter: "SSL Basic",
        business: "Hardened",
        authority: "Enterprise",
        enterprise: "Audit-Grade",
    },
    {
        feature: "Automation Depth",
        starter: "WhatsApp Only",
        business: "CRM + Leads",
        authority: "Full Workflow",
        enterprise: "Custom Engine",
    },
    {
        feature: "Hosting Tier",
        starter: "Free-Tier",
        business: "Cloud + CDN",
        authority: "AWS / Edge",
        enterprise: "Multi-Region",
    },
    {
        feature: "Executive Kit",
        starter: false,
        business: false,
        authority: true,
        enterprise: true,
    },
    {
        feature: "Scalability",
        starter: "Basic",
        business: "Moderate",
        authority: "High",
        enterprise: "Unlimited",
    },
    {
        feature: "Dedicated Strategy",
        starter: false,
        business: false,
        authority: true,
        enterprise: true,
    },
];

function CellContent({ value }: { value: string | boolean }) {
    if (typeof value === "boolean") {
        return value
            ? <Check className="w-4 h-4 text-accent/60 mx-auto" />
            : <Minus className="w-4 h-4 text-white/10 mx-auto" />;
    }
    return <span className="text-secondary/60 text-xs font-light">{value}</span>;
}

export default function PricingComparison() {
    return (
        <section className="w-full px-6 md:px-12 lg:px-24 py-24 md:py-36">
            <div className="max-w-5xl mx-auto">
                {/* Header */}
                <div className="text-center mb-14">
                    <span className="text-[10px] font-sans font-bold uppercase tracking-[0.25em] text-accent/70 mb-6 block">
                        System Comparison
                    </span>
                    <h2
                        className="font-serif text-white leading-[1.1] tracking-tight"
                        style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.5rem)' }}
                    >
                        What&apos;s Inside Each <span className="italic text-white/40 font-light">System</span>
                    </h2>
                </div>

                {/* Comparison Table */}
                <div className="overflow-x-auto -mx-6 px-6">
                    <table className="w-full min-w-[600px] border-collapse">
                        <thead>
                            <tr className="border-b border-white/5">
                                <th className="text-left py-4 pr-4 text-[10px] uppercase tracking-[0.2em] text-secondary/30 font-medium w-[160px]">
                                    Feature
                                </th>
                                <th className="text-center py-4 px-3 text-[10px] uppercase tracking-[0.2em] text-secondary/30 font-medium">
                                    Starter
                                </th>
                                <th className="text-center py-4 px-3 text-[10px] uppercase tracking-[0.2em] text-secondary/30 font-medium">
                                    Business
                                </th>
                                <th className="text-center py-4 px-3 text-[10px] uppercase tracking-[0.2em] text-accent/50 font-bold bg-accent/[0.02]">
                                    Authority
                                </th>
                                <th className="text-center py-4 px-3 text-[10px] uppercase tracking-[0.2em] text-secondary/30 font-medium">
                                    Enterprise
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {features.map((row, i) => (
                                <tr key={i} className="border-b border-white/[0.03] hover:bg-white/[0.01] transition-colors">
                                    <td className="py-4 pr-4 text-white text-xs font-medium">
                                        {row.feature}
                                    </td>
                                    <td className="text-center py-4 px-3">
                                        <CellContent value={row.starter} />
                                    </td>
                                    <td className="text-center py-4 px-3">
                                        <CellContent value={row.business} />
                                    </td>
                                    <td className="text-center py-4 px-3 bg-accent/[0.02]">
                                        <CellContent value={row.authority} />
                                    </td>
                                    <td className="text-center py-4 px-3">
                                        <CellContent value={row.enterprise} />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}
