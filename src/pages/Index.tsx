import { Link } from 'react-router-dom';
import {
  ArrowRight, Shield, Code2, Network, GraduationCap, Cpu, Lightbulb,
  Rocket, CheckCircle2, Star, Users, Clock, Award, Quote
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { QuoteFormDialog } from '@/components/QuoteFormDialog';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { SEO } from '@/components/SEO';
import aboutImage from '@/assets/kasitech-hero.webp';

const heroSideImages = [
  'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80',
];

const faqItems = [
  {
    question: 'How quickly can Kasitech respond to on-site support requests in Nairobi?',
    answer: 'Our Nairobi-based team aims to reach your site within hours for urgent IT incidents, and we offer remote support for less critical issues the same day.'
  },
  {
    question: 'Can Kasitech help my business move to the cloud without disrupting operations?',
    answer: 'Yes. We design step-by-step migration plans with pilot validation, secure data transfer and support so systems stay available throughout the move.'
  },
  {
    question: 'Do you provide training for our staff after implementing a new solution?',
    answer: 'Absolutely. We offer hands-on user training, technical workshops and certification coaching to help your team adopt new systems confidently.'
  },
  {
    question: 'What types of IT equipment can Kasitech supply and install?',
    answer: 'We source laptops, desktops, servers, networking gear, CCTV systems, UPS and printers from trusted brands to match your performance and budget goals.'
  },
];

const services = [
  { icon: Lightbulb, title: 'IT Consulting', desc: 'Strategy and advisory to align technology with your business goals.', href: '/services#consulting' },
  { icon: Shield, title: 'Cybersecurity', desc: 'Protect your data and infrastructure from evolving cyber threats.', href: '/services#cybersecurity' },
  { icon: Code2, title: 'Web & App Development', desc: 'Modern, scalable websites, web apps and mobile applications.', href: '/services#development' },
  { icon: Network, title: 'Networking Solutions', desc: 'Reliable network design, deployment and ongoing management.', href: '/services#networking' },
  { icon: GraduationCap, title: 'IT Training & Certifications', desc: 'Equip your team with in-demand IT skills and certifications.', href: '/services#training' },
  { icon: Cpu, title: 'IT Equipment Supply', desc: 'Genuine laptops, servers, networking gear, CCTV and accessories.', href: '/shop' },
];

const features = [
  { icon: Award, title: 'Certified Experts', desc: 'A team of professionals with industry-recognised certifications.' },
  { icon: Clock, title: '24/7 Support', desc: 'Round-the-clock assistance for mission-critical systems.' },
  { icon: Shield, title: 'Security First', desc: 'Defense-in-depth approach baked into everything we deliver.' },
  { icon: Users, title: 'Client-Centric', desc: 'Tailored solutions, transparent pricing and lasting partnerships.' },
];

const testimonials = [
  { name: 'Grace Wanjiru', company: 'Acacia Microfinance', text: 'Kasitech rebuilt our entire network infrastructure with zero downtime. Truly professional team.', rating: 5 },
  { name: 'David Otieno', company: 'BlueRock Logistics', text: 'Their cybersecurity audit caught vulnerabilities we never knew existed. Highly recommended.', rating: 5 },
  { name: 'Asha Mohamed', company: 'Lamu Tech Hub', text: 'From web development to staff training, Kasitech is genuinely a one-stop IT partner.', rating: 5 },
];

const stats = [
  { value: '200+', label: 'Projects Delivered' },
  { value: '120+', label: 'Happy Clients' },
  { value: '15+', label: 'Industries Served' },
  { value: '24/7', label: 'Expert Support' },
];

const Index = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Kasitech Solutions Limited",
    "url": "https://kasitech.co.ke",
    "logo": "https://kasitech.co.ke/logo.png",
    "description": "One-stop IT services in Kenya — consulting, cybersecurity, development, networking, training and equipment.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Westlands",
      "addressLocality": "Nairobi",
      "addressCountry": "KE"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+254-723-799-450",
      "contactType": "customer service",
      "areaServed": "KE",
      "availableLanguage": ["English", "Swahili"]
    }
  };

  return (
    <>
      <SEO
        title="Kasitech Solutions Limited — One-Stop IT Services in Kenya"
        description="Reliable IT consulting, cybersecurity, web & app development, networking, training and IT equipment supply across Kenya. Partner with Kasitech today."
        keywords="IT company Kenya, IT consulting Nairobi, cybersecurity Kenya, web development Kenya, networking Nairobi, IT training, IT equipment supply Kenya"
        structuredData={structuredData}
      />

      {/* HERO */}
      <section className="relative overflow-hidden bg-slate-950 text-white" aria-label="Hero">
        <div className="absolute inset-0 bg-slate-950/95" />

        <div className="relative container-page pt-20 pb-24 lg:pt-28 lg:pb-32">
          <div className="grid items-center gap-10 xl:grid-cols-[1.1fr_0.9fr]">
            <div className="max-w-2xl">
              <span className="eyebrow text-accent-foreground/90 bg-accent/20 px-3 py-1 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" /> Trusted IT Partner in Kenya
              </span>
              <h1 className="heading-xl text-white mt-5">
                Powering Businesses with{' '}
                <span className="bg-gradient-to-r from-accent to-cta bg-clip-text text-transparent">
                  Smart IT Solutions
                </span>
              </h1>
              <p className="lead text-white/85 mt-6 max-w-2xl">
                From consulting and cybersecurity to development, networking and equipment supply —
                Kasitech delivers reliable, modern technology that helps your organisation grow.
              </p>
              <div className="mt-8 flex flex-col xs:flex-row gap-3">
                <QuoteFormDialog
                  trigger={
                    <Button className="btn-cta text-base h-12 px-7 inline-flex items-center">
                      Get a Free Consultation <ArrowRight className="w-4 h-4" />
                    </Button>
                  }
                />
                <Button asChild variant="outline" className="btn-outline-light text-base h-12 px-7">
                  <a href="mailto:info@kasitech.co.ke">Email Us</a>
                </Button>
              </div>

              <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/80">
                {['ISO-aligned processes', 'Local Nairobi team', 'SLA-backed support'].map((t) => (
                  <div key={t} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent" aria-hidden="true" />
                    {t}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative rounded-[2rem] overflow-hidden border border-white/10 bg-slate-900 shadow-2xl">
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                plugins={[
                  Autoplay({
                    delay: 4000,
                  }),
                ]}
                className="w-full"
              >
                <CarouselContent>
                  {heroSideImages.map((image, index) => (
                    <CarouselItem key={index}>
                      <img
                        src={image}
                        alt={`Hero image ${index + 1}`}
                        width={920}
                        height={620}
                        className="w-full h-full object-cover"
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-950/95 via-slate-950/20 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="bg-background border-b border-border" aria-label="Company stats">
        <div className="container-page py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-display text-3xl md:text-4xl font-bold text-primary">{s.value}</div>
                <div className="text-xs md:text-sm text-muted-foreground mt-1 uppercase tracking-wider">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE KASITECH */}
      <section className="section" aria-labelledby="why-pomalo-heading">
        <div className="container-page">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] items-center">
            <div className="max-w-2xl">
              <span className="eyebrow">Why Choose Kasitech</span>
              <h2 id="why-pomalo-heading" className="heading-lg mt-3">More Than Products — We Build Solutions</h2>
              <p className="lead mt-4 max-w-2xl">
                Every system we create is engineered with intent: to help you launch faster, scale smarter, and avoid unnecessary complexity.
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-border bg-card p-6 shadow-card">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                    <Lightbulb className="w-5 h-5" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-primary">Product-First Thinking</h3>
                  <p className="mt-2 text-sm text-foreground/80">
                    We design with real-world use cases, not just features.
                  </p>
                </div>
                <div className="rounded-3xl border border-border bg-card p-6 shadow-card">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                    <Code2 className="w-5 h-5" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-primary">Developer-Friendly Architecture</h3>
                  <p className="mt-2 text-sm text-foreground/80">
                    Clean, scalable, and easy to customize or extend.
                  </p>
                </div>
                <div className="rounded-3xl border border-border bg-card p-6 shadow-card">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                    <Rocket className="w-5 h-5" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-primary">Built to Launch Fast</h3>
                  <p className="mt-2 text-sm text-foreground/80">
                    Go from idea to live product in record time.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-6">
              <div className="aspect-[4/3] overflow-hidden rounded-[2rem] shadow-card">
                <img
                  src={aboutImage}
                  alt="Team working on IT systems"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[16/9] overflow-hidden rounded-[2rem] shadow-card">
                <img
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80"
                  alt="Modern IT workspace"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES OVERVIEW */}
      <section className="section bg-secondary/40" aria-labelledby="services-heading">
        <div className="container-page">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <span className="eyebrow">Our Services</span>
            <h2 id="services-heading" className="heading-lg mt-3">Everything Your Business Needs, Under One Roof</h2>
            <p className="lead mt-4">
              Six specialised practice areas — designed to work seamlessly together so you get a complete IT partner, not just a vendor.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <Link key={s.title} to={s.href} className="card-elevated group block">
                <div className="feature-icon group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                  <s.icon className="w-6 h-6" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold mt-5 text-primary">{s.title}</h3>
                <p className="text-sm text-muted-foreground mt-2">{s.desc}</p>
                <div className="mt-4 inline-flex items-center text-sm font-medium text-accent group-hover:gap-2 transition-all">
                  Learn more <ArrowRight className="w-4 h-4 ml-1" aria-hidden="true" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="section" aria-labelledby="about-preview-heading">
        <div className="container-page grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-card">
              <img
                src={aboutImage}
                alt="Kasitech team working on IT solutions"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 hidden md:block bg-card border border-border rounded-2xl p-5 shadow-hover w-56">
              <div className="flex items-center gap-2 text-cta">
                <Award className="w-5 h-5" />
                <span className="text-xs uppercase tracking-wider font-semibold">Certified</span>
              </div>
              <p className="text-sm font-medium text-foreground mt-2">Microsoft, Cisco & CompTIA accredited engineers.</p>
            </div>
          </div>
          <div>
            <span className="eyebrow">About Kasitech</span>
            <h2 id="about-preview-heading" className="heading-lg mt-3">A Reliable Technology Partner Built for Modern Kenya</h2>
            <p className="lead mt-4">
              We blend deep technical expertise with a hands-on, customer-first culture. Whether you are a startup,
              SME, institution or large enterprise, we tailor solutions that move your organisation forward.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                'Vendor-neutral advice — we recommend what is best for you.',
                'Locally based engineers with rapid on-site response.',
                'End-to-end ownership: design, deploy, support, optimise.',
              ].map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 shrink-0" aria-hidden="true" />
                  <span className="text-sm md:text-base text-foreground/85">{p}</span>
                </li>
              ))}
            </ul>
            <Button asChild className="mt-8 bg-primary hover:bg-primary-hover text-primary-foreground h-12 px-6 rounded-xl">
              <Link to="/about">More About Us <ArrowRight className="w-4 h-4 ml-1" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section bg-secondary/40" aria-labelledby="why-heading">
        <div className="container-page">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <span className="eyebrow">Why Kasitech</span>
            <h2 id="why-heading" className="heading-lg mt-3">Built on Trust, Driven by Results</h2>
            <p className="lead mt-4">Four reasons clients across Kenya choose us — and stay with us.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f) => (
              <div key={f.title} className="card-elevated text-center">
                <div className="feature-icon mx-auto">
                  <f.icon className="w-6 h-6" aria-hidden="true" />
                </div>
                <h3 className="text-base font-semibold mt-4 text-primary">{f.title}</h3>
                <p className="text-sm text-muted-foreground mt-2">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQS */}
      <section className="section" aria-labelledby="faq-heading">
        <div className="container-page">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <span className="eyebrow">Frequently Asked Questions</span>
            <h2 id="faq-heading" className="heading-lg mt-3">Answers to the Questions We Hear Most</h2>
            <p className="lead mt-4">Clear guidance about delivery, timelines, support and how Kasitech helps Kenyan businesses stay secure and efficient.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqItems.map((faq) => (
              <div key={faq.question} className="card-elevated p-6">
                <h3 className="text-base font-semibold">{faq.question}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section" aria-labelledby="testimonials-heading">
        <div className="container-page">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <span className="eyebrow">Client Stories</span>
            <h2 id="testimonials-heading" className="heading-lg mt-3">Trusted by Teams Across Industries</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <article key={t.name} className="card-elevated relative">
                <Quote className="w-8 h-8 text-accent/30 absolute top-5 right-5" aria-hidden="true" />
                <div className="flex gap-1" aria-label={`${t.rating} star rating`}>
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-cta text-cta" aria-hidden="true" />
                  ))}
                </div>
                <p className="mt-4 text-sm text-foreground/85 leading-relaxed">"{t.text}"</p>
                <div className="mt-5 pt-5 border-t border-border">
                  <div className="font-semibold text-sm">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.company}</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="section pb-24" aria-label="Call to action">
        <div className="container-page">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-hero p-10 lg:p-16 text-center text-white shadow-hover">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_hsl(var(--accent)/0.35),_transparent_55%)]" />
            <div className="relative max-w-2xl mx-auto">
              <h2 className="heading-lg text-white">Ready to Transform Your IT?</h2>
              <p className="lead text-white/85 mt-4">
                Talk to a Kasitech specialist today and get a tailored proposal — no obligations.
              </p>
              <div className="mt-8 flex flex-col xs:flex-row gap-3 justify-center">
                <QuoteFormDialog
                  trigger={
                    <Button className="btn-cta h-12 px-7 inline-flex items-center">
                      Request a Quote <ArrowRight className="w-4 h-4" />
                    </Button>
                  }
                />
                <Button asChild variant="outline" className="btn-outline-light h-12 px-7">
                  <a href="mailto:info@kasitech.co.ke">Email Us</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
