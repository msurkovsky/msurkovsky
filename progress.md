# Website Content Revision — Progress

## Context

Revising surkovsky.cz to align with the updated CV (cv-martin-surkovsky.pdf) and Martin's
own narrative about his identity: a systems thinker and engineer who deliberately pursued
entrepreneurship as a growth framework, making him a stronger engineer overall.

Key insight from Martin: "I started thinking about entrepreneurial thinking as another
framework worth experiencing." The website should reflect this integrated identity, not
present engineering and entrepreneurship as separate tracks.

The website serves a different purpose than the CV — it's more open, personal, and can
showcase personal projects and a fuller picture of who Martin is.

## Reference Materials

- **CV**: `cv-martin-surkovsky.pdf` (in repo root)
- **ORCID**: https://orcid.org/0000-0001-7474-123X (15 publications, 2009–2020)
- **Career start**: 2006 (paid web dev for Moravian firefighters — one app still running in Docker)

## Completed

### 1. Header subtitle
- **Changed**: "With over 20 years of experience spanning academic research, corporate software engineering, and entrepreneurial ventures."
- **To**: "Two decades of building software — from research and high-performance computing to industrial platforms and startups."
- Tagline "Engineer by background, founder by passion" kept as-is (Martin strongly identifies with it).
- "passion" highlighted in gold — purely visual accent to make the word pop.

### 2. About Me — full rewrite
- Replaced generic corporate text with authentic narrative:
  - Firefighter app origin story (2006, still running in Docker)
  - Systems thinker identity
  - Entrepreneurship as a deliberately chosen framework
  - Rust/Python + family closing

### 3. Design refresh — dark minimal
- Moved from light theme to **charcoal-first** (background ~11% lightness)
- **Gold** primary accent, **teal** secondary
- Key principle: minimal, functional, breathing — no heavy cards/borders
- Sections separated by spacing and typography, not boxes
- Removed "Problem-Solving Philosophy" platitudes from Expertise
- All 6 projects restored (Shadow Services, Doqra, Nomlify, Ruth, viaRodos, Morpheus)
- Contact simplified to vertical list with icons

### 4. Hero photo fix
- Changed from circular Avatar component to plain `<img>` in rounded rectangle
- Aspect ratio: 3:4 portrait
- Slight 2-degree rotation for personality
- `object-[35%_top]` crop to center face properly
- Size: `max-w-sm` for appropriate visual weight

### 5. Journey section — aligned with CV
- Added **Paessler** (Oct 2025 – Present, Software Developer, PRTG Core)
- Updated **Rockwell** to Jun 2023 – Sep 2025 with full arc: CIP stack, Shadow Service, end-to-end demo, cross-component design, mentoring
- Split **IT4Innovations** into two roles:
  - Researcher (Jun 2018 – Mar 2023): Ruth with ISC/SC presentations, viaRODOS, Caver
  - Research Assistant (Oct 2017 – May 2018): Betweenness Centrality optimization (ideas from PhD, later used in H2020 Antarex)
- Updated **VSB Dept of CS** (Nov 2012 – May 2018): Roslab, Kaira, Haydi by name

### 6. Projects section — updated
- Added **Školkáček**: volunteer project for preschools, AI-assisted development (~20 hours), free for schools; tech stack (Next.js, React, TypeScript, Supabase, Vercel)
- Enhanced **Doqra**: origin story (helping wife with real estate practice), tech stack (Flutter, Python, PostgreSQL), deployment (Railway, Supabase, Netlify)
- Both Doqra and Školkáček: "AI-assisted" as first tag
- Updated **Ruth** tags: added PyO3, mentioned Python-Rust connection in description
- Updated **Morpheus** tags: added Docker
- **Caver** intentionally kept out (CV only)
- Centered last project row in 3-column grid layout

## Key Decisions

- **Tagline stays**: "Engineer by background, founder by passion" — Martin strongly identifies with it
- **Website ≠ CV**: Website is more open/personal; CV is focused pitch for specific roles
- **Founder identity is a feature, not a bug**: Companies that reject entrepreneurial mindset aren't where Martin would thrive anyway

### 7. Contact section — updated
- Blog link fixed: now points to `msurkovsky.github.io` (live with 2 posts)
- CV download link skipped (not publishing PDF)

### 8. Talks & Publications — skipped for now
- ISC/SC presentations and ORCID (15 publications) not added
- Reasoning: too academic for target audience (hiring managers, startup folks)
- ORCID link (`0000-0001-7474-123X`) can be added later if a dedicated section is created

### 9. Content polish
- Doqra in Journey: aligned with Projects (origin story about wife's practice)
- Expertise: added "AI-assisted Development" to Specializations
- Shadow Services in Projects: clearer purpose (plant floor → cloud) and role description

### 10. Structural fixes
- Added **Education section** after Journey (PhD, Master's, Bachelor's)
- PhD description expanded: MP-nets as the core contribution (abstract model for MPI visualization, code-to-model correlation, deadlock/blocking detection), Morpheus as proof-of-concept
- Navigation: added "about" link
- Navigation: removed unused `isMobile` import

## Git State

- Branch: `main`
- Latest commit: `236225d` (PhD description expanded)
- 17 commits ahead of origin
- **Content revision complete** — all items done, polish and structural fixes applied
