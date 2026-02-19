import ServiceTypeTemplate from "@/components/service-type-template";

export default function NFCBusinessCardsPage() {
    return (
        <ServiceTypeTemplate
            category="Business Cards"
            categoryLink="/services/business-cards"
            title="NFC Smart Cards"
            description="A physical bridge to your digital identity. Tap your card on any smartphone to instantly share your contact details and portfolio."
            heroImage="https://images.unsplash.com/photo-1562564055-71e051d33c19?q=80&w=2670&auto=format&fit=crop"
            targetAudience={["Tech Founders", "Sales Professionals", "Networking Events"]}
            features={[
                "One-Tap Sharing: NFC technology built-in.",
                "Dynamic Profile: Update your info anytime.",
                "QR Code Backup: For older phones.",
                "Premium Materials: Metal, Wood, or PVC options.",
                "Analytics: Track how many times you've shared."
            ]}
            priceRange="₹2,500 - ₹5,000 per card"
            ctaTitle="Order Smart Card"
        />
    );
}
