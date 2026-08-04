# AGENTS.md

## Project purpose

This repository contains a static slideshow used during tours of the XR Lab at Lone Star College–Tomball.

The site should communicate that the lab:

- Is a pilot program that is continually evaluated and improved
- Tests XR applications and teaching ideas to determine what works
- Primarily uses existing, accessible, and free experiences
- Supports students, faculty, and multiple academic departments
- Uses XR as a tool for learning rather than treating the hardware as the goal
- Encourages durable skills, including communication, teamwork, critical thinking, problem solving, and adaptability
- Tries to keep equipment actively used instead of stored away

Do not claim that the lab currently develops substantial original XR software unless the project owner explicitly updates that position.

## Technical constraints

- Keep the project deployable as a static site.
- Prefer plain HTML, CSS, and vanilla JavaScript.
- Avoid adding a framework, package manager, build step, or external dependency unless explicitly requested.
- Preserve the ability to open `index.html` directly from the filesystem.
- Keep all core functionality available without an internet connection.
- Do not introduce analytics, trackers, cookies, or remote fonts.

## Current structure

The application is contained in `index.html`:

- CSS is inside the `<style>` block.
- Presentation markup is inside `<main id="main">`.
- Every slideshow screen has the class `slide`.
- JavaScript is inside the final `<script>` block.
- Presentation mode is enabled on initial load with `setPresentation(true)`.
- The slide count is generated from all `.slide` elements.

Supporting documentation lives in:

- `README.md`
- `AGENTS.md`

## Presentation behavior

Preserve these controls:

- Right Arrow, Down Arrow, Page Down, and Space advance the slideshow.
- Left Arrow, Up Arrow, and Page Up move backward.
- Home opens the first slide.
- End opens the last slide.
- Escape exits presentation mode.
- P toggles presentation mode.
- F toggles browser fullscreen (via the Fullscreen API).
- On-screen previous and next buttons remain available.
- On-screen fullscreen button and clickable slide-dot navigation remain available.

The site must continue to open directly in presentation mode unless the owner requests otherwise.

## Content style

- Use short, tour-friendly text.
- Favor headings, concise statements, diagrams, and visual examples over long paragraphs.
- Keep the tone welcoming, practical, and honest.
- Avoid exaggerated marketing language.
- Avoid implying that VR replaces instructors, classrooms, or established teaching methods.
- Explain XR in terms of educational outcomes and experiences.
- Use “XR” when referring broadly to virtual and mixed reality.
- The “throwing spaghetti at the wall” analogy may appear as an informal secondary line, but the primary wording should describe testing, evaluating, and improving the pilot program.

## Visual direction

- Maintain the dark blue, light blue, and gold visual identity unless asked to redesign it.
- Keep text large enough for wall displays and tours.
- Use strong contrast and generous spacing.
- Prefer visual demonstrations that show exploration, active learning, collaboration, or skills practice.
- CSS illustrations are acceptable and useful for offline operation.
- When adding real lab photographs, use local optimized images and meaningful alt text.
- Do not use unlicensed images or hotlink third-party assets.
- When an `<img>` references a local file that may not exist yet (e.g. a photo slot awaiting a
  real file), give it an `onerror` handler that adds a `missing-photo` class to its parent and
  removes the broken `<img>`, so the slide falls back to a visible dashed placeholder instead of
  a broken-image icon. See the "What we use" app slides (`.app-visual`) for the pattern.

## Accessibility requirements

- Preserve keyboard navigation.
- Use semantic HTML elements and a logical heading order.
- Keep visible focus states.
- Give buttons accessible names.
- Add alt text to meaningful images.
- Do not communicate essential meaning with color alone.
- Respect reduced-motion preferences when adding animation.

## Editing rules

When adding a slide:

1. Add the new element inside `<main id="main">`.
2. Include the class `slide`.
3. Keep its content readable at presentation distance.
4. Verify that the automatic counter updates.
5. Test keyboard and on-screen navigation.

When changing JavaScript:

- Keep state simple and local.
- Avoid global dependencies.
- Preserve graceful operation when opened with a `file://` URL.
- Do not require browser permissions.

When changing CSS:

- Reuse the custom properties in `:root`.
- Check both presentation mode and normal page mode.
- Check common desktop resolutions and a narrow mobile viewport.
- Avoid horizontal scrolling.

## Validation checklist

Before completing a change:

- Open `index.html` directly in a browser.
- Confirm it starts in slideshow mode.
- Test all keyboard controls.
- Test previous and next buttons.
- Confirm the slide counter is correct.
- Exit with Escape and re-enter with P.
- Check for clipped headings, overflowing content, or unreadably small text.
- Confirm visuals still work without internet access.
- Confirm factual claims match the current XR Lab program.

## Scope discipline

This is a tour presentation, not a full content management system or institutional website. Keep changes focused. Do not turn the project into a dependency garden merely because modern software development occasionally mistakes complexity for progress.
