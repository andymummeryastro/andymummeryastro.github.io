# Andy Mummery — academic website

A plain static site (HTML + CSS). Open the files in a browser, or publish
on GitHub Pages.

Layout is a light top bar + persistent left sidebar (photo, title, links)
and a single prose column — similar in spirit to AcademicPages sites such as
[nikhil-sarin.github.io](https://nikhil-sarin.github.io/), without Jekyll.

## Pages
- `index.html` — about + recent news
- `research.html` — research themes
- `publications.html` — first-author papers by area
- `software.html` — FitTeD, TDEFLARE, XSPEC models
- `group.html` — people and possible projects
- `cv.html` — summary + PDF
- `contact.html` — email and profiles
- `assets/style.css` — layout and colours (dark default; moon/sun toggle)
- `assets/nav.js` — mobile menu + theme
- `cv/cv.pdf` — compiled CV; LaTeX source is in `CV copy/main.tex`

## Editing
Sidebar and nav are copied on every page (no build step). If you change a
link, do it in all files. Placeholders still marked `[Name]` or `[Years]`.

The sidebar photo is `assets/photo.jpg` (square, 600×600, cropped from
`photo_mummery.HEIC`). To change it, replace that file with another square
JPEG — no HTML edits needed. HEIC does not work in most browsers, so convert
first: `sips -s format jpeg new.HEIC --out assets/photo.jpg`.

## Preview
```
python3 -m http.server
```
then http://localhost:8000

## Publish
See `SETUP-github-pages.md`.
