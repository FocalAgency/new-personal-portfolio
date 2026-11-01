# Security review — 1 November 2026

Scope: local source, dependency lockfile, public assets and a locally served production build. This is a focused review, not a certification or a review of a deployed host.

| Status         | Check                 | Result                                                                                                                                                                                                                                   |
| -------------- | --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| PASS           | Dependency advisories | `npm audit --json` returned zero known vulnerabilities in the installed dependency tree.                                                                                                                                                 |
| PASS           | Credentials           | No environment files, private-key/token candidates or sensitive public file extensions found in the project scan. The Web3Forms identifier is a public form key, not a secret.                                                           |
| PASS           | Rendering             | Portfolio text uses React rendering; no raw HTML insertion, eval, user uploads, custom API routes or database queries found.                                                                                                             |
| PASS           | Form behaviour        | Required typed fields, client length limits, duplicate-submit guard, honeypot, HTTPS endpoint, 20-second timeout, strict HTTP/JSON acknowledgment checks and draft preservation on failure. No submissions were sent during review.      |
| PASS           | External links        | Links opening a new tab use `noopener noreferrer`.                                                                                                                                                                                       |
| PASS           | Browser headers       | Production responses contain CSP, Permissions-Policy, frame denial, MIME sniffing protection and strict-origin referrer policy. Framework identification header disabled.                                                                |
| PASS           | Third-party assets    | Fonts and visual assets are served locally. No analytics, tracking scripts, cookies or browser storage implemented in the reviewed source.                                                                                               |
| NOT VERIFIED   | Provider account      | Recipient ownership, quotas, domain restrictions, provider-side validation, integrations, spam limits and actual inbox delivery require account-level verification. Client-side limits can be bypassed.                                  |
| GAP            | Privacy information   | The contact form has no published privacy notice. Establish actual purposes, recipient, retention/deletion and provider arrangements before publishing a factual notice. No legal basis, address or retention promise has been invented. |
| NOT VERIFIED   | Public deployment     | HTTPS redirects, HSTS and hosting/firewall settings cannot be established from localhost.                                                                                                                                                |
| NOT APPLICABLE | Other surfaces        | No authentication, payments, database, uploads or webhooks.                                                                                                                                                                              |

## Header choices

The production CSP restricts network connections and form submission to this origin and Web3Forms, prohibits embedded frames/objects and restricts base URLs. Next.js bootstrap scripts and inline styles require `unsafe-inline` in this static setup; this is a limitation rather than a strict nonce-based CSP. The CSP is omitted in development so it does not block the development runtime. Camera, microphone, geolocation, payment and USB permissions are denied.

## Provider data flow

Name, email and message are transmitted directly from the visitor to Web3Forms. The provider's current privacy policy describes storage and subprocessors; API acceptance does not prove inbox delivery. The public-key model is documented in the [Web3Forms FAQ](https://docs.web3forms.com/getting-started/faq). Use the [current privacy policy](https://web3forms.com/privacy) when assessing retention; do not rely on older claims that submissions are never stored.

No live email, intrusive scan, account change or deployment was performed for this review. Re-run the dependency audit and production checks before a later release.
