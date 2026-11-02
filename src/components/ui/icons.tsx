import type { SVGProps } from "react";

export function ArrowIcon({
  direction = "up-right",
  ...props
}: SVGProps<SVGSVGElement> & { direction?: "up-right" | "up" | "down" }) {
  const paths = {
    "up-right": "M5 19 19 5M5 5h14v14",
    up: "M12 19V5M5 12l7-7 7 7",
    down: "M12 5v14M5 12l7 7 7-7",
  };
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      {...props}
    >
      <path
        d={paths[direction]}
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function BrandMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="38"
      height="38"
      viewBox="0 0 64 64"
      fill="none"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M32 4 38.86 21.14 21.14 38.86 4 32 24 24ZM32 60 25.14 42.86 42.86 25.14 60 32 40 40Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function Asterisk(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="54"
      height="54"
      viewBox="0 0 60 60"
      fill="none"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M30 3v54M3 30h54M11 11l38 38M11 49l38-38"
        stroke="currentColor"
        strokeWidth="8"
      />
    </svg>
  );
}
