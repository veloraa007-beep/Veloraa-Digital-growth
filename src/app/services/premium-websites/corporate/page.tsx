import ServiceTypeTemplate from "@/components/service-type-template";

export default function CorporateWebsitesPage() {
    return (
        <ServiceTypeTemplate
            category="Premium Websites"
            categoryLink="/services/premium-websites"
            title="High-End Corporate Sites"
            description="Robust, scalable digital infrastructure for established firms. Communicating stability, scale, and global reach for B2B and industrial sectors."
            heroImage="https://images.unsplash.com/photo-1486406140926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop"
            targetAudience={["Manufacturing", "Infrastructure", "Fintech", "Consulting Firms"]}
            features={[
                "Multi-Page Architecture: Structured navigation for complex info.",
                "Investor Relations: Secure sections for reports and data.",
                "Career & HR Portals: Integration with recruiting tools.",
                "Enterprise Security: High-level data protection.",
                "Global Performance: CDNs for worldwide speed."
            ]}
            techStack={["Next.js", "PostgreSQL", "AWS", "Algolia"]}
            priceRange="₹80,000+"
            ctaTitle="Scale Your Presence"
        />
    );
}
