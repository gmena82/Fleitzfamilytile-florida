import type { Route } from "next";

export type ServiceLink = {
  href: Route;
  label: string;
};

export type MainNavItem = {
  href: Route;
  label: string;
  items?: readonly ServiceLink[];
};

export const serviceLinks = [
  { href: "/kitchen-backsplashes" as Route, label: "Kitchen Backsplashes" },
  { href: "/bathroom-shower" as Route, label: "Bathroom & Shower" },
  { href: "/floor-tile-installation" as Route, label: "Floor Tile Installation" },
  { href: "/fireplaces" as Route, label: "Fireplaces" },
  { href: "/outside-projects" as Route, label: "Outdoor Tile" },
  { href: "/special-projects" as Route, label: "Special Projects" }
] as const satisfies readonly ServiceLink[];

export const mainNavigation = [
  { href: "/" as Route, label: "Home" },
  { href: "/about" as Route, label: "About Us" },
  { href: "/services" as Route, label: "Services", items: serviceLinks },
  { href: "/gallery" as Route, label: "Gallery" },
  { href: "/contact" as Route, label: "Contact" },
  { href: "/blog" as Route, label: "Blog" }
] as const satisfies readonly MainNavItem[];

export const navigation = {
  main: mainNavigation,
  services: serviceLinks
} as const;
