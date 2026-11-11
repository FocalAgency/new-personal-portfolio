import Link from "next/link";
import { ArrowIcon } from "@/components/ui/icons";

export default function NotFound() {
  return (
    <main
      id="main"
      className="min-h-[80vh] flex flex-col justify-center items-start gap-[30px] p-[var(--gutter)] [&>h1]:[font-family:var(--font-display),sans-serif] [&>h1]:font-medium [&>h1]:text-[clamp(50px,8vw,100px)] [&>h1]:tracking-[-0.06em] [&>p]:text-muted [&>p]:max-w-[450px] [&>p]:leading-[1.6] [&>a]:text-ink [&>a]:bg-off-white"
    >
      <span className="text-[12px] font-[550] tracking-[0.045em] flex items-center gap-[9px]">
        404 / A SMALL DETOUR
      </span>
      <h1>
        Nothing here.
        <br />
        Plenty to explore.
      </h1>
      <p>
        That page couldn’t be found. Head back to the portfolio to see the
        selected projects.
      </p>
      <Link
        href="/#work"
        className="inline-flex items-center justify-between gap-[30px] min-h-[48px] px-[20px] py-0 rounded-[3px] text-[14px] font-medium [transition:transform_0.25s_var(--ease),background_0.25s] hover:[transform:translateY(-2px)]"
      >
        Back to the work <ArrowIcon />
      </Link>
    </main>
  );
}
