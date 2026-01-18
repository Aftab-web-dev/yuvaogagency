import { Link } from 'react-router-dom'
import { Home, ArrowLeft } from 'lucide-react'
import { Container, Button } from '@/components/ui'
import { SEO } from '@/components/shared'

export default function NotFound() {
  return (
    <>
      <SEO title="Page Not Found" />

      <section className="min-h-[80vh] flex items-center">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <div className="text-8xl font-bold gradient-text mb-6">404</div>
            <h1 className="heading-lg mb-4">Page Not Found</h1>
            <p className="text-dark-400 text-lg mb-8">
              Sorry, the page you're looking for doesn't exist or has been moved.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild>
                <Link to="/">
                  <Home className="w-5 h-5" />
                  Go to Homepage
                </Link>
              </Button>
              <Button variant="outline" onClick={() => window.history.back()}>
                <ArrowLeft className="w-5 h-5" />
                Go Back
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
