import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from './ThemeToggle';
import { cn } from '@/lib/utils';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Shop', href: '/shop' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 inset-x-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-background/85 backdrop-blur-md border-b border-border shadow-soft'
          : 'bg-background/70 backdrop-blur'
      )}
    >
      <div className="container-page">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group" aria-label="Kasitech Solutions home">
            <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center shadow-card group-hover:scale-105 transition-transform">
              <span className="text-primary-foreground font-display font-bold text-base">K</span>
            </div>
            <div className="leading-tight">
              <div className="font-display font-bold text-lg text-foreground">Kasitech</div>
              <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Solutions Ltd</div>
            </div>
          </Link>

          {/* Desktop nav — centered */}
          <nav className="hidden lg:flex items-center gap-1 absolute left-1/2 -translate-x-1/2" aria-label="Main">
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                end={item.href === '/'}
                className={({ isActive }) =>
                  cn(
                    'px-4 py-2 text-sm font-medium rounded-lg transition-colors',
                    isActive
                      ? 'text-accent'
                      : 'text-foreground/80 hover:text-accent hover:bg-accent/5'
                  )
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* Right cluster */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+254700000000"
              className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-accent transition-colors"
              aria-label="Call Kasitech"
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              +254 700 000 000
            </a>
            <ThemeToggle />
            <Button asChild className="bg-cta hover:bg-cta-hover text-cta-foreground rounded-xl">
              <Link to="/contact">Get a Quote</Link>
            </Button>
          </div>

          {/* Mobile cluster */}
          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen((v) => !v)}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile nav */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-border py-4 animate-fade-in">
            <nav className="flex flex-col gap-1" aria-label="Mobile">
              {navigation.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  end={item.href === '/'}
                  className={({ isActive }) =>
                    cn(
                      'px-4 py-3 rounded-lg text-base font-medium transition-colors',
                      isActive ? 'text-accent bg-accent/10' : 'text-foreground hover:bg-muted'
                    )
                  }
                >
                  {item.name}
                </NavLink>
              ))}
              <Button asChild className="bg-cta hover:bg-cta-hover text-cta-foreground rounded-xl mt-3">
                <Link to="/contact">Get a Quote</Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
