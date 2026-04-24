import { useEffect, useState } from 'react';
import { ShoppingCart, Star, Check, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SEO } from '@/components/SEO';
import { useToast } from '@/hooks/use-toast';
import { sanityClient, urlFor, type SanityProduct } from '@/lib/sanity';
import laptop from '@/assets/product-laptop.webp';
import router from '@/assets/product-router.webp';
import cctv from '@/assets/product-cctv.webp';
import printer from '@/assets/product-printer.webp';
import server from '@/assets/product-server.webp';
import ups from '@/assets/product-ups.webp';

const fallbackByCategory: Record<string, string> = {
  Laptops: laptop,
  Networking: router,
  Printers: printer,
  CCTV: cctv,
  Servers: server,
  Power: ups,
};

const categories = ['All', 'Laptops', 'Networking', 'Printers', 'CCTV', 'Servers', 'Power'];

const formatKES = (n: number) =>
  `KSh ${new Intl.NumberFormat('en-KE').format(n)}`;

const Shop = () => {
  const [active, setActive] = useState('All');
  const [products, setProducts] = useState<SanityProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const query = `*[_type == "product"] | order(_createdAt desc){
      _id, title, category, description, price, rating, slug, image
    }`;
    sanityClient
      .fetch<SanityProduct[]>(query)
      .then((data) => setProducts(data || []))
      .catch((err) => {
        console.error('Sanity fetch error:', err);
        toast({
          title: 'Could not load products',
          description: 'Please try again shortly.',
          variant: 'destructive',
        });
      })
      .finally(() => setLoading(false));
  }, [toast]);

  const filtered =
    active === 'All' ? products : products.filter((p) => p.category === active);

  const orderViaWhatsApp = (name: string) => {
    const message = encodeURIComponent(
      `Hello Kasitech, I would like to place an order for the following product: ${name}. Please share pricing and availability.`,
    );
    window.open(`https://wa.me/254723799450?text=${message}`, '_blank', 'noopener,noreferrer');
    toast({
      title: 'WhatsApp order started',
      description: `Opening WhatsApp to order ${name}.`,
    });
  };

  const resolveImage = (p: SanityProduct) => {
    if (p.image) {
      try {
        return urlFor(p.image).width(800).height(600).fit('crop').auto('format').url();
      } catch {
        // fall through
      }
    }
    return fallbackByCategory[p.category] ?? laptop;
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

          {loading ? (
            <div className="flex items-center justify-center py-20 text-muted-foreground">
              <Loader2 className="w-6 h-6 mr-2 animate-spin" />
              Loading products…
            </div>
          ) : filtered.length === 0 ? (
            <div className="text-center py-20 text-muted-foreground">
              No products found in this category yet.
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((p) => {
                const rating = Math.max(1, Math.min(5, p.rating ?? 5));
                return (
                  <article
                    key={p._id}
                    className="card-elevated p-0 overflow-hidden flex flex-col"
                  >
                    <div className="aspect-[4/3] bg-secondary overflow-hidden">
                      <img
                        src={resolveImage(p)}
                        alt={`${p.title} — ${p.category}`}
                        title={p.title}
                        width={800}
                        height={600}
                        loading="lazy"
                        className="w-full h-full object-contain p-6 hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <span className="text-xs uppercase tracking-wider text-accent font-semibold">
                        {p.category}
                      </span>
                      <h3 className="text-lg font-semibold mt-2">{p.title}</h3>
                      <p className="text-sm text-muted-foreground mt-2 flex-1">
                        {p.description}
                      </p>
                      <div className="mt-4 flex items-center justify-between">
                        <span className="font-display text-xl font-bold text-primary">
                          {formatKES(p.price)}
                        </span>
                        <div className="flex items-center gap-1 text-cta" aria-label={`Rated ${rating} out of 5`}>
                          {[...Array(rating)].map((_, i) => (
                            <Star key={i} className="w-3.5 h-3.5 fill-cta" aria-hidden="true" />
                          ))}
                        </div>
                      </div>
                      <Button
                        onClick={() => orderViaWhatsApp(p.title)}
                        className="mt-5 w-full bg-cta hover:bg-cta-hover text-cta-foreground rounded-xl"
                        aria-label={`Order ${p.title} via WhatsApp`}
                      >
                        <ShoppingCart className="w-4 h-4 mr-1" />
                        Order via WhatsApp
                      </Button>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
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
