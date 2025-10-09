import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";
import { ArrowRight, CheckCircle2, Quote } from "lucide-react";

import { PlaceholderImage } from "@/components/ui/placeholder-image";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/config/site";
import { HomeCtaForm } from "@/components/sections/home-cta-form";

const heroBenefits = [
  "Clean prep, straight lines, and meticulous waterproofing.",
  "Flat, long-lasting finishes built for Florida humidity."
];

const services = [
  {
    title: "Kitchen Backsplash Installation",
    description: "Custom backsplash layouts that protect walls and add Bradenton character to your kitchen.",
    href: "/kitchen-backsplashes"
  },
  {
    title: "Bathroom & Shower Tile",
    description: "Waterproofed showers, tubs, and bathroom remodels tailored to coastal living.",
    href: "/bathroom-shower"
  },
  {
    title: "Floor Tile Installation",
    description: "Durable floor tile systems for main living areas, condos, and whole-home remodels.",
    href: "/floor-tile-installation"
  },
  {
    title: "Fireplace Surrounds",
    description: "Statement-making fireplace surrounds with heat-ready tile detailing.",
    href: "/fireplaces"
  },
  {
    title: "Special Projects",
    description: "Custom mosaics, outdoor lanais, and unique requests executed with precision.",
    href: "/special-projects"
  }
] as const;

const showcaseProjects = [
  "Spa Shower with Niches",
  "Coastal Kitchen Backsplash",
  "Wide-Plank Porcelain Flooring",
  "Modern Fireplace Surround",
  "Outdoor Lanai Refresh",
  "Statement Mosaic Accent"
];

const testimonials = [
  {
    quote:
      "The crew respected our home, protected every surface, and the new shower tile is flawless. Communication was clear from start to finish.",
    name: "Lydia M.",
    location: "Bradenton, FL"
  },
  {
    quote:
      "Our Lakewood Ranch kitchen backsplash transformed the whole space. Precise cuts, tidy grout lines, and they wrapped up on schedule.",
    name: "Kurt & Alana R.",
    location: "Lakewood Ranch, FL"
  },
  {
    quote:
      "From demolition to cleanup, Fleitz Family Tile handled our Sarasota condo bath remodel with professionalism. Highly recommend their craftsmanship.",
    name: "Tina S.",
    location: "Sarasota, FL"
  }
];

const homeFaqs = [
  {
    question: "Do you provide free estimates in Bradenton?",
    answer:
      "Yes—share your project details and photos, and we’ll schedule a site visit in Bradenton or nearby."
  },
  {
    question: "Are you licensed and insured in Florida?",
    answer: "Yes. We maintain appropriate licensing and insurance for residential tile work."
  },
  {
    question: "Do you handle demolition, prep, and cleanup?",
    answer:
      "Absolutely. We perform tidy demo, surface prep, and daily cleanup to protect your home."
  },
  {
    question: "What tile types do you install?",
    answer:
      "Porcelain, ceramic, natural stone, glass, and large-format panels—with guidance on grout, trims, and profiles."
  },
  {
    question: "Do you service Sarasota and Lakewood Ranch?",
    answer: "Yes—Bradenton first, with frequent projects in Sarasota and Lakewood Ranch."
  },
  {
    question: "How quickly can you start once we approve the estimate?",
    answer:
      "Most projects begin within 2–3 weeks. We lock in your dates after the proposal is signed and materials are confirmed."
  }
];

export const metadata: Metadata = {
  title: "Fleitz Family Tile | Bradenton Tile Installation & Bathroom Remodeling",
  description:
    "Bradenton’s trusted tile installer. Fleitz Family Tile delivers premium bathroom & shower tile, kitchen backsplashes, and floor tile installation. Serving Sarasota & Lakewood Ranch. Free estimates.",
  alternates: {
    canonical: "https://www.fleitzfamilytile.com/"
  },
  robots: {
    index: true,
    follow: true
  },
  openGraph: {
    type: "website",
    url: "https://www.fleitzfamilytile.com/",
    title: "Fleitz Family Tile | Bradenton Tile Installation",
    description:
      "Premium tile installation in Bradenton, Sarasota & Lakewood Ranch. Bathrooms, showers, floors, and backsplashes.",
    images: [
      {
        url: siteConfig.ogImage,
        alt: "Fleitz Family Tile"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Fleitz Family Tile | Bradenton Tile Installation",
    description: "Serving Bradenton & Sarasota with premium tile craftsmanship. Free estimates.",
    images: [siteConfig.ogImage]
  }
};

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: `${siteConfig.url}/`,
        name: siteConfig.name,
        publisher: { "@id": `${siteConfig.url}/#org` },
        inLanguage: "en-US",
        potentialAction: {
          "@type": "SearchAction",
          target: `${siteConfig.url}/?s={search_term_string}`,
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
        "@id": `${siteConfig.url}/#org`,
        name: siteConfig.name,
        image: siteConfig.ogImage,
        url: `${siteConfig.url}/`,
        telephone: siteConfig.contact.phone,
        email: siteConfig.contact.email,
        logo: siteConfig.ogImage,
        address: {
          "@type": "PostalAddress",
          streetAddress: siteConfig.headquarters.street,
          addressLocality: siteConfig.headquarters.city,
          addressRegion: siteConfig.headquarters.state,
          postalCode: siteConfig.headquarters.postalCode,
          addressCountry: "US"
        },
        areaServed: [
          { "@type": "City", name: "Bradenton" },
          { "@type": "City", name: "Sarasota" },
          { "@type": "Place", name: "Lakewood Ranch" }
        ],
        geo: {
          "@type": "GeoCoordinates",
          latitude: siteConfig.geo.latitude,
          longitude: siteConfig.geo.longitude
        },
        sameAs: Object.values(siteConfig.socialLinks),
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Tile Services",
          itemListElement: services.map((service) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: service.title
            }
          }))
        }
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: `${siteConfig.url}/`
          }
        ]
      }
    ]
  };

  return (
    <>
      <Script id="home-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section id="hero" className="overflow-hidden bg-slate-900 text-white">
        <Container className="grid gap-12 py-20 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)]">
          <div className="space-y-6">
            <h1 className="text-4xl font-semibold sm:text-5xl">
              Premium Tile Installation &amp; Remodeling on Florida’s Suncoast — in Bradenton
            </h1>
            <p className="text-base leading-relaxed text-slate-200">
              Fleitz Family Tile delivers premium tile installation and remodeling across the Suncoast—Bradenton first, with projects throughout Sarasota and Lakewood Ranch.
            </p>
            <div className="space-y-3 text-sm text-slate-200/80">
              {heroBenefits.map((benefit) => (
                <div key={benefit} className="inline-flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" aria-hidden />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/#cta-form"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-200"
              >
                Request a Quote
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <Link
                href="/gallery"
                className="inline-flex items-center gap-2 rounded-full border border-white/60 px-6 py-3 text-sm font-semibold text-white transition hover:border-white"
              >
                View Gallery
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
            <p className="text-sm leading-relaxed text-slate-200/90">
              From classic bathroom remodels and walk-in showers to whole-home tile flooring and statement kitchen backsplashes, Fleitz Family Tile blends three generations of craft with modern methods. We prep surfaces right, waterproof wet areas correctly, and set tile with tight grout joints and flat, long-lasting finishes—built for Bradenton’s coastal climate.
            </p>
          </div>
          <div className="relative mx-auto aspect-[16/10] w-full max-w-xl overflow-hidden rounded-3xl border border-white/20 bg-black shadow-2xl lg:ml-auto lg:mr-0">
            <iframe
              className="absolute inset-0 h-full w-full"
              src="https://www.youtube.com/embed/Hll582-mC_4?rel=0"
              title="Fleitz Family Tile Showroom Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </Container>
      </section>

      <section id="trust-badges" className="border-b border-slate-200 bg-white">
        <Container className="py-6">
          <p className="text-center text-sm font-semibold uppercase tracking-[0.3em] text-slate-600">
            Free Estimates • Licensed &amp; Insured • Workmanship Warranty
          </p>
        </Container>
      </section>

      <section id="services-grid" className="bg-slate-50 py-16">
        <Container className="space-y-10">
          <div className="space-y-3 text-center">
            <h2 className="text-3xl font-semibold text-slate-900">Our Tile Services in Bradenton</h2>
            <p className="mx-auto max-w-2xl text-sm leading-relaxed text-slate-600">
              Bradenton homeowners count on Fleitz Family Tile for precise installation, reliable scheduling, and lasting finishes across every room of the home.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:border-slate-900"
              >
                <PlaceholderImage className="h-44 w-full" />
                <div className="space-y-2 px-6 py-6">
                  <h3 className="text-lg font-semibold text-slate-900 group-hover:text-slate-700">{service.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-600">{service.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section id="about-intro" className="bg-white py-16">
        <Container className="grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-slate-900">About Fleitz Family Tile</h2>
            <div className="space-y-4 text-sm leading-relaxed text-slate-600">
              <p>
                AJ Fleitz is a third-generation tile installer who grew up mixing thin-set and cutting mosaics alongside his family. Today as owner and lead craftsman of Fleitz Family Tile, he carries that legacy forward for homeowners in Bradenton, Sarasota, Lakewood Ranch, and nearby Gulf-Coast communities.
              </p>
              <p>
                Every project is a handshake with the homeowner: a promise of precision, durability, and honest communication.
              </p>
            </div>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-900 hover:text-slate-900"
            >
              Meet the Team
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
          <PlaceholderImage className="h-full min-h-[320px] w-full" />
        </Container>
      </section>

      <section id="work-showcase" className="bg-slate-100 py-16">
        <Container className="space-y-8">
          <div className="space-y-3 text-center">
            <h2 className="text-3xl font-semibold text-slate-900">See Our Craftsmanship</h2>
            <p className="mx-auto max-w-2xl text-sm leading-relaxed text-slate-600">
              Explore a sampling of the Bradenton-area tile projects we&apos;ve recently completed. Visit the gallery for more kitchens, baths, and custom installations.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {showcaseProjects.map((project) => (
              <Link
                key={project}
                href="/gallery"
                className="group space-y-3 rounded-3xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:border-slate-900"
              >
                <PlaceholderImage className="h-40 w-full" />
                <p className="text-sm font-semibold text-slate-800 group-hover:text-slate-900">{project}</p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section id="geo-areas" className="bg-white py-16">
        <Container className="space-y-6">
          <h2 className="text-3xl font-semibold text-slate-900">Proudly Serving the Suncoast</h2>
          <p className="max-w-3xl text-sm leading-relaxed text-slate-600">
            Based in Bradenton, we serve homeowners in West Bradenton, Downtown Bradenton, Palma Sola, Bayshore Gardens, and Samoset—plus Lakewood Ranch, Sarasota, and nearby Gulf-Coast communities with the same attention to detail we’d use in our own homes.
          </p>
          <div className="flex flex-wrap gap-3 text-sm font-semibold text-slate-700">
            <Link href="/contact" className="rounded-full border border-slate-300 px-4 py-2 transition hover:border-slate-900 hover:text-slate-900">
              Schedule Your Estimate
            </Link>
            <Link href="/gallery" className="rounded-full border border-slate-300 px-4 py-2 transition hover:border-slate-900 hover:text-slate-900">
              View Recent Projects
            </Link>
          </div>
        </Container>
      </section>

      <section id="testimonials" className="bg-slate-50 py-16">
        <Container className="space-y-8">
          <div className="space-y-3 text-center">
            <h2 className="text-3xl font-semibold text-slate-900">What Homeowners Are Saying</h2>
            <p className="mx-auto max-w-2xl text-sm leading-relaxed text-slate-600">
              Hear from Bradenton, Lakewood Ranch, and Sarasota homeowners who trust Fleitz Family Tile with their remodels.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <figure
                key={testimonial.name}
                className="flex h-full flex-col gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <Quote className="h-6 w-6 text-slate-400" aria-hidden />
                <blockquote className="text-sm leading-relaxed text-slate-700">{testimonial.quote}</blockquote>
                <figcaption className="mt-auto text-sm font-semibold text-slate-900">
                  {testimonial.name}
                  <span className="block text-xs font-normal uppercase tracking-[0.3em] text-slate-500">
                    {testimonial.location}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </Container>
      </section>

      <section id="cta-form" className="bg-slate-900 py-16 text-white">
        <Container className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)]">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold">Ready to Transform Your Space?</h2>
            <p className="text-sm leading-relaxed text-slate-200">
              Get a free estimate. Professional craftsmanship and clean, durable finishes.
            </p>
            <div className="flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-slate-300">
              <span>Free Estimates</span>
              <span>Licensed &amp; Insured</span>
              <span>Workmanship Warranty</span>
            </div>
          </div>
          <HomeCtaForm />
        </Container>
      </section>

      <section id="home-faq" className="bg-white py-16">
        <Container className="space-y-8">
          <div className="space-y-3 text-center">
            <h2 className="text-3xl font-semibold text-slate-900">Tile Installation FAQs (Bradenton)</h2>
            <p className="mx-auto max-w-2xl text-sm leading-relaxed text-slate-600">
              Get answers to common tile installation questions from Bradenton homeowners before your project begins.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {homeFaqs.map((faq) => (
              <div key={faq.question} className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
                <h3 className="text-base font-semibold text-slate-900">{faq.question}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
