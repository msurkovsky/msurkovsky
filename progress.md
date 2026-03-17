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

### 2. About Me — full rewrite
- Replaced generic corporate text with authentic narrative:
  - Firefighter app origin story (2006, still running in Docker)
  - Systems thinker identity
  - Entrepreneurship as a deliberately chosen framework
  - Rust/Python + family closing
- Styling note: section uses `bg-charcoal text-white` with a `bg-black/20` card wrapper.

## Remaining (in order)

### 3. Journey section
- **Add Paessler role** (Oct 2025 – Present, Software Developer, PRTG Core)
- **Update Rockwell** period to 2023–2025, rewrite description to reflect full arc:
  CIP stack → Shadow Service → end-to-end demo → cross-team design leadership & mentoring
- **IT4Innovations** (2018–2023): strengthen with CV details — Ruth with OpenStreetMap
  integration, ISC/SC presentations, viaRODOS ownership, Caver domain learning
- **VSB Dept of CS** (2012–2018): mention Roslab by name, Kaira, Haydi more specifically

### 4. Expertise section
- Rework "Entrepreneurial Experience" skills — be honest about level (accelerator + early-stage,
  not "Fundraising" and "Market Analysis" mastery)
- Replace "Problem-Solving Philosophy" platitudes with something genuine and specific to Martin

### 5. Projects section
- Align descriptions with CV where appropriate
- Discuss with Martin: any personal/hobby projects to add? (currently all projects are
  employment- or startup-tied)

### 6. Contact section
- Add downloadable CV link
- Check if blog link (msurkovsky.github.io) is live or dead — remove if dead

### 7. New section: Talks & Publications
- Martin presented at ISC and SC (major HPC conferences) — currently buried in CV, absent
  from website
- 15 publications on ORCID (2009–2020) covering: MPI visualization, traffic simulation,
  combinatorial objects, Petri nets, ant colony optimization, image processing

## Design Notes
- Layout stays the same for now
- Content-first pass, design tweaks in a later session
- About Me uses `bg-charcoal text-white` section with `bg-black/20` card — keep consistent
