import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "VELORA — Digital Growth Operating System",
        short_name: "VELORA",
        description:
            "Premium digital systems architecture for brands that demand engineering excellence.",
        start_url: "/",
        display: "standalone",
        background_color: "#0F1113",
        theme_color: "#C2A35D",
        orientation: "portrait-primary",
        categories: ["business", "design", "technology"],
        icons: [
            {
                src: "/favicon.ico",
                sizes: "any",
                type: "image/x-icon",
            },
        ],
    };
}
