# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 portfolio project using TypeScript, React 19, and Tailwind CSS v4. The project is built with Turbopack for faster development builds.

## Development Commands

### Running the Development Server
```bash
npm run dev
```
Starts the Next.js development server with Turbopack on [http://localhost:3000](http://localhost:3000).

### Building for Production
```bash
npm run build
```
Creates an optimized production build with Turbopack.

### Starting Production Server
```bash
npm start
```
Runs the production server (requires running `npm run build` first).

### Linting
```bash
npm run lint
```
Runs ESLint to check for code quality issues.

## Architecture

### Tech Stack
- **Next.js 15.5.5** with App Router architecture
- **React 19.1.0** (latest stable)
- **TypeScript 5** with strict mode enabled
- **Tailwind CSS v4** with PostCSS plugin
- **Turbopack** as the build tool (Next.js default in v15)

### Project Structure
- `src/app/` - Next.js App Router directory
  - `layout.tsx` - Root layout with Geist font configuration
  - `page.tsx` - Homepage component
  - `globals.css` - Global Tailwind styles
- `public/` - Static assets (SVG icons and images)
- Path alias `@/*` maps to `src/*`

### Key Configuration Files
- `next.config.ts` - Next.js configuration (TypeScript format)
- `eslint.config.mjs` - ESM-based ESLint flat config using next/core-web-vitals and next/typescript
- `tsconfig.json` - TypeScript configuration with strict mode, bundler module resolution, and path aliases
- `postcss.config.mjs` - PostCSS configuration for Tailwind CSS v4

### Font Configuration
The project uses Next.js font optimization with Geist Sans and Geist Mono fonts, loaded via `next/font/google`. Font variables are applied at the root layout level.

## Important Notes

- This project uses Turbopack by default (via `--turbopack` flag in scripts)
- ESLint configuration uses the new flat config format with FlatCompat for Next.js presets
- TypeScript paths are configured with `@/*` alias pointing to `src/*`
- All pages and components should be created in `src/app/` following App Router conventions
