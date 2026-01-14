import Script from "next/script";
import type { Metadata } from "next";

import { QuoteCtaSection } from "@/components/sections/quote-cta";
import { Container } from "@/components/ui/container";
import { PlaceholderImage } from "@/components/ui/placeholder-image";
import { siteConfig } from "@/config/site";

const faqItems = [
  {
    question: "What tile styles hold up best around fireplace heat?",
    answer:
      "Porcelain large-format panels, marble-look slabs, stacked stone, and ledger panels all thrive around fireplaces when they are paired with the right mortar and grout. We source heat-rated materials that deliver the coastal style Bradenton and Sarasota homes love without sacrificing performance."
  },
  {
    question: "How long does a tile fireplace surround project take?",
    answer:
      "Most fireplace tile surround installations wrap in 2–4 working days, depending on demo, substrate prep, and whether we are tying into a full-height feature wall. We schedule each phase so your living room quickly returns to that year-round ambiance."
  },
  {
    question: "How should I prepare my home before the crew arrives?",
    answer:
      "Clear furnishings from the work zone, secure pets, and plan for a dust barrier if we are cutting inside. We bring surface protection, ventilation fans, and cleanup tools so your home stays tidy from layout to final polish."
  },
  {
    question: "Can you coordinate mantel carpentry or electrical work?",
    answer:
      "Yes. We partner with trusted trades for mantels, lighting, and TV mounting so the finished fireplace looks seamless and functions safely."
  }
] as const;

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Fireplace Tile Installation",
  areaServed: ["Bradenton FL", "Sarasota FL", "Lakewood Ranch FL"],
  provider: { "@id": `${siteConfig.url}/#org` },
  serviceType: "Tile Installation",
  url: `${siteConfig.url}/fireplaces`
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer
    }
  }))
};

export const metadata: Metadata = {
  title: "Fireplace Tile Surrounds Bradenton, FL | Feature Walls & Hearths",
  description:
    "Custom tile fireplace surrounds and feature walls for Bradenton & Sarasota homes. Heat-appropriate materials, clean layouts, and safe installation.",
  alternates: {
    canonical: "https://www.fleitzfamilytile.com/fireplaces"
  }
};

export default function FireplacesPage() {
  return (
    <>
      <Script
        id="fireplaces-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <Script
        id="fireplaces-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <section
        id="hero"
        className="relative overflow-hidden bg-slate-900 py-20 text-white"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(148,163,184,0.2),_transparent_55%)]" aria-hidden />
        <Container className="relative grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)]">
          <div className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-300">Year-round ambiance; coastal style.</p>
            <h1 className="text-3xl font-semibold sm:text-4xl">Custom Fireplace Tile Surrounds &amp; Feature Walls</h1>
            <p className="text-base leading-relaxed text-slate-200">
              Anchor your living space with fireplace tile crafted for the Gulf Coast climate. From Bradenton bungalows to
              Lakewood Ranch retreats, our artisans blend porcelain slabs, stacked stone, and mosaic detail into a focal point that
              elevates every season.
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/20 bg-white/5 p-4">
                <p className="text-sm font-semibold text-white">Heat-Smart Materials</p>
                <p className="mt-2 text-xs text-slate-200">Fireplace tile Bradenton homeowners trust—porcelain, ledgers, and stone selected for high-temp performance.</p>
              </div>
              <div className="rounded-2xl border border-white/20 bg-white/5 p-4">
                <p className="text-sm font-semibold text-white">Coastal Design</p>
                <p className="mt-2 text-xs text-slate-200">Natural hues, textured finishes, and clean reveals echo Sarasota shoreline style.</p>
              </div>
              <div className="rounded-2xl border border-white/20 bg-white/5 p-4">
                <p className="text-sm font-semibold text-white">Precision Craft</p>
                <p className="mt-2 text-xs text-slate-200">Laser-leveled layout and mitered corners deliver seamless fireplace transitions.</p>
              </div>
            </div>
          </div>
          <PlaceholderImage className="h-full min-h-[320px] w-full rounded-3xl border border-slate-700 bg-slate-800" />
        </Container>
      </section>

      <section id="design" className="bg-white py-16">
        <Container className="grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-slate-900">A Breathtaking Focal Point</h2>
            <p className="text-base leading-relaxed text-slate-600">
              From low-profile surrounds to soaring feature walls, we tailor every fireplace to your room proportions and sight lines. Modern large-format slabs offer sleek, grout-minimized backdrops, while textured ledgers and stacked stone add dimension.
            </p>
            <p className="text-base leading-relaxed text-slate-600">
              We integrate hearths, benches, shelving, and media niches so the tile fireplace surround Sarasota families gather around feels intentional from floor to ceiling. Love the showpieces from Aesthetic Tile? We deliver that custom look with local craftsmanship and responsive service.
            </p>
          </div>
          <div className="space-y-4 rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <h3 className="text-lg font-semibold text-slate-900">Design Elements We Dial In</h3>
            <ul className="space-y-3 text-sm leading-relaxed text-slate-600">
              <li>
                <span className="font-semibold text-slate-900">Surround Geometry:</span> Balance mantel, firebox, and ceiling proportions for a symmetrical focal point.
              </li>
              <li>
                <span className="font-semibold text-slate-900">Material Pairings:</span> Blend natural stone with plaster, shiplap, or custom cabinetry for a layered finish.
              </li>
              <li>
                <span className="font-semibold text-slate-900">Feature Wall Lighting:</span> Plan sconces, LED washes, and art niches before the first tile is set.
              </li>
            </ul>
          </div>
        </Container>
      </section>

      <section id="safety-precision" className="bg-slate-50 py-16">
        <Container className="grid gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1fr)]">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-slate-900">Safety &amp; Precision</h2>
            <p className="text-base leading-relaxed text-slate-600">
              Fireplaces demand disciplined prep. We confirm clearances for gas, electric, and wood-burning units, engineer substrates to withstand expansion, and select mortars and grouts rated for the temperatures your hearth generates.
            </p>
            <p className="text-base leading-relaxed text-slate-600">
              Symmetry rules every install. We dry-lay to balance joints across fireboxes, polish exposed edges, and miter corners for clean transitions that hold up to Florida humidity.
            </p>
          </div>
          <div className="space-y-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">Our Installation Checklist</h3>
            <ul className="space-y-3 text-sm leading-relaxed text-slate-600">
              <li>Verify manufacturer clearances and integrate cement board, metal lath, or framing upgrades where needed.</li>
              <li>Use heat-rated thinsets, mortars, and urethane grouts for longevity.</li>
              <li>Layout with lasers for level reveals, aligned grout joints, and picture-frame trims.</li>
            </ul>
          </div>
        </Container>
      </section>

      <section id="options" className="bg-white py-16">
        <Container className="space-y-10">
          <div className="space-y-3 text-center">
            <h2 className="text-3xl font-semibold text-slate-900">Tile &amp; Finish Options</h2>
            <p className="mx-auto max-w-2xl text-sm leading-relaxed text-slate-600">
              Choose surfaces that anchor your feature wall and complement surrounding millwork. We source LFT porcelain panels, natural stone slabs, ledger stone, metallic mosaics, and warm wood mantels to complete the look for feature wall tile Lakewood Ranch homes love.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2 rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="text-lg font-semibold text-slate-900">Large-Format &amp; Slab Panels</h3>
              <p className="text-sm leading-relaxed text-slate-600">Continuous porcelain or quartz panels deliver a modern aesthetic with minimal joints and easy upkeep.</p>
            </div>
            <div className="space-y-2 rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="text-lg font-semibold text-slate-900">Stone &amp; Ledger Finishes</h3>
              <p className="text-sm leading-relaxed text-slate-600">Stacked stone, ledgers, and split-face textures add depth and coastal character to Lakewood Ranch feature walls.</p>
            </div>
            <div className="space-y-2 rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="text-lg font-semibold text-slate-900">Mosaics &amp; Accents</h3>
              <p className="text-sm leading-relaxed text-slate-600">Metallic, glass, or artisan mosaics frame fireboxes, niches, and floating hearths with custom detail.</p>
            </div>
            <div className="space-y-2 rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="text-lg font-semibold text-slate-900">Mantel Integration</h3>
              <p className="text-sm leading-relaxed text-slate-600">Coordinate wood, stone, or metal mantels with blocking, brackets, and tile reveals for a cohesive finish.</p>
            </div>
          </div>
        </Container>
      </section>

      <QuoteCtaSection />

      <section id="faq" className="bg-white py-16">
        <Container className="space-y-10">
          <div className="space-y-3 text-center">
            <h2 className="text-3xl font-semibold text-slate-900">Fireplace Tile FAQs</h2>
            <p className="mx-auto max-w-2xl text-sm leading-relaxed text-slate-600">
              Answers to the questions Bradenton, Sarasota, and Lakewood Ranch homeowners ask most before we revamp their hearth.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {faqItems.map((item) => (
              <div key={item.question} className="space-y-2 rounded-3xl border border-slate-200 bg-slate-50 p-6">
                <h3 className="text-base font-semibold text-slate-900">{item.question}</h3>
                <p className="text-sm leading-relaxed text-slate-600">{item.answer}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
