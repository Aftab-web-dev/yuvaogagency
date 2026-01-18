import { useParams, Link, Navigate } from 'react-router-dom'
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  Globe,
  Smartphone,
  TrendingUp,
  Palette,
  Mail,
  Video,
  Users,
  Brain,
  Sparkles,
} from 'lucide-react'
import { motion } from 'framer-motion'
import { Container, Button } from '@/components/ui'
import { SEO, AnimatedSection } from '@/components/shared'
import { getServiceBySlug, services } from '@/data/services'

const iconMap: Record<string, React.ElementType> = {
  Globe,
  Smartphone,
  TrendingUp,
  Palette,
  Mail,
  Video,
  Users,
  Brain,
}

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>()
  const service = slug ? getServiceBySlug(slug) : undefined

  if (!service) {
    return <Navigate to="/services" replace />
  }

  const Icon = iconMap[service.icon] || Globe

  // Get related services (excluding current)
  const relatedServices = services
    .filter((s) => s.id !== service.id)
    .slice(0, 3)

  return (
    <>
      <SEO
        title={service.title}
        description={service.description}
      />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-[var(--background)]">
          <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-accent/5 blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-accent/3 blur-3xl" />
        </div>

        <Container className="relative z-10 py-20">
          <AnimatedSection>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-[var(--foreground-muted)] hover:text-accent transition-colors mb-8 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Services
            </Link>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                {service.featured && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30 mb-6"
                  >
                    <Sparkles className="w-4 h-4 text-accent" />
                    <span className="text-accent text-sm font-medium">Featured Service</span>
                  </motion.div>
                )}

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="w-20 h-20 rounded-2xl bg-accent/10 border border-[var(--border)] flex items-center justify-center mb-6"
                >
                  <Icon className="w-10 h-10 text-accent" />
                </motion.div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--foreground)] mb-6 leading-tight">
                  {service.title}
                </h1>
                <p className="text-xl text-[var(--foreground-muted)] mb-8 leading-relaxed">{service.description}</p>

                <Button size="lg" asChild>
                  <Link to="/contact">
                    Get Started <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
              </div>

              {/* Animated Visual */}
              <div className="relative">
                <div className="absolute inset-0 bg-accent/10 rounded-3xl blur-3xl" />

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="relative"
                >
                  <div className="relative aspect-square max-w-md mx-auto rounded-3xl bg-[var(--card-bg)] border border-[var(--border)] overflow-hidden p-8">
                    {/* Animated Rings */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        className="absolute w-48 h-48 rounded-full border border-accent/20"
                        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.2, 0.5] }}
                        transition={{ duration: 3, repeat: Infinity }}
                      />
                      <motion.div
                        className="absolute w-64 h-64 rounded-full border border-accent/10"
                        animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.1, 0.3] }}
                        transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
                      />
                    </div>

                    {/* Center Icon */}
                    <div className="relative z-10 h-full flex flex-col items-center justify-center">
                      <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                        className="relative"
                      >
                        <div className="absolute inset-0 bg-accent blur-2xl opacity-30" />
                        <div className="relative w-32 h-32 rounded-2xl bg-accent flex items-center justify-center shadow-2xl">
                          <Icon className="w-16 h-16 text-white" />
                        </div>
                      </motion.div>

                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="mt-6 text-[var(--foreground-muted)] text-center font-medium"
                      >
                        {service.shortDescription}
                      </motion.p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </AnimatedSection>
        </Container>
      </section>

      {/* Features */}
      <section className="section-padding bg-[var(--background-secondary)]">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16">
            <AnimatedSection direction="left">
              <span className="text-accent font-medium mb-4 block">What We Offer</span>
              <h2 className="heading-lg mb-6 text-[var(--foreground)]">Key Features</h2>
              <p className="text-[var(--foreground-muted)] text-lg mb-8">
                Our {service.title.toLowerCase()} service includes everything you need
                to succeed in today's competitive market.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {service.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-[var(--foreground)]">{feature}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <span className="text-accent font-medium mb-4 block">Why Choose Us</span>
              <h2 className="heading-lg mb-6 text-[var(--foreground)]">Benefits</h2>
              <p className="text-[var(--foreground-muted)] text-lg mb-8">
                Partnering with us for {service.title.toLowerCase()} brings numerous
                advantages to your business.
              </p>

              <div className="space-y-4">
                {service.benefits.map((benefit, index) => (
                  <div key={benefit} className="flex items-center gap-4 p-4 rounded-xl bg-[var(--card-bg)] border border-[var(--border)]">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-accent font-bold">{index + 1}</span>
                    </div>
                    <span className="text-[var(--foreground)]">{benefit}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      {/* Process */}
      <section className="section-padding">
        <Container>
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent font-medium mb-4 block">Our Process</span>
            <h2 className="heading-lg mb-4 text-[var(--foreground)]">How We Work</h2>
            <p className="text-[var(--foreground-muted)] text-lg">
              A streamlined process that ensures quality delivery and client satisfaction.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Discovery', desc: 'Understanding your needs and goals' },
              { step: '02', title: 'Planning', desc: 'Creating a detailed project roadmap' },
              { step: '03', title: 'Execution', desc: 'Building with precision and care' },
              { step: '04', title: 'Delivery', desc: 'Launch and ongoing support' },
            ].map((item, index) => (
              <AnimatedSection key={item.step} delay={index * 0.1}>
                <div className="text-center">
                  <div className="text-5xl font-bold gradient-text mb-4">{item.step}</div>
                  <h3 className="text-xl font-semibold text-[var(--foreground)] mb-2">{item.title}</h3>
                  <p className="text-[var(--foreground-muted)]">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      {/* Related Services */}
      <section className="section-padding bg-[var(--background-secondary)]">
        <Container>
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-lg mb-4 text-[var(--foreground)]">Related Services</h2>
            <p className="text-[var(--foreground-muted)] text-lg">
              Explore other services that might complement your needs.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            {relatedServices.map((relatedService, index) => {
              const RelatedIcon = iconMap[relatedService.icon] || Globe
              return (
                <AnimatedSection key={relatedService.id} delay={index * 0.1}>
                  <Link to={`/services/${relatedService.slug}`}>
                    <div className="service-card h-full group">
                      <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                        <RelatedIcon className="w-6 h-6 text-accent" />
                      </div>
                      <h3 className="text-lg font-semibold text-[var(--foreground)] mb-2 group-hover:text-accent transition-colors">
                        {relatedService.title}
                      </h3>
                      <p className="text-[var(--foreground-muted)] text-sm">
                        {relatedService.shortDescription}
                      </p>
                    </div>
                  </Link>
                </AnimatedSection>
              )
            })}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <Container>
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <h2 className="heading-lg mb-4 text-[var(--foreground)]">Ready to Get Started?</h2>
            <p className="text-[var(--foreground-muted)] text-lg mb-8">
              Let's discuss how our {service.title.toLowerCase()} service can help your business grow.
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
