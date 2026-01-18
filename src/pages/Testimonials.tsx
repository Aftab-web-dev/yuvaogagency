import { Link } from 'react-router-dom'
import { Star, Quote, ArrowRight } from 'lucide-react'
import { Container, Button, Card } from '@/components/ui'
import { SEO, AnimatedSection } from '@/components/shared'
import { testimonials } from '@/data/testimonials'

export default function Testimonials() {
  return (
    <>
      <SEO
        title="Testimonials"
        description="See what our clients say about working with us. Read reviews and success stories from businesses we've helped transform."
      />

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-dark-900 to-dark-950">
        <Container>
          <AnimatedSection className="text-center max-w-4xl mx-auto">
            <span className="text-primary-400 font-medium mb-4 block">Testimonials</span>
            <h1 className="heading-xl mb-6">
              What Our <span className="gradient-text">Clients Say</span>
            </h1>
            <p className="text-xl text-dark-300">
              Don't just take our word for it. Here's what our clients have to
              say about their experience working with us.
            </p>
          </AnimatedSection>
        </Container>
      </section>

      {/* Stats */}
      <section className="py-12 bg-dark-900/50">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '200+', label: 'Happy Clients' },
              { value: '4.9', label: 'Average Rating' },
              { value: '98%', label: 'Satisfaction Rate' },
              { value: '150+', label: '5-Star Reviews' },
            ].map((stat, index) => (
              <AnimatedSection key={stat.label} delay={index * 0.1}>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">
                    {stat.value}
                  </div>
                  <div className="text-dark-400">{stat.label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      {/* Testimonials Grid */}
      <section className="section-padding">
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <AnimatedSection key={testimonial.id} delay={index * 0.1}>
                <Card className="h-full flex flex-col">
                  {/* Quote Icon */}
                  <div className="mb-4">
                    <Quote className="w-10 h-10 text-primary-500/30" />
                  </div>

                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < testimonial.rating
                            ? 'text-yellow-400 fill-yellow-400'
                            : 'text-dark-600'
                        }`}
                      />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-dark-300 flex-1 mb-6">
                    "{testimonial.content}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4 pt-4 border-t border-dark-700">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 p-0.5">
                      <div className="w-full h-full rounded-full bg-dark-800 flex items-center justify-center">
                        <span className="text-primary-400 font-semibold">
                          {testimonial.name.charAt(0)}
                        </span>
                      </div>
                    </div>
                    <div>
                      <div className="font-semibold text-white">
                        {testimonial.name}
                      </div>
                      <div className="text-dark-400 text-sm">
                        {testimonial.role}, {testimonial.company}
                      </div>
                    </div>
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="section-padding bg-dark-900/50">
        <Container>
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <h2 className="heading-lg mb-4">Ready to Join Our Happy Clients?</h2>
            <p className="text-dark-400 text-lg mb-8">
              Let's discuss how we can help your business achieve similar success.
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
