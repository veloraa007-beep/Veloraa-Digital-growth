import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
                disallow: ["/api/", "/_next/", "/private/"],
            },
            // Explicitly allow AI and Search Bots for AEO/GEO
            {
                userAgent: [
                    "GPTBot",
                    "ChatGPT-User",
                    "CCBot",
                    "anthropic-ai",
                    "Google-Extended",
                    "ClaudeBot",
                    "PerplexityBot",
                ],
                allow: "/",
            },
            // Block scrapers that provide no value
            {
                userAgent: [
                    "Bytespider",
                ],
                disallow: "/",
            },
        ],
        sitemap: "https://velora.digital/sitemap.xml",
    };
}
