# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
pnpm dev        # Start Next.js dev server
pnpm build      # Production build
pnpm lint       # Run ESLint
```

No test suite is configured.

## Stack

- **Next.js 16.2** (App Router) with **React 19** — see `node_modules/next/dist/docs/` for this version's specific APIs before writing code
- **Tailwind CSS v4** — configured via `@theme inline` in `globals.css`, not `tailwind.config.js`. All border radii are set to `0px` (sharp corners by design)
- **TypeScript** with `@/` path alias pointing to `src/`
- **pnpm** as package manager

## Architecture

Single-page marketing/waitlist site for Slaidd (an AI desktop app). The landing page (`src/app/page.tsx`) renders a sequence of sections, each wrapped in `<RevealSection>` for scroll-triggered fade-up animations.

**Section order:** Hero → Manifesto → LiveAnatomy → LatencyMatrix → UseCaseChronicles → TheEngine → ComparisonTable → TheQueue → FinalCta

**Key infrastructure components:**
- `RevealSection` — GSAP ScrollTrigger wrapper that animates children on scroll-enter. Accepts an optional `id` prop for anchor links.
- `SmoothScrolling` — wraps the entire page body with Lenis smooth scroll via `ReactLenis`
- `Navbar` — visibility controlled by Hero intersection observer (hides while Hero is in view)

**Animation approach:** GSAP + `@gsap/react` (`useGSAP` hook) for scroll animations. Framer Motion is also installed but GSAP is the primary animation library. CSS animations in `globals.css` handle wave bars, blinking cursor, and marquee effects.

**Design system:** Pure black-and-white. `--color-background: #FAFAFA`, `--color-foreground: #000000`. Geist Sans font. No border radii anywhere. Copy is in Italian.

**`src/lib/utils.ts`** exports `cn()` (clsx + tailwind-merge) — the standard utility for conditional class names.

**`src/components/ui/`** contains unregistered/experimental UI components (tubelight navbar, scroll-morph hero) not currently used in production pages.

## Next.js Version Notes

This project uses Next.js 16 with React 19. The Metadata API, font loading, and App Router conventions may differ from training data — always check `node_modules/next/dist/docs/` before writing Next.js-specific code.
