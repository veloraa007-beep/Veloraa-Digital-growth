import ServiceTypeTemplate from "@/components/service-type-template";

export default function PortfolioWebsitesPage() {
    return (
        <ServiceTypeTemplate
            category="Premium Websites"
            categoryLink="/services/premium-websites"
            title="Portfolio & Personal Brand"
            description="Minimalist, galley-focused sites for creatives and founders. Let your work speak for itself with a digital canvas that is as refined as your craft."
            heroImage="https://images.unsplash.com/photo-1545665277-5937bf04499c?q=80&w=2546&auto=format&fit=crop"
            targetAudience={["Designers", "Architects", "Photographers", "Founders"]}
            features={[
                "Immersive Galleries: Lightbox and masonry layouts.",
                "Minimalist Aesthetics: Focus on the work, not the UI.",
                "Fast Asset Loading: Optimized for high-res images/video.",
                "About & Biography: Storytelling-focused layout.",
                "Contact & Inquiry: Simple, elegant forms."
            ]}
            techStack={["Next.js", "Framer Motion", "Cloudinary", "Sanity CMS"]}
            priceRange="₹25,000 - ₹45,000"
            ctaTitle="Showcase Your Work"
        />
    );
}
