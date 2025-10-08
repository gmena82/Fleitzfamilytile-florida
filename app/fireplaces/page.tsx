import type { Metadata } from "next";

import { Container } from "@/components/ui/container";
import { PlaceholderImage } from "@/components/ui/placeholder-image";

export const metadata: Metadata = {
  title: "Fireplace Tile Surrounds | Fleitz Family Tile",
  description: "Custom fireplace tile surrounds and feature walls for Bradenton and Sarasota homes."
};

export default function FireplacesPage() {
  return (
    <section className="bg-white py-16">
      <Container className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)]">
        <div className="space-y-4">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">Fireplace Tile</span>
          <h1 className="text-3xl font-semibold text-slate-900">Fireplace Tile Surrounds</h1>
          <p className="text-sm leading-relaxed text-slate-600">
            Transform your fireplace with heat-rated tile, detailed trim work, and precision cuts. Fleitz Family Tile crafts
            focal points that anchor Bradenton living rooms, great rooms, and outdoor lounges.
          </p>
        </div>
        <PlaceholderImage className="h-full min-h-[320px] w-full" />
      </Container>
    </section>
  );
}
