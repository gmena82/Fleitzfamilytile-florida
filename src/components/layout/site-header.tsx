import Link from "next/link";

import { Instagram } from "lucide-react";

import { navigation } from "@/config/navigation";
import type { MainNavItem, ServiceLink } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { Logo } from "@/components/ui/logo";

const socialIcons = [{ key: "instagram", label: "Instagram", Icon: Instagram }] as const;

type NavigationItem = MainNavItem;
type NavigationParent = MainNavItem & { items: readonly ServiceLink[] };

function hasChildren(item: NavigationItem): item is NavigationParent {
  return "items" in item && Array.isArray(item.items) && item.items.length > 0;
}

export function SiteHeader() {
  const phoneNumber = siteConfig.contact.phone;
  const phoneDigits = phoneNumber.replace(/[^\d+]/g, "");
  const phoneHref = phoneDigits ? `tel:${phoneDigits}` : undefined;
  const emailAddress = siteConfig.contact.email;
  const emailHref = emailAddress ? `mailto:${emailAddress}` : undefined;

  return (
    <header id="site-header" className="relative z-50 border-b border-slate-200 bg-white text-slate-900">
      <div className="utility border-b border-slate-200 bg-slate-900 text-xs font-semibold uppercase tracking-[0.3em] text-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-2 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-4 text-[0.65rem] sm:text-[0.7rem]">
            <span>Bradenton, FL</span>
            {phoneNumber && (
              phoneHref ? (
                <a href={phoneHref} className="tracking-normal underline-offset-4 hover:underline">
                  {phoneNumber}
                </a>
              ) : (
                <span className="tracking-normal">{phoneNumber}</span>
              )
            )}
            {emailAddress && (
              emailHref ? (
                <a href={emailHref} className="tracking-normal underline-offset-4 hover:underline">
                  {emailAddress}
                </a>
              ) : (
                <span className="tracking-normal">{emailAddress}</span>
              )
            )}
          </div>
          <div className="flex items-center gap-3">
            {socialIcons.map((icon) => {
              const href = siteConfig.socialLinks[icon.key];
              const Icon = icon.Icon;

              if (!href) {
                return null;
              }

              return (
                <a
                  key={icon.key}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-white transition hover:text-white"
                >
                  <span className="sr-only">{`Visit our ${icon.label} profile`}</span>
                  <Icon aria-hidden className="h-4 w-4" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
      <div className="nav">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-6 sm:px-6 lg:px-8">
          <Logo className="logo inline-flex items-center" width={100} height={32} variant="header" priority />
          <nav aria-label="Main navigation">
            <ul className="hidden items-center gap-6 text-sm font-semibold text-slate-700 lg:flex">
              {navigation.main.map((item) => {
                if (hasChildren(item)) {
                  return (
                    <li key={item.label} className="has-children group relative">
                      <Link
                        href={item.href}
                        className="inline-flex items-center gap-1 rounded-full px-3 py-2 transition hover:bg-slate-100 hover:text-slate-900"
                      >
                        {item.label}
                      </Link>
                      <div className="dropdown absolute left-0 top-full z-50 hidden w-56 pt-3 group-hover:block group-focus-within:block">
                        <ul className="w-full space-y-1 rounded-2xl border border-slate-200 bg-white p-3 text-sm text-slate-600 shadow-xl">
                          {item.items.map((service) => (
                            <li key={service.href}>
                              <Link
                                href={service.href}
                                className="flex items-center justify-between rounded-xl px-3 py-2 font-medium transition hover:bg-slate-100 hover:text-slate-900"
                              >
                                {service.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </li>
                  );
                }

                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="rounded-full px-3 py-2 transition hover:bg-slate-100 hover:text-slate-900"
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          <a
            className="btn btn-primary hidden rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700 lg:inline-flex"
            href="#cta-form"
          >
            Request a Quote
          </a>
        </div>
      </div>
    </header>
  );
}
