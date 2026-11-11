"use client";

import { useEffect } from "react";

export function PageMotion() {
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    let cleanup = () => {};
    function setup() {
      cleanup();
      if (media.matches) return;
      const animations: Animation[] = [];
      const timeouts: ReturnType<typeof setTimeout>[] = [];
      const root = document.documentElement;
      const photo = document.querySelector<HTMLElement>("[data-parallax]");
      const statement = document.querySelector<HTMLElement>("[data-statement]");
      const words = Array.from(
        statement?.querySelectorAll<HTMLElement>("[data-statement-word]") ?? [],
      );
      let frame = 0;
      root.classList.add("motion-ready");
      document
        .querySelectorAll<HTMLElement>("[data-title-line]")
        .forEach((el, i) =>
          animations.push(
            el.animate(
              [
                { transform: "translateY(110%)" },
                { transform: "translateY(0)" },
              ],
              {
                duration: 1000,
                delay: 120 + i * 110,
                easing: "cubic-bezier(.16,1,.3,1)",
                fill: "backwards",
              },
            ),
          ),
        );
      document.querySelectorAll<HTMLElement>("[data-enter]").forEach((el, i) =>
        animations.push(
          el.animate(
            [
              { opacity: 0, translate: "0 14px" },
              { opacity: 1, translate: "0 0" },
            ],
            {
              duration: 750,
              delay: 140 + i * 55,
              easing: "cubic-bezier(.16,1,.3,1)",
              fill: "backwards",
            },
          ),
        ),
      );
      const photoEntrance = document.querySelector<HTMLElement>(
        "[data-photo-entrance]",
      );
      if (photoEntrance)
        animations.push(
          photoEntrance.animate(
            [
              {
                opacity: 0,
                transform: "translateY(40px)",
                filter: "blur(8px)",
              },
              { opacity: 1, transform: "translateY(0)", filter: "blur(0)" },
            ],
            {
              duration: 1300,
              easing: "cubic-bezier(.16,1,.3,1)",
              fill: "backwards",
            },
          ),
        );
      function render() {
        frame = 0;
        if (document.hidden) return;
        if (photo && window.innerWidth > 1000)
          photo.style.transform = `translateY(${Math.min(window.scrollY * 0.12, 80)}px)`;
        if (photo && window.innerWidth <= 1000)
          photo.style.removeProperty("transform");
        if (statement) {
          const rect = statement.getBoundingClientRect();
          const progress = Math.min(
            Math.max(
              (window.innerHeight * 0.85 - rect.top) /
                (rect.height + window.innerHeight * 0.2),
              0,
            ),
            1,
          );
          words.forEach((word, i) => {
            const edge = Math.min(
              Math.max(progress * (words.length + 3) - i, 0) / 3,
              1,
            );
            const value = Math.round(111 + edge * 133);
            word.style.color = `rgb(${value},${value},${value})`;
          });
        }
      }
      const schedule = () => {
        if (!frame) frame = requestAnimationFrame(render);
      };
      const counters = Array.from(
        document.querySelectorAll<HTMLElement>("[data-counter]"),
      );
      const counted = new Set<Element>();
      function count(el: HTMLElement) {
        if (counted.has(el)) return;
        counted.add(el);
        const end = Number(el.dataset.counter);
        const begin = performance.now();
        const update = () => {
          const progress = Math.min((performance.now() - begin) / 1400, 1);
          el.textContent = Math.round(end * (1 - (1 - progress) ** 3))
            .toString()
            .padStart(2, "0");
          if (progress < 1) timeouts.push(setTimeout(update, 32));
        };
        update();
      }
      const observer = new IntersectionObserver(
        (entries) =>
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              count(entry.target as HTMLElement);
              observer.unobserve(entry.target);
            }
          }),
        { threshold: 0.5 },
      );
      counters.forEach((el) => observer.observe(el));
      const revealAnimations = new Map<HTMLElement, Animation>();
      const revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            const element = entry.target as HTMLElement;
            revealAnimations.get(element)?.play();
            revealObserver.unobserve(element);
          });
        },
        { threshold: 0.01 },
      );
      function observeReveal(element: HTMLElement) {
        if (revealAnimations.has(element)) return;
        const animation = element.animate(
          [
            { opacity: 0, transform: "translateY(6px)" },
            { opacity: 1, transform: "translateY(0)" },
          ],
          {
            duration: 450,
            easing: "cubic-bezier(.2,.65,.3,1)",
            fill: "backwards",
          },
        );
        animation.pause();
        animations.push(animation);
        revealAnimations.set(element, animation);
        revealObserver.observe(element);
      }
      document.querySelectorAll<HTMLElement>("[data-reveal]").forEach(observeReveal);
      const projectGrid = document.querySelector("[data-project-grid]");
      const projectObserver = new MutationObserver((records) => {
        records.forEach((record) => {
          record.removedNodes.forEach((node) => {
            if (!(node instanceof HTMLElement)) return;
            const animation = revealAnimations.get(node);
            if (!animation) return;
            animation.cancel();
            animations.splice(animations.indexOf(animation), 1);
            revealAnimations.delete(node);
            revealObserver.unobserve(node);
          });
          record.addedNodes.forEach((node) => {
            if (node instanceof HTMLElement && node.matches("[data-reveal]")) {
              observeReveal(node);
            }
          });
        });
      });
      if (projectGrid) projectObserver.observe(projectGrid, { childList: true });
      function revealFocused(event: FocusEvent) {
        const element = (event.target as HTMLElement).closest<HTMLElement>("[data-reveal]");
        if (!element) return;
        revealAnimations.get(element)?.finish();
        revealObserver.unobserve(element);
      }
      document.addEventListener("focusin", revealFocused);
      window.addEventListener("scroll", schedule, { passive: true });
      window.addEventListener("resize", schedule);
      document.addEventListener("visibilitychange", schedule);
      schedule();
      cleanup = () => {
        cancelAnimationFrame(frame);
        timeouts.forEach(clearTimeout);
        animations.forEach((animation) => animation.cancel());
        observer.disconnect();
        revealObserver.disconnect();
        projectObserver.disconnect();
        document.removeEventListener("focusin", revealFocused);
        window.removeEventListener("scroll", schedule);
        window.removeEventListener("resize", schedule);
        document.removeEventListener("visibilitychange", schedule);
        root.classList.remove("motion-ready");
        words.forEach((word) => {
          word.style.removeProperty("color");
        });
        photo?.style.removeProperty("transform");
        counters.forEach((el) => {
          el.textContent = String(el.dataset.counter).padStart(2, "0");
        });
      };
    }
    setup();
    media.addEventListener("change", setup);
    return () => {
      cleanup();
      media.removeEventListener("change", setup);
    };
  }, []);
  return null;
}
