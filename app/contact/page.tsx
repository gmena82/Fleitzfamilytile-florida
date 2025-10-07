import { siteConfig } from "@/config/site";
import { ContactForm } from "@/components/sections/contact-form";
import { PageHeader } from "@/components/sections/page-header";
import { Container } from "@/components/ui/container";

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Schedule a consultation or request a proposal."
        description="We respond within one business day. Visit our Florida showroom or request a virtual design session."
      />
      <section className="bg-slate-100 py-16">
        <Container className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-slate-900">Showroom details</h2>
            <p className="text-sm leading-relaxed text-slate-600">
              {siteConfig.locations[0]?.address}
              <br />
              {siteConfig.locations[0]?.city}
            </p>
            <div className="space-y-2 text-sm text-slate-600">
              <p>
                <span className="font-semibold text-slate-900">Phone:</span> {siteConfig.contact.phone}
              </p>
              <p>
                <span className="font-semibold text-slate-900">Email:</span> {siteConfig.contact.email}
              </p>
              <p>
                <span className="font-semibold text-slate-900">Hours:</span>
                <br />
                {siteConfig.hours.weekdays}
                <br />
                {siteConfig.hours.saturday}
                <br />
                {siteConfig.hours.sunday}
              </p>
            </div>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="space-y-2 pb-6">
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">Connect</span>
              <h2 className="text-2xl font-semibold text-slate-900">Share your project details.</h2>
              <p className="text-sm text-slate-600">Submit the form and our concierge team will respond within one business day.</p>
            </div>
            <ContactForm />
          </div>
        </Container>
      </section>
    </>
  );
}
