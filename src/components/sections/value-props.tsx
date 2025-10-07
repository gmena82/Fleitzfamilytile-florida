import { Container } from "../ui/container";

interface ValuePropsSectionProps {
  title: string;
  description: string;
  items: { title: string; description: string }[];
}

export function ValuePropsSection({ title, description, items }: ValuePropsSectionProps) {
  return (
    <section className="py-20">
      <Container className="space-y-12">
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">Why homeowners choose us</span>
          <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">{title}</h2>
          <p className="text-base leading-relaxed text-slate-600">{description}</p>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {items.map((item) => (
            <div key={item.title} className="rounded-2xl border border-slate-200 bg-white/70 p-8 shadow-sm backdrop-blur">
              <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
