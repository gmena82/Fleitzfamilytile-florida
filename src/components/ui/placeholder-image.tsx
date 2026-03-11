import type { HTMLAttributes } from "react";
import Image from "next/image";

import { cn } from "@/lib/utils";

interface PlaceholderImageProps extends HTMLAttributes<HTMLDivElement> {
  label?: string;
}

export function PlaceholderImage({ label = "Project Photo", className, style, ...props }: PlaceholderImageProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-lg border-2 border-dashed border-slate-300 bg-white",
        className
      )}
      style={style}
      {...props}
    >
      <div className="absolute inset-x-0 top-0 flex justify-center">
        <span className="mt-2 rounded-full bg-white px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-slate-500">
          {label}
        </span>
      </div>
      <Image
        src="/images/generated/tile-project-generic.png"
        alt={label}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
    </div>
  );
}
