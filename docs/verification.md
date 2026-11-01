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
