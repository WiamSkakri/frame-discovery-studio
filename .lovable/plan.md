
# FrameSense — UI Plan

A modern-minimal, boutique virtual eyewear try-on. Pure white surfaces, crisp sans-serif (Inter), one restrained accent (deep ink/charcoal with a single warm highlight for the Fit Score and "Recommended" markers). Lots of whitespace, hairline dividers, no heavy shadows.

## Screens & flow

**1. Landing / intro (`/`)**
- Full-bleed hero: oversized wordmark "FrameSense", one-line manifesto ("Try eyewear from independent makers — see how it actually fits.")
- Single primary CTA: *Start try-on* → requests webcam → routes to scan
- Secondary strip: 3 short value props (Real fit, not just look · Independent makers · No pressure to buy)
- Tiny footer with logos of partner ateliers (placeholder marks)

**2. Face scan flow (`/scan`)**
- Live webcam fills the screen, centered face guide ring
- Animated minimal scan lines sweep across the face for ~2s
- Result card slides in: detected face shape (e.g. *Oval*), short description, "Recommended frame styles for you", primary CTA *Start trying on*, secondary *Re-scan*

**3. Try-on + catalog (`/try-on`)** — main screen, custom layout per your spec:
- **Center / left:** large live camera view with the user's face. A static glasses PNG overlay sits over the eye line, scaling roughly with the head (mocked, no ML). Subtle face-guide ring fades after a moment.
- **Top-left chip on camera:** detected face shape ("Oval · re-scan")
- **Floating Fit Score badge** top-right of camera: large number /100, one-word verdict (Excellent / Good / Tight), tooltip explains it's based on temple width, bridge, lens height
- **Right side dock (vertical):**
  - Top card: *Your face shape* — shape illustration, name, 1-line description
  - Below: *Recommended for you* — vertical scrolling list of frame thumbnails marked with a small "Recommended" tag for matches; non-matches are still shown but un-tagged (nothing hidden)
  - Filters at top of dock: style, material, price, partner type (collapsed by default)
  - Search field
- **Floating partner cards along the bottom of the camera area:** for the currently selected frame, 2–4 horizontally scrollable cards showing independent shops that carry it — shop name, location, short tagline, price, *Visit shop ↗* button. Cards have a glassy/translucent white background so the camera shows through subtly.
- **Top bar:** wordmark left, *Sign in* right (non-functional placeholder — auth is out of scope per your selection)

## Components to build
- `AppHeader` (wordmark + minimal nav)
- `LandingHero`
- `WebcamView` (getUserMedia + glasses PNG overlay, fixed position)
- `ScanOverlay` (animated lines + result card)
- `FaceShapeCard`
- `FitScoreBadge` (floating, with tooltip)
- `FrameDock` (right-side scrollable list with search + filters)
- `FrameThumb` (with "Recommended" tag variant)
- `PartnerCard` + `PartnerCardRail` (floating bottom)
- `Footer`

## Mock data
- ~12 frames with: name, image, shape match list, price range, materials
- ~8 partner shops with: name, city, tagline, which frames they carry, link
- Face shapes: oval, round, square, heart with descriptions and recommended frame styles

## Design tokens (in `index.css`)
- Background: near-white (`0 0% 99%`), surface white, ink foreground (`0 0% 8%`)
- Accent: warm ochre (`32 65% 52%`) reserved for Fit Score and "Recommended" tags only
- Muted text: neutral 45%
- Hairline borders, radius 4–8px, no large shadows — only soft 1px elevation

## Routes
- `/` Landing
- `/scan` Face scan
- `/try-on` Main app

## Out of scope (UI mock only)
- Real face-shape detection, real frame tracking, real Fit Score computation, auth, persistence, partner checkout — all visuals only with realistic mock values.
