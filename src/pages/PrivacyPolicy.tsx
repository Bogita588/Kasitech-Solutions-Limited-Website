import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { SEO } from '@/components/SEO';

const PrivacyPolicy = () => (
  <>
    <SEO
      title="Privacy Policy — Kasitech Solutions Limited"
      description="Read Kasitech Solutions Limited's privacy policy and learn how we handle your personal information securely."
      keywords="privacy policy Kasitech, data protection Kenya, IT services privacy"
    />

    <section className="section">
      <div className="container-page max-w-4xl mx-auto">
        <div className="space-y-6">
          <h1 className="heading-xl">Privacy Policy</h1>
          <p className="lead text-foreground/80">
            At Kasitech Solutions Limited, we respect your privacy. This policy explains how we collect, use,
            protect and share the personal information you provide when you use our website or request our services.
          </p>

          <div className="space-y-4 text-foreground/85">
            <section className="rounded-3xl border border-border bg-card p-6 shadow-card">
              <h2 className="text-2xl font-semibold">Information We Collect</h2>
              <p className="mt-3">
                We may collect your name, email address, phone number, organisation details and project requirements when you contact us,
                request a quote or sign up for updates.
              </p>
            </section>

            <section className="rounded-3xl border border-border bg-card p-6 shadow-card">
              <h2 className="text-2xl font-semibold">How We Use Your Data</h2>
              <p className="mt-3">
                We use your information to respond to inquiries, deliver services, send relevant communications and improve our solutions.
                We do not sell your personal data to third parties.
              </p>
            </section>

            <section className="rounded-3xl border border-border bg-card p-6 shadow-card">
              <h2 className="text-2xl font-semibold">Data Security</h2>
              <p className="mt-3">
                We maintain appropriate technical and organisational measures to protect your information from unauthorised access,
                loss or misuse.
              </p>
            </section>

            <section className="rounded-3xl border border-border bg-card p-6 shadow-card">
              <h2 className="text-2xl font-semibold">Contact</h2>
              <p className="mt-3">
                If you have questions about this policy or need help with your data, please email us at
                <a href="mailto:info@kasitech.co.ke" className="text-accent hover:text-accent-foreground"> info@kasitech.co.ke</a>.
              </p>
            </section>
          </div>

          <div className="pt-6 border-t border-border">
            <Button asChild className="btn-cta mt-4 h-12 px-7">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default PrivacyPolicy;
