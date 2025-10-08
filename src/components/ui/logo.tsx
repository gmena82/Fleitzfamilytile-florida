import Image from "next/image";
import Link from "next/link";
import type { Route } from "next";

interface LogoProps {
  href?: Route;
  className?: string;
  width?: number;
  height?: number;
  variant?: "header" | "footer";
  priority?: boolean;
}

const homeRoute: Route = "/";

const logoVariants = {
  header: {
    src: "/images/Fleitz-Family-Tile-Logo.png",
    alt: "Fleitz Family tile installer logo"
  },
  footer: {
    src: "/images/Fleitz-Logo-on-White.png",
    alt: "Fleitz Family tile installer logo on white background"
  }
} as const satisfies Record<Required<LogoProps>["variant"], { src: string; alt: string }>;

export function Logo({
  href = homeRoute,
  className = "",
  width = 180,
  height = 60,
  variant = "header",
  priority = false
}: LogoProps) {
  const { src, alt } = logoVariants[variant];

  return (
    <Link
      href={href}
      className={`inline-block ${className}`.trim()}
      aria-label="Fleitz Family Tile home"
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        className="h-auto w-auto"
      />
    </Link>
  );
}
