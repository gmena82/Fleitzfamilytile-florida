import Image from "next/image";
import Script from "next/script";
import type { Metadata } from "next";
import { ArrowUpRight, Clock, Mail, MapPin, Phone } from "lucide-react";

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
  const serviceAreaSummary = siteConfig.serviceAreas.join(" • ");
  const phoneHref = phoneNumber.replace(/[^\d]/g, "");
  const googleBusinessUrl = "https://share.google/A5WSqlCJ5gKJ8AuLI";
  const directionsUrl =
    "https://www.google.com/maps/dir/?api=1&destination=Fleitz%20Family%20Tile%2C%20Bradenton%2C%20FL";

  return (
    <>
      <Script id="contact-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }} />

      <section id="quality-blurb" className="bg-slate-50 py-16">
        <Container className="grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center">
          <div className="space-y-6 text-center lg:text-left">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-500">Three Generations of Tile Craft</p>
            <h1 className="text-3xl font-semibold text-slate-900 sm:text-4xl">Quality Is Everything</h1>
            <p className="mx-auto max-w-3xl text-sm leading-relaxed text-slate-600 lg:mx-0">
              We prepare every surface, waterproof wet zones, and use premium mortars and grouts so your tile stays flawless. From the first layout to final cleanup, our third-generation installers protect your home and timeline.
            </p>
          </div>
          <div className="relative mx-auto aspect-[4/3] w-full max-w-xl overflow-hidden rounded-3xl bg-slate-200 shadow-lg">
            <Image
              src="/images/placeholders/contact-quality-placeholder.svg"
              alt="Fleitz Family Tile team carefully installing tile"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 420px, 100vw"
              priority
            />
          </div>
        </Container>
      </section>

      <section id="hero" className="bg-slate-900 py-20 text-white">
        <Container className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)] lg:items-center">
          <div className="space-y-6 text-center lg:text-left">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-300">Tile Contractor Bradenton Contact</p>
            <h2 className="text-3xl font-semibold sm:text-4xl">Contact Us About Your Bradenton Project</h2>
            <p className="mx-auto max-w-2xl text-sm leading-relaxed text-slate-200 lg:mx-0">
              Call, email, or share project details for a free tile estimate. We serve Bradenton, Sarasota, Lakewood Ranch, and neighboring Suncoast communities.
            </p>
          </div>
          <HomeCtaForm />
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

      <section id="location" className="bg-slate-900 py-20 text-white">
        <div className="relative h-[420px] w-full overflow-hidden border-y border-white/10 bg-slate-900/40 shadow-2xl">
          <iframe
            title="Map showing Fleitz Family Tile in Bradenton, Florida"
            src="https://maps.google.com/maps?q=Fleitz%20Family%20Tile%2C%20Bradenton%2C%20FL&amp;z=13&amp;output=embed"
            className="absolute inset-0 h-full w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-slate-900/40 via-slate-900/10 to-transparent" />
        </div>
        <Container className="mt-12">
          <div className="mx-auto max-w-5xl space-y-8 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur">
            <div className="space-y-3 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-300">Visit Fleitz Family Tile</p>
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">Find Us on Google Maps</h2>
              <p className="text-sm leading-relaxed text-slate-200/80">
                Meet with our Bradenton tile experts, explore material options, and start planning your next project with three generations of craftsmanship.
              </p>
            </div>
            <div className="space-y-4 text-sm text-slate-200/90">
              <div className="flex items-start gap-3">
                <MapPin className="icon-electric mt-1 h-5 w-5 text-sky-300" aria-hidden style={{ animationDelay: "0s" }} />
                <div className="space-y-1">
                  <p className="font-semibold text-white">Bradenton, Florida</p>
                  <p className="text-slate-200/70">Serving {serviceAreaSummary}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="icon-electric mt-1 h-5 w-5 text-sky-300" aria-hidden style={{ animationDelay: "0.15s" }} />
                <a className="font-semibold text-white transition hover:text-sky-200" href={`tel:${phoneHref}`}>
                  {phoneNumber}
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="icon-electric mt-1 h-5 w-5 text-sky-300" aria-hidden style={{ animationDelay: "0.3s" }} />
                <a className="font-semibold text-white transition hover:text-sky-200" href={`mailto:${siteConfig.contact.email}`}>
                  {siteConfig.contact.email}
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="icon-electric mt-1 h-5 w-5 text-sky-300" aria-hidden style={{ animationDelay: "0.45s" }} />
                <div className="space-y-1 text-slate-200/80">
                  <p>{siteConfig.hours.weekdays}</p>
                  <p>{siteConfig.hours.saturday}</p>
                  <p>{siteConfig.hours.sunday}</p>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-3 pt-2">
              <a
                href={googleBusinessUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-200"
              >
                View Google Business
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </a>
              <a
                href={directionsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/60 px-5 py-3 text-sm font-semibold text-white transition hover:border-white"
              >
                Get Directions
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
