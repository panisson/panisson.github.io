# panisson.github.io

André Panisson's personal academic website, hosted via **GitHub Pages** at [panisson.github.io](https://panisson.github.io) (custom domain: [andre.panisson.com](https://andre.panisson.com)).

It's a **single-file static site** — no build system, no framework, no dependencies to install.

## Quick start

Just open [index.html](index.html) in a browser, or serve it locally:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

There are no tests, linters, or CI pipelines. Deployment is automatic: pushing to the default branch publishes the site via GitHub Pages.

## Architecture

Almost everything lives in one file:

- **[index.html](index.html)** — self-contained: all HTML, CSS (in a `<style>` block), and JS (scroll spy) live here. No external CSS/JS frameworks or build step.
- **Dark theme** with an amber accent (`--accent: #e9c46a`), driven by CSS custom properties (design tokens) defined in `:root`.
- **Layout**: CSS Flexbox — a fixed-width sidebar (`--sidebar-w: 268px`) plus a scrollable content area, the whole thing centered with `max-width: 1120px`.
- **Sidebar**: `position: sticky`, with a globe background image ([img/network.jpg](img/network.jpg)) applied via a `::before` pseudo-element and `filter: brightness(2.2)` to lift a very dark source image.
- **Responsive**: below `max-width: 960px` the sidebar collapses into a full-width stacked layout.
- **Fonts/icons**: Google Fonts *Inter* and Font Awesome 4.7.0, both loaded from CDN (`<link>` tags in `<head>`).
- **Scroll spy**: a small vanilla-JS IIFE at the bottom of the file highlights the active sidebar nav link based on scroll position, plus a smooth-scroll fallback for `href="#..."` links.

### Content sections

`index.html` sections, in order, each a `<section id="...">`:

| Section | id | Notes |
|---|---|---|
| About | `about` | Bio — mirrors [docs/about.md](docs/about.md) |
| Experience | `experience` | Timeline, `.exp-item` entries |
| Publications | `publications` | Grouped by year, `.venue-tag` pills for top venues |
| Teaching & Supervision | `teaching` | |
| Community & Service | `service` | |
| Contact | `contact` | |

### Conventions

- All styling is inline in the `<style>` block in `index.html` — there are no external stylesheets to edit for the current design.
- Publications use `<p class="pub">`, with an optional `<span class="venue-tag">` to badge top conferences/journals.
- Year dividers between publication groups use `<div class="year-divider"><span>YYYY</span></div>`.
- Experience entries use `.exp-item` / `.exp-role` / `.exp-org` / `.exp-date` / `.exp-desc`.

## Repository layout

```
index.html          The entire live site — edit content here
index-old.html       Backup of the previous Bootstrap-based design (not served, kept for reference)
docs/
  Andre_Panisson_CV_2026.pdf/.docx   Current CV — linked from the sidebar, and the
                     source of truth for most site content (see "CV note" below)
  about.md           Bio source text for the About section
  curr-en-2025-updated.pdf   Previous CV, no longer linked
img/
  network.jpg        Sidebar background image
css/, js/, fonts/, font-awesome/
                      Legacy assets from the old Bootstrap design — NOT used by the current index.html
Licensing/            Creative Commons (non-commercial) license text for site content
```

> **css/, js/, fonts/, font-awesome/** are only referenced by the retired `index-old.html`. When working on the current site you generally don't need to touch them.

### CV note

The sidebar's "CV" download points to `docs/Andre_Panisson_CV_2026.pdf` (the `.docx` next to it is the editable source). When a new CV is produced, drop the PDF into `docs/` and update the `href` in [index.html](index.html) — search for `docs/Andre_Panisson_CV_2026.pdf`. The older `curr-en-2025-updated.pdf` is kept but no longer linked.

The CV is also the **source of truth for site content**: About text, Experience entries, publication list, teaching, and service sections are all derived from it. When the CV changes, mirror the changes into the corresponding `<section>` of `index.html`.

## Making content changes

Since everything is in one HTML file, the usual workflow is:

1. Open `index.html` and jump to the relevant `<section id="...">`.
2. Follow the existing markup conventions for that section (see [Conventions](#conventions) above) so styling stays consistent.
3. Preview locally (`python3 -m http.server 8000`) before committing.
4. Commit and push — GitHub Pages redeploys automatically from the default branch.

## License

Site content is licensed under Creative Commons (non-commercial) — see [Licensing/](Licensing/).
