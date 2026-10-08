# Kind Enough Studio

The website for [Kind Enough Studio](https://kindenoughstudio.com/): a single page
introducing Kitchen Wizz, Boop, EatLog and Chroma. Built with React, Vite and Tailwind.

```bash
npm install
npm run dev      # local dev server
npm run build    # production build into dist/
npm run lint
```

- Product copy, accent colours, status and screenshots live in `src/data/products.js`.
- Screenshots go in `public/products/<app>/`. `scripts/screenshots/` captures them
  with a clean status bar (see its README).
- `public/og.png` is the 1200×630 link-preview image. Regenerate it if the headline
  or product list changes.
