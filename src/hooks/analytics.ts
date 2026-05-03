// src/analytics.ts

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export const GA_ID = 'G-EGB7EVJ69R';

export const trackPageView = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_ID, {
      page_path: url,
    });
  }
};

export const trackEvent = (
  action: string,
  category: string,
  label?: string
) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
    });
  }
};