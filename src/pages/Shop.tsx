import { useState } from 'react';
import { ShoppingCart, Star, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SEO } from '@/components/SEO';
import { useToast } from '@/hooks/use-toast';
import laptop from '@/assets/product-laptop.jpg';
import router from '@/assets/product-router.jpg';
import cctv from '@/assets/product-cctv.jpg';
import printer from '@/assets/product-printer.jpg';
import server from '@/assets/product-server.jpg';
import ups from '@/assets/product-ups.jpg';

const allProducts = [
  { id: 1, name: 'Dell Latitude Business Laptop', category: 'Laptops', price: 'KSh 95,000', desc: 'Intel i7, 16GB RAM, 512GB SSD — built for productivity.', image: laptop },
  { id: 2, name: 'Cisco Catalyst 24-Port Switch', category: 'Networking', price: 'KSh 78,000', desc: 'Gigabit managed switch ideal for SMB networks.', image: router },
  { id: 3, name: 'HP LaserJet Enterprise Printer', category: 'Printers', price: 'KSh 65,000', desc: 'Fast, reliable monochrome laser printer for offices.', image: printer },
  { id: 4, name: 'IP Bullet CCTV Camera (4MP)', category: 'CCTV', price: 'KSh 12,500', desc: 'Outdoor IP67 camera with night vision and motion detection.', image: cctv },
  { id: 5, name: 'Dell PowerEdge Rack Server', category: 'Servers', price: 'KSh 320,000', desc: 'Enterprise rack server with redundant power and storage.', image: server },
  { id: 6, name: 'APC Smart-UPS 1500VA', category: 'Power', price: 'KSh 38,000', desc: 'Line-interactive UPS protecting servers and workstations.', image: ups },
];

const categories = ['All', 'Laptops', 'Networking', 'Printers', 'CCTV', 'Servers', 'Power'];

const Shop = () => {
  const [active, setActive] = useState('All');
  const { toast } = useToast();
  const products = active === 'All' ? allProducts : allProducts.filter((p) => p.category === active);

  const orderViaWhatsApp = (name: string) => {
    const message = encodeURIComponent(`Hello Kasitech, I would like to place an order for the following product: ${name}. Please share pricing and availability.`);
    window.open(`https://wa.me/254723799450?text=${message}`, '_blank', 'noopener,noreferrer');
    toast({
      title: 'WhatsApp order started',
      description: `Opening WhatsApp to order ${name}.`,
    });
  };

  return (
    <>
      <SEO
        title="IT Equipment Shop — Laptops, Servers, Networking | Kasitech Kenya"
        description="Browse genuine IT equipment from Kasitech Solutions: laptops, servers, networking gear, CCTV, printers and UPS units with delivery and installation in Kenya."
        keywords="IT equipment Kenya, buy laptop Nairobi, Cisco switch Kenya, CCTV Nairobi, server supplier Kenya, UPS Nairobi"
      />

      {/* Hero */}
      <section className="relative bg-gradient-hero text-white">
        <div className="container-page py-20 lg:py-24 text-center">
          <span className="eyebrow text-accent-foreground/90">IT Equipment</span>
          <h1 className="heading-xl text-white mt-3 max-w-3xl mx-auto">
            Genuine Hardware. Trusted Brands. Delivered Across Kenya.
          </h1>
          <p className="lead text-white/85 mt-5 max-w-2xl mx-auto">
            From a single laptop to a full server rack — we supply, deliver and install with warranty.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="section">
        <div className="container-page">
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  active === c
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-secondary text-foreground hover:bg-accent/10 hover:text-accent'
                }`}
                aria-pressed={active === c}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p) => (
              <article key={p.id} className="card-elevated p-0 overflow-hidden flex flex-col">
                <div className="aspect-[4/3] bg-secondary overflow-hidden">
                  <img
                    src={p.image}
                    alt={`${p.name} — ${p.category}`}
                    title={p.name}
                    width={800}
                    height={600}
                    loading="lazy"
                    className="w-full h-full object-contain p-6 hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <span className="text-xs uppercase tracking-wider text-accent font-semibold">{p.category}</span>
                  <h3 className="text-lg font-semibold mt-2">{p.name}</h3>
                  <p className="text-sm text-muted-foreground mt-2 flex-1">{p.desc}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="font-display text-xl font-bold text-primary">{p.price}</span>
                    <div className="flex items-center gap-1 text-cta">
                      {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-cta" aria-hidden="true" />)}
                    </div>
                  </div>
                  <Button
                    onClick={() => orderViaWhatsApp(p.name)}
                    className="mt-5 w-full bg-cta hover:bg-cta-hover text-cta-foreground rounded-xl"
                    aria-label={`Order ${p.name} via WhatsApp`}
                  >
                    <ShoppingCart className="w-4 h-4 mr-1" />
                    Order via WhatsApp
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="pb-20">
        <div className="container-page grid sm:grid-cols-3 gap-4">
          {[
            'Genuine, warrantied products',
            'Nationwide delivery & installation',
            'Volume discounts for institutions',
          ].map((t) => (
            <div key={t} className="card-elevated flex items-center gap-3 text-sm">
              <Check className="w-5 h-5 text-accent" />
              {t}
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Shop;
