# The Forge — alexpendell.com

The front door for The Forge. One static page: plain HTML, CSS and a little JavaScript. No build step, no framework.

Skool stays the home for the community and the courses. This page explains what The Forge is and sends people there.

## Files

| File | What it is |
| --- | --- |
| `index.html` | The whole page. All the copy lives here. |
| `styles.css` | The look. Colors and type are variables at the top. |
| `script.js` | Footer year, and the email form submitting without a page reload. |
| `alex-pendell.webp` | The About photo. |
| `og-image.png` | The image that shows when the link is shared. |
| `favicon.svg` | The browser tab icon. |
| `netlify.toml` | Netlify settings: publish the repo root, basic security headers. |
| `_redirects` | Makes `alexpendell.com/join` forward to Skool. |

## Putting it live on Netlify

Nothing here is live until you connect it.

1. In Netlify, open the project that serves alexpendell.com.
2. Link it to this repository (Project configuration → Build & deploy → Link repository).
3. Leave the build command empty. The publish directory is `.` and `netlify.toml` already says so.
4. Deploy. After that, every push to `main` redeploys the site.

To preview first, create a separate Netlify project from this repo and look at its `netlify.app` address before pointing the real domain at it.

## The email form

The "Get the notes" form is a Netlify Form named `notes`. It only records submissions on the deployed Netlify site, not when you open the file on your computer.

- Submissions show up in Netlify under Forms → notes.
- To get an email for each signup: Project configuration → Notifications → Form submission notifications.
- A hidden honeypot field filters out most bots.

## The /join link

`alexpendell.com/join` forwards to the Skool community. Use it in social bios and video descriptions so there's one link to change if the community ever moves.

## Brand rules this page follows

- **Name:** The Forge. Nothing else.
- **Tagline:** Freedom isn't found. It's forged.
- **Color:** dark charcoal ground, ember-orange headlines and buttons, steel blue as the accent.
- **Type:** bold sans headlines (Archivo ExtraBold). No script fonts.
- **Pictures:** no stock people, no real bank logos.
- **Voice:** direct and grounded, written for anyone. No "grind", "crushing it", "level up" or "no excuses". Every claim has something Alex did behind it.
- **Pillars, in order:** Credit, Investing, Travel, AI & Income, with Shield and Start Here underneath.

Colors and fonts are set once at the top of `styles.css`.

## Check before it goes live

- The Vienna numbers on the receipt ($4,500 cash price, $89 paid) and the $27 Workbench price.
- "The six courses stay free" and "Everyone who joins now counts as a founder" are public promises once this is live.
- The three bullets under Unlocked, Fly Free and Leverage were written from the course titles. Match them to the real lessons.
- The Skool address appears several times in `index.html` and once in `_redirects`. Search for `skool.com` if it changes.
