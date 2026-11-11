"use client";

import Image from "next/image";
import { useRef, useState, type PointerEvent } from "react";
import { profile, type Project } from "@/data/portfolio";
import { ArrowIcon } from "@/components/ui/icons";

const filters = [
  "All work",
  "Web development",
  "Full stack",
  "Creative development",
] as const;

export function ProjectGallery({ projects }: { projects: Project[] }) {
  function moveProjectControl(event: PointerEvent<HTMLButtonElement>) {
    if (
      event.pointerType !== "mouse" ||
      !window.matchMedia("(hover: hover) and (pointer: fine)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) return;
    const button = event.currentTarget;
    const bounds = button.getBoundingClientRect();
    const pointerY = event.clientY - bounds.top;
    if (pointerY < 0 || pointerY > bounds.height) {
      button.dataset.tracking = "false";
      return;
    }
    const x = Math.min(Math.max(event.clientX - bounds.left - 72, 12), bounds.width - 156);
    const y = Math.min(Math.max(pointerY + 18, 12), bounds.height - 56);
    button.style.setProperty("--preview-x", `${x}px`);
    button.style.setProperty("--preview-y", `${y}px`);
    button.dataset.tracking = "true";
  }

  const dialogRef = useRef<HTMLDialogElement>(null);
  const [selected, setSelected] = useState<Project | null>(null);
  const [filter, setFilter] = useState<(typeof filters)[number]>("All work");
  const availableFilters = filters.filter(
    (label) =>
      label === "All work" ||
      projects.some((project) => project.category === label),
  );
  const activeFilter = availableFilters.includes(filter) ? filter : "All work";
  const visible =
    activeFilter === "All work"
      ? projects
      : projects.filter((project) => project.category === activeFilter);
  return (
    <>
      <div data-reveal className="flex items-center justify-between gap-[24px] [border-top:1px_solid_var(--line)] pt-[20px] pb-[35px] [@media(max-width:760px)]:block [@media(max-width:760px)]:gap-0 [@media(max-width:760px)]:pt-[18px] [@media(max-width:760px)]:pb-[26px]">
        <div
          className="flex flex-wrap gap-[6px] [@media(max-width:760px)]:gap-[2px]"
          role="group"
          aria-label="Project filters and links"
        >
          {availableFilters.map((label) => (
            <button
              key={label}
              type="button"
              className="flex min-h-[44px] items-center gap-[14px] rounded-[30px] border border-solid border-transparent bg-transparent px-[17px] py-0 text-[12px] text-[#b1b1b1] [transition:background_0.2s,color_0.2s] [&:hover]:border-line [&:hover]:text-off-white aria-pressed:bg-off-white aria-pressed:text-ink aria-pressed:[&:hover]:text-ink [&[aria-pressed=true]>span]:text-accent-ink [&[aria-pressed=true]>span]:opacity-100 [@media(max-width:760px)]:gap-[6px] [@media(max-width:760px)]:px-[10px] [@media(max-width:760px)]:text-[10px]"
              aria-pressed={activeFilter === label}
              onClick={() => setFilter(label)}
            >
              {label}
              <span className="mt-[10px] self-start text-[8px] opacity-[0.65] [@media(max-width:760px)]:mt-[12px] [@media(max-width:760px)]:text-[7px]">
                {label === "All work"
                  ? projects.length.toString().padStart(2, "0")
                  : projects
                      .filter((project) => project.category === label)
                      .length.toString()
                      .padStart(2, "0")}
              </span>
            </button>
          ))}
          <a
            className="flex min-h-[44px] items-center gap-[14px] rounded-[30px] border border-solid border-transparent bg-transparent px-[17px] py-0 text-[12px] text-[#b1b1b1] [transition:background_0.2s,color_0.2s] [&:hover]:border-line [&:hover]:text-off-white [&_svg]:h-[14px] [&_svg]:w-[14px] [&_svg]:text-accent [@media(max-width:760px)]:gap-[6px] [@media(max-width:760px)]:px-[10px] [@media(max-width:760px)]:text-[10px]"
            href={
              profile.socials.find((social) => social.name === "GitHub")?.href
            }
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub (opens in a new tab)"
          >
            GitHub <ArrowIcon />
          </a>
        </div>
        <span
          className="whitespace-nowrap text-[11px] text-muted [@media(max-width:760px)]:absolute [@media(max-width:760px)]:block [@media(max-width:760px)]:h-px [@media(max-width:760px)]:w-px [@media(max-width:760px)]:overflow-hidden [@media(max-width:760px)]:[clip-path:inset(50%)]"
          aria-live="polite"
        >
          {visible.length.toString().padStart(2, "0")} projects
        </span>
      </div>
      <div data-project-grid className="grid grid-cols-2 items-start gap-x-[28px] gap-y-[65px] [@media(max-width:760px)]:grid-cols-[1fr] [@media(max-width:760px)]:gap-[42px]">
        {visible.map((project) => (
          <article
            data-reveal
            className="group/project relative min-w-0 [@media(min-width:1001px)]:even:mt-[72px] [&:hover_img]:[filter:grayscale(0)] [&:hover_img]:[transform:scale(1.025)] [&:focus-within_img]:[filter:grayscale(0)] [&:focus-within_img]:[transform:scale(1.025)]"
            key={project.slug}
          >
            <button
              type="button"
              className="group/image block w-full rounded-[6px] border-0 bg-transparent p-0 text-left after:absolute after:inset-0 after:content-[''] focus-visible:[outline:2px_solid_var(--accent)] focus-visible:outline-offset-[5px]"
              aria-label={`Preview ${project.title}`}
              onPointerMove={moveProjectControl}
              onPointerLeave={(event) => { event.currentTarget.dataset.tracking = "false"; }}
              onClick={() => {
                setSelected(project);
                dialogRef.current?.showModal();
              }}
            >
              <span className="relative block aspect-[1.57] overflow-hidden rounded-[6px] bg-[#202020] [@media(max-width:760px)]:aspect-[1.5]">
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  className="object-cover object-top [filter:grayscale(1)] [transition:filter_0.65s_var(--ease),transform_0.65s_var(--ease)] motion-reduce:[filter:grayscale(1)]"
                  fill
                  sizes="(max-width: 760px) 90vw, 45vw"
                />
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute right-[16px] bottom-[16px] inline-flex min-h-[44px] items-center gap-[14px] rounded-full bg-off-white px-[16px] text-[12px] font-medium text-ink shadow-[0_4px_20px_#0002] transition-opacity duration-200 group-data-[tracking=true]/image:opacity-0 [@media(hover:none)]:opacity-100! motion-reduce:opacity-100! motion-reduce:transition-none [&_svg]:text-accent-ink"
                >
                  View project <ArrowIcon width="16" height="16" />
                </span>
                <span
                  aria-hidden="true"
                  data-project-control
                  className="pointer-events-none absolute top-0 left-0 inline-flex min-h-[44px] w-[144px] items-center justify-center gap-[14px] rounded-full bg-off-white text-[12px] font-medium text-ink opacity-0 shadow-[0_4px_20px_#0002] [transform:translate3d(var(--preview-x,0px),var(--preview-y,0px),0)] [transition:opacity_0.2s,transform_0.16s_ease-out] group-data-[tracking=true]/image:opacity-100 [@media(hover:none)]:hidden motion-reduce:hidden [&_svg]:text-accent-ink"
                >
                  View project <ArrowIcon width="16" height="16" />
                </span>
                {project.private && (
                  <span className="absolute top-[16px] left-[16px] rounded-[30px] border border-solid border-[#ffffff30] bg-[#151515df] px-[12px] py-[8px] text-[10px] text-off-white backdrop-blur-[8px] [@media(max-width:760px)]:top-[12px] [@media(max-width:760px)]:left-[12px] [@media(max-width:760px)]:text-[9px]">
                    Private project
                  </span>
                )}
              </span>
            </button>
            <div className="mt-[24px] flex items-center justify-between gap-[20px] [@media(max-width:760px)]:mt-[19px]">
              <div>
                <p className="mb-[8px] text-[10px] text-muted [@media(max-width:760px)]:text-[9px]">
                  {project.category}
                </p>
                <h3 className="text-[25px] leading-[1.2] font-[450] tracking-[-0.035em] [@media(max-width:760px)]:text-[24px]">
                  {project.title}
                </h3>
              </div>
              <span className="text-[11px] text-accent">
                {(projects.indexOf(project) + 1).toString().padStart(2, "0")}
              </span>
            </div>
            <p className="mt-[16px] max-w-[520px] text-[14px] leading-[1.55] text-[#aaa] [@media(max-width:760px)]:mt-[12px] [@media(max-width:760px)]:text-[13px]">
              {project.summary}
            </p>
            <ul
              className="mt-[20px] flex flex-wrap gap-[8px] [@media(max-width:760px)]:mt-[15px] [@media(max-width:760px)]:gap-[6px]"
              aria-label={`${project.title} technologies`}
            >
              {project.stack.slice(0, 4).map((tag) => (
                <li
                  className="rounded-[20px] border border-solid border-line px-[10px] py-[6px] text-[10px] text-[#bcbcbc] [@media(max-width:760px)]:text-[9px]"
                  key={tag}
                >
                  {tag}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
      <dialog
        ref={dialogRef}
        className="w-[min(680px,calc(100%-32px))] max-w-none max-h-[calc(100dvh-32px)] overflow-auto rounded-[8px] border border-solid border-[#383838] bg-[#151515] p-0 text-off-white [color-scheme:dark] [scrollbar-color:#555_#151515] backdrop:bg-[rgba(0,0,0,0.78)]"
        aria-labelledby="project-dialog-title"
        onClose={() => setSelected(null)}
        onClick={(event) => {
          if (event.target === event.currentTarget) event.currentTarget.close();
        }}
      >
        {selected && (
          <div>
            <div className="flex items-start justify-between gap-[20px] px-[28px] pt-[25px] pb-[22px] [@media(max-width:760px)]:px-[20px] [@media(max-width:760px)]:pt-[20px] [@media(max-width:760px)]:pb-[18px]">
              <div>
                <span className="block text-[11px] tracking-[0.05em] text-accent uppercase">
                  {selected.category}
                  {selected.private && " · Private project"}
                </span>
                <h3
                  id="project-dialog-title"
                  className="mt-[9px] [font-family:var(--font-display),sans-serif] text-[clamp(25px,3vw,35px)] leading-[1.1] font-[500] tracking-[-0.04em]"
                >
                  {selected.title}
                </h3>
              </div>
              <button
                type="button"
                className="grid h-[44px] w-[44px] flex-[0_0_44px] place-items-center rounded-[50%] border border-solid border-[#555] bg-transparent text-off-white [&:hover]:bg-off-white [&:hover]:text-ink"
                onClick={() => dialogRef.current?.close()}
                aria-label="Close project preview"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M3 3l10 10M13 3 3 13"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </svg>
              </button>
            </div>
            <div className="relative mx-[28px] my-0 aspect-[1.8] overflow-hidden rounded-[3px] bg-[#242424] [@media(max-width:760px)]:mx-[20px]">
              <Image
                src={selected.image}
                alt={selected.imageAlt}
                className="object-cover object-top"
                fill
                sizes="(max-width: 760px) 90vw, 660px"
              />
            </div>
            <div className="px-[28px] pt-[24px] pb-[28px] [@media(max-width:760px)]:p-[20px]">
              <p className="max-w-[60ch] text-[14px] leading-[1.65] text-[#d2d2d2]">
                {selected.summary}
              </p>
              {selected.imageNote && (
                <p className="mt-[12px] max-w-[60ch] text-[12px] leading-[1.65] text-[#aaa]">
                  {selected.imageNote}
                </p>
              )}
              <div className="mt-[22px] flex flex-wrap items-baseline gap-x-[20px] gap-y-[10px] [@media(max-width:760px)]:block">
                <span className="text-[11px] text-[#aaa]">Technologies</span>
                <ul
                  className="m-0 flex flex-wrap gap-x-[14px] gap-y-[4px] [@media(max-width:760px)]:mt-[10px]"
                  aria-label={`${selected.title} technologies`}
                >
                  {selected.stack.map((tag) => (
                    <li
                      className="rounded-[20px] border-0 p-0 text-[12px] text-[#d2d2d2]"
                      key={tag}
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
              {selected.externalUrl && (
                <div className="mt-[24px] flex items-center [border-top:1px_solid_#333] pt-[20px]">
                  <a
                    className="inline-flex min-h-[44px] items-center justify-between gap-[28px] rounded-[3px] bg-off-white px-[16px] py-0 text-[12px] font-[600] text-ink [transition:background_0.2s] [&:hover]:bg-[#d5d5d5] [&_svg]:text-accent-ink"
                    href={selected.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${selected.externalLabel} (opens in a new tab)`}
                  >
                    {selected.externalLabel}{" "}
                    <ArrowIcon width="16" height="16" />
                  </a>
                </div>
              )}
            </div>
          </div>
        )}
      </dialog>
    </>
  );
}
