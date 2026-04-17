
Use the two uploaded images as the landing backdrop — white version for light mode, black version for dark mode.

## Plan

1. Copy `user-uploads://screen.png` → `src/assets/glasses-backdrop-light.png`
2. Copy `user-uploads://screen_copy.png` → `src/assets/glasses-backdrop-dark.png`
3. Update `src/pages/Index.tsx`:
   - Remove the inline SVG glasses block
   - Import both assets
   - Render two `<img>` elements absolutely positioned, full-bleed `object-cover`, `pointer-events-none select-none`
     - Light image: visible by default, hidden in dark (`dark:hidden`)
     - Dark image: hidden by default, shown in dark (`hidden dark:block`)
   - Keep the ambient blur blob, hero, nav nodes, and theme toggle untouched
