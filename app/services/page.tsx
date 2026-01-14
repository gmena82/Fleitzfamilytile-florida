import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";

import { Container } from "@/components/ui/container";
import { HomeCtaForm } from "@/components/sections/home-cta-form";
import { siteConfig } from "@/config/site";

const SERVICE_CARDS = [
  {
    label: "Kitchen Backsplash",
    href: "/kitchen-backsplashes",
    image: "/images/showroom/Kitchen-1.webp",
    cta: "View Kitchen Backsplash Options",
    description:
      "A new backsplash can transform your kitchen. We install durable, easy-to-clean surfaces that protect your walls and elevate your home's design.",
  },
  {
    label: "Bathroom & Shower",
    href: "/bathroom-shower",
    image: "/images/showroom/shower-tall-3.webp",
    cta: "Explore Bathroom Tile Solutions",
    description:
      "From spa-like showers to elegant bathroom floors, we create tile installations that combine beauty and functionality for years of enjoyment.",
  },
  {
    label: "Floor Tile Installation",
    href: "/floor-tile-installation",
    image: "/images/showroom/BG-5-F.png",
    cta: "See Flooring Installation Services",
    description:
      "Meticulous floor tile installation for any room in your home. Expect a level, durable surface that stands up to daily life while enhancing value.",
  },
  {
    label: "Fireplaces",
    href: "/fireplaces",
    image: "/images/showroom/Fireplace-Tall-1.webp",
    cta: "See Custom Fireplace Tile Surrounds",
    description:
      "Turn your fireplace into a statement piece with custom tilework. We handle contemporary, traditional, and statement surrounds with ease.",
  },
  {
    label: "Outdoor Tile",
    href: "/outside-projects",
    image: "/images/showroom/BG-9-F.png",
    cta: "Explore Outdoor Tile Options",
    description:
      "Extend your living space outdoors with durable tile for patios, lanais, pool decks, and outdoor kitchens. Built to withstand Florida's climate.",
  },
  {
    label: "Special Projects",
    href: "/special-projects",
    image: "/images/showroom/Mirror-Backsplash.png",
    cta: "Discover Special Tile Projects",
    description:
      "From custom mosaics to outdoor patios, we bring creativity and precision to unique tile applications tailored to your vision.",
  },
];

const SERVICES_FAQS = [
  {
    question: "Can I book you specifically for a Bradenton home?",
    answer:
      "Yes—Bradenton is our home base. We'll confirm access, parking, and HOA rules if relevant during your estimate.",
  },
  {
    question: "What services do you provide beyond installation?",
    answer:
      "Backsplashes, showers, floors, fireplaces, specialty work—plus surface prep, waterproofing, and selective repairs.",
  },
  {
    question:
      "Which waterproofing systems do you specify for showers (e.g., Schluter®, Wedi®)?",
    answer:
      "We use Schluter® for most residential showers, Wedi® for complex niches or steam rooms, and other approved membranes based on substrate and budget. We'll recommend the best system during your estimate.",
  },
  {
    question: "Do you offer material guidance or source tile?",
    answer:
      "We can spec materials and coordinate with your preferred suppliers or designers. We're happy to recommend local showrooms in the Bradenton and Sarasota area.",
  },
  {
    question:
      "What's your current lead time, and how does scheduling work after the estimate?",
    answer:
      "Lead times vary by season and project scope, typically 2-4 weeks. After your estimate is approved, we lock in materials and schedule your start date with clear milestones.",
  },
  {
    question:
      "What Florida licensing and insurance coverage do you carry for tile installs?",
    answer:
      "We carry full general liability insurance and workers' compensation coverage. All work is performed by licensed, insured professionals to protect your home and our team.",
  },
];

const CTA_FEATURES = ["Free Estimates", "Licensed & Insured", "Quality Guarantee"];

const servicesJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Gulf Coast Tile Installation Services",
  description:
    "Professional tile installation for kitchens, bathrooms, floors, fireplaces, outdoor spaces, and specialty projects throughout Bradenton, Sarasota, and Lakewood Ranch.",
  provider: { "@id": `${siteConfig.url}/#org` },
  areaServed: siteConfig.serviceAreas.map((area) => ({
    "@type": "City",
    name: area,
  })),
  serviceType: "Tile Installation",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: SERVICES_FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export const metadata: Metadata = {
  title: "Tile Installation Services | Bradenton, Sarasota & Lakewood Ranch | Fleitz Family Tile",
  description:
    "Professional tile installation services for kitchens, bathrooms, floors, fireplaces, and outdoor spaces. Third-generation craftsmen serving Bradenton, Sarasota & the Gulf Coast.",
  alternates: {
    canonical: "https://www.fleitzfamilytile.com/services",
  },
};

export default function ServicesPage() {
  return (
    <>
      <Script
        id="services-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/showroom/BG-1-F.png"
            alt="Professional tile installation services in Bradenton and Sarasota, FL"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-slate-950/70" />
        </div>

        <div className="relative mx-auto flex min-h-[60vh] max-w-5xl flex-col justify-center gap-6 px-6 py-24 text-center text-white">
          <h1 className="text-4xl font-semibold sm:text-5xl">
            Expert Tile Installation Services on Florida&apos;s Gulf Coast
          </h1>
          <p className="text-lg text-white/80">
            Comprehensive tile installation for Bradenton, Sarasota, Lakewood Ranch, and the surrounding Gulf Coast communities. We pair meticulous preparation with precise execution for lasting results.
          </p>
          <p className="text-lg text-white/70">
            Our team understands Florida&apos;s climate demands—from robust waterproofing against humidity to selecting durable flooring options built for everyday living.
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="bg-white py-16">
        <Container className="space-y-6 text-center">
          <div className="space-y-3">
            <h2 className="text-3xl font-semibold text-sky-600">
              Custom Tile Installation Services
            </h2>
            <p className="text-lg font-medium text-slate-900">
              Serving Bradenton, Sarasota & the Gulf Coast
            </p>
          </div>
          <p className="mx-auto max-w-3xl text-base leading-7 text-slate-600">
            Fleitz Family Tile is your trusted partner for high-quality tile installation. As third-generation craftsmen, we transform homes with beautiful, durable tile work—from backsplashes and spa-ready showers to showpiece fireplaces and specialty projects. Every job receives meticulous prep, clean job sites, and flawless finishes built to last.
          </p>
        </Container>
      </section>

      {/* Standards & Materials Section */}
      <section className="bg-slate-50 py-16">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4 rounded-3xl border border-slate-200 bg-white p-8 text-left shadow-lg shadow-slate-900/5">
              <h2 className="text-2xl font-semibold text-slate-900">
                Our Installation Standards
              </h2>
              <p className="text-base leading-7 text-slate-600">
                We build for longevity by following industry best practices, including applicable{" "}
                <a
                  href="https://www.tcnatile.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-sky-600 underline underline-offset-4 hover:text-sky-700"
                >
                  TCNA guidelines
                </a>
                . We use high-quality mortars, membranes, and grouts, and prioritize critical steps like substrate preparation and waterproofing (
                <a
                  href="https://www.schluter.com/schluter-us/en_US/Membranes/Waterproofing-(KERDI)/c/kerdi_FK"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-sky-600 underline underline-offset-4 hover:text-sky-700"
                >
                  Schluter®
                </a>
                ,{" "}
                <a
                  href="https://www.wedi.de/en/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-sky-600 underline underline-offset-4 hover:text-sky-700"
                >
                  Wedi®
                </a>
                , and similar systems) to deliver a durable, beautiful finish.
              </p>
            </div>
            <div className="space-y-4 rounded-3xl border border-slate-200 bg-white p-8 text-left shadow-lg shadow-slate-900/5">
              <h2 className="text-2xl font-semibold text-slate-900">
                Materials We Work With
              </h2>
              <p className="text-base leading-7 text-slate-600">
                Ceramic, porcelain, natural stone, glass, and{" "}
                <a
                  href="https://www.tcnatile.com/faqs/54-gauged-porcelain-tile-panels-and-gauged-porcelain-tile.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-sky-600 underline underline-offset-4 hover:text-sky-700"
                >
                  large-format tile
                </a>
                —we help you choose the right material for each space, balancing aesthetics, performance, and long-term maintenance.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Service Detail Sections */}
      <section className="space-y-0">
        {SERVICE_CARDS.map((service, index) => (
          <div
            key={service.href}
            className={index % 2 === 1 ? "bg-slate-50" : "bg-white"}
          >
            <Container className="py-16">
              <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
                {index % 2 === 1 ? (
                  <>
                    <ServiceImage service={service} />
                    <ServiceContent service={service} />
                  </>
                ) : (
                  <>
                    <ServiceContent service={service} />
                    <ServiceImage service={service} />
                  </>
                )}
              </div>
            </Container>
          </div>
        ))}
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/showroom/BG-3-F.png"
            alt="Tile installation background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-slate-950/75" />
        </div>

        <Container className="relative py-24">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="space-y-6 text-white">
              <h2 className="text-3xl font-semibold">
                Ready to Transform Your Space?
              </h2>
              <p className="text-base leading-7 text-white/80">
                Get a free estimate for your tile installation project. Professional craftsmanship, competitive pricing, and exceptional service guaranteed.
              </p>
              <div className="space-y-3">
                {CTA_FEATURES.map((feature) => (
                  <div key={feature} className="group/item flex items-center gap-3 transition-colors hover:text-white">
                    <CheckCircle2 className="h-5 w-5 text-sky-400 transition-transform duration-300 group-hover/item:scale-110" />
                    <span className="text-sm font-semibold text-white/90 transition-colors duration-300 group-hover/item:text-white">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <HomeCtaForm />
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="bg-slate-50 py-20">
        <Container className="space-y-10">
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-slate-900">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {SERVICES_FAQS.map((faq) => (
              <article
                key={faq.question}
                className="rounded-2xl border border-white bg-white p-6 shadow-md shadow-slate-900/5"
              >
                <h3 className="text-lg font-semibold text-slate-900">
                  {faq.question}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {faq.answer}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <Script
        id="faq-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </>
  );
}

function ServiceContent({ service }: { service: (typeof SERVICE_CARDS)[number] }) {
  return (
    <div className="space-y-4">
      <h3 className="text-2xl font-semibold text-slate-900">{service.label}</h3>
      <p className="text-base leading-7 text-slate-600">{service.description}</p>
      <Link
        href={service.href}
        className="group/btn inline-flex items-center gap-2 rounded-full border border-sky-500 px-5 py-2 text-sm font-semibold text-sky-600 transition hover:bg-sky-50"
      >
        {service.cta}
        <svg className="size-4 transition-transform duration-300 group-hover/btn:translate-x-1" viewBox="0 0 20 20" aria-hidden>
          <path
            fill="currentColor"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 111.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
          />
        </svg>
      </Link>
    </div>
  );
}

function ServiceImage({ service }: { service: (typeof SERVICE_CARDS)[number] }) {
  return (
    <div className="relative aspect-square overflow-hidden rounded-3xl shadow-lg">
      <Image
        src={service.image}
        alt={`${service.label} tile installation in Bradenton and Sarasota, FL`}
        fill
        className="object-cover"
      />
    </div>
  );
}
