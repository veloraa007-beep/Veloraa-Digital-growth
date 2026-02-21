import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/smooth-scroll";
import CustomCursor from "@/components/ui/custom-cursor";
import Header from "@/components/header";
import Footer from "@/components/footer";
import FloatingWhatsApp from "@/components/floating-whatsapp";

// Refined Sans-Serif for Body, Navigation, Buttons
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

// Editorial Serif for Headlines
const playfair = Playfair_Display({
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
  description: "Velora engineers invisible excellence. Premium digital systems architecture for brands that demand architectural precision and editorial elegance.",
  openGraph: {
    title: "VELORA | Digital Systems Architecture",
    description: "Engineering invisible excellence with architectural precision.",
    url: "https://velora.digital",
    siteName: "VELORA",
    locale: "en_US",
    type: "website",
  },
  metadataBase: new URL("https://velora.digital"),
  alternates: {
    canonical: "/",
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
        <SmoothScroll>
          {/* <CustomCursor /> Removed for V2 "Restraint" */}
          <Header />
          <div className="min-h-screen w-full">
            {children}
          </div>
          <FloatingWhatsApp />
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
