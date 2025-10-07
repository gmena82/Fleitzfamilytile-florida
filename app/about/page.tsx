import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/sections/page-header";

const milestones = [
  {
    year: "1994",
    title: "Family beginnings",
    description: "Fleitz Family Tile opened its first Florida showroom with a focus on craftsmanship and personalized service."
  },
  {
    year: "2005",
    title: "Installation teams expand",
    description: "We added licensed crews and project managers to deliver turnkey tile installations across the region."
  },
  {
    year: "2016",
    title: "Design studio upgrade",
    description: "The showroom evolved into an appointment-driven design center with curated vignettes and private sampling rooms."
  },
  {
    year: "Today",
    title: "Trusted by homeowners & builders",
    description: "Our family-led team continues to support renovations, new construction, and commercial environments throughout Florida."
  }
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Family-owned tile expertise grounded in craftsmanship and service."
        description="For decades, Fleitz Family Tile has paired curated surfaces with skilled installers to help Floridians elevate their homes and businesses."
      />
      <section className="py-16">
        <Container className="grid gap-12 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1fr)]">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-slate-900">Our philosophy</h2>
            <p className="text-sm leading-relaxed text-slate-600">
              We believe tile should be both beautiful and enduring. That means guiding clients through selections that balance design vision with daily performance, then installing every surface with uncompromising detail.
            </p>
            <p className="text-sm leading-relaxed text-slate-600">
              As a family-run company, relationships matter. We invest in long-term partnerships with homeowners, designers, and builders by staying transparent, responsive, and accountable at every stage.
            </p>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">Milestones</h2>
            <ul className="space-y-4">
              {milestones.map((milestone) => (
                <li key={milestone.year} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <span className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">{milestone.year}</span>
                  <h3 className="mt-2 text-lg font-semibold text-slate-900">{milestone.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{milestone.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>
    </>
  );
}
