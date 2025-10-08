import Script from "next/script";
import type { Metadata } from "next";

import { HomeCtaForm } from "@/components/sections/home-cta-form";
import { Container } from "@/components/ui/container";
import { PlaceholderImage } from "@/components/ui/placeholder-image";
import { siteConfig } from "@/config/site";

const ctaServices = [
  {
    title: "Kitchen Backsplash Installation",
    description: "Custom layouts, precise cuts, and clean finishes for Bradenton kitchens.",
    href: "/kitchen-backsplashes"
  }
] as const;

const faqItems = [
  {
    question: "How long does a backsplash install take?",
    answer: "Most standard backsplashes finish in 1–2 days including prep, setting, and grouting."
  },
  {
    question: "What materials do you recommend?",
    answer:
      "Porcelain/ceramic for durability; natural stone for a premium look (seal it); glass/mosaics for accent walls."
  },
  {
    question: "Can you help with design?",
    answer:
      "Yes—layout, grout color, edge profiles, and pattern recommendations to match cabinets and counters."
  },
  {
    question: "Do you seal stone?",
    answer: "Yes—stone is sealed and we specify stain-resistant grout for easier maintenance."
  }
] as const;

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Kitchen Backsplash Installation",
  areaServed: ["Bradenton FL", "Sarasota FL", "Lakewood Ranch FL"],
  provider: { "@id": `${siteConfig.url}/#org` },
  serviceType: "Tile Installation",
  url: `${siteConfig.url}/kitchen-backsplashes`
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
  title: "Kitchen Backsplash Installer Bradenton, FL | Fleitz Family Tile",
  description:
    "Custom kitchen backsplashes in Bradenton & Sarasota. Ceramic, porcelain, glass, and stone—precise layouts, clean edges, stain-resistant grouts. Free estimates.",
  alternates: {
    canonical: "https://www.fleitzfamilytile.com/kitchen-backsplashes"
  }
};

export default function KitchenBacksplashesPage() {
  return (
    <>
      <Script
        id="kitchen-backsplash-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <Script
        id="kitchen-backsplash-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <section id="hero" className="bg-slate-900 py-20 text-white">
        <Container className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)]">
          <div className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-300">
              Kitchen Backsplash Installer in Bradenton, FL
            </p>
            <h1 className="text-3xl font-semibold sm:text-4xl">Expert Kitchen Backsplash Installation in Bradenton</h1>
            <p className="text-base leading-relaxed text-slate-200">
              Looking for a kitchen backsplash installer in Bradenton who obsesses over tight grout joints and crisp trim? Fleitz
              Family Tile templates every wall, aligns seams with your cabinets, and delivers clean edge profiles—whether you
              choose ceramic or porcelain, natural stone, or glass mosaics.
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/20 bg-white/5 p-4">
                <p className="text-sm font-semibold text-white">Ceramic &amp; Porcelain</p>
                <p className="mt-2 text-xs text-slate-200">Durable, easy-clean surfaces for everyday Bradenton cooking.</p>
              </div>
              <div className="rounded-2xl border border-white/20 bg-white/5 p-4">
                <p className="text-sm font-semibold text-white">Natural Stone Profiles</p>
                <p className="mt-2 text-xs text-slate-200">Polished, honed, or leathered finishes with sealed protection.</p>
              </div>
              <div className="rounded-2xl border border-white/20 bg-white/5 p-4">
                <p className="text-sm font-semibold text-white">Glass &amp; Specialty Edges</p>
                <p className="mt-2 text-xs text-slate-200">Schluter trims, bullnose, and picture-frame borders built to last.</p>
              </div>
            </div>
          </div>
          <PlaceholderImage className="h-full min-h-[320px] w-full rounded-3xl border border-slate-700 bg-slate-800" />
        </Container>
      </section>

      <section id="benefits" className="bg-white py-16">
        <Container className="grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-slate-900">The Perfect Finish for Your Kitchen</h2>
            <p className="text-base leading-relaxed text-slate-600">
              Your backsplash is eye-level and under cabinet lighting highlights every cut. We plan layouts that keep outlets
              centered, align with cabinet reveals, and finish with stain-resistant grout that shrugs off sauce splashes. From
              Bradenton condos to Lakewood Ranch estates, your backsplash tile installation stays crisp for years.
            </p>
            <p className="text-base leading-relaxed text-slate-600">
              We coordinate with electricians and countertop installers to keep seams symmetrical and ensure your hood, shelves,
              and windows get clean returns. The result—backsplash tile Bradenton homeowners rave about.
            </p>
          </div>
          <div className="space-y-4 rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <h3 className="text-lg font-semibold text-slate-900">Precision You Can See</h3>
            <ul className="space-y-3 text-sm leading-relaxed text-slate-600">
              <li>
                <span className="font-semibold text-slate-900">Outlet &amp; switch plates:</span> Tight cuts and concealed
                box extensions keep covers flush.
              </li>
              <li>
                <span className="font-semibold text-slate-900">Layout symmetry:</span> Dry-laid mockups align grout lines
                with cabinet edges and focal points.
              </li>
              <li>
                <span className="font-semibold text-slate-900">Protected grout:</span> High-performance, stain-resistant
                grout blends color and durability for easy cleaning.
              </li>
            </ul>
          </div>
        </Container>
      </section>

      <section id="materials" className="bg-slate-50 py-16">
        <Container className="space-y-10">
          <div className="space-y-3 text-center">
            <h2 className="text-3xl font-semibold text-slate-900">Popular Materials</h2>
            <p className="mx-auto max-w-2xl text-sm leading-relaxed text-slate-600">
              We help you select backsplash systems that complement your counters and appliances while meeting Florida humidity
              demands. Explore the materials Bradenton and Sarasota homeowners request most.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">Ceramic &amp; Porcelain</h3>
              <p className="text-sm leading-relaxed text-slate-600">
                Durable and budget-friendly, ceramic and porcelain tile resist stains and make maintenance simple. Ideal for
                classic subway tile backsplash Sarasota remodels or streamlined slab-look panels.
              </p>
            </div>
            <div className="space-y-2 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">Natural Stone</h3>
              <p className="text-sm leading-relaxed text-slate-600">
                Marble, travertine, and quartzite deliver high-end texture with veining that pairs with luxury countertops. We
                seal every stone installation and finish exposed edges with custom bullnose or metal trims.
              </p>
            </div>
            <div className="space-y-2 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">Glass &amp; Mosaics</h3>
              <p className="text-sm leading-relaxed text-slate-600">
                Reflective glass, artisan mosaics, and blended materials add movement and color. Perfect for feature walls or
                picture-frame accents behind cooktops.
              </p>
            </div>
            <div className="space-y-2 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">Large-Format &amp; Specialty</h3>
              <p className="text-sm leading-relaxed text-slate-600">
                Oversized porcelain panels, metal inlays, or handmade zellige tile minimize grout lines and bring bespoke
                character to contemporary Gulf Coast kitchens.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section id="styles" className="bg-white py-16">
        <Container className="space-y-6">
          <div className="space-y-3 text-center">
            <h2 className="text-3xl font-semibold text-slate-900">Trending Styles on the Suncoast</h2>
            <p className="mx-auto max-w-2xl text-sm leading-relaxed text-slate-600">
              Whether you lean coastal, transitional, or modern, we translate inspiration photos into precise tile work that fits
              your layout and lighting.
            </p>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <li className="rounded-3xl border border-slate-200 bg-slate-50 p-5 text-center text-sm font-semibold text-slate-700">
              Subway tile — classic or elongated proportions
            </li>
            <li className="rounded-3xl border border-slate-200 bg-slate-50 p-5 text-center text-sm font-semibold text-slate-700">
              Herringbone &amp; chevron layouts that draw the eye up
            </li>
            <li className="rounded-3xl border border-slate-200 bg-slate-50 p-5 text-center text-sm font-semibold text-slate-700">
              Mosaic fields and mixed finishes for statement walls
            </li>
            <li className="rounded-3xl border border-slate-200 bg-slate-50 p-5 text-center text-sm font-semibold text-slate-700">
              Picture-frame accents highlighting ranges &amp; niches
            </li>
          </ul>
        </Container>
      </section>

      <section id="process" className="bg-slate-50 py-16">
        <Container className="grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-slate-900">Our Backsplash Installation Process</h2>
            <p className="text-base leading-relaxed text-slate-600">
              Every kitchen starts with on-site measurements, level checks, and substrate prep. We map tile courses to minimize
              slivers, confirm focal points, and detail edge profiles before the first cut. Premium mortars and high-performance
              grouts lock everything in place for everyday Florida living.
            </p>
            <p className="text-base leading-relaxed text-slate-600">
              Expect daily updates, dust control, and spotless cleanup when we wrap. Your kitchen is ready for cooking the moment
              the grout cures.
            </p>
          </div>
          <div className="space-y-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <ol className="space-y-4 text-sm leading-relaxed text-slate-600">
              <li>
                <span className="font-semibold text-slate-900">1. Layout &amp; templating:</span> Measure twice, mock up
                patterns, and align reveals to avoid awkward cuts.
              </li>
              <li>
                <span className="font-semibold text-slate-900">2. Edge detailing:</span> Select Schluter trims, bullnose, or
                mitered returns that suit your design and protect corners.
              </li>
              <li>
                <span className="font-semibold text-slate-900">3. Installation &amp; finish:</span> Set tile with premium
                mortars, grout with stain-resistant formulas, and polish the space for turn-key use.
              </li>
            </ol>
          </div>
        </Container>
      </section>

      <section id="cta-form" className="bg-slate-900 py-16 text-white">
        <Container className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)]">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-white">Ready to Plan Your Backsplash?</h2>
            <p className="text-base leading-relaxed text-slate-200">
              Share your inspiration photos, appliance specs, and timeline. We’ll recommend tile, trims, and grout systems that
              handle Bradenton humidity and daily cooking, then schedule a site visit for precise measurements.
            </p>
            <ul className="flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-slate-300">
              <li className="rounded-full border border-white/20 px-4 py-2">Free Estimates</li>
              <li className="rounded-full border border-white/20 px-4 py-2">Licensed &amp; Insured</li>
              <li className="rounded-full border border-white/20 px-4 py-2">3rd-Generation Craft</li>
              <li className="rounded-full border border-white/20 px-4 py-2">Bradenton • Sarasota</li>
            </ul>
          </div>
          <HomeCtaForm services={ctaServices} />
        </Container>
      </section>

      <section id="faq" className="bg-white py-16">
        <Container className="space-y-8">
          <div className="space-y-3 text-center">
            <h2 className="text-3xl font-semibold text-slate-900">Kitchen Backsplash FAQs</h2>
            <p className="mx-auto max-w-2xl text-sm leading-relaxed text-slate-600">
              Answers to the most common questions Bradenton and Sarasota homeowners ask before starting a backsplash project.
            </p>
          </div>
          <dl className="grid gap-6 md:grid-cols-2">
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
