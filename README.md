# Vite AI Startup

An AI startup landing page built with Vite, TanStack Start, Tailwind CSS v4 and shadcn/ui.
Ported from `nextjs-templates/nextjs-startup`.

Runs in the nodesandbox runtime: `npm install` → `npm run dev` → port 3000.

## Getting started

```sh
corepack enable   # uses the Yarn 4 pinned in package.json
yarn install
yarn dev          # http://localhost:3000
```

| Script           | What it does                                              |
| ---------------- | --------------------------------------------------------- |
| `yarn dev`       | Vite dev server with SSR                                  |
| `yarn build`     | Production build; Nitro packages the server for the host  |
| `yarn start`     | Run the Node build from `.output/`                        |
| `yarn typecheck` | `tsc`                                                     |

## Deploying to Vercel

Push and deploy — no dashboard settings. `vercel.json` selects the TanStack
Start preset and installs with Yarn 4 via Corepack; Nitro writes
`.vercel/output/` during `vite build`.

## nodesandbox compatibility

The sandbox runs Vite's native tools as WebAssembly (`NAPI_RS_FORCE_WASI`), and
its installer resolves from `package.json` ranges rather than `yarn.lock`. The
toolchain versions match `vite-shopify-storefront`:

- `vite` is pinned to **8.3.2** (rolldown 1.2.x WASI binding).
- WASI bindings (`@rolldown/binding-wasm32-wasi`, `@tailwindcss/oxide-wasm32-wasi`)
  are **not** listed: the runtime installs each package's `*-wasm32-wasi`
  optional dependency itself, and npm on other hosts rejects them.
- `@vitejs/plugin-react` (6.0.0) and Tailwind (4.3.1) match the harness samples.
- Nitro (the hosting adapter) only loads for `vite build`, never in `vite dev`.

## Layout

```
src/
  router.tsx       Router setup
  routes/          File routes (__root.tsx is the document shell, index.tsx the page)
  components/      Sections, layout and shadcn/ui components
  lib/site.ts      Site name, copy and links
  styles.css       Tailwind v4 theme
public/            Static assets served from /
```
