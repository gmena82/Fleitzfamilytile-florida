import Script from "next/script";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { QuoteCtaSection } from "@/components/sections/quote-cta";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/config/site";

const faqItems = [
  {
    question: "How long does a shower tile remodel take?",
    answer:
      "A typical shower rebuild, including demo, waterproofing, tile setting, and grout, takes about 3–5 working days depending on size and drying time."
  },
  {
    question: "What tile works best for bathroom floors?",
    answer:
      "Porcelain or ceramic with a matte or textured finish gives you grip under bare feet while holding up to moisture, cleaners, and Florida humidity."
  },
  {
    question: "Why is waterproofing so important?",
    answer:
      "Showers see daily soakings. Properly sloped pans, sealed seams, and bonded waterproofing membranes prevent water from migrating into studs and subfloors."
  },
  {
    question: "How do I keep ventilation and maintenance in check?",
    answer:
      "Run an exhaust fan during and after showers, squeegee walls, and use a neutral cleaner every couple of weeks to keep grout bright and mold at bay."
  }
] as const;

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Bathroom & Shower Tile Installation",
  areaServed: ["Bradenton FL", "Sarasota FL", "Lakewood Ranch FL"],
  provider: { "@id": `${siteConfig.url}/#org` },
  serviceType: "Tile Installation",
  url: `${siteConfig.url}/bathroom-shower`
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
  title: "Bathroom & Shower Tile Bradenton, FL | Waterproofed & Built to Last",
  description:
    "Expert bathroom & shower tile in Bradenton and Sarasota. Proper waterproofing, slip-smart shower floors, clean layouts. Free estimates from Fleitz Family Tile.",
  alternates: {
    canonical: "https://www.fleitzfamilytile.com/bathroom-shower"
  }
};

export default function BathroomShowerPage() {
  return (
    <>
      <Script id="bathroom-shower-service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <Script id="bathroom-shower-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <section
        id="hero"
        className="relative overflow-hidden bg-slate-900 py-20 text-white"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(148,163,184,0.2),_transparent_55%)]" aria-hidden />
        <Container className="relative grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)]">
          <div className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-300">
              Bathroom &amp; Shower Tile in Bradenton, FL
            </p>
            <h1 className="text-3xl font-semibold sm:text-4xl">Bathroom &amp; Shower Tile — Built to Handle Florida Moisture</h1>
            <p className="text-base leading-relaxed text-slate-200">
              Turn your bath into a Gulf Coast retreat with tile that stays beautiful under daily steam. Fleitz Family Tile builds fully waterproofed showers, slip-smart floors, and spa details that stand up to Bradenton humidity without sacrificing style.
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/20 bg-white/5 p-4">
                <p className="text-sm font-semibold text-white">True Waterproofing</p>
                <p className="mt-2 text-xs text-slate-200">Bonded membranes, flood-tested pans, and sealed penetrations keep water where it belongs.</p>
              </div>
              <div className="rounded-2xl border border-white/20 bg-white/5 p-4">
                <p className="text-sm font-semibold text-white">Retreat-Level Comfort</p>
                <p className="mt-2 text-xs text-slate-200">Built-in benches, niches, and heated floors dial in your at-home spa experience.</p>
              </div>
              <div className="rounded-2xl border border-white/20 bg-white/5 p-4">
                <p className="text-sm font-semibold text-white">Precision Layouts</p>
                <p className="mt-2 text-xs text-slate-200">Laser-leveled walls and miters align accents, trims, and mosaics from floor to ceiling.</p>
              </div>
            </div>
          </div>
          <div className="relative h-full min-h-[320px] w-full overflow-hidden rounded-3xl border border-slate-700 bg-slate-800">
            <Image
              src="/images/showroom/shower-tall-1.webp"
              alt="Custom bathroom shower tile installation in Bradenton FL by Fleitz Family Tile"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 420px, 100vw"
            />
          </div>
        </Container>
      </section>

      <section id="waterproofing" className="bg-white py-16">
        <Container className="grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-slate-900">Waterproofing Done Right</h2>
            <p className="text-base leading-relaxed text-slate-600">
              Showers fail from the inside out, so we obsess over prep. Our crews demo to the studs, correct framing, and install bonded waterproofing that ties floors, curbs, and walls into a single shield. Every transition is detailed to shed water, not trap it.
            </p>
            <p className="text-base leading-relaxed text-slate-600">
              From Bradenton beach homes to Sarasota high-rises, our Schluter- and LATICRETE-trained installers flood test pans, pitch linear drains, and treat every fastener. The result—bathroom tile that holds strong for decades.
            </p>
          </div>
          <div className="space-y-4 rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <h3 className="text-lg font-semibold text-slate-900">What We Detail</h3>
            <ul className="space-y-3 text-sm leading-relaxed text-slate-600">
              <li>
                <span className="font-semibold text-slate-900">Membranes &amp; Overlaps:</span> Sheet or liquid membranes are seamed with manufacturer-approved bands for a continuous barrier.
              </li>
              <li>
                <span className="font-semibold text-slate-900">Proper Slopes:</span> Shower pans and benches are pitched 1/4" per foot so standing water never lingers.
              </li>
              <li>
                <span className="font-semibold text-slate-900">Corners &amp; Penetrations:</span> Inside/outside corners, niches, and valve penetrations receive pre-formed seals and urethane caulks.
              </li>
            </ul>
          </div>
        </Container>
      </section>

      <section id="design-options" className="bg-slate-50 py-16">
        <Container className="space-y-10">
          <div className="space-y-3 text-center">
            <h2 className="text-3xl font-semibold text-slate-900">Surfaces, Niches &amp; Bench Details</h2>
            <p className="mx-auto max-w-2xl text-sm leading-relaxed text-slate-600">
              Waterproofing is the foundation; finish work seals the experience. Explore the layouts, textures, and trim work we bring to Sarasota shower remodels and Bradenton bathroom upgrades.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">Floor &amp; Wall Surfaces</h3>
              <p className="text-sm leading-relaxed text-slate-600">
                Large-format porcelain, marble-look slabs, and handcrafted zellige deliver seamless walls. Slip-rated mosaics and pebble blends keep shower floors grippy without sacrificing style.
              </p>
            </div>
            <div className="space-y-2 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">Niches &amp; Storage</h3>
              <p className="text-sm leading-relaxed text-slate-600">
                Custom niches line up with grout joints, finished with Schluter trims or stone returns to keep bottles organized and edges durable.
              </p>
            </div>
            <div className="space-y-2 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">Benches &amp; Ledges</h3>
              <p className="text-sm leading-relaxed text-slate-600">
                Floating and corner benches are framed, waterproofed, and topped with slab caps or bullnose tile for comfortable seating and clean lines.
              </p>
            </div>
            <div className="space-y-2 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">Finishing Touches</h3>
              <p className="text-sm leading-relaxed text-slate-600">
                Mitred edges, metal profiles, heated floors, and glass panel blocking deliver a polished finish ready for frameless doors and spa fixtures.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section id="process" className="bg-white py-16">
        <Container className="space-y-10">
          <div className="space-y-3 text-center">
            <h2 className="text-3xl font-semibold text-slate-900">Our Bathroom Remodel Process</h2>
            <p className="mx-auto max-w-3xl text-sm leading-relaxed text-slate-600">
              From first tile demo to final polish, every step follows a documented workflow so your bathroom stays clean and on schedule.
            </p>
          </div>
          <ol className="grid gap-6 md:grid-cols-3">
            <li className="space-y-3 rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">1. Demo</div>
              <p className="text-sm leading-relaxed text-slate-600">
                Protect existing finishes, remove tile and pans, and haul debris while keeping the rest of your home dust-free.
              </p>
            </li>
            <li className="space-y-3 rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">2. Prep</div>
              <p className="text-sm leading-relaxed text-slate-600">
                Correct framing, adjust plumbing or electrical, and install backer systems ready for waterproofing.
              </p>
            </li>
            <li className="space-y-3 rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">3. Set</div>
              <p className="text-sm leading-relaxed text-slate-600">
                Build and flood-test the pan, waterproof surfaces, and begin setting tile with laser-laid layouts.
              </p>
            </li>
            <li className="space-y-3 rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">4. Grout</div>
              <p className="text-sm leading-relaxed text-slate-600">
                Apply high-performance grout, tool movement joints with matching sealant, and clean every surface.
              </p>
            </li>
            <li className="space-y-3 rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">5. Seal</div>
              <p className="text-sm leading-relaxed text-slate-600">
                Seal natural stone, polish trim, and confirm every niche, bench, and profile is watertight.
              </p>
            </li>
            <li className="space-y-3 rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">6. Cleanup</div>
              <p className="text-sm leading-relaxed text-slate-600">
                Reinstall fixtures, wipe surfaces, remove protection, and complete a final walkthrough so you can move in.
              </p>
            </li>
          </ol>
        </Container>
      </section>

      <QuoteCtaSection />

      <section id="faq" className="bg-white py-16">
        <Container className="space-y-10">
          <div className="space-y-3 text-center">
            <h2 className="text-3xl font-semibold text-slate-900">Bathroom &amp; Shower Tile FAQs</h2>
            <p className="mx-auto max-w-2xl text-sm leading-relaxed text-slate-600">
              Answers to the questions Bradenton and Sarasota homeowners ask most about bathroom tile remodels.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {faqItems.map((item) => (
              <div key={item.question} className="space-y-2 rounded-3xl border border-slate-200 bg-slate-50 p-6">
                <h3 className="text-lg font-semibold text-slate-900">{item.question}</h3>
                <p className="text-sm leading-relaxed text-slate-600">{item.answer}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
