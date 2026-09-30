# First Guardian Complaints (Banton Group)

Campaign landing page built with React 19, Vite and Tailwind CSS v4.

## Commands

```bash
npm install
npm run dev       # local dev server
npm run build     # production build in dist/
npm run preview   # serve the production build
```

## Structure

```
src/
  content/firstGuardian.jsx   all page copy (verbatim from the approved mock-up)
  App.jsx                     section order, per the design brief
  index.css                   design tokens (@theme), surface backgrounds, base styles
  components/
    Header, Hero, DateBand, HowItWorks, AfcaFree, Situations,
    WhereThingsStand, Fees, ClassActions, ScamWarning,
    AssessmentForm, Questions, Footer, MobileCta
    ui/                       Container, CtaButton, Reveal, Collapse, toggles
```

Components only read from the `site` object, so the Shield site uses the same components with a
`src/content/shield.jsx` of the same shape, imported in `App.jsx`.

## Notes

- Every "Get a free assessment" CTA links to `#register`.
- `AssessmentForm.jsx` holds a reserved slot (`FormSlot`). Replace it with the simplified form when it is supplied.
- Collapsed content stays in the DOM (inert while closed), so all copy remains indexable.
- Motion respects `prefers-reduced-motion`.
- Fonts (Geist, Geist Mono) are self-hosted via Fontsource. Icons are Phosphor.
