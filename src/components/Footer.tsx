import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

const logoUrl = new URL('../assets/kasitech-logo.webp', import.meta.url).href;

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#0A2540] dark:bg-slate-950 text-primary-foreground dark:text-white mt-16" role="contentinfo">
      <div className="container-page py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center sm:text-left">
          {/* Brand */}
          <div className="space-y-4 flex flex-col items-center sm:items-start">
            <Link to="/" className="flex items-center group">
              <div className="w-28 h-14 rounded-[1.25rem] overflow-hidden bg-transparent flex items-center justify-center shadow-card group-hover:scale-105 transition-transform">
                <img src={logoUrl} alt="Kasitech logo" className="w-full h-full object-contain" />
              </div>
            </Link>
            <p className="text-sm text-primary-foreground/80 dark:text-white/80 max-w-xs">
              A reliable, modern and innovative IT partner for businesses, institutions and individuals across Kenya.
            </p>
            <div className="flex items-center gap-3 justify-center sm:justify-start">
              <a href="https://www.linkedin.com/company/kasitech-solutions-limited/?viewAsMember=true" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-9 h-9 rounded-full bg-white/10 hover:bg-accent flex items-center justify-center transition-colors text-white">
                <Linkedin className="w-4 h-4" />
              </a>
              {/* <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="w-9 h-9 rounded-full bg-white/10 hover:bg-accent flex items-center justify-center transition-colors text-white">
                <Twitter className="w-4 h-4" />
              </a> */}
              <a href="https://www.facebook.com/profile.php?id=61576251848442" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-9 h-9 rounded-full bg-white/10 hover:bg-accent flex items-center justify-center transition-colors text-white">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold text-primary-foreground dark:text-white mb-4 text-sm uppercase tracking-wider">Kasitech</h4>
            <ul className="space-y-2.5 text-sm text-primary-foreground/80 dark:text-white/80">
              <li><Link to="/about" className="hover:text-accent transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-accent transition-colors">Services</Link></li>
              <li><Link to="/shop" className="hover:text-accent transition-colors">IT Equipment</Link></li>
              <li><Link to="/blog" className="hover:text-accent transition-colors">Blog</Link></li>
              <li><a href="https://wa.me/254723799450" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-primary-foreground dark:text-white mb-4 text-sm uppercase tracking-wider">Services</h4>
            <ul className="space-y-2.5 text-sm text-primary-foreground/80 dark:text-white/80">
              <li><Link to="/services#consulting" className="hover:text-accent transition-colors">IT Consulting</Link></li>
              <li><Link to="/services#cybersecurity" className="hover:text-accent transition-colors">Cybersecurity</Link></li>
              <li><Link to="/services#development" className="hover:text-accent transition-colors">Web & App Development</Link></li>
              <li><Link to="/services#networking" className="hover:text-accent transition-colors">Networking Solutions</Link></li>
              <li><Link to="/services#training" className="hover:text-accent transition-colors">IT Training & Certifications</Link></li>
              <li><Link to="/services#equipment" className="hover:text-accent transition-colors">IT Equipment Supply</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-primary-foreground dark:text-white mb-4 text-sm uppercase tracking-wider">Contact</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/80 dark:text-white/80">
              <li className="flex items-start gap-2 justify-center sm:justify-start">
                <MapPin className="w-4 h-4 mt-0.5 text-accent shrink-0" aria-hidden="true" />
                <span>Westlands, Nairobi, Kenya</span>
              </li>
              <li className="flex items-center gap-2 justify-center sm:justify-start">
                <Phone className="w-4 h-4 text-accent shrink-0" aria-hidden="true" />
                <a href="tel:+254723799450" className="hover:text-accent transition-colors">+254 723 799 450</a>
              </li>
              <li className="flex items-center gap-2 justify-center sm:justify-start">
                <Mail className="w-4 h-4 text-accent shrink-0" aria-hidden="true" />
                <a href="mailto:info@kasitech.co.ke" className="hover:text-accent transition-colors">info@kasitech.co.ke</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-primary-foreground/60 dark:text-white/60 text-center">
          <p>© {year} Kasitech Solutions Limited. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <Link to="/privacy-policy" className="hover:text-accent transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-accent transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
