import { Star } from "lucide-react";

import { Container } from "../ui/container";

interface Testimonial {
  quote: string;
  name: string;
  project: string;
}

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

export function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  return (
    <section className="bg-slate-100 py-20">
      <Container className="space-y-12">
        <div className="max-w-2xl space-y-4">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">Client feedback</span>
          <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">Detail that earns repeat business.</h2>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure key={testimonial.name} className="flex h-full flex-col justify-between rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="mb-4 flex items-center gap-1 text-amber-400">
                <span className="sr-only">Rated five out of five stars</span>
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-current" aria-hidden fill="currentColor" />
                ))}
              </div>
              <blockquote className="text-sm leading-relaxed text-slate-600">“{testimonial.quote}”</blockquote>
              <figcaption className="mt-6 text-sm font-semibold text-slate-900">
                {testimonial.name}
                <span className="block text-xs font-normal uppercase tracking-wide text-slate-500">
                  {testimonial.project}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
