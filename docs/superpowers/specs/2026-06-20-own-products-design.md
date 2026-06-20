# Own Products Section — Design Spec

**Date:** 2026-06-20  
**Status:** Approved for implementation

## Goal

Add a premium "Produtos próprios em produção" section between Competências (#projects) and Jornada profissional (#experience), showcasing NEXION CORE (featured) and SprintDeck (secondary) with real product screenshots, i18n (pt-BR, en, es), and external CTAs.

## Layout

- Section id: `#own-products`
- Background: `bg-surface-container-lowest`
- Featured card: NEXION CORE — full-width editorial layout (lg: 5/12 visual + 7/12 content)
- Secondary card: SprintDeck — compact horizontal layout below

## Copy

All copy defined in `ownProducts` i18n namespace (pt-BR base, en/es translations).

## Visual

- Real screenshots in `public/images/product-nexion-core.webp` and `product-sprintdeck.webp`
- Fallback: CSS gradient + Material icon if capture fails

## Navigation

Optional nav link `#own-products` between projects and experience.

## Accessibility

- `section` + `aria-labelledby`
- `article` per product with H3
- External links: `target="_blank"` + `rel="noopener noreferrer"`
- Descriptive image alt text (no sensitive data)

## Acceptance

- Section order: after Competências, before Jornada
- NEXION visually dominant and first in DOM
- Secure external links to public URLs only
- Responsive mobile/tablet/desktop
- Tests and build green
