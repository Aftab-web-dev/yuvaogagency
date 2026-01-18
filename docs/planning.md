# Project Planning Document

## Project Overview

### Project Name
Digital Agency Website

### Description
A professional, modern website for a digital agency offering 10 services including web development, app development, digital marketing, UI/UX design, email marketing, flight ticket booking, visa processing, video editing, social media management, and poster design. The website features animated interactions, interactive portfolio filtering, and easy client contact methods.

### Problem Statement
The agency needs a professional online presence that:
- Showcases all 10 services effectively with dedicated pages
- Makes it easy for potential clients to contact and inquire
- Builds trust through portfolio, testimonials, and team showcase
- Ranks well on search engines (SEO optimized)
- Stands out with professional dark theme and smooth animations

### Target Users
- **Potential Clients**: Businesses/individuals looking for digital services
- **Existing Clients**: Returning visitors checking updates/portfolio

---

## Technical Stack

### Frontend (Static Site)
| Technology | Purpose | Version |
|------------|---------|---------|
| React | UI Framework | 18.x |
| Vite | Build Tool | 5.x |
| TypeScript | Type Safety | 5.x |
| Tailwind CSS | Styling | 3.x |
| React Router DOM | Routing | 6.x |
| Framer Motion | Animations | 11.x |
| React Helmet Async | SEO Meta Tags | 2.x |
| React Hook Form | Form Handling | 7.x |
| Zod | Validation | 3.x |
| Lucide React | Icons | Latest |
| EmailJS | Contact Form | 4.x |

### Package Manager
- **pnpm** (preferred) or yarn
- **NOT npm**

### Deployment
- Platform: Hostinger (static hosting)
- Build Output: Static HTML/CSS/JS files

---

## Architecture

### System Architecture (Static Site)
```
┌─────────────────────────────────────────────────────────┐
│                      CLIENT BROWSER                      │
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │              React SPA Application               │   │
│  │  ┌─────────┐ ┌──────────┐ ┌─────────────────┐  │   │
│  │  │ Router  │ │  Pages   │ │   Components    │  │   │
│  │  └─────────┘ └──────────┘ └─────────────────┘  │   │
│  │  ┌─────────┐ ┌──────────┐ ┌─────────────────┐  │   │
│  │  │  Hooks  │ │   Data   │ │     Utils       │  │   │
│  │  └─────────┘ └──────────┘ └─────────────────┘  │   │
│  └─────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────┘
                           │
                           ▼
              ┌────────────────────────┐
              │   External Services    │
              │  ┌──────────────────┐  │
              │  │     EmailJS      │  │ ← Contact Form
              │  └──────────────────┘  │
              │  ┌──────────────────┐  │
              │  │    WhatsApp      │  │ ← Click to Chat
              │  └──────────────────┘  │
              └────────────────────────┘
```

### Folder Structure
```
agencywebsite/
├── .session/                    # Session state (AI tracking)
├── .aiautomations/              # AI prompts and standards
├── docs/                        # Documentation
│   ├── requirements.md
│   ├── risk-assessment.md
│   ├── planning.md
│   └── execution.md
├── public/                      # Static assets
│   ├── favicon.ico
│   ├── robots.txt
│   ├── sitemap.xml
│   └── images/
│       ├── logo/
│       ├── team/
│       ├── portfolio/
│       └── services/
├── src/
│   ├── components/              # Reusable components
│   │   ├── ui/                  # Base UI components
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Input.tsx
│   │   │   ├── Badge.tsx
│   │   │   └── index.ts
│   │   ├── layout/              # Layout components
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Navbar.tsx
│   │   │   ├── MobileMenu.tsx
│   │   │   └── Layout.tsx
│   │   ├── sections/            # Page sections
│   │   │   ├── Hero.tsx
│   │   │   ├── ServicesGrid.tsx
│   │   │   ├── PortfolioPreview.tsx
│   │   │   ├── Testimonials.tsx
│   │   │   ├── Stats.tsx
│   │   │   ├── CTA.tsx
│   │   │   └── Newsletter.tsx
│   │   ├── forms/               # Form components
│   │   │   ├── ContactForm.tsx
│   │   │   └── NewsletterForm.tsx
│   │   └── shared/              # Shared components
│   │       ├── SEO.tsx
│   │       ├── AnimatedSection.tsx
│   │       ├── ServiceCard.tsx
│   │       ├── PortfolioCard.tsx
│   │       ├── TeamCard.tsx
│   │       ├── TestimonialCard.tsx
│   │       ├── BlogCard.tsx
│   │       ├── FAQ.tsx
│   │       ├── BackToTop.tsx
│   │       └── WhatsAppButton.tsx
│   ├── pages/                   # Page components
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   ├── ServiceDetail.tsx
│   │   ├── Portfolio.tsx
│   │   ├── Testimonials.tsx
│   │   ├── Team.tsx
│   │   ├── Blog.tsx
│   │   ├── BlogPost.tsx
│   │   ├── Pricing.tsx
│   │   ├── Contact.tsx
│   │   ├── FAQ.tsx
│   │   └── NotFound.tsx
│   ├── data/                    # Static data (JSON-like)
│   │   ├── services.ts
│   │   ├── portfolio.ts
│   │   ├── testimonials.ts
│   │   ├── team.ts
│   │   ├── blog.ts
│   │   ├── pricing.ts
│   │   ├── faq.ts
│   │   └── siteConfig.ts
│   ├── hooks/                   # Custom hooks
│   │   ├── useScrollAnimation.ts
│   │   └── useMediaQuery.ts
│   ├── lib/                     # Utilities
│   │   ├── utils.ts
│   │   ├── emailjs.ts
│   │   └── seo.ts
│   ├── types/                   # TypeScript types
│   │   └── index.ts
│   ├── styles/                  # Global styles
│   │   └── globals.css
│   ├── App.tsx                  # Main App component
│   ├── main.tsx                 # Entry point
│   └── vite-env.d.ts
├── .env.example                 # Environment template
├── .gitignore
├── index.html
├── package.json
├── pnpm-lock.yaml
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
└── README.md
```

---

## Pages & Routes

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Hero, Services Overview, Portfolio Preview, Testimonials, Stats, CTA |
| About | `/about` | Company Story, Mission, Vision, Values |
| Services (All) | `/services` | Grid of all 10 services |
| Web Development | `/services/web-development` | Service detail page |
| App Development | `/services/app-development` | Service detail page |
| Digital Marketing | `/services/digital-marketing` | Service detail page |
| UI/UX Design | `/services/ui-ux-design` | Service detail page |
| Email Marketing | `/services/email-marketing` | Service detail page |
| Flight Booking | `/services/flight-ticket-booking` | Service detail page |
| Visa Processing | `/services/visa-processing` | Service detail page |
| Video Editing | `/services/video-editing` | Service detail page |
| Social Media | `/services/social-media-management` | Service detail page |
| Poster Design | `/services/poster-design` | Service detail page |
| Portfolio | `/portfolio` | Filterable project grid |
| Testimonials | `/testimonials` | Client reviews |
| Team | `/team` | Team members |
| Blog | `/blog` | Blog posts list |
| Blog Post | `/blog/:slug` | Individual blog article |
| Pricing | `/pricing` | Service packages |
| Contact | `/contact` | Form, WhatsApp, Phone, Map |
| FAQ | `/faq` | Accordion Q&A |
| 404 | `*` | Not found page |

---

## Development Phases

### Phase 1: Foundation (Setup & Core)
- [x] Project initialization with Vite + React + TypeScript
- [ ] Tailwind CSS configuration with dark theme
- [ ] Folder structure creation
- [ ] Base UI components
- [ ] Layout components (Header, Footer, Navbar)
- [ ] Routing setup
- [ ] SEO component setup

### Phase 2: Data & Types
- [ ] TypeScript interfaces/types
- [ ] Static data files (services, portfolio, etc.)
- [ ] Site configuration

### Phase 3: Pages (Core)
- [ ] Home page with all sections
- [ ] About page
- [ ] Services overview page
- [ ] 10 Individual service pages
- [ ] Contact page with form
- [ ] 404 page

### Phase 4: Pages (Secondary)
- [ ] Portfolio page with filters
- [ ] Testimonials page
- [ ] Team page
- [ ] Blog list page
- [ ] Blog post page
- [ ] Pricing page
- [ ] FAQ page

### Phase 5: Interactivity & Polish
- [ ] Framer Motion animations
- [ ] Scroll animations
- [ ] WhatsApp floating button
- [ ] Back to top button
- [ ] Contact form with EmailJS
- [ ] Mobile responsiveness fine-tuning

### Phase 6: SEO & Optimization
- [ ] Meta tags for all pages
- [ ] Open Graph tags
- [ ] Sitemap generation
- [ ] robots.txt
- [ ] Image optimization
- [ ] Performance optimization

### Phase 7: Deployment
- [ ] Build testing
- [ ] Hostinger deployment
- [ ] SPA routing configuration

---

## Color System (Dark Theme)

```css
/* Tailwind Config - Easily Changeable */
colors: {
  primary: {
    50:  '#eef2ff',
    100: '#e0e7ff',
    200: '#c7d2fe',
    300: '#a5b4fc',
    400: '#818cf8',
    500: '#6366f1',  /* Main primary */
    600: '#4f46e5',
    700: '#4338ca',
    800: '#3730a3',
    900: '#312e81',
    950: '#1e1b4b',
  },
  dark: {
    50:  '#f8fafc',
    100: '#f1f5f9',
    200: '#e2e8f0',
    300: '#cbd5e1',
    400: '#94a3b8',
    500: '#64748b',
    600: '#475569',
    700: '#334155',
    800: '#1e293b',  /* Surface */
    900: '#0f172a',  /* Background */
    950: '#020617',  /* Darker background */
  },
  accent: '#22d3ee',  /* Cyan accent */
}
```

---

## Component Specifications

### Animated Service Card
```
- Hover: Scale up slightly, glow effect
- Icon animation on hover
- Gradient border on hover
- Smooth transition (300ms)
```

### Portfolio Filter
```
- Categories: All, Web, App, Marketing, Design, etc.
- Animated filter transition
- Grid layout with staggered reveal
```

### Contact Form Fields
```
- Name (required)
- Email (required, validated)
- Phone (optional)
- Service Interest (dropdown)
- Message (required, textarea)
- Submit with loading state
```

---

## Milestones

| Milestone | Description | Deliverables |
|-----------|-------------|--------------|
| M1 | Project Setup | Vite project, Tailwind, folder structure |
| M2 | Layout Complete | Header, Footer, Navbar, Layout working |
| M3 | Home Page Complete | All home sections working |
| M4 | All Pages Complete | All 20+ pages built |
| M5 | Animations Complete | Framer Motion integrated |
| M6 | Forms Working | Contact form sending emails |
| M7 | SEO Complete | All meta tags, sitemap |
| M8 | Production Ready | Deployed to Hostinger |

---

## Next Step

Ready to create execution plan and start building.

---

*Document Created: 2026-01-18*
*Agent: Planner Agent*
