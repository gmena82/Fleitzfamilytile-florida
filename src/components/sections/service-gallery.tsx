import { Container } from "../ui/container";

interface ServiceGalleryProps {
  categories: {
    title: string;
    description: string;
    bullets: string[];
  }[];
}

export function ServiceGallery({ categories }: ServiceGalleryProps) {
  return (
    <section id="services" className="bg-white py-20">
      <Container className="space-y-12">
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">Tile solutions</span>
          <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
            Specialty showrooms, detailed installations, and concierge sourcing.
          </h2>
          <p className="text-base leading-relaxed text-slate-600">
            From ultra-modern porcelain slabs to artisanal mosaics, our team curates materials that elevate coastal, transitional, and contemporary interiors.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {categories.map((category) => (
            <article key={category.title} className="flex flex-col justify-between rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-slate-900">{category.title}</h3>
                <p className="text-sm text-slate-600">{category.description}</p>
                <ul className="space-y-2 text-sm text-slate-500">
                  {category.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-900" aria-hidden />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8 h-32 rounded-2xl bg-[radial-gradient(circle_at_top_left,#e2e8f0,transparent_60%),linear-gradient(135deg,#cbd5f5,#1e293b)]" aria-hidden />
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
