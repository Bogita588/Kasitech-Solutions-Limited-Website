import { Globe, Smartphone, Search, Code, BarChart3, Palette, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const Services = () => {
  const services = [
    {
      icon: <Globe className="w-10 h-10" />,
      title: "Web Development",
      description: "Custom websites that convert visitors into customers",
      features: [
        "Responsive Design for All Devices",
        "Fast Loading & Performance Optimized", 
        "SEO-Friendly Architecture",
        "Content Management Systems",
        "E-commerce Integration",
        "Security & SSL Implementation"
      ],
      pricing: "Starting from $2,999",
      timeline: "2-6 weeks"
    },
    {
      icon: <Smartphone className="w-10 h-10" />,
      title: "App Development",
      description: "Mobile and web apps that scale with your business",
      features: [
        "Cross-Platform Development",
        "Native iOS & Android Apps",
        "Progressive Web Apps (PWA)",
        "API Integration & Backend",
        "User Authentication & Security",
        "App Store Deployment"
      ],
      pricing: "Starting from $4,999",
      timeline: "4-12 weeks"
    },
    {
      icon: <Search className="w-10 h-10" />,
      title: "SEO Services",
      description: "Get found by your ideal customers online",
      features: [
        "Comprehensive SEO Audits",
        "Keyword Research & Strategy",
        "On-Page & Technical SEO",
        "Content Optimization",
        "Local SEO & Google My Business",
        "Monthly Performance Reports"
      ],
      pricing: "Starting from $999/month",
      timeline: "Ongoing"
    },
    {
      icon: <Code className="w-10 h-10" />,
      title: "Custom Coding & E-commerce",
      description: "Bespoke solutions tailored to your unique needs",
      features: [
        "Custom Web Applications",
        "E-commerce Stores & Platforms",
        "Payment Gateway Integration",
        "Third-Party API Integrations",
        "Database Design & Management",
        "Legacy System Modernization"
      ],
      pricing: "Custom Quote",
      timeline: "Varies"
    },
    {
      icon: <BarChart3 className="w-10 h-10" />,
      title: "Website Audits",
      description: "Comprehensive analysis to optimize your digital presence",
      features: [
        "Performance & Speed Analysis",
        "SEO & Technical Audit",
        "Security Vulnerability Assessment",
        "UX/UI Review & Recommendations",
        "Conversion Rate Analysis",
        "Detailed Action Plan"
      ],
      pricing: "Starting from $499",
      timeline: "1-2 weeks"
    },
    {
      icon: <Palette className="w-10 h-10" />,
      title: "Landing Pages",
      description: "High-converting pages designed for campaigns",
      features: [
        "Conversion-Focused Design",
        "A/B Testing Setup",
        "Lead Capture Forms",
        "Analytics Integration",
        "Mobile Optimization",
        "Fast Deployment"
      ],
      pricing: "Starting from $799",
      timeline: "1-2 weeks"
    }
  ];

  const faqs = [
    {
      question: "How much do your services cost?",
      answer: "Our pricing varies based on project scope and requirements. We offer transparent, fixed-price quotes for most projects. Web development starts from $2,999, apps from $4,999, and SEO from $999/month. Contact us for a detailed quote."
    },
    {
      question: "How long does a typical project take?",
      answer: "Timeline depends on complexity. Simple websites take 2-3 weeks, complex web applications 4-8 weeks, and mobile apps 6-12 weeks. We provide detailed timelines during our initial consultation."
    },
    {
      question: "Do you offer ongoing support and maintenance?",
      answer: "Yes! We provide 30 days of free support after launch, followed by optional maintenance plans starting from $199/month. This includes updates, security monitoring, backups, and technical support."
    },
    {
      question: "Can you work with our existing systems?",
      answer: "Absolutely. We specialize in integrating with existing systems, APIs, and platforms. Whether it's CRM integration, payment systems, or legacy software, we can make it work seamlessly."
    },
    {
      question: "What's included in your SEO services?",
      answer: "Our SEO packages include keyword research, on-page optimization, technical SEO fixes, content recommendations, local SEO setup, and monthly performance reports. We focus on sustainable, white-hat techniques."
    },
    {
      question: "Do you provide hosting and domain services?",
      answer: "We can recommend and help set up hosting solutions that best fit your needs. We work with all major hosting providers and can manage the technical setup process for you."
    }
  ];

  const process = [
    { step: "1", title: "Discovery", description: "We understand your goals, target audience, and requirements" },
    { step: "2", title: "Strategy", description: "We create a detailed plan and timeline for your project" },
    { step: "3", title: "Design", description: "We design user-friendly interfaces that align with your brand" },
    { step: "4", title: "Development", description: "We build your solution using best practices and modern technologies" },
    { step: "5", title: "Testing", description: "We thoroughly test everything to ensure quality and performance" },
    { step: "6", title: "Launch", description: "We deploy your solution and provide training and documentation" },
    { step: "7", title: "Support", description: "We provide ongoing support and maintenance as needed" }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-light to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Services
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Comprehensive digital solutions to grow your business. From websites 
              to mobile apps, SEO to custom development – we've got you covered.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="card-hover border-0 h-full">
                <CardHeader>
                  <div className="text-primary mb-4">{service.icon}</div>
                  <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="border-t border-border pt-4 space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Starting Price:</span>
                      <span className="font-semibold text-primary">{service.pricing}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Timeline:</span>
                      <span className="font-semibold">{service.timeline}</span>
                    </div>
                  </div>
                  
                  <Button className="w-full mt-6" variant="outline">
                    Get Quote
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-muted to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A proven methodology that ensures your project is delivered on time, 
              within budget, and exceeds expectations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-6">
            {process.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground">
              Get answers to common questions about our services and process
            </p>
          </div>
          
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let's discuss your project and provide you with a detailed quote and timeline.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90 border-white">
              Get Free Consultation
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

export default Services;