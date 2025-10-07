import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/sections/page-header";

const categories = [
  {
    title: "Porcelain & ceramic",
    description: "Durable floor and wall tile in large-format, textured, and wood-look finishes." 
  },
  {
    title: "Natural stone",
    description: "Hand-selected marble, travertine, limestone, and ledgestone for bespoke applications." 
  },
  {
    title: "Mosaics",
    description: "Glass, metal, marble, and mixed-media mosaics sized for shower floors, niches, and statement walls." 
  },
  {
    title: "Outdoor surfaces",
    description: "Pavers, pool tile, and slip-resistant textures engineered for Florida's climate." 
  },
  {
    title: "Accessories",
    description: "Schluter trims, grout systems, waterproofing, and heated-floor kits available in-house." 
  }
];

export default function MarketplacePage() {
  return (
    <>
      <PageHeader
        eyebrow="Marketplace"
        title="Discover curated tile collections ready for your next project."
        description="Explore our stocked inventory and special-order programs across tile, stone, and installation accessories."
      />
      <section className="py-16">
        <Container className="grid gap-8 md:grid-cols-3">
          {categories.map((category) => (
            <article key={category.title} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-xl font-semibold text-slate-900">{category.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{category.description}</p>
            </article>
          ))}
        </Container>
      </section>
    </>
  );
}
