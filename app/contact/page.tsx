import Script from "next/script";
import type { Metadata } from "next";

import { HomeCtaForm } from "@/components/sections/home-cta-form";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/config/site";

const contactJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Fleitz Family Tile",
  url: `${siteConfig.url}/contact`,
  publisher: { "@id": `${siteConfig.url}/#org` },
  mainEntity: {
    "@type": "ContactPoint",
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    contactType: "Customer Service",
    areaServed: ["US-FL"],
  },
};

export const metadata: Metadata = {
  title: "Contact Fleitz Family Tile | Free Tile Estimate in Bradenton, FL",
  description:
    "Request a free estimate from Fleitz Family Tile. Based in Bradenton and serving Sarasota & Lakewood Ranch. Licensed & insured.",
  alternates: {
    canonical: "https://www.fleitzfamilytile.com/contact",
  },
};

export default function ContactPage() {
  const phoneNumber = siteConfig.contact.phone;
  const phoneDigits = phoneNumber.replace(/[^\d+]/g, "");
  const phoneHref = phoneDigits ? `tel:${phoneDigits}` : undefined;
  const emailAddress = siteConfig.contact.email;
  const emailHref = emailAddress ? `mailto:${emailAddress}` : undefined;
  const hours = [siteConfig.hours.weekdays, siteConfig.hours.saturday, siteConfig.hours.sunday].filter(Boolean);

  return (
    <>
      <Script id="contact-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }} />

      <section id="hero" className="bg-slate-900 py-20 text-white">
        <Container className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)] lg:items-center">
          <div className="space-y-6 text-center lg:text-left">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-300">Tile Contractor Bradenton Contact</p>
            <h1 className="text-3xl font-semibold sm:text-4xl">Contact Us About Your Bradenton Project</h1>
            <p className="mx-auto max-w-2xl text-sm leading-relaxed text-slate-200 lg:mx-0">
              Call, email, or share project details for a free tile estimate. We serve Bradenton, Sarasota, Lakewood Ranch, and neighboring Suncoast communities.
            </p>
          </div>
          <HomeCtaForm />
        </Container>
      </section>

      <section id="contact-info" className="bg-white py-16">
        <Container className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-slate-900">Get in Touch</h2>
            <div className="space-y-3 text-sm text-slate-600">
              <p className="text-base font-semibold text-slate-900">Fleitz Family Tile</p>
              <p>Bradenton, FL</p>
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
              {hours.length > 0 && (
                <div>
                  <p className="font-semibold text-slate-900">Hours</p>
                  <ul className="mt-2 space-y-1">
                    {hours.map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900">Send a Message</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Share your project scope, ideal timeline, and location. We&apos;ll follow up within one business day.
            </p>
            <form
              id="contact-form"
              className="mt-6 grid gap-4"
              action="/api/contact"
              method="post"
            >
              <label className="space-y-2 text-sm font-medium text-slate-700">
                <span>Name</span>
                <input type="text" name="name" required className="w-full rounded-full border border-slate-300 bg-white px-4 py-3 text-sm shadow-sm focus:border-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/10" />
              </label>
              <label className="space-y-2 text-sm font-medium text-slate-700">
                <span>Email</span>
                <input type="email" name="email" required className="w-full rounded-full border border-slate-300 bg-white px-4 py-3 text-sm shadow-sm focus:border-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/10" />
              </label>
              <label className="space-y-2 text-sm font-medium text-slate-700">
                <span>Phone</span>
                <input type="tel" name="phone" className="w-full rounded-full border border-slate-300 bg-white px-4 py-3 text-sm shadow-sm focus:border-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/10" />
              </label>
              <label className="space-y-2 text-sm font-medium text-slate-700">
                <span>City</span>
                <input type="text" name="city" placeholder="Bradenton / Sarasota / Lakewood Ranch" className="w-full rounded-full border border-slate-300 bg-white px-4 py-3 text-sm shadow-sm focus:border-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/10" />
              </label>
              <label className="space-y-2 text-sm font-medium text-slate-700">
                <span>Service</span>
                <select name="service" className="w-full rounded-full border border-slate-300 bg-white px-4 py-3 text-sm shadow-sm focus:border-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/10">
                  <option>Kitchen Backsplash</option>
                  <option>Bathroom &amp; Shower</option>
                  <option>Floor Tile Installation</option>
                  <option>Fireplace</option>
                  <option>Special Project</option>
                </select>
              </label>
              <label className="space-y-2 text-sm font-medium text-slate-700">
                <span>Message</span>
                <textarea name="message" rows={4} className="min-h-[120px] w-full rounded-3xl border border-slate-300 bg-white px-4 py-3 text-sm shadow-sm focus:border-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/10" />
              </label>
              <label className="space-y-2 text-sm font-medium text-slate-700">
                <span>Project photos or plans (optional)</span>
                <input type="file" name="attachments" className="w-full rounded-full border border-dashed border-slate-300 bg-white px-4 py-3 text-sm shadow-sm focus:border-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/10" />
              </label>
              <button type="submit" className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700">
                Submit
              </button>
              <p className="form-success text-center text-xs font-semibold uppercase tracking-[0.3em] text-emerald-600" hidden>
                Thanks! Your message has been sent.
              </p>
              <p className="form-error text-center text-xs font-semibold uppercase tracking-[0.3em] text-red-500" hidden>
                Sorry—something went wrong. Please try again or email us directly.
              </p>
            </form>
          </div>
        </Container>
      </section>

      <section id="quality-blurb" className="bg-slate-50 py-16">
        <Container className="space-y-6 text-center">
          <h2 className="text-3xl font-semibold text-slate-900">Quality Is Everything</h2>
          <p className="mx-auto max-w-3xl text-sm leading-relaxed text-slate-600">
            We prepare every surface, waterproof wet zones, and use premium mortars and grouts so your tile stays flawless. From the first layout to final cleanup, our third-generation installers protect your home and timeline.
          </p>
        </Container>
      </section>

      <section id="service-areas" className="bg-white py-16">
        <Container className="space-y-6 text-center">
          <h2 className="text-3xl font-semibold text-slate-900">Serving the Suncoast</h2>
          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-slate-600">
            Based in Bradenton and proudly completing tile projects throughout Sarasota, Lakewood Ranch, and nearby Gulf Coast communities.
          </p>
        </Container>
      </section>
    </>
  );
}
