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
    <footer id="site-footer" className="border-t border-gray-200 bg-slate-950 text-slate-200">
      <div className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6">
        <div className="footer-cols grid gap-12 lg:grid-cols-4">
          <div>
            <Logo width={100} height={32} variant="footer" />
            <p className="mt-4 text-sm leading-relaxed text-slate-300">
              Professional tile installation in Bradenton with projects across Sarasota &amp; Lakewood Ranch. Expert craftsmanship
              for kitchens, bathrooms, floors &amp; fireplaces.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a
                href={siteConfig.socialLinks.instagram}
                target="_blank"
                rel="noreferrer"
                className="group flex size-10 items-center justify-center rounded-full border border-slate-800 transition-colors hover:border-slate-700 hover:bg-slate-900"
                aria-label="Instagram"
              >
                <svg className="size-5 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6" viewBox="0 0 24 24" aria-hidden>
                  <path
                    fill="currentColor"
                    d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm0 2a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H7zm10.5 1.75a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0zM12 7a5 5 0 110 10 5 5 0 010-10z"
                  />
                </svg>
              </a>
            </div>
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
