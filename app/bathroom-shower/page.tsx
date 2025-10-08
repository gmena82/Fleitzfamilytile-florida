import type { Metadata } from "next";

import { Container } from "@/components/ui/container";
import { PlaceholderImage } from "@/components/ui/placeholder-image";

export const metadata: Metadata = {
  title: "Bathroom & Shower Tile Installation | Fleitz Family Tile",
  description: "Waterproofed showers, tubs, and bathroom tile remodels for Bradenton, Sarasota, and Lakewood Ranch."
};

export default function BathroomShowerPage() {
  return (
    <section className="bg-white py-16">
      <Container className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)]">
        <div className="space-y-4">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">Bathroom Tile</span>
          <h1 className="text-3xl font-semibold text-slate-900">Bathroom &amp; Shower Tile Installation</h1>
          <p className="text-sm leading-relaxed text-slate-600">
            Fleitz Family Tile delivers watertight shower systems, perfectly aligned wall tile, and spa-like finishes suited for
            Bradenton humidity. From curbless showers to custom niches, we handle demo, prep, waterproofing, and installation.
          </p>
        </div>
        <PlaceholderImage className="h-full min-h-[320px] w-full" />
      </Container>
    </section>
  );
}
