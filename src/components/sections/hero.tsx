import Link from "next/link";

import { Container } from "../ui/container";

interface HeroSectionProps {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
}

export function HeroSection({ eyebrow, title, description, primaryCta, secondaryCta }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-white to-slate-100">
      <Container className="grid gap-12 py-24 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-center">
        <div className="space-y-8">
          <span className="inline-flex items-center rounded-full bg-slate-900/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-600">
            {eyebrow}
          </span>
          <h1 className="text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl">
            {title}
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-slate-600">{description}</p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href={primaryCta.href}
              className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
            >
              {primaryCta.label}
            </Link>
            <Link
              href={secondaryCta.href}
              className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:text-slate-900"
            >
              {secondaryCta.label}
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-6 text-left text-sm text-slate-500 sm:grid-cols-4">
            <div>
              <span className="block text-2xl font-semibold text-slate-900">25+</span>
              <span className="uppercase tracking-wide">Years in business</span>
            </div>
            <div>
              <span className="block text-2xl font-semibold text-slate-900">1200+</span>
              <span className="uppercase tracking-wide">Projects delivered</span>
            </div>
            <div>
              <span className="block text-2xl font-semibold text-slate-900">4.9★</span>
              <span className="uppercase tracking-wide">Customer rating</span>
            </div>
            <div>
              <span className="block text-2xl font-semibold text-slate-900">20K ft²</span>
              <span className="uppercase tracking-wide">Showroom tile</span>
            </div>
          </div>
        </div>
        <div className="relative h-full min-h-[320px] rounded-3xl bg-[radial-gradient(circle_at_top,#f8fafc,transparent_60%),linear-gradient(135deg,#0f172a,#1e293b)] p-6 shadow-2xl">
          <div className="absolute inset-6 rounded-2xl border border-white/20 bg-white/5 backdrop-blur" aria-hidden />
          <span className="sr-only">Showroom vignette</span>
        </div>
      </Container>
    </section>
  );
}
