import { Container } from "../ui/container";
import { HomeCtaForm } from "./home-cta-form";

interface QuoteCtaSectionProps {
  sectionId?: string;
}

export function QuoteCtaSection({ sectionId = "cta-form" }: QuoteCtaSectionProps) {
  return (
    <section id={sectionId} className="bg-slate-900 py-16 text-white">
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
  );
}
