import ServiceTypeTemplate from "@/components/service-type-template";

export default function AuthorityWebsitesPage() {
    return (
        <ServiceTypeTemplate
            category="Premium Websites"
            categoryLink="/services/premium-websites"
            title="Authority Websites"
            description="Designed for industry leaders, agencies, and consultants. We build digital platforms that establish credibility, showcase expertise, and command high-ticket clients."
            heroImage="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2574&auto=format&fit=crop"
            targetAudience={["Consultants", "Agencies", "Speakers", "Coaches"]}
            features={[
                "Strategic Brand Positioning: Messaging that elevates your status.",
                "Case Study Architecture: Deep-dive project showcases.",
                "Lead Capture Integration: High-value lead magnets.",
                "Content Hub: Blog/Podcast integration for thought leadership.",
                "Social Proof Systems: Trust-building testimonials and logos."
            ]}
            techStack={["Next.js", "Sanity CMS", "Framer Motion", "Vercel"]}
            priceRange="₹45,000 - ₹80,000"
            ctaTitle="Build Your Authority"
        />
    );
}
