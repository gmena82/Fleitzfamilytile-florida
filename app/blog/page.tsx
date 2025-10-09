import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";

import { QuoteCtaSection } from "@/components/sections/quote-cta";
import { Container } from "@/components/ui/container";
import { PlaceholderImage } from "@/components/ui/placeholder-image";
import { siteConfig } from "@/config/site";

const posts = [
  {
    title: "Florida Flooring 101: Why Tile Wins in Bradenton Homes",
    date: "October 14, 2025",
    excerpt:
      "Humidity, sand, and sunshine are no match for porcelain floors—discover why Bradenton homeowners rely on tile to stay cool, durable, and easy to clean.",
    slug: "why-tile-flooring-bradenton-fl",
    image: {
      type: "placeholder" as const,
      label: "Image Placeholder",
    },
  },
  {
    title: "Fleitz Family Tile Has a Website!",
    date: "October 9, 2025",
    excerpt:
      "Explore our brand-new digital home, see generations of tile craftsmanship, and discover how to collaborate with our Bradenton team online.",
    slug: "fleitz-family-tile-has-a-website",
    image: {
      type: "image" as const,
      src: "/images/Blog/Bathroom-AJ-Long.png",
      alt: "Custom tile shower featuring marble-look walls installed by Fleitz Family Tile",
    },
  },
] as const;

const blogJsonLd = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "Fleitz Family Tile Blog",
  url: `${siteConfig.url}/blog`,
  publisher: { "@id": `${siteConfig.url}/#org` },
};

export const metadata: Metadata = {
  title: "Fleitz Family Tile Blog | Tile Tips, Trends & How-Tos (Bradenton)",
  description:
    "Advice from third-generation tile pros in Bradenton. Waterproofing know-how, backsplash ideas, and floor tile care for Sarasota & Lakewood Ranch.",
  alternates: {
    canonical: "https://www.fleitzfamilytile.com/blog",
  },
};

export default function BlogPage() {
  return (
    <>
      <Script id="blog-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }} />

      <section id="intro" className="bg-slate-900 py-20 text-white">
        <Container className="space-y-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-300">Tile Tips Bradenton</p>
          <h1 className="text-3xl font-semibold sm:text-4xl">Tile Tips &amp; Suncoast Inspiration</h1>
          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-slate-200">
            From our workshop to your home—discover tile trends, waterproofing know-how, and Florida-ready installation advice straight from Fleitz Family Tile.
          </p>
        </Container>
      </section>

      <section id="posts-list" className="bg-white py-16">
        <Container className="space-y-8">
          <div className="space-y-3 text-center">
            <h2 className="text-3xl font-semibold text-slate-900">Latest posts</h2>
            <p className="mx-auto max-w-2xl text-sm leading-relaxed text-slate-600">
              Fresh insights to help you plan bathroom remodels, kitchen backsplashes, floor upgrades, and outdoor tile projects across Bradenton and Sarasota.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.title}
                className="flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
              >
                <div className="relative aspect-[4/3] w-full">
                  {post.image.type === "placeholder" ? (
                    <div className="absolute inset-0">
                      <PlaceholderImage
                        label={post.image.label}
                        className="h-full w-full rounded-none border-0"
                      />
                    </div>
                  ) : (
                    <Image
                      src={post.image.src}
                      alt={post.image.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover"
                      priority
                    />
                  )}
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-500">{post.date}</p>
                  <h3 className="mt-3 text-xl font-semibold text-slate-900">{post.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{post.excerpt}</p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="mt-4 inline-flex text-sm font-semibold text-slate-900 underline-offset-4 hover:underline"
                  >
                    Read More
                  </Link>
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
