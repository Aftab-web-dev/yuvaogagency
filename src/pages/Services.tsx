import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Globe,
  Smartphone,
  TrendingUp,
  Palette,
  Mail,
  Video,
  Users,
  Brain,
} from 'lucide-react'
import { Container, Button } from '@/components/ui'
import { SEO, AnimatedSection } from '@/components/shared'
import { services } from '@/data/services'

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

export default function Services() {
  return (
    <>
      <SEO
        title="Our Services"
        description="Explore our comprehensive range of digital services including web development, app development, digital marketing, UI/UX design, and more."
      />

      {/* Hero Section */}
      <section className="section-padding">
        <Container>
          <AnimatedSection className="text-center max-w-4xl mx-auto">
            <span className="text-accent font-medium mb-4 block">Our Services</span>
            <h1 className="heading-xl mb-6 text-[var(--foreground)]">
              Comprehensive <span className="gradient-text">Digital Solutions</span>
            </h1>
            <p className="text-xl text-[var(--foreground-muted)]">
              From web development to digital marketing, we offer a complete suite of services
              to help your business succeed in the digital landscape.
            </p>
          </AnimatedSection>
        </Container>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-[var(--background-secondary)]">
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = iconMap[service.icon] || Globe
              return (
                <AnimatedSection key={service.id} delay={index * 0.1}>
                  <Link to={`/services/${service.slug}`}>
                    <div className="service-card h-full group">
                      <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                        <Icon className="w-8 h-8 text-accent" />
                      </div>
                      <h3 className="text-2xl font-semibold text-[var(--foreground)] mb-3 group-hover:text-accent transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-[var(--foreground-muted)] mb-6">
                        {service.shortDescription}
                      </p>
                      <ul className="space-y-2 mb-6">
                        {service.features.slice(0, 4).map((feature) => (
                          <li key={feature} className="flex items-center gap-2 text-[var(--foreground-muted)]">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <div className="flex items-center text-accent font-medium">
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </div>
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
            <h2 className="heading-lg mb-4 text-[var(--foreground)]">Need a Custom Solution?</h2>
            <p className="text-[var(--foreground-muted)] text-lg mb-8">
              Don't see exactly what you need? We offer custom solutions tailored
              to your specific business requirements.
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
