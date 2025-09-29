import { ArrowRight, CheckCircle, Star, Users, Zap, Globe, Smartphone, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import heroImage from '@/assets/hero-bg.jpg';
import { AnimatedText } from '@/components/AnimatedText';
import { ParticleBackground } from '@/components/ParticleBackground';
import { ScrollAnimation } from '@/components/ScrollAnimations';

const Index = () => {
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
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-accent/70 dark:from-primary/95 dark:via-accent/85 dark:to-primary/90"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/20 dark:to-background/40"></div>
        </div>
        
        <ParticleBackground />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 blur-xl rounded-full dark:from-primary/30 dark:to-accent/30"></div>
            <h1 className="relative text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              <AnimatedText 
                text="We Build Stunning" 
                className="block" 
                speed={80}
              />
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-accent-foreground to-white animate-pulse">
                <AnimatedText 
                  text="Websites & Apps" 
                  className="" 
                  speed={60}
                />
              </span>
              <AnimatedText 
                text="That Grow Your Business" 
                className="block bg-gradient-to-r from-white to-accent-foreground bg-clip-text text-transparent" 
                speed={70}
              />
            </h1>
          </div>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto fade-in">
            Custom web development, SEO, audits, & app development for SMEs & startups.
            Get results that matter to your bottom line.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center fade-in">
            <Button className="btn-hero" size="lg">
              Get a Free Quote
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button variant="outline" size="lg" className="btn-secondary">
              View Our Work
            </Button>
          </div>
          
          <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-white/80">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white">{stat.number}</div>
                <div className="text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 bg-gradient-to-br from-primary-light to-background dark:from-background dark:to-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollAnimation animation="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Brianix Tech Solutions?
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              3 dedicated experts, years of combined experience, passion for quality, transparent pricing.
            </p>
          </ScrollAnimation>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollAnimation animation="fade-up" delay={100}>
              <div className="card-hover text-center group">
                <Zap className="w-12 h-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
                <p className="text-muted-foreground">Quick turnaround without compromising quality</p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animation="fade-up" delay={200}>
              <div className="card-hover text-center group">
                <Users className="w-12 h-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-semibold mb-2">Dedicated Team</h3>
                <p className="text-muted-foreground">Personal attention to every project detail</p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animation="fade-up" delay={300}>
              <div className="card-hover text-center group">
                <CheckCircle className="w-12 h-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-semibold mb-2">Proven Results</h3>
                <p className="text-muted-foreground">Track record of successful projects</p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation animation="fade-up">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Core Services
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Everything you need to establish and grow your digital presence
              </p>
            </div>
          </ScrollAnimation>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ScrollAnimation key={index} animation="scale-up" delay={index * 100}>
                <Card className="card-hover border-0 group overflow-hidden">
                  <CardContent className="p-8 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10">
                      <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                      <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                      <p className="text-muted-foreground mb-4">{service.description}</p>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm">
                            <CheckCircle className="w-4 h-4 text-accent mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-muted to-background dark:from-secondary dark:to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation animation="fade-up">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Hear From Our Happy Clients
              </h2>
              <p className="text-xl text-muted-foreground">
                Real results from real businesses
              </p>
            </div>
          </ScrollAnimation>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <ScrollAnimation key={index} animation="fade-up" delay={index * 150}>
                <Card className="card-hover border-0 group">
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
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent">
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
  );
};

export default Index;