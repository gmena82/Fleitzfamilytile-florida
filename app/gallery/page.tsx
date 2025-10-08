import Script from "next/script";
import type { Metadata } from "next";

import { QuoteCtaSection } from "@/components/sections/quote-cta";
import { Container } from "@/components/ui/container";
import { PlaceholderImage } from "@/components/ui/placeholder-image";
import { siteConfig } from "@/config/site";

const galleryItems = [
  { title: "Sunlit subway backsplash", city: "West Bradenton", category: "Kitchens" },
  { title: "Marble-look shower retreat", city: "Sarasota", category: "Bathrooms/Showers" },
  { title: "Chevron fireplace surround", city: "Lakewood Ranch", category: "Fireplaces" },
  { title: "Coastal lanai flooring", city: "Sarasota", category: "Exterior" },
  { title: "Herringbone mudroom floor", city: "Bradenton", category: "Floors" },
  { title: "Glass mosaic feature wall", city: "Lakewood Ranch", category: "Kitchens" },
  { title: "Matte black shower niche", city: "Parrish", category: "Bathrooms/Showers" },
  { title: "Porcelain plank great room", city: "Sarasota", category: "Floors" },
  { title: "Statement range splash", city: "Anna Maria Island", category: "Kitchens" },
  { title: "Spa-inspired tub deck", city: "Lakewood Ranch", category: "Bathrooms/Showers" },
  { title: "Outdoor kitchen backsplash", city: "West Bradenton", category: "Exterior" },
  { title: "Vertical stack fireplace", city: "Palmetto", category: "Fireplaces" },
  { title: "Lanai ledgerstone wall", city: "Sarasota", category: "Exterior" },
  { title: "Large-format foyer tile", city: "Bradenton", category: "Floors" },
  { title: "Custom medallion entry", city: "Lakewood Ranch", category: "Floors" },
  { title: "Satin brass niche trim", city: "Sarasota", category: "Bathrooms/Showers" },
  { title: "Backlit wine wall tile", city: "Lakewood Ranch", category: "Kitchens" },
  { title: "Pebble shower pan", city: "Bradenton", category: "Bathrooms/Showers" },
  { title: "Patterned laundry backsplash", city: "Ellenton", category: "Kitchens" },
  { title: "Outdoor porcelain steps", city: "Palmetto", category: "Exterior" },
  { title: "Hexagon powder bath floor", city: "Sarasota", category: "Bathrooms/Showers" },
  { title: "Floating hearth surround", city: "Lakewood Ranch", category: "Fireplaces" },
  { title: "Seamless great room tile", city: "West Bradenton", category: "Floors" },
  { title: "Mediterranean pool coping", city: "Sarasota", category: "Exterior" },
] as const;

const categories = ["Kitchens", "Bathrooms/Showers", "Floors", "Fireplaces", "Exterior"] as const;

const collectionJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Tile Installation Gallery | Bradenton, Sarasota & Lakewood Ranch",
  url: `${siteConfig.url}/gallery`,
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${siteConfig.url}/` },
    { "@type": "ListItem", position: 2, name: "Gallery", item: `${siteConfig.url}/gallery` },
  ],
};

export const metadata: Metadata = {
  title: "Tile Installation Gallery | Bradenton, Sarasota & Lakewood Ranch",
  description:
    "See real tile projects across Bradenton, Sarasota, and Lakewood Ranch—backsplashes, showers, floors, and fireplaces by Fleitz Family Tile.",
  alternates: {
    canonical: "https://www.fleitzfamilytile.com/gallery",
  },
};

export default function GalleryPage() {
  return (
    <>
      <Script id="gallery-collection" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }} />
      <Script id="gallery-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <section id="intro" className="bg-slate-900 py-20 text-white">
        <Container className="space-y-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-300">Tile Gallery Bradenton</p>
          <h1 className="text-3xl font-semibold sm:text-4xl">Our Work Around Bradenton &amp; Sarasota</h1>
          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-slate-200">
            Browse kitchens, baths, floors, fireplaces, and lanai upgrades installed with Florida-ready methods. Every project in our gallery is waterproofed, leveled, and detailed to handle Suncoast humidity and heat.
          </p>
        </Container>
      </section>

      <section id="grid" className="bg-white py-16">
        <Container className="space-y-10">
          <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
            <span>Optional Filters:</span>
            {categories.map((category) => (
              <span key={category} className="rounded-full border border-slate-200 px-4 py-2 text-slate-700">
                {category}
              </span>
            ))}
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {galleryItems.map((item) => (
              <article key={`${item.title}-${item.city}`} className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
                <PlaceholderImage className="h-48 w-full" />
                <div className="space-y-1 p-5">
                  <h2 className="text-base font-semibold text-slate-900">{item.title}</h2>
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-500">{item.city}</p>
                  <p className="text-xs text-slate-500">{item.category}</p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <QuoteCtaSection />
    </>
  );
}
