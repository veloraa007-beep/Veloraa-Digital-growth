import ServicePageTemplate from "@/components/service-page-template";

export default function SaaSPlatformsPage() {
    return (
        <ServicePageTemplate
            title="SaaS Platforms"
            description="MVP SaaS & Web Applications. Scalable dashboards, auth systems, and payment integration."
            heroImage="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
            offerings={[
                "Custom SaaS Dashboard UI: Intuitive and powerful admin interfaces.",
                "User Authentication Systems: Secure login and role-based access control.",
                "Subscription Model Integration: Stripe/Razorpay recurring billing setup.",
                "MVP Development: Rapid deployment of core product features.",
                "Scalable Architecture Planning: Built to handle growth from day one."
            ]}
            techStack={["Next.js", "Supabase", "PostgreSQL", "Stripe", "Auth.js"]}
            process={[
                {
                    number: "01",
                    title: "Product Roadmap",
                    description: "Defining the core feature set (MVP) to solve the primary user problem efficiently.",
                },
                {
                    number: "02",
                    title: "Architecture Design",
                    description: "Designing the database schema and API structure for scalability and security.",
                },
                {
                    number: "03",
                    title: "Agile Development",
                    description: "Iterative build process with regular feedback loops to ensure product-market fit.",
                },
                {
                    number: "04",
                    title: "Deployment & Scale",
                    description: "Launching on robust infrastructure with monitoring and CI/CD pipelines.",
                },
            ]}
            ctaTitle="Ready to Build Your SaaS?"
        />
    );
}
