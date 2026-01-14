import Script from "next/script";
import type { Metadata } from "next";

import { QuoteCtaSection } from "@/components/sections/quote-cta";
import { Container } from "@/components/ui/container";
import { PlaceholderImage } from "@/components/ui/placeholder-image";
import { siteConfig } from "@/config/site";

const faqItems = [
  {
    question: "What tile holds up best in high-traffic areas?",
    answer:
      "Dense porcelain with a PEI rating of 4 or 5 withstands Bradenton's sand and humidity. We specify slip-resistant textures for entries and main living areas."
  },
  {
    question: "How long does a typical floor tile project take?",
    answer:
      "Most standard rooms install in 3–5 days including prep, setting, and grouting. Large-format tile Bradenton remodels or expansive layouts may take a few extra days for curing and movement joint placement."
  },
  {
    question: "Can you install over existing tile floors?",
    answer:
      "Sometimes. We evaluate height transitions, bond strength, and cracking risk. When conditions allow, we scarify, clean, and use premium mortars for secure overlays; otherwise, we remove tile and prep from the slab up."
  },
  {
    question: "How should I care for grout and keep it looking new?",
    answer:
      "Use a neutral pH cleaner, wipe spills quickly, and schedule periodic resealing for cement-based grout. We also offer stain-resistant epoxy or urethane grouts that minimize maintenance."
  }
] as const;


const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Floor Tile Installation",
  areaServed: ["Bradenton FL", "Sarasota FL", "Lakewood Ranch FL"],
  provider: { "@id": `${siteConfig.url}/#org` },
  serviceType: "Tile Installation",
  url: `${siteConfig.url}/floor-tile-installation`,
  description:
    "Professional floor tile installer in Bradenton, FL specializing in substrate preparation, movement joints, and large-format porcelain."
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
  title: "Floor Tile Installation Bradenton, FL | Fleitz Family Tile",
  description:
    "Bradenton floor tile installation with precise prep, flat LFT finishes, and durable grout. Serving Sarasota & Lakewood Ranch. Free estimates.",
  alternates: {
    canonical: "https://www.fleitzfamilytile.com/floor-tile-installation"
  }
};

export default function FloorTileInstallationPage() {
  return (
    <>
      <Script
        id="floor-tile-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <Script
        id="floor-tile-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <section
        id="hero"
        className="bg-slate-900 py-20 text-white"
        aria-labelledby="floor-tile-hero-heading"
      >
        <Container className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)]">
          <div className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-300">
              Floor Tile Installer Bradenton, FL
            </p>
            <h1 id="floor-tile-hero-heading" className="text-3xl font-semibold sm:text-4xl">
              Professional Tile Flooring for Bradenton Homes
            </h1>
            <p className="text-base leading-relaxed text-slate-200">
              Durable porcelain tile floors in Sarasota and Bradenton demand more than mortar. We level slabs, reinforce substrate
              transitions, and design clean movement joints so every room flows seamlessly and stands up to Gulf Coast living.
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-3xl border border-white/20 bg-white/5 p-4">
                <p className="text-sm font-semibold text-white">Substrate Preparation</p>
                <p className="mt-2 text-xs text-slate-200">Grinding, patching, and moisture mitigation for flat, stable floors.</p>
              </div>
              <div className="rounded-3xl border border-white/20 bg-white/5 p-4">
                <p className="text-sm font-semibold text-white">Movement Joints</p>
                <p className="mt-2 text-xs text-slate-200">Expansion details at perimeters and doorways protect tile and grout.</p>
              </div>
              <div className="rounded-3xl border border-white/20 bg-white/5 p-4">
                <p className="text-sm font-semibold text-white">Large-Format Expertise</p>
                <p className="mt-2 text-xs text-slate-200">Lippage control systems keep oversized tile flat across open layouts.</p>
              </div>
            </div>
          </div>
          <PlaceholderImage className="h-full min-h-[320px] w-full rounded-3xl border border-slate-700 bg-slate-800" />
        </Container>
      </section>

      <section id="benefits" className="bg-white py-16">
        <Container className="grid gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-slate-900">Built to Last</h2>
            <p className="text-base leading-relaxed text-slate-600">
              Every floor starts with substrate flatness within industry tolerances. We map highs and lows, patch voids, and add
              self-leveling underlayments when large-format tile demands a flawless base. Crack isolation membranes and uncoupling
              systems keep porcelain tile floors Sarasota homeowners invest in free from reflective cracking.
            </p>
            <p className="text-base leading-relaxed text-slate-600">
              Our team uses anti-fracture membranes where plumbing penetrations or slab seams need extra protection. From
              Bradenton condos to Lakewood Ranch custom homes, we combine premium mortars, movement joints, and edge trims for
              lasting performance.
            </p>
          </div>
          <div className="space-y-4 rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <h3 className="text-lg font-semibold text-slate-900">Why Bradenton Clients Trust Our Floors</h3>
            <ul className="space-y-3 text-sm leading-relaxed text-slate-600">
              <li>
                <span className="font-semibold text-slate-900">Documented prep:</span> Moisture tests, flatness reports, and
                photos before we set the first tile.
              </li>
              <li>
                <span className="font-semibold text-slate-900">Zero-lippage standards:</span> LFT clips, beating blocks, and
                back-buttering keep transitions smooth.
              </li>
              <li>
                <span className="font-semibold text-slate-900">Clean handoffs:</span> Flush Schluter transitions between wood,
                carpet, and tile so rooms connect without trip points.
              </li>
            </ul>
          </div>
        </Container>
      </section>

      <section id="materials-styles" className="bg-slate-50 py-16">
        <Container className="space-y-10">
          <div className="space-y-3 text-center">
            <h2 className="text-3xl font-semibold text-slate-900">Materials &amp; Styles</h2>
            <p className="mx-auto max-w-2xl text-sm leading-relaxed text-slate-600">
              From coastal wood-look planks to polished stone, we guide you through PEI wear ratings, slip resistance, and grout
              selections that match Florida lifestyles. Explore finishes Bradenton and Sarasota homeowners choose most.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">Wood-Look Planks</h3>
              <p className="text-sm leading-relaxed text-slate-600">
                Porcelain planks deliver the warmth of hardwood with water resistance. Staggered and herringbone layouts keep the
                look contemporary while PEI 4 durability handles pets and sand.
              </p>
            </div>
            <div className="space-y-2 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">Large-Format Tile</h3>
              <p className="text-sm leading-relaxed text-slate-600">
                Oversized squares and rectangles reduce grout joints. We plan offsets, use leveling systems, and back-butter each
                tile so broad great rooms stay flat.
              </p>
            </div>
            <div className="space-y-2 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">Porcelain &amp; Ceramic</h3>
              <p className="text-sm leading-relaxed text-slate-600">
                Classic choices for high-traffic homes. Glazed ceramic suits bedrooms and offices while dense porcelain takes on
                foyers and kitchens without scratching.
              </p>
            </div>
            <div className="space-y-2 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">Natural Stone</h3>
              <p className="text-sm leading-relaxed text-slate-600">
                Travertine, marble, and limestone bring organic character. We finish edges, seal surfaces, and recommend PEI and
                wear care tailored to each stone type.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section id="process" className="bg-white py-16">
        <Container className="grid gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-slate-900">Our Floor Tile Installation Process</h2>
            <p className="text-base leading-relaxed text-slate-600">
              We start with an on-site consultation to evaluate substrate conditions, expansion needs, and room transitions. A
              detailed prep plan covers grinding, patching, moisture control, and membrane selection before any tile leaves the
              box.
            </p>
            <p className="text-base leading-relaxed text-slate-600">
              Once prep is complete, we dry lay patterns, set reference lines, and install using premium mortars suited to
              porcelain, ceramic, or stone. After grouting and sealing, we walk you through cure times and care routines tailored
              to Bradenton's climate.
            </p>
          </div>
          <div className="space-y-4 rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <ol className="space-y-4 text-sm leading-relaxed text-slate-600">
              <li>
                <span className="font-semibold text-slate-900">1. Consultation:</span> Measure, inspect slab, and confirm
                design goals for each room.
              </li>
              <li>
                <span className="font-semibold text-slate-900">2. Prep:</span> Grind high spots, fill lows, and address
                moisture or cracks.
              </li>
              <li>
                <span className="font-semibold text-slate-900">3. Membrane (as needed):</span> Install crack isolation or
                uncoupling systems for added protection.
              </li>
              <li>
                <span className="font-semibold text-slate-900">4. Layout:</span> Snap lines, dry fit large-format tile, and set
                transitions at doorways.
              </li>
              <li>
                <span className="font-semibold text-slate-900">5. Set:</span> Use large-format mortars, back-buttering, and
                clips to maintain flatness.
              </li>
              <li>
                <span className="font-semibold text-slate-900">6. Grout &amp; Seal:</span> Choose stain-resistant grout, clean
                lines, and seal porous materials.
              </li>
              <li>
                <span className="font-semibold text-slate-900">7. Care:</span> Provide maintenance guidelines and movement joint
                checks for long-term performance.
              </li>
            </ol>
          </div>
        </Container>
      </section>

      <QuoteCtaSection />

      <section id="faq" className="bg-white py-16">
        <Container className="space-y-8">
          <div className="space-y-3 text-center">
            <h2 className="text-3xl font-semibold text-slate-900">Floor Tile Installation FAQs</h2>
            <p className="mx-auto max-w-2xl text-sm leading-relaxed text-slate-600">
              Answers to common questions we hear from Bradenton, Sarasota, and Lakewood Ranch homeowners planning porcelain tile
              floors.
            </p>
          </div>
          <dl className="space-y-6">
            {faqItems.map((item) => (
              <div key={item.question} className="space-y-2 rounded-3xl border border-slate-200 bg-slate-50 p-6">
                <dt className="text-lg font-semibold text-slate-900">{item.question}</dt>
                <dd className="text-sm leading-relaxed text-slate-600">{item.answer}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>
    </>
  );
}
