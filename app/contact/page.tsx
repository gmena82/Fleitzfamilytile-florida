import { siteConfig } from "@/config/site";
import { ContactForm } from "@/components/sections/contact-form";
import { PageHeader } from "@/components/sections/page-header";
import { Container } from "@/components/ui/container";
import { PlaceholderImage } from "@/components/ui/placeholder-image";

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Connect with Fleitz Family Tile."
        description="Share your project goals, schedule a showroom visit, or request an on-site consultation. Our team responds within one business day."
      />
      <section className="py-16">
        <Container className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)]">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-slate-900">Showroom & contact details</h2>
              <p className="text-sm leading-relaxed text-slate-600">
                Visit our Bradenton head office to browse tile collections, review design inspirations, and discuss timelines with our team.
              </p>
              <div className="space-y-3 text-sm text-slate-600">
                <p>
                  <span className="font-semibold text-slate-900">Address:</span>
                  <br />
                  {siteConfig.locations[0]?.address}
                  <br />
                  {siteConfig.locations[0]?.city}
                </p>
                <p>
                  <span className="font-semibold text-slate-900">Phone:</span>{" "}
                  <a href={`tel:${siteConfig.contact.phone.replace(/[^\d+]/g, "")}`} className="text-slate-900 underline-offset-4 hover:underline">
                    {siteConfig.contact.phone}
                  </a>
                </p>
                <p>
                  <span className="font-semibold text-slate-900">Email:</span>{" "}
                  <a href={`mailto:${siteConfig.contact.email}`} className="text-slate-900 underline-offset-4 hover:underline">
                    {siteConfig.contact.email}
                  </a>
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
            <PlaceholderImage className="h-64 w-full" label="Image Here" />
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="space-y-2 pb-6">
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">Request information</span>
              <h2 className="text-2xl font-semibold text-slate-900">Tell us about your project</h2>
              <p className="text-sm text-slate-600">
                Share your project scope, location, and timeline. We'll follow up with next steps and schedule a consultation.
              </p>
            </div>
            <ContactForm />
          </div>
        </Container>
      </section>
    </>
  );
}
