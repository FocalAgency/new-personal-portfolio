"use client";

import { useEffect, useState } from "react";
import type { CSSProperties } from "react";

const links = [
  { href: "home", label: "Home" },
  { href: "about", label: "About" },
  { href: "work", label: "Work" },
  { href: "experience", label: "Experience" },
];

export function Navigation() {
  const [active, setActive] = useState(0);
  const [hovered, setHovered] = useState<number | null>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries)
          if (entry.isIntersecting)
            setActive(links.findIndex((link) => link.href === entry.target.id));
      },
      { rootMargin: "-15% 0px -60% 0px" },
    );
    links.forEach((link) => {
      const el = document.getElementById(link.href);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);
  return (
    <nav
      className="navigation"
      aria-label="Main navigation"
      style={{ "--nav-index": hovered ?? active } as CSSProperties}
      onMouseLeave={() => setHovered(null)}
    >
      <span className="nav-slider" aria-hidden="true" />
      {links.map((link, index) => (
        <a
          key={link.href}
          href={`#${link.href}`}
          aria-current={active === index ? "location" : undefined}
          className={(hovered ?? active) === index ? "nav-selected" : ""}
          onClick={() => setActive(index)}
          onMouseEnter={() => setHovered(index)}
          onFocus={() => setHovered(index)}
          onBlur={() => setHovered(null)}
        >
          {link.label}
        </a>
      ))}
    </nav>
  );
}
