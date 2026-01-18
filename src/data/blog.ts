import type { BlogPost } from '@/types'

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'future-of-web-development-2024',
    title: 'The Future of Web Development in 2024',
    excerpt: 'Explore the latest trends and technologies shaping the future of web development, from AI integration to new frameworks.',
    content: `
# The Future of Web Development in 2024

The web development landscape is constantly evolving, and 2024 brings exciting new possibilities for developers and businesses alike.

## AI-Powered Development

Artificial intelligence is revolutionizing how we build websites. From code completion to automated testing, AI tools are making developers more productive than ever.

## Modern Frameworks

React, Vue, and Svelte continue to dominate, but new players like Solid.js and Qwik are gaining traction with their innovative approaches to performance.

## The Rise of Edge Computing

Edge computing is changing how we think about server-side rendering and API responses, bringing content closer to users for faster experiences.

## Conclusion

Staying updated with these trends is crucial for any developer or business looking to stay competitive in the digital landscape.
    `,
    image: '/images/blog/web-development.jpg',
    author: 'Alex Johnson',
    authorImage: '/images/team/alex.jpg',
    date: '2024-01-15',
    readTime: '5 min read',
    category: 'Web Development',
    tags: ['Web Development', 'Technology', 'Trends'],
  },
  {
    id: '2',
    slug: 'seo-best-practices-2024',
    title: 'SEO Best Practices for 2024',
    excerpt: 'Learn the latest SEO strategies to improve your website ranking and drive more organic traffic.',
    content: `
# SEO Best Practices for 2024

Search engine optimization continues to evolve, and staying ahead of the curve is essential for digital success.

## Core Web Vitals

Google's Core Web Vitals remain crucial ranking factors. Focus on LCP, FID, and CLS to improve your scores.

## Content Quality

High-quality, helpful content that answers user questions is more important than ever.

## Mobile-First Indexing

With mobile traffic dominating, ensuring your site is mobile-optimized is non-negotiable.
    `,
    image: '/images/blog/seo.jpg',
    author: 'Emily Davis',
    authorImage: '/images/team/emily.jpg',
    date: '2024-01-10',
    readTime: '7 min read',
    category: 'Digital Marketing',
    tags: ['SEO', 'Marketing', 'Digital'],
  },
  {
    id: '3',
    slug: 'mobile-app-design-trends',
    title: 'Mobile App Design Trends to Watch',
    excerpt: 'Discover the latest mobile app design trends that are shaping user experiences in 2024.',
    content: `
# Mobile App Design Trends to Watch

Mobile app design is evolving rapidly, with new trends emerging that prioritize user experience and engagement.

## Minimalist Design

Less is more. Clean, minimalist interfaces are gaining popularity for their clarity and ease of use.

## Dark Mode

Dark mode isn't just a trend—it's becoming an expectation. Users appreciate the option for reduced eye strain.

## Micro-interactions

Subtle animations and feedback make apps feel more alive and responsive to user actions.
    `,
    image: '/images/blog/mobile-design.jpg',
    author: 'Michael Chen',
    authorImage: '/images/team/michael.jpg',
    date: '2024-01-05',
    readTime: '6 min read',
    category: 'Design',
    tags: ['Design', 'Mobile', 'UX'],
  },
  {
    id: '4',
    slug: 'social-media-marketing-strategies',
    title: 'Effective Social Media Marketing Strategies',
    excerpt: 'Boost your social media presence with these proven marketing strategies for 2024.',
    content: `
# Effective Social Media Marketing Strategies

Social media continues to be a powerful tool for brand building and customer engagement.

## Video Content Dominance

Short-form video content on platforms like TikTok and Instagram Reels is driving engagement.

## Authentic Engagement

Users are craving authentic interactions. Focus on building genuine connections with your audience.

## Influencer Partnerships

Strategic influencer collaborations can amplify your reach and credibility.
    `,
    image: '/images/blog/social-media.jpg',
    author: 'Emily Davis',
    authorImage: '/images/team/emily.jpg',
    date: '2024-01-01',
    readTime: '5 min read',
    category: 'Social Media',
    tags: ['Social Media', 'Marketing', 'Strategy'],
  },
]

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}

export function getRecentPosts(count: number = 3): BlogPost[] {
  return blogPosts.slice(0, count)
}
