import Hero from "@/components/hero";
import TrustBar from "@/components/trust-bar";
import ProblemSection from "@/components/problem-section";
import SystemArchitecture from "@/components/system-architecture";
import FourPillars from "@/components/four-pillars";
import TrustAuthoritySection from "@/components/trust-authority";
import Testimonials from "@/components/testimonials";
import StrategyCall from "@/components/strategy-call";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* ── HERO ── */}
      <Hero />

      {/* ── TRUST BAR (FIRST 5 SECONDS CREDIBILITY) ── */}
      <TrustBar />

      {/* Breathing Space */}
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-accent/15 to-transparent my-10" />

      {/* ── EDUCATION / PROBLEM ── */}
      <ProblemSection />

      {/* Breathing Space */}
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent my-10" />

      {/* ── ARCHITECTURE ── */}
      <SystemArchitecture />

      {/* Breathing Space */}
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-accent/10 to-transparent my-10" />

      {/* ── FOUNDATION ── */}
      <FourPillars />

      {/* ── AUTHORITY & ACCREDITATION ── */}
      <TrustAuthoritySection />

      {/* Breathing Space */}
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent my-10" />

      {/* ── SOCIAL PROOF ── */}
      <Testimonials />

      {/* Breathing Space */}
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-accent/10 to-transparent my-10" />

      {/* ── CONVERSION ── */}
      <StrategyCall />

    </main>
  );
}
