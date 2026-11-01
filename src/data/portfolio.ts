export type Project = {
  slug: string;
  title: string;
  category: "Web development" | "Full stack" | "Creative development";
  summary: string;
  details: string[];
  stack: string[];
  image: string;
  imageAlt: string;
  imageNote?: string;
  private?: boolean;
  externalUrl?: string;
  externalLabel?: string;
};

export const projects: Project[] = [
  {
    slug: "focal-studio",
    title: "Focal Studio Agency",
    category: "Full stack",
    summary:
      "The agency website I designed and developed for Focal Studio, combining an editorial interface, responsive motion and a complete project enquiry flow.",
    details: [
      "Designed and built a responsive Next.js agency website with reusable homepage sections and dedicated hospitality and MVP development pages.",
      "Integrated hero media, GSAP reveals and Lenis smooth scrolling, with reduced-motion support and keyboard-friendly fallbacks.",
      "Developed a project enquiry dialog with service, budget and timeline selection, submission feedback and focus restoration.",
      "Implemented server-side enquiry handling with validated inputs, request limits, honeypot protection and Brevo email integration.",
      "Configured canonical metadata, social previews, structured data, a sitemap and crawler rules, with Node tests and Playwright coverage for key flows.",
    ],
    stack: [
      "Next.js",
      "React",
      "JavaScript",
      "Tailwind CSS",
      "GSAP",
      "Lenis",
      "Brevo API",
    ],
    image: "/images/projects/focal-studio.png",
    imageAlt:
      "Focal Studio agency homepage with a dark editorial hero, a luminous orb and a project enquiry call to action.",
    externalUrl: "https://www.focal-studio.co.uk",
    externalLabel: "Visit website",
  },
  {
    slug: "tabb",
    title: "Tabb platform migration",
    category: "Full stack",
    summary:
      "Contributing to the modernization of a filmmaking community platform, moving from Ruby on Rails toward a modular TypeScript architecture.",
    details: [
      "Contributed to migrating a legacy Ruby on Rails application to separate Next.js frontend and NestJS backend services.",
      "Worked with Prisma ORM and PostgreSQL for type-safe data access and schema management.",
      "Developed and refactored modules including authentication, profiles and opportunities.",
      "Supported Heroku pipelines and staging-to-production workflows, and documented the migration process and technical findings.",
    ],
    stack: [
      "Next.js",
      "NestJS",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Heroku",
    ],
    image: "/images/projects/tabb.png",
    imageAlt:
      "Public Tabb homepage introducing its profiling and team-forming platform for filmmakers.",
    imageNote:
      "Public platform homepage shown for context. The migration implementation and source code are private.",
    private: true,
    externalUrl: "https://tabb.cc/",
    externalLabel: "Visit public platform",
  },
  {
    slug: "block",
    title: "Hyperactive block reveal",
    category: "Creative development",
    summary:
      "A GSAP-powered motion experiment that turns page transitions into a randomized grid of revealing blocks.",
    details: [
      "Built a responsive grid of transition blocks with GSAP and Next.js App Router.",
      "Connected route changes to randomized staggered leave and enter animations using next-transition-router.",
      "Used precise duration, delay and easing controls to coordinate the cover and reveal phases.",
      "Recreated the transition grid on resize and cleaned up event listeners and animation work across the page lifecycle.",
    ],
    stack: ["Next.js", "React", "JavaScript", "GSAP", "Tailwind CSS"],
    image: "/images/projects/block.png",
    imageAlt:
      "Hyperactive Block Reveal Homebase page with a cyan and purple science-fiction scene.",
    externalUrl: "https://block-reveal-animation.vercel.app/",
    externalLabel: "Open project",
  },
  {
    slug: "moonstone",
    title: "Moonstone admin module",
    category: "Full stack",
    summary:
      "Private administrative tooling for Lunim and Tabb, bringing shared components and structured content into one module.",
    details: [
      "Contributed to a shared administration module designed to support both Lunim and Tabb.",
      "Worked with Next.js, NestJS and Prisma across frontend components and backend services.",
      "Integrated Prismic CMS and Slice Machine for structured content and identity-related flows.",
      "Developed reusable components and shared services to support consistent management across the platforms.",
    ],
    stack: ["Next.js", "NestJS", "TypeScript", "Prisma", "Prismic CMS"],
    image: "/images/projects/moonstone.png",
    imageAlt:
      "Public Lunim film-project landing page titled The Moonstone Legacy Quartet.",
    imageNote:
      "The inherited image shows the public Lunim film site for context; it is not a screenshot of the private admin module. Source code is private.",
    private: true,
  },
];

export const profile: {
  name: string;
  location: string;
  socials: { name: string; href: string }[];
} = {
  name: "Kasam Ali",
  location: "United Kingdom",
  socials: [
    { name: "GitHub", href: "https://github.com/FocalAgency" },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/kasam-software-engineer/",
    },
    { name: "Instagram", href: "https://www.instagram.com/veridiite.wav/" },
  ],
};

export const experiences: {
  role: string;
  company: string;
  period: string;
  details: string[];
}[] = [
  {
    role: "Software Developer",
    company: "Focal Studio · Product Design Agency",
    period: "2025–present",
    details: [
      "Contributed to the design and development of websites and web applications for client projects.",
      "Built reusable interfaces and CMS-driven content workflows to help teams manage pages, content and updates.",
      "Worked across frontend and backend implementation, connecting interfaces with APIs and content services.",
    ],
  },
  {
    role: "Software Engineer Intern",
    company: "Lunim Studio / Tabb",
    period: "2024–2025",
    details: [
      "Contributed to migrating legacy Ruby on Rails systems into Next.js frontend and NestJS backend services for a filmmaking community platform.",
      "Developed and refactored authentication, profile and opportunities modules with Prisma ORM and PostgreSQL.",
      "Supported CI/CD and multi-service deployments through Heroku pipelines across development, staging and production.",
      "Worked with Prismic Slice Machine on Moonstone content structures and identity flows, connecting CMS content, frontend components and backend services.",
      "Collaborated across teams and used Postman for API testing and migration documentation.",
    ],
  },
];

export const skillGroups: { label: string; items: string[] }[] = [
  {
    label: "Frontend",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML & CSS",
      "Tailwind CSS",
      "GSAP",
      "Motion",
      "Three.js",
      "React Three Fiber",
      "Blazor",
    ],
  },
  {
    label: "Backend",
    items: [
      "NestJS",
      "Prisma",
      "PostgreSQL",
      "C#",
      "ASP.NET Core",
      "Entity Framework Core",
      "SQLite",
      "Auth0",
      "Ruby on Rails migration",
    ],
  },
  {
    label: "Tools & platforms",
    items: [
      "Git",
      "Vite",
      "Heroku",
      "CI/CD",
      "Postman",
      "Prismic CMS",
      "WordPress",
      "C++",
    ],
  },
];
