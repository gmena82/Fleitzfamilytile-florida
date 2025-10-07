import { ContentGrid } from "@/components/sections/content-grid";
import { PageHeader } from "@/components/sections/page-header";

const services = [
  {
    title: "Residential transformations",
    description:
      "Tailored tile packages for kitchens, baths, main flooring, and outdoor living spaces with an emphasis on lasting performance.",
    bullets: [
      "Design consultations and 3D concept support",
      "Waterproofing and heated-floor solutions",
      "Dedicated project managers for remodels"
    ]
  },
  {
    title: "Custom builder program",
    description:
      "Surface packages engineered for production and semi-custom builders seeking reliable schedules and standout model homes.",
    bullets: [
      "Specification documentation and takeoffs",
      "Model merchandising and buyer upgrade paths",
      "Trade coordination and punch services"
    ]
  },
  {
    title: "Commercial environments",
    description:
      "Tile sourcing and installation for lobbies, amenities, restaurants, medical suites, and hospitality properties across Florida.",
    bullets: [
      "Large-format porcelain slab handling",
      "Slip-resistant and antimicrobial selections",
      "Night and phased installation options"
    ]
  },
  {
    title: "Specialty fabrication",
    description:
      "Custom mosaics, feature walls, fireplace surrounds, and waterline details fabricated in-house for a precise fit on-site.",
    bullets: [
      "Waterjet cutting and pattern layout",
      "Edge profiling and miters",
      "Sample boards and finish mockups"
    ]
  }
];

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="White-glove tile services for homes, builders, and commercial spaces."
        description="Bring your designs to life with a showroom stocked for inspiration and field crews equipped for excellence."
      />
      <ContentGrid sections={services} />
    </>
  );
}
