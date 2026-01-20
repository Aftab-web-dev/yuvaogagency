import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, MessageCircle, Send, CheckCircle, User, Sparkles, AlertCircle } from 'lucide-react'
import { Container, Button, Input, Textarea, Select } from '@/components/ui'
import { SEO, AnimatedSection } from '@/components/shared'
import { siteConfig } from '@/data/siteConfig'
import { services } from '@/data/services'
import { formatWhatsAppLink, formatPhoneLink } from '@/lib/utils'
import { sendContactEmail } from '@/lib/emailjs'

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  phone: z.string().optional(),
  service: z.string().min(1, 'Please select a service'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

type ContactFormData = z.infer<typeof contactSchema>

const serviceOptions = [
  { value: '', label: 'Select a service' },
  ...services.map((s) => ({ value: s.slug, label: s.title })),
  { value: 'other', label: 'Other' },
]

const contactMethods = [
  {
    icon: Mail,
    title: 'Email Us',
    description: 'Send us an email anytime',
    value: siteConfig.contact.email,
    href: `mailto:${siteConfig.contact.email}`,
    color: 'cyan',
  },
  {
    icon: Phone,
    title: 'Call Us',
    description: 'Mon-Fri from 9am to 6pm',
    value: siteConfig.contact.phone,
    href: formatPhoneLink(siteConfig.contact.phone),
    color: 'blue',
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    description: 'Quick response guaranteed',
    value: 'Chat with us',
    href: formatWhatsAppLink(siteConfig.contact.whatsapp),
    color: 'green',
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    description: 'Come say hello',
    value: siteConfig.contact.address,
    href: '#',
    color: 'purple',
  },
]

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setSubmitError(null)

    try {
      const result = await sendContactEmail(data)

      if (result.success) {
        setIsSubmitted(true)
        reset()
      } else {
        setSubmitError(result.error || 'Failed to send message. Please try again.')
      }
    } catch {
      setSubmitError('An unexpected error occurred. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; text: string; border: string; hover: string }> = {
      cyan: {
        bg: 'bg-cyan-500/10',
        text: 'text-cyan-400',
        border: 'border-cyan-500/20',
        hover: 'hover:border-cyan-500/40 hover:bg-cyan-500/20',
      },
      blue: {
        bg: 'bg-blue-500/10',
        text: 'text-blue-400',
        border: 'border-blue-500/20',
        hover: 'hover:border-blue-500/40 hover:bg-blue-500/20',
      },
      green: {
        bg: 'bg-green-500/10',
        text: 'text-green-400',
        border: 'border-green-500/20',
        hover: 'hover:border-green-500/40 hover:bg-green-500/20',
      },
      purple: {
        bg: 'bg-purple-500/10',
        text: 'text-purple-400',
        border: 'border-purple-500/20',
        hover: 'hover:border-purple-500/40 hover:bg-purple-500/20',
      },
    }
    return colors[color] || colors.cyan
  }

  return (
    <>
      <SEO
        title="Contact Us"
        description="Get in touch with our team. We're here to help with your digital needs. Contact us via form, phone, WhatsApp, or email."
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
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              Get In Touch
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              Let's Build Something{' '}
              <span className="text-accent">
                Amazing Together
              </span>
            </h1>
            <p className="text-xl text-white/60">
              Have a project in mind? We'd love to hear from you. Get in touch
              and let's discuss how we can help bring your vision to life.
            </p>
          </AnimatedSection>
        </Container>
      </section>

      {/* Contact Section */}
      <section className="pb-24">
        <Container>
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Form - Takes 3 columns */}
            <AnimatedSection direction="left" className="lg:col-span-3">
              <div className="relative p-8 md:p-10 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 backdrop-blur-xl overflow-hidden">
                {/* Decorative gradient */}
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br from-accent/30 to-transparent rounded-full blur-2xl" />
                <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-gradient-to-br from-accent/20 to-transparent rounded-full blur-2xl" />

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-16 relative"
                  >
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-500/20 to-green-500/10 flex items-center justify-center mx-auto mb-6 border border-green-500/30">
                      <CheckCircle className="w-10 h-10 text-green-400" />
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-3">
                      Message Sent!
                    </h3>
                    <p className="text-white/60 mb-8 max-w-md mx-auto">
                      Thank you for reaching out. We'll get back to you within 24 hours.
                    </p>
                    <Button onClick={() => setIsSubmitted(false)}>
                      Send Another Message
                    </Button>
                  </motion.div>
                ) : (
                  <div className="relative">
                    <div className="flex items-center gap-3 mb-8">
                      <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center">
                        <Send className="w-6 h-6 text-black" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-white">
                          Send us a Message
                        </h2>
                        <p className="text-white/50 text-sm">We'll respond within 24 hours</p>
                      </div>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-6">
                        <Input
                          label="Your Name"
                          placeholder="John Doe"
                          icon={<User className="w-5 h-5" />}
                          error={errors.name?.message}
                          {...register('name')}
                        />
                        <Input
                          label="Email Address"
                          type="email"
                          placeholder="john@example.com"
                          icon={<Mail className="w-5 h-5" />}
                          error={errors.email?.message}
                          {...register('email')}
                        />
                      </div>

                      <div className="grid sm:grid-cols-2 gap-6">
                        <Input
                          label="Phone Number (Optional)"
                          type="tel"
                          placeholder="+1 234 567 8900"
                          icon={<Phone className="w-5 h-5" />}
                          {...register('phone')}
                        />
                        <Select
                          label="Service Interested In"
                          options={serviceOptions}
                          error={errors.service?.message}
                          {...register('service')}
                        />
                      </div>

                      <Textarea
                        label="Your Message"
                        placeholder="Tell us about your project, goals, and how we can help..."
                        rows={5}
                        error={errors.message?.message}
                        {...register('message')}
                      />

                      {submitError && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="flex items-center gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400"
                        >
                          <AlertCircle className="w-5 h-5 flex-shrink-0" />
                          <p className="text-sm">{submitError}</p>
                        </motion.div>
                      )}

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full group"
                        isLoading={isSubmitting}
                      >
                        <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        Send Message
                      </Button>
                    </form>
                  </div>
                )}
              </div>
            </AnimatedSection>

            {/* Contact Info - Takes 2 columns */}
            <AnimatedSection direction="right" className="lg:col-span-2">
              <div className="space-y-6">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-white mb-3">
                    Other Ways to Reach Us
                  </h2>
                  <p className="text-white/60">
                    Choose the most convenient way to get in touch with our team.
                  </p>
                </div>

                {contactMethods.map((method, index) => {
                  const colors = getColorClasses(method.color)
                  return (
                    <motion.a
                      key={method.title}
                      href={method.href}
                      target={method.title === 'WhatsApp' ? '_blank' : undefined}
                      rel={method.title === 'WhatsApp' ? 'noopener noreferrer' : undefined}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className={`block p-5 rounded-2xl bg-white/5 border ${colors.border} ${colors.hover} transition-all duration-300 group`}
                    >
                      <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                          <method.icon className={`w-6 h-6 ${colors.text}`} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-white mb-1">
                            {method.title}
                          </h3>
                          <p className="text-white/50 text-sm mb-1">
                            {method.description}
                          </p>
                          <p className={`${colors.text} font-medium truncate`}>
                            {method.value}
                          </p>
                        </div>
                      </div>
                    </motion.a>
                  )
                })}

                {/* Working Hours */}
                <div className="p-5 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10">
                  <h3 className="font-semibold text-white mb-3">Working Hours</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-white/50">Monday - Friday</span>
                      <span className="text-white">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/50">Saturday</span>
                      <span className="text-white">10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/50">Sunday</span>
                      <span className="text-white/40">Closed</span>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      {/* Map Section */}
      <section className="pb-24">
        <Container>
          <AnimatedSection>
            <div className="rounded-3xl overflow-hidden border border-white/10">
              <div className="aspect-[21/9] bg-gradient-to-br from-white/5 to-white/10 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
                <div className="text-center relative">
                  <div className="w-16 h-16 rounded-full bg-accent/20 border border-white/10 flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-8 h-8 text-accent" />
                  </div>
                  <p className="text-white/60">Interactive map coming soon</p>
                  <p className="text-white/40 text-sm mt-1">{siteConfig.contact.address}</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </Container>
      </section>
    </>
  )
}
