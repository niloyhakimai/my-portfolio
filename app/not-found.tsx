import { Home } from "lucide-react";
import { MagicButtonLink } from "@/components/ui/magic-button";

export default function NotFound() {
  return (
    <main className="px-4 pb-16 pt-32 sm:pt-36">
      <div className="mx-auto max-w-3xl">
        <div className="section-shell rounded-[2rem] p-8 text-center sm:p-10">
          <p className="small-label">Not Found</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-[-0.06em] text-[var(--foreground)]">
            The page you requested is not part of this orbit.
          </h1>
          <p className="mt-5 text-base leading-7 text-[var(--muted)]">
            The route may have moved, the project id may be incorrect, or the content is
            still being prepared.
          </p>
          <div className="mt-8 flex justify-center">
            <MagicButtonLink href="/">
              <Home className="h-4 w-4" />
              <span>Back to Home</span>
            </MagicButtonLink>
          </div>
        </div>
      </div>
    </main>
  );
}
