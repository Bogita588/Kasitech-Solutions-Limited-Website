import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { SEO } from '@/components/SEO';
import cybersecurity from '@/assets/blog-cybersecurity.webp';
import cloud from '@/assets/blog-cloud.webp';
import training from '@/assets/blog-training.webp';

const posts = [
  {
    slug: 'cybersecurity-essentials-for-kenyan-smes',
    title: 'Cybersecurity Essentials Every Kenyan SME Should Implement Today',
    excerpt: 'Five practical, low-cost steps that immediately reduce your risk of breaches, ransomware  & data loss.',
    image: cybersecurity,
    category: 'Cybersecurity',
    date: 'April 12, 2026',
    readTime: '6 min read',
  },
  {
    slug: 'cloud-migration-guide-kenya',
    title: 'A Practical Cloud Migration Guide for Kenyan Businesses',
    excerpt: 'How to plan, cost and execute a successful move to AWS or Azure without disrupting daily operations.',
    image: cloud,
    category: 'Cloud',
    date: 'March 30, 2026',
    readTime: '8 min read',
  },
  {
    slug: 'closing-the-it-skills-gap',
    title: 'Closing the IT Skills Gap: Why Continuous Training Matters',
    excerpt: 'Why investing in certifications and ongoing training is one of the highest-ROI decisions a Kenyan business can make.',
    image: training,
    category: 'Training',
    date: 'March 18, 2026',
    readTime: '5 min read',
  },
];

const Blog = () => (
  <>
    <SEO
      title="IT Insights & News from Kasitech | Blog"
      description="Practical IT articles, guides and trends from Kasitech Solutions Limited — covering cybersecurity, cloud, networking and IT training in Kenya."
      keywords="IT blog Kenya, cybersecurity articles, cloud migration Kenya, IT training Kenya"
    />

    {/* Hero */}
    <section className="relative bg-gradient-hero text-white">
      <div className="container-page py-20 lg:py-24 text-center">
        <span className="eyebrow text-accent-foreground/90">Insights</span>
        <h1 className="heading-xl text-white mt-3 max-w-3xl mx-auto">
          Latest IT Insights, Guides & Industry News
        </h1>
        <p className="lead text-white/85 mt-5 max-w-2xl mx-auto">
          Practical advice from our engineers and consultants — written for Kenyan businesses.
        </p>
      </div>
    </section>

    {/* Posts */}
    <section className="section">
      <div className="container-page">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {posts.map((post) => (
            <article key={post.slug} className="card-elevated p-0 overflow-hidden flex flex-col group">
              <div className="aspect-[16/10] overflow-hidden bg-secondary">
                <img
                  src={post.image}
                  alt={post.title}
                  title={post.title}
                  width={1200}
                  height={750}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <span className="text-xs uppercase tracking-wider text-accent font-semibold">{post.category}</span>
                <h2 className="text-lg font-semibold mt-2 leading-snug">{post.title}</h2>
                <p className="text-sm text-muted-foreground mt-3 flex-1">{post.excerpt}</p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground mt-5">
                  <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {post.date}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {post.readTime}</span>
                </div>
                <Link
                  to={`/blog/${post.slug}`}
                  className="mt-5 inline-flex items-center text-sm font-medium text-accent group-hover:gap-2 transition-all"
                >
                  Read article <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default Blog;
