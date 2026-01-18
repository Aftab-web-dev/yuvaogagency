// Service types
export interface Service {
  id: string
  slug: string
  title: string
  shortDescription: string
  description: string
  icon: string
  features: string[]
  benefits: string[]
  image: string
  featured?: boolean
}

// Portfolio types
export interface PortfolioItem {
  id: string
  slug: string
  title: string
  category: string
  categorySlug: string
  description: string
  image: string
  technologies: string[]
  link?: string
  featured: boolean
}

// Testimonial types
export interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  content: string
  image: string
  rating: number
}

// Team member types
export interface TeamMember {
  id: string
  name: string
  role: string
  bio: string
  image: string
  social: {
    linkedin?: string
    twitter?: string
    github?: string
  }
}

// Blog types
export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  image: string
  author: string
  authorImage: string
  date: string
  readTime: string
  category: string
  tags: string[]
}

// FAQ types
export interface FAQItem {
  id: string
  question: string
  answer: string
  category: string
}

// Contact form types
export interface ContactFormData {
  name: string
  email: string
  phone?: string
  service: string
  message: string
}

// Site config types
export interface SiteConfig {
  name: string
  description: string
  url: string
  logo: string
  contact: {
    email: string
    phone: string
    whatsapp: string
    address: string
  }
  social: {
    facebook?: string
    twitter?: string
    instagram?: string
    linkedin?: string
    youtube?: string
  }
}

// Navigation types
export interface NavItem {
  label: string
  href: string
  children?: NavItem[]
}
