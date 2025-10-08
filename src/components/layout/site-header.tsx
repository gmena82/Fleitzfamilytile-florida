"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Menu,
  Phone,
  Twitter,
  Youtube,
  ChevronDown
} from "lucide-react";

import { Logo } from "@/components/ui/logo";
import { navigation } from "@/config/navigation";
import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { siteConfig } from "@/config/site";

const socialIcons = {
  facebook: Facebook,
  x: Twitter,
  instagram: Instagram,
  youtube: Youtube
} as const;

export function SiteHeader() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const servicesMenuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsServicesOpen(false);
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  const phoneNumber = siteConfig.contact.phone;
  const phoneDigits = phoneNumber.replace(/[^\d+]/g, "");
  const phoneHref = phoneDigits ? `tel:${phoneDigits}` : undefined;
  const emailAddress = siteConfig.contact.email;
  const emailHref = emailAddress ? `mailto:${emailAddress}` : undefined;
  const locationLabel = `${siteConfig.headquarters.city}, ${siteConfig.headquarters.state}`;

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white shadow-sm">
      <div className="bg-slate-900 text-[0.7rem] font-medium text-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-2 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-4">
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-3.5 w-3.5" aria-hidden />
              <span>{locationLabel}</span>
            </span>
            {phoneNumber && (
              <span className="inline-flex items-center gap-2">
                <Phone className="h-3.5 w-3.5" aria-hidden />
                {phoneHref ? (
                  <a href={phoneHref} className="hover:underline">
                    {phoneNumber}
                  </a>
                ) : (
                  <span>{phoneNumber}</span>
                )}
              </span>
            )}
            {emailAddress && (
              <span className="inline-flex items-center gap-2">
                <Mail className="h-3.5 w-3.5" aria-hidden />
                {emailHref ? (
                  <a href={emailHref} className="hover:underline">
                    {emailAddress}
                  </a>
                ) : (
                  <span>{emailAddress}</span>
                )}
              </span>
            )}
          </div>
          <div className="flex items-center gap-3 text-white/80">
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
                  className="transition hover:text-white"
                  aria-label={key === "x" ? "Visit our X profile" : `Visit our ${key} profile`}
                >
                  <Icon className="h-4 w-4" aria-hidden />
                </a>
              );
            })}
          </div>
        </div>
      </div>
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex lg:flex-1">
          <Logo width={200} height={64} />
        </div>

        <nav className="hidden items-center gap-8 text-sm font-semibold text-slate-600 lg:flex">
          {navigation.main.map((item) => {
            if ("items" in item && item.items) {
              return (
                <div
                  key={item.label}
                  ref={servicesMenuRef}
                  className="relative"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                  onFocus={() => setIsServicesOpen(true)}
                  onBlur={() => {
                    requestAnimationFrame(() => {
                      if (
                        servicesMenuRef.current &&
                        document.activeElement &&
                        !servicesMenuRef.current.contains(document.activeElement)
                      ) {
                        setIsServicesOpen(false);
                      }
                    });
                  }}
                >
                  <button
                    type="button"
                    className="inline-flex items-center gap-1 rounded-full px-3 py-2 text-sm font-semibold text-slate-600 transition hover:text-slate-900"
                    aria-haspopup="true"
                    aria-expanded={isServicesOpen}
                    onClick={() => setIsServicesOpen((prev) => !prev)}
                  >
                    {item.label}
                    <ChevronDown className="h-4 w-4" aria-hidden />
                  </button>
                  <div
                    className={`absolute left-0 top-full mt-3 w-64 rounded-2xl border border-slate-200 bg-white p-3 shadow-xl transition ${
                      isServicesOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
                    }`}
                  >
                    <ul className="space-y-1 text-sm text-slate-600">
                      {item.items.map((service) => (
                        <li key={service.href}>
                          <Link
                            href={service.href}
                            className="flex items-center justify-between rounded-xl px-3 py-2 font-medium transition hover:bg-slate-100 hover:text-slate-900"
                            onClick={() => setIsServicesOpen(false)}
                          >
                            <span>{service.label}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            }

            return (
              <Link key={item.href} href={item.href} className="transition hover:text-slate-900">
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center justify-end gap-4 lg:flex-1">
          <Link
            href="/#cta-form"
            className="hidden rounded-full bg-slate-900 px-6 py-2 text-sm font-semibold text-white transition hover:bg-slate-700 sm:inline-flex"
          >
            Request a Quote
          </Link>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="lg:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="flex flex-col gap-8 overflow-y-auto">
              <div className="space-y-3 text-sm text-slate-600">
                <p className="font-semibold text-slate-900">Contact</p>
                {phoneNumber && (
                  phoneHref ? (
                    <a href={phoneHref} className="block">
                      {phoneNumber}
                    </a>
                  ) : (
                    <span className="block">{phoneNumber}</span>
                  )
                )}
                {emailAddress && (
                  emailHref ? (
                    <a href={emailHref} className="block">
                      {emailAddress}
                    </a>
                  ) : (
                    <span className="block">{emailAddress}</span>
                  )
                )}
                <p>{locationLabel}</p>
              </div>
              <nav className="grid gap-4 text-base font-medium text-slate-700">
                {navigation.main.map((item) => {
                  if (item.items) {
                    return (
                      <div key={item.label} className="space-y-2">
                        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                          {item.label}
                        </span>
                        <div className="grid gap-2">
                          {item.items.map((service) => (
                            <SheetClose asChild key={service.href}>
                              <Link href={service.href} className="rounded-xl border border-slate-200 px-3 py-2 text-sm">
                                {service.label}
                              </Link>
                            </SheetClose>
                          ))}
                        </div>
                      </div>
                    );
                  }

                  return (
                    <SheetClose key={item.href} asChild>
                      <Link href={item.href} className="rounded-xl border border-slate-200 px-3 py-2">
                        {item.label}
                      </Link>
                    </SheetClose>
                  );
                })}
              </nav>
              <SheetClose asChild>
                <Link
                  href="/#cta-form"
                  className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white"
                >
                  Request a Quote
                </Link>
              </SheetClose>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
