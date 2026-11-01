import { experiences, projects } from "@/data/portfolio";
import { ArrowIcon } from "@/components/ui/icons";

export function Experience() {
  const projectCount = projects.length.toString().padStart(2, "0");
  return (
    <section
      className="experience section-pad"
      id="experience"
      aria-labelledby="experience-heading"
    >
      <div className="section-kicker">
        <span className="eyebrow">
          <i className="dot" /> THE JOURNEY
        </span>
        <span className="eyebrow">(03 — EXPERIENCE)</span>
      </div>
      <div className="experience-layout">
        <div className="experience-intro">
          <h2 id="experience-heading">
            Built on
            <br />
            <span>experience.</span>
          </h2>
          <p>
            Learning by doing.
            <br />
            Growing with every challenge.
          </p>
          <div className="experience-stat">
            <span data-counter={projects.length}>{projectCount}</span>
            <span>
              Projects in
              <br />
              this collection <ArrowIcon />
            </span>
          </div>
        </div>
        <div className="experience-list">
          {experiences.map((experience, i) => (
            <article className="experience-item" key={experience.role}>
              <div className="experience-top">
                <span className="experience-number">0{i + 1}</span>
                <p>{experience.period}</p>
              </div>
              <h3>{experience.role}</h3>
              <span className="experience-company">{experience.company}</span>
              <ul>
                {experience.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
