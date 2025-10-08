import Script from "next/script";
import type { Metadata } from "next";

import { Container } from "@/components/ui/container";
import { PlaceholderImage } from "@/components/ui/placeholder-image";
import { HomeCtaForm } from "@/components/sections/home-cta-form";
import { siteConfig } from "@/config/site";

const differenceHighlights = [
  "Meticulous Prep",
  "Technical Precision",
  "Lasting Results"
];

const serviceList = [
  "Custom kitchen backsplashes",
  "Bathrooms and shower systems",
  "Whole-home and accent flooring",
  "Fireplace and feature walls",
  "Tile repairs and rework",
  "Demolition & surface preparation"
];

const faqs = [
  {
    question: "How much experience does your team bring to each project?",
    answer:
      "Owner AJ Fleitz is a third-generation tile installer who leads every project. Our crew combines decades of hands-on experience with ongoing training in modern installation systems."
  },
  {
    question: "What does your installation process look like?",
    answer:
      "We begin with on-site evaluations and detailed proposals. From demolition and substrate prep through layout, setting, and finishing, we communicate daily so you always know the next step."
  },
  {
    question: "Are you licensed and insured?",
    answer:
      "Yes. Fleitz Family Tile maintains Florida licensing and comprehensive insurance to protect your home, remodel, or new build."
  },
  {
    question: "How do you manage dust and cleanliness?",
    answer:
      "We contain dust with barriers and air filtration, protect adjacent surfaces, and tidy the job site at the end of every workday."
  }
];

const ctaServices = [
  {
    title: "Kitchen Backsplash Installation",
    description: "Protect walls and elevate your kitchen with custom tile layouts.",
    href: "/kitchen-backsplashes"
  },
  {
    title: "Bathroom & Shower Tile",
    description: "Waterproofed showers, tubs, and bathroom remodels for Florida homes.",
    href: "/bathroom-shower"
  },
  {
    title: "Floor Tile Installation",
    description: "Durable floor tile systems engineered for high-traffic living.",
    href: "/floor-tile-installation"
  },
  {
    title: "Fireplace Surrounds",
    description: "Heat-ready fireplace surrounds with precision detailing.",
    href: "/fireplaces"
  },
  {
    title: "Special Projects",
    description: "Mosaics, outdoor lanais, and unique tile concepts executed flawlessly.",
    href: "/special-projects"
  }
] as const;

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

      <section id="hero" className="bg-slate-900 py-20 text-white">
        <Container className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.8fr)]">
          <div className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-300">
              Family-owned. Florida Suncoast based. Three generations strong.
            </p>
            <h1 className="text-3xl font-semibold sm:text-4xl">
              About Fleitz Family Tile — Bradenton’s Third-Generation Tile Craftsmen
            </h1>
            <p className="text-base leading-relaxed text-slate-200">
              AJ Fleitz leads a family-built team of Bradenton tile contractors delivering clean prep, laser-straight lines, and finishes made to outlast Florida humidity.
            </p>
          </div>
          <PlaceholderImage className="h-full min-h-[320px] w-full rounded-3xl border border-slate-700 bg-slate-800" />
        </Container>
      </section>

      <section id="our-story" className="py-16">
        <Container className="grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-slate-900">Our Story</h2>
            <p className="text-base leading-relaxed text-slate-600">
              AJ Fleitz is a third-generation tile installer who learned the trade at home—mixing thin-set, cutting mosaics, and mastering prep before setting his first tile. Today as owner and lead craftsman of Fleitz Family Tile, he brings that heritage to Bradenton, Sarasota, and Lakewood Ranch.
            </p>
            <p className="text-base leading-relaxed text-slate-600">
              Every project is a handshake: a promise of precision, durability, and honest communication.
            </p>
          </div>
          <PlaceholderImage className="h-full min-h-[320px] w-full rounded-3xl" />
        </Container>
      </section>

      <section id="difference" className="bg-slate-100 py-16">
        <Container className="space-y-6">
          <h2 className="text-3xl font-semibold text-slate-900">The Fleitz Difference</h2>
          <ul className="flex flex-wrap gap-3 text-sm font-semibold uppercase tracking-[0.3em] text-slate-700">
            {differenceHighlights.map((highlight) => (
              <li
                key={highlight}
                className="rounded-full border border-slate-300 bg-white px-4 py-2 text-xs tracking-[0.35em] text-slate-900"
              >
                {highlight}
              </li>
            ))}
          </ul>
          <p className="max-w-3xl text-base leading-relaxed text-slate-600">
            Projects begin with detailed substrate inspections, waterproofing, and layout planning that protects your investment. Precise cuts, tidy grout lines, and clean site management ensure lasting results you can feel underfoot every day.
          </p>
        </Container>
      </section>

      <section id="what-we-do" className="py-16">
        <Container className="space-y-6">
          <h2 className="text-3xl font-semibold text-slate-900">What We Do</h2>
          <p className="text-base leading-relaxed text-slate-600">
            From kitchens and spas to lanais and fireplaces, Fleitz Family Tile delivers tailored installation for every surface in your home.
          </p>
          <ul className="grid gap-4 md:grid-cols-2">
            {serviceList.map((service) => (
              <li key={service} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <span className="text-sm font-semibold text-slate-900">{service}</span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section id="service-areas" className="bg-slate-900 py-16 text-white">
        <Container className="space-y-6">
          <h2 className="text-3xl font-semibold">Where We Work</h2>
          <p className="text-base leading-relaxed text-slate-200">
            Bradenton is home base for Fleitz Family Tile. We frequently partner with homeowners, designers, and builders in Sarasota and Lakewood Ranch, delivering the same meticulous standards across the Florida Suncoast.
          </p>
        </Container>
      </section>

      <section id="about-faq" className="bg-white py-16">
        <Container className="space-y-8">
          <div className="space-y-3 text-center">
            <h2 className="text-3xl font-semibold text-slate-900">FAQs</h2>
            <p className="mx-auto max-w-2xl text-sm leading-relaxed text-slate-600">
              Get to know how our Bradenton tile company plans, installs, and protects every project.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {faqs.map((faq) => (
              <div key={faq.question} className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
                <h3 className="text-base font-semibold text-slate-900">{faq.question}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section id="cta-form" className="bg-slate-900 py-16 text-white">
        <Container className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)]">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold">Ready to Work with a Third-Generation Tile Pro?</h2>
            <p className="text-sm leading-relaxed text-slate-200">
              Request a consultation with Fleitz Family Tile. Expect precise craftsmanship, clean job sites, and respectful communication.
            </p>
            <div className="flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-slate-300">
              <span>Family-Owned</span>
              <span>Licensed &amp; Insured</span>
              <span>Workmanship Warranty</span>
            </div>
          </div>
          <HomeCtaForm services={ctaServices} />
        </Container>
      </section>
    </>
  );
}
