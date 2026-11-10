# Implementation plan — Monohybrid Inheritance

## Product and implementation

A responsive, single-page educational website in plain HTML, CSS and JavaScript, served on the project's configured Preview port. The page follows the official Cambridge IGCSE Biology 0610 2026–2028 section 17.4 order exactly: Core points 1–12 in Part 1, then Supplement/Extended points 13–18 in Part 2. Each numbered objective has two or three concise comprehension questions. Starter checks and plenaries are separate per part. A 12-term English–Traditional Chinese glossary sits immediately after the Part 1 starter and uses four columns per row. Interactive Punnett-square calculators support cross practice. Use selected original PowerPoint pictures, including a full-width slide image as the background behind the hero title; also use the user's uploaded dog photograph beside the retained, enlarged test-cross diagram. Add the concise lesson content, examples, practice prompts and answers from both decks without repeating animation/answer slides. Do not use generated or Manus pictures. Keep instructional text concise and typography at or above 24px. Make the syllabus objective numbering and the Core / Extended (officially Supplement) distinction explicit.

Use static assets and a compact JavaScript module; no account, database or other backend is needed. Include the website route manifest at `/manus-routes.json`. Keep a source copy of selected user-provided pictures in `public/ppt-assets/`. Use the existing Webdev runtime port (expected 3000) and a self-contained static build directory if required by project configuration.

## Project structure

- `index.html` — page structure, lesson content, metadata and embedded-source attribution.
- `src/styles.css` — responsive visual system, spacing, large type and accessible interaction states.
- `src/app.js` — glossary rendering, lesson checks, starter/plenary reveal and Punnett calculator behavior.
- `public/ppt-assets/` — selected original PPT image files and the user-supplied dog photograph used on the site.
- `public/manus-routes.json` — the canonical one-page route manifest.
- `dist/` — static deployment output if project build settings require it.
- `plan.md`, `TODO.md` — design decisions and acceptance outcomes.

## Design

Three possible styles (low-probability alternatives): **laboratory field notes** (0.08), **playful classroom scrapbook** (0.06), **editorial botanical atlas** (0.04). Select **editorial botanical atlas**: a calm, high-contrast science-reader feel, with deep forest ink, warm paper, and restrained coral accents; a full-bleed PowerPoint DNA/locus image behind the hero title, followed by a reading column that makes room for large original slide diagrams; small numbered syllabus labels, allele-letter motifs, and finely ruled section dividers. Interactions should feel like deliberate self-checks, with direct feedback and no distracting motion. Use a sturdy sans-serif for body text and an expressive serif for display headings; body and all controls must remain at least 24px. Motion is limited to brief opacity/height transitions and disabled under reduced-motion preferences. Brand essence: a concise, exam-aligned inheritance lesson for IGCSE learners — clear, visual, exact. Personality: calm, rigorous, welcoming. Voice: specific and encouraging (e.g. “Trace each allele. Predict the outcome.” and “Check the cross before you reveal the answer.”). Wordmark concept: a simple paired-allele monogram, `A/a`, within an open chromosome-like oval; signature brand color: deep leaf green.

## Source alignment

Official source: Cambridge IGCSE Biology 0610 syllabus for 2026, 2027 and 2028, section 17.4, pp. 39–40: https://www.cambridgeinternational.org/Images/697203-2026-2028-syllabus.pdf. Core 1–12 and Supplement 13–18 form the lesson order. The supplied slide decks are lesson examples and image sources, not a substitute for syllabus coverage.
