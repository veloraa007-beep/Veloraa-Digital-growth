import Hero from "@/components/hero";
import Services from "@/components/services";
import BusinessSystems from "@/components/business-systems";
import Pricing from "@/components/pricing";
import FounderSection from "@/components/founder-section";
import CaseStudy from "@/components/case-study";
import WebHosting from "@/components/web-hosting";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* HERO SECTION */}
      <Hero />

      <Services />

      <section className="bg-background py-0 relative">
        <div className="max-w-7xl mx-auto px-6">
          <BusinessSystems />
          <WebHosting />
        </div>
      </section>

      {/* INDUSTRIES / CASE STUDY */}
      <section className="bg-black py-16 md:py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
        <CaseStudy />
      </section>

      {/* FOUNDER & PRICING */}
      <section className="bg-black py-16 md:py-24 relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <FounderSection />
        <Pricing />
      </section>

      {/* FINAL CTA */}
      <section className="py-20 md:py-32 bg-background relative overflow-hidden flex items-center justify-center text-center px-6">
        <div className="absolute inset-0 bg-accent/5 blur-[100px] rounded-full opacity-20" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-7xl font-serif text-primary mb-8 tracking-tighter">
            Ready to transcend <br className="hidden md:block" /> the <span className="text-accent italic">ordinary</span>?
          </h2>
          <p className="text-secondary text-lg mb-12 max-w-xl mx-auto">
            Partner with Velora to engineer a digital presence that commands attention and authority.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <a
              href="https://api.whatsapp.com/send/?phone=919901981097&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent text-black px-12 py-4 rounded-none text-sm font-bold uppercase tracking-widest hover:bg-white transition-colors min-w-[200px]"
            >
              Start Project
            </a>
            <Link
              href="/contact"
              className="px-12 py-4 rounded-none text-sm font-bold uppercase tracking-widest text-white border border-white/20 hover:border-accent hover:text-accent transition-colors min-w-[200px]"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
