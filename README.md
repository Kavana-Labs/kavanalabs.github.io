# KES SOP Library

A static GitHub Pages website for Kavana Labs Engineering Series standard operating procedures, themed to match the Kavana Labs brand (kavanalabs.org).

## Included files

```text
.
├── index.html
├── 404.html
├── .nojekyll
├── README.md
├── assets/
│   ├── site.css
│   ├── site.js
│   ├── logo-nav.svg
│   ├── arrow-light.svg
│   ├── favicon.png
│   ├── fonts/
│   │   ├── manifold-extended-demibold.woff2
│   │   └── 42dot-sans-latin.woff2
│   └── volunteer-recruitment-onboarding-flow.png
└── sops/
    └── volunteer-recruitment-onboarding.html
```

## Deploy

GitHub Pages deploys from the repository root. Commit and push to `main`:

```bash
git add .
git commit -m "Update SOP library"
git push
```

The landing page will be available at the repository's GitHub Pages URL. The volunteer SOP will be at:

```text
/sops/volunteer-recruitment-onboarding.html
```

## Add another SOP

1. Duplicate `sops/volunteer-recruitment-onboarding.html`.
2. Rename the duplicate using a short lowercase slug, for example `participant-onboarding.html`.
3. Update its title, meta description, document control, navigation and SOP content.
4. Add a new card to the `sop-grid` in `index.html`.
5. Add any SOP-specific images to `assets/` and reference them using `../assets/filename.png` from an SOP page.

## Brand

The theme mirrors the main Kavana Labs website. Tokens live at the top of `assets/site.css`:

- **Surfaces** — black `#000000` heroes/footer with an engineering grid and purple glow orb; off-white `#f9fafb` / light `#f3f4f6` content sections.
- **Ink ramp** — the Tailwind gray ramp (`#f9fafb` → `#111827`) used across the main site.
- **Accent** — brand glow purple `#9d87fb` (focus rings, checklist boxes, active states, highlights).
- **Headings** — Manifold Extended CF Demi Bold with the site's clipped gradients (`#6d6d6d → #c2c3c3` on dark, `#2e2e2f → #616266` on light).
- **Body** — 42dot Sans (variable). **Mono labels** — Cascadia Code stack (eyebrows, badges, chips).
- **Buttons** — the signature pill: white→grey gradient with a dark circular arrow badge and purple glow, or the 1px outline pill.

### Font licensing note

`manifold-extended-demibold.woff2` is the Fontspring **demo** cut (same file the main site ships). The demo watermarks digit `4` and most ASCII punctuation, so its `@font-face` carries a `unicode-range` whitelist — excluded characters intentionally fall back to 42dot Sans. Do not remove that `unicode-range` until the full Manifold family is licensed.

## Language

Use "programs" (never "programmes"), "Kavana Labs Engineering Series" (never "Kavana Education System"), and "KES 001" for the active module.

## Optional custom domain

Do not add a `CNAME` file unless you have selected the domain or subdomain. When ready, create a root-level file named `CNAME` containing only the domain, for example:

```text
sops.kavanalabs.org
```

Then configure the matching DNS record and custom domain setting in GitHub Pages.
