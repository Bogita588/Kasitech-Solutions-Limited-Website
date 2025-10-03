import { useState } from 'react';
import { ExternalLink, ArrowRight, Star, TrendingUp, Zap, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { SEO } from '@/components/SEO';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Development' },
    { id: 'app', label: 'App Development' },
    { id: 'ecommerce', label: 'E-commerce' },
    { id: 'seo', label: 'SEO' }
  ];

  const projects = [
    {
      id: 1,
      title: "TechStart E-commerce Platform",
      category: "ecommerce",
      client: "TechStart Inc.",
      description: "Complete e-commerce solution with custom inventory management and payment integration",
      image: "/api/placeholder/600/400",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
      results: [
        "300% increase in online sales",
        "50% faster checkout process", 
        "99.9% uptime achieved"
      ],
      metrics: {
        performance: "95",
        conversion: "+300%",
        speed: "1.2s"
      },
      link: "https://techstart-demo.com",
      featured: true
    },
    {
      id: 2,
      title: "GrowthCorp Mobile App",
      category: "app",
      client: "GrowthCorp",
      description: "Cross-platform mobile app for customer relationship management",
      image: "/api/placeholder/600/400",
      technologies: ["React Native", "Firebase", "TypeScript"],
      results: [
        "50% increase in customer engagement",
        "40% reduction in response time",
        "10,000+ active users"
      ],
      metrics: {
        users: "10K+",
        rating: "4.8★",
        retention: "85%"
      },
      link: "https://growthcorp-app.com",
      featured: true
    },
    {
      id: 3,
      title: "InnovateLabs Website Redesign",
      category: "web",
      client: "InnovateLabs",
      description: "Modern, responsive website with focus on conversion optimization",
      image: "/api/placeholder/600/400",
      technologies: ["Next.js", "Tailwind CSS", "Prisma"],
      results: [
        "250% increase in lead generation",
        "60% improvement in page speed",
        "40% lower bounce rate"
      ],
      metrics: {
        leads: "+250%",
        speed: "A+",
        bounce: "-40%"
      },
      link: "https://innovatelabs.com",
      featured: false
    },
    {
      id: 4,
      title: "LocalBiz SEO Campaign",
      category: "seo",
      client: "Local Business Group",
      description: "Comprehensive SEO strategy for multi-location business",
      image: "/api/placeholder/600/400",
      technologies: ["SEO", "Analytics", "Content"],
      results: [
        "400% increase in organic traffic",
        "Top 3 rankings for key terms",
        "200% more local leads"
      ],
      metrics: {
        traffic: "+400%",
        rankings: "Top 3",
        leads: "+200%"
      },
      link: "#",
      featured: false
    },
    {
      id: 5,
      title: "FinTech Dashboard",
      category: "web",
      client: "FinanceFlow",
      description: "Advanced financial dashboard with real-time data visualization",
      image: "/api/placeholder/600/400", 
      technologies: ["React", "D3.js", "WebSocket", "AWS"],
      results: [
        "Real-time data processing",
        "99.99% system reliability",
        "50% faster decision making"
      ],
      metrics: {
        uptime: "99.99%",
        speed: "Real-time",
        users: "500+"
      },
      link: "https://financeflow-demo.com",
      featured: false
    },
    {
      id: 6,
      title: "Healthcare Mobile Solution",
      category: "app",
      client: "HealthCare Plus",
      description: "HIPAA-compliant mobile app for patient management",
      image: "/api/placeholder/600/400",
      technologies: ["Flutter", "Django", "PostgreSQL"],
      results: [
        "HIPAA compliance achieved",
        "80% reduction in paperwork",
        "5000+ patients managed"
      ],
      metrics: {
        compliance: "HIPAA",
        efficiency: "+80%",
        patients: "5K+"
      },
      link: "#",
      featured: false
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <>
      <SEO 
        title="Portfolio - Our Work & Success Stories | Brianix Tech Solutions"
        description="View our portfolio of successful web development, mobile app, SEO, and e-commerce projects. Real results: 300% increase in sales, 400% boost in organic traffic, 50+ completed projects."
        keywords="web development portfolio Kenya, app development case studies, SEO success stories Nairobi, ecommerce projects Kenya, Brianix Tech portfolio, Nairobi web design projects"
      />
      <div>
      {/* Hero Section */}
      <section className="py-8 bg-gradient-to-br from-primary-light to-background dark:from-background dark:to-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Work & Success Stories
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Discover how we've helped businesses like yours achieve exceptional 
              results through innovative digital solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="py-8 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Featured Case Studies
            </h2>
            <p className="text-xl text-muted-foreground">
              Deep dives into our most impactful projects
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {featuredProjects.map((project) => (
              <Card key={project.id} className="card-hover border-0 overflow-hidden">
                <div className="h-64 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-xl mx-auto mb-4 flex items-center justify-center">
                      {project.category === 'ecommerce' && <TrendingUp className="w-8 h-8 text-white" />}
                      {project.category === 'app' && <Zap className="w-8 h-8 text-white" />}
                      {project.category === 'web' && <Shield className="w-8 h-8 text-white" />}
                    </div>
                    <Badge variant="secondary">{project.category}</Badge>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                      <p className="text-muted-foreground text-sm mb-2">{project.client}</p>
                    </div>
                    {project.link !== '#' && (
                      <Button variant="ghost" size="sm" asChild>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </Button>
                    )}
                  </div>
                  <p className="text-muted-foreground">{project.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Key Results:</h4>
                      <ul className="space-y-1">
                        {project.results.map((result, index) => (
                          <li key={index} className="text-sm text-muted-foreground flex items-center">
                            <Star className="w-4 h-4 text-accent mr-2" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
                      {Object.entries(project.metrics).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="font-bold text-primary">{value}</div>
                          <div className="text-xs text-muted-foreground capitalize">{key}</div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex flex-wrap gap-2 pt-4">
                      {project.technologies.map((tech, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Projects */}
      <section className="py-8 bg-gradient-to-br from-muted to-background dark:from-secondary dark:to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              All Projects
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Browse our complete portfolio by category
            </p>
            
            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              {filters.map((filter) => (
                <Button
                  key={filter.id}
                  variant={activeFilter === filter.id ? "default" : "outline"}
                  onClick={() => setActiveFilter(filter.id)}
                  className="min-w-[120px]"
                >
                  {filter.label}
                </Button>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="card-hover border-0">
                <div className="h-48 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg mx-auto mb-3 flex items-center justify-center">
                      {project.category === 'ecommerce' && <TrendingUp className="w-6 h-6 text-white" />}
                      {project.category === 'app' && <Zap className="w-6 h-6 text-white" />}
                      {project.category === 'web' && <Shield className="w-6 h-6 text-white" />}
                      {project.category === 'seo' && <Star className="w-6 h-6 text-white" />}
                    </div>
                    <Badge variant="secondary">{project.category}</Badge>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg mb-1">{project.title}</CardTitle>
                      <p className="text-muted-foreground text-sm">{project.client}</p>
                    </div>
                    {project.link !== '#' && (
                      <Button variant="ghost" size="sm" asChild>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </Button>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                  
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    {Object.entries(project.metrics).map(([key, value]) => (
                      <div key={key} className="text-center p-2 bg-primary-light rounded-lg">
                        <div className="font-semibold text-primary text-sm">{value}</div>
                        <div className="text-xs text-muted-foreground capitalize">{key}</div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 bg-gradient-to-r from-primary to-accent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Join Our Success Stories?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let's create something amazing together. Start your project today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90 border-white">
              Start Your Project
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

export default Portfolio;