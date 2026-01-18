import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Instagram,
  Facebook,
} from 'lucide-react'
import { Container, Button } from '@/components/ui'
import { siteConfig, footerLinks } from '@/data/siteConfig'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Linkedin, href: siteConfig.social.linkedin, label: 'LinkedIn' },
    { icon: Twitter, href: siteConfig.social.twitter, label: 'Twitter' },
    { icon: Instagram, href: siteConfig.social.instagram, label: 'Instagram' },
    { icon: Facebook, href: siteConfig.social.facebook, label: 'Facebook' },
  ].filter(link => link.href)

  return (
    <footer className="relative bg-[#0D0D0D] border-t border-white/10">
      {/* CTA Section */}
      <div className="border-b border-white/10">
        <Container className="py-20 md:py-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              Do you like what you see?
            </h2>
            <p className="text-white/60 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              Let's work together and create something amazing. Get in touch and tell us about your project.
            </p>
            <Button size="lg" asChild className="group">
              <Link to="/contact">
                Start a project
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </Container>
      </div>

      {/* Main Footer */}
      <Container className="py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-6 group">
              <span
                className="text-3xl font-bold tracking-tight text-white group-hover:text-accent transition-colors"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                YUVA<span className="text-accent">OG</span>
              </span>
            </Link>
            <p className="text-white/60 mb-8 max-w-sm leading-relaxed">
              {siteConfig.description}
            </p>

            {/* Contact Info */}
            <div className="space-y-4">
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="flex items-center gap-3 text-white/60 hover:text-accent transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <span>{siteConfig.contact.email}</span>
              </a>
              <a
                href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`}
                className="flex items-center gap-3 text-white/60 hover:text-accent transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Phone className="w-5 h-5 text-accent" />
                </div>
                <span>{siteConfig.contact.phone}</span>
              </a>
              <div className="flex items-start gap-3 text-white/60">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <span>{siteConfig.contact.address}</span>
              </div>
            </div>
          </div>

          {/* Learn */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-lg">Learn</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-white/60 hover:text-accent transition-colors inline-block relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-accent after:transition-all hover:after:w-full"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-lg">Explore</h3>
            <ul className="space-y-3">
              {footerLinks.services.slice(0, 6).map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-white/60 hover:text-accent transition-colors inline-block relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-accent after:transition-all hover:after:w-full"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-lg">Connect</h3>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-accent hover:border-accent hover:bg-accent/10 transition-all duration-300"
                  aria-label={social.label}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>

            {/* Working Hours */}
            <div className="mt-8">
              <h4 className="text-white font-medium mb-3">Working Hours</h4>
              <p className="text-white/60 text-sm">
                Mon - Fri: 9:00 AM - 6:00 PM
              </p>
              <p className="text-white/60 text-sm">
                Sat - Sun: Closed
              </p>
            </div>
          </div>
        </div>
      </Container>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <Container className="py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/50 text-sm">
              &copy; {currentYear} {siteConfig.name}. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link
                to="/privacy"
                className="text-white/50 hover:text-accent transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-white/50 hover:text-accent transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  )
}
