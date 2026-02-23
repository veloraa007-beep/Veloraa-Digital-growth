import Hero from "@/components/hero";
import ProblemSection from "@/components/problem-section";
import VeloraSystem from "@/components/velora-system";
import SystemDepth from "@/components/system-depth";
import CoreSystems from "@/components/core-systems";
import SystemArchitecture from "@/components/system-architecture";
import Pricing from "@/components/pricing";
import PricingComparison from "@/components/pricing-comparison";
import ROIJustification from "@/components/roi-justification";
import ExecutiveOnboarding from "@/components/executive-onboarding";
import PerformanceProof from "@/components/performance-proof";
import ProcessTimeline from "@/components/process-timeline";
import TechStack from "@/components/tech-stack";
import TrustSection from "@/components/trust-section";
import TechnicalDepth from "@/components/technical-depth";
import CaseStudiesPreview from "@/components/case-studies-preview";
import PostLaunch from "@/components/post-launch";
import LocalToGlobal from "@/components/local-to-global";
import ClientQualification from "@/components/client-qualification";
import RetainerProgram from "@/components/retainer-program";
import StrategyCall from "@/components/strategy-call";
import FloatingCTA from "@/components/floating-cta";
import Testimonials from "@/components/testimonials";
import FAQ from "@/components/faq";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* ── AUTHORITY ── */}
      <Hero />

      {/* ── EDUCATION ── */}
      <ProblemSection />
      <VeloraSystem />
      <SystemDepth />

      {/* Breathing Space */}
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-accent/15 to-transparent" />

      {/* ── SERVICES ── */}
      <CoreSystems />
      <SystemArchitecture />

      {/* ── INVESTMENT ── */}
      <Pricing />
      <PricingComparison />
      <ROIJustification />
      <ExecutiveOnboarding />

      {/* Breathing Space */}
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      {/* ── PROOF ── */}
      <PerformanceProof />
      <ProcessTimeline />
      <TechStack />

      {/* ── TRUST ── */}
      <TrustSection />
      <TechnicalDepth />
      <CaseStudiesPreview />

      {/* ── POST-DELIVERY ── */}
      <PostLaunch />
      <LocalToGlobal />

      {/* Breathing Space */}
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-accent/10 to-transparent" />

      {/* ── SOCIAL PROOF ── */}
      <Testimonials />

      {/* ── FAQ ── */}
      <FAQ />

      {/* Breathing Space */}
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-accent/10 to-transparent" />

      {/* ── CONVERSION ── */}
      <ClientQualification />
      <RetainerProgram />
      <StrategyCall />

      {/* Floating CTA */}
      <FloatingCTA />
    </main>
  );
}
