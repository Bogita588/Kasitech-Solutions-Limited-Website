import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SEO } from '@/components/SEO';

const projects = [
  { title: 'Microfinance Network Upgrade', client: 'Acacia Microfinance', tags: ['Networking', 'Security'] },
  { title: 'E-Commerce Platform Build', client: 'BlueRock Retail', tags: ['Web Dev', 'Cloud'] },
  { title: 'Cybersecurity Audit & SOC', client: 'Lamu Tech Hub', tags: ['Cybersecurity'] },
  { title: 'Schoolwide Wi-Fi Deployment', client: 'Mavuno Schools', tags: ['Networking'] },
  { title: 'CCTV & Access Control', client: 'Tujenge Logistics', tags: ['Security', 'Hardware'] },
  { title: 'Cloud Migration to Azure', client: 'Pamoja SACCO', tags: ['Cloud', 'Consulting'] },
];

const Portfolio = () => (
  <>
    <SEO
      title="Portfolio — Selected Work | Kasitech Solutions"
      description="Explore selected Kasitech IT projects across networking, cybersecurity, development and cloud for Kenyan organisations."
      keywords="Kasitech portfolio, IT projects Kenya, case studies"
    />
    <section className="relative bg-gradient-hero text-white">
      <div className="container-page py-20 lg:py-24 text-center">
        <span className="eyebrow text-accent-foreground/90">Portfolio</span>
        <h1 className="heading-xl text-white mt-3 max-w-3xl mx-auto">Recent Work That Speaks for Itself</h1>
        <p className="lead text-white/85 mt-5 max-w-2xl mx-auto">A snapshot of projects we have delivered across Kenya.</p>
      </div>
    </section>

    <section className="section">
      <div className="container-page grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <article key={p.title} className="card-elevated">
            <div className="aspect-[4/3] rounded-xl bg-gradient-primary mb-5 relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsl(var(--accent)/0.4),_transparent_60%)]" />
            </div>
            <div className="flex flex-wrap gap-2 mb-3">
              {p.tags.map((t) => (
                <span key={t} className="text-xs px-2 py-1 rounded-full bg-accent/10 text-accent font-medium">{t}</span>
              ))}
            </div>
            <h3 className="text-lg font-semibold">{p.title}</h3>
            <p className="text-sm text-muted-foreground mt-1">{p.client}</p>
          </article>
        ))}
      </div>
      <div className="container-page text-center mt-12">
        <Button asChild className="btn-cta h-12 px-7">
          <Link to="/contact">Start Your Project <ArrowRight className="w-4 h-4" /></Link>
        </Button>
      </div>
    </section>
  </>
);

export default Portfolio;
