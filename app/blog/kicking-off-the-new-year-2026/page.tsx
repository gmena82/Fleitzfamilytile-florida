import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";

import { QuoteCtaSection } from "@/components/sections/quote-cta";
import { Container } from "@/components/ui/container";
import { PlaceholderImage } from "@/components/ui/placeholder-image";
import { siteConfig } from "@/config/site";

const publishedDate = "2026-01-13";

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Kicking Off the New Year: Big Goals, New Projects, and the Fleitz Family Promise",
  datePublished: publishedDate,
  dateModified: publishedDate,
  author: {
    "@type": "Person",
    name: "AJ Fleitz",
  },
  url: `${siteConfig.url}/blog/kicking-off-the-new-year-2026`,
  publisher: { "@id": `${siteConfig.url}/#org` },
};

export const metadata: Metadata = {
  title: "Kicking Off the New Year: Big Goals, New Projects & the Fleitz Family Promise | Bradenton Tile",
  description:
    "AJ Fleitz shares exciting 2026 plans for Fleitz Family Tile—new projects in Bradenton & Sarasota, elevated clean-build standards, and a renewed commitment to third-generation craftsmanship.",
  alternates: {
    canonical: "https://www.fleitzfamilytile.com/blog/kicking-off-the-new-year-2026",
  },
  openGraph: {
    type: "article",
    url: "https://www.fleitzfamilytile.com/blog/kicking-off-the-new-year-2026",
    title: "Kicking Off the New Year: Big Goals, New Projects, and the Fleitz Family Promise",
    description:
      "AJ Fleitz shares exciting 2026 plans—new projects, elevated standards, and a renewed commitment to third-generation craftsmanship.",
    publishedTime: "2026-01-13T00:00:00-05:00",
    modifiedTime: "2026-01-13T00:00:00-05:00",
  },
};

export default function KickingOffTheNewYearPage() {
  return (
    <>
      <Script id="kicking-off-new-year-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />

      <article className="bg-white">
        <header className="bg-slate-900 py-20 text-white">
          <Container className="space-y-6 text-center md:text-left">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-300">Company News</p>
            <h1 className="text-3xl font-semibold sm:text-4xl">Kicking Off the New Year: Big Goals, New Projects, and the Fleitz Family Promise</h1>
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">January 13, 2026 · By AJ Fleitz</p>
            <p className="mx-auto max-w-3xl text-sm leading-relaxed text-slate-200 md:mx-0">
              2026 is here, and we&apos;re ready to make it our best year yet. From exciting projects across Bradenton and Sarasota to new standards in clean-build practices, here&apos;s what&apos;s ahead for Fleitz Family Tile.
            </p>
          </Container>
        </header>

        <div className="bg-slate-50">
          <Container className="-mt-16 space-y-12 pb-16">
            {/* Featured Image Placeholder */}
            <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-lg">
              <div className="aspect-[16/9]">
                <PlaceholderImage
                  label="Featured Image Placeholder"
                  className="h-full w-full rounded-none border-0"
                />
              </div>
            </div>

            <div className="space-y-10 text-base leading-relaxed text-slate-700">
              <section className="space-y-4">
                <p className="text-lg">
                  There is something undeniably special about the start of a new year.
                </p>
                <p>
                  In the tile industry, we often measure time in projects—the week we finished that complex <Link href="/kitchen-backsplashes" className="font-medium text-sky-700 underline underline-offset-4 hover:text-sky-800">herringbone backsplash in Sarasota</Link>, or the month we spent transforming a <Link href="/bathroom-shower" className="font-medium text-sky-700 underline underline-offset-4 hover:text-sky-800">master bath in Lakewood Ranch</Link>. But when the calendar flips to January, I always take a moment to step back and look at the bigger picture.
                </p>
                <p>
                  As I sit here writing this, I am filled with a genuine sense of excitement for what lies ahead. 2025 was a fantastic year for Fleitz Family Tile, full of challenges met and <Link href="/gallery" className="font-medium text-sky-700 underline underline-offset-4 hover:text-sky-800">beautiful spaces created</Link>. But looking at the calendar for 2026, I can tell you right now: this year is going to be even better. We have a slate of incredible projects lined up, some ambitious goals we are eager to crush, and a renewed commitment to the values that have kept <Link href="/about" className="font-medium text-sky-700 underline underline-offset-4 hover:text-sky-800">my family in this trade for three generations</Link>.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-slate-900">The Projects We Have Lined Up</h2>
                <p>
                  One of the things I am most excited about right now is the sheer variety of work we have on the books for the first quarter. Homeowners in Bradenton and Sarasota are dreaming big this year, and it is an honor that they are trusting us to bring those dreams to life.
                </p>
                <p>
                  We are seeing a huge resurgence in <Link href="/kitchen-backsplashes" className="font-medium text-sky-700 underline underline-offset-4 hover:text-sky-800">custom kitchen backsplash installation</Link>. For a while, things were very safe—lots of standard white subway tile. And don&apos;t get me wrong, that is a classic look that never fails. But this year? We are seeing bold choices. We have a few projects coming up involving hand-cut mosaics and intricate glass work that are going to be absolute showstoppers. I love these jobs because they require that distinct mix of artistic eye and technical precision that I grew up learning.
                </p>
                <p>
                  We also have several full <Link href="/bathroom-shower" className="font-medium text-sky-700 underline underline-offset-4 hover:text-sky-800">bathroom tile remodeling</Link> projects scheduled that are going to test our skills in the best way possible. There is one <Link href="/bathroom-shower" className="font-medium text-sky-700 underline underline-offset-4 hover:text-sky-800">custom shower tile installation</Link> in particular on Longboat Key that is going to be a masterpiece of waterproofing and design. Living here on the Suncoast, we all know how the humidity works. It is relentless. That is why I get so geeks-out-excited about things like proper waterproofing with systems like <a href="https://www.schluter.com/schluter-us/en_US/Membranes/Waterproofing-(KERDI)/c/kerdi_FK" target="_blank" rel="noopener noreferrer" className="font-medium text-sky-700 underline underline-offset-4 hover:text-sky-800">Schluter-KERDI</a> and mold-resistant substrates. This specific project involves <a href="https://www.tcnatile.com/faqs/54-gauged-porcelain-tile-panels-and-gauged-porcelain-tile.html" target="_blank" rel="noopener noreferrer" className="font-medium text-sky-700 underline underline-offset-4 hover:text-sky-800">large-format porcelain slabs</a>—a trend that is really taking off—and it requires absolute perfection in the substrate to prevent cracking. I cannot wait to get my hands dirty on that one.
                </p>
                <p>
                  And, of course, with the Florida &quot;winter&quot; being what it is, we are already lining up <Link href="/outside-projects" className="font-medium text-sky-700 underline underline-offset-4 hover:text-sky-800">outdoor tile and pool deck projects</Link>. We have some pool decks and patio refreshes in the pipeline that are going to transform those backyards into true extensions of the home. There is nothing quite like laying tile that you know will host family barbecues and pool parties for decades to come.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-slate-900">Our Goals for the New Year</h2>
                <p>
                  While the projects are exciting, what really drives me this year are the internal goals we have set for Fleitz Family Tile. It is not just about being busy; it is about being better.
                </p>

                <div className="space-y-6 rounded-2xl bg-white p-6 shadow-sm">
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-slate-900">Goal #1: Elevating the &quot;Clean Build&quot; Standard</h3>
                    <p>
                      If you have worked with us before, you know I am obsessive about cleanliness. I believe that just because we are doing construction doesn&apos;t mean your home should look (or smell) like a construction site. This year, we are doubling down on our dust-control protocols. We have invested in new <a href="https://www.epa.gov/indoor-air-quality-iaq/what-hepa-filter" target="_blank" rel="noopener noreferrer" className="font-medium text-sky-700 underline underline-offset-4 hover:text-sky-800">HEPA vacuum</a> attachments and dust-eating tools to capture even more of those tiny silica bits before they ever have a chance to float through your air vents. We are also continuing our commitment to <a href="https://www.epa.gov/indoor-air-quality-iaq/volatile-organic-compounds-impact-indoor-air-quality" target="_blank" rel="noopener noreferrer" className="font-medium text-sky-700 underline underline-offset-4 hover:text-sky-800">low-VOC mortars</a>. My goal is for you to walk into your home after a day of our work and smell... absolutely nothing. Just fresh air.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-slate-900">Goal #2: Honoring the Legacy</h3>
                    <p>
                      As a <Link href="/about" className="font-medium text-sky-700 underline underline-offset-4 hover:text-sky-800">third-generation tile installer</Link>, I carry a lot of history in my tool belt. My grandfather and father taught me that this trade isn&apos;t just about sticking ceramic to a wall; it is about integrity. My goal for this year is to ensure that every single interaction we have—from the first handshake to the final grout seal—reflects that legacy. In an industry where contractors sometimes get a bad rap for ghosting or cutting corners, my goal is to be the absolute antithesis of that. We want to be the most reliable part of your entire year.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-slate-900">Goal #3: Deepening Our Roots</h3>
                    <p>
                      We love this community. From <a href="https://www.visitflorida.com/beaches/gulf-coast/anna-maria-island/" target="_blank" rel="noopener noreferrer" className="font-medium text-sky-700 underline underline-offset-4 hover:text-sky-800">Anna Maria Island</a> to Venice, this is our home. This year, I want to find more ways to connect with our neighbors beyond just business. Whether that is showcasing more local design trends on <Link href="/blog" className="font-medium text-sky-700 underline underline-offset-4 hover:text-sky-800">this blog</Link> or simply being a resource for homeowners who have questions about maintenance, we want to be a helpful pillar in the Suncoast community.
                    </p>
                  </div>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-slate-900">Let&apos;s Get to Work</h2>
                <p>
                  The schedule is filling up, the tools are sharpened, and the energy is high.
                </p>
                <p>
                  If you have been staring at that outdated <Link href="/floor-tile-installation" className="font-medium text-sky-700 underline underline-offset-4 hover:text-sky-800">bathroom floor tile</Link> or dreaming of a kitchen that actually inspires you to cook, now is the time to <Link href="/contact" className="font-medium text-sky-700 underline underline-offset-4 hover:text-sky-800">request a free tile estimate</Link>. We are tackling this new year with the same philosophy we have held for decades: craftsmanship without compromise.
                </p>
                <p>
                  I am incredibly grateful for the trust you place in us. Every time you invite <Link href="/" className="font-medium text-sky-700 underline underline-offset-4 hover:text-sky-800">Fleitz Family Tile</Link> into your home, you are supporting a local business and a family tradition. I don&apos;t take that lightly.
                </p>
                <p className="text-lg font-medium text-slate-900">
                  Here is to a prosperous, healthy, and beautifully tiled 2026. Let&apos;s make something amazing together.
                </p>
                <p className="pt-4 text-slate-600">
                  — <strong>AJ Fleitz</strong><br />
                  Owner, Fleitz Family Tile
                </p>
              </section>
            </div>

            <div className="pt-8">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition hover:text-slate-900"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
                Back to Blog
              </Link>
            </div>
          </Container>
        </div>
      </article>

      <QuoteCtaSection />
    </>
  );
}

