# Project structure

```text
src/
  app/                   Next.js routes, metadata, favicon and CSS entry
  components/
    sections/            Server-rendered homepage sections
    ui/                  Shared navigation, icons and clipboard control
    projects/            Filterable project gallery
    contact/             Form fields, feedback and form styles
    motion/              Animation lifecycle and reduced-motion handling
  data/portfolio.ts      Portfolio content and contact links
  lib/contact.ts         Web3Forms request and response handling
  styles/                Base tokens and section-specific CSS
public/
  brand/                 Black and red SVG marks
  fonts/                 Self-hosted fonts and licences
  images/hero/           Selected desktop artwork
  images/projects/       Four project screenshots
tests/                   Content contracts and isolated form-request tests
docs/                    Architecture, security and verification notes
```

`app/page.tsx` composes the homepage sections, with a separate semantic footer. Keep static layout in server components; use client components only for interaction. There is no custom API or database. The contact form posts directly to its configured provider, while its request helper can be tested with an injected mock.

`app/globals.css` imports `styles/base.css` and the section styles. Reuse the tokens in `base.css`; do not introduce a second component library or duplicate colour system. The contact form keeps its small stylesheet alongside its component.

The existing hero composition is preserved. Artwork is hidden at 1000px and below, with a mobile picture source that avoids downloading the full desktop image. Reduced motion leaves content readable and disables animation. Images, fonts and icons are local.

Working code contains no design experiments, recording/demo mode, obsolete project routes or workflow notes. Previous design material and a pre-cleanup backup remain outside this repository in the sibling `portfolio-design-archive` folder. Source projects in adjacent folders were not modified.
