import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Container, Button } from '@/components/ui'
import { navigation } from '@/data/siteConfig'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
    setOpenDropdown(null)
  }, [location.pathname])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  return (
    <>
      {/* Main Header */}
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled
            ? 'py-3 bg-[#0D0D0D]/95 backdrop-blur-xl border-b border-white/10'
            : 'py-4 bg-transparent'
        )}
      >
        <Container>
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="relative z-10">
              <img
                src="/assets/yoglogo.png"
                alt="YUVA OG"
                className={cn(
                  'w-auto transition-all duration-300',
                  isScrolled ? 'h-16' : 'h-20'
                )}
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center">
              <div className="flex items-center bg-white/5 backdrop-blur-sm rounded-full px-2 py-1.5 border border-white/10">
                {navigation.map((item) => (
                  <NavItem
                    key={item.label}
                    item={item}
                    openDropdown={openDropdown}
                    setOpenDropdown={setOpenDropdown}
                    location={location}
                  />
                ))}
              </div>
            </div>

            {/* Desktop CTA Button */}
            <div className="hidden lg:block">
              <Button asChild size="sm" className="group">
                <Link to="/contact">
                  Let's Talk
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden w-12 h-12 flex items-center justify-center rounded-xl bg-accent text-black"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </nav>
        </Container>
      </header>

      {/* Mobile Menu Overlay - Completely separate from header */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 z-[99999]"
          style={{ backgroundColor: '#0D0D0D' }}
        >
          {/* Mobile Header */}
          <div className="flex items-center justify-between px-4 py-4 border-b border-white/10">
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
              <img
                src="/assets/yoglogo.png"
                alt="YUVA OG"
                className="h-10 w-auto"
              />
            </Link>
            <button
              className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/10 text-white"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className="px-4 py-6 overflow-y-auto" style={{ maxHeight: 'calc(100vh - 80px)' }}>
            <nav className="space-y-2">
              {navigation.map((item) => (
                <MobileNavItem
                  key={item.label}
                  item={item}
                  openDropdown={openDropdown}
                  setOpenDropdown={setOpenDropdown}
                  location={location}
                  closeMenu={() => setIsMobileMenuOpen(false)}
                />
              ))}
            </nav>

            <div className="mt-8 pt-6 border-t border-white/10">
              <Button className="w-full" size="lg" asChild>
                <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                  Let's Talk
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
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
            'flex items-center gap-1.5 px-4 py-2 text-sm font-medium transition-colors',
            isActive ? 'text-accent' : 'text-white/70 hover:text-white'
          )}
          onMouseEnter={() => setOpenDropdown(item.label)}
          onMouseLeave={() => setOpenDropdown(null)}
        >
          {item.label}
          <ChevronDown className={cn(
            'w-3.5 h-3.5 transition-transform duration-200',
            openDropdown === item.label && 'rotate-180'
          )} />
        </button>
      ) : (
        <Link
          to={item.href}
          className={cn(
            'relative px-4 py-2 text-sm font-medium transition-colors block',
            isActive ? 'text-accent' : 'text-white/70 hover:text-white'
          )}
        >
          {item.label}
        </Link>
      )}

      {/* Dropdown */}
      {item.children && (
        <div
          className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"
          onMouseEnter={() => setOpenDropdown(item.label)}
          onMouseLeave={() => setOpenDropdown(null)}
        >
          <div className="p-2 min-w-[200px] rounded-xl bg-[#141414] border border-white/10 shadow-xl">
            {item.children.map((child) => (
              <Link
                key={child.label}
                to={child.href}
                className={cn(
                  'block px-4 py-2.5 rounded-lg text-sm transition-colors',
                  location.pathname === child.href
                    ? 'text-accent bg-accent/10'
                    : 'text-white/70 hover:text-white hover:bg-white/5'
                )}
              >
                {child.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

// Mobile Nav Item Component
interface MobileNavItemProps extends NavItemProps {
  closeMenu: () => void
}

function MobileNavItem({ item, openDropdown, setOpenDropdown, location, closeMenu }: MobileNavItemProps) {
  const isActive = item.children
    ? location.pathname.startsWith(item.href)
    : location.pathname === item.href

  if (item.children) {
    return (
      <div>
        <button
          className={cn(
            'flex items-center justify-between w-full px-4 py-4 text-lg font-medium rounded-xl transition-colors',
            isActive ? 'text-accent' : 'text-white'
          )}
          onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
        >
          {item.label}
          <ChevronDown
            className={cn(
              'w-5 h-5 transition-transform duration-200',
              openDropdown === item.label && 'rotate-180'
            )}
          />
        </button>
        {openDropdown === item.label && (
          <div className="ml-4 mt-1 space-y-1 border-l-2 border-white/10 pl-4">
            {item.children.map((child) => (
              <Link
                key={child.label}
                to={child.href}
                onClick={closeMenu}
                className={cn(
                  'block py-3 text-base transition-colors',
                  location.pathname === child.href
                    ? 'text-accent'
                    : 'text-white/60 hover:text-white'
                )}
              >
                {child.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    )
  }

  return (
    <Link
      to={item.href}
      onClick={closeMenu}
      className={cn(
        'block px-4 py-4 text-lg font-medium rounded-xl transition-colors',
        isActive ? 'text-accent bg-accent/5' : 'text-white'
      )}
    >
      {item.label}
    </Link>
  )
}
