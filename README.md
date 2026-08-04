# XR Lab Tour Slideshow

A lightweight, single-file slideshow for introducing visitors to the XR Lab at Lone Star College–Tomball.

The presentation explains:

- What the XR Lab is
- How the lab operates as an evolving pilot program
- How existing and mostly free XR experiences are evaluated
- How faculty and students use the lab
- How XR can support durable skills such as communication, teamwork, critical thinking, problem solving, and adaptability

## Open the slideshow

Open `index.html` in a modern browser.

The page automatically starts in slideshow mode. No installation, server, framework, package manager, or build process is required.

## Slideshow controls

| Control | Action |
|---|---|
| Right Arrow, Down Arrow, Page Down, or Space | Next slide |
| Left Arrow, Up Arrow, or Page Up | Previous slide |
| Home | First slide |
| End | Last slide |
| Escape | Exit slideshow mode |
| P | Toggle slideshow mode |
| F | Toggle browser fullscreen |
| On-screen arrows | Previous or next slide |
| On-screen dots | Jump to a specific slide |
| On-screen fullscreen button | Toggle browser fullscreen |

## Project files

```text
xr-lab-tour-site/
├── index.html   # Complete site, styling, visuals, and slideshow behavior
├── README.md    # Project documentation
└── AGENTS.md    # Instructions for contributors and coding agents
```

Everything is intentionally contained in `index.html` so the presentation can be copied, archived, emailed, or hosted with minimal ceremony.

## Editing the presentation

Each slideshow screen is an element with the class `slide`:

```html
<section class="slide">
  ...
</section>
```

The opening screen uses:

```html
<header class="hero slide">
  ...
</header>
```

To add a slide, add another element with the `slide` class inside `<main id="main">`. The slide counter is calculated automatically.

### Change text

Search `index.html` for the visible heading or sentence and edit it directly.

### Change colors

The main design tokens are at the beginning of the stylesheet:

```css
:root {
  --bg: #07111f;
  --accent: #f5c542;
  --accent-2: #69b7ff;
}
```

### Add visual examples

The current examples use CSS illustrations so the presentation works offline and does not depend on remote image hosting. New photographs or screenshots can be added to the project folder and referenced with a relative path:

```html
<img src="images/example.jpg" alt="Student using a VR headset in the XR Lab">
```

Keep image file sizes reasonable so the slideshow loads quickly on campus computers.

## Publishing

### GitHub Pages

1. Create a GitHub repository.
2. Upload the contents of this folder to the repository root.
3. Open **Settings → Pages**.
4. Select the repository branch and root folder as the source.
5. Save the Pages configuration.

### Local or shared drive

The slideshow can also be opened directly from a local folder, USB drive, network share, or shared lab computer. Because it has no external dependencies, most features work without internet access.

## Accessibility

The site includes semantic headings, keyboard navigation, visible controls, focus states, a skip link, descriptive labels, and reduced reliance on text-heavy slides. Any added images should include useful `alt` text.

## Browser support

Use a current version of Chrome, Edge, Firefox, or Safari. The slideshow is designed primarily for desktop displays and presentation screens, while remaining usable on smaller devices.
