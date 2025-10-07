"use client";

import Link from "next/link";
import { Menu, Phone } from "lucide-react";
import { useState } from "react";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Container } from "../ui/container";

const navigation = [
  { href: "/services", label: "Services" },
  { href: "/buyers", label: "Buyers" },
  { href: "/marketplace", label: "Marketplace" },
  { href: "/resources", label: "Resources" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/blog", label: "Blog" }
];

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const phoneHref = siteConfig.contact.phone.replace(/[^\d+]/g, "");

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3">
          <span className="h-10 w-10 rounded-full bg-slate-900 text-white grid place-items-center text-sm font-semibold">
            FF
          </span>
          <div>
            <span className="block text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Fleitz Family Tile
            </span>
            <span className="text-xs text-slate-400">Curated Surfaces & Installation</span>
          </div>
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 lg:flex">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-slate-900">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-4 lg:flex">
          <Link href={`tel:${phoneHref}`} className="flex items-center gap-2 text-sm font-semibold text-slate-900">
            <Phone className="h-4 w-4" />
            <span>{siteConfig.contact.phone}</span>
          </Link>
          <Link
            href="/contact"
            className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-700"
          >
            Book Consultation
          </Link>
        </div>
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-600 lg:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          <Menu className="h-5 w-5" />
        </button>
      </Container>
      <div
        className={cn(
          "lg:hidden",
          isOpen ? "block border-t border-slate-200 bg-white" : "hidden"
        )}
      >
        <Container className="flex flex-col gap-4 py-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-base font-medium text-slate-600"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link href={`tel:${phoneHref}`} className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900">
            <Phone className="h-4 w-4" />
            <span>{siteConfig.contact.phone}</span>
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white"
            onClick={() => setIsOpen(false)}
          >
            Book Consultation
          </Link>
        </Container>
      </div>
    </header>
  );
}
