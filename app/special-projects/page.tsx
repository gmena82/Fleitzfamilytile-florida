import type { Metadata } from "next";

import { Container } from "@/components/ui/container";
import { PlaceholderImage } from "@/components/ui/placeholder-image";

export const metadata: Metadata = {
  title: "Special Tile Projects | Fleitz Family Tile",
  description: "Custom tile projects, mosaics, and outdoor spaces for Bradenton-area homeowners."
};

export default function SpecialProjectsPage() {
  return (
    <section className="bg-white py-16">
      <Container className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)]">
        <div className="space-y-4">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">Special Projects</span>
          <h1 className="text-3xl font-semibold text-slate-900">Special &amp; Custom Tile Projects</h1>
          <p className="text-sm leading-relaxed text-slate-600">
            From outdoor kitchens and pool surrounds to intricate mosaics, Fleitz Family Tile partners with Bradenton homeowners
            to deliver standout tile features. Share your concept and we&apos;ll engineer the layout, materials, and installation.
          </p>
        </div>
        <PlaceholderImage className="h-full min-h-[320px] w-full" />
      </Container>
    </section>
  );
}
