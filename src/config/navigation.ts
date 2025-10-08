import type { Route } from "next";

export const navigation = [
  { href: "/" as Route, label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact" }
] as const satisfies readonly { href: Route; label: string }[];
