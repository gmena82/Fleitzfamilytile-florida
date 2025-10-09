import Link from "next/link";
import type { Route } from "next";

import { Container } from "../ui/container";

interface HeroSectionProps {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: { label: string; href: Route };
  secondaryCta: { label: string; href: Route };
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
        </div>
        <div className="space-y-8 lg:ml-auto lg:mr-0">
          <div className="relative mx-auto aspect-[16/10] w-full max-w-2xl overflow-hidden rounded-3xl shadow-2xl">
            <iframe
              className="absolute inset-0 h-full w-full"
              src="https://www.youtube.com/embed/Hll582-mC_4?si=NV2OOI3u-POpUtkN"
              title="Fleitz Family Tile Showroom"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
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
      </Container>
    </section>
  );
}
