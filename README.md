# Personal Portfolio · Kasam Ali

My personal website, bringing together selected development projects, professional experience and the tools I work with. Built with Next.js and TypeScript, with a monochrome visual identity, restrained crimson accents and responsive layouts.

![Desktop preview of Kasam Ali’s personal portfolio](.github/preview.jpg)

## Overview

- Selected work across full-stack applications and creative web development.
- Professional experience at Focal Studio and Lunim Studio / Tabb.
- A filterable project gallery and a streamlined contact form.
- Self-hosted typography, optimized local images and reduced-motion support.

## Technology

| Area       | Technology                                       |
| ---------- | ------------------------------------------------ |
| Framework  | Next.js App Router, React                        |
| Language   | TypeScript                                       |
| Styling    | CSS with shared design tokens and section styles |
| Motion     | Web Animations API and Intersection Observer     |
| Contact    | Web3Forms                                        |
| Typography | Archivo and Inter Tight, self-hosted             |

## Getting started

Requires **Node.js 22.18 or later** and npm.

```sh
git clone https://github.com/FocalAgency/new-personal-portfolio.git
cd new-personal-portfolio
npm ci
npm run dev
```

Open [localhost:3000](http://127.0.0.1:3000). The project can be opened directly in VS Code.

| Command             | Purpose                               |
| ------------------- | ------------------------------------- |
| `npm run dev`       | Start the development server          |
| `npm run build`     | Create the production build           |
| `npm start`         | Serve the production build locally    |
| `npm run typecheck` | Check TypeScript types                |
| `npm test`          | Run content and contact-request tests |

To use another port, append `-- --port 3001` to the development or start command.

## Project structure

```text
src/
  app/                  Routes, metadata and global style entry
  components/
    sections/           Homepage sections and footer
    ui/                 Navigation and shared icons
    projects/           Filterable project gallery
    contact/            Contact form and feedback
    motion/             Animation lifecycle
  data/portfolio.ts     Projects, experience, skills and social links
  lib/contact.ts        Contact provider integration
  styles/               Design tokens and section styles
public/
  brand/                Logo assets
  fonts/                Local fonts and licence notices
  images/               Hero artwork and project screenshots
tests/                  Content and contact-request tests
```

## Customization

Update portfolio content in `src/data/portfolio.ts`, section layouts in `src/components/sections/`, and shared colours, spacing and typography in `src/styles/base.css`.

The contact form uses a public Web3Forms identifier in `src/lib/contact.ts`. No environment file is required for local development. Configure your own provider account and verify delivery before using the form for a different recipient.

Private project implementations are described without publishing their source code. Their screenshots show related public platforms for context.

## Licence

This personal project does not include an open-source licence. Font licence notices are included in `public/fonts/licenses/`.
