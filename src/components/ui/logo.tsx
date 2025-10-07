import Image from "next/image";
import Link from "next/link";
import type { Route } from "next";

interface LogoProps {
  href?: Route;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
}

const homeRoute: Route = "/";

export function Logo({
  href = homeRoute,
  className = "",
  width = 150,
  height = 150,
  priority = false
}: LogoProps) {
  return (
    <Link
      href={href}
      className={`inline-block ${className}`}
      aria-label="Fleitz Family Tile Home"
    >
      <Image
        src="/images/Fleitz-Logo-on-White.png"
        alt="Fleitz Family Tile Logo"
        width={width}
        height={height}
        priority={priority}
        className="h-auto w-auto"
      />
    </Link>
  );
}
