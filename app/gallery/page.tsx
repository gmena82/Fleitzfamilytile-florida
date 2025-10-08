import { PageHeader } from "@/components/sections/page-header";
import { Container } from "@/components/ui/container";
import { PlaceholderImage } from "@/components/ui/placeholder-image";

const gallerySections = [
  {
    title: "Kitchen transformations",
    description: "Backsplashes, islands, and flooring showcasing tailored patterns and textures.",
    items: ["Coastal quartz backsplash", "Waterfall island detail", "Herringbone feature wall"]
  },
  {
    title: "Bath & spa retreats",
    description: "Curbless showers, soaking tubs, and statement vanities with waterproofed tile systems.",
    items: ["Marble-inspired shower", "Textured niche accents", "Freestanding tub surround"]
  },
  {
    title: "Outdoor living",
    description: "Lanai, patio, and pool deck installations designed for Florida's climate.",
    items: ["Slip-resistant pool deck", "Summer kitchen backsplash", "Covered lanai flooring"]
  },
  {
    title: "Commercial spaces",
    description: "Lobbies, wellness centers, and retail environments crafted for durability and style.",
    items: ["Boutique lobby", "Wellness spa waiting area", "Modern retail flooring"]
  }
];

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Gallery"
        title="Inspiration from recent tile and stone installations."
        description="Explore a sampling of the textures, layouts, and finishing touches completed by Fleitz Family Tile. Visit the showroom to browse additional project imagery and material swatches."
      />

      <section className="py-16">
        <Container className="space-y-12">
          {gallerySections.map((section) => (
            <div key={section.title} className="space-y-6">
              <div className="space-y-2 text-center">
                <h2 className="text-2xl font-semibold text-slate-900">{section.title}</h2>
                <p className="mx-auto max-w-2xl text-sm text-slate-600">{section.description}</p>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {section.items.map((item) => (
                  <article key={item} className="space-y-3 rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
                    <PlaceholderImage className="h-44 w-full" />
                    <p className="text-sm font-semibold text-slate-900">{item}</p>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </Container>
      </section>
    </>
  );
}
