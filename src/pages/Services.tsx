import { Link } from 'react-router-dom';
import {
  Lightbulb, Shield, Code2, Network, GraduationCap, Cpu,
  CheckCircle2, ArrowRight,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SEO } from '@/components/SEO';

const services = [
  {
    id: 'consulting',
    icon: Lightbulb,
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
      <div className="container-page space-y-12">
        {services.map((s, idx) => (
          <article
            key={s.id}
            id={s.id}
            className="grid lg:grid-cols-12 gap-8 items-center scroll-mt-24"
          >
            <div className={`lg:col-span-5 ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
              <div className="aspect-[4/3] rounded-2xl bg-gradient-primary relative overflow-hidden shadow-card">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsl(var(--accent)/0.4),_transparent_60%)]" />
                <s.icon className="w-24 h-24 text-white/30 absolute bottom-6 right-6" aria-hidden="true" />
              </div>
            </div>
            <div className={`lg:col-span-7 ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
              <div className="feature-icon"><s.icon className="w-6 h-6" aria-hidden="true" /></div>
              <h2 className="heading-md mt-5">{s.title}</h2>
              <p className="lead mt-3">{s.intro}</p>
              <ul className="mt-6 grid sm:grid-cols-2 gap-3">
                {s.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm text-foreground/85">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 shrink-0" aria-hidden="true" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-7 flex flex-wrap gap-3">
                <Button asChild className="bg-primary hover:bg-primary-hover text-primary-foreground rounded-xl h-11 px-6">
                  <Link to="/contact">Request a Quote</Link>
                </Button>
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
    </section>

    {/* CTA */}
    <section className="section pb-24">
      <div className="container-page">
        <div className="rounded-3xl bg-primary text-primary-foreground p-10 lg:p-14 text-center">
          <h2 className="heading-lg text-primary-foreground">Not Sure Where to Start?</h2>
          <p className="lead text-primary-foreground/80 mt-4 max-w-xl mx-auto">
            Book a free 30-minute consultation. We'll review your needs and recommend the best fit.
          </p>
          <Button asChild className="btn-cta mt-8 h-12 px-7">
            <Link to="/contact">Book Free Consultation <ArrowRight className="w-4 h-4" /></Link>
          </Button>
        </div>
      </div>
    </section>
  </>
);

export default Services;
