import { faqs } from "@/content/faq";
import { Container } from "../ui/container";

export function FaqSection() {
  return (
    <section id="faq" className="bg-white py-20">
      <Container className="grid gap-12 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1fr)]">
        <div className="space-y-4">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">FAQ</span>
          <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
            Answers before you step into the showroom.
          </h2>
          <p className="text-base leading-relaxed text-slate-600">
            Not seeing what you need? Reach out and our concierge team will guide you through product sampling, budget planning, and scheduling.
          </p>
        </div>
        <dl className="space-y-6">
          {faqs.map((faq) => (
            <div key={faq.question} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <dt className="text-base font-semibold text-slate-900">{faq.question}</dt>
              <dd className="mt-3 text-sm leading-relaxed text-slate-600">{faq.answer}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
