# TBA, LLP Website Design Guidelines

## Design Approach: Reference-Based Professional Financial Services

**Primary References**: Stripe (modern financial UX) + Wealthfront (trust-building design) + Notion (clean educational interface)

**Core Principle**: Establish authority through sophisticated simplicity. The design must convey wisdom, stability, and modern expertise—balancing professional gravitas with approachable education.

## Color Palette

**Brand Identity Colors**:
- Primary Navy: `230 45% 20%` - Main brand color, headers, primary CTAs
- Deep Navy: `230 50% 15%` - Footer, dark sections, depth
- Accent Gold: `42 88% 55%` - Strategic highlights, hover states, premium badges
- Muted Gold: `42 25% 65%` - Subtle accents, borders, tier badges

**Neutrals & Backgrounds**:
- Pure White: `0 0% 100%` - Primary background
- Warm White: `42 20% 98%` - Alternate section backgrounds
- Light Gray: `220 15% 95%` - Cards, subtle borders
- Medium Gray: `220 10% 60%` - Secondary text
- Dark Text: `230 40% 25%` - Primary copy

**Semantic Colors**:
- Success Green: `142 70% 45%` - Confirmation states
- Trust Blue: `210 85% 55%` - Info highlights, links

## Typography

**Font Stack**:
- Primary: 'Inter' (Google Fonts) - Body text, UI elements
- Display: 'Playfair Display' (Google Fonts) - Headlines, section titles for sophistication

**Hierarchy**:
- Hero Headline: text-5xl md:text-6xl lg:text-7xl, font-display, font-bold
- Section Headlines: text-3xl md:text-4xl lg:text-5xl, font-display, font-semibold
- Subheadings: text-xl md:text-2xl, font-primary, font-medium
- Body Text: text-base md:text-lg, font-primary, leading-relaxed
- Small Text: text-sm, font-primary, tracking-wide (for labels, disclaimers)

## Layout System

**Spacing Primitives**: Use Tailwind units of 4, 6, 8, 12, 16, 20, 24 for consistent rhythm
- Section padding: py-16 md:py-24 lg:py-32
- Container padding: px-4 md:px-6 lg:px-8
- Component gaps: gap-6 md:gap-8 lg:gap-12
- Card padding: p-6 md:p-8

**Grid Structure**:
- Max content width: max-w-7xl mx-auto
- Prose content: max-w-4xl mx-auto
- Feature grids: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Two-column sections: grid-cols-1 lg:grid-cols-2

## Component Library

**Navigation**:
- Sticky header with backdrop blur (backdrop-blur-lg bg-white/90)
- Navy logo text with subtle gold accent
- Clean horizontal menu with smooth underline hover states (gold accent)
- Dual CTAs: "Enroll Now" (solid gold) + "Consultation" (navy outline)

**Hero Section**:
- Large professional hero image: Elegant office setting or subtle cityscape (New York/London skyline at dusk with warm lighting)
- Overlay gradient: from navy-900/60 to transparent
- Centered content with max-w-4xl
- Primary headline + subheading + two-button CTA group
- Subtle scroll indicator at bottom

**Cards & Containers**:
- Pricing tiers: White cards with subtle shadow, gold accent top border for featured tier
- Feature cards: bg-warm-white with hover lift effect (transform scale-105)
- Bordered cards for educational content with left accent stripe
- Service cards: Image + icon + title + description layout

**Buttons**:
- Primary: Solid gold background (bg-accent-gold) with navy text, rounded-lg
- Secondary: Navy outline with transparent background
- Ghost: Navy text with subtle hover background
- All buttons: px-8 py-3, font-medium, transition-all duration-300

**Forms**:
- Clean white inputs with light gray borders
- Focus states: gold ring with navy border
- Labels: uppercase text-sm tracking-wide in medium gray
- Submit button: Full-width primary gold button

**Pricing Tables**:
- Four-tier vertical cards layout on desktop (grid-cols-4)
- Stack to single column on mobile
- "Legacy Circle" tier: Featured with gold accent border and badge
- Clear price display with large numerals
- Benefit lists with checkmark icons (gold)

**Testimonials/Social Proof** (if added):
- Subtle quote cards with client photo (circular)
- Navy quotation marks as decorative element
- Company logos in grayscale with hover color

**Footer**:
- Deep navy background with white/light text
- Multi-column layout: About, Services, Resources, Legal
- Newsletter signup with inline form
- Gold accent dividers between sections
- Social links with subtle gold hover

## Images

**Hero Image**: Professional, sophisticated cityscape or modern office environment with warm lighting. Should convey stability and forward-thinking. Placement: Full-width hero section with overlay gradient (navy to transparent).

**About Section**: Portrait of Shane McDonald in professional setting, or team collaboration imagery. Placement: Right side of two-column about section.

**Services Section**: Abstract financial graphics, charts, or lifestyle imagery representing wealth and legacy. Placement: Alternating left/right in service feature blocks.

**Digital Academy**: Education-focused imagery—notebooks, modern workspace, digital learning environments. Placement: Header background or side accent images.

**No placeholder images**: Use solid navy or gold gradient backgrounds where images aren't immediately available.

## Page-Specific Layouts

**Homepage**:
- Hero with image + headline + dual CTA
- Trust indicators (values/principles) - 4-column grid
- Services overview - 3 feature cards
- Pricing preview (4 tiers) - link to full academy page
- Blog/insights preview - 3 recent articles
- Final CTA section with Calendly integration

**Digital Wealth Academy**:
- Dedicated hero: "Your Education Determines Your Outcome"
- Detailed 4-tier pricing comparison table
- Educational benefits section with icons
- Enrollment CTA with consultation alternative

**Contact/Consultation**:
- Split layout: Form (left) + Calendly embed (right) on desktop
- Prominent "Book Your Consultation" section with embedded Calendly widget
- Contact information sidebar with office hours, email, phone
- Trust badges: "No obligation", "Educational first"

**Legal/Disclosures**:
- Clean typographic layout with clear hierarchy
- Collapsible sections for different policies
- Download links for PDF versions
- Last updated timestamp

## Animations & Interactions

**Minimal Motion Approach**:
- Smooth scroll behavior for anchor links
- Subtle fade-in for sections on scroll (intersection observer)
- Card hover lifts: translateY(-4px) with shadow increase
- Button hover: slight scale (1.02) with color deepening
- No parallax, no heavy scroll-driven animations

**Micro-interactions**:
- Form input focus: smooth border color transition to gold
- Navigation link underlines: width transition from 0 to 100%
- Pricing tier hover: subtle glow effect on featured tier

## Accessibility & Performance

- Maintain WCAG AA contrast ratios (navy on white, white on navy)
- Focus visible states with 2px gold outline
- Semantic HTML structure with proper heading hierarchy
- Optimized image loading with lazy loading
- Mobile-first responsive design with touch-friendly tap targets (min 44px)

## Brand Differentiation

**Unique Elements**:
- Gold accent used sparingly for premium feel (5-10% of visual weight)
- Playfair Display for headlines creates sophisticated distinction from typical sans-serif financial sites
- Educational-first messaging throughout all CTAs
- Transparency section prominently featured vs. hidden in footer

This design balances professional authority with modern approachability—creating trust through sophisticated simplicity rather than corporate stuffiness.