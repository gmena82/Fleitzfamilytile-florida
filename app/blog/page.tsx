import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/sections/page-header";

const posts = [
  {
    title: "2025 tile trends",
    excerpt: "Discover textures, colors, and formats leading Florida's design scene this year.",
    href: "#"
  },
  {
    title: "How to plan a bathroom renovation",
    excerpt: "Timeline, budgeting, and tile selection tips straight from our design team.",
    href: "#"
  },
  {
    title: "Outdoor tile performance checklist",
    excerpt: "Ensure your lanai and pool deck stand up to Florida's sun, salt, and moisture.",
    href: "#"
  }
];

export default function BlogPage() {
  return (
    <>
      <PageHeader
        eyebrow="Insights"
        title="Design insights and renovation tips from Fleitz Family Tile."
        description="Browse the latest resources on tile styles, installation best practices, and product maintenance."
      />
      <section className="py-16">
        <Container className="grid gap-8 md:grid-cols-3">
          {posts.map((post) => (
            <article key={post.title} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-xl font-semibold text-slate-900">{post.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{post.excerpt}</p>
              <a href={post.href} className="mt-4 inline-flex text-sm font-semibold text-slate-900">
                Read more →
              </a>
            </article>
          ))}
        </Container>
      </section>
    </>
  );
}
