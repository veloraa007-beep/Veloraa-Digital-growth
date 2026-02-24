import type { Metadata, Viewport } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/smooth-scroll";
import CustomCursor from "@/components/ui/custom-cursor";
import Header from "@/components/header";
import Footer from "@/components/footer";
import CookieConsent from "@/components/cookie-consent";
import FloatingWhatsApp from "@/components/floating-whatsapp";
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
  title: "Velora",
  description: "Digital Growth Infrastructure",
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
        className={`${inter.variable} ${playfair.variable} antialiased selection:bg-accent selection:text-black bg-background text-primary overflow-x-hidden`}
      >
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
