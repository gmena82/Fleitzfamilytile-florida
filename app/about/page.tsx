import Script from "next/script";
import type { Metadata } from "next";
import Image from "next/image";

import { Container } from "@/components/ui/container";
import { QuoteCtaSection } from "@/components/sections/quote-cta";
import { FaqSection } from "@/components/sections/faq";
import { siteConfig } from "@/config/site";

const differenceHighlights = [
  {
    title: "Meticulous Preparation",
    description: "A lasting installation starts beneath the surface. We ensure every substrate is sound, waterproof, and perfectly prepared."
  },
  {
    title: "Technical Precision",
    description: "We specialize in achieving laser-straight lines, tight and consistent grout joints, and truly flat surfaces."
  },
  {
    title: "Lasting Results",
    description: "We don't cut corners, ensuring your investment remains durable and impressive for years to come."
  }
];

const serviceList = [
  {
    title: "Bathroom tile installation",
    description: "From classic layouts to statement features and spa-like showers."
  },
  {
    title: "Kitchen backsplashes",
    description: "Durable, easy-to-clean surfaces that elevate everyday cooking spaces."
  },
  {
    title: "Tile repairs & rework",
    description: "Crack fixes, grout issues, and water damage remediation to restore beauty and function."
  },
  {
    title: "Demolition & surface prep",
    description: "Tidy removal and prep that protect your home and set the stage for a flawless install."
  }
];

const faqs = [
  {
    question: "Do you offer free estimates? How do I get started?",
    answer:
      "Yes—share your project details and photos, and we'll schedule a site visit in Bradenton or nearby. Reach us Monday–Friday, 9am–5pm."
  },
  {
    question: "What services do you specialize in?",
    answer:
      "We focus on custom tile installation (bathrooms, showers, backsplashes), tile repairs (cracked tiles, grout issues, water damage fixes), and demolition/surface prep with a clean, precise process."
  },
  {
    question: "Where are you located, and which areas do you serve?",
    answer:
      "We're based in Bradenton, Florida, serving homeowners and builders across the Suncoast—Sarasota, Lakewood Ranch, and nearby communities."
  },
  {
    question: "How experienced is your team?",
    answer:
      "Fleitz Family Tile is a third-generation tile company led by AJ Fleitz with over a decade of hands-on installation experience and a legacy passed down through generations."
  },
  {
    question: "How do you handle demolition, dust control, and cleanup?",
    answer:
      "Demolition is part of our service. We perform clean, precise demo and maintain a tidy jobsite so your home stays protected and ready for installation."
  }
];


export const metadata: Metadata = {
  title: "About Fleitz Family Tile | Third-Generation Bradenton Tile Contractors",
  description:
    "Learn about Fleitz Family Tile, a third-generation tile company led by AJ Fleitz. Serving Bradenton, Sarasota & Lakewood Ranch with precise, durable installations.",
  alternates: {
    canonical: "https://www.fleitzfamilytile.com/about"
  }
};

export default function AboutPage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      name: "About Fleitz Family Tile",
      url: `${siteConfig.url}/about`,
      publisher: { "@id": `${siteConfig.url}/#org` },
      mainEntityOfPage: `${siteConfig.url}/about`
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: `${siteConfig.url}/`
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "About",
          item: `${siteConfig.url}/about`
        }
      ]
    }
  ];

  return (
    <>
      <Script
        id="about-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section with Background Image */}
      <section className="hero relative overflow-hidden" style={{ minHeight: "62vh" }}>
        <div className="hero-bg absolute inset-0">
          <Image
            src="/images/About-Us.png"
            alt="About Us - Fleitz Family Tile Kitchen with Hexagonal Backsplash"
            fill
            className="hero-image object-cover"
            priority
          />
          <div className="hero-overlay absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        </div>
        <Container className="relative z-10 flex min-h-[62vh] items-center justify-center">
          <div className="hero-content mx-auto max-w-4xl space-y-6 text-center text-white">
            <h1 className="space-y-4">
              <span className="block text-4xl font-bold sm:text-6xl">About Fleitz Family Tile</span>
              <span className="block text-2xl font-medium sm:text-3xl text-white/90">
                Expert Tile Contractors in Bradenton, FL
              </span>
            </h1>
            <p className="text-lg leading-relaxed text-white/90">
              Family owned. Florida based. Three generations strong.
            </p>
          </div>
        </Container>
      </section>

      {/* Our Story Section */}
      <section className="about-content bg-white py-16">
        <Container className="space-y-16">
          <div className="about-story space-y-6 text-center">
            <h2 className="text-3xl font-semibold text-slate-900">Our Story: A Legacy of Craftsmanship on the Suncoast</h2>
            <p className="intro-text mx-auto max-w-3xl text-base leading-relaxed text-slate-600">
              The foundation of Fleitz Family Tile rests on three generations of specialized knowledge. What began as a dedicated family trade has evolved into a professional tile company trusted by discerning homeowners, interior designers, and custom builders who demand superior quality.
            </p>
          </div>

          <div className="about-chapter">
            <div className="story-grid grid gap-12 lg:grid-cols-2 lg:items-center">
              <div className="story-text space-y-6">
                <h2 className="text-3xl font-semibold text-slate-900">A New Chapter in the Sunshine State</h2>
                <p className="text-base leading-relaxed text-slate-600">
                  AJ Fleitz is a third-generation tile installer who grew up mixing thin-set and cutting mosaics alongside his family. Today as owner and lead craftsman of Fleitz Family Tile, he carries that legacy forward for homeowners in Bradenton, Sarasota, Lakewood Ranch, and nearby Gulf-Coast communities.
                </p>
                <p className="text-base leading-relaxed text-slate-600">
                  As proud residents of the Suncoast, we are excited to offer our expertise and services to Bradenton and Central Florida. This allows us to combine our traditional craftsmanship with the unique architectural styles and design trends of the Gulf Coast area.
                </p>
              </div>
              <div className="story-image">
                <Image
                  src="/images/showroom/AJ-About-Us.png"
                  alt="AJ Fleitz - Professional Tile Installer at Fleitz Family Tile"
                  width={600}
                  height={700}
                  className="brad-image h-auto w-full rounded-3xl object-cover shadow-xl"
                />
              </div>
            </div>
          </div>

          <div className="about-difference space-y-6">
            <h2 className="text-3xl font-semibold text-slate-900">The Fleitz Family Tile Difference</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {differenceHighlights.map((item) => (
                <div key={item.title} className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.description}</p>
                </div>
              ))}
            </div>
            <p className="text-base leading-relaxed text-slate-600">
              We look forward to serving our neighbors in Bradenton, Sarasota, Lakewood Ranch, and beyond, continuing our legacy of excellence, one tile at a time.
            </p>
          </div>

          {/* Secondary About Image */}
          <figure className="about-secondary-image">
            <Image
              src="/images/showroom/BG-3-F.png"
              alt="Tile installer working carefully on a detailed installation"
              width={1200}
              height={600}
              className="h-auto w-full rounded-3xl object-cover shadow-xl"
            />
          </figure>

          <div className="about-what-we-do space-y-6">
            <h2 className="text-3xl font-semibold text-slate-900">What We Do</h2>
            <p className="text-base leading-relaxed text-slate-600">
              We deliver custom tile installation with clean execution and lasting results. Core services include:
            </p>
            <div className="services-list grid gap-4 md:grid-cols-2">
              {serviceList.map((service) => (
                <div key={service.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="text-base font-semibold text-slate-900">{service.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{service.description}</p>
                </div>
              ))}
            </div>
            <p className="text-base leading-relaxed text-slate-600">
              From intricate mosaics to complex, large projects, we approach every job with the same uncompromising attention to detail—because great tile work is never an accident. It's the result of discipline, patience, and craft.
            </p>
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <FaqSection 
        items={faqs}
        description="Get answers to common tile installation questions from Bradenton homeowners before your project begins."
      />

      {/* CTA Section */}
      <QuoteCtaSection />
    </>
  );
}
