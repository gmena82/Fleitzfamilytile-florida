import Script from "next/script";
import type { Metadata } from "next";
import Image from "next/image";

import { QuoteCtaSection } from "@/components/sections/quote-cta";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/config/site";

// Gallery images from public/images/showroom directory
const galleryImages = [
  {
    src: "/images/showroom/Kitchen-1.webp",
    alt: "Kitchen backsplash tile installation in Bradenton FL by Fleitz Family Tile",
    caption: "Custom Kitchen Backsplash"
  },
  {
    src: "/images/showroom/Kitchen-2.webp",
    alt: "Modern kitchen tile work in Sarasota FL by Fleitz Family Tile",
    caption: "Contemporary Kitchen Design"
  },
  {
    src: "/images/showroom/shower-tall-1.webp",
    alt: "Bathroom shower tile installation in Bradenton FL by Fleitz Family Tile",
    caption: "Custom Shower Installation"
  },
  {
    src: "/images/showroom/shower-tall-2.webp",
    alt: "Luxury shower tile design in Lakewood Ranch FL by Fleitz Family Tile",
    caption: "Spa-Style Shower"
  },
  {
    src: "/images/showroom/shower-tall-3.webp",
    alt: "Modern bathroom tile installation in Sarasota FL by Fleitz Family Tile",
    caption: "Modern Bathroom Remodel"
  },
  {
    src: "/images/showroom/Bathroom-floor-tall.webp",
    alt: "Bathroom floor tile installation in Bradenton FL by Fleitz Family Tile",
    caption: "Custom Bathroom Flooring"
  },
  {
    src: "/images/showroom/Fireplace-Tall-1.webp",
    alt: "Custom fireplace tile surround in Bradenton FL by Fleitz Family Tile",
    caption: "Statement Fireplace Surround"
  },
  {
    src: "/images/showroom/kitchen-tall-1.webp",
    alt: "Kitchen backsplash installation in Sarasota FL by Fleitz Family Tile",
    caption: "Elegant Kitchen Backsplash"
  },
  {
    src: "/images/showroom/Kitchen-5.webp",
    alt: "Premium kitchen tile work in Lakewood Ranch FL by Fleitz Family Tile",
    caption: "Premium Kitchen Design"
  },
  {
    src: "/images/showroom/shower-tall-4.webp",
    alt: "Bathroom shower remodel in Bradenton FL by Fleitz Family Tile",
    caption: "Walk-In Shower Design"
  },
  {
    src: "/images/showroom/shower-tall-5.webp",
    alt: "Porcelain shower tile installation in Sarasota FL by Fleitz Family Tile",
    caption: "Porcelain Shower Installation"
  },
  {
    src: "/images/showroom/kitchen-tall-2.webp",
    alt: "Backsplash tile design in Lakewood Ranch FL by Fleitz Family Tile",
    caption: "Designer Backsplash"
  }
] as const;

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
    <>
      <Script id="gallery-collection" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }} />
      <Script id="gallery-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Gallery Intro Section */}
      <section className="gallery-intro bg-white py-12">
        <Container className="mx-auto max-w-[860px] space-y-6 text-center">
          <h1 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
            Tile Installation Project Gallery
          </h1>
          <p className="text-base leading-relaxed text-slate-600">
            Browse our portfolio of completed tile installation projects across Bradenton, Sarasota, and Lakewood Ranch. From kitchen backsplashes and bathroom remodels to custom flooring and fireplace surrounds, see the craftsmanship and attention to detail that defines Fleitz Family Tile.
          </p>
          <p className="text-base leading-relaxed text-slate-600">
            Each project showcases our commitment to precision, clean installations, and finishes built to last in Florida's climate.
          </p>
        </Container>
      </section>

      {/* Gallery Grid Section */}
      <section className="gallery-section bg-slate-50 px-4 pb-20">
        <Container>
          <div className="gallery-grid grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {galleryImages.map((item, index) => (
              <figure
                key={index}
                className="gallery-item group cursor-pointer overflow-hidden rounded-lg shadow-md transition-transform hover:scale-105"
              >
                <div className="gallery-media relative overflow-hidden">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={600}
                    height={800}
                    className="h-auto w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading={index < 6 ? "eager" : "lazy"}
                  />
                  <div className="gallery-overlay absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="magnify-icon text-5xl font-extralight text-white">+</span>
                  </div>
                </div>
                <figcaption className="gallery-caption mt-2 text-center text-sm text-slate-600">
                  {item.caption}
                </figcaption>
              </figure>
            ))}
          </div>

          {/* Gallery CTA */}
          <div className="gallery-cta mt-8 text-center">
            <p className="mb-6 text-base text-slate-600">
              Ready to start your own tile installation project?
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-slate-900 px-8 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
            >
              Request a Quote
            </a>
          </div>
        </Container>
      </section>

      <QuoteCtaSection />
    </>
  );
}
