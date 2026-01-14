import Script from "next/script";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { siteConfig } from "@/config/site";
import { QuoteCtaSection } from "@/components/sections/quote-cta";
import { GalleryGrid } from "./GalleryGrid";

const GALLERY_FAQS = [
  {
    question: "Do you have project photos specifically from Bradenton and across the Gulf Coast that I can browse by room type?",
    answer:
      "Yes—many of our gallery photos are from Bradenton, Sarasota, and Lakewood Ranch. Contact us if you'd like to see more examples filtered by room type (kitchen, bathroom, fireplace, etc.).",
  },
  {
    question: "Can you recreate a look I saw here?",
    answer:
      "Yes—share the photo; we'll spec tile, grout, trims, and layout to match.",
  },
  {
    question: "How do I get pricing for a style I like?",
    answer:
      "Send a photo with rough dimensions; we'll give a ballpark before a formal estimate.",
  },
  {
    question: "Do you photograph completed projects?",
    answer:
      "With permission—photos help future clients visualize results and set expectations.",
  },
  {
    question: "Can I visit your showroom or see samples?",
    answer:
      "We work on-site and can bring samples to your home during the estimate. Contact us to schedule.",
  },
  {
    question: "What are the typical milestones for projects like those in the gallery (demo → prep → tile → grout), and how long does each stage run?",
    answer:
      "Demo typically takes 1 day, prep and waterproofing 1-2 days, tile setting 1-3 days (depending on size), then grout and final cleanup. Cure times between stages add 24-48 hours. We outline the full timeline in your estimate.",
  },
];

const GALLERY_ITEMS = [
  {
    src: "/images/showroom/Kitchen-1.webp",
    alt: "Kitchen backsplash tile installation in Bradenton FL by Fleitz Family Tile",
    caption: "Custom kitchen backsplash — Bradenton, FL.",
  },
  {
    src: "/images/showroom/Kitchen-2.webp",
    alt: "Modern kitchen tile work in Sarasota FL by Fleitz Family Tile",
  },
  {
    src: "/images/showroom/shower-tall-1.webp",
    alt: "Bathroom shower tile installation in Bradenton FL by Fleitz Family Tile",
    caption: "Spa-style shower installation — Bradenton, FL.",
  },
  {
    src: "/images/showroom/shower-tall-2.webp",
    alt: "Luxury shower tile design in Lakewood Ranch FL by Fleitz Family Tile",
  },
  {
    src: "/images/showroom/shower-tall-3.webp",
    alt: "Modern bathroom tile installation in Sarasota FL by Fleitz Family Tile",
  },
  {
    src: "/images/showroom/Bathroom-floor-tall.webp",
    alt: "Bathroom floor tile installation in Bradenton FL by Fleitz Family Tile",
    caption: "Custom bathroom flooring — Bradenton, FL.",
  },
  {
    src: "/images/showroom/Fireplace-Tall-1.webp",
    alt: "Custom fireplace tile surround in Bradenton FL by Fleitz Family Tile",
    caption: "Statement fireplace surround — Lakewood Ranch, FL.",
  },
  {
    src: "/images/showroom/kitchen-tall-1.webp",
    alt: "Kitchen backsplash installation in Sarasota FL by Fleitz Family Tile",
  },
  {
    src: "/images/showroom/Kitchen-5.webp",
    alt: "Premium kitchen tile work in Lakewood Ranch FL by Fleitz Family Tile",
  },
  {
    src: "/images/showroom/shower-tall-4.webp",
    alt: "Bathroom shower remodel in Bradenton FL by Fleitz Family Tile",
  },
  {
    src: "/images/showroom/shower-tall-5.webp",
    alt: "Porcelain shower tile installation in Sarasota FL by Fleitz Family Tile",
  },
  {
    src: "/images/showroom/kitchen-tall-2.webp",
    alt: "Backsplash tile design in Lakewood Ranch FL by Fleitz Family Tile",
  },
  {
    src: "/images/showroom/Mirror-Backsplash.png",
    alt: "Mirror backsplash tile installation in Bradenton FL by Fleitz Family Tile",
  },
  {
    src: "/images/showroom/Pebble-Tile.png",
    alt: "Pebble tile accent installation in Sarasota FL by Fleitz Family Tile",
    caption: "Custom pebble tile accent — Sarasota, FL.",
  },
  {
    src: "/images/showroom/BG-9-F.png",
    alt: "Outdoor patio tile installation in Bradenton FL by Fleitz Family Tile",
  },
];

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

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: GALLERY_FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export const metadata: Metadata = {
  title: "Tile Installation Project Gallery: Kitchens, Baths & Floors | Bradenton, FL",
  description:
    "Browse Fleitz Family Tile's gallery of completed projects across Bradenton, Sarasota, and Lakewood Ranch. Find inspiration for your kitchen backsplash, bathroom remodel, or custom flooring installation.",
  alternates: {
    canonical: "https://www.fleitzfamilytile.com/gallery",
  },
  openGraph: {
    type: "website",
    url: "https://www.fleitzfamilytile.com/gallery",
    title: "Tile Installation Gallery | Bradenton FL",
    description: "Browse our portfolio of completed tile projects in Bradenton, Sarasota & Lakewood Ranch.",
    images: [{ url: siteConfig.ogImage, alt: "Fleitz Family Tile Gallery" }]
  }
};

export default function GalleryPage() {
  return (
    <div className="space-y-24 pb-24">
      <Script id="gallery-collection" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }} />
      <Script id="gallery-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <Script id="gallery-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/showroom/BG-1-F.png"
            alt="Gallery of beautiful tile installation projects by Fleitz Family Tile in Bradenton, Sarasota, and Lakewood Ranch"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-slate-950/70" />
        </div>

        <div className="relative mx-auto flex min-h-[55vh] max-w-4xl flex-col items-center justify-center gap-4 px-6 py-24 text-center text-white">
          <h1 className="text-4xl font-semibold sm:text-5xl">Our Work: Gulf Coast Tile Installation Showcase</h1>
          <p className="text-lg text-white/80">See the quality and craftsmanship in every tile we lay.</p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="mx-auto max-w-4xl space-y-6 px-6 text-center">
        <p className="text-base leading-7 text-slate-600">
          Welcome to the Fleitz Family Tile project gallery. Below you'll find a selection of recent installations completed across Bradenton, Sarasota, Lakewood Ranch, and the greater Gulf Coast area. Explore kitchen backsplashes, bathroom remodels, large-format flooring, and custom fireplace surrounds—all crafted with the same precision we bring to every job.
        </p>
        <p className="text-base leading-7 text-slate-600">
          Every project is built for longevity. We prioritize clean layouts, tight grout lines, flat surfaces, and proper waterproofing to perform in Florida's climate. When something catches your eye, let's talk about bringing that same level of quality to your home.
        </p>
        <div className="flex justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-slate-700"
          >
            See something you love? Request a Quote
          </Link>
        </div>
      </section>

      {/* Gallery Grid */}
      <GalleryGrid items={GALLERY_ITEMS} />

      {/* CTA Form Section */}
      <QuoteCtaSection />

      {/* FAQ Section */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-6xl space-y-10 px-6">
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-slate-900">Frequently Asked Questions</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {GALLERY_FAQS.map((faq) => (
              <article key={faq.question} className="rounded-2xl border border-white bg-white p-6 shadow-md shadow-slate-900/5">
                <h3 className="text-lg font-semibold text-slate-900">{faq.question}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
