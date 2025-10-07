import { Container } from "../ui/container";

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  description: string;
}

export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <section className="border-b border-slate-200 bg-gradient-to-b from-white to-slate-100/40 py-16">
      <Container className="space-y-6">
        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">{eyebrow}</span>
        <h1 className="text-4xl font-semibold text-slate-900 sm:text-5xl">{title}</h1>
        <p className="max-w-3xl text-base leading-relaxed text-slate-600">{description}</p>
      </Container>
    </section>
  );
}
