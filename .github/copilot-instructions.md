# Velora AI Copilot Instructions

## Project Overview
**Velora** is a luxury digital growth infrastructure platform built with Next.js 16. It's a high-performance marketing/services website emphasizing design sophistication, smooth animations, and conversion-driven architecture. The codebase prioritizes **restraint, authority, and conversion** through carefully orchestrated page flows and visual hierarchy.

## Architecture & Big Picture

### Technology Stack
- **Framework**: Next.js 16.1.6 (App Router)
- **Styling**: Tailwind CSS 4 + PostCSS
- **Animation**: GSAP 3.14 + Lenis (smooth scroll), Framer Motion, @gsap/react
- **UI Components**: Lucide React icons
- **Performance**: Vercel Analytics, Image optimization
- **Security**: Comprehensive middleware rate-limiting and request filtering

### Directory Structure
- `src/app/` – Next.js App Router pages with `page.tsx` files (each route gets its own page)
- `src/components/` – Reusable components organized by feature (hero, services, pricing, etc.)
- `src/lib/` – Shared utilities: `animations.ts` (motion variants), `utils.ts` (cn helper)
- `src/middleware.ts` – Rate limiting (100 req/min per IP) and security path blocking
- `public/images/` – Static assets, including hero backgrounds

### Design System & Theming
All color values are defined as CSS custom properties in `globals.css`:
- **Colors**: Background (#0F1113), Primary text (#EAE6DD), Accent gold (#C2A35D), Forest green (#1F3A2D)
- **Typography**: Cormorant Garamond serif for headlines, Inter sans for body
- **Fluid sizing**: Uses `clamp()` for responsive scaling (e.g., `font-h1: clamp(2.5rem, 5vw, 6rem)`)
- **Spacing system**: CSS variables (--space-xs through --space-xl)

### Page Flow & Sales Funnel
The homepage (`page.tsx`) follows a deliberate conversion funnel structure with "breathing space" dividers:
1. **AUTHORITY** → Hero section
2. **EDUCATION** → ProblemSection
3. **ARCHITECTURE** → SystemArchitecture
4. **FOUNDATION** → FourPillars
5. **SOCIAL PROOF** → Testimonials
6. **CONVERSION** → StrategyCall

This pattern repeats across service pages (see `service-page-template.tsx`).

## Key Component Patterns

### Section Wrapper Pattern
Use `SectionWrapper` as the base container for all page sections:
```tsx
<SectionWrapper id="services" className="bg-surface/50">
  <div className="max-w-6xl">
    {/* Content here */}
  </div>
</SectionWrapper>
```
Handles responsive padding (px-6 mobile → px-24 desktop) and max-width constraints automatically.

### Animation Patterns (Framer Motion + GSAP)
- **Framer Motion**: Use `fadeIn`, `staggerContainer`, `slideUp` variants from `animations.ts` for component entrance animations
- **GSAP + ScrollTrigger**: Used in SmoothScroll wrapper for scroll-triggered animations
- **Lenis Integration**: All scroll events funnel through Lenis for smooth scroll behavior (configured in `smooth-scroll.tsx`)
- **Example pattern**: Wrap components with `motion.div` and reference animation variants:
```tsx
<motion.div variants={fadeIn} initial="hidden" animate="show">
```

### Component Organization
- **Layout components** (Header, Footer, Layout) – Global chrome
- **Section components** (Hero, ProblemSection, Services) – Full-width page sections
- **UI components** (ui/ subdirectory) – Reusable primitives like MagneticButton, CustomCursor
- **Feature components** – Domain-specific (PricingBuilder, StrategyCall, Testimonials)

### TypeScript & Client Components
- Always mark interactive components with `"use client"` (e.g., animations, event listeners)
- Server components are the default; use only when component logic requires browser APIs
- Use strict TypeScript (`strict: true` in tsconfig.json) – always provide explicit type annotations

## Styling Conventions

### Tailwind + Custom Properties
- Prefer Tailwind utility classes for responsive breakpoints (sm:, md:, lg:)
- Use CSS variables for dynamic theme values (e.g., `text-primary`, `bg-accent`, `text-secondary`)
- Chain utilities with clsx + twMerge via `cn()` helper for conditional styling
- Example: `className="text-primary/70 uppercase tracking-widest font-light"`

### Responsive Design
- Mobile-first approach: start with mobile styles, add `md:` and `lg:` overrides
- Padding pattern: `px-6 md:px-12 lg:px-24` (consistent SectionWrapper behavior)
- Font scaling: Use `clamp()` for fluid typography instead of fixed breakpoint jumps

## Development Workflows

### Commands
- `npm run dev` – Start development server (localhost:3000)
- `npm run build` – Build for production (optimizes images, tree-shakes code)
- `npm run lint` – Run ESLint on all files
- `next build` – Explicit production build before deploy

### Security & Middleware
The `middleware.ts` handles:
- **Rate limiting**: 100 requests per minute per IP (tracks via in-memory Map)
- **Blocked paths**: Blocks common attack vectors (.env, wp-admin, shell, debug, etc.)
- Memory cleanup: Stale entries purged every 5 minutes

### SEO & Metadata
- Each page should export `Metadata` from layout or specific page files
- Use Next.js `Image` component (from next/image) for all images – enables optimization
- `robots.ts` and `sitemap.ts` in app/ for search engines

## Critical Integration Points

### External Dependencies
- **WhatsApp CTA**: Hardcoded URL in hero buttons links to +919901981097 (replace with actual business number)
- **Vercel Analytics**: Automatically imported in layout.tsx, tracks usage
- **Floating WhatsApp**: Widget component auto-initializes in layout
- **Cookie Consent**: Global consent banner auto-loads in layout

### Component Cross-Dependencies
- **Header** → Renders navigation with service links (updates when routes change)
- **Footer** → Links to all main sections, copyright notice
- **VeloraLoader** → Page preload animation (runs before SmoothScroll initializes)
- **SmoothScroll** → Wrapper that initializes Lenis globally; all scroll events depend on this

### Service Page Template Pattern
Service pages follow a reusable template (`service-page-template.tsx`):
- Each service has a dedicated subdirectory under `services/`
- Each includes structured sections: overview, benefits, technical details, case studies
- Reuse `ServicePageTemplate` component to maintain consistent structure

## Common Tasks & Patterns

### Adding a New Service
1. Create `src/app/services/[service-name]/page.tsx`
2. Import `ServicePageTemplate` and populate with service-specific content
3. Add service card to `services.tsx` component
4. Update Header navigation if needed

### Creating Animation-Heavy Components
1. Mark with `"use client"`
2. Import motion and animation variants: `import { motion } from "framer-motion"; import { fadeIn } from "@/lib/animations"`
3. Wrap with `motion.div`, reference variants
4. Let SmoothScroll handle scroll-triggered animations (avoid redundant ScrollTrigger setup)

### Adding Global Styles
1. Import utilities into `globals.css`
2. Define variables in `:root` (follows existing palette: background, accent, primary, secondary, muted)
3. Reference via `--var-name` in CSS or Tailwind classes (e.g., `text-primary`)

## Performance & Best Practices

### Image Optimization
- Always use Next.js `Image` component with explicit width/height
- Use `priority` prop only for above-the-fold images (hero background)
- Set `sizes` prop for responsive images: `sizes="100vw"` for full-width, `sizes="(max-width: 768px) 100vw, 50vw"` for conditional

### Avoiding Common Pitfalls
- **Hydration mismatches**: Wrap client-only content in `suppressHydrationWarning` (see layout.tsx)
- **Scroll performance**: SmoothScroll uses GSAP ticker for 60FPS; don't add competing scroll listeners
- **Type safety**: Ensure all Props interfaces are exported from components
- **Middleware**: Rate-limit is in-memory; resets on server restart (acceptable for this scale, but consider Redis for production)

## Code Examples

### Standard Page Structure
```tsx
import SectionWrapper from "@/components/section-wrapper";
import { metadata } from "@/app/layout";

export const metadata = {
  title: "Service Name | Velora",
  description: "Service description for SEO"
};

export default function ServicePage() {
  return (
    <SectionWrapper>
      <h1 className="font-serif text-primary">Heading</h1>
      <p className="text-secondary">Content</p>
    </SectionWrapper>
  );
}
```

### Animation Component
```tsx
"use client";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";

export default function AnimatedSection() {
  return (
    <motion.div variants={fadeIn} initial="hidden" animate="show">
      Content
    </motion.div>
  );
}
```

## Questions? Iteration Points
- Confirm WhatsApp number and business contact details are correct
- Verify rate-limit thresholds (100 req/min) match deployment environment
- Ensure all image assets are optimized and in public/images/
