import Link from "next/link";

import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/sections/page-header";
import { QuoteCtaSection } from "@/components/sections/quote-cta";

const resourceLinks: {
  title: string;
  description: string;
  href?: { hash: string };
}[] = [
  {
    title: "Tile care guide",
    description: "Step-by-step cleaning, sealing, and maintenance recommendations for common surfaces.",
    href: { hash: "care-guide" }
  },
  {
    title: "Installation checklist",
    description: "Timeline and prep list to align designers, builders, and homeowners before install day.",
    href: { hash: "installation" }
  },
  {
    title: "Trade program",
    description: "Benefits for designers, contractors, and builders who collaborate with our team."
  }
];

export default function ResourcesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Resources"
        title="Tools and education to keep your surfaces performing beautifully."
        description="Review prep guides, aftercare instructions, and trade resources prepared by the Fleitz Family Tile team."
      />
      <section className="py-16">
        <Container className="space-y-10">
          <div className="grid gap-8 md:grid-cols-3">
            {resourceLinks.map((resource) => (
              <article key={resource.title} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
                <h2 className="text-xl font-semibold text-slate-900">{resource.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{resource.description}</p>
                {resource.href && (
                  <Link href={resource.href} className="mt-4 inline-flex text-sm font-semibold text-slate-900">
                    View details →
                  </Link>
                )}
              </article>
            ))}
          </div>
          <article id="care-guide" className="rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-900">Tile care guide</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Use pH-neutral cleaners weekly, apply penetrating sealer to natural stone annually, and avoid harsh abrasives to preserve finishes.
            </p>
          </article>
          <article id="installation" className="rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-900">Installation checklist</h2>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li>✔ Confirm substrate readiness and moisture levels.</li>
              <li>✔ Review approved layout drawings and grout colors.</li>
              <li>✔ Stage materials 48 hours prior for acclimation.</li>
              <li>✔ Schedule walkthrough for punch-list completion.</li>
            </ul>
          </article>
        </Container>
      </section>
      <QuoteCtaSection />
    </>
  );
}
