import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown, ArrowRight, MessageCircle } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { Container, Button, Card } from '@/components/ui'
import { SEO, AnimatedSection } from '@/components/shared'
import { faqItems, faqCategories } from '@/data/faq'
import { cn } from '@/lib/utils'

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null)
  const [activeCategory, setActiveCategory] = useState('all')

  const filteredFaqs =
    activeCategory === 'all'
      ? faqItems
      : faqItems.filter((item) => item.category === activeCategory)

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id)
  }

  return (
    <>
      <SEO
        title="FAQ"
        description="Find answers to frequently asked questions about our services, process, and more."
      />

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-dark-900 to-dark-950">
        <Container>
          <AnimatedSection className="text-center max-w-4xl mx-auto">
            <span className="text-primary-400 font-medium mb-4 block">FAQ</span>
            <h1 className="heading-xl mb-6">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h1>
            <p className="text-xl text-dark-300">
              Find answers to common questions about our services and process.
            </p>
          </AnimatedSection>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="section-padding">
        <Container size="md">
          {/* Category Filters */}
          <AnimatedSection className="flex flex-wrap justify-center gap-3 mb-12">
            <button
              onClick={() => setActiveCategory('all')}
              className={cn(
                'px-6 py-2 rounded-full font-medium transition-all',
                activeCategory === 'all'
                  ? 'bg-primary-600 text-white'
                  : 'bg-dark-800 text-dark-300 hover:bg-dark-700 hover:text-white'
              )}
            >
              All
            </button>
            {faqCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  'px-6 py-2 rounded-full font-medium transition-all',
                  activeCategory === category
                    ? 'bg-primary-600 text-white'
                    : 'bg-dark-800 text-dark-300 hover:bg-dark-700 hover:text-white'
                )}
              >
                {category}
              </button>
            ))}
          </AnimatedSection>

          {/* FAQ Accordion */}
          <div className="space-y-4">
            {filteredFaqs.map((faq, index) => (
              <AnimatedSection key={faq.id} delay={index * 0.05}>
                <Card className="overflow-hidden p-0">
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full flex items-center justify-between p-6 text-left"
                  >
                    <span className="text-lg font-medium text-white pr-4">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={cn(
                        'w-5 h-5 text-dark-400 transition-transform flex-shrink-0',
                        openId === faq.id && 'rotate-180'
                      )}
                    />
                  </button>
                  <AnimatePresence>
                    {openId === faq.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="px-6 pb-6 text-dark-400">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      {/* Still have questions */}
      <section className="section-padding bg-dark-900/50">
        <Container>
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <MessageCircle className="w-12 h-12 text-primary-400 mx-auto mb-4" />
            <h2 className="heading-lg mb-4">Still Have Questions?</h2>
            <p className="text-dark-400 text-lg mb-8">
              Can't find the answer you're looking for? Our team is here to help.
            </p>
            <Button size="lg" asChild>
              <Link to="/contact">
                Contact Us <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </AnimatedSection>
        </Container>
      </section>
    </>
  )
}
