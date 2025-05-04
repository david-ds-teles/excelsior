# Excelsior Design System

## Overview
This document outlines the design system for the Excelsior landing page, providing guidelines for consistent UI/UX implementation.

## Color Palette

### Primary Colors
Our primary color palette is inspired by AI and technology, featuring a blue gradient that conveys trust, innovation, and professionalism.

- Primary-50: #f0f7ff - Lightest shade, used for backgrounds
- Primary-100: #e0eefe - Light shade, used for hover states
- Primary-200: #bae0fd - Used for subtle backgrounds
- Primary-300: #7cc8fb - Used for secondary elements
- Primary-400: #36aaf5 - Used for active states
- Primary-500: #0d8de3 - Main brand color
- Primary-600: #0070cc - Used for hover states on buttons
- Primary-700: #0059a6 - Used for active states on buttons
- Primary-800: #004c8a - Used for dark UI elements
- Primary-900: #003f72 - Used for very dark UI elements
- Primary-950: #002952 - Darkest shade, used for text on light backgrounds

### Accent Colors
Our accent color palette uses vibrant purple tones to represent AI innovation and creativity.

- Accent-50: #f5f3ff - Lightest shade
- Accent-100: #ede9fe - Light shade
- Accent-200: #ddd6fe - Used for subtle backgrounds
- Accent-300: #c4b5fd - Used for secondary elements
- Accent-400: #a78bfa - Used for active states
- Accent-500: #8b5cf6 - Main accent color
- Accent-600: #7c3aed - Used for hover states
- Accent-700: #6d28d9 - Used for active states
- Accent-800: #5b21b6 - Used for dark UI elements
- Accent-900: #4c1d95 - Used for very dark UI elements
- Accent-950: #2e1065 - Darkest shade

### Neutral Colors
Our neutral palette provides a clean, modern foundation for the UI.

- Neutral-50: #fafafa - Lightest shade, used for backgrounds
- Neutral-100: #f5f5f5 - Light shade, used for backgrounds
- Neutral-200: #e5e5e5 - Used for borders
- Neutral-300: #d4d4d4 - Used for disabled states
- Neutral-400: #a3a3a3 - Used for placeholder text
- Neutral-500: #737373 - Used for secondary text
- Neutral-600: #525252 - Used for body text
- Neutral-700: #404040 - Used for headings
- Neutral-800: #262626 - Used for primary text
- Neutral-900: #171717 - Used for headings
- Neutral-950: #0a0a0a - Darkest shade, used for text on light backgrounds

### State Colors
Colors used to indicate success, error, and other states.

- Success-50: #ecfdf5 - Light success background
- Success-500: #10b981 - Main success color
- Success-900: #064e3b - Dark success color

- Error-50: #fef2f2 - Light error background
- Error-500: #ef4444 - Main error color
- Error-900: #7f1d1d - Dark error color

## Typography

### Font Family
We use Inter as our primary font family, a modern sans-serif font that provides excellent readability across all device sizes.

### Font Sizes
- xs: 0.75rem (12px) - Used for small labels, footnotes
- sm: 0.875rem (14px) - Used for secondary text, captions
- base: 1rem (16px) - Used for body text
- lg: 1.125rem (18px) - Used for emphasized body text
- xl: 1.25rem (20px) - Used for subheadings
- 2xl: 1.5rem (24px) - Used for section headings
- 3xl: 1.875rem (30px) - Used for major section headings
- 4xl: 2.25rem (36px) - Used for page headings
- 5xl: 3rem (48px) - Used for hero headings
- 6xl: 3.75rem (60px) - Used for large hero headings

### Line Heights
- none: 1 - Used for headings
- tight: 1.25 - Used for headings
- snug: 1.375 - Used for short paragraphs
- normal: 1.5 - Used for body text
- relaxed: 1.625 - Used for longer paragraphs
- loose: 2 - Used for spacious text

### Font Weights
- light: 300 - Used for subtle text
- normal: 400 - Used for body text
- medium: 500 - Used for emphasized text
- semibold: 600 - Used for subheadings
- bold: 700 - Used for headings

## Spacing
We use a consistent spacing scale throughout the UI to maintain visual harmony.

- 0: 0px
- px: 1px
- 0.5: 0.125rem (2px)
- 1: 0.25rem (4px)
- 1.5: 0.375rem (6px)
- 2: 0.5rem (8px)
- 2.5: 0.625rem (10px)
- 3: 0.75rem (12px)
- 3.5: 0.875rem (14px)
- 4: 1rem (16px)
- 5: 1.25rem (20px)
- 6: 1.5rem (24px)
- 8: 2rem (32px)
- 10: 2.5rem (40px)
- 12: 3rem (48px)
- 16: 4rem (64px)
- 20: 5rem (80px)
- 24: 6rem (96px)
- 32: 8rem (128px)

## Border Radius
- none: 0px
- sm: 0.125rem (2px)
- md: 0.25rem (4px)
- lg: 0.5rem (8px)
- xl: 0.75rem (12px)
- 2xl: 1rem (16px)
- 3xl: 1.5rem (24px)
- full: 9999px

## Shadows
- sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05)
- md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)
- lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)
- xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)

## Transitions
- fast: 150ms
- normal: 250ms
- slow: 350ms
- timing-default: cubic-bezier(0.4, 0, 0.2, 1)

## Breakpoints
- sm: 640px - Small devices (mobile)
- md: 768px - Medium devices (tablets)
- lg: 1024px - Large devices (laptops)
- xl: 1280px - Extra large devices (desktops)
- 2xl: 1536px - Extra extra large devices (large desktops)

## Component Guidelines

### Buttons
- Primary: Used for main calls-to-action
  - Background: primary-600
  - Text: white
  - Hover: primary-700
  - Active: primary-800
  - Disabled: neutral-300

- Secondary: Used for secondary actions
  - Background: white
  - Border: primary-600
  - Text: primary-600
  - Hover: primary-50
  - Active: primary-100
  - Disabled: neutral-200

- Tertiary: Used for less important actions
  - Background: transparent
  - Text: primary-600
  - Hover: primary-50
  - Active: primary-100
  - Disabled: neutral-300

### Forms
- Input fields:
  - Border: neutral-300
  - Focus: primary-500
  - Error: error-500
  - Placeholder: neutral-400
  - Text: neutral-800

### Cards
- Background: white
- Border: neutral-200
- Shadow: sm
- Hover: shadow-md

### Navigation
- Background: white
- Active: primary-600
- Hover: primary-50

## Accessibility Guidelines
- Maintain a minimum contrast ratio of 4.5:1 for normal text and 3:1 for large text
- Use semantic HTML elements
- Include proper ARIA attributes
- Ensure keyboard navigation
- Provide visible focus states
- Support screen readers
- Use appropriate alt text for images

## Performance Guidelines
- Optimize images (WebP format, appropriate sizes)
- Lazy load non-critical resources
- Minimize JavaScript bundle size
- Use code splitting
- Implement critical CSS
- Optimize font loading
- Minimize third-party scripts
- Use responsive images
- Implement caching strategies
