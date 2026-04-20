import { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SEO } from '@/components/SEO';
import cybersecurity from '@/assets/blog-cybersecurity.webp';
import cloud from '@/assets/blog-cloud.webp';
import training from '@/assets/blog-training.webp';

const posts = {
  'cybersecurity-essentials-for-kenyan-smes': {
    title: 'Cybersecurity Essentials Every Kenyan SME Should Implement Today',
    category: 'Cybersecurity',
    date: 'April 12, 2026',
    readTime: '6 min read',
    image: cybersecurity,
    summary: 'Practical protections to reduce the risk of ransomware, data loss and downtime for Kenyan small businesses.',
    sections: [
      {
        heading: 'Start with strong, simple security controls',
        text: 'Begin with multi-factor authentication, regularly updated antivirus software, and centralized password management. These low-cost steps block the most common attack methods used against SMEs.'
      },
      {
        heading: 'Backup data before anything else',
        text: 'A reliable backup strategy protects your business from ransomware and accidental loss. Keep copies in the cloud, on-site, and verify restores regularly.'
      },
      {
        heading: 'Train people, not just systems',
        text: 'Human error remains the top cause of breaches. Employee awareness training helps teams spot phishing attempts and avoid risky behaviour online.'
      },
      {
        heading: 'Monitor and respond quickly',
        text: 'Implement logging and alerting for critical systems, and partner with a local provider who can investigate and contain incidents fast.'
      }
    ]
  },
  'cloud-migration-guide-kenya': {
    title: 'A Practical Cloud Migration Guide for Kenyan Businesses',
    category: 'Cloud',
    date: 'March 30, 2026',
    readTime: '8 min read',
    image: cloud,
    summary: 'A step-by-step migration framework for moving to AWS or Azure with minimal risk and disruption.',
    sections: [
      {
        heading: 'Assess readiness before moving',
        text: 'Review each application, data source and network dependency to determine what can move first and what should stay on-premises.'
      },
      {
        heading: 'Choose the right cloud model',
        text: 'Public, private and hybrid models each have benefits. Kenyan organisations often benefit from a hybrid strategy that keeps sensitive workloads nearby while using public cloud for agility.'
      },
      {
        heading: 'Plan for cost control',
        text: 'Use tagging, reserved instances and usage monitoring to avoid surprise bills. Cost governance is as important as migration execution.'
      },
      {
        heading: 'Validate and optimise after launch',
        text: 'After migration, tune performance, security and backups so your cloud environment is efficient and resilient.'
      }
    ]
  },
  'closing-the-it-skills-gap': {
    title: 'Closing the IT Skills Gap: Why Continuous Training Matters',
    category: 'Training',
    date: 'March 18, 2026',
    readTime: '5 min read',
    image: training,
    summary: 'How continuous staff development reduces downtime and keeps Kenyan teams ahead of fast-changing technologies.',
    sections: [
      {
        heading: 'Invest in practical skills',
        text: 'Certifications and hands-on training help employees support systems better and reduce their reliance on external contractors.'
      },
      {
        heading: 'Build a learning culture',
        text: 'Create short, regular training sessions that focus on real-world tools and security awareness, not just theory.'
      },
      {
        heading: 'Measure outcomes with projects',
        text: 'Use internal improvement projects to turn learning into immediate business value — from improved network uptime to smoother deployments.'
      },
      {
        heading: 'Retain talent through growth',
        text: 'When staff see investment in their skills, they are more likely to stay and contribute long-term to your organisation.'
      }
    ]
  }
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = useMemo(() => (slug ? posts[slug] : undefined), [slug]);

  if (!post) {
    return (
      <div className="container-page py-24 text-center">
        <h1 className="heading-lg">Article Not Found</h1>
        <p className="mt-4 text-muted-foreground">The article you are looking for is not available. Please return to the blog list.</p>
        <div className="mt-8">
          <Button asChild>
            <Link to="/blog">Back to Blog</Link>
          </Button>
        </div>
      </div>
    );
  }

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    image: post.image,
    author: { '@type': 'Organization', name: 'Kasitech Solutions Limited' },
    publisher: { '@type': 'Organization', name: 'Kasitech Solutions Limited' },
    datePublished: post.date,
    description: post.summary,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://kasitech.co.ke/blog/${slug}`
    }
  };

  return (
    <>
      <SEO
        title={`${post.title} | Kasitech Blog`}
        description={post.summary}
        keywords={`${post.category} blog, IT blog Kenya, Kasitech ${post.category.toLowerCase()}`}
        ogType="article"
        ogImage={post.image}
        structuredData={structuredData}
      />

      <section className="section pt-12 pb-16">
        <div className="container-page">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <Link to="/blog" className="text-sm font-medium text-accent hover:text-accent-foreground inline-flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" /> Back to Blog
              </Link>
              <span className="eyebrow mt-4 inline-block">{post.category}</span>
              <h1 className="heading-xl mt-4">{post.title}</h1>
              <div className="mt-4 flex flex-wrap gap-4 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-2"><Calendar className="w-4 h-4" /> {post.date}</span>
                <span className="inline-flex items-center gap-2"><Clock className="w-4 h-4" /> {post.readTime}</span>
              </div>
            </div>
            <Button asChild className="h-12 px-6 rounded-xl">
              <a href="https://wa.me/254723799450?text=Hello%20Kasitech%2C%20I%20would%20like%20to%20talk%20about%20your%20IT%20services" target="_blank" rel="noopener noreferrer">Talk to an Expert</a>
            </Button>
          </div>
        </div>
      </section>

      <section className="section pb-24">
        <div className="container-page grid gap-10 lg:grid-cols-[2fr_1fr]">
          <article className="space-y-8">
            <div className="overflow-hidden rounded-3xl shadow-card">
              <img src={post.image} alt={post.title} className="w-full h-[420px] object-cover" loading="lazy" />
            </div>
            <div className="prose prose-invert max-w-none">
              <p>{post.summary}</p>
              {post.sections.map((section) => (
                <div key={section.heading} className="space-y-4">
                  <h2>{section.heading}</h2>
                  <p>{section.text}</p>
                </div>
              ))}
            </div>
          </article>

          <aside className="space-y-8">
            <div className="card-elevated p-6">
              <h2 className="text-lg font-semibold">Quick takeaways</h2>
              <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
                {post.sections.map((section) => (
                  <li key={section.heading} className="before:content-['•'] before:mr-2 before:text-accent">
                    {section.heading}
                  </li>
                ))}
              </ul>
            </div>
            <div className="card-elevated p-6">
              <h2 className="text-lg font-semibold">Need help implementing this?</h2>
              <p className="mt-3 text-sm text-muted-foreground">Kasitech can support your IT strategy, migration, cybersecurity or training with a local team in Nairobi.</p>
              <Button asChild className="mt-6 h-12 px-6 rounded-xl">
                <a href="https://wa.me/254723799450?text=Hello%20Kasitech%2C%20I%20read%20your%20blog%20and%20I%27d%20like%20to%20learn%20more." target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a>
              </Button>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
};

export default BlogPost;
