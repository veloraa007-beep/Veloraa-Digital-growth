import type { Metadata, Viewport } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/smooth-scroll";
import Header from "@/components/header";
import Footer from "@/components/footer";
import CookieConsent from "@/components/cookie-consent";
import FloatingWhatsApp from "@/components/floating-whatsapp";
import { Analytics } from "@vercel/analytics/react";
import VeloraLoader from "@/components/velora-loader";
import { constructMetadata } from "@/lib/metadata";
import { OrganizationSchema } from "@/components/seo/schema";
import AnalyticsScripts from "@/components/seo/analytics";

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
  ...constructMetadata(),
  verification: {
    google: "9fd6cd1ca894d998",
    other: {
      "msvalidate.01": "YOUR_BING_VERIFICATION_CODE",
    },
  },
  icons: {
    icon: "/favicon.ico",
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
        suppressHydrationWarning
        className={`${inter.variable} ${playfair.variable} antialiased selection:bg-accent selection:text-black bg-background text-primary overflow-x-hidden`}
      >
        <OrganizationSchema />
        <AnalyticsScripts />
        <VeloraLoader />
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
