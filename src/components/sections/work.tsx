import { projects } from "@/data/portfolio";
import { ProjectGallery } from "@/components/projects/project-gallery";

export function Work() {
  const projectCount = projects.length.toString().padStart(2, "0");
  return (
    <section
      className="work section-pad"
      id="work"
      aria-labelledby="work-heading"
    >
      <div className="section-kicker">
        <span className="eyebrow">
          <i className="dot" /> THE WORK, SO FAR
        </span>
        <span className="eyebrow">(02 — SELECTED PROJECTS)</span>
      </div>
      <div className="section-heading">
        <h2 id="work-heading">
          Selected
          <br />
          <span>work.</span>
          <sup>({projectCount})</sup>
        </h2>
        <p>
          A selection of applications, interfaces
          <br />
          and experiments. Different challenges.
          <br />
          <span>The same attention to detail.</span>
        </p>
      </div>
      <ProjectGallery projects={projects} />
    </section>
  );
}
