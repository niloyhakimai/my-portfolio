"use client";

import type {
  CSSProperties,
  HTMLAttributes,
  MouseEvent as ReactMouseEvent,
  PointerEvent as ReactPointerEvent,
} from "react";
import { useRef } from "react";
import { cn } from "@/lib/utils";

type SpotlightCardProps = HTMLAttributes<HTMLDivElement> & {
  spotlightColor?: string;
};

export function SpotlightCard({
  children,
  className,
  spotlightColor,
  ...props
}: SpotlightCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const updateSpotlight = (
    event: ReactPointerEvent<HTMLDivElement> | ReactMouseEvent<HTMLDivElement>,
  ) => {
    const card = cardRef.current;

    if (!card) {
      return;
    }

    const rect = card.getBoundingClientRect();
    card.style.setProperty("--spotlight-x", `${event.clientX - rect.left}px`);
    card.style.setProperty("--spotlight-y", `${event.clientY - rect.top}px`);
  };

  return (
    <div
      ref={cardRef}
      className={cn(
        "spotlight-card rounded-[1.75rem] border border-white/10",
        className,
      )}
      onMouseMove={updateSpotlight}
      onPointerMove={updateSpotlight}
      style={
        {
          "--spotlight-color": spotlightColor ?? "var(--card-glow)",
        } as CSSProperties
      }
      {...props}
    >
      <div className="relative z-[2]">{children}</div>
    </div>
  );
}
