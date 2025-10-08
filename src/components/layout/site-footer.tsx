import Link from "next/link";

import { navigation } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { Logo } from "@/components/ui/logo";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();
  const phoneNumber = siteConfig.contact.phone;
  const phoneDigits = phoneNumber.replace(/[^\d+]/g, "");
  const phoneHref = phoneDigits ? `tel:${phoneDigits}` : undefined;
  const emailAddress = siteConfig.contact.email;
  const emailHref = emailAddress ? `mailto:${emailAddress}` : undefined;

  return (
    <footer id="site-footer" className="border-t border-slate-200 bg-slate-950 text-slate-200">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="footer-cols grid gap-12 lg:grid-cols-4">
          <div className="space-y-4">
            <Logo width={200} height={64} variant="footer" />
            <p className="text-sm leading-relaxed text-slate-300">
              Professional tile installation in Bradenton with projects across Sarasota &amp; Lakewood Ranch. Expert craftsmanship
              for kitchens, bathrooms, floors &amp; fireplaces.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-white">Services</h3>
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
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-white">Contact</h3>
            <p className="mt-4 space-y-1 text-sm text-slate-300">
              {phoneNumber && (
                <>
                  {phoneHref ? (
                    <a href={phoneHref} className="block transition hover:text-white">
                      {phoneNumber}
                    </a>
                  ) : (
                    <span className="block">{phoneNumber}</span>
                  )}
                </>
              )}
              {emailAddress && (
                <>
                  {emailHref ? (
                    <a href={emailHref} className="block transition hover:text-white">
                      {emailAddress}
                    </a>
                  ) : (
                    <span className="block">{emailAddress}</span>
                  )}
                </>
              )}
              <span className="block">Bradenton, FL {siteConfig.headquarters.postalCode}</span>
            </p>
          </div>
        </div>
        <p className="mt-12 text-center text-xs uppercase tracking-[0.3em] text-slate-500">
          © {currentYear} Fleitz Family Tile. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
