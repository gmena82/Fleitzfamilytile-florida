import { CtaSection } from "@/components/sections/cta";
import { FaqSection } from "@/components/sections/faq";
import { HeroSection } from "@/components/sections/hero";
import { ProcessSection } from "@/components/sections/process";
import { ServiceGallery } from "@/components/sections/service-gallery";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { ValuePropsSection } from "@/components/sections/value-props";
import { siteConfig } from "@/config/site";

const serviceCategories = [
  {
    title: "Luxury Residential",
    description: "Complete surface packages for kitchens, baths, outdoor living, and specialty rooms.",
    bullets: [
      "Porcelain & ceramic flooring systems",
      "Waterproof shower assemblies",
      "Pool & lanai tile upgrades"
    ]
  },
  {
    title: "Design Studio",
    description: "Collaborate with our design consultants to craft palettes tailored to your architecture.",
    bullets: [
      "Private slab-viewing appointments",
      "Custom mosaic design",
      "Material sampling & take-home boards"
    ]
  },
  {
    title: "Commercial & Trade",
    description: "Dedicated project management for hospitality, multifamily, and custom builder partners.",
    bullets: [
      "Specification support",
      "Logistics & warehousing",
      "Site coordination & punch services"
    ]
  }
];

const valueProps = [
  {
    title: "Curated Showroom Experience",
    description: "Navigate hundreds of surface options organized by style, color story, and performance—all guided by a seasoned design team."
  },
  {
    title: "Licensed Installation Teams",
    description: "Our tile artisans deliver meticulous installation, waterproofing, and finishing to meet Florida building standards."
  },
  {
    title: "Builder & Designer Partnerships",
    description: "We integrate with your construction schedules, provide detailed takeoffs, and communicate proactively with trade partners."
  },
  {
    title: "Concierge Project Support",
    description: "Expect proactive updates, transparent pricing, and a dedicated point of contact from ordering through final walkthrough."
  }
];

const processSteps = [
  {
    step: "Step 01",
    title: "Vision & discovery",
    description: "We map out your goals, architectural style, and investment level, then assemble inspiration palettes tailored to the space."
  },
  {
    step: "Step 02",
    title: "Material curation",
    description: "Your consultant sources samples, secures lead times, and finalizes specifications with precise quantities."
  },
  {
    step: "Step 03",
    title: "Installation logistics",
    description: "Our project management team coordinates delivery windows, staging, and qualified installation crews."
  },
  {
    step: "Step 04",
    title: "Final detailing",
    description: "We finish with protective sealing, punch-list touchups, and handover documentation so you can enjoy the finished space."
  }
];

const testimonials = [
  {
    quote: "The design team narrowed hundreds of options into a cohesive plan that perfectly fit our waterfront home.",
    name: "Jordan & Casey L.",
    project: "Coastal renovation"
  },
  {
    quote: "Reliable communication and craftsmanship—we trust them with every model home we build in the region.",
    name: "Harborline Developments",
    project: "Builder partnership"
  },
  {
    quote: "Installation was meticulous down to the last mosaic. Our spa clients rave about the finished space.",
    name: "Solstice Wellness",
    project: "Commercial spa"
  }
];

export default function HomePage() {
  return (
    <>
      <HeroSection
        eyebrow="Florida's Tile Authority"
        title="Showroom design and expert installation for elevated surfaces."
        description="Fleitz Family Tile pairs curated materials with precision installation for homeowners, designers, and builders seeking statement-worthy floors, walls, and outdoor living in Florida."
        primaryCta={{ href: "/contact", label: "Schedule a consultation" }}
        secondaryCta={{ href: "/marketplace", label: "Browse surfaces" }}
      />
      <ValuePropsSection
        title="From product selection to white-glove installation, our team handles every layer of your tile project."
        description="We pair a design-forward showroom with a veteran field team so you can confidently transform kitchens, baths, and outdoor spaces with timeless materials."
        items={valueProps}
      />
      <ServiceGallery categories={serviceCategories} />
      <ProcessSection steps={processSteps} />
      <TestimonialsSection testimonials={testimonials} />
      <FaqSection />
      <CtaSection
        title="Let's design a surface story unique to your home."
        description="Book a complimentary consultation at our Florida showroom or virtual appointment to explore collections, review budgets, and align on timelines."
        primaryCta={{ href: "/contact", label: "Request consultation" }}
        secondaryCta={{ href: `tel:${siteConfig.contact.phone.replace(/[^\d+]/g, "")}`, label: "Call the showroom" }}
      />
    </>
  );
}
