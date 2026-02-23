import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://velora.digital";
    const now = new Date();

    // Core pages
    const corePages = [
        { url: "/", priority: 1.0, changeFrequency: "weekly" as const },
        { url: "/about", priority: 0.8, changeFrequency: "monthly" as const },
        { url: "/services", priority: 0.9, changeFrequency: "weekly" as const },
        { url: "/pricing", priority: 0.9, changeFrequency: "weekly" as const },
        { url: "/contact", priority: 0.7, changeFrequency: "monthly" as const },
        { url: "/work", priority: 0.8, changeFrequency: "weekly" as const },
        { url: "/infrastructure", priority: 0.7, changeFrequency: "monthly" as const },
    ];

    // Service pages
    const servicePages = [
        "/services/premium-websites",
        "/services/premium-websites/ecommerce",
        "/services/premium-websites/corporate",
        "/services/premium-websites/portfolio",
        "/services/premium-websites/authority",
        "/services/premium-websites/conversion",
        "/services/business-cards",
        "/services/business-cards/paper",
        "/services/business-cards/nfc",
        "/services/digital-identity",
        "/services/saas-platforms",
        "/services/seo-optimization",
        "/services/whatsapp-automation",
        "/services/lead-funnels",
        "/services/premium",
    ].map((url) => ({
        url,
        priority: 0.7,
        changeFrequency: "monthly" as const,
    }));

    // Work / portfolio pages
    const workPages = [
        "/work/agency",
        "/work/coffee",
        "/work/ecommerce",
        "/work/portfolio",
        "/work/real-estate",
        "/work/restaurant",
    ].map((url) => ({
        url,
        priority: 0.6,
        changeFrequency: "monthly" as const,
    }));

    // Legal pages
    const legalPages = [
        "/privacy-policy",
        "/terms",
        "/security",
        "/refund-policy",
    ].map((url) => ({
        url,
        priority: 0.3,
        changeFrequency: "yearly" as const,
    }));

    const allPages = [...corePages, ...servicePages, ...workPages, ...legalPages];

    return allPages.map((page) => ({
        url: `${baseUrl}${page.url}`,
        lastModified: now,
        changeFrequency: page.changeFrequency,
        priority: page.priority,
    }));
}
