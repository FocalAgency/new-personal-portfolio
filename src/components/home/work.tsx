import { projects } from "@/data/portfolio";
import { ProjectGallery } from "@/components/home/project-gallery";

export function Work() {
  const projectCount = projects.length.toString().padStart(2, "0");
  return (
    <section
      className="pb-[100px] [@media(max-width:760px)]:pb-[65px] px-[var(--gutter)] max-w-[var(--max-width)] mx-auto [border-top:1px_solid_var(--line)] pt-[70px] [@media(max-width:760px)]:pt-[50px]"
      id="work"
      aria-labelledby="work-heading"
    >
      <div className="flex justify-between gap-[24px] text-muted [@media(max-width:760px)]:[&>span]:text-[9px] [@media(max-width:760px)]:[&>span]:tracking-[0.025em]">
        <span className="text-[12px] font-[550] tracking-[0.045em] flex items-center gap-[9px]">
          <i className="inline-block w-[6px] h-[6px] bg-accent rounded-full shrink-0" />{" "}
          THE WORK, SO FAR
        </span>
        <span className="text-[12px] font-[550] tracking-[0.045em] flex items-center gap-[9px]">
          (02 — SELECTED PROJECTS)
        </span>
      </div>
      <div className="mt-[70px] mb-[65px] flex flex-wrap items-end justify-between gap-[30px] [@media(max-width:760px)]:mt-[50px] [@media(max-width:760px)]:mb-[35px] [@media(max-width:760px)]:block">
        <h2
          id="work-heading"
          className="relative [font-family:var(--font-display),sans-serif] text-[clamp(44px,5.5vw,90px)] leading-[0.98] font-[500] tracking-[-0.065em] whitespace-nowrap [@media(max-width:760px)]:inline-block [@media(max-width:760px)]:text-[clamp(32px,9.4vw,64px)] [@media(max-width:760px)]:tracking-[-0.06em]"
        >
          Selected <span className="ml-[0.08em] text-[#888]">work.</span>
          <sup className="static top-[10px] right-[-40px] mt-[0.4em] ml-[0.6em] inline-block align-top [font-family:var(--font-body),sans-serif] text-[13px] tracking-normal [@media(max-width:760px)]:top-[6px] [@media(max-width:760px)]:right-[-34px] [@media(max-width:760px)]:text-[10px]">
            ({projectCount})
          </sup>
        </h2>
        <p className="mb-[5px] text-[16px] leading-[1.5] [@media(max-width:760px)]:mt-[28px] [@media(max-width:760px)]:text-[14px] [@media(max-width:760px)]:leading-[1.6]">
          A selection of applications, interfaces
          <br />
          and experiments. Different challenges.
          <br />
          <span className="text-muted">
            The same attention to detail.
          </span>
        </p>
      </div>
      <ProjectGallery projects={projects} />
    </section>
  );
}
