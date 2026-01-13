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

      {/* Contact Hero Section */}
      <section className="relative overflow-hidden bg-slate-900 py-20 text-white">
        <div className="absolute inset-0">
          <Image
            src="/images/showroom/BG-1-F.png"
            alt="Luxury kitchen tile backsplash installation in Bradenton FL by Fleitz Family Tile"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />
        </div>
        <Container className="relative z-10">
          <div className="mx-auto max-w-2xl space-y-6 text-center">
            <h1 className="text-4xl font-semibold sm:text-5xl">Ready to Transform Your Space?</h1>
            <p className="text-lg leading-relaxed text-slate-200">
              Get a free estimate for your tile installation project. Professional craftsmanship, competitive pricing, and exceptional service guaranteed.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5" viewBox="0 0 24 24"><path fill="currentColor" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                <span className="text-sm font-semibold">Free Estimates</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5" viewBox="0 0 24 24"><path fill="currentColor" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                <span className="text-sm font-semibold">Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5" viewBox="0 0 24 24"><path fill="currentColor" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                <span className="text-sm font-semibold">Quality Guarantee</span>
              </div>
            </div>

            {/* Contact Information */}
            <div className="mt-8 flex flex-wrap justify-center gap-6 border-t border-white/20 pt-8">
              <a href={`tel:+1${phoneDigits}`} className="flex items-center gap-2 font-medium text-white transition hover:text-sky-200">
                <Phone className="h-5 w-5 text-sky-300" />
                {phoneNumber}
              </a>
              <a href={`mailto:${siteConfig.contact.email}`} className="flex items-center gap-2 font-medium text-white transition hover:text-sky-200">
                <Mail className="h-5 w-5 text-sky-300" />
                {siteConfig.contact.email}
              </a>
              <span className="flex items-center gap-2 text-sm text-slate-200">
                <MapPin className="h-5 w-5 text-sky-300" />
                {siteConfig.headquarters.city}, {siteConfig.headquarters.state}
              </span>
            </div>
          </div>
        </Container>
      </section>

      {/* Quality Section */}
      <section className="bg-slate-50 py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-center">
            <div className="order-2 lg:order-1">
              <Image
                src="/images/showroom/Mirror-Backsplash.png"
                alt="Client admiring a beautiful and lasting tile backsplash"
                width={800}
                height={600}
                className="h-auto w-full rounded-xl object-cover shadow-lg"
              />
            </div>
            <div className="order-1 space-y-6 lg:order-2">
              <h2 className="text-3xl font-semibold text-slate-900">Quality is Everything</h2>
              <p className="text-base leading-relaxed text-slate-600">
                When it comes to your home, quality is the one thing that truly matters. We believe our clients work too hard for their money to settle for anything less than a project that is both beautiful and built to last. From meticulous surface preparation to the final, perfect grout line, our commitment to craftsmanship is unwavering. Your home is an investment, and we honor that with tile work that stands the test of time, delivering value and enjoyment for years to come.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Form Section */}
      <section id="contact" className="relative overflow-hidden bg-slate-900 py-20 text-white">
        <div className="absolute inset-0">
          <Image
            src="/images/showroom/BG-1-F.png"
            alt="Tile installation background"
            fill
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 via-slate-900/80 to-slate-900/90" />
        </div>
        <Container className="relative z-10">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-semibold sm:text-4xl">Get Your Free Estimate</h2>
              <p className="text-base leading-relaxed text-slate-300">
                Fill out the form and we'll get back to you within 24 hours with a detailed estimate for your project.
              </p>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-center gap-3">
                  <svg className="h-5 w-5 text-sky-400" viewBox="0 0 24 24"><path fill="currentColor" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                  No obligation quote
                </li>
                <li className="flex items-center gap-3">
                  <svg className="h-5 w-5 text-sky-400" viewBox="0 0 24 24"><path fill="currentColor" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                  Response within 24 hours
                </li>
                <li className="flex items-center gap-3">
                  <svg className="h-5 w-5 text-sky-400" viewBox="0 0 24 24"><path fill="currentColor" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                  Professional on-site consultation
                </li>
              </ul>
            </div>
            <div>
              <HomeCtaForm />
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
