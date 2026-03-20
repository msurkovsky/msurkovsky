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

## Key Decisions

- **Tagline stays**: "Engineer by background, founder by passion" — Martin strongly identifies with it
- **Website ≠ CV**: Website is more open/personal; CV is focused pitch for specific roles
- **Founder identity is a feature, not a bug**: Companies that reject entrepreneurial mindset aren't where Martin would thrive anyway

## Remaining (in order)

### 5. Journey section
- **Add Paessler role** (Oct 2025 – Present, Software Developer, PRTG Core)
- **Update Rockwell** period to 2023–2025, rewrite description to reflect full arc:
  CIP stack → Shadow Service → end-to-end demo → cross-team design leadership & mentoring
- **IT4Innovations** (2018–2023): strengthen with CV details — Ruth with OpenStreetMap
  integration, ISC/SC presentations, viaRODOS ownership, Caver domain learning
- **VSB Dept of CS** (2012–2018): mention Roslab by name, Kaira, Haydi more specifically

### 6. Projects section
- Align descriptions with CV where appropriate
- Discuss with Martin: any personal/hobby projects to add? (currently all projects are
  employment- or startup-tied)

### 7. Contact section
- Add downloadable CV link
- Check if blog link (blog.surkovsky.cz) is live or dead — currently shows "coming soon"

### 8. New section: Talks & Publications
- Martin presented at ISC and SC (major HPC conferences) — currently buried in CV, absent
  from website
- 15 publications on ORCID (2009–2020) covering: MPI visualization, traffic simulation,
  combinatorial objects, Petri nets, ant colony optimization, image processing

## Git State

- Branch: `main`
- Latest commit: `e97bb3b` (hero photo fix)
- 3 commits ahead of origin
