import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, MessageCircle, Linkedin, Twitter, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-primary/5 to-accent/5 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center md:text-left">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 justify-center md:justify-start">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">BT</span>
              </div>
              <span className="font-bold text-xl text-foreground">Brianix Tech</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Your Digital Growth Partner – Web, Apps, SEO & Custom Solutions for SMEs and startups.
            </p>
            <div className="flex space-x-4 justify-center md:justify-start">
              <a href="#" className="text-primary hover:text-primary/80 transition-colors" aria-label="Visit our LinkedIn page">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-primary hover:text-primary/80 transition-colors" aria-label="Follow us on Twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-primary hover:text-primary/80 transition-colors" aria-label="View our GitHub profile">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Home
              </Link>
              <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                About Us
              </Link>
              <Link to="/services" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Services
              </Link>
              <Link to="/portfolio" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Portfolio
              </Link>
              <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Contact
              </Link>
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Services</h3>
            <nav className="flex flex-col space-y-2">
              <span className="text-muted-foreground text-sm">Web Development</span>
              <span className="text-muted-foreground text-sm">App Development</span>
              <span className="text-muted-foreground text-sm">SEO Services</span>
              <span className="text-muted-foreground text-sm">Custom Coding</span>
              <span className="text-muted-foreground text-sm">Website Audits</span>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Contact Us</h3>
            <div className="flex flex-col space-y-3">
              <a
                href="tel:+1234567890"
                className="flex items-center justify-center md:justify-start text-muted-foreground hover:text-primary transition-colors text-sm"
                aria-label="Call us at +1 (234) 567-890"
              >
                <Phone className="w-4 h-4 mr-2 text-primary" aria-hidden="true" />
                +1 (234) 567-890
              </a>
              <a
                href="mailto:hello@brianixtech.com"
                className="flex items-center justify-center md:justify-start text-muted-foreground hover:text-primary transition-colors text-sm"
                aria-label="Email us at hello@brianixtech.com"
              >
                <Mail className="w-4 h-4 mr-2 text-primary" aria-hidden="true" />
                hello@brianixtech.com
              </a>
              <div className="flex items-start justify-center md:justify-start text-muted-foreground text-sm">
                <MapPin className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0 text-primary" aria-hidden="true" />
                <div>
                  Westlands (Waiyaki Way)<br />
                  Kangundo Road<br />
                  Magadi Road, Nairobi
                </div>
              </div>
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp w-fit mx-auto md:mx-0"
                aria-label="Contact us on WhatsApp"
              >
                <MessageCircle className="w-4 h-4" aria-hidden="true" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-sm">
              © 2024 Brianix Tech Solutions. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;