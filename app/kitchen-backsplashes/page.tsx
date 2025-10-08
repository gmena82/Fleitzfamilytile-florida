import type { Metadata } from "next";

import { Container } from "@/components/ui/container";
import { PlaceholderImage } from "@/components/ui/placeholder-image";

export const metadata: Metadata = {
  title: "Kitchen Backsplash Installation | Fleitz Family Tile",
  description: "Custom kitchen backsplash installation for Bradenton, Sarasota, and Lakewood Ranch homes."
};

export default function KitchenBacksplashesPage() {
  return (
    <section className="bg-white py-16">
      <Container className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)]">
        <div className="space-y-4">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">Kitchen Tile</span>
          <h1 className="text-3xl font-semibold text-slate-900">Kitchen Backsplash Installation</h1>
          <p className="text-sm leading-relaxed text-slate-600">
            Tailored backsplash layouts, crisp miters, and durable grout systems that stand up to Bradenton kitchens. Share your
            inspiration and Fleitz Family Tile will template, prep, and install with clean lines and tight finishes.
          </p>
        </div>
        <PlaceholderImage className="h-full min-h-[320px] w-full" />
      </Container>
    </section>
  );
}
