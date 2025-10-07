import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/sections/page-header";

export default function LegalPage() {
  return (
    <>
      <PageHeader
        eyebrow="Policies"
        title="Legal, privacy, and service policies."
        description="Review how Fleitz Family Tile protects your information and what to expect when working with our team."
      />
      <section className="py-16">
        <Container className="space-y-10 text-sm leading-relaxed text-slate-600">
          <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900">Privacy policy</h2>
            <p className="mt-3">
              We collect contact details solely to coordinate consultations, proposals, and project updates. Your information is never sold and may be shared with trusted installation partners directly involved in your project.
            </p>
          </article>
          <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900">Terms of service</h2>
            <p className="mt-3">
              Estimates remain valid for 30 days and may adjust if product availability or scope changes. Installation timelines depend on site readiness, and we require clear access to the workspace during scheduled dates.
            </p>
          </article>
          <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900">Warranty</h2>
            <p className="mt-3">
              Fleitz Family Tile warranties workmanship for one year following installation. Manufacturer warranties apply to materials, and we facilitate claims as needed.
            </p>
          </article>
        </Container>
      </section>
    </>
  );
}
