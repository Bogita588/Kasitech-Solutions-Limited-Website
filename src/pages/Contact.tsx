import { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, Clock, CheckCircle, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { SEO } from '@/components/SEO';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: '',
    budget: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 24 hours.",
    });
    
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      service: '',
      budget: '',
      message: ''
    });
    setIsSubmitting(false);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactMethods = [
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "WhatsApp",
      description: "Get instant responses to your questions",
      action: "Message us",
      link: "https://wa.me/1234567890",
      color: "bg-[#25D366]"
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Phone",
      description: "Speak directly with our team",
      action: "Call now",
      link: "tel:+1234567890",
      color: "bg-primary"
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Email",
      description: "Send us a detailed message",
      action: "Send email",
      link: "mailto:hello@brianixtech.com",
      color: "bg-accent"
    }
  ];

  const officeHours = [
    { day: "Monday - Friday", hours: "8:00 AM - 4:00 PM EAT" },
    { day: "Saturday - Sunday", hours: "By Appointment Only" }
  ];

  return (
    <>
      <SEO 
        title="Contact Us - Get Free Quote | Brianix Tech Solutions Nairobi"
        description="Contact Brianix Tech Solutions for professional web development, SEO, and app development services in Nairobi. Free consultation and quote. WhatsApp, phone, and email support available."
        keywords="contact Brianix Tech, web development Nairobi contact, free quote web development Kenya, WhatsApp business support Nairobi, Westlands tech company, Kangundo Road developers"
      />
      <div>
      {/* Hero Section */}
      <section className="py-8 bg-gradient-to-br from-primary-light to-background dark:from-background dark:to-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Get In Touch
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Ready to elevate your digital presence? Let's start your project together. 
              Get a free consultation and quote today.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-8 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="card-hover border-0">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">Send us a message</CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Name *</label>
                      <Input
                        required
                        value={formData.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Company</label>
                      <Input
                        value={formData.company}
                        onChange={(e) => handleChange('company', e.target.value)}
                        placeholder="Your company name"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Email *</label>
                      <Input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Phone</label>
                      <Input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Service Needed</label>
                      <Select value={formData.service} onValueChange={(value) => handleChange('service', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="web">Web Development</SelectItem>
                          <SelectItem value="app">App Development</SelectItem>
                          <SelectItem value="seo">SEO Services</SelectItem>
                          <SelectItem value="custom">Custom Development</SelectItem>
                          <SelectItem value="audit">Website Audit</SelectItem>
                          <SelectItem value="landing">Landing Page</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Budget Range</label>
                      <Select value={formData.budget} onValueChange={(value) => handleChange('budget', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="under-5k">Under $5,000</SelectItem>
                          <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                          <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                          <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                          <SelectItem value="over-50k">$50,000+</SelectItem>
                          <SelectItem value="discuss">Let's discuss</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-2 block">Project Details *</label>
                    <Textarea
                      required
                      value={formData.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                      rows={4}
                    />
                  </div>
                  
                  <Button type="submit" disabled={isSubmitting} className="w-full" size="lg">
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Office Info */}
              <Card className="card-hover border-0">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MapPin className="w-5 h-5 mr-2 text-primary" />
                    Office Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Our Locations</h4>
                    <p className="text-muted-foreground">
                      <strong>Main Office:</strong> Westlands, Waiyaki Way<br />
                      <strong>Branch:</strong> Kangundo Road<br />
                      <strong>Branch:</strong> Magadi Road<br />
                      Nairobi, Kenya
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Contact Details</h4>
                    <div className="space-y-2">
                      <p className="text-muted-foreground flex items-center">
                        <Phone className="w-4 h-4 mr-2" />
                        +1 (234) 567-890
                      </p>
                      <p className="text-muted-foreground flex items-center">
                        <Mail className="w-4 h-4 mr-2" />
                        hello@brianixtech.com
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Office Hours */}
              <Card className="card-hover border-0">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Clock className="w-5 h-5 mr-2 text-primary" />
                    Office Hours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {officeHours.map((schedule, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="font-medium">{schedule.day}</span>
                        <span className="text-muted-foreground">{schedule.hours}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 p-4 bg-primary-light rounded-lg">
                    <p className="text-sm text-muted-foreground flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 text-accent" />
                      Emergency support available 24/7 for existing clients
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Response */}
              <Card className="card-hover border-0 bg-gradient-to-br from-primary/5 to-accent/5">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2">Quick Response Guarantee</h3>
                  <p className="text-muted-foreground mb-4">
                    We typically respond to all inquiries within 2-4 hours during business hours.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 text-accent mr-2" />
                      Free initial consultation
                    </div>
                    <div className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 text-accent mr-2" />
                      Detailed project proposal
                    </div>
                    <div className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 text-accent mr-2" />
                      Transparent pricing
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-8 bg-gradient-to-br from-muted to-background dark:from-secondary dark:to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Other Ways to Reach Us
            </h2>
            <p className="text-xl text-muted-foreground">
              Choose your preferred way to connect
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <Card key={index} className="card-hover border-0 text-center">
                <CardContent className="p-8">
                  <div className={`w-16 h-16 ${method.color} rounded-full flex items-center justify-center text-white mx-auto mb-4`}>
                    {method.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{method.title}</h3>
                  <p className="text-muted-foreground mb-4">{method.description}</p>
                  <Button asChild variant="outline" className="w-full">
                    <a href={method.link} target={method.link.startsWith('http') ? '_blank' : '_self'} rel="noopener noreferrer">
                      {method.action}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default Contact;