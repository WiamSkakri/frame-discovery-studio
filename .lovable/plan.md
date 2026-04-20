
The backdrop images (`glasses-backdrop-light.png` / `glasses-backdrop-dark.png`) are rendered with `object-cover` on a full-bleed `<img>`. `object-cover` centers the image and crops the overflow equally on both sides — but only if the image's subject is centered within the source PNG.

Since the glasses appear shifted left on screen, the most likely cause is that **the glasses are not horizontally centered inside the source PNG itself** (e.g. extra empty/black canvas on the right side of the file). When `object-cover` crops to fill the viewport, it crops symmetrically, so any asymmetry in the source becomes visible asymmetry on screen.

Secondary possibility: at the current viewport aspect ratio (1136×865 ≈ 1.31:1) vs the image's native aspect ratio, `object-cover` is cropping top/bottom or left/right in a way that exposes the off-center composition.

## Fix

Shift the visual center of the image rightward using `object-position` so the glasses sit centered in the viewport. No image re-export needed.

Update both `<img>` tags in `src/pages/Index.tsx`:

```tsx
className="... object-cover object-[60%_center] dark:hidden"
```

(Tune the percentage — likely between `55%` and `65%` — until the glasses are visually centered. We'll start at `60%` and adjust if needed.)

That's the only change. Hero, nav, theme toggle, ambient blob all stay identical.
