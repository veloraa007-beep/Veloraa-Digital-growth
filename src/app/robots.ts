import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
                disallow: ["/api/", "/_next/", "/private/"],
            },
            // Block aggressive bots & scrapers
            {
                userAgent: [
                    "GPTBot",
                    "ChatGPT-User",
                    "CCBot",
                    "anthropic-ai",
                    "Google-Extended",
                    "FacebookExternalHit",
                    "Bytespider",
                    "ClaudeBot",
                ],
                disallow: "/",
            },
        ],
        sitemap: "https://velora.digital/sitemap.xml",
    };
}
