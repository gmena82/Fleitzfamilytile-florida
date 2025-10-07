import type { Route } from "next";

export const navigation = [
  { href: "/services", label: "Services" },
  { href: "/buyers", label: "Buyers" },
  { href: "/marketplace", label: "Marketplace" },
  { href: "/resources", label: "Resources" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/blog", label: "Blog" }
] as const satisfies readonly { href: Route; label: string }[];
