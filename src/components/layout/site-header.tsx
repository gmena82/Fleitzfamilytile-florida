"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { navigation, serviceLinks } from "@/config/navigation"
import { siteConfig } from "@/config/site"
import { useMobileMenu } from "@/hooks/useMobileMenu"
import { useScrollShadow } from "@/hooks/useScrollShadow"

const phoneLink = {
  href: "tel:5027140544",
  label: "(502) 714-0544",
  icon: (
    <svg className="size-4" viewBox="0 0 24 24" aria-hidden>
      <path
        fill="currentColor"
        d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V21a1 1 0 01-1 1C10.07 22 2 13.93 2 3a1 1 0 011-1h3.49a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.2 2.2z"
      />
    </svg>
  ),
}

const emailLink = {
  href: `mailto:${siteConfig.contact.email}`,
  label: siteConfig.contact.email,
  icon: (
    <svg className="size-4" viewBox="0 0 24 24" aria-hidden>
      <path
        fill="currentColor"
        d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 2v.01L12 13 4 6.01V6h16zM4 18V8.24l7.4 5.55a1 1 0 001.2 0L20 8.24V18H4z"
      />
    </svg>
  ),
}

const instagramLink = {
  href: siteConfig.socialLinks.instagram,
  label: "Instagram",
  icon: (
    <svg className="size-4" viewBox="0 0 24 24" aria-hidden>
      <path
        fill="currentColor"
        d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm0 2a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H7zm10.5 1.75a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0zM12 7a5 5 0 110 10 5 5 0 010-10z"
      />
    </svg>
  ),
}

export function SiteHeader() {
  const { isOpen: mobileOpen, toggle: toggleMobileMenu, close: closeMobileMenu } = useMobileMenu()
  const hasShadow = useScrollShadow()
  const pathname = usePathname()
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)

  useEffect(() => {
    setServicesDropdownOpen(false)
    setMobileServicesOpen(false)
  }, [pathname])

  useEffect(() => {
    if (!mobileOpen) {
      setMobileServicesOpen(false)
    }
  }, [mobileOpen])

  const servicePaths = serviceLinks.map((service) => service.href)
  const isLinkActive = (href: string) => {
    if (!pathname) return false
    if (href === "/") return pathname === "/"
    return pathname.startsWith(href)
  }
  const servicesActive = pathname ? servicePaths.some((path) => pathname.startsWith(path)) : false

  const navButtonBase =
    "relative inline-flex items-center gap-1 rounded-lg border border-slate-700/40 bg-gradient-to-b from-white/92 via-white/86 to-white/72 px-3 py-1.5 text-sm text-slate-700 transition-[color,border-color,box-shadow] hover:text-slate-900 hover:border-slate-500 hover:shadow-md"
  const navButtonActive = "border-slate-800 text-slate-900"
  const dropdownLinkBase =
    "block rounded-md border border-slate-700/30 px-3 py-2 text-slate-600 transition-all hover:border-slate-400 hover:bg-slate-50 hover:text-slate-900 hover:shadow-md"
  const dropdownLinkActive = "border-slate-500 bg-slate-50 text-slate-900"

  return (
    <header className={`sticky top-0 z-50 bg-white transition-shadow ${hasShadow ? "shadow-md" : "shadow-sm"}`}>
      {/* Top utility bar */}
      <div className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-2 text-sm text-slate-600 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-2 font-semibold text-slate-700">
            <span className="inline-flex size-2 rounded-full bg-slate-600" aria-hidden />
            <span>Bradenton, FL</span>
          </div>
          <div className="flex flex-wrap items-center gap-2 text-slate-600">
            {[phoneLink, emailLink].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="group inline-flex items-center gap-2 rounded-full px-2.5 py-1 transition-colors hover:bg-slate-100 hover:text-slate-900"
              >
                <span className="transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                  {item.icon}
                </span>
                <span>{item.label}</span>
              </a>
            ))}
            <a
              href={instagramLink.href}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-1 rounded-full px-2.5 py-1 transition-colors hover:bg-slate-100 hover:text-slate-900"
            >
              <span className="transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3">
                {instagramLink.icon}
              </span>
              <span>{instagramLink.label}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:grid md:grid-cols-[minmax(250px,1fr)_auto_minmax(250px,1fr)] md:items-center md:gap-8">
          <Link
            href="/"
            className="group flex items-center gap-4 md:justify-self-start"
            aria-label="Fleitz Family Tile home"
          >
            <Image
              src="/images/Fleitz-Family-Tile-Logo.png"
              alt="Fleitz Family tile installer logo"
              width={80}
              height={80}
              className="h-[5rem] w-[5rem] object-contain transition-transform duration-300 group-hover:scale-105"
              priority
            />
            <span className="text-[1.3rem] font-semibold leading-tight text-slate-800 md:text-[1.5rem] transition-colors duration-300 group-hover:text-slate-900">Fleitz Family Tile</span>
          </Link>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={toggleMobileMenu}
            aria-expanded={mobileOpen}
            aria-label="Toggle mobile menu"
            className="flex size-11 items-center justify-center rounded-full border border-slate-300 text-slate-700 transition-colors hover:border-slate-500 hover:text-slate-900 md:hidden"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="flex flex-col gap-1.5">
              <span className={`block h-0.5 w-6 rounded-full bg-current transition-transform ${mobileOpen ? "translate-y-1.5 rotate-45" : ""}`} />
              <span className={`block h-0.5 w-6 rounded-full bg-current transition-opacity ${mobileOpen ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 w-6 rounded-full bg-current transition-transform ${mobileOpen ? "-translate-y-1.5 -rotate-45" : ""}`} />
            </span>
          </button>

          {/* Desktop navigation */}
          <div className="hidden md:flex justify-center">
            <nav aria-label="Primary" className="flex items-center gap-6 text-sm font-medium text-slate-700">
              {navigation.main.map((item) => {
                if (item.label !== "Services") {
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`${navButtonBase} ${isLinkActive(item.href) ? navButtonActive : ""}`}
                    >
                      {item.label}
                    </Link>
                  )
                }

                return (
                  <div
                    key={item.href}
                    className="relative"
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                    onFocusCapture={() => setServicesDropdownOpen(true)}
                    onBlurCapture={(event) => {
                      if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
                        setServicesDropdownOpen(false)
                      }
                    }}
                  >
                    <Link
                      href={item.href}
                      className={`${navButtonBase} ${servicesActive ? navButtonActive : ""}`}
                      onClick={() => setServicesDropdownOpen((prev) => !prev)}
                    >
                      {item.label}
                      <svg className="size-3" viewBox="0 0 20 20" aria-hidden>
                        <path
                          fill="currentColor"
                          d="M7.293 7.293a1 1 0 011.414 0L10 8.586l1.293-1.293a1 1 0 111.414 1.414l-2 2a1 1 0 01-1.414 0l-2-2a1 1 0 010-1.414z"
                        />
                      </svg>
                    </Link>
                    <span aria-hidden className="absolute left-0 right-0 top-full h-3" />
                    <div
                      className={`absolute left-1/2 top-full min-w-[16rem] -translate-x-1/2 rounded-xl border border-slate-200 bg-white p-3 shadow-xl transition-all duration-150 ${
                        servicesDropdownOpen
                          ? "pointer-events-auto translate-y-2 opacity-100"
                          : "pointer-events-none -translate-y-1 opacity-0"
                      }`}
                    >
                      <ul className="space-y-1 text-sm">
                        {serviceLinks.map((service) => (
                          <li key={service.href}>
                            <Link
                              href={service.href}
                              className={`${dropdownLinkBase} ${
                                pathname && pathname.startsWith(service.href) ? dropdownLinkActive : ""
                              }`}
                              onClick={() => setServicesDropdownOpen(false)}
                            >
                              {service.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )
              })}
            </nav>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex justify-end">
            <Link
              href="/contact"
              className="rounded-full bg-slate-900 px-7 py-3.5 text-base font-semibold text-white shadow-lg transition-all hover:bg-slate-700 hover:scale-105"
            >
              Request a Quote
            </Link>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden ${mobileOpen ? "block" : "hidden"}`}>
          <div className="max-h-[calc(100vh-180px)] overflow-y-auto space-y-6 border-t border-slate-200 bg-white px-6 py-6 text-sm text-slate-700">
            <nav aria-label="Mobile primary" className="space-y-2">
              {navigation.main.map((item) => {
                if (item.label === "Services") {
                  return (
                    <div key={item.href}>
                      <button
                        type="button"
                        onClick={() => setMobileServicesOpen((prev) => !prev)}
                        className={`flex w-full items-center justify-between rounded-lg border border-slate-700/40 px-3 py-2 text-base font-semibold transition-[color,border-color,box-shadow] ${
                          servicesActive
                            ? "border-slate-800 text-slate-900"
                            : "text-slate-800 hover:text-slate-900 hover:border-slate-500 hover:shadow-md"
                        }`}
                      >
                        {item.label}
                        <svg
                          className={`size-4 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`}
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                      {mobileServicesOpen && (
                        <ul className="mt-2 space-y-1 pl-4 text-sm">
                          {serviceLinks.map((service) => (
                            <li key={service.href}>
                              <Link
                                href={service.href}
                                className={`block rounded-lg border border-slate-700/30 px-3 py-2 text-slate-600 transition-[color,border-color,box-shadow] hover:border-slate-400 hover:bg-slate-50 hover:text-slate-900 hover:shadow-md ${
                                  pathname && pathname.startsWith(service.href) ? "border-slate-400 bg-slate-50 text-slate-900" : ""
                                }`}
                                onClick={closeMobileMenu}
                              >
                                {service.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )
                }

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`block rounded-lg border border-slate-700/40 px-3 py-2 text-base font-semibold transition-[color,border-color,box-shadow] ${
                      isLinkActive(item.href)
                        ? "border-slate-800 text-slate-900"
                        : "text-slate-800 hover:text-slate-900 hover:border-slate-500 hover:shadow-md"
                    }`}
                    onClick={closeMobileMenu}
                  >
                    {item.label}
                  </Link>
                )
              })}
            </nav>
            <div className="space-y-3">
              <Link
                href="/contact"
                className="flex w-full items-center justify-center rounded-full bg-slate-900 px-7 py-3.5 text-base font-semibold text-white shadow-lg transition-all hover:bg-slate-700"
                onClick={closeMobileMenu}
              >
                Request a Quote
              </Link>
              <div className="space-y-2 text-sm text-slate-600">
                <a href={phoneLink.href} className="block hover:text-slate-900">
                  {phoneLink.label}
                </a>
                <a href={emailLink.href} className="block hover:text-slate-900">
                  {emailLink.label}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
