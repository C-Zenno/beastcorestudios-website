# Beastcore Studios public v0.1

Thin public anchor package for Beastcore Studios and the Surface Lab coming page.

## Contents

- `/index.html` — Beastcore Studios public studio anchor
- `/surface-lab/index.html` — Surface Lab coming page with first-screen preview
- `/assets/site.css` — shared styling
- `/assets/surface-lab-mark.svg` and `/assets/surface-lab-lockup.svg` — carried logo assets
- `_headers` — Cloudflare Pages headers
- `robots.txt` and `sitemap.xml`

## Public posture

- Beastcore Studios builds the public cognition experience.
- Surface Lab is a free public learning doorway / preview.
- The deeper claim belongs to the Constraint Spine papers.
- ZOA owns the umbrella.

## Boundary

This package is a public studio anchor and coming page only. It carries identity, lineage, and preview posture. The finished app can be added later under its own release.

## Suggested deploy

Use the actual Cloudflare Pages project name once created:

```bash
wrangler pages deploy . --project-name beastcore-studios
```

## Suggested tag

```bash
git tag -a public-beastcorestudios-v0.1 -m "Public studio anchor: Beastcore Studios identity and Surface Lab coming-page lineage for object-first learning preview."
git push origin public-beastcorestudios-v0.1
```

## Post-deploy checks

```bash
curl -I https://beastcorestudios.com/
curl -I https://beastcorestudios.com/surface-lab/
curl -s https://beastcorestudios.com/ | grep -Ei "Surface Lab|learning preview|papers carry"
curl -s https://beastcorestudios.com/surface-lab/ | grep -Ei "Surface Lab|learning preview|first-screen"
```
