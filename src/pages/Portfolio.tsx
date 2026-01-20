import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, ArrowRight, Sparkles } from 'lucide-react'
import { Container, Button, Badge } from '@/components/ui'
import { SEO, AnimatedSection } from '@/components/shared'
import { portfolio, categories } from '@/data/portfolio'
import { cn } from '@/lib/utils'

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('all')

  const filteredProjects =
    activeCategory === 'all'
      ? portfolio
      : portfolio.filter((item) => item.categorySlug === activeCategory)

  return (
    <>
      <SEO
        title="Portfolio"
        description="Explore our portfolio of successful projects. See how we've helped businesses transform through web development, app development, and digital marketing."
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-20 left-1/4 w-96 h-96 rounded-full bg-accent/20 blur-3xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-accent/10 blur-3xl"
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>

        <Container className="relative">
          <AnimatedSection className="text-center max-w-4xl mx-auto">
            <motion.span
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Sparkles className="w-4 h-4" />
              Our Work
            </motion.span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              Our <span className="text-accent">Portfolio</span>
            </h1>
            <p className="text-xl text-white/60">
              Explore our latest projects and see how we've helped businesses
              achieve their digital goals.
            </p>
          </AnimatedSection>
        </Container>
      </section>

      {/* Filter & Grid */}
      <section className="py-20">
        <Container>
          {/* Category Filters */}
          <AnimatedSection className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <motion.button
                key={category.slug}
                onClick={() => setActiveCategory(category.slug)}
                className={cn(
                  'px-6 py-2.5 rounded-full font-medium transition-all duration-300',
                  activeCategory === category.slug
                    ? 'bg-accent text-black'
                    : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white border border-white/10'
                )}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.label}
              </motion.button>
            ))}
          </AnimatedSection>

          {/* Projects Grid */}
          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="h-full group overflow-hidden rounded-2xl bg-white/5 border border-white/10 hover:border-accent/30 transition-all duration-300">
                    {/* Image */}
                    <div className="relative aspect-video bg-[#1a1a1a] overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-6xl font-bold text-white/10">
                          {project.title.charAt(0)}
                        </span>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:bg-accent/20 border border-white/10"
                        >
                          <ExternalLink className="w-5 h-5 text-white" />
                        </a>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <Badge className="mb-3 bg-accent/10 text-accent border-accent/20">
                        {project.category}
                      </Badge>
                      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-accent transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-white/60 mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 text-xs rounded-full bg-white/5 text-white/50 border border-white/10"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <p className="text-white/60 text-lg">
                No projects found in this category.
              </p>
            </div>
          )}
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white/[0.02]">
        <Container>
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Have a Project in Mind?</h2>
            <p className="text-white/60 text-lg mb-8">
              Let's work together to bring your vision to life.
            </p>
            <Button size="lg" asChild className="group">
              <Link to="/contact">
                Start Your Project
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </AnimatedSection>
        </Container>
      </section>
    </>
  )
}
