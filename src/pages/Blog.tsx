import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Calendar, Clock, User, BookOpen, ArrowRight } from 'lucide-react'
import { Container, Button, Badge } from '@/components/ui'
import { SEO, AnimatedSection } from '@/components/shared'
import { blogPosts } from '@/data/blog'
import { formatDate } from '@/lib/utils'

export default function Blog() {
  const featuredPost = blogPosts[0]
  const otherPosts = blogPosts.slice(1)

  return (
    <>
      <SEO
        title="Blog"
        description="Read our latest articles on web development, digital marketing, design, and technology trends."
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
              <BookOpen className="w-4 h-4" />
              Our Blog
            </motion.span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              Insights & <span className="text-accent">Updates</span>
            </h1>
            <p className="text-xl text-white/60">
              Stay updated with the latest trends, tips, and insights from our
              team of experts.
            </p>
          </AnimatedSection>
        </Container>
      </section>

      {/* Featured Post */}
      <section className="py-12">
        <Container>
          <AnimatedSection>
            <Link to={`/blog/${featuredPost.slug}`}>
              <motion.div
                className="grid md:grid-cols-2 gap-8 rounded-3xl bg-white/5 border border-white/10 overflow-hidden hover:border-accent/30 transition-all duration-300 group"
                whileHover={{ y: -5 }}
              >
                <div className="aspect-video md:aspect-auto bg-[#1a1a1a] flex items-center justify-center">
                  <span className="text-8xl font-bold text-white/10 group-hover:text-accent/20 transition-colors">
                    {featuredPost.title.charAt(0)}
                  </span>
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <Badge className="w-fit mb-4 bg-accent/10 text-accent border-accent/20">
                    Featured
                  </Badge>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-accent transition-colors">
                    {featuredPost.title}
                  </h2>
                  <p className="text-white/60 mb-6">{featuredPost.excerpt}</p>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-white/50">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      {featuredPost.author}
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {formatDate(featuredPost.date)}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {featuredPost.readTime}
                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>
          </AnimatedSection>
        </Container>
      </section>

      {/* Other Posts */}
      <section className="py-12">
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link to={`/blog/${post.slug}`}>
                  <motion.div
                    className="h-full rounded-2xl bg-white/5 border border-white/10 overflow-hidden hover:border-accent/30 transition-all duration-300 group"
                    whileHover={{ y: -5 }}
                  >
                    <div className="aspect-video bg-[#1a1a1a] flex items-center justify-center">
                      <span className="text-6xl font-bold text-white/10 group-hover:text-accent/20 transition-colors">
                        {post.title.charAt(0)}
                      </span>
                    </div>
                    <div className="p-6">
                      <Badge className="mb-3 bg-white/5 text-white/60 border-white/10">
                        {post.category}
                      </Badge>
                      <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-accent transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-white/60 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                      <div className="flex items-center justify-between text-sm text-white/50">
                        <span>{formatDate(post.date)}</span>
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-white/[0.02]">
        <Container>
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-white/60 text-lg mb-8">
              Get the latest articles and insights delivered straight to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-5 py-3 rounded-full bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
              />
              <Button type="submit" className="group">
                Subscribe
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </AnimatedSection>
        </Container>
      </section>
    </>
  )
}
