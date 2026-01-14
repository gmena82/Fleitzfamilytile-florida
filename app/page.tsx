import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Star } from "lucide-react";

import { Container } from "@/components/ui/container";
import { siteConfig } from "@/config/site";
import { HomeCtaForm } from "@/components/sections/home-cta-form";

const heroBenefits = [
  "Clean prep, straight lines, and meticulous waterproofing.",
  "Flat, long-lasting finishes built for Florida humidity."
];

const services = [
  {
    title: "Kitchen Backsplash",
    description: "Custom backsplash layouts that protect walls and add Bradenton character to your kitchen.",
    href: "/kitchen-backsplashes",
    image: "/images/showroom/Kitchen-1.webp",
    cta: "View Kitchen Backsplash Options"
  },
  {
    title: "Bathroom & Shower",
    description: "Waterproofed showers, tubs, and bathroom remodels tailored to coastal living.",
    href: "/bathroom-shower",
    image: "/images/showroom/shower-tall-3.webp",
    cta: "Explore Bathroom Tile Solutions"
  },
  {
    title: "Floor Tile Installation",
    description: "Durable floor tile systems for main living areas, condos, and whole-home remodels.",
    href: "/floor-tile-installation",
    image: "/images/showroom/BG-5-F.png",
    cta: "See Flooring Installation Services"
  },
  {
    title: "Fireplaces",
    description: "Statement-making fireplace surrounds with heat-ready tile detailing.",
    href: "/fireplaces",
    image: "/images/showroom/Fireplace-Tall-1.webp",
    cta: "See Custom Fireplace Tile Surrounds"
  },
  {
    title: "Special Projects",
    description: "Custom mosaics, outdoor lanais, and unique requests executed with precision.",
    href: "/special-projects",
    image: "/images/showroom/Mirror-Backsplash.png",
    cta: "Discover Special Tile Projects"
  },
  {
    title: "Outside Projects",
    description: "Durable outdoor tile for lanais, patios, and pool decks built for Florida weather.",
    href: "/outside-projects",
    image: "/images/showroom/BG-9-F.png",
    cta: "Explore Outdoor Tile Options"
  }
] as const;

const showcaseProjects = [
  { name: "Spa Shower with Niches", image: "/images/showroom/shower-tall-1.webp" },
  { name: "Coastal Kitchen Backsplash", image: "/images/showroom/Kitchen-2.webp" },
  { name: "Wide-Plank Porcelain Flooring", image: "/images/showroom/BG-3-F.png" },
  { name: "Modern Fireplace Surround", image: "/images/showroom/Fireplace-Tall-1.webp" },
  { name: "Outdoor Lanai Refresh", image: "/images/showroom/BG-9-F.png" },
  { name: "Statement Mosaic Accent", image: "/images/showroom/Pebble-Tile.png" }
];

const testimonials = [
  {
    quote: "I was introduced to AJ Fleitz through a general contractor, who I hired to redo our Master bathroom. I was immediately impressed by AJ as we discussed the project and design, and it was clear that he had the level of experience and attention to detail I was hoping for...",
    name: "Paul",
    location: "Bradenton, FL"
  },
  {
    quote: "I had an excellent experience with Fleitz Family Tile and especially with Anthony the contractor. He and his team was professional, punctual, and delivered high-skill work that exceeded my expectations. From start to finish, Anthony communicated clearly, showed great attention to detail, and treated the project with the utmost care...",
    name: "Luiggi",
    location: "Sarasota, FL"
  },
  {
    quote: "AJ does great work with a great attitude. I have used him on over 8 bathrooms and 3 back splashes, and have always been satisfied! If you want quality work at a fair price, Fleitz Family Tile is the company to use!",
    name: "Hunter",
    location: "Lakewood Ranch, FL"
  }
];

const homeFaqs = [
  {
    question: "Do you provide free estimates in Bradenton?",
    answer: "Yes—share your project details and photos, and we'll schedule a site visit in Bradenton or nearby."
  },
  {
    question: "Are you licensed and insured in Florida?",
    answer: "Yes. We maintain appropriate licensing and insurance for residential tile work."
  },
  {
    question: "Do you handle demolition, prep, and cleanup?",
    answer: "Absolutely. We perform tidy demo, surface prep, and daily cleanup to protect your home."
  },
  {
    question: "What tile types do you install?",
    answer: "Porcelain, ceramic, natural stone, glass, and large-format panels—with guidance on grout, trims, and profiles."
  },
  {
    question: "Do you service Sarasota and Lakewood Ranch?",
    answer: "Yes—Bradenton first, with frequent projects in Sarasota and Lakewood Ranch."
  },
  {
    question: "How quickly can you start once we approve the estimate?",
    answer: "Most projects begin within 2–3 weeks. We lock in your dates after the proposal is signed and materials are confirmed."
  }
];

export const metadata: Metadata = {
  title: "Fleitz Family Tile | Bradenton Tile Installation & Bathroom Remodeling",
  description: "Bradenton's trusted tile installer. Fleitz Family Tile delivers premium bathroom & shower tile, kitchen backsplashes, and floor tile installation. Serving Sarasota & Lakewood Ranch. Free estimates.",
  alternates: {
    canonical: "https://www.fleitzfamilytile.com/"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: `${siteConfig.url}/`,
        name: siteConfig.name,
        publisher: { "@id": `${siteConfig.url}/#org` },
        inLanguage: "en-US"
      },
      {
        "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
        "@id": `${siteConfig.url}/#org`,
        name: siteConfig.name,
        url: `${siteConfig.url}/`,
        telephone: siteConfig.contact.phone,
        email: siteConfig.contact.email,
        address: {
          "@type": "PostalAddress",
          streetAddress: siteConfig.headquarters.street,
          addressLocality: siteConfig.headquarters.city,
          addressRegion: siteConfig.headquarters.state,
          postalCode: siteConfig.headquarters.postalCode,
          addressCountry: "US"
        },
        areaServed: [
          { "@type": "City", name: "Bradenton" },
          { "@type": "City", name: "Sarasota" },
          { "@type": "Place", name: "Lakewood Ranch" }
        ]
      }
    ]
  };

  return (
    <>
      <Script id="home-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero Section - Aesthetic Tile Style */}
      <section className="hero">
        <div className="hero-bg">
          <Image
            src="/images/showroom/BG-1-F.png"
            alt="Professional tile installation in Bradenton FL by Fleitz Family Tile"
            fill
            priority
            className="hero-image"
          />
          <div className="hero-overlay" />
        </div>
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">
              <span>Fleitz Family Tile</span>
              <span>•</span>
              <span>Bradenton & nearby</span>
            </div>
            <h1>Professional Tile Installation in Bradenton and Central Florida</h1>
            <p>
              Serving homeowners across Central Florida, including Bradenton, Sarasota, Lakewood Ranch, and the greater Gulf Coast area. As a local tile contractor and tile setter, we deliver expert bathroom remodeling and flooring installation using premium ceramic, porcelain, and natural stone.
            </p>
            <p>
              Detail-driven craftsmanship for kitchens, bathrooms, and whole-home flooring. Our team keeps job sites clean and delivers finishes that last, from robust waterproofing against humidity to durable flooring options tailored for Florida living.
            </p>
            <div className="hero-buttons">
              <Link href="/contact" className="btn-primary">
                Request a Quote
              </Link>
              <Link href="/gallery" className="btn-secondary">
                View Gallery
              </Link>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', fontSize: '0.875rem', color: 'rgba(255,255,255,0.9)', justifyContent: 'center' }}>
              <span>Five-star service</span>
              <span>•</span>
              <span>Detailed prep & clean finishes</span>
              <span>•</span>
              <span>Clear communication</span>
            </div>
          </div>
        </div>
        <div className="hero-bottom">
          Serving Bradenton, Sarasota, Lakewood Ranch, Palmetto & nearby Gulf communities
        </div>
      </section>

      {/* Video Section */}
      <section className="video-section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem', maxWidth: '48rem', margin: '0 auto 3rem' }}>
            <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.25rem)', fontWeight: '700', color: '#0f172a', marginBottom: '1rem', lineHeight: '1.2' }}>
              See Our Craftsmanship in Action
            </h2>
            <p style={{ fontSize: '1.125rem', color: '#64748b', lineHeight: '1.7' }}>
              Watch our expert tile installation process and attention to detail.
            </p>
          </div>
          <div className="video-wrapper">
            <iframe
              src="https://www.youtube.com/embed/Hll582-mC_4?rel=0"
              title="Fleitz Family Tile Showroom Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section style={{ background: 'white', padding: '5rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gap: '4rem', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))', alignItems: 'center' }}>
            <div style={{ position: 'relative', height: '28rem', borderRadius: '1rem', overflow: 'hidden', boxShadow: 'var(--shadow-xl)' }}>
              <Image
                src="/images/showroom/BG-3-F.png"
                alt="Tile flooring installation details in Bradenton FL"
                fill
                className="object-cover"
              />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem', padding: '0 1rem' }}>
              <div style={{ display: 'inline-block', padding: '0.375rem 1rem', background: '#f1f5f9', borderRadius: '9999px', fontSize: '0.6875rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.12em', color: '#64748b', alignSelf: 'flex-start' }}>
                Award-winning master craftsmen
              </div>
              <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.25rem)', fontWeight: '700', lineHeight: '1.15', color: '#0f172a', letterSpacing: '-0.01em' }}>
                We Are the Premier Tile Installation Company in Central Florida
              </h2>
              <p style={{ fontSize: '1.0625rem', lineHeight: '1.75', color: '#64748b' }}>
                Fleitz Family Tile specializes in professional tile installation for residential and commercial projects. With over three generations of experience, we lead the Bradenton area in craftsmanship and precision. From kitchen backsplashes to bathroom renovations, we set the standard in skill, preparation, and finishes that last.
              </p>
              <Link href="/about" className="btn-secondary transition-all hover:scale-105" style={{ color: '#0f172a', border: '1px solid #cbd5e1', alignSelf: 'flex-start', marginTop: '0.5rem' }}>
                About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section style={{ background: '#f8fafc', padding: '5rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem', maxWidth: '48rem', margin: '0 auto 3.5rem' }}>
            <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.25rem)', fontWeight: '700', color: '#0f172a', marginBottom: '1rem', lineHeight: '1.2' }}>
              Our Tile Services
            </h2>
            <p style={{ fontSize: '1.125rem', color: '#64748b', lineHeight: '1.7' }}>
              Backsplashes, showers, flooring, fireplaces, and specialty installations.
            </p>
          </div>

          <div style={{ display: 'grid', gap: '2rem', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))' }}>
            {services.map((service) => (
              <Link key={service.href} href={service.href} className="service-card">
                <div className="service-image">
                  <Image
                    src={service.image}
                    alt={`${service.title} installation in Bradenton FL by Fleitz Family Tile`}
                    fill
                    className="object-cover"
                  />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent, rgba(0,0,0,0.4))' }} />
                  <div style={{ position: 'absolute', bottom: '1rem', left: '1rem', right: '1rem', color: 'white', fontSize: '1.25rem', fontWeight: '700' }}>
                    {service.title}
                  </div>
                </div>
                <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <p style={{ fontSize: '0.875rem', lineHeight: '1.6', color: '#64748b', flex: 1 }}>{service.description}</p>
                  <div className="service-cta-link" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', fontWeight: '600', color: '#0f172a' }}>
                    <span>{service.cta}</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link href="/contact" className="btn-primary">
              Request a Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section style={{ background: 'white', padding: '5rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem', maxWidth: '48rem', margin: '0 auto 3.5rem' }}>
            <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.25rem)', fontWeight: '700', color: '#0f172a', lineHeight: '1.2' }}>
              What Homeowners Are Saying
            </h2>
          </div>
          <div style={{ display: 'grid', gap: '2rem', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))' }}>
            {testimonials.map((testimonial, idx) => (
              <article key={idx} className="testimonial-card group/card">
                <div className="stars transition-transform duration-300 group-hover/card:scale-110" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="inline h-4 w-4 fill-current transition-transform duration-300 group-hover/card:rotate-[15deg]" />
                  ))}
                </div>
                <p style={{ fontSize: '0.875rem', lineHeight: '1.6', color: '#475569' }}>{testimonial.quote}</p>
                <div style={{ marginTop: 'auto' }}>
                  <p style={{ fontSize: '0.875rem', fontWeight: '600', color: '#0f172a' }}>{testimonial.name}</p>
                  <p style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#94a3b8' }}>
                    {testimonial.location}
                  </p>
                </div>
              </article>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <a
              href="https://share.google/TrJL20wN7hgXn7bPD"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#0f172a', fontSize: '0.875rem', fontWeight: '600', textDecoration: 'underline', textUnderlineOffset: '4px' }}
            >
              Read More Reviews on Google
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-bg">
          <Image
            src="/images/showroom/BG-2.png"
            alt="Luxury kitchen tile backsplash installation"
            fill
            className="cta-bg-image"
          />
          <div className="cta-overlay" />
        </div>
        <div className="container">
          <div className="cta-content" style={{ display: 'grid', gap: '2.5rem', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', alignItems: 'start' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <h2 style={{ fontSize: '1.875rem', fontWeight: '700' }}>Ready to Transform Your Space?</h2>
              <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.9)' }}>
                Get a free estimate for your tile installation project. Professional craftsmanship, competitive pricing, and exceptional service guaranteed.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', fontSize: '0.75rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.8)' }}>
                <div className="group/item flex items-center gap-2 transition-colors hover:text-white" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <CheckCircle2 className="h-5 w-5 transition-transform duration-300 group-hover/item:scale-110" />
                  <span>Free Estimates</span>
                </div>
                <div className="group/item flex items-center gap-2 transition-colors hover:text-white" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <CheckCircle2 className="h-5 w-5 transition-transform duration-300 group-hover/item:scale-110" />
                  <span>Licensed & Insured</span>
                </div>
                <div className="group/item flex items-center gap-2 transition-colors hover:text-white" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <CheckCircle2 className="h-5 w-5 transition-transform duration-300 group-hover/item:scale-110" />
                  <span>Quality Guarantee</span>
                </div>
              </div>
            </div>
            <div>
              <HomeCtaForm />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{ background: 'white', padding: '5rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem', maxWidth: '48rem', margin: '0 auto 3.5rem' }}>
            <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.25rem)', fontWeight: '700', color: '#0f172a', marginBottom: '1rem', lineHeight: '1.2' }}>
              Frequently Asked Questions
            </h2>
            <p style={{ fontSize: '1.125rem', color: '#64748b', lineHeight: '1.7' }}>
              Get answers to common tile installation questions from Bradenton homeowners.
            </p>
          </div>
          <div style={{ display: 'grid', gap: '1.75rem', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))', maxWidth: '72rem', margin: '0 auto' }}>
            {homeFaqs.map((faq) => (
              <div key={faq.question} className="faq-item">
                <h3 style={{ fontSize: '1rem', fontWeight: '600', color: '#0f172a', marginBottom: '0.75rem' }}>
                  {faq.question}
                </h3>
                <p style={{ fontSize: '0.875rem', lineHeight: '1.6', color: '#64748b' }}>
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
