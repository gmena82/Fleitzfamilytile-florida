import { ContentGrid } from "@/components/sections/content-grid";
import { PageHeader } from "@/components/sections/page-header";
import { QuoteCtaSection } from "@/components/sections/quote-cta";

const buyerSupport = [
  {
    title: "Design studio access",
    description:
      "Schedule a private design appointment to review curated palettes, trending formats, and performance-driven materials."
  },
  {
    title: "Budget and upgrade guidance",
    description:
      "Compare good, better, best options with transparent pricing so you can invest where it matters most."
  },
  {
    title: "Installation readiness",
    description:
      "We coordinate with your builder or remodeler to confirm measurements, lead times, and on-site requirements."
  },
  {
    title: "Aftercare resources",
    description: "Take home grout and sealer recommendations along with cleaning guides tailored to your tile selections."
  }
];

export default function BuyersPage() {
  return (
    <>
      <PageHeader
        eyebrow="Homeowners & buyers"
        title="Guided tile selections to personalize your new home."
        description="From your first showroom visit to final walkthrough, we make the selection and installation journey simple and inspiring."
      />
      <ContentGrid sections={buyerSupport} />
      <QuoteCtaSection />
    </>
  );
}
