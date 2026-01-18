import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'
import { Container, Button } from '@/components/ui'
import { ThemeToggle } from '@/components/shared/ThemeToggle'
import { navigation } from '@/data/siteConfig'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check initial state
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
    setOpenDropdown(null)
  }, [location.pathname])

  return (
    <motion.header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-colors duration-300',
        isScrolled
          ? 'bg-[#0D0D0D]/95 dark:bg-[#0D0D0D]/95 light:bg-white/95 backdrop-blur-xl border-b border-white/10 dark:border-white/10 light:border-black/10 shadow-lg'
          : 'bg-transparent border-b border-transparent'
      )}
      initial={{ height: 90 }}
      animate={{ height: isScrolled ? 70 : 90 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      <Container className="h-full">
        <nav className="flex items-center justify-between h-full">
          {/* Left Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navigation.slice(0, Math.ceil(navigation.length / 2)).map((item) => (
              <NavItem
                key={item.label}
                item={item}
                openDropdown={openDropdown}
                setOpenDropdown={setOpenDropdown}
                location={location}
              />
            ))}
          </div>

          {/* Center Logo */}
          <Link
            to="/"
            className="flex items-center group relative"
          >
            <motion.div
              className="relative"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <span
                className="text-2xl lg:text-3xl font-bold tracking-tight text-white dark:text-white transition-colors duration-300 group-hover:text-accent"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                YUVA<span className="text-accent">OG</span>
              </span>
            </motion.div>
          </Link>

          {/* Right Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navigation.slice(Math.ceil(navigation.length / 2)).map((item) => (
              <NavItem
                key={item.label}
                item={item}
                openDropdown={openDropdown}
                setOpenDropdown={setOpenDropdown}
                location={location}
              />
            ))}

            {/* Theme Toggle */}
            <ThemeToggle className="ml-2" />

            {/* CTA Button */}
            <Button asChild className="ml-4 group">
              <Link to="/contact">
                Start a project
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>

          {/* Mobile: Theme Toggle & Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <ThemeToggle />
            <motion.button
              className="p-2.5 rounded-full bg-white/10 dark:bg-white/10 border border-white/20 dark:border-white/20 text-white dark:text-white hover:bg-white/20 hover:border-accent transition-all"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
              whileTap={{ scale: 0.95 }}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </motion.button>
          </div>
        </nav>
      </Container>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-[#0D0D0D] dark:bg-[#0D0D0D] border-t border-white/10"
          >
            <Container className="py-6">
              <div className="flex flex-col gap-2">
                {navigation.map((item) => (
                  <MobileNavItem
                    key={item.label}
                    item={item}
                    openDropdown={openDropdown}
                    setOpenDropdown={setOpenDropdown}
                    location={location}
                  />
                ))}
                <div className="pt-4 mt-2 border-t border-white/10">
                  <Button className="w-full" asChild>
                    <Link to="/contact">
                      Start a project
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

// Desktop Nav Item Component
interface NavItemProps {
  item: {
    label: string
    href: string
    children?: { label: string; href: string }[]
  }
  openDropdown: string | null
  setOpenDropdown: (label: string | null) => void
  location: { pathname: string }
}

function NavItem({ item, openDropdown, setOpenDropdown, location }: NavItemProps) {
  const isActive = item.children
    ? location.pathname.startsWith(item.href)
    : location.pathname === item.href

  return (
    <div className="relative group">
      {item.children ? (
        <button
          className={cn(
            'flex items-center gap-1 px-4 py-2 rounded-full text-white/70 hover:text-white transition-all duration-300 text-sm font-medium',
            isActive && 'text-accent'
          )}
          onMouseEnter={() => setOpenDropdown(item.label)}
          onMouseLeave={() => setOpenDropdown(null)}
        >
          {item.label}
          <ChevronDown className={cn(
            'w-4 h-4 transition-transform duration-300',
            openDropdown === item.label && 'rotate-180'
          )} />
        </button>
      ) : (
        <Link
          to={item.href}
          className={cn(
            'px-4 py-2 rounded-full text-white/70 hover:text-white transition-all duration-300 block text-sm font-medium',
            isActive && 'text-accent'
          )}
        >
          {item.label}
        </Link>
      )}

      {/* Dropdown */}
      {item.children && (
        <div
          className={cn(
            'absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2 z-50'
          )}
          onMouseEnter={() => setOpenDropdown(item.label)}
          onMouseLeave={() => setOpenDropdown(null)}
        >
          <motion.div
            className="p-2 min-w-[220px] rounded-2xl bg-[#1a1a1a] border border-white/10 shadow-2xl"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            {item.children.map((child, index) => (
              <Link
                key={child.label}
                to={child.href}
                className={cn(
                  'block px-4 py-3 rounded-xl text-white/70 hover:text-accent hover:bg-accent/10 transition-all duration-200 text-sm',
                  location.pathname === child.href && 'text-accent bg-accent/10',
                  index === 0 && 'text-accent font-medium'
                )}
              >
                {child.label}
              </Link>
            ))}
          </motion.div>
        </div>
      )}
    </div>
  )
}

// Mobile Nav Item Component
function MobileNavItem({ item, openDropdown, setOpenDropdown, location }: NavItemProps) {
  const isActive = item.children
    ? location.pathname.startsWith(item.href)
    : location.pathname === item.href

  return (
    <div>
      {item.children ? (
        <div>
          <button
            className={cn(
              'flex items-center justify-between w-full px-4 py-3 rounded-xl text-white/70 hover:text-white hover:bg-white/5 transition-all',
              isActive && 'text-accent'
            )}
            onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
          >
            {item.label}
            <ChevronDown
              className={cn(
                'w-4 h-4 transition-transform duration-300',
                openDropdown === item.label && 'rotate-180'
              )}
            />
          </button>
          <AnimatePresence>
            {openDropdown === item.label && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="pl-4 overflow-hidden"
              >
                {item.children.map((child) => (
                  <Link
                    key={child.label}
                    to={child.href}
                    className={cn(
                      'block px-4 py-2.5 text-white/60 hover:text-accent transition-colors',
                      location.pathname === child.href && 'text-accent'
                    )}
                  >
                    {child.label}
                  </Link>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ) : (
        <Link
          to={item.href}
          className={cn(
            'block px-4 py-3 rounded-xl text-white/70 hover:text-white hover:bg-white/5 transition-all',
            isActive && 'text-accent'
          )}
        >
          {item.label}
        </Link>
      )}
    </div>
  )
}
