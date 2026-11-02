"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { profile, type Project } from "@/data/portfolio";
import { ArrowIcon } from "@/components/ui/icons";

const filters = [
  "All work",
  "Web development",
  "Full stack",
  "Creative development",
] as const;

export function ProjectGallery({ projects }: { projects: Project[] }) {
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
      <div className="gallery-toolbar">
        <div
          className="filters"
          role="group"
          aria-label="Project filters and links"
        >
          {availableFilters.map((label) => (
            <button
              key={label}
              type="button"
              aria-pressed={activeFilter === label}
              onClick={() => setFilter(label)}
            >
              {label}
              <span>
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
            className="gallery-github"
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
        <span className="gallery-count" aria-live="polite">
          {visible.length.toString().padStart(2, "0")} projects
        </span>
      </div>
      <div className="project-grid">
        {visible.map((project) => (
          <article className="project-card" key={project.slug}>
            <button
              type="button"
              className="project-media"
              aria-label={`Preview ${project.title}`}
              onClick={() => {
                setSelected(project);
                dialogRef.current?.showModal();
              }}
            >
              <span className={`project-image project-image-${project.slug}`}>
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  sizes="(max-width: 760px) 90vw, 45vw"
                />
                <span className="project-view">View project <ArrowIcon width="15" height="15" /></span>
                {project.private && (
                  <span className="private-label">Private project</span>
                )}
              </span>
            </button>
            <div className="project-caption">
              <div>
                <p className="project-category">{project.category}</p>
                <h3>{project.title}</h3>
              </div>
              <span className="project-index">
                {(projects.indexOf(project) + 1).toString().padStart(2, "0")}
              </span>
            </div>
            <p className="project-summary">{project.summary}</p>
            <ul
              className="project-tags"
              aria-label={`${project.title} technologies`}
            >
              {project.stack.slice(0, 4).map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
      <dialog
        ref={dialogRef}
        className="project-dialog"
        aria-labelledby="project-dialog-title"
        onClose={() => setSelected(null)}
        onClick={(event) => {
          if (event.target === event.currentTarget) event.currentTarget.close();
        }}
      >
        {selected && (
          <div className="project-preview">
            <div className="preview-topline">
              <div className="preview-heading">
                <span className="preview-category">{selected.category}{selected.private && " · Private project"}</span>
                <h3 id="project-dialog-title">{selected.title}</h3>
              </div>
              <button
                type="button"
                className="preview-close"
                onClick={() => dialogRef.current?.close()}
                aria-label="Close project preview"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 3l10 10M13 3 3 13" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </button>
            </div>
            <div className="preview-image">
              <Image
                src={selected.image}
                alt={selected.imageAlt}
                fill
                sizes="(max-width: 760px) 90vw, 660px"
              />
            </div>
            <div className="preview-content">
              <p>{selected.summary}</p>
              {selected.imageNote && <p className="preview-note">{selected.imageNote}</p>}
              <div className="preview-details">
                <span className="preview-detail-label">Technologies</span>
                <ul className="project-tags" aria-label={`${selected.title} technologies`}>
                  {selected.stack.map((tag) => <li key={tag}>{tag}</li>)}
                </ul>
              </div>
              {selected.externalUrl && (
                <div className="preview-footer">
                  <a
                    className="preview-link"
                    href={selected.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${selected.externalLabel} (opens in a new tab)`}
                  >
                    {selected.externalLabel} <ArrowIcon width="16" height="16" />
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
