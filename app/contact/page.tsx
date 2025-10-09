import Image from "next/image";
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
    </>
  );
}
