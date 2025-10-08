import Link from "next/link";
import type { Route } from "next";

import { PlaceholderImage } from "@/components/ui/placeholder-image";

interface LogoProps {
  href?: Route;
  className?: string;
  width?: number;
  height?: number;
}

const homeRoute: Route = "/";

export function Logo({
  href = homeRoute,
  className = "",
  width = 180,
  height = 60
}: LogoProps) {
  return (
    <Link
      href={href}
      className={`inline-block ${className}`}
      aria-label="Fleitz Family Tile Home"
    >
      <PlaceholderImage
        className="flex items-center justify-center rounded-none border-2 border-slate-900 bg-slate-50"
        style={{ width, height }}
      />
    </Link>
  );
}
