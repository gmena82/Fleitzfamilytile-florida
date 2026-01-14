import { Star } from "lucide-react";

import { PageHeader } from "@/components/sections/page-header";
import { Container } from "@/components/ui/container";
import { QuoteCtaSection } from "@/components/sections/quote-cta";

const testimonials = [
  {
    quote:
      "We remodeled our entire first floor with Fleitz Family Tile. Their team protected our home, stayed on schedule, and delivered beautiful floors and showers.",
    name: "Jessica & Mark L.",
    location: "Bradenton, FL"
  },
  {
    quote:
      "As a designer, I rely on partners who can execute complex layouts. Fleitz Family Tile understands vision boards and brings them to life.",
    name: "Studio Marina Design",
    location: "Sarasota, FL"
  },
  {
    quote:
      "From the first consultation to the final seal, communication was clear. The workmanship in our spa is exceptional and our clients notice the difference.",
    name: "Solstice Wellness",
    location: "Lakewood Ranch, FL"
  },
  {
    quote:
      "Our production builds demand consistency. Their crews deliver punch-list ready homes that impress our buyers every time.",
    name: "Harborline Builders",
    location: "Manatee County, FL"
  }
];

const assurances = [
  "Licensed and insured tile installers",
  "In-house project coordination and scheduling",
  "Transparent proposals with detailed line items",
  "Clean job sites and respectful crews"
];

export default function TestimonialsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Testimonials"
        title="Trusted by homeowners, designers, and builders across Florida."
        description="Hear from clients who rely on Fleitz Family Tile for detailed installations and dependable service on every project."
      />

      <section className="py-16">
        <Container className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.8fr)]">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-slate-900">What clients are saying</h2>
            <div className="space-y-6">
              {testimonials.map((testimonial) => (
                <blockquote key={testimonial.quote} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="mb-4 flex items-center gap-1 text-amber-400">
                    <span className="sr-only">Rated five out of five stars</span>
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star key={index} className="h-4 w-4 fill-current" aria-hidden fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-base italic text-slate-700">“{testimonial.quote}”</p>
                  <footer className="mt-4 text-sm font-semibold text-slate-900">
                    {testimonial.name}
                    <span className="block text-xs font-normal uppercase tracking-[0.3em] text-slate-500">
                      {testimonial.location}
                    </span>
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
          <div className="space-y-6 rounded-3xl border border-slate-200 bg-slate-100 p-8">
            <h3 className="text-xl font-semibold text-slate-900">Why professionals choose Fleitz Family Tile</h3>
            <p className="text-sm text-slate-600">
              Our process is built to support designers, contractors, and homeowners with proactive coordination and workmanship that stands up to daily use.
            </p>
            <ul className="space-y-3 text-sm text-slate-600">
              {assurances.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-900" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-slate-600">
              Ready to experience the difference? <span className="font-semibold text-slate-900">Schedule a consultation</span> to tour the showroom and review your project goals.
            </p>
          </div>
        </Container>
      </section>

      <QuoteCtaSection />
    </>
  );
}
