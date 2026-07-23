import { Metadata } from "next";

interface MetadataProps {
  title?: string;
  description?: string;
  image?: string;
  noIndex?: boolean;
}

const defaultTitle = "Velora | Digital Growth Infrastructure";
const defaultDescription =
  "Velora builds premium digital infrastructure for modern businesses. We specialize in high-performance websites, AI-ready SEO, and growth systems.";
const siteUrl = "https://velora.digital";

export function constructMetadata({
  title,
  description,
  image = "/website-screenshot.png", // Assume we have a nice default OG image
  noIndex = false,
}: MetadataProps = {}): Metadata {
  return {
    title: title ? `${title} | Velora` : defaultTitle,
    description: description || defaultDescription,
    openGraph: {
      title: title ? `${title} | Velora` : defaultTitle,
      description: description || defaultDescription,
      url: siteUrl,
      siteName: "Velora",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: "Velora Digital Growth Infrastructure",
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: title ? `${title} | Velora` : defaultTitle,
      description: description || defaultDescription,
      images: [image],
      creator: "@velora",
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    metadataBase: new URL(siteUrl),
  };
}
