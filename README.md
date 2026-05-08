# Harshit Soora — Portfolio Website

## Stack
- **HTML / CSS / JS** — no build step, no framework
- **GSAP + ScrollTrigger** (CDN) — staggered hero reveal and scroll-triggered fades
- **Lenis** (CDN) — smooth scrolling
- **Google Fonts** — Manrope (heavy display sans) + Fraunces (light serif prelude) + Inter (body)

## File structure
```
portfolio/
├── index.html
├── README.md
└── assets/
    ├── style.css
    ├── script.js
    └── portrait.jpg
```

## How to run locally
Open `index.html` in a browser, or for the cleanest experience:

```bash
cd portfolio
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deployed
**GitHub Pages** [(push to a repo, enable Pages)](https://harshit-soora.github.io/portfolio/)
No build step required.

## Tweaking the look
The `:root` block at the top of `assets/style.css` has every colour and type-scale variable:

```css
--bg:     #eaf2f6;   /* page background */
--ink:    #1a2348;   /* main text */
--accent: #6e2bd9;   /* purple primary */
--teal:   #6dc8d4;   /* cyan accents (dots, rules, NEXT badge) */
```