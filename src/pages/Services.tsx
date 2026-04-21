import { Link } from 'react-router-dom';
import {
  Lightbulb, Shield, Code2, Network, GraduationCap, Cpu,
  CheckCircle2, ArrowRight,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { QuoteFormDialog } from '@/components/QuoteFormDialog';
import { SEO } from '@/components/SEO';
import consultingImage from '@/assets/hero-bg.webp';
import cybersecurityImage from '@/assets/product-server.webp';
import developmentImage from '@/assets/product-laptop.webp';
import networkingImage from '@/assets/product-router.webp';
import trainingImage from '@/assets/blog-training.webp';
import equipmentImage from '@/assets/product-cctv.webp';

const services = [
  {
    id: 'consulting',
    icon: Lightbulb,
    image: consultingImage,
    imageAlt: 'Consulting meeting in a modern office',
    title: 'IT Consulting',
    intro: 'Strategic guidance to align technology investments with business outcomes.',
    benefits: [
      'IT strategy & digital transformation roadmaps',
      'Technology audits and architecture reviews',
      'Cloud migration planning (AWS, Azure, GCP)',
      'Vendor selection and procurement advisory',
    ],
  },
  {
    id: 'cybersecurity',
    icon: Shield,
    image: cybersecurityImage,
    imageAlt: 'Secure server rack and cybersecurity systems',
    title: 'Cybersecurity',
    intro: 'Protect your data, systems and reputation with defence-in-depth security.',
    benefits: [
      'Vulnerability assessments & penetration testing',
      'Endpoint protection and EDR deployment',
      'Email security, phishing simulation & training',
      'Incident response and managed SOC services',
    ],
  },
  {
    id: 'development',
    icon: Code2,
    image: developmentImage,
    imageAlt: 'Developer using laptop in an office setting',
    title: 'Web & App Development',
    intro: 'Custom web platforms and mobile apps engineered for performance and scale.',
    benefits: [
      'Corporate websites and e-commerce platforms',
      'Custom web applications and dashboards',
      'iOS and Android mobile applications',
      'API integrations and system automation',
    ],
  },
  {
    id: 'networking',
    icon: Network,
    image: networkingImage,
    imageAlt: 'Network equipment in a modern office environment',
    title: 'Networking Solutions',
    intro: 'Reliable, secure networks designed for the demands of modern business.',
    benefits: [
      'Structured cabling and LAN/WAN design',
      'Wi-Fi planning, deployment and optimisation',
      'Firewalls, VPNs and SD-WAN',
      'Network monitoring and managed services',
    ],
  },
  {
    id: 'training',
    icon: GraduationCap,
    image: trainingImage,
    imageAlt: 'Colleagues in a training session',
    title: 'IT Training & Certifications',
    intro: 'Upskill your team with hands-on training led by certified instructors.',
    benefits: [
      'Microsoft, Cisco, CompTIA & AWS certification prep',
      'Cybersecurity awareness for non-technical staff',
      'Software development and DevOps bootcamps',
      'Customised corporate training programmes',
    ],
  },
  {
    id: 'equipment',
    icon: Cpu,
    image: equipmentImage,
    imageAlt: 'IT equipment and hardware ready for installation',
    title: 'IT Equipment Supply',
    intro: 'Genuine, warrantied hardware delivered and installed by professionals.',
    benefits: [
      'Laptops, desktops and workstations',
      'Servers, storage and rack infrastructure',
      'Networking gear (routers, switches, access points)',
      'CCTV, biometrics and accessories',
    ],
    cta: { label: 'Visit our Shop', href: '/shop' },
  },
];

const Services = () => (
  <>
    <SEO
      title="IT Services in Kenya — Consulting, Cybersecurity, Development | Kasitech"
      description="Explore Kasitech's complete IT services: consulting, cybersecurity, web & app development, networking, training and IT equipment supply across Kenya."
      keywords="IT services Kenya, IT consulting, cybersecurity Nairobi, web development, networking solutions, IT training Kenya, IT equipment Kenya"
    />

    {/* Hero */}
    <section className="relative bg-gradient-hero text-white">
      <div className="container-page py-20 lg:py-28 text-center">
        <span className="eyebrow text-accent-foreground/90">Our Services</span>
        <h1 className="heading-xl text-white mt-3 max-w-3xl mx-auto">
          Complete IT Services for a Connected Business
        </h1>
        <p className="lead text-white/85 mt-5 max-w-2xl mx-auto">
          Six expert practice areas, one accountable partner — that's how Kasitech keeps your
          technology stack modern, secure and ready to scale.
        </p>
      </div>
    </section>

    {/* Services list */}
    <section className="section">
      <div className="container-page">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((s) => (
            <article id={s.id} key={s.id} className="overflow-hidden rounded-[2rem] border border-border bg-card shadow-card transition hover:-translate-y-1 hover:shadow-hover">
              <div className="relative h-56 overflow-hidden">
                <img
                  src={s.image}
                  alt={s.imageAlt}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute left-5 bottom-5 inline-flex items-center gap-2 rounded-full bg-primary/85 px-4 py-2 text-sm font-medium text-primary-foreground shadow-lg">
                  <s.icon className="w-4 h-4" aria-hidden="true" />
                  {s.title}
                </div>
              </div>
              <div className="p-6">
                <p className="lead text-foreground/90">{s.intro}</p>
                <ul className="mt-5 space-y-3 text-sm text-foreground/80">
                  {s.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent mt-1 shrink-0" aria-hidden="true" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-3">
                  <QuoteFormDialog
                    defaultService={s.title}
                    trigger={
                      <Button className="bg-primary hover:bg-primary-hover text-primary-foreground rounded-xl h-11 px-6">
                        Request a Quote
                      </Button>
                    }
                  />
                  {s.cta && (
                    <Button asChild variant="outline" className="rounded-xl h-11 px-6">
                      <Link to={s.cta.href}>
                        {s.cta.label} <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </Button>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="section pb-24">
      <div className="container-page">
        <div className="rounded-3xl bg-primary text-primary-foreground p-10 lg:p-14 text-center">
          <h2 className="heading-lg text-primary-foreground">Not Sure Where to Start?</h2>
          <p className="lead text-primary-foreground/80 mt-4 max-w-xl mx-auto">
            Book a free 30-minute consultation. We'll review your needs and recommend the best fit.
          </p>
          <QuoteFormDialog
            defaultService="General IT Consultation"
            trigger={
              <Button className="btn-cta mt-8 h-12 px-7">
                Book Free Consultation <ArrowRight className="w-4 h-4" />
              </Button>
            }
          />
        </div>
      </div>
    </section>
  </>
);

export default Services;
