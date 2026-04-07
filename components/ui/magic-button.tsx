import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  PropsWithChildren,
} from "react";
import type { Route } from "next";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const magicButtonStyles =
  "magic-button inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold tracking-[0.02em] text-[var(--foreground)] transition duration-300 hover:-translate-y-0.5 hover:border-white/25 hover:shadow-[0_18px_45px_rgba(37,185,255,0.16)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]";

type MagicButtonLinkProps = PropsWithChildren<
  {
    className?: string;
    external?: boolean;
    href: string;
  } & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href">
>;

export function MagicButtonLink({
  children,
  className,
  external,
  href,
  ...props
}: MagicButtonLinkProps) {
  const shouldUseAnchor =
    external || Boolean(props.download) || href.startsWith("#") || href.endsWith(".pdf");

  if (shouldUseAnchor) {
    return (
      <a
        className={cn(magicButtonStyles, className)}
        href={href}
        rel={external ? "noreferrer" : undefined}
        target={external ? "_blank" : undefined}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <Link className={cn(magicButtonStyles, className)} href={href as Route} {...props}>
      {children}
    </Link>
  );
}

type MagicButtonProps = PropsWithChildren<
  ButtonHTMLAttributes<HTMLButtonElement> & {
    className?: string;
  }
>;

export function MagicButton({
  children,
  className,
  ...props
}: MagicButtonProps) {
  return (
    <button className={cn(magicButtonStyles, className)} {...props}>
      {children}
    </button>
  );
}
