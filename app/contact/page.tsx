import Image from "next/image";
import Script from "next/script";
import type { Metadata } from "next";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";

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
  const phoneNumber = siteConfig.contact.phone.replace(/^(ph:?\s*)/i, "");
  const phoneDigits = phoneNumber.replace(/[^\d]/g, "");
  const googleBusinessUrl = "https://share.google/A5WSqlCJ5gKJ8AuLI";

  return (
    <>
      <Script id="contact-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }} />

      {/* Contact Hero/Form Section */}
      <section id="contact" className="cta-section relative overflow-hidden bg-slate-900 py-16 text-white">
        <div className="cta-bg absolute inset-0">
          <Image
            src="/images/showroom/BG-1-F.png"
            alt="Luxury kitchen tile backsplash installation in Bradenton FL by Fleitz Family Tile"
            fill
            className="cta-bg-image object-cover"
            priority
          />
          <div className="cta-overlay absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />
        </div>
        <Container className="relative z-10">
          <div className="cta-content grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)]">
            <div className="cta-text space-y-6">
              <h1 className="text-3xl font-semibold sm:text-4xl">Ready to Transform Your Space?</h1>
              <p className="text-sm leading-relaxed text-slate-200">
                Get a free estimate for your tile installation project. Professional craftsmanship, competitive pricing, and exceptional service guaranteed.
              </p>
              <div className="cta-features flex flex-wrap gap-4">
                <div className="feature flex items-center gap-2">
                  <svg className="feature-icon h-5 w-5" viewBox="0 0 24 24"><path fill="currentColor" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                  <span className="text-sm font-semibold">Free Estimates</span>
                </div>
                <div className="feature flex items-center gap-2">
                  <svg className="feature-icon h-5 w-5" viewBox="0 0 24 24"><path fill="currentColor" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                  <span className="text-sm font-semibold">Licensed & Insured</span>
                </div>
                <div className="feature flex items-center gap-2">
                  <svg className="feature-icon h-5 w-5" viewBox="0 0 24 24"><path fill="currentColor" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                  <span className="text-sm font-semibold">Quality Guarantee</span>
                </div>
              </div>

              {/* Contact Information */}
              <div className="contact-info mt-8 space-y-4 border-t border-white/20 pt-8">
                <div className="contact-item flex items-center gap-3">
                  <Phone className="contact-icon h-5 w-5 text-sky-300" />
                  <a href={`tel:+1${phoneDigits}`} className="font-medium text-white transition hover:text-sky-200">
                    {phoneNumber}
                  </a>
                </div>
                <div className="contact-item flex items-center gap-3">
                  <Mail className="contact-icon h-5 w-5 text-sky-300" />
                  <a href={`mailto:${siteConfig.contact.email}`} className="font-medium text-white transition hover:text-sky-200">
                    {siteConfig.contact.email}
                  </a>
                </div>
                <div className="contact-item flex items-start gap-3">
                  <MapPin className="contact-icon mt-1 h-5 w-5 text-sky-300" />
                  <span className="text-sm text-slate-200">
                    {siteConfig.headquarters.street}, {siteConfig.headquarters.city}, {siteConfig.headquarters.state} {siteConfig.headquarters.postalCode}
                  </span>
                </div>
              </div>
            </div>
            <div className="cta-form">
              <HomeCtaForm />
            </div>
          </div>
        </Container>
      </section>

      {/* Quality Section */}
      <section className="quality-section bg-slate-50 py-20">
        <Container>
          <div className="cta-content grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-center">
            <div className="quality-image order-2 lg:order-1">
              <Image
                src="/images/showroom/Mirror-Backsplash.png"
                alt="Client admiring a beautiful and lasting tile backsplash"
                width={800}
                height={600}
                className="h-auto w-full rounded-xl object-cover shadow-lg"
              />
            </div>
            <div className="cta-text order-1 space-y-6 lg:order-2">
              <h2 className="text-3xl font-semibold text-slate-900">Quality is Everything</h2>
              <p className="text-base leading-relaxed text-slate-600">
                When it comes to your home, quality is the one thing that truly matters. We believe our clients work too hard for their money to settle for anything less than a project that is both beautiful and built to last. From meticulous surface preparation to the final, perfect grout line, our commitment to craftsmanship is unwavering. Your home is an investment, and we honor that with tile work that stands the test of time, delivering value and enjoyment for years to come.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Map Section */}
      <section className="map-section bg-white py-20">
        <Container>
          <div className="section-header mb-8 space-y-3 text-center">
            <h2 className="text-3xl font-semibold text-slate-900">Find Us in Bradenton</h2>
            <p className="mx-auto max-w-2xl text-sm leading-relaxed text-slate-600">
              Serving Bradenton, Sarasota, Lakewood Ranch & nearby communities
            </p>
          </div>
          <div className="map-actions mb-4 text-right">
            <a
              className="map-link inline-flex items-center gap-2 text-sm font-semibold text-slate-700 transition hover:text-slate-900"
              href={googleBusinessUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Open Our Google Business Profile
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
          <div className="map-container overflow-hidden rounded-xl shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.323952458428!2d-82.5665!3d27.4909!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c33e7b2e9c3e5d%3A0x6e7b5e4f2a71343c!2sBradenton%2C%20FL%2034201%2C%20USA!5e0!3m2!1sen!2sus!4v1662586733364!5m2!1sen!2sus"
              style={{ border: 0, width: "100%", height: "450px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google map showing Fleitz Family Tile in Bradenton, Florida"
            />
          </div>
        </Container>
      </section>
    </>
  );
}
