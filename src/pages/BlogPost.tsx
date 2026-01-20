import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Calendar, Clock, ArrowLeft, Twitter, Linkedin, Facebook, Share2 } from 'lucide-react'
import { Container, Badge } from '@/components/ui'
import { SEO, AnimatedSection } from '@/components/shared'
import { getBlogPostBySlug, blogPosts } from '@/data/blog'
import { formatDate } from '@/lib/utils'

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>()
  const post = slug ? getBlogPostBySlug(slug) : undefined

  if (!post) {
    return <Navigate to="/blog" replace />
  }

  const relatedPosts = blogPosts
    .filter((p) => p.id !== post.id && p.category === post.category)
    .slice(0, 2)

  return (
    <>
      <SEO
        title={post.title}
        description={post.excerpt}
        type="article"
        article={{
          publishedTime: post.date,
          author: post.author,
          section: post.category,
          tags: post.tags,
        }}
      />

      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-20 right-20 w-96 h-96 rounded-full bg-accent/10 blur-3xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>

        <Container size="md" className="relative">
          <AnimatedSection>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-white/50 hover:text-accent transition-colors mb-8 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Blog
            </Link>

            <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">
              {post.category}
            </Badge>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-white/50">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                  <span className="text-accent font-semibold">
                    {post.author.charAt(0)}
                  </span>
                </div>
                <span className="text-white/70">{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {formatDate(post.date)}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </div>
            </div>
          </AnimatedSection>
        </Container>
      </section>

      {/* Content */}
      <section className="pb-20">
        <Container size="md">
          <AnimatedSection>
            <div className="prose prose-invert prose-lg max-w-none">
              {/* Featured Image Placeholder */}
              <div className="aspect-video bg-[#1a1a1a] rounded-2xl mb-10 flex items-center justify-center border border-white/10">
                <span className="text-9xl font-bold text-white/10">
                  {post.title.charAt(0)}
                </span>
              </div>

              {/* Article Content */}
              <div className="text-white/70 leading-relaxed space-y-6">
                {post.content.split('\n\n').map((paragraph, index) => {
                  if (paragraph.startsWith('# ')) {
                    return (
                      <h1 key={index} className="text-3xl font-bold text-white mt-10 mb-4">
                        {paragraph.replace('# ', '')}
                      </h1>
                    )
                  }
                  if (paragraph.startsWith('## ')) {
                    return (
                      <h2 key={index} className="text-2xl font-bold text-white mt-10 mb-4">
                        {paragraph.replace('## ', '')}
                      </h2>
                    )
                  }
                  if (paragraph.trim()) {
                    return <p key={index}>{paragraph}</p>
                  }
                  return null
                })}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-10 pt-10 border-t border-white/10">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 rounded-full bg-white/5 text-white/60 text-sm border border-white/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Share */}
              <div className="flex items-center justify-between mt-10 pt-10 border-t border-white/10">
                <div className="flex items-center gap-2 text-white/50">
                  <Share2 className="w-5 h-5" />
                  <span>Share this article:</span>
                </div>
                <div className="flex gap-3">
                  <motion.button
                    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-accent hover:border-accent/30 transition-all"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Twitter className="w-5 h-5" />
                  </motion.button>
                  <motion.button
                    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-accent hover:border-accent/30 transition-all"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Linkedin className="w-5 h-5" />
                  </motion.button>
                  <motion.button
                    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-accent hover:border-accent/30 transition-all"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Facebook className="w-5 h-5" />
                  </motion.button>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </Container>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-20 bg-white/[0.02]">
          <Container>
            <AnimatedSection className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-white">Related Articles</h2>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {relatedPosts.map((relatedPost, index) => (
                <motion.div
                  key={relatedPost.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link to={`/blog/${relatedPost.slug}`}>
                    <motion.div
                      className="h-full p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-accent/30 transition-all group"
                      whileHover={{ y: -5 }}
                    >
                      <Badge className="mb-3 bg-white/5 text-white/60 border-white/10">
                        {relatedPost.category}
                      </Badge>
                      <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-accent transition-colors">
                        {relatedPost.title}
                      </h3>
                      <p className="text-white/60 text-sm">{relatedPost.excerpt}</p>
                    </motion.div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>
      )}
    </>
  )
}
