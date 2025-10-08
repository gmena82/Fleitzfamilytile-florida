import { PageHeader } from "@/components/sections/page-header";
import { Container } from "@/components/ui/container";
import { PlaceholderImage } from "@/components/ui/placeholder-image";

const servicePackages = [
  {
    title: "Kitchen tile & backsplashes",
    description:
      "Full demolition, surface preparation, and installation for custom backsplashes, islands, and flooring with precise trim details."
  },
  {
    title: "Bathroom & shower systems",
    description:
      "Waterproofed showers, soaking tubs, and vanities finished with mosaics, niches, benches, and heated flooring options."
  },
  {
    title: "Whole-home flooring",
    description:
      "Large-format porcelain, luxury plank, and natural stone layouts aligned to architectural sightlines and transitions."
  },
  {
    title: "Outdoor living & pools",
    description:
      "Lanais, patios, and pool decks built with slip-resistant tiles, coping, and waterline details engineered for Florida weather."
  },
  {
    title: "Commercial & builder partnerships",
    description:
      "Specification support, model merchandising, and phased installations for hospitality, multifamily, and retail environments."
  },
  {
    title: "Custom features & accents",
    description:
      "Fireplaces, feature walls, stair risers, and mosaics fabricated to size with miters, profiles, and edge treatments."
  }
];

const serviceSteps = [
  {
    title: "Consultation & measurement",
    description:
      "We visit your home or jobsite to capture measurements, discuss scope, and gather inspiration that informs product curation."
  },
  {
    title: "Material selection & proposal",
    description:
      "Our team assembles samples, creates mood boards, and delivers a detailed scope outlining labor, materials, and scheduling."
  },
  {
    title: "Project management & installation",
    description:
      "Licensed installers execute demolition, prep, tile setting, and finishing while coordinators provide updates from start to finish."
  }
];

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Comprehensive tile services tailored to your space."
        description="From concept to completion, Fleitz Family Tile delivers curated materials, precise craftsmanship, and proactive communication for every project."
      />

      <section className="py-16">
        <Container className="space-y-10">
          <div className="space-y-3 text-center">
            <h2 className="text-3xl font-semibold text-slate-900">What we install</h2>
            <p className="mx-auto max-w-2xl text-sm text-slate-600">
              Whether you are refreshing a single room or coordinating a multi-home development, our team manages demolition, prep, installation, and finishing with a detail-driven approach.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {servicePackages.map((service) => (
              <article key={service.title} className="flex flex-col gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <PlaceholderImage className="h-36 w-full" />
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">{service.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{service.description}</p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-slate-100 py-16">
        <Container className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)]">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-slate-900">Working with Fleitz Family Tile</h2>
            <p className="text-base leading-relaxed text-slate-600">
              Our coordinators handle scheduling, material logistics, and crew management so your project stays organized. You receive regular updates and walk every step with a dedicated point of contact.
            </p>
            <p className="text-base leading-relaxed text-slate-600">
              We collaborate with interior designers, builders, and homeowners, providing transparent pricing and craftsmanship that respects your timelines and budget.
            </p>
          </div>
          <div className="space-y-6">
            {serviceSteps.map((step, index) => (
              <article key={step.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">Phase {index + 1}</p>
                <h3 className="mt-2 text-lg font-semibold text-slate-900">{step.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{step.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
