# Design Sync Notes — Fifty Seventh & 7th

## Repo shape

- **Next.js 15 app** (not a published library — no `dist/`, no `main`/`exports` in `package.json`)
- Converter runs in **synth-entry mode** via a hand-authored barrel: `src/components/index.tsx`
- `--entry ./src/components/index.tsx` must be passed on every build
- All 24 components explicitly declared in `cfg.componentSrcMap` (auto-discovery fails because `PKG_DIR` resolves to `node_modules/fiftyweb-next` which doesn't exist)

## CSS

- `cfg.cssEntry` points at the compiled Next.js dev output, not `globals.css` directly:
  `.next/dev/static/chunks/Documents_GitHub_FIFTYWEB_src_app_globals_css_1igg3k2._.single.css`
- This file path contains a content hash that **will change** when `globals.css` changes. Before re-syncing, run `npm run dev` briefly to regenerate, then update `cfg.cssEntry` to the new filename.
- Tailwind v4 uses `@import "tailwindcss"` syntax which esbuild can't resolve — raw `globals.css` cannot be used as `cssEntry`.

## Process globals (lib override)

- `bundle.mjs` is forked in `.design-sync/overrides/bundle.mjs`.
- Reason: Next.js internals reference `process.platform`, `process.env.NEXT_RUNTIME`, and other Node globals that are undefined in browser IIFE context.
- A banner shim is injected before the IIFE that defines `window.process` with all required Next.js env vars, including `__NEXT_IMAGE_OPTS` (needed by `next/image` to determine loader config).
- Node symlink required per clone: `ln -sfn ../.ds-sync/node_modules .design-sync/node_modules`

## next/image

- `next/image` validates `src` domains against `__NEXT_IMAGE_OPTS.remotePatterns` at render time.
- The banner shim sets `unoptimized: true` and omits `remotePatterns`, which disables domain validation entirely for the preview context.
- `PressCard` has an authored preview (`previews/PressCard.tsx`) using a base64 data-URI placeholder image to avoid any external fetch.

## Fonts

- Fonts are injected at runtime via `next/font/google` — they never appear in any CSS file on disk.
- `cfg.runtimeFontPrefixes: ["Playfair Display", "Cormorant Garamond", "Inter"]` suppresses `[FONT_MISSING]` for all three families.
- The design agent will see these components rendered in fallback fonts. This is expected and acceptable.

## Known render warns

- `[TOKENS_MISSING]` for `--font-inter`, `--font-playfair`, `--font-cormorant`, `--accordion-panel-height`, `--secondary`, `--foreground`, `--tw` — all runtime-injected, not addressable from static CSS.

## Re-sync risks

- **`cfg.cssEntry` path will rot** when `globals.css` is edited (new content hash). Update before re-syncing.
- **`src/components/index.tsx` barrel** must stay in sync with added/removed components. It is not committed (added to `.gitignore`).
- **`ds-types/`** directory (generated `.d.ts` output from `tsc`) is gitignored build output — regenerate with `npx tsc --declaration --emitDeclarationOnly --outDir ./ds-types` if needed for debugging.
- **21 floor-card components**: all components except `PressCard` ship the typographic floor card (no authored preview). They can be authored incrementally on any re-sync.
- The `bundle.mjs` fork may need updating if the upstream lib adds new build options that the fork is missing. Diff `.design-sync/overrides/bundle.mjs` against `.ds-sync/lib/bundle.mjs` before re-syncing after a skill update.
