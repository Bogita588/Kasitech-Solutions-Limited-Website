import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from './ThemeToggle';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">BT</span>
            </div>
            <span className="font-bold text-xl text-foreground">Brianix Tech</span>
          </Link>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden md:flex items-center justify-center flex-1 space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  isActive(item.href)
                    ? 'text-primary'
                    : 'text-muted-foreground hover:text-primary'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Contact Actions - Right Aligned */}
          <div className="hidden lg:flex items-center space-x-3">
            <a
              href="tel:+1234567890"
              className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4 mr-1" />
              +1 (234) 567-890
            </a>
            <a
              href="mailto:hello@brianixtech.com"
              className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="w-4 h-4 mr-1" />
              Email
            </a>
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
            <ThemeToggle />
          </div>

          {/* Mobile menu button and theme toggle */}
          <div className="flex items-center space-x-2">
            <div className="lg:hidden">
              <ThemeToggle />
            </div>
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    isActive(item.href)
                      ? 'text-primary'
                      : 'text-muted-foreground hover:text-primary'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-border">
                <div className="flex flex-col space-y-2">
                  <a
                    href="tel:+1234567890"
                    className="flex items-center text-sm text-muted-foreground"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    +1 (234) 567-890
                  </a>
                  <a
                    href="mailto:hello@brianixtech.com"
                    className="flex items-center text-sm text-muted-foreground"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    hello@brianixtech.com
                  </a>
                  <a
                    href="https://wa.me/1234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-whatsapp w-fit"
                  >
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;