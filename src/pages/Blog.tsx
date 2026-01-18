import { Link } from 'react-router-dom'
import { Calendar, Clock, User } from 'lucide-react'
import { Container, Button, Card, Badge } from '@/components/ui'
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
      <section className="section-padding bg-gradient-to-b from-dark-900 to-dark-950">
        <Container>
          <AnimatedSection className="text-center max-w-4xl mx-auto">
            <span className="text-primary-400 font-medium mb-4 block">Our Blog</span>
            <h1 className="heading-xl mb-6">
              Insights & <span className="gradient-text">Updates</span>
            </h1>
            <p className="text-xl text-dark-300">
              Stay updated with the latest trends, tips, and insights from our
              team of experts.
            </p>
          </AnimatedSection>
        </Container>
      </section>

      {/* Featured Post */}
      <section className="section-padding">
        <Container>
          <AnimatedSection>
            <Link to={`/blog/${featuredPost.slug}`}>
              <Card hover className="grid md:grid-cols-2 gap-8 p-0 overflow-hidden">
                <div className="aspect-video md:aspect-auto bg-dark-700 flex items-center justify-center">
                  <span className="text-8xl font-bold text-dark-600">
                    {featuredPost.title.charAt(0)}
                  </span>
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <Badge variant="primary" className="w-fit mb-4">
                    Featured
                  </Badge>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    {featuredPost.title}
                  </h2>
                  <p className="text-dark-400 mb-6">{featuredPost.excerpt}</p>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-dark-400">
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
              </Card>
            </Link>
          </AnimatedSection>
        </Container>
      </section>

      {/* Other Posts */}
      <section className="section-padding pt-0">
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherPosts.map((post, index) => (
              <AnimatedSection key={post.id} delay={index * 0.1}>
                <Link to={`/blog/${post.slug}`}>
                  <Card hover className="h-full p-0 overflow-hidden group">
                    <div className="aspect-video bg-dark-700 flex items-center justify-center">
                      <span className="text-6xl font-bold text-dark-600 group-hover:text-dark-500 transition-colors">
                        {post.title.charAt(0)}
                      </span>
                    </div>
                    <div className="p-6">
                      <Badge size="sm" className="mb-3">
                        {post.category}
                      </Badge>
                      <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-primary-400 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-dark-400 text-sm mb-4">{post.excerpt}</p>
                      <div className="flex items-center justify-between text-sm text-dark-400">
                        <span>{formatDate(post.date)}</span>
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </Card>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      {/* Newsletter CTA */}
      <section className="section-padding bg-dark-900/50">
        <Container>
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <h2 className="heading-lg mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-dark-400 text-lg mb-8">
              Get the latest articles and insights delivered straight to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-dark-800 border border-dark-700 text-white placeholder-dark-400 focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <Button type="submit">Subscribe</Button>
            </form>
          </AnimatedSection>
        </Container>
      </section>
    </>
  )
}
