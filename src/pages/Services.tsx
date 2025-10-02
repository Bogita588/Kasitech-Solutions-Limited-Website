import { Download, MapPin, Phone, Mail, MessageCircle, CheckCircle, Clock, TrendingUp, Shield, Award, FileText, Users, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const Services = () => {
  const packages = [
    {
      id: 1,
      name: "One-Pager Website",
      subtitle: "Budget-Friendly Landing Page",
      price: "KES 25,000",
      hirePurchase: "KES 15,000 upfront + 10,000 x 1 monthly",
      timeline: "3–5 working days",
      icon: <Zap className="w-8 h-8" />,
      features: [
        "Single-page responsive website",
        "Perfect for portfolios, events, or simple business info",
        "Free SSL Certificate (security)",
        "Domain name (.co.ke or .com) – 1 year included",
        "Basic hosting (1 year included)",
        "WhatsApp integration",
        "Mobile-friendly design"
      ],
      gradient: "from-cyan-500 to-blue-400"
    },
    {
      id: 2,
      name: "Starter Website",
      subtitle: "For Small Businesses / Individuals",
      price: "KES 45,000",
      hirePurchase: "KES 25,000 upfront + 10,000 x 2 monthly",
      timeline: "7–10 working days",
      icon: <Zap className="w-8 h-8" />,
      features: [
        "1–5 pages (Home, About, Services, Contact, etc.)",
        "Responsive design (mobile-friendly)",
        "Free SSL Certificate (security)",
        "Domain name (.co.ke or .com) – 1 year included",
        "Hosting (Basic plan – 1 year included)",
        "1 Business Email Setup",
        "WhatsApp integration for quick contact"
      ],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      id: 3,
      name: "Business Pro Website",
      subtitle: "For Growing SMEs",
      price: "KES 80,000",
      hirePurchase: "KES 40,000 upfront + 20,000 x 2 monthly",
      timeline: "2–3 weeks",
      icon: <TrendingUp className="w-8 h-8" />,
      popular: true,
      features: [
        "5–12 pages (includes blog, services, portfolio, contact forms)",
        "SEO optimization (basic on-page SEO setup)",
        "Domain + Hosting (1 year included)",
        "3 Business Emails Setup",
        "Integrated WhatsApp Chat, Call, & Email buttons",
        "Google Analytics & Search Console setup",
        "Website audit report after delivery"
      ],
      gradient: "from-primary to-accent"
    },
    {
      id: 4,
      name: "Ecommerce Website",
      subtitle: "For Online Stores",
      price: "KES 150,000",
      hirePurchase: "KES 75,000 upfront + 25,000 x 3 monthly",
      timeline: "3–5 weeks",
      icon: <Shield className="w-8 h-8" />,
      features: [
        "Up to 100 products (expandable)",
        "Cart, checkout, payment gateway integration (M-Pesa, Cards, PayPal)",
        "Product filters, categories, search function",
        "Domain + Hosting (1 year included, with higher capacity)",
        "5 Business Emails Setup",
        "Inventory management system",
        "SEO setup (product SEO, sitemap, metadata)",
        "Free training on managing your store"
      ],
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      id: 5,
      name: "WordPress / Divi Website",
      subtitle: "Content Management Made Easy",
      price: "KES 60,000",
      hirePurchase: "KES 30,000 upfront + 15,000 x 2 monthly",
      timeline: "10–14 working days",
      icon: <Users className="w-8 h-8" />,
      features: [
        "WordPress website with Divi builder",
        "Easy-to-edit drag-and-drop interface",
        "Up to 10 pages",
        "Domain + Hosting (1 year included)",
        "2 Business Emails Setup",
        "SEO basics and mobile responsiveness",
        "Training on how to update content yourself"
      ],
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      id: 6,
      name: "Custom Web / App Development",
      subtitle: "For Enterprises & Startups",
      price: "Starting from KES 250,000",
      hirePurchase: "Available (negotiated based on project scope)",
      timeline: "Timeline depends on scope",
      icon: <Award className="w-8 h-8" />,
      features: [
        "Web or mobile app (Android/iOS)",
        "Custom coding (portals, booking systems, CRMs, etc.)",
        "Advanced integrations (APIs, payment systems)",
        "Domain + Hosting (enterprise-level, cost varies)",
        "Full documentation + training",
        "Dedicated support & maintenance options"
      ],
      gradient: "from-purple-500 to-pink-500"
    }
  ];

  const additionalServices = [
    {
      name: "Logo Design",
      price: "KES 5,000 – KES 15,000",
      description: "Professional logo design with 3 concepts, unlimited revisions, and source files"
    },
    {
      name: "Brochure & Flier Design",
      price: "KES 3,000 – KES 8,000",
      description: "Print-ready designs for brochures, fliers, posters, and banners"
    },
    {
      name: "Portfolio Website (One-Pager)",
      price: "KES 25,000",
      description: "Single-page portfolio site perfect for creatives and professionals"
    },
    {
      name: "Website Audit",
      price: "KES 15,000",
      description: "Performance, SEO, security, UX audit with recommendations"
    },
    {
      name: "SEO Monthly Package",
      price: "From KES 30,000/month",
      description: "On-page SEO, content optimization, backlinks strategy, monthly reports"
    }
  ];

  const addOns = [
    { item: "Domain renewal (.co.ke)", price: "KES 1,000/year" },
    { item: "Domain renewal (.com)", price: "KES 1,500/year" },
    { item: "Hosting renewal (basic)", price: "From KES 6,000/year" },
    { item: "Extra business email accounts", price: "KES 500/email/month" },
    { item: "Maintenance package", price: "From KES 10,000/month" }
  ];

  const whyChooseUs = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Progress Reports",
      description: "Regular updates during development"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "On-Time Delivery",
      description: "We guarantee timely project completion"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Client Feedback Forms",
      description: "Post-project feedback for continuous improvement"
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Full Documentation",
      description: "Complete user guide & technical docs"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Demos Available",
      description: "Request demos before final delivery"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Trend-Adaptive",
      description: "Designs that evolve with your business"
    }
  ];

  const faqs = [
    {
      question: "What payment methods do you accept?",
      answer: "We accept full payment upfront (with discounts available) or flexible hire-purchase installment plans tailored to SME needs. Payment methods include M-Pesa, Bank Transfer, and Card payments."
    },
    {
      question: "Can I see demos during development?",
      answer: "Absolutely! We provide demos at key milestones during development so you can review progress and provide feedback before final delivery."
    },
    {
      question: "What's included in the maintenance package?",
      answer: "Our maintenance packages (from KES 10,000/month) include regular updates, security backups, technical support, and minor content changes to keep your website running smoothly."
    },
    {
      question: "Do you provide training after delivery?",
      answer: "Yes! All packages include post-project documentation and user guides. For ecommerce and custom projects, we provide hands-on training to help you manage your website or app confidently."
    },
    {
      question: "What happens after my hosting/domain expires?",
      answer: "We'll notify you in advance of any renewals. You can renew through us at competitive rates, or we can help you manage renewals with other providers if you prefer."
    }
  ];

  const handleDownloadPDF = () => {
    // In a real implementation, this would download an actual PDF
    alert('PDF download will be available soon. Please contact us directly for a detailed quote.');
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="py-8 bg-gradient-to-br from-primary-light to-background dark:from-background dark:to-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Services & Pricing
            </h1>
            <p className="text-lg text-muted-foreground mb-6">
              Affordable, flexible, and tailored solutions for Nairobi SMEs. 
              Choose the package that fits your business needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              <Button onClick={handleDownloadPDF} className="btn-download">
                <Download className="w-5 h-5" />
                Download PDF Packages
              </Button>
              <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
                <Button variant="outline">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp Chat
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-8 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Packages
            </h2>
            <p className="text-lg text-muted-foreground">
              Flexible pricing with hire-purchase options available
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {packages.map((pkg) => (
              <Card key={pkg.id} className={`card-hover border-0 relative overflow-hidden ${pkg.popular ? 'ring-2 ring-accent' : ''}`}>
                {pkg.popular && (
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-accent text-accent-foreground">Most Popular</Badge>
                  </div>
                )}
                <CardHeader>
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${pkg.gradient} flex items-center justify-center text-white mb-4`}>
                    {pkg.icon}
                  </div>
                  <CardTitle className="text-2xl font-bold mb-1">{pkg.name}</CardTitle>
                  <p className="text-muted-foreground text-sm mb-4">{pkg.subtitle}</p>
                  <div className="space-y-3">
                    <div className="text-3xl font-bold text-primary">{pkg.price}</div>
                    <div className="bg-muted p-3 rounded-lg space-y-2">
                      <div className="text-xs font-semibold text-foreground mb-2">Payment Options:</div>
                      <div className="text-xs text-muted-foreground">
                        ✅ <span className="font-medium">One-time:</span> Full amount upfront
                      </div>
                      <div className="text-xs text-muted-foreground">
                        💳 <span className="font-medium">Hire Purchase:</span> {pkg.hirePurchase}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        📅 <span className="font-medium">Monthly (1 year):</span> Available with deposit
                      </div>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="w-4 h-4 mr-2" />
                      {pkg.timeline}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    {pkg.features.map((feature, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full" size="lg">
                    Get Quote
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-8 bg-gradient-to-br from-muted to-background dark:from-secondary dark:to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Brianix Tech Solutions?
            </h2>
            <p className="text-lg text-muted-foreground">
              We don't just build websites — we create growth engines for your business
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="card-hover text-center group">
                <div className="text-primary mb-3 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-8 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Additional Services
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {additionalServices.map((service, index) => (
              <Card key={index} className="card-hover border-0">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                  <p className="text-2xl font-bold text-primary mb-3">{service.price}</p>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="card-hover border-0">
            <CardHeader>
              <CardTitle className="text-xl">Add-Ons & Renewals</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {addOns.map((addon, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-muted rounded-lg">
                    <span className="text-sm font-medium">{addon.item}</span>
                    <span className="text-sm font-semibold text-primary">{addon.price}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-8 bg-gradient-to-br from-muted to-background dark:from-secondary dark:to-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg px-6 bg-card">
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
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

      {/* Contact CTA */}
      <section className="py-8 bg-gradient-to-r from-primary to-accent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-white/90 mb-6">
            📩 Contact us today for a free consultation
            <br />
            📥 Download our PDF or request a custom quote tailored to your project
            <br />
            📍 Visit us in Nairobi: Westlands (Waiyaki Way), Kangundo Road, or Magadi Road
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
            <Button onClick={handleDownloadPDF} size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90 border-white">
              <Download className="w-5 h-5 mr-2" />
              Download PDF
            </Button>
            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="btn-whatsapp">
                <MessageCircle className="w-5 h-5" />
                WhatsApp Chat
              </Button>
            </a>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-white/90 text-sm">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Westlands (Waiyaki Way) | Kangundo Road | Magadi Road
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              [Your Phone]
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              [Your Email]
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
