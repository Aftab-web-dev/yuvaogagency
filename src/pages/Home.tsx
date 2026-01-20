import { useRef, useLayoutEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  ArrowRight,
  Globe,
  Smartphone,
  TrendingUp,
  Palette,
  Mail,
  Video,
  Users,
  Star,
  Brain,
  ArrowUpRight,
} from 'lucide-react'
import { Container, Button } from '@/components/ui'
import { SEO, AnimatedSection } from '@/components/shared'
import { services } from '@/data/services'

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger)

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

const portfolioItems = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?w=600&q=80',
  },
  {
    id: '2',
    title: 'Fitness Mobile App',
    category: 'App Development',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80',
  },
  {
    id: '3',
    title: 'Brand Identity Design',
    category: 'Branding',
    image: 'https://images.unsplash.com/photo-1634942537034-2531766767d1?w=600&q=80',
  },
  {
    id: '4',
    title: 'Marketing Dashboard',
    category: 'UI/UX Design',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
  },
]

const testimonials = [
  {
    id: '1',
    name: 'John Smith',
    role: 'CEO',
    company: 'Tech Corp',
    content: 'Working with Yuvaog was a game-changer for our business. They delivered an exceptional website that exceeded our expectations.',
    rating: 5,
  },
  {
    id: '2',
    name: 'Sarah Johnson',
    role: 'Marketing Director',
    company: 'Growth Inc',
    content: 'Their digital marketing expertise helped us increase our leads by 300%. Highly recommend their services!',
    rating: 5,
  },
  {
    id: '3',
    name: 'Michael Brown',
    role: 'Founder',
    company: 'StartUp Hub',
    content: 'The team delivered our mobile app on time and within budget. The quality of work was outstanding.',
    rating: 5,
  },
]

// Framer Motion variants for hero animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
}

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    // GSAP ScrollTrigger animations for sections
    const ctx = gsap.context(() => {
      // Animate sections on scroll
      gsap.utils.toArray<HTMLElement>('.gsap-fade-up').forEach((element) => {
        gsap.fromTo(
          element,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: element,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        )
      })
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <>
      <SEO
        title="Home"
        description="Professional digital agency offering web development, app development, digital marketing, and more. Transform your business with our expert services."
      />

      {/* Hero Section - MadeByShape Style */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-[var(--background)]">
          {/* Subtle gradient orb */}
          <motion.div
            className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-accent/5 blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <motion.div
            className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-accent/3 blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </div>

        <Container className="relative z-10">
          <motion.div
            className="max-w-5xl"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="mb-6">
              <span className="text-xl md:text-2xl text-[var(--foreground-muted)]">
                Hiya, we're <span className="text-accent font-semibold">Yuvaog</span> 👋
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="heading-xl mb-8 text-[var(--foreground)]"
            >
              A digital agency{' '}
              <span className="gradient-text">transforming</span>{' '}
              businesses through design & technology
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-[var(--foreground-muted)] mb-12 max-w-3xl leading-relaxed"
            >
              We craft stunning websites, powerful applications, and winning
              marketing strategies that propel your business into the future.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <Button size="lg" asChild className="group">
                <Link to="/portfolio">
                  View our work
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="group">
                <Link to="/about">
                  Meet the team
                  <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </Container>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{
            opacity: { delay: 1, duration: 0.5 },
            y: { duration: 2, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-[var(--border)] flex items-start justify-center p-2">
            <motion.div
              className="w-1.5 h-3 rounded-full bg-accent"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </section>

      {/* Portfolio Section - Our Work */}
      <section className="section-padding bg-[var(--background-secondary)]">
        <Container>
          <AnimatedSection className="flex items-end justify-between mb-12">
            <div>
              <span className="text-accent font-medium mb-2 block">Our Work</span>
              <h2 className="heading-lg text-[var(--foreground)]">
                Selected projects
              </h2>
            </div>
            <Button variant="ghost" asChild className="hidden md:flex group">
              <Link to="/portfolio">
                View all projects
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {portfolioItems.map((item, index) => (
              <AnimatedSection key={item.id} delay={index * 0.1}>
                <Link
                  to={`/portfolio/${item.id}`}
                  className="group block relative aspect-[4/3] rounded-2xl overflow-hidden"
                  data-cursor-text="View"
                  data-cursor-hover="true"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                    <span className="text-accent text-sm font-medium mb-2 block">
                      {item.category}
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-accent transition-colors">
                      {item.title}
                    </h3>
                  </div>
                  <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight className="w-5 h-5 text-white" />
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Button variant="outline" asChild>
              <Link to="/portfolio">View all projects</Link>
            </Button>
          </div>
        </Container>
      </section>

      {/* Services Section - Our Expertise */}
      <section className="section-padding">
        <Container>
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent font-medium mb-2 block">Our Expertise</span>
            <h2 className="heading-lg text-[var(--foreground)] mb-6">
              Services we offer
            </h2>
            <p className="text-[var(--foreground-muted)] text-lg">
              From web development to digital marketing, we offer comprehensive
              solutions to help your business thrive.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.slice(0, 6).map((service, index) => {
              const Icon = iconMap[service.icon] || Globe
              return (
                <AnimatedSection key={service.id} delay={index * 0.1}>
                  <Link to={`/services/${service.slug}`}>
                    <div className="service-card group h-full">
                      <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                        <Icon className="w-7 h-7 text-accent" />
                      </div>
                      <h3 className="text-xl font-semibold text-[var(--foreground)] mb-3 group-hover:text-accent transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-[var(--foreground-muted)] mb-4">
                        {service.shortDescription}
                      </p>
                      <div className="flex items-center text-accent font-medium">
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                      </div>
                    </div>
                  </Link>
                </AnimatedSection>
              )
            })}
          </div>

          <AnimatedSection className="text-center mt-12">
            <Button variant="outline" asChild>
              <Link to="/services">
                View all services <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </AnimatedSection>
        </Container>
      </section>

      {/* About Section */}
      <section className="section-padding bg-[var(--background-secondary)]">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <span className="text-accent font-medium mb-2 block">About Us</span>
              <h2 className="heading-lg text-[var(--foreground)] mb-6">
                We're passionate about digital excellence
              </h2>
              <p className="text-[var(--foreground-muted)] text-lg mb-6 leading-relaxed">
                Founded with a vision to transform businesses through technology,
                we've been helping brands establish their digital presence and
                achieve remarkable growth.
              </p>
              <p className="text-[var(--foreground-muted)] text-lg mb-8 leading-relaxed">
                Our team of designers, developers, and strategists work together
                to create solutions that not only look great but drive real results.
              </p>

              <div className="grid grid-cols-3 gap-6 mb-8">
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="text-4xl font-bold text-accent mb-1">10+</div>
                  <div className="text-[var(--foreground-muted)] text-sm">Years Experience</div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <div className="text-4xl font-bold text-accent mb-1">500+</div>
                  <div className="text-[var(--foreground-muted)] text-sm">Projects Delivered</div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="text-4xl font-bold text-accent mb-1">200+</div>
                  <div className="text-[var(--foreground-muted)] text-sm">Happy Clients</div>
                </motion.div>
              </div>

              <Button asChild className="group">
                <Link to="/about">
                  Learn more about us
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="relative">
                <motion.div
                  className="aspect-square rounded-2xl overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80"
                    alt="Our team at work"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                {/* Floating badge */}
                <motion.div
                  className="absolute -bottom-6 -left-6 p-6 rounded-2xl bg-[var(--background)] border border-[var(--border)] shadow-xl"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
                      <Star className="w-8 h-8 text-accent fill-accent" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-[var(--foreground)]">4.9/5</div>
                      <div className="text-[var(--foreground-muted)] text-sm">Client Rating</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding">
        <Container>
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent font-medium mb-2 block">Testimonials</span>
            <h2 className="heading-lg text-[var(--foreground)] mb-6">
              What our clients say
            </h2>
            <p className="text-[var(--foreground-muted)] text-lg">
              Don't just take our word for it. Here's what our clients have to
              say about working with us.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <AnimatedSection key={testimonial.id} delay={index * 0.1}>
                <motion.div
                  className="h-full p-8 rounded-2xl bg-[var(--card-bg)] border border-[var(--border)] hover:border-accent/30 transition-all duration-300"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex gap-1 mb-6">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-accent fill-accent"
                      />
                    ))}
                  </div>
                  <p className="text-[var(--foreground)] mb-6 leading-relaxed text-lg">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center gap-4 pt-6 border-t border-[var(--border)]">
                    <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                      <span className="text-accent font-bold">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-[var(--foreground)]">
                        {testimonial.name}
                      </div>
                      <div className="text-[var(--foreground-muted)] text-sm">
                        {testimonial.role}, {testimonial.company}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-12">
            <Button variant="outline" asChild>
              <Link to="/testimonials">
                View all testimonials <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </AnimatedSection>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <Container>
          <AnimatedSection>
            <motion.div
              className="relative overflow-hidden rounded-3xl bg-accent p-12 md:p-20 text-center"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
            >
              {/* Decorative elements */}
              <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

              <div className="relative z-10">
                <motion.h2
                  className="heading-lg text-black mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  Let's work together
                </motion.h2>
                <motion.p
                  className="text-black/70 text-lg md:text-xl max-w-2xl mx-auto mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  Have a project in mind? Get in touch and let's discuss how we can
                  help transform your business.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <Button
                    size="lg"
                    className="bg-black text-white hover:bg-black/80 shadow-xl"
                    asChild
                  >
                    <Link to="/contact">
                      Start a project <ArrowRight className="w-5 h-5" />
                    </Link>
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </AnimatedSection>
        </Container>
      </section>
    </>
  )
}
