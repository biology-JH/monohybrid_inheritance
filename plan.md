# Implementation plan — Monohybrid Inheritance

## Product and implementation

A responsive, single-page educational website in plain HTML, CSS and JavaScript, served on the project's configured Preview port. The page follows the official Cambridge IGCSE Biology 0610 2026–2028 section 17.4 order exactly: Core points 1–12 in Part 1, then Supplement/Extended points 13–18 in Part 2. Each numbered objective has two or three concise comprehension questions. Starter checks and plenaries are separate per part. A 12-term English–Traditional Chinese glossary sits immediately after the Part 1 starter and uses four columns per row. Interactive Punnett-square calculators support cross practice. Use selected original PowerPoint pictures, including a full-bleed slide image behind the hero title; also use the user's uploaded dog photograph beside the enlarged test-cross diagram. Do not use generated or Manus pictures. Keep instructional text concise and typography at or above 24px.

Audit each of the 18 syllabus outcomes individually against the official Cambridge wording and actual lesson text, illustrations and practice. Retain the Core / Extended (officially Supplement) order and labels. State genotype as an organism's genetic make-up in terms of its alleles. Include a learner-response pedigree interpretation task and explicitly connect sex-chromosome location to X-linked recessive characteristics being more common in XY males. Place a Cambridge IGCSE 0610 topic 17.4 video segment on Core genetic diagrams/Punnett squares with Part 1, and a Cambridge IGCSE inheritance Part 2 video segment on test crosses, codominance/ABO and sex linkage with Part 2. Use responsive, privacy-enhanced YouTube embeds, accessible iframe titles, timestamps and direct YouTube fallbacks. Include several open-response prompts with text areas and collapsible self-check guidance across both parts. Keep objective numbering, starters, What/Why/How objectives, interactive exercises, plenaries and syllabus links intact.

Use static assets and a compact JavaScript module; no account, database or other backend is needed. Include the website route manifest at `/manus-routes.json`. Keep a source copy of selected user-provided pictures in `public/ppt-assets/`. Use the existing Webdev runtime port (3000) and the declared static build to `dist/`. Checkpoint changes on the Manus canonical repository and separately update the user's external GitHub repository; do not publish without explicit authorization.

## Project structure

- `index.html` — page structure, lesson content, metadata, responsive video embeds and direct-source links.
- `src/styles.css` — responsive visual system, spacing, large type, accessible interactions, video frames and response fields.
- `src/app.js` — objective cards, self-check questions, pedigree free-response rendering and Punnett calculator behavior.
- `public/ppt-assets/` — selected original PPT image files and the user-supplied dog photograph used on the site.
- `public/manus-routes.json` — the canonical one-page route manifest.
- `research-sources.md` — official syllabus audit results and verified video/source notes.
- `dist/` — static deployment output from the configured build.
- `vercel.json` — static output declaration used by the separate Vercel project, subject to its existing permission blocker.
- `plan.md`, `TODO.md` — implementation decisions and acceptance outcomes.

## Design

Three possible styles (low-probability alternatives): **laboratory field notes** (0.08), **playful classroom scrapbook** (0.06), **editorial botanical atlas** (0.04). Select **editorial botanical atlas**: a calm, high-contrast science-reader feel, with deep forest ink, warm paper, and restrained coral accents; a full-bleed PowerPoint DNA/locus image behind the hero title, followed by a reading column that makes room for large original slide diagrams; small numbered syllabus labels, allele-letter motifs, and finely ruled section dividers. Video panels and open-response boxes should read as focused lesson stations, using the same paper palette and rounded frames. Interactions should feel like deliberate self-checks, with direct feedback and no distracting motion. Use a sturdy sans-serif for body text and an expressive serif for display headings; body and all controls must remain at least 24px. Motion is limited to brief opacity/height transitions and disabled under reduced-motion preferences. Brand essence: a concise, exam-aligned inheritance lesson for IGCSE learners — clear, visual, exact. Personality: calm, rigorous, welcoming. Voice: specific and encouraging (e.g. “Trace each allele. Predict the outcome.” and “Check the cross before you reveal the answer.”). Wordmark concept: a simple paired-allele monogram, `A/a`, within an open chromosome-like oval; signature brand color: deep leaf green.

## Source alignment

Official source: Cambridge IGCSE Biology 0610 syllabus for 2026, 2027 and 2028, section 17.4, pp. 39–40: https://www.cambridgeinternational.org/Images/697203-2026-2028-syllabus.pdf. Core 1–12 and Supplement 13–18 form the lesson order. The supplied slide decks are lesson examples and image sources, not a substitute for syllabus coverage. The audit and timestamped video-source evidence are recorded in `research-sources.md`.
