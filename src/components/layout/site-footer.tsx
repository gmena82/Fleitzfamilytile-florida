import Link from "next/link";

import { siteConfig } from "@/config/site";
import { Container } from "../ui/container";

const footerLinks = [
  {
    title: "Showroom",
    items: siteConfig.locations.map((location) => ({
      label: `${location.label}`,
      description: `${location.address}, ${location.city}`
    }))
  },
  {
    title: "Company",
    items: [
      { label: "About", href: "/about" },
      { label: "Projects", href: "/marketplace" },
      { label: "Careers", href: "/about#careers" }
    ]
  },
  {
    title: "Support",
    items: [
      { label: "Contact", href: "/contact" },
      { label: "FAQ", href: "/resources#faq" },
      { label: "Policies", href: "/legal" }
    ]
  }
];

export function SiteFooter() {
  const phoneHref = siteConfig.contact.phone.replace(/[^\d+]/g, "");
  const emailHref = siteConfig.contact.email;

  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-300">
      <Container className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
            {siteConfig.name}
          </span>
          <p className="text-sm leading-relaxed text-slate-400">{siteConfig.description}</p>
          <div className="text-sm font-semibold text-white">
            <a href={`tel:${phoneHref}`} className="block">
              {siteConfig.contact.phone}
            </a>
            <a href={`mailto:${emailHref}`} className="block">
              {siteConfig.contact.email}
            </a>
          </div>
        </div>
        {footerLinks.map((group) => (
          <div key={group.title} className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-200">{group.title}</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              {group.items.map((item) => (
                <li key={item.label}>
                  {"href" in item ? (
                    <Link href={item.href!} className="transition hover:text-white">
                      {item.label}
                    </Link>
                  ) : (
                    <span className="block text-slate-400">
                      <span className="font-medium text-white">{item.label}</span>
                      <br />
                      <span className="text-xs uppercase tracking-wide">{item.description}</span>
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-200">Visit</h3>
          <p className="text-sm text-slate-400">
            Hours
            <br />
            {siteConfig.hours.weekdays}
            <br />
            {siteConfig.hours.saturday}
            <br />
            {siteConfig.hours.sunday}
          </p>
          <div className="flex items-center gap-4 text-sm">
            {siteConfig.socialLinks.facebook && (
              <Link href={siteConfig.socialLinks.facebook} className="transition hover:text-white">
                Facebook
              </Link>
            )}
            {siteConfig.socialLinks.instagram && (
              <Link href={siteConfig.socialLinks.instagram} className="transition hover:text-white">
                Instagram
              </Link>
            )}
          </div>
        </div>
      </Container>
      <div className="border-t border-white/10 py-6">
        <Container className="flex flex-col gap-4 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</span>
          <span>
            Crafted on Next.js 14 • Tailwind CSS 4 • Deployed with pnpm
          </span>
        </Container>
      </div>
    </footer>
  );
}
