import { siteConfig } from "@/config/site";
import { ContactForm } from "@/components/sections/contact-form";
import { PageHeader } from "@/components/sections/page-header";
import { Container } from "@/components/ui/container";
import { PlaceholderImage } from "@/components/ui/placeholder-image";

export default function ContactPage() {
  const phoneNumber = siteConfig.contact.phone;
  const phoneDigits = phoneNumber.replace(/[^\d+]/g, "");
  const phoneHref = phoneDigits ? `tel:${phoneDigits}` : undefined;
  const emailAddress = siteConfig.contact.email;
  const emailHref = emailAddress ? `mailto:${emailAddress}` : undefined;
  const addressLine2 = `${siteConfig.headquarters.city}, ${siteConfig.headquarters.state} ${siteConfig.headquarters.postalCode}`;

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Connect with Fleitz Family Tile."
        description="Share your project goals, schedule a site visit, or request an on-site consultation. Our team responds within one business day."
      />
      <section className="py-16">
        <Container className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)]">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-slate-900">Bradenton headquarters</h2>
              <p className="text-sm leading-relaxed text-slate-600">
                Visit our Bradenton base to review material samples, talk through waterproofing details, and map out schedules for your next tile installation.
              </p>
              <div className="space-y-3 text-sm text-slate-600">
                <p>
                  <span className="font-semibold text-slate-900">Address:</span>
                  <br />
                  {siteConfig.headquarters.street}
                  <br />
                  {addressLine2}
                </p>
                {phoneNumber && (
                  <p>
                    <span className="font-semibold text-slate-900">Phone:</span>{" "}
                    {phoneHref ? (
                      <a href={phoneHref} className="text-slate-900 underline-offset-4 hover:underline">
                        {phoneNumber}
                      </a>
                    ) : (
                      <span>{phoneNumber}</span>
                    )}
                  </p>
                )}
                {emailAddress && (
                  <p>
                    <span className="font-semibold text-slate-900">Email:</span>{" "}
                    {emailHref ? (
                      <a href={emailHref} className="text-slate-900 underline-offset-4 hover:underline">
                        {emailAddress}
                      </a>
                    ) : (
                      <span>{emailAddress}</span>
                    )}
                  </p>
                )}
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
            <PlaceholderImage className="h-64 w-full" />
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="space-y-2 pb-6">
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">Request information</span>
              <h2 className="text-2xl font-semibold text-slate-900">Tell us about your project</h2>
              <p className="text-sm text-slate-600">
                Share your project scope, location, and timeline. We&apos;ll follow up with next steps and schedule a consultation.
              </p>
            </div>
            <ContactForm />
          </div>
        </Container>
      </section>
    </>
  );
}
