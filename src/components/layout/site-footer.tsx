import Link from "next/link";
import { Mail, MapPin, Phone, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

import { Logo } from "@/components/ui/logo";
import { navigation } from "@/config/navigation";
import { siteConfig } from "@/config/site";

const socialIcons = {
  facebook: Facebook,
  x: Twitter,
  instagram: Instagram,
  youtube: Youtube
} as const;

export function SiteFooter() {
  const currentYear = new Date().getFullYear();
  const phoneNumber = siteConfig.contact.phone;
  const phoneDigits = phoneNumber.replace(/[^\d+]/g, "");
  const phoneHref = phoneDigits ? `tel:${phoneDigits}` : undefined;
  const emailAddress = siteConfig.contact.email;
  const emailHref = emailAddress ? `mailto:${emailAddress}` : undefined;
  const addressLine2 = `${siteConfig.headquarters.city}, ${siteConfig.headquarters.state} ${siteConfig.headquarters.postalCode}`;

  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-200">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
          <div className="space-y-6">
            <Logo width={220} height={72} />
            <p className="max-w-md text-sm leading-relaxed text-slate-300">
              Fleitz Family Tile is Bradenton&apos;s trusted tile contractor delivering precision installations for kitchens,
              bathrooms, floors, and custom projects across Florida&apos;s Suncoast.
            </p>
            <div className="space-y-3 text-sm text-slate-300">
              <p className="flex items-start gap-3">
                <MapPin className="mt-1 h-4 w-4 flex-shrink-0" aria-hidden />
                <span>
                  {siteConfig.headquarters.street}
                  <br />
                  {addressLine2}
                </span>
              </p>
              {phoneNumber && (
                <p className="flex items-center gap-3">
                  <Phone className="h-4 w-4 flex-shrink-0" aria-hidden />
                  {phoneHref ? (
                    <a href={phoneHref} className="hover:text-white hover:underline">
                      {phoneNumber}
                    </a>
                  ) : (
                    <span>{phoneNumber}</span>
                  )}
                </p>
              )}
              {emailAddress && (
                <p className="flex items-center gap-3">
                  <Mail className="h-4 w-4 flex-shrink-0" aria-hidden />
                  {emailHref ? (
                    <a href={emailHref} className="hover:text-white hover:underline">
                      {emailAddress}
                    </a>
                  ) : (
                    <span>{emailAddress}</span>
                  )}
                </p>
              )}
              <p className="text-xs uppercase tracking-[0.3em] text-white">Licensed &amp; Insured</p>
            </div>
          </div>
          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-white">Quick Links</h3>
              <ul className="mt-4 space-y-3 text-sm text-slate-300">
                {navigation.services.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="transition hover:text-white">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-white">Service Areas</h3>
              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                {siteConfig.serviceAreas.map((area) => (
                  <li key={area}>{area}</li>
                ))}
              </ul>
              <div className="mt-6 space-y-3 text-sm text-slate-300">
                <p className="font-semibold text-white">Connect</p>
                <div className="flex items-center gap-3">
                  {Object.entries(siteConfig.socialLinks).map(([key, href]) => {
                    const Icon = socialIcons[key as keyof typeof socialIcons];

                    if (!Icon || !href) {
                      return null;
                    }

                    return (
                      <a
                        key={key}
                        href={href}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full border border-slate-700 p-2 text-slate-300 transition hover:border-white hover:text-white"
                        aria-label={key === "x" ? "Visit our X profile" : `Visit our ${key} profile`}
                      >
                        <Icon className="h-4 w-4" aria-hidden />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-4 border-t border-slate-800 pt-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {currentYear} Fleitz Family Tile. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-4 text-xs uppercase tracking-[0.3em] text-slate-500">
            <span>Free Estimates</span>
            <span>Licensed &amp; Insured</span>
            <span>Workmanship Warranty</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
