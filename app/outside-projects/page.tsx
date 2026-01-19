import Script from "next/script";
import type { Metadata } from "next";

import { QuoteCtaSection } from "@/components/sections/quote-cta";
import { FaqSection } from "@/components/sections/faq";
import { Container } from "@/components/ui/container";
import { PlaceholderImage } from "@/components/ui/placeholder-image";
import { siteConfig } from "@/config/site";

const highlights = [
  {
    title: "Engineered for Florida moisture",
    description:
      "We install uncoupling and waterproofing membranes, correct slab slopes, and use exterior-rated mortars so tile stays bonded through daily rain and humidity.",
  },
  {
    title: "Slip resistance dialed in",
    description:
      "Matte and textured porcelain rated for wet areas give you sure footing around pools and lanais without sacrificing the look you want.",
  },
  {
    title: "Seamless indoor-outdoor transitions",
    description:
      "Mitred edges, flush sills, and patterned layouts carry your interior tile design onto patios and summer kitchens for a continuous flow.",
  },
] as const;

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Outdoor Tile Installation",
  areaServed: ["Bradenton FL", "Sarasota FL", "Lakewood Ranch FL"],
  provider: { "@id": `${siteConfig.url}/#org` },
  serviceType: "Tile Installation",
  url: `${siteConfig.url}/outside-projects`,
};

export const metadata: Metadata = {
  title: "Outdoor Tile & Lanai Installation in Bradenton, FL | Fleitz Family Tile",
  description:
    "Porcelain patios, lanais, and pool decks installed for Florida weather. Exterior-rated tile, drainage, and slip-resistant finishes from Fleitz Family Tile.",
  alternates: {
    canonical: "https://www.fleitzfamilytile.com/outside-projects",
  },
};

export default function OutdoorTileServicesPage() {
  return (
    <>
      <Script id="outdoor-service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />

      <section className="relative overflow-hidden bg-slate-900 py-20 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(148,163,184,0.18),_transparent_55%)]" aria-hidden />
        <Container className="relative grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)]">
          <div className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-300">Outdoor Tile in Bradenton, FL</p>
            <h1 className="text-3xl font-semibold sm:text-4xl">Lanai &amp; Outdoor Tile Built for Gulf Coast Weather</h1>
            <p className="text-base leading-relaxed text-slate-200">
              Create patios, pool surrounds, and summer kitchens that stay cool and solid under the Florida sun. Fleitz Family Tile installs exterior-rated porcelain and stone with the drainage, movement joints, and detailing needed for decades of performance.
            </p>
          </div>
          <PlaceholderImage className="h-full min-h-[320px] w-full rounded-3xl border border-slate-700 bg-slate-800" />
        </Container>
      </section>

      <section className="bg-white py-16">
        <Container className="space-y-10">
          <div className="space-y-3 text-center">
            <h2 className="text-3xl font-semibold text-slate-900">Why homeowners trust our outdoor installs</h2>
            <p className="mx-auto max-w-2xl text-sm leading-relaxed text-slate-600">
              Every lanai, porch, and pool deck we build in Manatee and Sarasota counties balances beauty with the technical requirements of the outdoors.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {highlights.map((item) => (
              <article key={item.title} className="space-y-3 rounded-3xl border border-slate-200 bg-slate-50 p-6">
                <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="text-sm leading-relaxed text-slate-600">{item.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-slate-50 py-16">
        <Container className="grid gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-slate-900">Details that make exterior tile last</h2>
            <p className="text-base leading-relaxed text-slate-600">
              We evaluate drainage, slope, sun exposure, and the transition between indoor flooring and lanais before setting a single tile. From there our installers prep slabs, correct elevations, and use expansion joints so heat and moisture never crack your surface.
            </p>
            <ul className="space-y-3 text-sm leading-relaxed text-slate-600">
              <li><span className="font-semibold text-slate-900">Surface prep:</span> Grinding, patching, and membranes that keep tile bonded even on aging concrete.</li>
              <li><span className="font-semibold text-slate-900">Drainage planning:</span> Water follows the pitch we set—away from your home and toward strategic drains.</li>
              <li><span className="font-semibold text-slate-900">Finishing touches:</span> Coping, nosings, and trims aligned with screened enclosures and outdoor kitchens.</li>
            </ul>
          </div>
          <div className="space-y-6 rounded-3xl border border-dashed border-slate-300 bg-white p-6">
            <PlaceholderImage className="h-40 w-full rounded-2xl border border-slate-200" />
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-slate-900">Popular outdoor looks</h3>
              <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate-600">
                <li>Large-format porcelain that mirrors your interior tile</li>
                <li>Slip-resistant stone textures for pools and spas</li>
                <li>Wood-look planks that stand up to salt air</li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-16">
        <Container className="space-y-6 text-center">
          <h2 className="text-3xl font-semibold text-slate-900">Plan your outdoor project</h2>
          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-slate-600">
            Share your lanai, screen room, or pool deck goals and we will recommend the right exterior tile, prep, and layout to keep it performing through Florida summers.
          </p>
          <div className="mx-auto max-w-3xl overflow-hidden rounded-3xl border border-dashed border-slate-300 bg-white">
            <PlaceholderImage className="h-full w-full rounded-none border-0" label="Outdoor Tile Project" style={{ minHeight: "14rem" }} />
          </div>
        </Container>
      </section>

      <QuoteCtaSection />
    </>
  );
}
