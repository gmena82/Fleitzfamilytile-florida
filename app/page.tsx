import Link from "next/link";
import { ArrowRight, CheckCircle2, Mail, MapPin, Phone } from "lucide-react";

import { PlaceholderImage } from "@/components/ui/placeholder-image";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/config/site";

const serviceHighlights = [
  {
    title: "Custom tile design studio",
    description:
      "Work one-on-one with our designers to choose surfaces for kitchens, bathrooms, flooring, pools, and outdoor living areas."
  },
  {
    title: "Licensed installation crews",
    description:
      "Experienced craftsmen handle demolition, surface prep, waterproofing, and precise installation for lasting performance."
  },
  {
    title: "Project coordination",
    description:
      "From material ordering to punch-list walkthroughs, our team keeps your remodel or new build on schedule and on budget."
  }
];

const featuredServices = [
  {
    title: "Kitchen & bath remodels",
    description: "Backsplashes, showers, tubs, and floors finished with resilient grout systems and detailed trim work."
  },
  {
    title: "Whole-home flooring",
    description: "Large-format porcelain, natural stone, and luxury plank layouts tailored to open-concept living."
  },
  {
    title: "Outdoor & pool decks",
    description: "Slip-resistant selections for lanais, patios, summer kitchens, and pool waterlines built for the Florida climate."
  },
  {
    title: "Commercial environments",
    description: "Lobby, restaurant, and wellness spaces supported with documentation, logistics, and phased installation plans."
  }
];

const galleryPreview = [
  "Spa-inspired primary bath",
  "Statement kitchen backsplash",
  "Coastal outdoor retreat",
  "Custom mosaic fireplace",
  "Modern lobby renovation",
  "Luxury condo flooring"
];

const processSteps = [
  {
    title: "Showroom consultation",
    description:
      "Discuss your vision, review inspiration photos, and explore curated palettes during a guided visit or virtual appointment."
  },
  {
    title: "Material curation",
    description:
      "We source samples, confirm availability, and provide detailed proposals with timelines and investment options."
  },
  {
    title: "Installation & detailing",
    description:
      "Licensed tile setters prepare surfaces, install with precision, and finish with sealers and care instructions."
  }
];

const testimonials = [
  {
    quote:
      "Fleitz Family Tile handled our entire remodel—from design choices to installation. The team was punctual, courteous, and the tile work is flawless.",
    name: "Megan & Aaron P.",
    location: "Bradenton, FL"
  },
  {
    quote:
      "As a builder, communication matters. Their crews stayed on schedule and delivered model homes that wowed our buyers.",
    name: "Gulfside Homes",
    location: "Sarasota, FL"
  }
];

export default function HomePage() {
  return (
    <>
      <section className="border-b border-slate-200 bg-gradient-to-b from-white to-slate-100/60 py-16">
        <Container className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)]">
          <div className="space-y-6">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">Tile & stone experts</span>
            <h1 className="text-4xl font-semibold text-slate-900 sm:text-5xl">
              Design-forward tile and stone crafted for Florida living.
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-slate-600">
              Fleitz Family Tile pairs a Bradenton showroom with licensed installers to deliver refined surfaces for homes,
              remodelers, and commercial partners across the Gulf Coast.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
              >
                Schedule a consultation
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-900 hover:text-slate-900"
              >
                Explore services
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
            <div className="grid gap-4 text-sm text-slate-600 sm:grid-cols-3">
              <div className="rounded-3xl border border-slate-200 bg-white p-4">
                <p className="font-semibold text-slate-900">Serving the Gulf Coast</p>
                <p>Bradenton · Sarasota · Lakewood Ranch · Anna Maria Island</p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-white p-4">
                <p className="font-semibold text-slate-900">Family owned & operated</p>
                <p>Decades of craftsmanship and concierge-level service.</p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-white p-4">
                <p className="font-semibold text-slate-900">Licensed & insured</p>
                <p>Professional crews equipped for remodels and new builds.</p>
              </div>
            </div>
          </div>
          <PlaceholderImage className="h-full min-h-[320px] w-full" />
        </Container>
      </section>

      <section className="py-16">
        <Container className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)]">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-slate-900">Showroom guidance. Field precision.</h2>
            <p className="text-base leading-relaxed text-slate-600">
              Every project begins with listening. Whether you\'re refreshing a bathroom, planning a custom home, or managing a
              commercial build, our consultants curate surfaces that balance aesthetic goals with daily durability. From there,
              licensed installers execute every detail—waterproofing, layouts, trims, and finishes—for results that stand up to
              Florida\'s climate.
            </p>
            <div className="space-y-4">
              {serviceHighlights.map((highlight) => (
                <div key={highlight.title} className="flex gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <CheckCircle2 className="mt-1 h-6 w-6 text-slate-900" aria-hidden />
                  <div>
                    <p className="text-base font-semibold text-slate-900">{highlight.title}</p>
                    <p className="mt-1 text-sm text-slate-600">{highlight.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <PlaceholderImage className="h-full min-h-[420px] w-full" />
        </Container>
      </section>

      <section className="bg-slate-100 py-16">
        <Container>
          <div className="space-y-10">
            <div className="space-y-3 text-center">
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">Services</span>
              <h2 className="text-3xl font-semibold text-slate-900">Tile solutions for every room.</h2>
              <p className="mx-auto max-w-2xl text-sm text-slate-600">
                From demolition to final sealant, our crews manage kitchens, baths, flooring, and specialty spaces with the same
                care we bring to our own family homes.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {featuredServices.map((service) => (
                <article key={service.title} className="flex flex-col gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <PlaceholderImage className="h-40 w-full" />
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">{service.title}</h3>
                    <p className="mt-2 text-sm text-slate-600">{service.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container className="space-y-10">
          <div className="space-y-3 text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">Portfolio preview</span>
            <h2 className="text-3xl font-semibold text-slate-900">Imagine the possibilities.</h2>
            <p className="mx-auto max-w-2xl text-sm text-slate-600">
              Explore a sampling of the installations and design pairings clients love. Visit the gallery to see more transformations.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {galleryPreview.map((item) => (
              <div key={item} className="space-y-3 rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
                <PlaceholderImage className="h-40 w-full" />
                <p className="text-sm font-semibold text-slate-900">{item}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-900 hover:text-slate-900"
            >
              View full gallery
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </Container>
      </section>

      <section className="bg-slate-900 py-16 text-slate-100">
        <Container className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)]">
          <div className="space-y-6">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-300">Our process</span>
            <h2 className="text-3xl font-semibold text-white">Guided from idea to installation.</h2>
            <p className="text-sm text-slate-300">
              Expect proactive updates, organized project management, and meticulous workmanship at every phase of the journey.
            </p>
          </div>
          <div className="space-y-6">
            {processSteps.map((step, index) => (
              <div key={step.title} className="rounded-3xl border border-slate-700 bg-slate-800/60 p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">Step {index + 1}</p>
                <h3 className="mt-2 text-lg font-semibold text-white">{step.title}</h3>
                <p className="mt-2 text-sm text-slate-300">{step.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container className="space-y-10">
          <div className="space-y-3 text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">Testimonials</span>
            <h2 className="text-3xl font-semibold text-slate-900">Kind words from our clients.</h2>
            <p className="mx-auto max-w-2xl text-sm text-slate-600">
              See why homeowners, designers, and builders rely on Fleitz Family Tile for detail-driven tile and stone installations.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {testimonials.map((testimonial) => (
              <blockquote key={testimonial.quote} className="h-full rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
                <p className="text-base italic text-slate-700">“{testimonial.quote}”</p>
                <footer className="mt-6 text-sm font-semibold text-slate-900">
                  {testimonial.name}
                  <span className="block text-xs font-normal uppercase tracking-[0.3em] text-slate-500">
                    {testimonial.location}
                  </span>
                </footer>
              </blockquote>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-slate-100 py-16">
        <Container className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)]">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-slate-900">Visit our Bradenton showroom.</h2>
            <p className="text-base text-slate-600">
              Share your project goals, browse materials, and receive a detailed plan from our concierge team. We respond to inquiries within one business day.
            </p>
            <div className="space-y-3 text-sm text-slate-600">
              <p className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5" aria-hidden />
                <span>
                  {siteConfig.locations[0]?.address}
                  <br />
                  {siteConfig.locations[0]?.city}
                </span>
              </p>
              <p className="flex items-center gap-3">
                <Phone className="h-5 w-5" aria-hidden />
                <a href={`tel:${siteConfig.contact.phone.replace(/[^\d+]/g, "")}`} className="font-semibold text-slate-900 hover:underline">
                  {siteConfig.contact.phone}
                </a>
              </p>
              <p className="flex items-center gap-3">
                <Mail className="h-5 w-5" aria-hidden />
                <a href={`mailto:${siteConfig.contact.email}`} className="font-semibold text-slate-900 hover:underline">
                  {siteConfig.contact.email}
                </a>
              </p>
            </div>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">Request a consultation</h3>
            <p className="mt-2 text-sm text-slate-600">
              Tell us about timelines, inspirations, and the spaces you\'re upgrading. We\'ll schedule a visit or virtual walk-through.
            </p>
            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
              >
                Start the conversation
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
