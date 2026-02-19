import ServiceTypeTemplate from "@/components/service-type-template";

export default function ConversionWebsitesPage() {
    return (
        <ServiceTypeTemplate
            category="Premium Websites"
            categoryLink="/services/premium-websites"
            title="Conversion Websites"
            description="Engineered for local businesses, clinics, and service providers. A focused, streamlined site structure designed with one goal: turning visitors into booked appointments."
            heroImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
            targetAudience={["Local Businesses", "Clinics", "Real Estate", "Gyms"]}
            features={[
                "High-Converting Landing Layouts: Focused on the call-to-action.",
                "Speed Optimization: Instant load times for mobile users.",
                "Direct Booking Integration: Calendly/Cal.com embed.",
                "WhatsApp Click-to-Chat: Instant communication.",
                "Local SEO Structure: Goole Maps & Schema optimization."
            ]}
            techStack={["Next.js", "Tailwind CSS", "Google Maps API", "WhatsApp API"]}
            priceRange="₹30,000 - ₹50,000"
            ctaTitle="Start Converting"
        />
    );
}
