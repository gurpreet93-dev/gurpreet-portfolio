# Portfolio Site

A static one-page portfolio for Gurpreet Singh — plain HTML/CSS/JS, no build step.

## Preview locally

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

## Deploy

Any static host works. Fastest options:

- **Vercel**: import this repo in the Vercel dashboard — no config needed, root directory is already the site root.
- **GitHub Pages**: enable Pages on this repo, source = root of the default branch.
- **Netlify**: drag-and-drop this folder, or point a site at this repo with the default base directory.

## Before you publish

- Update the LinkedIn link in `index.html` (`#contact` and check for others) — it's currently a placeholder.
- Swap `assets/Gurpreet_Singh_Resume.pdf` if you update your resume; the filename is referenced from `index.html`, so keep the name or update both.
