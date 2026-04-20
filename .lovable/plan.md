
The current code is doing the opposite of what you want.

In `src/pages/Index.tsx`, both background images are set to:

```tsx
w-[112%] -translate-x-[6%]
```

That means:
- the image is made wider than the viewport
- then pushed left by 6%

So if the glasses already look too far left, this styling makes that worse.

## Plan

1. Remove the leftward shift on both backdrop `<img>` tags.
2. Replace it with a rightward shift instead:
   - keep the slight oversize if needed for full bleed
   - change `-translate-x-[6%]` to a positive right shift such as `translate-x-[6%]`
3. Keep everything else unchanged:
   - hero text
   - nav circles
   - theme toggle
   - ambient blob
4. Recheck the bridge alignment against the wordmark so it no longer sits left of the “S”.

## Expected code direction

From:

```tsx
className="... h-full w-[112%] -translate-x-[6%] object-cover ..."
```

To something like:

```tsx
className="... h-full w-[112%] translate-x-[6%] object-cover ..."
```

If that is too much, the follow-up tuning range should be smaller positive values like `translate-x-[3%]` to `translate-x-[5%]`, but the key fix is to move right, not left.

## Technical details

- `object-position` was not the effective lever here.
- The dominant visible offset is coming from the explicit Tailwind transform.
- Because the page uses `overflow-hidden`, shifting the oversized image right is the correct way to rebalance the composition without changing layout structure.
