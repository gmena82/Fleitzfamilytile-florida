"use client";

import Link from "next/link";
import { Menu, Mail, Phone } from "lucide-react";

import { Logo } from "@/components/ui/logo";
import { navigation } from "@/config/navigation";
import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { siteConfig } from "@/config/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white">
      <div className="hidden bg-slate-900 text-xs text-white sm:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-2">
              <Phone className="h-3.5 w-3.5" aria-hidden />
              <a href={`tel:${siteConfig.contact.phone.replace(/[^\d+]/g, "")}`} className="hover:underline">
                {siteConfig.contact.phone}
              </a>
            </span>
            <span className="inline-flex items-center gap-2">
              <Mail className="h-3.5 w-3.5" aria-hidden />
              <a href={`mailto:${siteConfig.contact.email}`} className="hover:underline">
                {siteConfig.contact.email}
              </a>
            </span>
          </div>
          <span className="hidden md:block">Serving Bradenton, Sarasota, and surrounding Gulf Coast communities.</span>
        </div>
      </div>
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex lg:flex-1">
          <Logo width={180} height={60} />
        </div>

        <nav className="hidden items-center gap-8 text-sm font-semibold text-slate-600 lg:flex">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-slate-900">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center justify-end gap-4 lg:flex-1">
          <Link
            href="/contact"
            className="hidden rounded-full bg-slate-900 px-6 py-2 text-sm font-semibold text-white transition hover:bg-slate-700 sm:inline-flex"
          >
            Schedule Consultation
          </Link>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="lg:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="space-y-6 pt-6">
                <div className="space-y-2 text-sm text-slate-600">
                  <p className="font-semibold text-slate-900">Contact</p>
                  <a href={`tel:${siteConfig.contact.phone.replace(/[^\d+]/g, "")}`} className="block">
                    {siteConfig.contact.phone}
                  </a>
                  <a href={`mailto:${siteConfig.contact.email}`} className="block">
                    {siteConfig.contact.email}
                  </a>
                </div>
                <nav className="grid gap-4">
                  {navigation.map((item) => (
                    <SheetClose key={item.href} asChild>
                      <Link
                        href={item.href}
                        className="text-base font-medium text-slate-600 transition hover:text-slate-900"
                      >
                        {item.label}
                      </Link>
                    </SheetClose>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
