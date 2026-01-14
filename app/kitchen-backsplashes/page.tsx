import Script from "next/script";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { QuoteCtaSection } from "@/components/sections/quote-cta";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/config/site";

const faqItems = [
  {
    question: "How long does a backsplash installation typically take?",
    answer: "Most standard kitchen backsplash installations are completed within 1-2 days. This includes preparation, setting the tile, and grouting. We work efficiently to minimize disruption to your home."
  },
  {
    question: "What are the most popular materials for kitchen backsplashes?",
    answer: "Ceramic and porcelain tiles are classic, durable, and versatile choices. Natural stone like marble or travertine offers a luxurious look, while glass and mosaic tiles can create a unique, modern statement."
  },
  {
    question: "Can you help me choose a design that matches my kitchen?",
    answer: "Absolutely. With our extensive experience, we can provide recommendations on tile materials, colors, patterns, and layouts that will best complement your existing countertops, cabinets, and overall kitchen style."
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

      {/* Hero Section */}
      <section className="hero relative overflow-hidden" style={{ minHeight: "62vh" }}>
        <div className="hero-bg absolute inset-0">
          <Image
            src="/images/showroom/Kitchen-1.webp"
            alt="White ceramic subway tile backsplash installation in Bradenton, FL by Fleitz Family Tile"
            fill
            className="hero-image object-cover"
            priority
          />
          <div className="hero-overlay absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        </div>
        <Container className="relative z-10 flex min-h-[62vh] items-center justify-center">
          <div className="hero-content mx-auto max-w-3xl space-y-6 text-center text-white">
            <h1 className="text-4xl font-semibold sm:text-5xl">
              Expert Kitchen Backsplash Installation in Bradenton
            </h1>
            <p className="text-base leading-relaxed text-white/90">
              Fleitz Family Tile specializes in custom kitchen backsplash installations across Bradenton, Sarasota, Lakewood Ranch, and the greater Gulf Coast area. A well-planned backsplash ties together countertops, cabinetry, and flooring—delivering both protection and standout design.
            </p>
            <p className="text-base leading-relaxed text-white/90">
              We understand the demands of Florida homes, from ensuring robust waterproofing against humidity to selecting durable, stain-resistant materials that perform beautifully over time.
            </p>
            <div className="inline-cta">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-200"
              >
                Plan Your Kitchen Backsplash
              </Link>
            </div>
            <p className="text-sm leading-relaxed text-white/80">
              Let's create a kitchen backsplash that ties your space together and makes daily life easier to clean and enjoy.
            </p>
          </div>
        </Container>
      </section>

      {/* Main Content Section */}
      <section className="main-content bg-white py-20">
        <Container className="space-y-16">
          <div className="content-grid grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="content-image">
              <Image
                src="/images/showroom/Kitchen-2.webp"
                alt="Natural stone mosaic kitchen backsplash installation in Bradenton, FL by Fleitz Family Tile"
                width={800}
                height={600}
                className="h-auto w-full rounded-3xl object-cover shadow-xl"
              />
            </div>
            <div className="content-text space-y-6">
              <h2 className="text-3xl font-semibold text-slate-900">The Perfect Finish for Your Kitchen</h2>
              <p className="text-base leading-relaxed text-slate-600">
                A kitchen backsplash is more than just a protective surface; it's a design statement. It ties together your countertops, cabinets, and flooring to create a cohesive and beautiful space. At Fleitz Family Tile, we specialize in creating stunning backsplashes that are both functional and a reflection of your personal style.
              </p>
              <p className="text-base leading-relaxed text-slate-600">
                With generations of experience, our meticulous installation process ensures flawless grout lines, stain resistance, and a durable finish that will last for years. We handle everything from classic subway tile to intricate custom tile design mosaics, delivering craftsmanship that elevates the heart of your home.
              </p>
              <p className="text-base leading-relaxed text-slate-600">
                We proudly serve homeowners throughout the Suncoast, including Bradenton, Sarasota, Lakewood Ranch, and nearby communities, bringing our family's tradition of excellence to every project.
              </p>
            </div>
          </div>

          <section className="kb-materials space-y-6">
            <h2 className="text-3xl font-semibold text-slate-900">Popular Backsplash Materials</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900">Ceramic & Porcelain</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  Durable, budget-friendly, and easy to maintain—great for busy kitchens. Wide color and size options, including classic 3×6 subway tile.
                </p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900">Natural Stone (Marble, Travertine)</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  Premium look with unique variation. Requires sealing and thoughtful grout selection for stain resistance and long-term performance.
                </p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900">Glass & Mosaics</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  High visual impact and light play. Excellent for feature walls and accent bands; pairs well with under cabinet lighting.
                </p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900">Large-Format & Specialty</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  Fewer grout joints and a modern aesthetic. Demands precise layout and surface prep for flat, seamless results.
                </p>
              </div>
            </div>
          </section>

          <section className="kb-styles space-y-6">
            <h2 className="text-3xl font-semibold text-slate-900">Trending Backsplash Styles in Bradenton</h2>
            <p className="text-base leading-relaxed text-slate-600">From timeless to statement-making, we install:</p>
            <ul className="list-disc space-y-2 pl-6 text-base leading-relaxed text-slate-600">
              <li><strong>Subway Tile</strong> in classic or elongated formats</li>
              <li><strong>Herringbone</strong> and <strong>Chevron</strong> patterns</li>
              <li><strong>Custom mosaics</strong> and mixed-material blends</li>
              <li>Picture-frame accents and niche features</li>
            </ul>
          </section>

          <section className="kb-process space-y-6">
            <h2 className="text-3xl font-semibold text-slate-900">Our Kitchen Backsplash Installation Process</h2>
            <p className="text-base leading-relaxed text-slate-600">
              Backsplashes require precision. We plan layouts to avoid awkward cuts, protect countertops and cabinetry, and cut accurately around outlets and corners. We handle exposed edges with profiles (e.g., Schluter®) or bullnose finishes for a clean, professional look. We specify high-quality mortars and stain-resistant grout, then seal stone as needed.
            </p>
            <p className="text-base leading-relaxed text-slate-600">
              For kitchen remodeling projects, we coordinate with your schedule, other trades, and appliance timelines to keep everything on track.
            </p>
          </section>
        </Container>
      </section>

      <div className="inline-cta bg-slate-50 py-8 text-center">
        <Link
          href="/contact"
          className="inline-flex items-center justify-center rounded-full bg-slate-900 px-8 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
        >
          Request a Kitchen Backsplash Estimate
        </Link>
      </div>

      <section className="kb-testimonial bg-white py-16">
        <Container className="mx-auto max-w-3xl">
          <article className="testimonial-card rounded-3xl border border-slate-200 bg-slate-50 p-8 text-center shadow-sm">
            <p className="quote text-base italic leading-relaxed text-slate-700">
              "Fleitz Family Tile handled our complex mosaic backsplash perfectly. Best kitchen installers in Bradenton!"
            </p>
            <p className="author mt-4 text-sm font-semibold text-slate-900">— Jessica M., Bradenton, FL</p>
          </article>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="faq-section bg-slate-50 py-16">
        <Container className="mx-auto max-w-3xl space-y-8">
          <div className="section-header space-y-3 text-center">
            <h2 className="text-3xl font-semibold text-slate-900">Your Questions Answered</h2>
          </div>
          <div className="space-y-6">
            {faqItems.map((faq) => (
              <div key={faq.question} className="faq-item rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-base font-semibold text-slate-900">{faq.question}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <QuoteCtaSection />
    </>
  );
}
