import Script from "next/script";
import type { Metadata } from "next";

import { QuoteCtaSection } from "@/components/sections/quote-cta";
import { FaqSection } from "@/components/sections/faq";
import { Container } from "@/components/ui/container";
import { PlaceholderImage } from "@/components/ui/placeholder-image";
import { siteConfig } from "@/config/site";

const capabilities = [
  {
    title: "Custom mosaics",
    description:
      "Hand-cut glass and porcelain mosaics crafted into logos, compass roses, and one-of-a-kind murals for Bradenton foyers and spas.",
  },
  {
    title: "Medallions & inlays",
    description:
      "Waterjet medallions, stone borders, and deco inserts that anchor entries or stair landings with precise symmetry.",
  },
  {
    title: "Feature walls",
    description:
      "Statement tile feature walls for Lakewood Ranch living rooms, wine bars, and fireplaces with flawless edge profiles.",
  },
  {
    title: "Patios & lanais",
    description:
      "Slip-resistant outdoor tile systems for Sarasota lanais, kitchens, and pool surrounds that handle rain, heat, and salt air.",
  },
] as const;

const materialHighlights = [
  {
    title: "Ceramic & porcelain",
    description:
      "Large-format panels, handmade looks, and patterned tile laid on perfectly prepped substrates to resist cracking and lippage.",
  },
  {
    title: "Natural stone",
    description:
      "Marble, travertine, and limestone sealed and detailed with mitered corners, niches, and stone trim for enduring luxury.",
  },
  {
    title: "Glass & specialty surfaces",
    description:
      "Iridescent glass, metal accents, and artistic blends installed with aligned grout joints and protective Schluter profiles.",
  },
  {
    title: "Mockups & heated floors",
    description:
      "3D renderings, dry layouts, and radiant floor prep so you can visualize every seam before install—even on heated floor systems.",
  },
] as const;

const floridaNotes = [
  {
    title: "Drainage planning",
    description:
      "Slope calculations, waterproof membranes, and perimeter drains keep lanais and outdoor kitchens ready for pop-up storms.",
  },
  {
    title: "Slip resistance",
    description:
      "We specify textures and finishes that grip even when surfaces are wet—ideal for pool decks and screened lanais.",
  },
  {
    title: "Expansion & UV protection",
    description:
      "Movement joints, UV-stable grouts, and colorfast sealers prevent warping or fading under relentless Gulf Coast sun.",
  },
  {
    title: "Poolside performance",
    description:
      "Salt-friendly mortars, epoxy grouts, and coping details tailored for Sarasota and Bradenton pool enclosures.",
  },
] as const;

const processSteps = [
  {
    title: "Design review",
    description:
      "Bring your inspiration images or sketches—our craftsmen translate them into buildable layouts and exact measurements.",
  },
  {
    title: "Material guidance",
    description:
      "We help you source the right tile, medallions, Schluter trims, and heated floor components, coordinating with suppliers if needed.",
  },
  {
    title: "Prep & install",
    description:
      "Float, waterproof, and set tile with laser-guided layout checks, ensuring every grout joint stays straight indoors or out.",
  },
  {
    title: "Finish & care",
    description:
      "Sealing, caulking, and a personalized maintenance guide keep your custom tile investment looking sharp year after year.",
  },
] as const;

const faqItems = [
  {
    question: "What types of special tile projects do you take on?",
    answer:
      "From mosaic murals and medallions to lanai kitchens, fireplaces, wine rooms, and shower feature walls, we manage the prep and installation for any custom concept.",
  },
  {
    question: "Can you install tile that I already purchased?",
    answer:
      "Yes—bring your owner-supplied tile or medallion and we’ll verify compatibility, recommend trims, and handle the installation details.",
  },
  {
    question: "How do we start the design process?",
    answer:
      "Schedule a consultation and share photos or drawings. We’ll review your goals, gather measurements, and create mockups or layout options before ordering materials.",
  },
  {
    question: "What timelines should I expect for custom work?",
    answer:
      "Simple accents can be scheduled within a couple of weeks, while large mosaics or outdoor projects may require 3–4 weeks for fabrication and planning before installation begins.",
  },
] as const;

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Custom & Special Tile Projects",
  areaServed: ["Bradenton FL", "Sarasota FL", "Lakewood Ranch FL"],
  provider: { "@id": `${siteConfig.url}/#org` },
  serviceType: "Tile Installation",
  url: `${siteConfig.url}/special-projects`,
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${siteConfig.url}/` },
    { "@type": "ListItem", position: 2, name: "Services", item: `${siteConfig.url}/#services` },
    { "@type": "ListItem", position: 3, name: "Special Projects", item: `${siteConfig.url}/special-projects` },
  ],
};

export const metadata: Metadata = {
  title: "Custom Tile & Special Projects Bradenton, FL | Fleitz Family Tile",
  description:
    "One-of-a-kind tile: mosaics, medallions, feature walls, and outdoor spaces in Bradenton & Sarasota. Precise, durable installations.",
  alternates: {
    canonical: "https://www.fleitzfamilytile.com/special-projects",
  },
};

export default function SpecialProjectsPage() {
  return (
    <>
      <Script id="special-projects-service" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <Script id="special-projects-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Script id="special-projects-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <section id="hero" className="bg-slate-900 py-20 text-white">
        <Container className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:items-center">
          <div className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-300">Custom Tile Bradenton &amp; Sarasota</p>
            <h1 className="text-3xl font-semibold sm:text-4xl">Special Tile Projects — From Mosaics to Outdoor Lanais</h1>
            <p className="text-sm leading-relaxed text-slate-200">
              Unique ideas deserve precise execution. Whether you’re dreaming up a mosaic medallion for a West Bradenton entry, a tile feature wall in Lakewood Ranch, or an outdoor tile upgrade in Sarasota, Fleitz Family Tile brings generational craftsmanship to every custom installation.
            </p>
            <ul className="grid gap-4 sm:grid-cols-2">
              <li className="rounded-3xl border border-white/15 bg-white/5 p-5">
                <h2 className="text-base font-semibold text-white">Concept-to-install expertise</h2>
                <p className="mt-2 text-xs text-slate-200">Layout planning, substrate prep, and finish details handled start to finish.</p>
              </li>
              <li className="rounded-3xl border border-white/15 bg-white/5 p-5">
                <h2 className="text-base font-semibold text-white">Outdoor-ready systems</h2>
                <p className="mt-2 text-xs text-slate-200">Drainage, waterproofing, and expansion management for lanai living.</p>
              </li>
            </ul>
          </div>
          <PlaceholderImage className="h-full min-h-[320px] w-full rounded-3xl border border-white/15 bg-white/5" />
        </Container>
      </section>

      <section id="capabilities" className="bg-white py-16">
        <Container className="space-y-10">
          <div className="space-y-3 text-center">
            <h2 className="text-3xl font-semibold text-slate-900">Custom capabilities for standout spaces</h2>
            <p className="mx-auto max-w-2xl text-sm leading-relaxed text-slate-600">
              Explore the creative tile work we execute across Bradenton, Sarasota, and Lakewood Ranch—from mosaic medallions to curated lanai environments.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {capabilities.map((item) => (
              <div key={item.title} className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section id="materials" className="bg-slate-50 py-16">
        <Container className="space-y-10">
          <div className="space-y-3 text-center">
            <h2 className="text-3xl font-semibold text-slate-900">Material palettes &amp; finishing touches</h2>
            <p className="mx-auto max-w-2xl text-sm leading-relaxed text-slate-600">
              Ceramic, porcelain, stone, and glass—all installed with mockups, Schluter profiles, and heated floor options when the project calls for them.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {materialHighlights.map((item) => (
              <article key={item.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section id="florida-considerations" className="bg-white py-16">
        <Container className="space-y-10">
          <div className="space-y-3 text-center">
            <h2 className="text-3xl font-semibold text-slate-900">Built for Florida conditions</h2>
            <p className="mx-auto max-w-2xl text-sm leading-relaxed text-slate-600">
              Our outdoor and lanai tile projects consider drainage, slip resistance, movement, and UV exposure from the start.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {floridaNotes.map((item) => (
              <div key={item.title} className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section id="process" className="bg-slate-900 py-16 text-white">
        <Container className="space-y-10">
          <div className="space-y-3 text-center">
            <h2 className="text-3xl font-semibold sm:text-4xl">Design review → Material guidance → Prep &amp; install → Finish &amp; care</h2>
            <p className="mx-auto max-w-2xl text-sm leading-relaxed text-slate-200">
              Every special project follows a transparent workflow so you always know what’s next and who’s on site.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => (
              <div key={step.title} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-200">{step.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <FaqSection 
        items={faqItems} 
        title="Special Project FAQs"
        description="Answers to common questions about commissioning custom tile work in Bradenton and Sarasota."
      />

      <QuoteCtaSection />
    </>
  );
}
