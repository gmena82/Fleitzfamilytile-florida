import { Container } from "../ui/container";

interface ContentGridProps {
  sections: {
    title: string;
    description: string;
    bullets?: string[];
  }[];
}

export function ContentGrid({ sections }: ContentGridProps) {
  return (
    <section className="py-16">
      <Container className="grid gap-8 md:grid-cols-2">
        {sections.map((section) => (
          <article key={section.title} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900">{section.title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">{section.description}</p>
            {section.bullets && (
              <ul className="mt-4 space-y-2 text-sm text-slate-500">
                {section.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-900" aria-hidden />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            )}
          </article>
        ))}
      </Container>
    </section>
  );
}
