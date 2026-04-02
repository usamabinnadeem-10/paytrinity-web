# PayTrinity: React/Vite SPA → Next.js Migration Plan

## Overview

Migrating PayTrinity from a React 18 + Vite single-page application to a Next.js App Router project. The new site is a **marketing/informational site only** — no user accounts, no payments, no dashboard. Forms send email notifications via Resend.

The current codebase at `/Users/usamanadeem/dev/paytrinity-figma` serves as a **read-only reference**. The new app will be built in a separate directory.

---

## What's Removed

| Category | Removed Items | Reason |
|----------|---------------|--------|
| **Dashboard** | DashboardHome, MailroomPage, AgentPage, InvoicesPage, TaxFilingPage, VisaDocsPage, DocumentsVaultPage, SubscriptionPage, SupportPage, DashboardLoginPage, DashboardLayout | Separate app |
| **Auth** | LoginPage, NewLoginPage, RegisterPage, SignUpPage, SettingsPage | No user accounts |
| **Visa** | USAVisaPage, DubaiVisaPage, EUVisaPage, AustraliaVisaPage, VisaServicesPage, VisaCountryPage, StudentVisaPage, VisitorVisaPage, InvestorVisaPage, TalentVisaPage, VisaForm | Deferred to later phase |
| **Other Pages** | CareersPage, HomePageNew, RewardsPage | Dropped from scope |
| **Backend** | Supabase (auth, edge functions, KV store) | Not needed |
| **Payments** | Stripe checkout integration | Handled in dashboard app |
| **Dependencies** | `@supabase/supabase-js`, `@emotion/react`, `@emotion/styled`, `@mui/material`, `@mui/icons-material`, `react-router-dom`, `react-helmet-async`, `next-themes` | Replaced or unnecessary |

---

## What's Kept

### Design System (must match current site exactly)
- **Font**: Inter via `next/font/google`
- **CSS Variables**: Light-mode tokens from `src/styles/theme.css` (colors, radii, typography) — dark mode variables stripped
- **Tailwind CSS v4**: Utility-first styling, same config
- **Custom animations**: `float`, `spin-slow`, `float-particle` keyframes
- **No dark mode**: Strip all `.dark` variants, `dark:` classes, and dark CSS variables — single theme only
- **Color palette**: Deep navy (#020410), gold accents (#D4A574), blue (#2563EB)
- **Selection styling**: Blue highlight (#2563EB)
- **tw-animate-css**: Animation utilities
- **Favicon**: Generated from logo.png (favicon.ico, apple-touch-icon.png, 16x16, 32x32)
- **OG Image**: Default placeholder (logo + brand colors, 1200x630) — to be replaced with final version later
- **No analytics**: Skipped for now

### Component Library
- **shadcn/ui (Radix UI)**: All 48+ components in `src/app/components/ui/`
- **Utility function**: `cn()` from `src/app/components/ui/utils.ts` (clsx + tailwind-merge)
- **CVA variants**: Button (6 variants, 4 sizes), Badge (4 variants)

### Dependencies to Keep
- `tailwindcss` (v4) — utility-first styling
- `lucide-react` — icons throughout the site
- `motion` — page animations, scroll reveals, counters
- `sonner` — toast notifications on form submissions
- `react-fast-marquee` — scrolling logo ticker on homepage
- `class-variance-authority` — component variants (button, badge)
- `clsx` + `tailwind-merge` — class merging for `cn()` utility

### New Dependencies
- `resend` — email on form submission
- `zod` — form validation (replaces react-hook-form)

### Dependencies Dropped
- `recharts` — no surviving page imports it directly
- `date-fns` — zero imports in codebase
- `react-hook-form` — replaced by plain useState + Zod validation
- `cmdk` — only in unused `ui/command.tsx` shadcn component
- `embla-carousel-react` — only in unused `ui/carousel.tsx` shadcn component
- `vaul` — only in unused `ui/drawer.tsx` shadcn component
- `react-resizable-panels` — only in unused `ui/resizable.tsx` shadcn component
- `input-otp` — only in unused `ui/input-otp.tsx` shadcn component
- `react-responsive-masonry` — zero imports
- `react-dnd` + `react-dnd-html5-backend` — zero imports
- `react-slick` + `slick-carousel` — zero imports
- `react-popper` + `@popperjs/core` — zero imports

### shadcn/ui Components to Skip
Do NOT install these — no page uses them:
- `chart.tsx` (recharts)
- `command.tsx` (cmdk)
- `carousel.tsx` (embla)
- `drawer.tsx` (vaul)
- `resizable.tsx` (react-resizable-panels)
- `input-otp.tsx` (input-otp)
- `form.tsx` (react-hook-form)

### Assets (6 PNGs from Figma)
Rename from hash-based to descriptive names and place in `/public/images/`:

| Current (`figma:asset/...`) | New path | Used in |
|-----------------------------|----------|---------|
| `1b9dcde50b3964ccc0bab40576aef8c9f744ae89.png` | `/images/logo.png` | Header, Footer |
| `2b714507213fa98ed9e7a620ae26a0a90f9a8c93.png` | `/images/salar.png` | HomePage, TestimonialsPage |
| `4e26a032d364ecd9e9782c17522917ce1d522a96.png` | `/images/founder.png` | AboutPage, HomePage |
| `39ac5328a7b05d09bf9488e19c2227e90915e910.png` | `/images/salar-alt.png` | ~~CareersPage~~ (dropped — verify if used elsewhere) |
| `2ec8018b8529b07ad7cd5ca5950ba24932177344.png` | `/images/irs-logo.png` | ITINApplicationPage |
| `0568037c15ff7592d68e97cb662b707ba90a97d6.png` | `/images/chamber-logo.png` | ITINApplicationPage |

---

## Route Mapping: Old → New

### Root Pages

| Old Route | New Route | Source Component | Notes |
|-----------|-----------|------------------|-------|
| `/` | `/` | HomePage | Home page |
| `/about` | `/about` | AboutPage | |
| `/pricing` | `/pricing` | PricingPage | Remove Stripe CTAs, replace with contact/inquiry |
| `/contact` | `/contact` | ContactPage | Resend instead of Supabase edge function |
| `/faq` | `/faq` | FAQPage | |
| `/testimonials` | `/testimonials` | TestimonialsPage | |

### Products (`/products/...`) — previously at root level

| Old Route | New Route | Source Component |
|-----------|-----------|------------------|
| `/start` | `/products/start` | PayTrinityStartPage |
| `/mailroom` | `/products/mailroom` | PayTrinityMailroomPage |
| `/agent` | `/products/agent` | PayTrinityAgentPage |
| `/tax` | `/products/tax` | PayTrinityTaxPage |
| `/app` | `/products/app` | TrinityAppPage |
| `/pro` | `/products/pro` | PayTrinityProPage |

### Services (`/services/...`) — previously at root level

| Old Route | New Route | Source Component |
|-----------|-----------|------------------|
| `/services` | `/services` | ServicesPage (hub) |
| `/services/:slug` | `/services/[slug]` | ServiceDetailPage (dynamic) |
| `/itin-application` | `/services/itin-application` | ITINApplicationPage |
| `/us-formation` | `/services/us-formation` | USFormationPage |
| `/stripe-readiness` | `/services/stripe-readiness` | StripeReadinessPage |
| `/registered-agent` | `/services/registered-agent` | RegisteredAgentPage |
| `/annual-compliance` | `/services/annual-compliance` | AnnualCompliancePage |
| `/physical-banking` | `/services/physical-banking` | PhysicalBankingPage |
| `/fulfillment` | `/services/fulfillment` | FulfillmentPage |

### Legal Services (`/legal-services/...`) — unchanged

| Old Route | New Route | Source Component |
|-----------|-----------|------------------|
| `/legal-services` | `/legal-services` | LegalServicesPage (hub) |
| `/legal-services/patent-filing` | `/legal-services/patent-filing` | PatentFilingPage |
| `/legal-services/trademark-registration` | `/legal-services/trademark-registration` | TrademarkRegistrationPage |
| `/legal-services/copyright-protection` | `/legal-services/copyright-protection` | CopyrightProtectionPage |
| `/legal-services/ip-strategy` | `/legal-services/ip-strategy` | IPStrategyPage |
| `/legal-services/technology-startup-law` | `/legal-services/technology-startup-law` | TechnologyStartupLawPage |

### Blog (`/blog/...`) — unchanged

| Old Route | New Route | Source Component |
|-----------|-----------|------------------|
| `/blog` | `/blog` | BlogPage |
| `/blog/:slug` | `/blog/[slug]` | BlogPostPage |

### Help Center (`/help-center/...`) — unchanged

| Old Route | New Route | Source Component |
|-----------|-----------|------------------|
| `/help-center` | `/help-center` | HelpCenterPage |
| `/help-center/:slug` | `/help-center/[slug]` | HelpArticlePage |

### Guides (`/guides/...`) — previously SEO dedicated pages at root level

| Old Route | New Route | Source Component |
|-----------|-----------|------------------|
| `/us-llc-formation-pakistan` | `/guides/us-llc-formation-pakistan` | USLLCFormationPakistanPage |
| `/itin-application-pakistan` | `/guides/itin-application-pakistan` | ITINApplicationPakistanPage |
| `/f1-visa-strategy-pakistan` | `/guides/f1-visa-strategy-pakistan` | F1VisaStrategyPakistanPage |
| `/e2-investor-visa-pakistan` | `/guides/e2-investor-visa-pakistan` | E2InvestorVisaPakistanPage |
| `/b1-b2-visa-strategy` | `/guides/b1-b2-visa-strategy` | B1B2VisaStrategyPage |

### Policy & Research (`/policy-research/...`) — unchanged

| Old Route | New Route | Source Component |
|-----------|-----------|------------------|
| `/policy-research` | `/policy-research` | PolicyResearchPage (hub) |
| `/policy-research/business-economic-policy` | `/policy-research/business-economic-policy` | BusinessEconomicPolicyPage |
| `/policy-research/law-regulatory-systems` | `/policy-research/law-regulatory-systems` | LawRegulatorySystemsPage |
| `/policy-research/federalism-governance` | `/policy-research/federalism-governance` | FederalismGovernancePage |
| `/policy-research/institutional-fragmentation` | `/policy-research/institutional-fragmentation` | InstitutionalFragmentationPage |
| `/policy-research/digital-economy-fintech` | `/policy-research/digital-economy-fintech` | DigitalEconomyFintechPage |

### Resources (`/resources/...`) — unchanged

| Old Route | New Route | Source Component |
|-----------|-----------|------------------|
| `/resources/business-regulation-federal-systems` | `/resources/business-regulation-federal-systems` | BusinessRegulationFederalSystemsPage |
| `/resources/institutional-fragmentation-emerging-markets` | `/resources/institutional-fragmentation-emerging-markets` | InstitutionalFragmentationEmergingMarketsPage |
| `/resources/ip-strategy-global-startups` | `/resources/ip-strategy-global-startups` | IPStrategyGlobalStartupsPage |

### Legal/Policy Pages — unchanged

| Old Route | New Route | Source Component |
|-----------|-----------|------------------|
| `/terms` | `/terms` | TermsOfServicePage |
| `/privacy` | `/privacy` | PrivacyPolicyPage |
| `/refund-policy` | `/refund-policy` | RefundPolicyPage |
| `/kyc-aml-policy` | `/kyc-aml-policy` | KYCAMLPolicyPage |
| `/disclaimer` | `/disclaimer` | DisclaimerPage |

---

## Next.js Directory Structure

```
app/
├── layout.tsx                              # Root layout: fonts, metadata, Header, Footer, CookieBanner, Toaster
├── page.tsx                                # / (HomePage)
├── about/
│   └── page.tsx                            # /about
├── pricing/
│   └── page.tsx                            # /pricing
├── contact/
│   └── page.tsx                            # /contact (Resend form)
├── faq/
│   └── page.tsx                            # /faq
├── testimonials/
│   └── page.tsx                            # /testimonials
│
├── products/
│   ├── start/page.tsx                      # /products/start
│   ├── mailroom/page.tsx                   # /products/mailroom
│   ├── agent/page.tsx                      # /products/agent
│   ├── tax/page.tsx                        # /products/tax
│   ├── app/page.tsx                        # /products/app
│   └── pro/page.tsx                        # /products/pro
│
├── services/
│   ├── page.tsx                            # /services (hub)
│   ├── [slug]/page.tsx                     # /services/[slug] (dynamic detail)
│   ├── itin-application/page.tsx           # /services/itin-application
│   ├── us-formation/page.tsx               # /services/us-formation
│   ├── stripe-readiness/page.tsx           # /services/stripe-readiness
│   ├── registered-agent/page.tsx           # /services/registered-agent
│   ├── annual-compliance/page.tsx          # /services/annual-compliance
│   ├── physical-banking/page.tsx           # /services/physical-banking
│   └── fulfillment/page.tsx                # /services/fulfillment
│
├── legal-services/
│   ├── page.tsx                            # /legal-services (hub)
│   ├── patent-filing/page.tsx
│   ├── trademark-registration/page.tsx
│   ├── copyright-protection/page.tsx
│   ├── ip-strategy/page.tsx
│   └── technology-startup-law/page.tsx
│
├── blog/
│   ├── page.tsx                            # /blog
│   └── [slug]/page.tsx                     # /blog/[slug]
│
├── help-center/
│   ├── page.tsx                            # /help-center
│   └── [slug]/page.tsx                     # /help-center/[slug]
│
├── guides/
│   ├── us-llc-formation-pakistan/page.tsx
│   ├── itin-application-pakistan/page.tsx
│   ├── f1-visa-strategy-pakistan/page.tsx
│   ├── e2-investor-visa-pakistan/page.tsx
│   └── b1-b2-visa-strategy/page.tsx
│
├── policy-research/
│   ├── page.tsx                            # /policy-research (hub)
│   ├── business-economic-policy/page.tsx
│   ├── law-regulatory-systems/page.tsx
│   ├── federalism-governance/page.tsx
│   ├── institutional-fragmentation/page.tsx
│   └── digital-economy-fintech/page.tsx
│
├── resources/
│   ├── business-regulation-federal-systems/page.tsx
│   ├── institutional-fragmentation-emerging-markets/page.tsx
│   └── ip-strategy-global-startups/page.tsx
│
├── terms/page.tsx
├── privacy/page.tsx
├── refund-policy/page.tsx
├── kyc-aml-policy/page.tsx
├── disclaimer/page.tsx
│
├── api/
│   └── contact/
│       └── route.ts                        # POST handler → Resend email
│
└── not-found.tsx                           # 404 page
│
components/
├── ui/                                     # shadcn/ui components (copied from current)
│   ├── button.tsx
│   ├── card.tsx
│   ├── dialog.tsx
│   ├── ... (48+ files)
│   └── utils.ts                            # cn() helper
├── Header.tsx                              # Global nav (remove auth/user state)
├── Footer.tsx
├── CookieBanner.tsx
├── ScrollToTop.tsx
├── CountUpStat.tsx
├── ScrollReveal.tsx
└── figma/
    └── ImageWithFallback.tsx
│
lib/
├── resend.ts                               # Resend client init
└── utils.ts                                # Shared utilities
│
data/
├── blogPosts.ts                            # Blog content (140KB)
├── services.tsx                            # Service definitions
└── visaServices.tsx                        # Keep if referenced by non-visa pages
│
public/
├── images/
│   ├── logo.png
│   ├── salar.png
│   ├── founder.png
│   ├── irs-logo.png
│   └── chamber-logo.png
├── robots.txt
├── sitemap.xml
└── sitemap.txt
│
styles/
├── globals.css                             # Tailwind directives + theme.css tokens + custom keyframes
```

**Total pages: ~45** (down from 80+)

---

## Implementation Phases

### Phase 0: Foundation
1. Scaffold Next.js app with `create-next-app` (App Router, TypeScript, Tailwind v4, ESLint)
2. Port design tokens from `src/styles/theme.css` into `styles/globals.css` — **strip all dark mode variables and `.dark` variant**, keep light theme only
3. Port custom keyframe animations (`float`, `spin-slow`, `float-particle`)
4. Set up shadcn/ui via `npx shadcn@latest init` — install only the components actually used by pages (skip chart, command, carousel, drawer, resizable, input-otp, form). Remove `dark:` classes from installed components
5. Copy `cn()` utility
6. Install deps: `motion`, `lucide-react`, `sonner`, `zod`, `react-fast-marquee`, `resend`, `class-variance-authority`, `clsx`, `tailwind-merge`
7. Copy images from `src/assets/` to `public/images/` with proper names
8. Generate favicon files from `logo.png` (favicon.ico, apple-touch-icon.png, favicon-16x16.png, favicon-32x32.png) and place in `/app`
9. Create a default `opengraph-image.png` (1200x630) using the logo + brand colors as placeholder — will be replaced later
10. Set up `.env.local` with `RESEND_API_KEY` and `CONTACT_EMAIL`

### Phase 1: Layout Shell
1. Build root `layout.tsx` with Inter font via `next/font/google`, global metadata (title, description, favicon, default OG image), Toaster
2. Port Header component (remove all auth/user state, remove Supabase imports)
3. Port Footer component (remove Supabase imports)
4. Port CookieBanner, ScrollToTop
5. Set up `not-found.tsx`

### Phase 2: Core Pages
1. `/` — HomePage
2. `/about` — AboutPage
3. `/pricing` — PricingPage (remove Stripe CTAs, replace with contact links)
4. `/contact` — ContactPage + `api/contact/route.ts` (Resend)
5. `/faq` — FAQPage
6. `/testimonials` — TestimonialsPage

### Phase 3: Products
1. `/products/start` — PayTrinityStartPage
2. `/products/mailroom` — PayTrinityMailroomPage
3. `/products/agent` — PayTrinityAgentPage
4. `/products/tax` — PayTrinityTaxPage
5. `/products/app` — TrinityAppPage
6. `/products/pro` — PayTrinityProPage

### Phase 4: Services
1. `/services` — ServicesPage (hub)
2. `/services/[slug]` — ServiceDetailPage (replace Stripe checkout CTA with redirect to `/contact`)
3. `/services/itin-application` — ITINApplicationPage
4. `/services/us-formation` — USFormationPage
5. `/services/stripe-readiness` — StripeReadinessPage
6. `/services/registered-agent` — RegisteredAgentPage
7. `/services/annual-compliance` — AnnualCompliancePage
8. `/services/physical-banking` — PhysicalBankingPage
9. `/services/fulfillment` — FulfillmentPage

### Phase 5: Legal Services
1. `/legal-services` — hub + all 5 sub-pages

### Phase 6: Content Pages
1. `/blog` + `/blog/[slug]` — port blog data file
2. `/help-center` + `/help-center/[slug]`
3. `/guides/*` — 5 SEO pages
4. `/policy-research` — hub + 5 sub-pages
5. `/resources/*` — 3 article pages

### Phase 7: Legal & Policy Pages
1. `/terms`, `/privacy`, `/refund-policy`, `/kyc-aml-policy`, `/disclaimer`

### Phase 8: Polish
1. SEO metadata on every page (Next.js `metadata` exports)
2. Replace default OG image with final branded version when ready
3. `sitemap.xml` generation (Next.js built-in)
4. `robots.txt`
5. Verify all internal links updated to new routes
6. Performance audit (Lighthouse)
7. JSON-LD schemas on all pages

---

## Per-Page Migration Checklist

When porting each page from React to Next.js:

- [ ] Determine if page can be a Server Component (most can — no useState/useEffect)
- [ ] Add `"use client"` only if page uses: Motion animations, useState, useEffect, event handlers, browser APIs
- [ ] Replace `react-router-dom` imports: `Link` → `next/link`, `useNavigate` → `useRouter`, `useParams` → page props
- [ ] Replace `react-helmet-async` SEO → export `metadata` object (server components) or use `generateMetadata()` for dynamic pages
- [ ] Replace `figma:asset/...` imports → `/images/...` paths with `next/image`
- [ ] Remove any Supabase imports
- [ ] Remove any Stripe references (ServiceDetailPage: replace checkout CTA with link to `/contact`)
- [ ] Remove any `dark:` classes from page-level code
- [ ] Update internal links to new route structure (e.g. `/start` → `/products/start`)
- [ ] Replace `<img>` → `<Image>` from `next/image` where appropriate
- [ ] Add JSON-LD structured data using `<JsonLd>` component (see JSON-LD section below)

---

## JSON-LD Structured Data

### Helper Component

Create `components/JsonLd.tsx` — a simple server component that renders a `<script type="application/ld+json">` tag:

```tsx
type JsonLdProps = {
  data: Record<string, unknown> | Record<string, unknown>[];
};

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
```

No external dependency needed. Works as a Server Component — no `"use client"` required.

### Schema Mapping Per Section

#### Site-Wide (in `app/layout.tsx`)

**Organization** + **WebSite** — rendered on every page:

```json
[
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "PayTrinity",
    "url": "https://paytrinity.com",
    "logo": "https://paytrinity.com/images/logo.png",
    "sameAs": ["linkedin-url", "twitter-url", "facebook-url", "instagram-url"]
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "PayTrinity",
    "url": "https://paytrinity.com"
  }
]
```

#### Per-Page Schemas

| Page/Section | Schema Type | Key Properties |
|-------------|-------------|----------------|
| `/` (Home) | `WebPage` | name, description, provider → Organization |
| `/about` | `AboutPage` | name, description |
| `/faq` | `FAQPage` | mainEntity → array of Question/Answer pairs (enables FAQ rich snippets in Google) |
| `/contact` | `ContactPage` + `ContactPoint` | telephone, email, contactType |
| `/blog` | `CollectionPage` | name, description |
| `/blog/[slug]` | `BlogPosting` | headline, author, datePublished, dateModified, image, articleBody |
| `/products/*` | `Product` | name, description, brand → Organization |
| `/services` (hub) | `CollectionPage` | name, description |
| `/services/*` (each) | `Service` | name, description, provider → Organization, areaServed |
| `/legal-services` (hub) | `CollectionPage` | name, description |
| `/legal-services/*` (each) | `ProfessionalService` | name, description, provider → Organization, serviceType |
| `/guides/*` | `Article` | headline, author, datePublished, publisher → Organization |
| `/policy-research/*` | `ScholarlyArticle` | headline, author, datePublished, publisher → Organization |
| `/resources/*` | `Article` | headline, author, datePublished, publisher → Organization |
| `/pricing` | `WebPage` + `ItemList` | listItem → array of Offer (plan name, price, description) |
| `/testimonials` | `WebPage` | review → array of Review (author, reviewBody, ratingValue) |
| All pages | `BreadcrumbList` | itemListElement → breadcrumb path segments |

#### Breadcrumbs Helper

Create `lib/breadcrumbs.ts` to generate `BreadcrumbList` schema from the current path:

```tsx
export function generateBreadcrumbs(path: string, labels: Record<string, string>) {
  const segments = path.split("/").filter(Boolean);
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://paytrinity.com" },
      ...segments.map((segment, i) => ({
        "@type": "ListItem",
        "position": i + 2,
        "name": labels[segment] || segment,
        "item": `https://paytrinity.com/${segments.slice(0, i + 1).join("/")}`
      }))
    ]
  };
}
```

#### Usage Example in a Page

```tsx
// app/services/itin-application/page.tsx
import { JsonLd } from "@/components/JsonLd";
import { generateBreadcrumbs } from "@/lib/breadcrumbs";

export const metadata = {
  title: "ITIN Application | PayTrinity",
  description: "...",
};

export default function ITINApplicationPage() {
  return (
    <>
      <JsonLd data={generateBreadcrumbs("/services/itin-application", {
        services: "Services",
        "itin-application": "ITIN Application"
      })} />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "ITIN Application",
        "description": "Professional ITIN application assistance for international founders",
        "provider": {
          "@type": "Organization",
          "name": "PayTrinity"
        },
        "areaServed": "US"
      }} />
      {/* Page content */}
    </>
  );
}
```

### Implementation Notes

- **No external dependency** — just a 10-line component + a breadcrumb helper
- **Server-rendered** — JSON-LD is in the HTML source, immediately visible to crawlers
- **FAQPage schema** is the highest-value one — enables expandable FAQ rich snippets in Google search results
- **BlogPosting schema** enables article rich results with author, date, and image in search
- **BreadcrumbList** shows navigation path in search results for all pages
- Add schemas during Phase 8 (Polish) or inline while building each page

---

## Header Navigation Updates

The Header component needs these nav structure changes:

**Products dropdown** → all link to `/products/...`:
- Start → `/products/start`
- Mailroom → `/products/mailroom`
- Agent → `/products/agent`
- Tax → `/products/tax`
- App → `/products/app`
- Pro → `/products/pro`

**Services dropdown** → all link to `/services/...`:
- ITIN Application → `/services/itin-application`
- US Formation → `/services/us-formation`
- Stripe Readiness → `/services/stripe-readiness`
- Registered Agent → `/services/registered-agent`
- Annual Compliance → `/services/annual-compliance`
- Physical Banking → `/services/physical-banking`
- Fulfillment → `/services/fulfillment`

**Remove from header:**
- All auth links (Sign In, Register, user profile, Sign Out)
- Visa link (deferred)
- Careers link (dropped)

---

## Form Handling: Resend Integration

### API Route (`app/api/contact/route.ts`)

Single endpoint that receives form submissions and sends an email notification via Resend.

**Used by:**
- Contact page form
- Any service inquiry forms (ServiceDetailPage had a checkout — replace with inquiry form)

**Flow:**
1. Client submits form via Server Action or fetch to `/api/contact`
2. Server validates input with Zod
3. Server sends email via Resend to configured recipient
4. Returns success/error response
5. Client shows toast via Sonner

**Environment variables:**
```
RESEND_API_KEY=re_...
CONTACT_EMAIL=owner@paytrinity.com
```

---

## Redirects (for SEO continuity)

Old routes that moved need redirects in `next.config.ts`:

```typescript
redirects: async () => [
  // Products (root → /products/)
  { source: '/start', destination: '/products/start', permanent: true },
  { source: '/mailroom', destination: '/products/mailroom', permanent: true },
  { source: '/agent', destination: '/products/agent', permanent: true },
  { source: '/tax', destination: '/products/tax', permanent: true },
  { source: '/app', destination: '/products/app', permanent: true },
  { source: '/pro', destination: '/products/pro', permanent: true },

  // Services (root → /services/)
  { source: '/itin-application', destination: '/services/itin-application', permanent: true },
  { source: '/us-formation', destination: '/services/us-formation', permanent: true },
  { source: '/stripe-readiness', destination: '/services/stripe-readiness', permanent: true },
  { source: '/registered-agent', destination: '/services/registered-agent', permanent: true },
  { source: '/annual-compliance', destination: '/services/annual-compliance', permanent: true },
  { source: '/physical-banking', destination: '/services/physical-banking', permanent: true },
  { source: '/fulfillment', destination: '/services/fulfillment', permanent: true },

  // SEO pages (root → /guides/)
  { source: '/us-llc-formation-pakistan', destination: '/guides/us-llc-formation-pakistan', permanent: true },
  { source: '/itin-application-pakistan', destination: '/guides/itin-application-pakistan', permanent: true },
  { source: '/f1-visa-strategy-pakistan', destination: '/guides/f1-visa-strategy-pakistan', permanent: true },
  { source: '/e2-investor-visa-pakistan', destination: '/guides/e2-investor-visa-pakistan', permanent: true },
  { source: '/b1-b2-visa-strategy', destination: '/guides/b1-b2-visa-strategy', permanent: true },

  // Removed pages → home
  { source: '/login', destination: '/', permanent: false },
  { source: '/signin', destination: '/', permanent: false },
  { source: '/register', destination: '/', permanent: false },
  { source: '/signup', destination: '/', permanent: false },
  { source: '/get-started', destination: '/', permanent: false },
  { source: '/settings', destination: '/', permanent: false },
  { source: '/profile', destination: '/', permanent: false },
  { source: '/careers', destination: '/', permanent: false },
  { source: '/rewards', destination: '/', permanent: false },
  { source: '/home-new', destination: '/', permanent: false },

  // Dashboard → external dashboard app (update URL when known)
  { source: '/dashboard/:path*', destination: '/', permanent: false },

  // Visa → home for now (until visa phase)
  { source: '/visa/:path*', destination: '/', permanent: false },
]
```

---

## Page Count Summary

| Section | Pages | Status |
|---------|-------|--------|
| Core (home, about, pricing, contact, faq, testimonials) | 6 | Migrate |
| Products | 6 | Migrate (new routes) |
| Services (hub + 7 dedicated + dynamic [slug]) | 9 | Migrate (new routes) |
| Legal Services (hub + 5) | 6 | Migrate (same routes) |
| Blog (list + detail) | 2 | Migrate (same routes) |
| Help Center (list + detail) | 2 | Migrate (same routes) |
| Guides (SEO pages) | 5 | Migrate (new routes) |
| Policy Research (hub + 5) | 6 | Migrate (same routes) |
| Resources | 3 | Migrate (same routes) |
| Legal/Policy pages | 5 | Migrate (same routes) |
| **Total** | **~50** | |

| Section | Pages | Status |
|---------|-------|--------|
| Dashboard | 10 | Removed |
| Auth | 5 | Removed |
| Visa | 12 | Deferred |
| Other (Careers, HomeNew, Rewards) | 3 | Removed |
| **Total removed/deferred** | **~30** | |
