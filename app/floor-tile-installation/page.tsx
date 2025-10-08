import type { Metadata } from "next";

import { Container } from "@/components/ui/container";
import { PlaceholderImage } from "@/components/ui/placeholder-image";

export const metadata: Metadata = {
  title: "Floor Tile Installation | Fleitz Family Tile",
  description: "Professional floor tile installation across Bradenton, Sarasota, and Lakewood Ranch."
};

export default function FloorTileInstallationPage() {
  return (
    <section className="bg-white py-16">
      <Container className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)]">
        <div className="space-y-4">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">Floor Tile</span>
          <h1 className="text-3xl font-semibold text-slate-900">Floor Tile Installation</h1>
          <p className="text-sm leading-relaxed text-slate-600">
            Large-format layouts, leveling systems, and premium grout options keep Bradenton floors flat and durable. We manage
            prep, underlayments, and transitions for cohesive results from room to room.
          </p>
        </div>
        <PlaceholderImage className="h-full min-h-[320px] w-full" />
      </Container>
    </section>
  );
}
