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
      className="[--nav-width:78px] relative grid [grid-template-columns:repeat(4,_var(--nav-width))] [padding:5px] [background:rgba(255,_255,_255,_0.65)] [border:1px_solid_rgba(255,_255,_255,_0.2)] rounded-[40px] [backdrop-filter:blur(20px)] [&_a]:relative [&_a]:z-[1] [&_a]:text-center [&_a]:[padding:0_4px] [&_a]:text-[12px] [&_a]:leading-[44px] [&_a]:min-h-[44px] [&_a]:[transition:color_0.2s] [&_a:focus-visible]:rounded-[30px] [&_a:focus-visible]:[outline-offset:2px] [&_[data-selected=true]]:text-off-white [&_[data-selected=true]::after]:[content:''] [&_[data-selected=true]::after]:absolute [&_[data-selected=true]::after]:bottom-[5px] [&_[data-selected=true]::after]:left-[calc(50%_-_2px)] [&_[data-selected=true]::after]:w-[4px] [&_[data-selected=true]::after]:h-[4px] [&_[data-selected=true]::after]:rounded-[50%] [&_[data-selected=true]::after]:bg-accent-on-dark [@media(max-width:1000px)]:w-[100%]! [@media(max-width:1000px)]:max-w-[640px]! [@media(max-width:1000px)]:[margin:0_auto]! [@media(max-width:1000px)]:[grid-template-columns:repeat(4,_minmax(0,_1fr))]! [@media(max-width:1000px)]:[padding:4px]! [@media(max-width:1000px)]:[&_a]:text-[12px]! [@media(max-width:1000px)]:[&_a]:leading-[44px]! [@media(max-width:1000px)]:[&_a]:min-h-[44px]!"
      aria-label="Main navigation"
      style={{ "--nav-index": hovered ?? active } as CSSProperties}
      onMouseLeave={() => setHovered(null)}
    >
      <span
        className="absolute left-[5px] top-[5px] h-[44px] w-[var(--nav-width)] bg-ink rounded-[30px] [transform:translateX(calc(var(--nav-index)_*_100%))] [transition:transform_0.35s_var(--ease)] [@media(max-width:1000px)]:w-[calc((100%_-_8px)_/_4)]! [@media(max-width:1000px)]:top-[4px]! [@media(max-width:1000px)]:left-[4px]! [@media(max-width:1000px)]:h-[44px]!"
        aria-hidden="true"
      />
      {links.map((link, index) => (
        <a
          key={link.href}
          href={`#${link.href}`}
          aria-current={active === index ? "location" : undefined}
          data-selected={(hovered ?? active) === index}
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
