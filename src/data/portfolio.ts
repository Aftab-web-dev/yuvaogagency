import type { PortfolioItem } from '@/types'

export const portfolio: PortfolioItem[] = [
  {
    id: '1',
    slug: 'ecommerce-platform',
    title: 'Modern E-commerce Platform',
    category: 'Web Development',
    categorySlug: 'web-development',
    description: 'A full-featured e-commerce platform with advanced product management, payment integration, and analytics dashboard.',
    image: '/images/portfolio/ecommerce.jpg',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    link: 'https://example.com',
    featured: true,
  },
  {
    id: '2',
    slug: 'fitness-app',
    title: 'Fitness Tracking App',
    category: 'App Development',
    categorySlug: 'app-development',
    description: 'A cross-platform fitness app with workout tracking, nutrition planning, and social features.',
    image: '/images/portfolio/fitness-app.jpg',
    technologies: ['React Native', 'Firebase', 'Node.js'],
    link: 'https://example.com',
    featured: true,
  },
  {
    id: '3',
    slug: 'restaurant-branding',
    title: 'Restaurant Brand Identity',
    category: 'UI/UX Design',
    categorySlug: 'ui-ux-design',
    description: 'Complete brand identity and UI design for a modern restaurant chain.',
    image: '/images/portfolio/restaurant.jpg',
    technologies: ['Figma', 'Adobe Creative Suite'],
    featured: true,
  },
  {
    id: '4',
    slug: 'saas-dashboard',
    title: 'SaaS Analytics Dashboard',
    category: 'Web Development',
    categorySlug: 'web-development',
    description: 'A comprehensive analytics dashboard for a B2B SaaS company.',
    image: '/images/portfolio/saas-dashboard.jpg',
    technologies: ['Vue.js', 'D3.js', 'Python', 'PostgreSQL'],
    featured: false,
  },
  {
    id: '5',
    slug: 'travel-marketing',
    title: 'Travel Agency Campaign',
    category: 'Digital Marketing',
    categorySlug: 'digital-marketing',
    description: 'Multi-channel digital marketing campaign that increased bookings by 150%.',
    image: '/images/portfolio/travel-marketing.jpg',
    technologies: ['Google Ads', 'Facebook Ads', 'SEO'],
    featured: true,
  },
  {
    id: '6',
    slug: 'delivery-app',
    title: 'Food Delivery App',
    category: 'App Development',
    categorySlug: 'app-development',
    description: 'On-demand food delivery app with real-time tracking and payment integration.',
    image: '/images/portfolio/delivery-app.jpg',
    technologies: ['Flutter', 'Firebase', 'Google Maps'],
    featured: false,
  },
  {
    id: '7',
    slug: 'corporate-video',
    title: 'Corporate Brand Video',
    category: 'Video Editing',
    categorySlug: 'video-editing',
    description: 'High-impact corporate video showcasing company culture and values.',
    image: '/images/portfolio/corporate-video.jpg',
    technologies: ['Premiere Pro', 'After Effects'],
    featured: false,
  },
  {
    id: '8',
    slug: 'social-media-campaign',
    title: 'Social Media Growth',
    category: 'Social Media',
    categorySlug: 'social-media-management',
    description: 'Social media strategy that grew followers from 5K to 100K in 6 months.',
    image: '/images/portfolio/social-campaign.jpg',
    technologies: ['Instagram', 'TikTok', 'Content Strategy'],
    featured: true,
  },
]

export const categories = [
  { slug: 'all', label: 'All Projects' },
  { slug: 'web-development', label: 'Web Development' },
  { slug: 'app-development', label: 'App Development' },
  { slug: 'ui-ux-design', label: 'UI/UX Design' },
  { slug: 'digital-marketing', label: 'Digital Marketing' },
  { slug: 'video-editing', label: 'Video Editing' },
  { slug: 'social-media-management', label: 'Social Media' },
]

export function getPortfolioBySlug(slug: string): PortfolioItem | undefined {
  return portfolio.find((item) => item.slug === slug)
}

export function getFeaturedPortfolio(): PortfolioItem[] {
  return portfolio.filter((item) => item.featured)
}
