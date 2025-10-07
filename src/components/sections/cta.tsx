import Link from "next/link";
import type { Route } from "next";

import { Container } from "../ui/container";

type InternalCta = { href: Route; label: string };
type ExternalCta = { href: string; label: string; isExternal: true };

interface CtaSectionProps {
  title: string;
  description: string;
  primaryCta: InternalCta;
  secondaryCta?: InternalCta | ExternalCta;
}

const isExternalLink = (cta: InternalCta | ExternalCta): cta is ExternalCta =>
  "isExternal" in cta && cta.isExternal;

export function CtaSection({ title, description, primaryCta, secondaryCta }: CtaSectionProps) {
  return (
    <section className="py-20">
      <Container className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
        <div className="grid gap-12 p-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:items-center">
          <div className="space-y-6">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">Start your project</span>
            <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">{title}</h2>
            <p className="text-base leading-relaxed text-slate-600">{description}</p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href={primaryCta.href}
                className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
              >
                {primaryCta.label}
              </Link>
              {secondaryCta &&
                (isExternalLink(secondaryCta) ? (
                  <a
                    href={secondaryCta.href}
                    className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:text-slate-900"
                  >
                    {secondaryCta.label}
                  </a>
                ) : (
                  <Link
                    href={secondaryCta.href}
                    className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:text-slate-900"
                  >
                    {secondaryCta.label}
                  </Link>
                ))}
            </div>
          </div>
          <div className="relative h-full min-h-[240px] rounded-2xl bg-[radial-gradient(circle_at_top_left,#f8fafc,transparent_70%),linear-gradient(120deg,#334155,#0f172a)]" aria-hidden />
        </div>
      </Container>
    </section>
  );
}
