import type { Metadata, Viewport } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/smooth-scroll";
import CustomCursor from "@/components/ui/custom-cursor";
import Header from "@/components/header";
import Footer from "@/components/footer";
import CookieConsent from "@/components/cookie-consent";
import FloatingWhatsApp from "@/components/floating-whatsapp";
import FrontendProtection from "@/components/frontend-protection";
import { Analytics } from "@vercel/analytics/react";
import VeloraLoader from "@/components/velora-loader";

// Refined Sans-Serif for Body, Navigation, Buttons
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

// Editorial Serif for Headlines — Cormorant Garamond
const playfair = Cormorant_Garamond({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "VELORA | Digital Systems Architecture",
  description: "Engineering invisible excellence with architectural precision.",
  keywords: ["digital agency", "web design", "premium websites", "SaaS platforms", "WhatsApp automation", "SEO optimization", "Bangalore", "India", "digital growth"],
  authors: [{ name: "Velora Digital", url: "https://veloraa-digital-growth.vercel.app" }],
  creator: "Velora Digital",
  publisher: "Velora Digital",
  openGraph: {
    title: "VELORA | Digital Systems Architecture",
    description: "Engineering invisible excellence with architectural precision.",
    url: "https://veloraa-digital-growth.vercel.app",
    siteName: "VELORA",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image-v2.png",
        width: 1200,
        height: 630,
        alt: "VELORA Digital Systems Architecture",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VELORA | Digital Systems Architecture",
    description: "Engineering invisible excellence with architectural precision.",
    images: ["/og-image-v2.png"],
    creator: "@veloraa_digital",
  },
  metadataBase: new URL("https://veloraa-digital-growth.vercel.app"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased selection:bg-accent selection:text-black bg-background text-primary overflow-x-hidden`}
      >
        <VeloraLoader />
        <FrontendProtection />
        <SmoothScroll>
          {/* <CustomCursor /> Removed for V2 "Restraint" */}
          <Header />
          <div className="min-h-screen w-full">
            {children}
          </div>
          <FloatingWhatsApp />
          <CookieConsent />
          <Analytics />
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
