import { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, Send, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { SEO } from '@/components/SEO';

const Contact = () => {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' });

  const onChange = (k: string, v: string) => setForm((p) => ({ ...p, [k]: v }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 800));
    toast({ title: 'Message sent', description: "We'll get back to you within 24 hours." });
    setForm({ name: '', email: '', phone: '', service: '', message: '' });
    setSubmitting(false);
  };

  return (
    <>
      <SEO
        title="Contact Kasitech Solutions — Talk to an IT Specialist Today"
        description="Get in touch with Kasitech Solutions Limited. Book a free consultation for IT consulting, cybersecurity, development, networking, training or equipment supply in Kenya."
        keywords="contact Kasitech, IT support Nairobi, request IT quote Kenya"
      />

      {/* Hero */}
      <section className="relative bg-gradient-hero text-white">
        <div className="container-page py-20 lg:py-24 text-center">
          <span className="eyebrow text-accent-foreground/90">Contact Us</span>
          <h1 className="heading-xl text-white mt-3 max-w-3xl mx-auto">
            Let's Discuss Your IT Project
          </h1>
          <p className="lead text-white/85 mt-5 max-w-2xl mx-auto">
            Tell us a bit about your needs and a Kasitech specialist will respond within one business day.
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="section">
        <div className="container-page grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Form (priority placement) */}
          <div className="lg:col-span-3 card-elevated p-8 order-1">
            <h2 className="heading-md">Send Us a Message</h2>
            <p className="lead mt-2">All fields with * are required.</p>
            <form onSubmit={onSubmit} className="mt-6 space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="text-sm font-medium block mb-1.5">Full Name *</label>
                  <Input id="name" required value={form.name} onChange={(e) => onChange('name', e.target.value)} placeholder="Jane Doe" />
                </div>
                <div>
                  <label htmlFor="email" className="text-sm font-medium block mb-1.5">Email *</label>
                  <Input id="email" type="email" required value={form.email} onChange={(e) => onChange('email', e.target.value)} placeholder="jane@company.co.ke" />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="text-sm font-medium block mb-1.5">Phone</label>
                  <Input id="phone" type="tel" value={form.phone} onChange={(e) => onChange('phone', e.target.value)} placeholder="+254 723 799 450" />
                </div>
                <div>
                  <label htmlFor="service" className="text-sm font-medium block mb-1.5">Service Needed</label>
                  <Select value={form.service} onValueChange={(v) => onChange('service', v)}>
                    <SelectTrigger id="service"><SelectValue placeholder="Choose a service" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="consulting">IT Consulting</SelectItem>
                      <SelectItem value="cybersecurity">Cybersecurity</SelectItem>
                      <SelectItem value="development">Web & App Development</SelectItem>
                      <SelectItem value="networking">Networking Solutions</SelectItem>
                      <SelectItem value="training">IT Training</SelectItem>
                      <SelectItem value="equipment">IT Equipment</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div>
                <label htmlFor="message" className="text-sm font-medium block mb-1.5">Message *</label>
                <Textarea id="message" required rows={5} value={form.message} onChange={(e) => onChange('message', e.target.value)} placeholder="Tell us about your project..." />
              </div>
              <Button type="submit" disabled={submitting} className="w-full bg-cta hover:bg-cta-hover text-cta-foreground h-12 rounded-xl">
                {submitting ? 'Sending…' : (<>Send Message <Send className="w-4 h-4 ml-1" /></>)}
              </Button>
            </form>
          </div>

          {/* Contact info */}
          <aside className="lg:col-span-2 space-y-5 order-2">
            <div className="card-elevated">
              <h3 className="text-base font-semibold flex items-center gap-2"><MapPin className="w-5 h-5 text-accent" /> Office</h3>
              <p className="text-sm text-muted-foreground mt-3">
                Kasitech Solutions Limited<br />
                Westlands, Nairobi, Kenya
              </p>
            </div>
            <div className="card-elevated">
              <h3 className="text-base font-semibold flex items-center gap-2"><Phone className="w-5 h-5 text-accent" /> Call Us</h3>
              <a href="tel:+254723799450" className="text-sm text-foreground/85 hover:text-accent block mt-3">+254 723 799 450</a>
              <a href="mailto:info@kasitech.co.ke" className="text-sm text-foreground/85 hover:text-accent flex items-center gap-2 mt-2"><Mail className="w-4 h-4" /> info@kasitech.co.ke</a>
            </div>
            <div className="card-elevated">
              <h3 className="text-base font-semibold flex items-center gap-2"><Clock className="w-5 h-5 text-accent" /> Hours</h3>
              <p className="text-sm text-muted-foreground mt-3">Mon – Fri: 8:00 AM – 5:30 PM<br />Sat: 9:00 AM – 1:00 PM<br />24/7 emergency support for SLA clients</p>
            </div>
            <a href="https://wa.me/254723799450" target="_blank" rel="noopener noreferrer" className="btn-whatsapp w-full justify-center">
              <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
            </a>
          </aside>
        </div>
      </section>
    </>
  );
};

export default Contact;
