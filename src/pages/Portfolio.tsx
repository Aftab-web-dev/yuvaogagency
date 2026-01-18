import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, ArrowRight } from 'lucide-react'
import { Container, Button, Card, Badge } from '@/components/ui'
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
      <section className="section-padding bg-gradient-to-b from-dark-900 to-dark-950">
        <Container>
          <AnimatedSection className="text-center max-w-4xl mx-auto">
            <span className="text-primary-400 font-medium mb-4 block">Our Work</span>
            <h1 className="heading-xl mb-6">
              Our <span className="gradient-text">Portfolio</span>
            </h1>
            <p className="text-xl text-dark-300">
              Explore our latest projects and see how we've helped businesses
              achieve their digital goals.
            </p>
          </AnimatedSection>
        </Container>
      </section>

      {/* Filter & Grid */}
      <section className="section-padding">
        <Container>
          {/* Category Filters */}
          <AnimatedSection className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category.slug}
                onClick={() => setActiveCategory(category.slug)}
                className={cn(
                  'px-6 py-2 rounded-full font-medium transition-all',
                  activeCategory === category.slug
                    ? 'bg-primary-600 text-white'
                    : 'bg-dark-800 text-dark-300 hover:bg-dark-700 hover:text-white'
                )}
              >
                {category.label}
              </button>
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
                  <Card hover className="h-full group overflow-hidden p-0">
                    {/* Image */}
                    <div className="relative aspect-video bg-dark-700 overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-6xl font-bold text-dark-600">
                          {project.title.charAt(0)}
                        </span>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:bg-white/20"
                        >
                          <ExternalLink className="w-5 h-5 text-white" />
                        </a>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <Badge variant="primary" size="sm" className="mb-3">
                        {project.category}
                      </Badge>
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {project.title}
                      </h3>
                      <p className="text-dark-400 mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} size="sm">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <p className="text-dark-400 text-lg">
                No projects found in this category.
              </p>
            </div>
          )}
        </Container>
      </section>

      {/* CTA */}
      <section className="section-padding bg-dark-900/50">
        <Container>
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <h2 className="heading-lg mb-4">Have a Project in Mind?</h2>
            <p className="text-dark-400 text-lg mb-8">
              Let's work together to bring your vision to life.
            </p>
            <Button size="lg" asChild>
              <Link to="/contact">
                Start Your Project <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </AnimatedSection>
        </Container>
      </section>
    </>
  )
}
