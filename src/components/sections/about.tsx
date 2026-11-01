import { skillGroups } from "@/data/portfolio";
import { ArrowIcon, Asterisk } from "@/components/ui/icons";

const statement =
  "I build thoughtful digital experiences. Bringing together considered design, creative development and reliable engineering to turn complex ideas into things that feel simple.";

export function About() {
  return (
    <>
      <div className="editorial-bar">
        <span>
          BUILT <span>WITH INTENTION</span>
        </span>
        <a href="#about">
          SCROLL DOWN <span className="bar-arrow">↓</span>
        </a>
        <span>CODE IN THE DETAILS</span>
      </div>

      <section
        className="about section-pad"
        id="about"
        aria-labelledby="about-heading"
      >
        <div className="section-kicker">
          <span className="eyebrow">
            <i className="dot" /> A LITTLE ABOUT ME
          </span>
          <span className="eyebrow">(01 — THE APPROACH)</span>
        </div>
        <h2 className="statement" id="about-heading" data-statement>
          {statement.split(" ").map((word, i) => (
            <span className="statement-word" key={i}>
              {word}{" "}
            </span>
          ))}
        </h2>
        <div className="about-bottom">
          <div className="about-symbol">
            <Asterisk />
          </div>
          <p>
            From the first interaction to what happens behind it.
            <br />
            <span>I care about how the whole thing works.</span>
          </p>
          <a href="#experience" className="text-link">
            A bit of my background <ArrowIcon />
          </a>
        </div>
        <div className="skill-panel">
          <div className="skill-panel-intro">
            <span className="eyebrow">THE TOOLKIT</span>
            <h3>
              Different tools.
              <br />
              One considered
              <br />
              <span>outcome.</span>
            </h3>
            <p>
              A practical mix of frontend craft,
              <br />
              backend thinking and curiosity.
            </p>
          </div>
          {skillGroups.map((group, i) => (
            <div className="skill-group" key={group.label}>
              <span className="skill-index">0{i + 1} /</span>
              <h4>{group.label}</h4>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
