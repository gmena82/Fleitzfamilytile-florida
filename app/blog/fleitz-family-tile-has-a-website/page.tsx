import Image from "next/image";
import Script from "next/script";
import type { Metadata } from "next";

import { QuoteCtaSection } from "@/components/sections/quote-cta";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/config/site";

const publishedDate = "2025-10-09";

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Fleitz Family Tile Has a Website!",
  datePublished: publishedDate,
  dateModified: publishedDate,
  image: [`${siteConfig.url}/images/Blog/Bathroom-AJ-Long.png`],
  url: `${siteConfig.url}/blog/fleitz-family-tile-has-a-website`,
  publisher: { "@id": `${siteConfig.url}/#org` },
};

export const metadata: Metadata = {
  title: "Fleitz Family Tile Has a Website! | Bradenton Tile Installers",
  description:
    "Celebrate the launch of FleitzFamilyTile.com—our new digital home featuring project photos, tile education, and fast quotes for Bradenton and Sarasota homeowners.",
  alternates: {
    canonical: "https://www.fleitzfamilytile.com/blog/fleitz-family-tile-has-a-website",
  },
  openGraph: {
    type: "article",
    url: "https://www.fleitzfamilytile.com/blog/fleitz-family-tile-has-a-website",
    title: "Fleitz Family Tile Has a Website!",
    description:
      "See how our new website showcases generations of tile craftsmanship and makes it easier to collaborate with our Bradenton team.",
    publishedTime: "2025-10-09T00:00:00-04:00",
    modifiedTime: "2025-10-09T00:00:00-04:00",
    images: [
      {
        url: "https://www.fleitzfamilytile.com/images/Blog/Bathroom-AJ-Long.png",
        width: 1600,
        height: 900,
        alt: "Custom tile shower installed by Fleitz Family Tile in Florida",
      },
    ],
  },
};

export default function FleitzFamilyTileHasAWebsitePage() {
  return (
    <>
      <Script id="fleitz-family-tile-has-a-website" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />

      <article className="bg-white">
        <header className="bg-slate-900 py-20 text-white">
          <Container className="space-y-6 text-center md:text-left">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-300">Company News</p>
            <h1 className="text-3xl font-semibold sm:text-4xl">Fleitz Family Tile Has a Website!</h1>
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">October 9, 2025</p>
            <p className="mx-auto max-w-3xl text-sm leading-relaxed text-slate-200 md:mx-0">
              After decades of building stunning tile installations across Florida&apos;s Suncoast, our family finally has a digital home where you can explore projects, request quotes, and learn from our third-generation pros.
            </p>
          </Container>
        </header>

        <div className="bg-slate-50">
          <Container className="-mt-16 space-y-12 pb-16">
            <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-lg">
              <Image
                src="/images/Blog/Bathroom-AJ-Long.png"
                alt="Custom tile shower featuring marble-look walls installed by Fleitz Family Tile"
                width={1600}
                height={1066}
                className="h-full w-full object-cover"
                priority
              />
            </div>

            <div className="space-y-10 text-base leading-relaxed text-slate-700">
              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-slate-900">A New Digital Home for an Old-School Craft</h2>
                <p>
                  After decades of perfecting tile work one backsplash, shower, and pool deck at a time, we finally have a place on the web to call home. Fleitz Family Tile started with nothing but a masonry trowel, a pickup truck, and an unwavering belief that hard work and honest craftsmanship could build a life. Today, we&apos;re thrilled to unveil FleitzFamilyTile.com—a showcase of the artistry passed down from our grandfather, to our dad, and now to us.
                </p>
                <p>
                  Why is a website such a big deal? Because tile is visual. The color variations, the crisp miters, the symmetry of grout lines—photos capture what words can&apos;t. Until now, Florida homeowners had to rely on word-of-mouth or spot us on a jobsite to see our work. With this launch, anyone from Sarasota to Siesta Key can explore our portfolio in a few clicks, compare styles, and imagine what a custom installation will look like in their own home.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-slate-900">What You’ll Find on the New Site</h2>
                <p>
                  We built the site to make it easier for homeowners, designers, and builders to collaborate with our crew. Here&apos;s what you can explore today:
                </p>
                <ul className="list-disc space-y-2 pl-5">
                  <li>
                    <strong>Service Pages:</strong> Clear explanations of our design-consultation process, waterproofing systems (we&apos;re Schluter-KERDI pros), and how we achieve perfectly level floors with no lippage.
                  </li>
                  <li>
                    <strong>Blog &amp; Guides:</strong> Starting with this post, we&apos;ll publish tips on choosing tile, maintenance hacks for Florida&apos;s humidity, and trend spotlights.
                  </li>
                  <li>
                    <strong>Easy Quotes:</strong> A streamlined form lets you request a quote in minutes; no phone tag needed.
                  </li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-slate-900">Why We’re Excited—And Why You Should Be Too</h2>
                <ul className="list-disc space-y-2 pl-5">
                  <li>
                    <strong>Transparency:</strong> You can see real photos of our craftsmanship before making a single phone call.
                  </li>
                  <li>
                    <strong>Education:</strong> Our blog will break down topics like porcelain vs. natural stone, grout sealing, and why correct substrate prep is non-negotiable.
                  </li>
                  <li>
                    <strong>Community:</strong> We love Florida&apos;s Suncoast and believe great tile work can elevate the beauty and value of every home here.
                  </li>
                  <li>
                    <strong>Legacy:</strong> This site is our way of honoring the techniques our grandfather taught us—methods that stand up to salty air, hurricane season, and everyday family life.
                  </li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-slate-900">Generations of Craftsmanship Meet Florida Style</h2>
                <p>
                  Florida architecture is diverse—Spanish Colonial in Bradenton, coastal modern in Sarasota, and Old Florida charm on Anna Maria Island. Our family has tiled through every shift in style, learning how to mix traditional skills with modern materials. We still back-butter large-format tiles by hand, but we also laser-level floors and use digital layout tools to deliver flawless patterns.
                </p>
                <p>
                  Those practices come from decades of hard-earned lessons: measuring twice, cutting once, and respecting the client&apos;s home like it&apos;s our own. Bringing that ethos online gives us a chance to share the stories behind each project—the late-night grout cures, the custom-cut marble niches, and the smiles when homeowners first see their finished space.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-slate-900">Looking Ahead</h2>
                <p>
                  Launching a website isn&apos;t the finish line; it&apos;s the starting block. Over the next year we plan to:
                </p>
                <ul className="list-disc space-y-2 pl-5">
                  <li>Publish monthly project spotlights featuring before-and-after photos.</li>
                  <li>Interview Florida interior designers about emerging tile trends, from zellige to terrazzo.</li>
                  <li>Create how-to videos on cleaning and maintenance (subscribe to our upcoming YouTube channel for step-by-step guides).</li>
                  <li>Host community workshops in Bradenton and Sarasota where homeowners can handle different tile samples and learn about installation best practices.</li>
                </ul>
                <p>
                  If there&apos;s a topic you&apos;d like covered—design, durability, sustainability—drop a comment or send us an email. This blog is for you.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-slate-900">Let&apos;s Work Together</h2>
                <p>
                  Ready to transform your kitchen, bathroom, or patio? Visit our Contact page and request a free, no-obligation quote. Thank you for welcoming Fleitz Family Tile into your browsers and your homes. We can&apos;t wait to keep sharing the craft, the stories, and—most of all—the beautiful spaces we create together.
                </p>
              </section>
            </div>
          </Container>
        </div>
      </article>

      <QuoteCtaSection />
    </>
  );
}

