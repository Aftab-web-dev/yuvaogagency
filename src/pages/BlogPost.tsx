import { useParams, Link, Navigate } from 'react-router-dom'
import { Calendar, Clock, ArrowLeft, Twitter, Linkedin, Facebook } from 'lucide-react'
import { Container, Card, Badge } from '@/components/ui'
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
      <section className="section-padding bg-gradient-to-b from-dark-900 to-dark-950">
        <Container size="md">
          <AnimatedSection>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-dark-400 hover:text-white transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>

            <Badge variant="primary" className="mb-4">
              {post.category}
            </Badge>

            <h1 className="heading-xl mb-6">{post.title}</h1>

            <div className="flex flex-wrap items-center gap-6 text-dark-400">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary-500/20 flex items-center justify-center">
                  <span className="text-primary-400 font-semibold">
                    {post.author.charAt(0)}
                  </span>
                </div>
                <span>{post.author}</span>
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
      <section className="section-padding">
        <Container size="md">
          <AnimatedSection>
            <div className="prose prose-invert prose-lg max-w-none">
              {/* Featured Image Placeholder */}
              <div className="aspect-video bg-dark-800 rounded-xl mb-8 flex items-center justify-center">
                <span className="text-9xl font-bold text-dark-700">
                  {post.title.charAt(0)}
                </span>
              </div>

              {/* Article Content */}
              <div className="text-dark-300 leading-relaxed space-y-6">
                {post.content.split('\n\n').map((paragraph, index) => {
                  if (paragraph.startsWith('# ')) {
                    return (
                      <h1 key={index} className="text-3xl font-bold text-white mt-8 mb-4">
                        {paragraph.replace('# ', '')}
                      </h1>
                    )
                  }
                  if (paragraph.startsWith('## ')) {
                    return (
                      <h2 key={index} className="text-2xl font-bold text-white mt-8 mb-4">
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
              <div className="flex flex-wrap gap-2 mt-8 pt-8 border-t border-dark-700">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>

              {/* Share */}
              <div className="flex items-center justify-between mt-8 pt-8 border-t border-dark-700">
                <span className="text-dark-400">Share this article:</span>
                <div className="flex gap-3">
                  <button className="w-10 h-10 rounded-lg bg-dark-700 flex items-center justify-center text-dark-400 hover:text-white hover:bg-dark-600 transition-all">
                    <Twitter className="w-5 h-5" />
                  </button>
                  <button className="w-10 h-10 rounded-lg bg-dark-700 flex items-center justify-center text-dark-400 hover:text-white hover:bg-dark-600 transition-all">
                    <Linkedin className="w-5 h-5" />
                  </button>
                  <button className="w-10 h-10 rounded-lg bg-dark-700 flex items-center justify-center text-dark-400 hover:text-white hover:bg-dark-600 transition-all">
                    <Facebook className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </Container>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="section-padding bg-dark-900/50">
          <Container>
            <AnimatedSection className="text-center mb-12">
              <h2 className="heading-md">Related Articles</h2>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {relatedPosts.map((relatedPost, index) => (
                <AnimatedSection key={relatedPost.id} delay={index * 0.1}>
                  <Link to={`/blog/${relatedPost.slug}`}>
                    <Card hover className="h-full">
                      <Badge size="sm" className="mb-3">
                        {relatedPost.category}
                      </Badge>
                      <h3 className="text-lg font-semibold text-white mb-2">
                        {relatedPost.title}
                      </h3>
                      <p className="text-dark-400 text-sm">{relatedPost.excerpt}</p>
                    </Card>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          </Container>
        </section>
      )}
    </>
  )
}
