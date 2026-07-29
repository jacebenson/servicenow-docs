# Agent Instructions for sn.jace.pro

## Project Overview
This is an Eleventy (11ty) static site generator project for ServiceNow documentation. It uses ES modules and builds documentation from markdown files.

## Build Commands
- **Dev**: `npm run dev` - Starts dev server with hot reload at http://localhost:8080
- **Build**: `npm run build` - Builds static site to `_site/` directory
- **Test**: No tests configured (exits with error)

## Code Style

### Imports
- Use ES6 `import/export` syntax (project uses `"type": "module"`)
- JSON imports require workaround using `createRequire` from `node:module` (see `_data/libdocConfig.js:1-6`)
- Group imports: 11ty plugins first, then LibDoc modules, then local modules

### Formatting
- Use camelCase for variables and functions
- Use let/const (no var)
- Arrow functions for simple callbacks, named functions for exports
- Template literals for multi-line strings and HTML generation

### File Organization
- Configuration in `_data/*.js` files exported as default objects (project root)
- **All content lives in `src/`** — markdown in topic dirs (`src/docs/`, `src/ux/`, `src/data/`, etc.)
- Static assets in `src/assets/` and `core/assets/`
- Input dir is `src/` (configured in .eleventy.js) — always edit content files under `src/`
- Passthrough copy maps `src/assets/` → `_site/assets/`, `src/favicon.png` → `_site/favicon.png`, etc.
