import { Link } from 'react-router-dom'
import { ArrowRight, Target, Eye, Heart, Users, Award } from 'lucide-react'
import { Container, Button, Card } from '@/components/ui'
import { SEO, AnimatedSection } from '@/components/shared'

const values = [
  {
    icon: Target,
    title: 'Excellence',
    description: 'We strive for excellence in everything we do, delivering quality that exceeds expectations.',
  },
  {
    icon: Heart,
    title: 'Passion',
    description: 'We are passionate about technology and helping businesses succeed in the digital world.',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'We believe in working closely with our clients to understand their needs and goals.',
  },
  {
    icon: Award,
    title: 'Innovation',
    description: 'We stay at the forefront of technology to bring innovative solutions to our clients.',
  },
]

const timeline = [
  { year: '2014', title: 'Founded', description: 'Started as a small web development studio' },
  { year: '2016', title: 'Growth', description: 'Expanded team and added app development services' },
  { year: '2018', title: 'Expansion', description: 'Opened new office and launched digital marketing division' },
  { year: '2020', title: 'Innovation', description: 'Introduced AI-powered solutions and automation' },
  { year: '2022', title: 'Global', description: 'Extended services to international markets' },
  { year: '2024', title: 'Today', description: 'Serving 200+ clients worldwide' },
]

export default function About() {
  return (
    <>
      <SEO
        title="About Us"
        description="Learn about our digital agency, our mission, values, and the team behind our success. We help businesses transform through technology."
      />

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-dark-900 to-dark-950">
        <Container>
          <AnimatedSection className="text-center max-w-4xl mx-auto">
            <span className="text-primary-400 font-medium mb-4 block">About Us</span>
            <h1 className="heading-xl mb-6">
              We're a Team of Digital{' '}
              <span className="gradient-text">Innovators</span>
            </h1>
            <p className="text-xl text-dark-300 mb-8">
              Since 2014, we've been helping businesses transform their digital presence
              and achieve remarkable growth through innovative technology solutions.
            </p>
          </AnimatedSection>
        </Container>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding">
        <Container>
          <div className="grid md:grid-cols-2 gap-8">
            <AnimatedSection direction="left">
              <Card className="h-full">
                <div className="w-14 h-14 rounded-xl bg-primary-500/10 flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-primary-400" />
                </div>
                <h2 className="heading-md mb-4">Our Mission</h2>
                <p className="text-dark-400 text-lg">
                  To empower businesses with cutting-edge digital solutions that drive growth,
                  enhance efficiency, and create lasting value. We believe in building
                  partnerships that go beyond projects to create meaningful impact.
                </p>
              </Card>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <Card className="h-full">
                <div className="w-14 h-14 rounded-xl bg-accent-500/10 flex items-center justify-center mb-6">
                  <Eye className="w-7 h-7 text-accent-400" />
                </div>
                <h2 className="heading-md mb-4">Our Vision</h2>
                <p className="text-dark-400 text-lg">
                  To be the leading digital agency that businesses trust for their digital
                  transformation journey. We aim to set new standards in creativity,
                  technology, and client success.
                </p>
              </Card>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="section-padding bg-dark-900/50">
        <Container>
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary-400 font-medium mb-4 block">Our Values</span>
            <h2 className="heading-lg mb-4">What Drives Us Forward</h2>
            <p className="text-dark-400 text-lg">
              Our core values shape everything we do and how we work with our clients.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <AnimatedSection key={value.title} delay={index * 0.1}>
                <Card hover className="h-full text-center">
                  <div className="w-14 h-14 rounded-xl bg-primary-500/10 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-7 h-7 text-primary-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{value.title}</h3>
                  <p className="text-dark-400">{value.description}</p>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      {/* Timeline */}
      <section className="section-padding">
        <Container>
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary-400 font-medium mb-4 block">Our Journey</span>
            <h2 className="heading-lg mb-4">A Decade of Excellence</h2>
            <p className="text-dark-400 text-lg">
              From humble beginnings to serving clients worldwide, here's our story.
            </p>
          </AnimatedSection>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-dark-700 hidden md:block" />

            <div className="space-y-8">
              {timeline.map((item, index) => (
                <AnimatedSection
                  key={item.year}
                  delay={index * 0.1}
                  className={`flex flex-col md:flex-row gap-8 items-center ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  <div className="flex-1 text-center md:text-right">
                    {index % 2 === 0 && (
                      <Card className="inline-block">
                        <div className="text-primary-400 font-bold text-xl mb-2">{item.year}</div>
                        <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                        <p className="text-dark-400">{item.description}</p>
                      </Card>
                    )}
                  </div>
                  <div className="relative z-10">
                    <div className="w-4 h-4 rounded-full bg-primary-500 border-4 border-dark-950" />
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    {index % 2 !== 0 && (
                      <Card className="inline-block">
                        <div className="text-primary-400 font-bold text-xl mb-2">{item.year}</div>
                        <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                        <p className="text-dark-400">{item.description}</p>
                      </Card>
                    )}
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="section-padding bg-dark-900/50">
        <Container>
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <h2 className="heading-lg mb-4">Want to Work With Us?</h2>
            <p className="text-dark-400 text-lg mb-8">
              Let's discuss how we can help transform your business.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild>
                <Link to="/contact">
                  Get in Touch <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/team">Meet Our Team</Link>
              </Button>
            </div>
          </AnimatedSection>
        </Container>
      </section>
    </>
  )
}
