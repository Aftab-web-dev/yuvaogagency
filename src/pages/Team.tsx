import { Link } from 'react-router-dom'
import { Linkedin, Twitter, Github, ArrowRight } from 'lucide-react'
import { Container, Button, Card } from '@/components/ui'
import { SEO, AnimatedSection } from '@/components/shared'
import { team } from '@/data/team'

const socialIcons = {
  linkedin: Linkedin,
  twitter: Twitter,
  github: Github,
}

export default function Team() {
  return (
    <>
      <SEO
        title="Our Team"
        description="Meet the talented team behind our digital agency. Our experts in development, design, and marketing are ready to help your business succeed."
      />

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-dark-900 to-dark-950">
        <Container>
          <AnimatedSection className="text-center max-w-4xl mx-auto">
            <span className="text-primary-400 font-medium mb-4 block">Our Team</span>
            <h1 className="heading-xl mb-6">
              Meet the <span className="gradient-text">Experts</span>
            </h1>
            <p className="text-xl text-dark-300">
              Our talented team of professionals is dedicated to delivering
              exceptional results for every project.
            </p>
          </AnimatedSection>
        </Container>
      </section>

      {/* Team Grid */}
      <section className="section-padding">
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <AnimatedSection key={member.id} delay={index * 0.1}>
                <Card hover className="text-center group">
                  {/* Avatar */}
                  <div className="relative w-32 h-32 mx-auto mb-6">
                    <div className="w-full h-full rounded-full bg-gradient-to-br from-primary-500 to-accent-500 p-0.5">
                      <div className="w-full h-full rounded-full bg-dark-800 flex items-center justify-center">
                        <span className="text-4xl font-bold text-primary-400">
                          {member.name.split(' ').map((n) => n[0]).join('')}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Info */}
                  <h3 className="text-xl font-semibold text-white mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary-400 font-medium mb-4">{member.role}</p>
                  <p className="text-dark-400 text-sm mb-6">{member.bio}</p>

                  {/* Social Links */}
                  <div className="flex justify-center gap-3">
                    {Object.entries(member.social).map(([platform, url]) => {
                      if (!url) return null
                      const Icon = socialIcons[platform as keyof typeof socialIcons]
                      return (
                        <a
                          key={platform}
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-9 h-9 rounded-lg bg-dark-700 flex items-center justify-center text-dark-400 hover:text-white hover:bg-primary-600 transition-all"
                          aria-label={`${member.name}'s ${platform}`}
                        >
                          <Icon className="w-4 h-4" />
                        </a>
                      )
                    })}
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      {/* Join Us CTA */}
      <section className="section-padding bg-dark-900/50">
        <Container>
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <h2 className="heading-lg mb-4">Want to Join Our Team?</h2>
            <p className="text-dark-400 text-lg mb-8">
              We're always looking for talented individuals to join our growing team.
              Check out our open positions.
            </p>
            <Button size="lg" asChild>
              <Link to="/contact">
                View Careers <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </AnimatedSection>
        </Container>
      </section>
    </>
  )
}
