import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

import { Logo } from "@/components/ui/logo";
import { navigation } from "@/config/navigation";
import { siteConfig } from "@/config/site";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-slate-900 text-slate-100">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1fr)]">
          <div className="space-y-6">
            <Logo width={200} height={70} />
            <p className="max-w-sm text-sm text-slate-300">
              Fleitz Family Tile delivers showroom guidance and expert installation for homes and businesses throughout the Gulf Coast.
            </p>
            <div className="space-y-3 text-sm text-slate-300">
              <p className="flex items-start gap-2">
                <MapPin className="mt-1 h-4 w-4" aria-hidden />
                <span>
                  {siteConfig.locations[0]?.address}
                  <br />
                  {siteConfig.locations[0]?.city}
                </span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4" aria-hidden />
                <a href={`tel:${siteConfig.contact.phone.replace(/[^\d+]/g, "")}`} className="hover:underline">
                  {siteConfig.contact.phone}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4" aria-hidden />
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:underline">
                  {siteConfig.contact.email}
                </a>
              </p>
            </div>
          </div>
          <div className="grid gap-12 sm:grid-cols-2">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-white">Navigation</h3>
              <ul className="mt-4 space-y-3 text-sm text-slate-300">
                {navigation.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className="transition hover:text-white">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-white">Showroom Hours</h3>
              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                <li>{siteConfig.hours.weekdays}</li>
                <li>{siteConfig.hours.saturday}</li>
                <li>{siteConfig.hours.sunday}</li>
              </ul>
              <p className="mt-6 text-sm text-slate-300">
                Proudly serving Bradenton, Sarasota, Lakewood Ranch, and the Greater Tampa Bay region.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-700 pt-8 text-sm text-slate-400">
          <p>&copy; {currentYear} Fleitz Family Tile. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
