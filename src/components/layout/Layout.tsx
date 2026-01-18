import { ReactNode } from 'react'
import { Header } from './Header'
import { Footer } from './Footer'
import { WhatsAppButton } from '@/components/shared/WhatsAppButton'
import { BackToTop } from '@/components/shared/BackToTop'
import { CustomCursor } from '@/components/shared/CustomCursor'
import { ThemeProvider } from '@/context/ThemeContext'

interface LayoutProps {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col bg-[var(--background)] text-[var(--foreground)] transition-colors duration-300">
        <CustomCursor />
        <Header />
        <main className="flex-1 pt-[90px]">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
        <BackToTop />
      </div>
    </ThemeProvider>
  )
}
