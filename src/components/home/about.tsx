import { skillGroups } from "@/data/portfolio";
import { ArrowIcon, Asterisk } from "@/components/ui/icons";

const statement =
  "I build thoughtful digital experiences. Bringing together considered design, creative development and reliable engineering to turn complex ideas into things that feel simple.";

export function About() {
  return (
    <>
      <div className="flex min-h-[104px] items-center justify-between gap-[24px] px-[var(--gutter)] py-[30px] [border-bottom:1px_solid_var(--line)] [font-family:var(--font-display),sans-serif] text-[11px] tracking-[0.06em] [@media(max-width:760px)]:min-h-[85px] [@media(max-width:760px)]:gap-[12px] [@media(max-width:760px)]:py-[20px] [@media(max-width:760px)]:text-[8px]">
        <span>
          BUILT{" "}
          <span className="ml-[8px] text-[#8c8c8c] [@media(max-width:760px)]:ml-0 [@media(max-width:760px)]:mt-[5px] [@media(max-width:760px)]:block">
            WITH INTENTION
          </span>
        </span>
        <a
          href="#about"
          className="flex min-h-[44px] items-center gap-[18px] [@media(max-width:760px)]:gap-[10px] [@media(max-width:760px)]:text-[8px]"
        >
          SCROLL DOWN{" "}
          <span className="grid h-[30px] w-[30px] place-items-center rounded-full bg-off-white text-[17px] text-black [@media(max-width:760px)]:h-[26px] [@media(max-width:760px)]:w-[26px] [@media(max-width:760px)]:text-[14px]">
            <span className="[@media(max-width:1000px)]:hidden">↓</span>
            <ArrowIcon
              className="hidden [@media(max-width:1000px)]:block"
              direction="down"
              width="16"
              height="16"
            />
          </span>
        </a>
        <span className="text-[#9d9d9d] [@media(max-width:760px)]:hidden">
          CODE IN THE DETAILS
        </span>
      </div>

      <section
        className="px-[var(--gutter)] max-w-[var(--max-width)] mx-auto pt-[90px] pb-[120px] [@media(max-width:760px)]:pt-[50px] [@media(max-width:760px)]:pb-[65px]"
        id="about"
        aria-labelledby="about-heading"
      >
        <div className="flex justify-between gap-[24px] text-muted [@media(max-width:760px)]:[&>span]:text-[9px] [@media(max-width:760px)]:[&>span]:tracking-[0.025em]">
          <span className="text-[12px] font-[550] tracking-[0.045em] flex items-center gap-[9px]">
            <i className="inline-block w-[6px] h-[6px] bg-accent rounded-full shrink-0" />{" "}
            A LITTLE ABOUT ME
          </span>
          <span className="text-[12px] font-[550] tracking-[0.045em] flex items-center gap-[9px]">
            (01 — THE APPROACH)
          </span>
        </div>
        <h2
          className="mx-auto mt-[100px] mb-0 max-w-[1040px] text-[clamp(34px,3.8vw,64px)] font-[450] leading-[1.28] tracking-[-0.035em] [text-wrap:pretty] [@media(max-width:760px)]:mt-[55px] [@media(max-width:760px)]:text-[30px] [@media(max-width:760px)]:leading-[1.35]"
          id="about-heading"
          data-statement
        >
          {statement.split(" ").map((word, i) => (
            <span
              data-statement-word
              className="text-off-white [@media(prefers-reduced-motion:reduce)]:text-off-white!"
              key={i}
            >
              {word}{" "}
            </span>
          ))}
        </h2>
        <div className="mx-auto mt-[75px] mb-[110px] flex max-w-[1040px] items-center gap-[36px] [@media(max-width:1100px)_and_(min-width:761px)]:gap-[20px] [@media(max-width:760px)]:mx-0 [@media(max-width:760px)]:mt-[45px] [@media(max-width:760px)]:mb-[55px] [@media(max-width:760px)]:grid [@media(max-width:760px)]:grid-cols-[32px_1fr] [@media(max-width:760px)]:gap-[14px]">
          <div className="mr-[8px]">
            <Asterisk className="w-[38px] text-accent [@media(max-width:760px)]:h-[32px] [@media(max-width:760px)]:w-[28px]" />
          </div>
          <p className="text-[17px] leading-[1.55] [@media(max-width:1100px)_and_(min-width:761px)]:text-[15px] [@media(max-width:760px)]:text-[13px] [@media(max-width:760px)]:leading-[1.65]">
            From the first interaction to what happens behind it.
            <br className="[@media(max-width:760px)]:hidden" />
            <span className="text-muted">
              I care about how the whole thing works.
            </span>
          </p>
          <a
            href="#experience"
            className="inline-flex items-center justify-between gap-[32px] min-h-[44px] [border-bottom:1px_solid_var(--line)] [transition:gap_0.25s] hover:gap-[42px] hover:text-accent hover:border-accent ml-auto text-[12px] whitespace-nowrap [@media(max-width:760px)]:col-start-2 [@media(max-width:760px)]:mt-[10px] [@media(max-width:760px)]:mr-auto [@media(max-width:760px)]:mb-0 [@media(max-width:760px)]:ml-0"
          >
            A bit of my background <ArrowIcon />
          </a>
        </div>
        <div className="grid grid-cols-[1.25fr_repeat(3,1fr)] gap-[36px] rounded-[var(--radius)] [border:1px_solid_var(--line)] p-[40px] [@media(max-width:1100px)_and_(min-width:761px)]:gap-[20px] [@media(max-width:1100px)_and_(min-width:761px)]:p-[28px] [@media(max-width:760px)]:grid-cols-[minmax(0,1fr)] [@media(max-width:760px)]:gap-[24px] [@media(max-width:760px)]:p-[24px]">
          <div>
            <span className="font-[550] tracking-[0.045em] flex items-center gap-[9px] text-[10px] text-muted">
              THE TOOLKIT
            </span>
            <h3 className="mt-[27px] mb-[20px] text-[34px] font-[450] leading-[1.05] tracking-[-0.04em] [@media(max-width:1100px)_and_(min-width:761px)]:text-[28px] [@media(max-width:760px)]:mt-[20px] [@media(max-width:760px)]:text-[36px]">
              Different tools.
              <br />
              One considered
              <br />
              <span className="text-muted">outcome.</span>
            </h3>
            <p className="text-[12px] leading-[1.5] text-muted [@media(max-width:760px)]:text-[13px]">
              A practical mix of frontend craft,
              <br />
              backend thinking and curiosity.
            </p>
          </div>
          {skillGroups.map((group, i) => (
            <div
              className="pt-[22px] pr-0 pb-[12px] pl-[26px] [border-left:1px_solid_var(--line)] [@media(max-width:1100px)_and_(min-width:761px)]:pl-[18px] [@media(max-width:760px)]:grid [@media(max-width:760px)]:grid-cols-[40px_minmax(0,1fr)] [@media(max-width:760px)]:gap-x-[5px] [@media(max-width:760px)]:gap-y-[15px] [@media(max-width:760px)]:px-0 [@media(max-width:760px)]:pt-[24px] [@media(max-width:760px)]:pb-0 [@media(max-width:760px)]:border-l-0 [@media(max-width:760px)]:[border-top:1px_solid_var(--line)]"
              key={group.label}
            >
              <span className="text-[12px] text-accent [@media(max-width:760px)]:pt-[4px] [@media(max-width:760px)]:text-[10px]">
                0{i + 1} /
              </span>
              <h4 className="mt-[50px] mb-[25px] text-[21px] font-[450] tracking-[-0.02em] [@media(max-width:1100px)_and_(min-width:761px)]:text-[18px] [@media(max-width:760px)]:m-0 [@media(max-width:760px)]:text-[23px]">
                {group.label}
              </h4>
              <ul className="flex flex-wrap content-start gap-[8px] [@media(max-width:760px)]:col-start-2">
                {group.items.map((item) => (
                  <li
                    className="rounded-[4px] [border:1px_solid_var(--line)] px-[9px] py-[7px] text-[12px] leading-[1.4] text-[#c7c7c7]"
                    key={item}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
