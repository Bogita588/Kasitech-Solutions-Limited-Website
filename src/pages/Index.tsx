import { ArrowRight, CheckCircle, Star, Users, Zap, Globe, Smartphone, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import heroImage from '@/assets/hero-bg.jpg';
import { AnimatedText } from '@/components/AnimatedText';
import { ParticleBackground } from '@/components/ParticleBackground';
import { SEO } from '@/components/SEO';

const Index = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Brianix Tech Solutions",
    "description": "Professional web development, mobile apps, and SEO services for SMEs & startups",
    "url": "https://brianixtech.com",
    "logo": "https://brianixtech.com/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-234-567-890",
      "contactType": "Customer Service",
      "areaServed": "KE",
      "availableLanguage": "English"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Westlands, Waiyaki Way",
      "addressLocality": "Nairobi",
      "addressCountry": "KE"
    },
    "sameAs": [
      "https://linkedin.com/company/brianixtech",
      "https://twitter.com/brianixtech",
      "https://github.com/brianixtech"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": "50"
    }
  };

  const services = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Web Development",
      description: "Custom websites that convert visitors into customers",
      features: ["Responsive Design", "Fast Loading", "SEO-Optimized"]
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "App Development", 
      description: "Mobile and web apps that scale with your business",
      features: ["Cross-Platform", "User-Friendly", "Scalable"]
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "SEO Services",
      description: "Get found by your ideal customers online",
      features: ["Keyword Research", "Technical SEO", "Content Strategy"]
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      text: "Brianix Tech transformed our online presence. Our website traffic increased by 300% in just 3 months!",
      rating: 5
    },
    {
      name: "Michael Chen",
      company: "GrowthCorp",
      text: "Professional, reliable, and delivered beyond expectations. The team understood our vision perfectly.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      company: "InnovateLabs",
      text: "Best investment we made this year. Our web app is now generating 50% more leads than before.",
      rating: 5
    }
  ];

  const stats = [
    { number: "99%", label: "Client Satisfaction" },
    { number: "50+", label: "Projects Completed" },
    { number: "24/7", label: "Support Available" },
    { number: "3x", label: "Average ROI Increase" }
  ];

  return (
    <>
      <SEO 
        title="Brianix Tech Solutions - Custom Web Development, Apps & SEO Services"
        description="Professional web development, mobile apps, and SEO services for SMEs & startups. Custom digital solutions that grow your business. 99% client satisfaction, 50+ projects completed."
        keywords="web development Kenya, mobile app development, SEO services Nairobi, custom software development, startup web solutions, SME digital services"
        structuredData={structuredData}
      />
      <div>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden" role="banner" aria-label="Hero section">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-accent/90 to-primary/95 dark:from-primary/98 dark:via-accent/95 dark:to-primary/98"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-primary/20 to-accent/30"></div>
        </div>
        
        <ParticleBackground />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="relative mb-8 mt-16">
            <div className="absolute -inset-8 bg-gradient-to-r from-accent/30 via-primary/40 to-accent/30 blur-3xl rounded-full animate-pulse"></div>
            <h1 className="relative text-3xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight tracking-tight">
              <AnimatedText 
                text="We Build Stunning Websites & Apps" 
                className="block drop-shadow-2xl" 
                speed={60}
              />
              <AnimatedText 
                text="That Grow Your Business" 
                className="block text-accent-foreground drop-shadow-lg mt-2" 
                speed={60}
              />
            </h1>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-white/10 blur-2xl rounded-full"></div>
            <p className="relative text-xl md:text-3xl text-white font-medium mb-10 max-w-4xl mx-auto drop-shadow-lg leading-relaxed">
              Your Digital Transformation Partner in <span className="text-accent-foreground font-bold">Nairobi</span> & Beyond
              <br />
              <span className="text-lg md:text-xl text-white/90 mt-2 block">
                Custom web development, SEO, design, & app development for SMEs & startups
              </span>
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center fade-in mb-12">
            <Button className="btn-hero text-lg px-10 py-7 shadow-2xl hover:shadow-accent/50 transition-all" size="lg" aria-label="Get a free quote for your project">
              Get a Free Quote
              <ArrowRight className="w-6 h-6 ml-2" aria-hidden="true" />
            </Button>
            <Button variant="outline" size="lg" className="btn-secondary text-lg px-10 py-7 bg-white/10 backdrop-blur-md border border-white/30 hover:bg-white/20" aria-label="View our portfolio of completed projects">
              View Our Work
            </Button>
          </div>
          
          <div className="mt-16 hidden md:grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group hover:scale-110 transition-transform duration-300">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-2xl group-hover:shadow-accent/50 transition-all">
                  <div className="text-3xl md:text-5xl font-black text-white mb-2 group-hover:text-accent-foreground transition-colors">{stat.number}</div>
                  <div className="text-sm md:text-base text-white/90 font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-8 bg-gradient-to-br from-primary-light to-background dark:from-background dark:to-secondary" aria-labelledby="trust-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 id="trust-heading" className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose Brianix Tech Solutions?
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            3 dedicated experts, years of combined experience, passion for quality, transparent pricing.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card-hover text-center group">
              <Zap className="w-12 h-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" aria-hidden="true" />
              <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
              <p className="text-muted-foreground">Quick turnaround without compromising quality</p>
            </div>
            <div className="card-hover text-center group">
              <Users className="w-12 h-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" aria-hidden="true" />
              <h3 className="text-xl font-semibold mb-2">Dedicated Team</h3>
              <p className="text-muted-foreground">Personal attention to every project detail</p>
            </div>
            <div className="card-hover text-center group">
              <CheckCircle className="w-12 h-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" aria-hidden="true" />
              <h3 className="text-xl font-semibold mb-2">Proven Results</h3>
              <p className="text-muted-foreground">Track record of successful projects</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-8 bg-background" aria-labelledby="services-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 id="services-heading" className="text-3xl md:text-4xl font-bold mb-4">
              Our Core Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to establish and grow your digital presence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="card-hover border-0 group overflow-hidden">
                <CardContent className="p-8 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true"></div>
                  <div className="relative z-10">
                    <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300" aria-hidden="true">{service.icon}</div>
                    <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm">
                          <CheckCircle className="w-4 h-4 text-primary mr-2" aria-hidden="true" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-8 bg-gradient-to-br from-muted to-background dark:from-secondary dark:to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Hear From Our Happy Clients
            </h2>
            <p className="text-xl text-muted-foreground">
              Real results from real businesses
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="card-hover border-0 group">
                <CardContent className="p-8 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current transform group-hover:scale-110 transition-transform duration-200" style={{ transitionDelay: `${i * 50}ms` }} />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Developer Discipline & Remote Excellence */}
      <section className="py-8 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Developer Discipline in a Remote Setting
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Professionalism, accountability, and structured processes—no matter where we work
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="card-hover border-0">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-3">Daily Communication</h3>
                <p className="text-muted-foreground text-sm">
                  Regular updates via WhatsApp, email, and Google Meet during working hours (8 AM–4 PM)
                </p>
              </CardContent>
            </Card>
            
            <Card className="card-hover border-0">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-3">Code Quality Assurance</h3>
                <p className="text-muted-foreground text-sm">
                  Code reviews, testing, and optimization ensure enterprise-level quality
                </p>
              </CardContent>
            </Card>
            
            <Card className="card-hover border-0">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-3">Milestone-Based Delivery</h3>
                <p className="text-muted-foreground text-sm">
                  Clear milestones defined at project start with demos at each phase
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-8 bg-gradient-to-br from-muted to-background dark:from-secondary dark:to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Development Process
            </h2>
            <p className="text-xl text-muted-foreground">
              From idea to delivery—transparent, structured, and client-centric
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            <Card className="card-hover border-0 text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                  1
                </div>
                <h3 className="text-lg font-semibold mb-2">Discovery</h3>
                <p className="text-sm text-muted-foreground">
                  We listen to your vision, goals, and requirements
                </p>
              </CardContent>
            </Card>
            
            <Card className="card-hover border-0 text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                  2
                </div>
                <h3 className="text-lg font-semibold mb-2">Planning</h3>
                <p className="text-sm text-muted-foreground">
                  Strategy, timeline, and milestones agreed upon
                </p>
              </CardContent>
            </Card>
            
            <Card className="card-hover border-0 text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                  3
                </div>
                <h3 className="text-lg font-semibold mb-2">Development</h3>
                <p className="text-sm text-muted-foreground">
                  Weekly progress reports and demos at key milestones
                </p>
              </CardContent>
            </Card>
            
            <Card className="card-hover border-0 text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                  4
                </div>
                <h3 className="text-lg font-semibold mb-2">Review</h3>
                <p className="text-sm text-muted-foreground">
                  Client feedback and adjustments before launch
                </p>
              </CardContent>
            </Card>
            
            <Card className="card-hover border-0 text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                  5
                </div>
                <h3 className="text-lg font-semibold mb-2">Delivery</h3>
                <p className="text-sm text-muted-foreground">
                  Documentation, training, and feedback form provided
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why We're Dependable */}
      <section className="py-8 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why We're Dependable
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Professional processes, transparent communication, and legal compliance
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="card-hover border-0">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-3">Progress Reports</h3>
                <p className="text-muted-foreground text-sm">
                  Weekly updates during development so you know exactly what's happening with your project
                </p>
              </CardContent>
            </Card>
            
            <Card className="card-hover border-0">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-3">On-Time Delivery</h3>
                <p className="text-muted-foreground text-sm">
                  We respect your timeline. Guaranteed delivery when promised, every single time
                </p>
              </CardContent>
            </Card>
            
            <Card className="card-hover border-0">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-3">Multiple Locations</h3>
                <p className="text-muted-foreground text-sm">
                  8 AM – 4 PM, Mon–Fri. Offices in Westlands (Waiyaki Way), Kangundo Road, and Magadi Road
                </p>
              </CardContent>
            </Card>
            
            <Card className="card-hover border-0">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-3">Post-Project Support</h3>
                <p className="text-muted-foreground text-sm">
                  Complete documentation, user guides, and feedback forms to ensure smooth handover
                </p>
              </CardContent>
            </Card>
            
            <Card className="card-hover border-0">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-3">Dispute Resolution</h3>
                <p className="text-muted-foreground text-sm">
                  3-tier professional resolution: proactive care, mediation, and arbitration under Kenya Arbitration Act
                </p>
              </CardContent>
            </Card>
            
            <Card className="card-hover border-0">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-3">Legal Compliance</h3>
                <p className="text-muted-foreground text-sm">
                  Fully compliant with KRA tax laws, Kenya Data Protection Act (2019), and ICT Authority guidelines
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 bg-gradient-to-r from-primary to-accent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Elevate Your Digital Presence?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let's start your project together. Get a free consultation and quote today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90 border-white">
              Request Quote
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp text-lg px-8 py-4"
            >
              WhatsApp Chat
            </a>
          </div>
        </div>
      </section>
      </div>
    </>
  );
};

export default Index;