# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal website built with Astro, using TailwindCSS for styling and deployed to Cloudflare Pages. The site is a simple, static personal portfolio with MDX content.

## Common Commands

### Development
- `pnpm dev` - Start development server at localhost:4321
- `pnpm build` - Build production site (runs astro check + astro build)
- `pnpm preview` - Preview production build locally

### Code Quality
- `pnpm lint` - Run Biome linter and formatter (auto-fixes issues)
- `astro check` - Run Astro's TypeScript checker

### Package Management
- Uses `pnpm` as package manager (see the `packageManager` field in package.json)
- `pnpm install` - Install dependencies

## Architecture

### Core Structure
- **Framework**: Astro with TypeScript
- **Styling**: TailwindCSS v4 with custom theme configuration
- **Content**: Single MDX page (`src/pages/index.mdx`) with custom component mapping
- **Layout**: Single layout file (`src/layouts/Layout.astro`) with comprehensive SEO meta tags
- **Components**: Simple, reusable Astro components in `src/components/`

### Key Files
- `astro.config.ts` - Astro configuration with MDX, sitemap, and robots.txt integrations
- `src/pages/index.mdx` - Main content page with custom component imports
- `src/layouts/Layout.astro` - Base layout with SEO, fonts, and structured data
- `src/styles/global.css` - TailwindCSS import and custom font theme configuration
- `wrangler.jsonc` - Cloudflare Pages deployment configuration

### Component System
- Custom components mapped to MDX elements (`a: Anchor, em: Emphasis, h3: Heading`)
- Simple wrapper components for consistent styling
- Typography components use custom fonts (Whyte and Favorit Mono)

### Styling Approach
- TailwindCSS v4 with custom theme in `global.css`
- Dark mode support via `prefers-color-scheme`
- Custom font loading with preload hints in layout
- Responsive design with mobile-first approach

## Configuration Notes

### Astro Configuration
- Site URL: https://www.xxczaki.com
- MDX integration with remark-smartypants for typography
- Sitemap and robots.txt generation
- TailwindCSS via Vite plugin

### Deployment
- Deployed to Cloudflare Pages via Wrangler
- Build output goes to `./dist/`
- Assets served from dist directory