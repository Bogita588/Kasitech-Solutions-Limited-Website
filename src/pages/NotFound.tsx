import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <>
      <SEO 
        title="404 - Page Not Found | Brianix Tech Solutions"
        description="The page you are looking for does not exist. Return to Brianix Tech Solutions homepage for web development, SEO, and app development services in Nairobi."
        keywords="404 error"
      />
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-primary-light to-background dark:from-background dark:to-secondary">
        <div className="text-center max-w-2xl mx-auto px-4">
          <h1 className="mb-4 text-6xl md:text-8xl font-black text-primary">404</h1>
          <h2 className="mb-4 text-2xl md:text-4xl font-bold text-foreground">Page Not Found</h2>
          <p className="mb-8 text-lg text-muted-foreground">
            Oops! The page you're looking for doesn't exist. Let's get you back on track.
          </p>
          <Button asChild size="lg" className="btn-hero">
            <a href="/">Return to Home</a>
          </Button>
        </div>
      </div>
    </>
  );
};

export default NotFound;
