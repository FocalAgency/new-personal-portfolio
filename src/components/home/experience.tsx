import { experiences, projects } from "@/data/portfolio";
import { ArrowIcon } from "@/components/ui/icons";

export function Experience() {
  const projectCount = projects.length.toString().padStart(2, "0");
  return (
    <section
      className="px-[var(--gutter)] max-w-[var(--max-width)] mx-auto [border-top:1px_solid_var(--line)] pt-[70px] pb-[120px] [@media(max-width:760px)]:pt-[50px] [@media(max-width:760px)]:pb-[120px]"
      id="experience"
      aria-labelledby="experience-heading"
    >
      <div className="flex justify-between gap-[24px] text-muted [@media(max-width:760px)]:[&>span]:text-[9px] [@media(max-width:760px)]:[&>span]:tracking-[0.025em]">
        <span className="text-[12px] font-[550] tracking-[0.045em] flex items-center gap-[9px]">
          <i className="inline-block w-[6px] h-[6px] bg-accent rounded-full shrink-0" />{" "}
          THE JOURNEY
        </span>
        <span className="text-[12px] font-[550] tracking-[0.045em] flex items-center gap-[9px]">
          (03 — EXPERIENCE)
        </span>
      </div>
      <div className="mt-[80px] grid grid-cols-[1fr_1.2fr] gap-[110px] [@media(max-width:1100px)_and_(min-width:761px)]:gap-[55px] [@media(max-width:760px)]:mt-[50px] [@media(max-width:760px)]:grid-cols-[1fr] [@media(max-width:760px)]:gap-[40px]">
        <div>
          <h2
            className="[font-family:var(--font-display),sans-serif] text-[clamp(44px,4.5vw,76px)] font-medium leading-[1] tracking-[-0.06em] [@media(max-width:760px)]:text-[52px]"
            id="experience-heading"
          >
            Built on
            <br />
            <span className="text-[#888]">experience.</span>
          </h2>
          <p className="mt-[30px] text-[15px] leading-[1.6] text-muted [@media(max-width:760px)]:mt-[22px] [@media(max-width:760px)]:text-[13px]">
            Learning by doing.
            <br />
            Growing with every challenge.
          </p>
          <div className="mt-[90px] flex items-center gap-[28px] [@media(max-width:760px)]:mt-[25px] [@media(max-width:760px)]:gap-[20px]">
            <span
              className="[font-family:var(--font-display),sans-serif] text-[120px] font-normal leading-[1] tracking-[-0.09em] tabular-nums [@media(max-width:760px)]:text-[85px]"
              data-counter={projects.length}
            >
              {projectCount}
            </span>
            <span className="text-[12px] leading-[1.5] text-muted [@media(max-width:760px)]:text-[11px]">
              Projects in
              <br />
              this collection{" "}
              <ArrowIcon className="mt-[20px] block w-[20px] [@media(max-width:760px)]:mt-[10px] [@media(max-width:760px)]:w-[14px]" />
            </span>
          </div>
        </div>
        <div>
          {experiences.map((experience, i) => (
            <article
              className="[border-top:1px_solid_var(--line)] px-0 pt-[22px] pb-[35px] [@media(max-width:760px)]:pt-[20px] [@media(max-width:760px)]:pb-[30px]"
              key={experience.role}
            >
              <div className="mb-[23px] flex items-center justify-between text-[11px] text-muted [@media(max-width:760px)]:text-[10px]">
                <span className="text-accent">0{i + 1}</span>
                <p>{experience.period}</p>
              </div>
              <h3 className="text-[27px] font-[450] leading-[1.15] tracking-[-0.035em] [@media(max-width:1100px)_and_(min-width:761px)]:text-[24px] [@media(max-width:760px)]:text-[25px]">
                {experience.role}
              </h3>
              <span className="mt-[9px] block text-[13px] text-[#c7c7c7]">
                {experience.company}
              </span>
              <ul className="mt-[23px] grid gap-[10px]">
                {experience.details.map((detail) => (
                  <li
                    className="relative max-w-[580px] pl-[13px] text-[13px] leading-[1.65] text-[#aaa] before:absolute before:top-[0.7em] before:left-0 before:h-[3px] before:w-[3px] before:rounded-full before:bg-[#999] before:content-['']"
                    key={detail}
                  >
                    {detail}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
