"use client";

import Image from "next/image";
import { useState } from "react";
import { profile, type Project } from "@/data/portfolio";
import { ArrowIcon } from "@/components/ui/icons";

const filters = [
  "All work",
  "Web development",
  "Full stack",
  "Creative development",
] as const;

export function ProjectGallery({ projects }: { projects: Project[] }) {
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
            <div className="project-media">
              <span className={`project-image project-image-${project.slug}`}>
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  sizes="(max-width: 760px) 90vw, 45vw"
                />
                {project.private && (
                  <span className="private-label">Private project</span>
                )}
              </span>
            </div>
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
    </>
  );
}
