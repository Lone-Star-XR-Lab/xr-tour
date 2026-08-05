# Images

Drop photos in this folder using the filenames below. The slideshow references
them directly — until a file exists, that card shows a dashed "Add photo"
placeholder instead of a broken image.

| Filename | Used for |
|---|---|
| `anne-frank-house-vr.jpg` | Anne Frank House VR card |
| `traveling-while-black.jpg` | Traveling While Black card |
| `wander.webp` | Wander card |
| `on-the-ice-hatched.webp` | Hatched: On the Ice card |
| `open-brush.jpg` | Open Brush card |
| `youtube-vr.jpg` | 360° YouTube Experiences card (added) |
| `human-anatomy-vr.jpg` | Human Anatomy VR card (added) |

## App demo clips

Each app card advances in two steps: the still photo above shows first, and
the next click/arrow-key swaps in a short looping GIF before a second
click/arrow-key moves on to the next card. Drop a GIF using the filenames
below to enable it — until the file exists, that click shows a dashed
"Add gif/video" placeholder instead of a broken clip.

| Filename | Used for |
|---|---|
| `anne-frank-example.gif` | Anne Frank House VR card (added) |
| `traveling-while-black-example.gif` | Traveling While Black card (added) |
| `wander-example.gif` | Wander card (added) |
| `on-the-ice-hatched-example.gif` | Hatched: On the Ice card (added) |
| `tilt-brush-example.gif` | Open Brush card (added) |
| `youtube-vr-example.gif` | 360° YouTube Experiences card (added) |
| `human-anatomy-vr-example.gif` | Human Anatomy VR card (added) |

Keep clips short (5–10s) and small — a big GIF will stall the slideshow on
campus computers. The seven added so far run anywhere from 0.76MB
(`youtube-vr-example.gif`) up to **56.7MB** (`human-anatomy-vr-example.gif`,
well past GitHub's 50MB warning threshold). `on-the-ice-hatched-example.gif`
and `traveling-while-black-example.gif` are also large (~17MB each). All
three are worth shrinking (fewer frames, lower resolution, or a GIF
compressor) before this goes out for a live tour — `human-anatomy-vr-example.gif`
especially, since at that size it'll visibly stall on a normal laptop. If a
clip has audio you care about or a compressed GIF still looks rough, ask to
swap that slide's tag to a muted `<video>` instead — usually much smaller
than an equivalent GIF for the same clip.

## Branding assets

- `XR Lab Logo_White.png` &mdash; wordmark used in the nav bar and the floating
  presentation-mode badge.
- `XR LAB - Profile.png` &mdash; the square lab avatar used for social profiles,
  reused here as the site favicon and social share preview image (`og:image`
  in `index.html`).

## Guidelines

- Landscape orientation works best — the image area crops to fill roughly a 16:10 box.
- Keep each file under ~500KB so the slideshow still loads quickly on campus computers.
- Only use photos you have the right to use (lab photos you took, official press/marketing
  images the publisher allows for educational use, or your own screenshots). Do not hotlink
  images from other websites — see `AGENTS.md`.
- If a screenshot is of a third-party app's in-headset view, a caption crediting the
  experience by name (already present on each card) is good practice.
