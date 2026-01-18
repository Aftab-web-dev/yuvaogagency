import type { SiteConfig, NavItem } from '@/types'

export const siteConfig: SiteConfig = {
  name: 'Yuvaog',
  description: 'Professional digital agency offering web development, app development, digital marketing, UI/UX design, and more.',
  url: 'https://yuvaog.com',
  logo: '/assets/logo.png',
  contact: {
    email: 'info@yourdomain.com',
    phone: '+1 234 567 8900',
    whatsapp: '+1234567890',
    address: '123 Business Street, City, Country',
  },
  social: {
    facebook: 'https://facebook.com/youragency',
    twitter: 'https://twitter.com/youragency',
    instagram: 'https://instagram.com/youragency',
    linkedin: 'https://linkedin.com/company/youragency',
    youtube: 'https://youtube.com/@youragency',
  },
}

export const navigation: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'AI Implementation', href: '/services/ai-implementation' },
      { label: 'Web Development', href: '/services/web-development' },
      { label: 'App Development', href: '/services/app-development' },
      { label: 'Digital Marketing', href: '/services/digital-marketing' },
      { label: 'UI/UX Design', href: '/services/ui-ux-design' },
      { label: 'Email Marketing', href: '/services/email-marketing' },
      { label: 'Video Editing', href: '/services/video-editing' },
      { label: 'Social Media', href: '/services/social-media-management' },
    ]
  },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
]

export const footerLinks = {
  services: [
    { label: 'AI Implementation', href: '/services/ai-implementation' },
    { label: 'Web Development', href: '/services/web-development' },
    { label: 'App Development', href: '/services/app-development' },
    { label: 'Digital Marketing', href: '/services/digital-marketing' },
    { label: 'UI/UX Design', href: '/services/ui-ux-design' },
  ],
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Our Team', href: '/team' },
    { label: 'Testimonials', href: '/testimonials' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Contact', href: '/contact' },
  ],
  resources: [
    { label: 'Blog', href: '/blog' },
    { label: 'Portfolio', href: '/portfolio' },
  ],
}
