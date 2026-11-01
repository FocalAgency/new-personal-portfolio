import Link from "next/link";
import { ArrowIcon } from "@/components/ui/icons";

export default function NotFound() {
  return (
    <main id="main" className="not-found">
      <span className="eyebrow">404 / A SMALL DETOUR</span>
      <h1>
        Nothing here.
        <br />
        Plenty to explore.
      </h1>
      <p>
        That page couldn’t be found. Head back to the portfolio to see the
        selected projects.
      </p>
      <Link href="/#work" className="button">
        Back to the work <ArrowIcon />
      </Link>
    </main>
  );
}
