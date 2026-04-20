
You're right — the source PNG isn't wide enough to fill the viewport once we shift it right. By oversizing to `w-[112%]` and translating `+6%`, we exposed the left edge of the image (empty/transparent canvas), creating that gap.

The image isn't "dynamic" in the responsive sense — it's a fixed-resolution PNG, and `object-cover` was already stretching it edge-to-edge. Any horizontal shift will reveal an empty edge on one side unless we compensate by making the image even wider so both edges stay outside the viewport.

## Plan

Increase the image width so the rightward shift no longer pulls the left edge into view.

In `src/pages/Index.tsx`, on both backdrop `<img>` tags:

- Change `w-[112%]` → `w-[125%]`
- Keep `translate-x-[6%]` (rightward)

Math: with `w-[125%]`, there is 25% of overflow to distribute. A `+6%` translate leaves ~6.5% bleeding off the left and ~18.5% off the right — no empty gap on either side, and the glasses still sit slightly right of center.

If after this the bridge swings too far right, reduce the shift to `translate-x-[4%]` or `translate-x-[3%]` rather than reducing the width.

## Why not a different approach

- `object-position` had no visible effect earlier in this conversation.
- Re-exporting the PNG with the glasses re-centered would also work but requires a new asset; the CSS fix is faster and reversible.
- Using `background-image` with `background-size: cover` + `background-position` would behave identically to `object-cover` — same root limitation.

Only the two `<img>` className strings change. Hero text, nav circles, theme toggle, ambient blob untouched.
