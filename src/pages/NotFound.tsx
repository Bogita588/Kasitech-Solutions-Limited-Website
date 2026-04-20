import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SEO } from '@/components/SEO';

const NotFound = () => {
  const location = useLocation();
  useEffect(() => {
    console.error('404 Not Found:', location.pathname);
  }, [location.pathname]);

  return (
    <>
      <SEO
        title="Page Not Found | Kasitech Solutions"
        description="The page you are looking for does not exist. Return to Kasitech Solutions home for IT services in Kenya."
      />
      <section className="min-h-[70vh] flex items-center justify-center">
        <div className="text-center px-6">
          <p className="eyebrow">404</p>
          <h1 className="heading-xl mt-2">We can't find that page</h1>
          <p className="lead mt-3 max-w-md mx-auto">The page may have moved or no longer exists.</p>
          <Button asChild className="mt-8 bg-primary hover:bg-primary-hover text-primary-foreground h-12 px-7 rounded-xl">
            <Link to="/"><Home className="w-4 h-4 mr-1" /> Back to Home</Link>
          </Button>
        </div>
      </section>
    </>
  );
};

export default NotFound;
