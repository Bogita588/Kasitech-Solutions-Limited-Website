import { Link } from 'react-router-dom';
import { Target, Eye, Heart, Users, Award, Globe, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SEO } from '@/components/SEO';
import storyImage from '@/assets/hero-bg.webp';

const values = [
  { icon: Award, title: 'Excellence', desc: 'We hold ourselves to the highest standard in everything we deliver.' },
  { icon: Heart, title: 'Integrity', desc: 'Honest advice, transparent pricing and ethical practices, always.' },
  { icon: Users, title: 'Partnership', desc: 'Your success is our success — we win when you grow.' },
  { icon: Globe, title: 'Innovation', desc: 'We embrace emerging technology to keep our clients ahead.' },
];

const team = [
  { name: 'James Kasi', role: 'Founder & CEO', initials: 'JK' },
  { name: 'Mercy Wambui', role: 'Head of Cybersecurity', initials: 'MW' },
  { name: 'Brian Otieno', role: 'Lead Engineer', initials: 'BO' },
  { name: 'Faith Njeri', role: 'Client Success Lead', initials: 'FN' },
];

const About = () => (
  <>
    <SEO
      title="About Kasitech Solutions — Trusted IT Partner in Kenya"
      description="Learn about Kasitech Solutions Limited — our mission, vision, values and the team delivering one-stop IT services across Kenya."
      keywords="about Kasitech, IT company Nairobi, Kenya IT partner, Kasitech team"
    />

    {/* Hero */}
    <section className="relative bg-gradient-hero text-white">
      <div className="container-page py-20 lg:py-28 text-center">
        <span className="eyebrow text-accent-foreground/90">About Us</span>
        <h1 className="heading-xl text-white mt-3 max-w-3xl mx-auto">
          Engineering Reliable IT for a Connected Kenya
        </h1>
        <p className="lead text-white/85 mt-5 max-w-2xl mx-auto">
          We are a Kenyan IT company on a mission to help organisations of every size adopt
          modern technology with confidence — securely, affordably and sustainably.
        </p>
      </div>
    </section>

    {/* Story */}
    <section className="section">
      <div className="container-page grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-card">
          <img
            src={storyImage}
            alt="Kasitech Solutions team and technology"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <span className="eyebrow">Our Story</span>
          <h2 className="heading-lg mt-3">From a Small Team to a One-Stop IT Partner</h2>
          <div className="mt-5 space-y-4 text-foreground/85 text-base leading-relaxed">
            <p>
              Kasitech Solutions Limited was founded with a clear purpose: make enterprise-grade
              IT accessible to Kenyan businesses, schools and institutions of every scale.
            </p>
            <p>
              Today we are a multidisciplinary team delivering consulting, cybersecurity, software,
              networking, training and IT equipment under one trusted brand — saving our clients
              time, complexity and cost.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Mission / Vision */}
    <section className="section bg-secondary/40">
      <div className="container-page grid md:grid-cols-2 gap-6">
        <div className="card-elevated">
          <div className="feature-icon"><Target className="w-6 h-6" aria-hidden="true" /></div>
          <h3 className="text-xl font-semibold mt-5">Our Mission</h3>
          <p className="text-muted-foreground mt-3">
            To empower organisations across Kenya with secure, scalable and affordable IT solutions
            that accelerate growth and improve everyday operations.
          </p>
        </div>
        <div className="card-elevated">
          <div className="feature-icon"><Eye className="w-6 h-6" aria-hidden="true" /></div>
          <h3 className="text-xl font-semibold mt-5">Our Vision</h3>
          <p className="text-muted-foreground mt-3">
            To be East Africa's most trusted one-stop IT partner — recognised for technical
            excellence, integrity and lasting client relationships.
          </p>
        </div>
      </div>
    </section>

    {/* Values */}
    <section className="section">
      <div className="container-page">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <span className="eyebrow">Core Values</span>
          <h2 className="heading-lg mt-3">The Principles That Guide Our Work</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v) => (
            <div key={v.title} className="card-elevated text-center">
              <div className="feature-icon mx-auto"><v.icon className="w-6 h-6" aria-hidden="true" /></div>
              <h3 className="text-base font-semibold mt-4">{v.title}</h3>
              <p className="text-sm text-muted-foreground mt-2">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Team */}
    <section className="section bg-secondary/40">
      <div className="container-page">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <span className="eyebrow">Leadership</span>
          <h2 className="heading-lg mt-3">Meet the People Behind Kasitech</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {team.map((m) => (
            <div key={m.name} className="card-elevated text-center">
              <div className="w-20 h-20 rounded-full bg-gradient-primary text-primary-foreground font-display font-bold text-xl flex items-center justify-center mx-auto">
                {m.initials}
              </div>
              <h3 className="mt-4 font-semibold">{m.name}</h3>
              <p className="text-sm text-accent">{m.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="section pb-24">
      <div className="container-page">
        <div className="rounded-3xl bg-gradient-hero text-white p-10 lg:p-14 text-center">
          <h2 className="heading-lg text-white">Let's Build the Future of Your IT Together</h2>
          <p className="lead text-white/85 mt-4 max-w-xl mx-auto">
            Schedule a free discovery call with our team and find out how Kasitech can help.
          </p>
          <Button asChild className="btn-cta mt-8 h-12 px-7">
            <a href="https://wa.me/254723799450" target="_blank" rel="noopener noreferrer">Talk to Our Team <ArrowRight className="w-4 h-4" /></a>
          </Button>
        </div>
      </div>
    </section>
  </>
);

export default About;
