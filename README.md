# Horizon Promoters — Website

A premium, animated marketing site for Horizon Promoters (land, properties &
construction), built with React + Vite and animated with GSAP/ScrollTrigger.

## Run it locally

```bash
npm install
npm run dev
```

Then open the URL shown in the terminal (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview   # to test the production build locally
```

The production files are written to `dist/` — upload that folder's contents
to any static host (Vercel, Netlify, Hostinger, your own server, etc.).

## What's inside

- `src/components/Loader.jsx` — logo reveal that plays once on first load
- `src/components/Hero.jsx` — headline reveal + parallax skyline
- `src/components/Services.jsx` — pinned, horizontal-scroll showcase of
  Land & Plots / Premium Properties / Construction (desktop only; stacks
  vertically on mobile/tablet)
- `src/components/Process.jsx` — scroll-drawn timeline for the 4-step
  buying journey
- `src/components/Properties.jsx`, `About.jsx`, `Stats.jsx`, `WhyUs.jsx`,
  `Testimonials.jsx`, `CTA.jsx`, `Footer.jsx`, `Navbar.jsx`

## Swapping in real content

- **Logo**: `public/logo.png` — replace with a higher-resolution export if
  you have one (transparent background works best in the navbar/footer).
- **Property & illustration images**: `public/images/*.svg` are original
  line-art placeholders drawn in the brand's green/gold palette so the site
  works without any external image hosting. Replace them with real listing
  photography by swapping the `img` paths in `src/components/Properties.jsx`
  and `src/components/Services.jsx`.
- **Copy**: property names, prices, testimonials, stats and contact details
  are plain arrays/JSX at the top of each component file — easy to find and
  edit without touching any animation code.
- **Contact form**: the form in `CTA.jsx` currently just shows a "thank you"
  state on submit. Wire it to your CRM, email service, or a backend endpoint
  in the `submit` function.

## Notes

- Animations respect `prefers-reduced-motion`.
- The Services scroll-pin only activates above 900px width; on smaller
  screens the three panels stack normally so nothing feels janky on mobile.
