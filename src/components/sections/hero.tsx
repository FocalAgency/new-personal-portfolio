import Image from "next/image";
import { Navigation } from "@/components/ui/navigation";
import { ArrowIcon } from "@/components/ui/icons";
import { projects } from "@/data/portfolio";

export function Hero() {
  const projectCount = projects.length.toString().padStart(2, "0");
  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <div className="hero-photo-entrance">
        <div className="hero-photo" data-parallax>
          <picture>
            <source
              media="(max-width: 1000px)"
              srcSet="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
            />
            <Image
              src="/images/hero/bankai.png"
              alt=""
              fill
              fetchPriority="high"
              sizes="(max-width: 1100px) 65vw, 52vw"
            />
          </picture>
        </div>
        <span className="artwork-caption">VISUAL STUDY / 001</span>
      </div>
      <header className="header">
        <Navigation />
        <div className="header-right">
          <span className="location-label">
            Independent developer
            <br />
            <span>Based in the United Kingdom</span>
          </span>
          <a
            href="#contact"
            className="button button-dark header-contact"
            aria-label="Contact Kasam Ali"
          >
            <span>Let’s talk</span>
            <ArrowIcon />
          </a>
        </div>
      </header>
      <div className="hero-intro">
        <p className="eyebrow" data-enter>
          <span className="tiny-cross">+</span> KASAM ALI · PORTFOLIO
        </p>
        <h1 id="hero-title">
          <span className="title-mask">
            <span data-title-line>CREATIVE</span>
          </span>
          <span className="title-mask">
            <span data-title-line>
              DEVELOPER<span className="title-period">.</span>
            </span>
          </span>
        </h1>
        <div className="hero-about" data-enter>
          <span className="eyebrow">
            <i className="dot" /> (THE INTRODUCTION)
          </span>
          <p>
            I’m Kasam. I work across design and code
            <br className="desktop-break" /> to build websites that feel a
            little different.
          </p>
          <a className="button button-dark" href="#work">
            Explore my work <ArrowIcon />
          </a>
        </div>
      </div>
      <div className="hero-side" data-enter>
        <div className="availability">
          <span className="availability-icon">↗</span> Open to opportunities
        </div>
        <div className="hero-side-copy">
          Good ideas deserve
          <br />
          <span>great execution.</span>
        </div>
        <div className="featured-project">
          <span className="eyebrow">
            THE CREATIVE SIDE <span>↗</span>
          </span>
          <span className="featured-image">
            <Image
              src="/images/projects/block.png"
              alt="Hyperactive block reveal animation experiment"
              fill
              sizes="210px"
            />
          </span>
          <span className="featured-caption">
            Hyperactive Block Reveal<span>Next.js / GSAP</span>
          </span>
          <span className="featured-progress" />
        </div>
      </div>
      <div className="hero-bottom" data-enter>
        <div className="hero-mini-card">
          <div className="mini-stat">
            <span className="mini-number">
              {projectCount}
              <span>↗</span>
            </span>
            <p>
              Selected projects.
              <br />
              <span>A few different disciplines.</span>
            </p>
            <a href="#work">
              View the collection <ArrowIcon width="14" height="14" />
            </a>
          </div>
          <div className="mini-stack">
            <span className="eyebrow">MY EVERYDAY TOOLS</span>
            <span>Next.js</span>
            <span>React</span>
            <span>TypeScript</span>
            <span className="mini-stack-bottom">Ideas → Interfaces</span>
          </div>
        </div>
        <div className="hero-signature">
          <span>FRONTEND</span>
          <span className="signature-symbol">✳</span>
          <span>BACKEND</span>
          <span className="signature-symbol">✳</span>
          <span>THE DETAILS</span>
        </div>
        <a href="#about" className="hero-scroll" aria-label="Scroll to about">
          <span>SCROLL TO EXPLORE</span>
          <span className="round-arrow">
            <ArrowIcon />
          </span>
        </a>
      </div>
    </section>
  );
}
