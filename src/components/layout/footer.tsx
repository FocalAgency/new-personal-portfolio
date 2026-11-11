import { profile } from "@/data/portfolio";
import { ArrowIcon, BrandMark } from "@/components/ui/icons";

export function Footer() {
  return (
    <footer className="[--accent:var(--accent-ink)] bg-white px-[var(--gutter)] py-0 text-ink">
      <div className="m-auto max-w-[calc(var(--max-width)-var(--gutter)*2)]">
        <div className="grid grid-cols-[1fr_auto] [align-items:start] gap-[32px] [border-top:1px_solid_var(--dark-line)] px-0 pt-[24px] pb-0 [@media(max-width:900px)]:grid-cols-[1fr_1fr] [@media(max-width:900px)]:gap-x-[32px] [@media(max-width:900px)]:gap-y-[12px] [@media(max-width:480px)]:grid-cols-[1fr]! [@media(max-width:480px)]:gap-[8px]! [@media(max-width:480px)]:pt-[16px]!">
          <a
            href="#home"
            className="inline-flex min-h-[44px] items-center gap-[10px] text-[13px] font-semibold tracking-[0.03em]"
          >
            <BrandMark
              className="text-accent-ink"
              width="24"
              height="24"
            />{" "}
            KASAM ALI
          </a>
          <nav
            className="flex flex-wrap gap-[20px] [@media(max-width:900px)]:col-span-full [@media(max-width:480px)]:gap-[24px]!"
            aria-label="Social links"
          >
            {profile.socials.map((social) => (
              <a
                className="inline-flex min-h-[44px] items-center text-[13px] [&:hover]:text-accent-ink"
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                key={social.name}
              >
                {social.name}
              </a>
            ))}
          </nav>
        </div>
        <div className="flex items-center justify-between gap-[24px] p-0 text-[12px] text-light-muted [@media(max-width:480px)]:text-[11px]!">
          <span>© {new Date().getFullYear()} Kasam Ali</span>
          <a href="#home" className="inline-flex min-h-[44px] items-center">
            <span className="[@media(max-width:1000px)]:hidden">
              Back to top ↑
            </span>
            <span className="hidden [@media(max-width:1000px)]:inline-flex [@media(max-width:1000px)]:items-center [@media(max-width:1000px)]:gap-[8px]">
              Back to top <ArrowIcon direction="up" width="15" height="15" />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
