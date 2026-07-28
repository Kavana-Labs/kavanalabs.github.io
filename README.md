# KES SOP Library

A static GitHub Pages website for Kavana Labs Engineering Series standard operating procedures.

## Included files

```text
.
├── index.html
├── .nojekyll
├── README.md
├── assets/
│   ├── site.css
│   ├── site.js
│   └── volunteer-recruitment-onboarding-flow.png
└── sops/
    └── volunteer-recruitment-onboarding.html
```

## Deploy

GitHub Pages is already configured to deploy from the repository root, so copy these files into the root of the repository, commit and push:

```bash
git add .
git commit -m "Add KES SOP library and volunteer onboarding SOP"
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

## Brand colours

The site uses editable CSS variables at the top of `assets/site.css`. Replace these values when the official Kavana Labs brand palette is finalised:

```css
:root {
  --navy-950: #07162f;
  --navy-900: #0b2147;
  --blue-600: #1c6cc5;
  --teal-600: #078b95;
  --gold-500: #ef8d16;
}
```

## Optional custom domain

Do not add a `CNAME` file unless you have selected the domain or subdomain. When ready, create a root-level file named `CNAME` containing only the domain, for example:

```text
sops.kavanalabs.org
```

Then configure the matching DNS record and custom domain setting in GitHub Pages.
