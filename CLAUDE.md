# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Trip Board (트립 보드) is a Next.js 15 application for collaborative trip planning in Korean. Users can share Trip Board links, add content, and vote on travel itinerary items to build collaborative timelines.

## Architecture

### Directory Structure
- **Mixed App/Pages Architecture**: Project uses both Next.js App Router (`app/`) and a custom pages organization (`src/pages/`)
- **App Router**: Located in `app/` directory with layout and page components
- **Source Organization**: Main application logic in `src/` with feature-based organization
- **Component Pattern**: Uses barrel exports (index.ts files) for clean imports

### Key Patterns
- **Typed Routes**: Enabled in Next.js config for type-safe routing
- **Path Aliases**: `@/*` maps to `src/*` for clean imports
- **Component Structure**: Feature-based with `ui/` subdirectories for components
- **Layout System**: Custom `RootLayout` component in `src/app/layouts/`

## Development Commands

### Core Commands
```bash
npm run dev          # Start development server
npm run build        # Build for production  
npm run start        # Start production server
npm run lint         # Run ESLint
```

### Quality Assurance
The project uses lint-staged with pre-commit hooks that run:
1. TypeScript compilation (`tsc --project tsconfig.json`)
2. Prettier formatting (`prettier --write`)
3. ESLint with auto-fix (`eslint --cache --fix`)

## Configuration

### ESLint
- Uses Next.js core-web-vitals and TypeScript configs
- Configured as flat config with appropriate ignores for build artifacts

### TypeScript
- Strict mode enabled
- Path aliases configured (`@/*` → `src/*`)
- Next.js plugin integrated

### Styling
- TailwindCSS 4.0 via PostCSS plugin
- Global styles in `src/app/styles/globals.css`

### Git Hooks
- **Pre-commit**: Runs type checking, formatting, and linting via lint-staged
- **Commit-msg**: Uses conventional commits via commitlint

## Language & Localization
- **Primary Language**: Korean
- **HTML Lang**: `ko` 
- Application metadata and content are in Korean

## Type Safety
- Strict TypeScript configuration
- Next.js typed routes enabled for compile-time route validation

## Work Log Management
Claude Code 작업 시 모든 내용을 `@worklog/yyyy-mm-dd.md` 파일 형태로 한국어로 작성하여 관리해야 합니다.
- 파일명 형식: `@worklog/2025-01-15.md` (작업한 날짜)
- 내용: 한국어로 작성된 작업 내용, 변경 사항, 추가된 기능 등
- 목적: 프로젝트 진행 상황 추적 및 작업 히스토리 관리