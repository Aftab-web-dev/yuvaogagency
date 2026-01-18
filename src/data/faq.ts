import type { FAQItem } from '@/types'

export const faqItems: FAQItem[] = [
  {
    id: '1',
    question: 'What services do you offer?',
    answer: 'We offer a comprehensive range of digital services including web development, app development, digital marketing, UI/UX design, email marketing, flight ticket booking, visa processing, video editing, social media management, and poster design.',
    category: 'General',
  },
  {
    id: '2',
    question: 'How long does a typical project take?',
    answer: 'Project timelines vary depending on complexity. A simple website might take 2-4 weeks, while a complex web application could take 2-6 months. We provide detailed timelines during our initial consultation.',
    category: 'General',
  },
  {
    id: '4',
    question: 'Do you offer ongoing support and maintenance?',
    answer: 'Yes, we offer various support packages ranging from 1 month to 12 months. This includes bug fixes, security updates, content updates, and technical support.',
    category: 'Support',
  },
  {
    id: '5',
    question: 'What technologies do you use?',
    answer: 'We use modern technologies including React, Vue, Node.js, Python, TypeScript, React Native, Flutter, and various cloud services. We choose the best technology stack based on your project requirements.',
    category: 'Technical',
  },
  {
    id: '6',
    question: 'Can you help with existing projects?',
    answer: 'Absolutely! We can take over existing projects, perform code audits, fix bugs, add new features, or completely redesign and rebuild applications.',
    category: 'General',
  },
  {
    id: '7',
    question: 'How do you handle project communication?',
    answer: 'We use various tools like Slack, email, and project management platforms to keep you updated. You\'ll have regular meetings with your project manager and access to progress reports.',
    category: 'Process',
  },
  {
    id: '9',
    question: 'Do you sign NDAs?',
    answer: 'Yes, we\'re happy to sign Non-Disclosure Agreements before discussing your project details. We take confidentiality seriously.',
    category: 'Legal',
  },
  {
    id: '10',
    question: 'Can you help with SEO?',
    answer: 'Yes, SEO is a core part of our digital marketing services. We offer on-page optimization, technical SEO, content strategy, link building, and ongoing SEO maintenance.',
    category: 'Services',
  },
]

export const faqCategories = [...new Set(faqItems.map((item) => item.category))]
