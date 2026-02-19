import ServicePageTemplate from "@/components/service-page-template";

export default function SEOOptimizationPage() {
    return (
        <ServicePageTemplate
            title="SEO Optimization"
            description="We engineer search visibility. Technical audits, schema markup, and Core Web Vitals optimization."
            heroImage="https://images.unsplash.com/photo-1572177812156-58036aae439c?q=80&w=2070&auto=format&fit=crop"
            offerings={[
                "Technical SEO Audit: Identifying and fixing invisible performance blockers.",
                "Google Search Console Setup: Ensuring Google indexes your site correctly.",
                "Schema Markup: Rich snippets that stand out in search results.",
                "Core Web Vitals Optimization: Speed and stability for better ranking.",
                "Keyword Structure Mapping: Targeting high-intent search terms."
            ]}
            techStack={[
                "Semrush", "Ahrefs", "Google Search Console",

                "Screaming Frog", "Lighthouse", "Next.js SEO",
                "Schema.org", "Google Analytics 4", "PageSpeed Insights"
            ]}
            process={[
                {
                    number: "01",
                    title: "Audit & Analysis",
                    description: "Deep dive into your current site structure and competitor landscape.",
                },
                {
                    number: "02",
                    title: "Technical Fixes",
                    description: "Resolving crawl errors, speed issues, and indexing problems.",
                },
                {
                    number: "03",
                    title: "On-Page Optimization",
                    description: "Refining content structure, meta tags, and internal linking.",
                },
                {
                    number: "04",
                    title: "Authority Building",
                    description: "Strategies to increase domain authority and search visibility.",
                },
            ]}
            ctaTitle="DominatE Search Results"
        >
            <section className="py-20 border-t border-white/5 bg-black">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-2xl font-serif text-white mb-6">Search Performance Standards</h2>
                    <p className="text-secondary/60 text-sm mb-8 max-w-2xl mx-auto">
                        We adhere strictly to Google's core ranking principles. No shortcuts, just engineering excellence.
                    </p>
                    <a
                        href="https://developers.google.com/search/docs/fundamentals/seo-starter-guide"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-accent border-b border-accent/20 pb-1 hover:text-white hover:border-white transition-colors"
                    >
                        View Google Search Essentials <span className="text-lg">→</span>
                    </a>
                </div>
            </section>
        </ServicePageTemplate>
    );
}
