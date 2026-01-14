import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

import { Container } from "../ui/container";
import { HomeCtaForm } from "./home-cta-form";

interface QuoteCtaSectionProps {
  sectionId?: string;
  backgroundImage?: string;
}

const CTA_FEATURES = ["Free Estimates", "Licensed & Insured", "Quality Guarantee"];

export function QuoteCtaSection({ 
  sectionId = "cta-form",
  backgroundImage = "/images/showroom/BG-2.png"
}: QuoteCtaSectionProps) {
  return (
    <section id={sectionId} className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt="Tile installation background"
          fill
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 to-slate-800/85" />
      </div>
      <Container className="relative py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="space-y-6 text-white">
            <h2 className="text-3xl font-semibold">Ready to Transform Your Space?</h2>
            <p className="text-base leading-7 text-white/80">
              Get a free estimate for your tile installation project. Professional craftsmanship, competitive pricing, and exceptional service guaranteed.
            </p>
            <div className="space-y-3">
              {CTA_FEATURES.map((feature) => (
                <div key={feature} className="group/item flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-white/80 transition-transform duration-300 group-hover/item:scale-110 group-hover/item:text-white" />
                  <span className="text-sm font-semibold text-white/90 transition-colors duration-300 group-hover/item:text-white">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          <HomeCtaForm />
        </div>
      </Container>
    </section>
  );
}
