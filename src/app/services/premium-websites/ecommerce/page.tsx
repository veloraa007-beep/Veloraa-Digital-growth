import ServiceTypeTemplate from "@/components/service-type-template";

export default function EcommerceWebsitesPage() {
    return (
        <ServiceTypeTemplate
            category="Premium Websites"
            categoryLink="/services/premium-websites"
            title="E-commerce Websites"
            description="High-performance online stores for D2C brands. We build seamless shopping experiences with optimized checkout flows and inventory management."
            heroImage="https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?q=80&w=2574&auto=format&fit=crop"
            targetAudience={["D2C Brands", "Fashion", "Electronics", "Artisan Goods"]}
            features={[
                "Custom Product Pages: Showcasing products with high-end galleries.",
                "Cart & Checkout Optimization: Reducing abandonment rates.",
                "Payment Gateway Setup: Stripe, Razorpay, UPI integration.",
                "Inventory Management: Real-time stock tracking.",
                "Abandoned Cart Recovery: Automated email/SMS sequences."
            ]}
            techStack={["Next.js", "Shopify Headless", "Stripe", "Klaviyo"]}
            priceRange="₹60,000 - ₹1,20,000"
            ctaTitle="Launch Your Store"
        />
    );
}
