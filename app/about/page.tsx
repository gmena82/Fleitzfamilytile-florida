import { Container } from "@/components/ui/container";
import { PlaceholderImage } from "@/components/ui/placeholder-image";
import { PageHeader } from "@/components/sections/page-header";

const values = [
  {
    title: "Family-led service",
    description:
      "From your first consultation to final walkthrough, you work directly with a family-owned team that values clear communication and accountability."
  },
  {
    title: "Craftsmanship without compromise",
    description:
      "Licensed installers follow detailed prep standards, waterproofing methods, and finishing techniques refined over decades."
  },
  {
    title: "Design-forward guidance",
    description:
      "Our showroom consultants curate palettes that balance trend-forward aesthetics with timeless appeal and everyday durability."
  }
];

const credentials = [
  "Licensed and insured tile contractors",
  "Schluter®-trained waterproofing installers",
  "Certified to handle large-format porcelain and natural stone",
  "Trusted trade partner for builders across the Gulf Coast"
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="A Bradenton family dedicated to tile and stone excellence."
        description="Fleitz Family Tile combines a neighborhood showroom with meticulous installation teams, helping homeowners, designers, and builders create inviting spaces throughout Florida."
      />

      <section className="py-16">
        <Container className="grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-slate-900">Our story</h2>
            <p className="text-base leading-relaxed text-slate-600">
              What began as a small installation crew has grown into a full-service showroom and project management team. The Fleitz family built the business on trust—showing up when promised, finishing details with care, and standing behind every installation long after the grout cures.
            </p>
            <p className="text-base leading-relaxed text-slate-600">
              Today, we guide clients through material selections, provide transparent proposals, and coordinate licensed craftsmen who respect your home or jobsite. Whether it's a single-room refresh or a multi-phase commercial build, you can expect the same attentive experience.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {values.map((value) => (
                <article key={value.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-slate-900">{value.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{value.description}</p>
                </article>
              ))}
            </div>
          </div>
          <PlaceholderImage className="h-full min-h-[400px] w-full" />
        </Container>
      </section>

      <section className="bg-slate-100 py-16">
        <Container className="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1fr)]">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-slate-900">Dedicated to your project timeline</h2>
            <p className="text-base text-slate-600">
              We treat every home as if it were our own. Our project coordinators provide updates throughout demolition, prep, installation, and finishing so you always know what happens next.
            </p>
            <p className="text-base text-slate-600">
              The crew tidies job sites daily, protects adjacent surfaces, and inspects each installation against our internal checklist before presenting the finished space.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">Credentials & partnerships</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              {credentials.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-900" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>
    </>
  );
}
