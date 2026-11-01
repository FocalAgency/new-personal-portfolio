# Verification — 1 November 2026

## Automated

- Six tests cover curated content/assets, private-project wording, profile data, confirmed form success, provider/HTTP/malformed response failures and network failure without lost entries.
- Production build and TypeScript checks pass.
- Source/config formatting checked with Prettier; no formatter dependency was added to the app.
- Dependency audit: zero known vulnerabilities at review time.
- HTTP checks confirm the homepage, favicon and active artwork/project assets; removed project routes return 404.

## Browser checks

Final browser verification covers desktop/mobile layouts, unchanged hero composition, category filters, the GitHub destination, contact validation, keyboard controls and production CSP console errors. Recorded evidence is retained with the separate design archive rather than shipped as public assets.

## Limits

No live message was sent. Actual delivery and Web3Forms account controls remain unverified. Production hosting/HTTPS/HSTS and manual screen-reader testing are outside the verified local scope. See `security.md` for the remaining privacy/provider follow-ups.

## Contact refinement

The contact form now uses one contained panel with an introduction and form columns on desktop, stacked on phones. Public email text, mail links and the copy-email component were removed. Footer spacing is 104px below the form on desktop and 64px on mobile. Browser checks at 1440px and 320px found no horizontal overflow; required-field validation focuses the name field. Production build and all six tests pass after these changes.
