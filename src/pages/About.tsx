import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Target, Eye, Heart, Users, Award, Zap } from 'lucide-react'
import { Container, Button } from '@/components/ui'
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

const stats = [
  { value: '200+', label: 'Clients Served' },
  { value: '500+', label: 'Projects Delivered' },
  { value: '10+', label: 'Years Experience' },
  { value: '98%', label: 'Client Satisfaction' },
]

export default function About() {
  return (
    <>
      <SEO
        title="About Us"
        description="Learn about our digital agency, our mission, values, and the team behind our success. We help businesses transform through technology."
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-20 right-20 w-96 h-96 rounded-full bg-accent/20 blur-3xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute bottom-0 left-20 w-80 h-80 rounded-full bg-accent/10 blur-3xl"
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
              <Zap className="w-4 h-4" />
              About Us
            </motion.span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              We're a Team of Digital{' '}
              <span className="text-accent">Innovators</span>
            </h1>
            <p className="text-xl text-white/60 mb-8">
              Since 2014, we've been helping businesses transform their digital presence
              and achieve remarkable growth through innovative technology solutions.
            </p>
          </AnimatedSection>
        </Container>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-y border-white/10">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-4xl md:text-5xl font-bold text-accent mb-2">{stat.value}</div>
                <div className="text-white/60">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <Container>
          <div className="grid md:grid-cols-2 gap-8">
            <AnimatedSection direction="left">
              <div className="h-full p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-accent/30 transition-colors">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-accent" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
                <p className="text-white/60 text-lg leading-relaxed">
                  To empower businesses with cutting-edge digital solutions that drive growth,
                  enhance efficiency, and create lasting value. We believe in building
                  partnerships that go beyond projects to create meaningful impact.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="h-full p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-accent/30 transition-colors">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                  <Eye className="w-7 h-7 text-accent" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-4">Our Vision</h2>
                <p className="text-white/60 text-lg leading-relaxed">
                  To be the leading digital agency that businesses trust for their digital
                  transformation journey. We aim to set new standards in creativity,
                  technology, and client success.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="py-20 bg-white/[0.02]">
        <Container>
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent font-medium mb-4 block">Our Values</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What Drives Us Forward</h2>
            <p className="text-white/60 text-lg">
              Our core values shape everything we do and how we work with our clients.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-accent/30 transition-all group"
              >
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                  <value.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{value.title}</h3>
                <p className="text-white/60">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <Container>
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent font-medium mb-4 block">Our Journey</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">A Decade of Excellence</h2>
            <p className="text-white/60 text-lg">
              From humble beginnings to serving clients worldwide, here's our story.
            </p>
          </AnimatedSection>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-white/10 hidden md:block" />

            <div className="space-y-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex flex-col md:flex-row gap-8 items-center ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  <div className="flex-1 text-center md:text-right">
                    {index % 2 === 0 && (
                      <div className="inline-block p-6 rounded-2xl bg-white/5 border border-white/10">
                        <div className="text-accent font-bold text-xl mb-2">{item.year}</div>
                        <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                        <p className="text-white/60">{item.description}</p>
                      </div>
                    )}
                  </div>
                  <div className="relative z-10">
                    <div className="w-4 h-4 rounded-full bg-accent border-4 border-[#0D0D0D]" />
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    {index % 2 !== 0 && (
                      <div className="inline-block p-6 rounded-2xl bg-white/5 border border-white/10">
                        <div className="text-accent font-bold text-xl mb-2">{item.year}</div>
                        <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                        <p className="text-white/60">{item.description}</p>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white/[0.02]">
        <Container>
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Want to Work With Us?</h2>
            <p className="text-white/60 text-lg mb-8">
              Let's discuss how we can help transform your business.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild className="group">
                <Link to="/contact">
                  Get in Touch
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
