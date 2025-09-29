import { useEffect, useRef, ReactNode } from 'react';

interface ScrollAnimationProps {
  children: ReactNode;
  className?: string;
  animation?: 'fade-up' | 'fade-left' | 'fade-right' | 'scale-up' | 'parallax';
  delay?: number;
}

export const ScrollAnimation = ({ 
  children, 
  className = '', 
  animation = 'fade-up', 
  delay = 0 
}: ScrollAnimationProps) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('animate-in');
            }, delay);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    observer.observe(element);

    return () => observer.unobserve(element);
  }, [delay]);

  const animationClasses = {
    'fade-up': 'opacity-0 translate-y-8 transition-all duration-700 ease-out',
    'fade-left': 'opacity-0 -translate-x-8 transition-all duration-700 ease-out',
    'fade-right': 'opacity-0 translate-x-8 transition-all duration-700 ease-out',
    'scale-up': 'opacity-0 scale-95 transition-all duration-700 ease-out',
    'parallax': 'transition-transform duration-300 ease-out'
  };

  return (
    <div
      ref={elementRef}
      className={`${animationClasses[animation]} ${className}`}
      style={{
        willChange: 'transform, opacity'
      }}
    >
      {children}
    </div>
  );
};