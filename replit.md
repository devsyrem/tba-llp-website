# TBA, LLP - Professional Financial Education Website

## Overview
A professional static website for TBA, LLP, a financial education and wealth strategy firm. Built with React, TypeScript, and Tailwind CSS, optimized for GitHub Pages hosting.

## Project Architecture

### Technology Stack
- **Frontend**: React 18 with TypeScript
- **Routing**: Wouter (client-side routing)
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Shadcn UI
- **Build Tool**: Vite
- **Deployment**: GitHub Pages (static hosting)

### Design System
- **Primary Colors**: Navy (#230 45% 20%) and Gold (#42 88% 55%)
- **Typography**: Inter (body) and Playfair Display (headings)
- **Design Philosophy**: Sophisticated simplicity, professional authority with modern approachability

## Pages & Features

### 1. Home Page (/)
- Hero section with gradient background
- Core values display
- Services overview
- Pricing tiers preview
- CTA sections

### 2. About Page (/about)
- Company story and mission
- Core values with icons
- Vision statement
- Founder information (Shane McDonald)

### 3. Services Page (/services)
- Digital Wealth Education
- Insurance & Legacy Planning
- Advisory Services (coming soon)
- Cross-Border Wealth (future offering)

### 4. Digital Wealth Academy (/academy)
- Four pricing tiers:
  - Foundations Package ($1,250)
  - Momentum Package ($1,850)
  - Growth Package ($2,450)
  - Legacy Circle ($3,050) - Featured
- Educational disclosure
- Enrollment CTAs

### 5. Resources Page (/resources)
- Blog/Article preview ("The Mind of Money")
- Topic categories
- Financial education content

### 6. Contact Page (/contact)
- Contact form
- Calendly integration for scheduling consultations
- Trust indicators
- Email: info@tballp.com

### 7. Legal Page (/legal)
- Legal disclosures
- Privacy policy
- Refund policy
- Client agreement

## Key Features

### Calendly Integration
The contact page includes an embedded Calendly widget for direct consultation booking. To configure:
1. Update the `data-url` in `client/src/pages/Contact.tsx`
2. Replace `your-calendly-link` with actual Calendly scheduling URL

### Deployment
- **Recommended**: GitHub Pages with custom domain (tballp.com)
- Configured with SPA routing support
- 404.html redirect for proper client-side routing
- .nojekyll file for GitHub Pages compatibility
- **Note**: Repository-only GitHub Pages (username.github.io/repo) requires custom domain
- See DEPLOYMENT.md for full instructions

### Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px)
- Mobile menu for navigation
- Optimized layouts for all screen sizes

### SEO Optimization
- Meta tags for description and keywords
- Semantic HTML structure
- Proper heading hierarchy
- Open Graph tags ready for implementation

## Development

### Local Development
```bash
npm run dev
```
Starts development server at http://localhost:5000

### Build for Production
```bash
npm run build
```
Creates static build in `dist/public/`

### Deploy to GitHub Pages
```bash
npx gh-pages -d dist/public
```

## Brand Guidelines

### Color Palette
- **Primary Navy**: HSL(230, 45%, 20%)
- **Deep Navy**: HSL(230, 50%, 15%)
- **Accent Gold**: HSL(42, 88%, 55%)
- **Warm White**: HSL(42, 20%, 98%)
- **Light Gray**: HSL(220, 15%, 95%)

### Typography Scale
- Hero: 4xl-7xl (font-serif, bold)
- Section Headers: 3xl-5xl (font-serif, semibold)
- Subheadings: xl-2xl (font-sans, medium)
- Body: base-lg (font-sans)

### Component Usage
- Navigation: Sticky header with backdrop blur
- Cards: Hover elevation effects
- Buttons: Accent gold primary, outline secondary
- Forms: Clean inputs with gold focus ring

## Important Notes

### Educational Firm Disclaimer
TBA, LLP operates as an educational firm. Investment advisory services are not offered until Series 65 registration is complete. All programs are educational in nature.

### Contact Information
- Email: info@tballp.com
- Founder: Shane McDonald
- Location: Mississippi (expanding to London)

### Future Enhancements
- Advisory Services (post Series 65 registration)
- Cross-Border Wealth services (U.S.-U.K.)
- Blog/CMS integration for content management
- Newsletter signup functionality

## File Structure
```
client/
├── src/
│   ├── components/
│   │   ├── Navigation.tsx
│   │   ├── Footer.tsx
│   │   └── ui/ (shadcn components)
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   ├── Academy.tsx
│   │   ├── Resources.tsx
│   │   ├── Contact.tsx
│   │   └── Legal.tsx
│   ├── App.tsx
│   └── index.css
├── public/
│   ├── 404.html
│   └── .nojekyll
└── index.html

DEPLOYMENT.md - GitHub Pages deployment guide
design_guidelines.md - Design system documentation
```

## User Preferences & Notes
- Static website - no backend required
- Must be hostable on GitHub Pages
- Calendly integration for consultation booking
- Professional, sophisticated design
- Navy and gold color scheme
- Educational focus, not sales-focused
