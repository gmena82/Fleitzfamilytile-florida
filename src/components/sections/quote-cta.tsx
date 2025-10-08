import { siteConfig } from "@/config/site";
import { Container } from "../ui/container";

const services = ["Kitchen Backsplash", "Bathroom & Shower", "Floor Tile Installation", "Fireplace", "Special Project"] as const;

interface QuoteCtaSectionProps {
  sectionId?: string;
}

export function QuoteCtaSection({ sectionId = "cta-form" }: QuoteCtaSectionProps) {
  return (
    <section id={sectionId} className="bg-slate-900 py-20 text-white">
      <Container className="space-y-10">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">Ready to Transform Your Space?</h2>
          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-slate-200">
            Get a free estimate for your tile project. Professional craftsmanship and clean, durable finishes across Bradenton,
            Sarasota, and Lakewood Ranch.
          </p>
          <ul className="flex flex-wrap items-center justify-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-slate-300">
            <li>Free Estimates</li>
            <li>Licensed &amp; Insured</li>
            <li>Workmanship Warranty</li>
          </ul>
        </div>
        <form
          id="quote-form"
          className="grid gap-6 rounded-3xl border border-white/10 bg-white/10 p-8 text-left shadow-xl backdrop-blur"
          action="/api/quote"
          method="post"
        >
          <div className="grid gap-6 md:grid-cols-2">
            <label className="space-y-2 text-sm font-medium">
              <span>Name</span>
              <input
                type="text"
                name="name"
                required
                className="w-full rounded-full border border-white/40 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-slate-300 focus:border-white focus:outline-none focus:ring-2 focus:ring-white/20"
              />
            </label>
            <label className="space-y-2 text-sm font-medium">
              <span>Email</span>
              <input
                type="email"
                name="email"
                required
                className="w-full rounded-full border border-white/40 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-slate-300 focus:border-white focus:outline-none focus:ring-2 focus:ring-white/20"
              />
            </label>
            <label className="space-y-2 text-sm font-medium">
              <span>Phone</span>
              <input
                type="tel"
                name="phone"
                className="w-full rounded-full border border-white/40 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-slate-300 focus:border-white focus:outline-none focus:ring-2 focus:ring-white/20"
              />
            </label>
            <label className="space-y-2 text-sm font-medium">
              <span>City</span>
              <input
                type="text"
                name="city"
                placeholder="Bradenton / Sarasota / Lakewood Ranch"
                className="w-full rounded-full border border-white/40 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-slate-300 focus:border-white focus:outline-none focus:ring-2 focus:ring-white/20"
              />
            </label>
          </div>
          <label className="space-y-2 text-sm font-medium">
            <span>Service</span>
            <select
              name="service"
              className="w-full rounded-full border border-white/40 bg-white/10 px-4 py-3 text-sm text-white focus:border-white focus:outline-none focus:ring-2 focus:ring-white/20"
            >
              {services.map((service) => (
                <option key={service} value={service} className="text-slate-900">
                  {service}
                </option>
              ))}
            </select>
          </label>
          <label className="space-y-2 text-sm font-medium">
            <span>Message</span>
            <textarea
              name="message"
              rows={4}
              className="min-h-[120px] w-full rounded-3xl border border-white/40 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-slate-300 focus:border-white focus:outline-none focus:ring-2 focus:ring-white/20"
            />
          </label>
          <button
            type="submit"
            className="inline-flex w-full items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-200"
          >
            Get Free Estimate
          </button>
          <p className="form-success text-center text-xs font-semibold uppercase tracking-[0.3em] text-emerald-200" hidden>
            Thanks! Your message has been sent.
          </p>
          <p className="form-error text-center text-xs font-semibold uppercase tracking-[0.3em] text-red-200" hidden>
            Sorry—something went wrong. Please try again or email us directly at {siteConfig.contact.email}.
          </p>
        </form>
      </Container>
    </section>
  );
}
