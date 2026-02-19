import ServiceTypeTemplate from "@/components/service-type-template";

export default function PaperBusinessCardsPage() {
    return (
        <ServiceTypeTemplate
            category="Business Cards"
            categoryLink="/services/business-cards"
            title="Premium Paper Cards"
            description="The classic choice for discerning professionals. Our premium paper cards combine tactile elegance with visual mastery."
            heroImage="https://images.unsplash.com/photo-1634942537034-2531766767d1?q=80&w=2070&auto=format&fit=crop"
            targetAudience={["Executives", "Consultants", "Luxury Brands"]}
            features={[
                "High GSM Paper: 350-900GSM options.",
                "Foil Stamping: Gold, Silver, Copper accents.",
                "Embossing/Debossing: Tactile depth.",
                "Matte or Soft Touch Finish: Premium feel.",
                "Edge Painting: Colored card edges."
            ]}
            priceRange="₹3,000 - ₹10,000 per 100"
            ctaTitle="Design Your Card"
        />
    );
}
