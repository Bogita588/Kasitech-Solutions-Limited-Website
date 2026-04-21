import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { SEO } from '@/components/SEO';

const TermsOfService = () => (
  <>
    <SEO
      title="Terms of Service — Kasitech Solutions Limited"
      description="Review the terms of service for Kasitech Solutions Limited and understand how we deliver IT services in Kenya."
      keywords="terms of service Kasitech, IT services terms, service agreement Kenya"
    />

    <section className="section">
      <div className="container-page max-w-4xl mx-auto">
        <div className="space-y-6">
          <h1 className="heading-xl">Terms of Service</h1>
          <p className="lead text-foreground/80">
            These terms govern your use of Kasitech Solutions Limited's website and services. By engaging with us,
            you agree to the following terms and conditions.
          </p>

          <div className="space-y-4 text-foreground/85">
            <section className="rounded-3xl border border-border bg-card p-6 shadow-card">
              <h2 className="text-2xl font-semibold">Service Delivery</h2>
              <p className="mt-3">
                We provide IT consulting, cybersecurity, development, networking, training and equipment supply according to
                the scope agreed with each client.
              </p>
            </section>

            <section className="rounded-3xl border border-border bg-card p-6 shadow-card">
              <h2 className="text-2xl font-semibold">Client Responsibilities</h2>
              <p className="mt-3">
                Clients agree to provide accurate information, appropriate access to systems and timely approval for project milestones.
              </p>
            </section>

            <section className="rounded-3xl border border-border bg-card p-6 shadow-card">
              <h2 className="text-2xl font-semibold">Payment & Cancellation</h2>
              <p className="mt-3">
                Payment terms are set in each engagement. Cancellation or scope changes may affect delivery timelines and fees.
              </p>
            </section>

            <section className="rounded-3xl border border-border bg-card p-6 shadow-card">
              <h2 className="text-2xl font-semibold">Limitation of Liability</h2>
              <p className="mt-3">
                Our liability is limited to the fees paid for the specific service provided, except as required by applicable law.
              </p>
            </section>
          </div>

          <div className="pt-6 border-t border-border">
            <Button asChild className="btn-cta mt-4 h-12 px-7">
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default TermsOfService;
