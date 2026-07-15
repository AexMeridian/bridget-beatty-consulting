# Aex Meridian — Claude Code Master Instructions

## Who I Am
I am Caleb, CEO of Aex Meridian LLC, a premium website agency for small businesses in Highlands Ranch, CO and Spokane, WA. I build websites using Claude Code and deploy them on Cloudflare Pages via GitHub. Every site I build must look and feel premium — indistinguishable from a $10,000+ agency build.

---

## How I Work — Always Follow These Rules

- I use GitHub for version control. Never run git commands. I handle all commits and pushes in VS Code.
- Never run npm run dev or any npm commands unless I specifically ask.
- Never start or restart the dev server.
- Just edit and create the files. I handle everything else.
- When I say "build this" or "create this" — write the actual code files directly.
- Before starting a large build, ask me clarifying questions if anything about the client or scope is unclear.
- When I give you a CLIENT BRIEF below, use that as your source of truth for everything — colors, fonts, tone, content, and structure.
- If no client brief is filled in yet, ask me for it before building anything.

---

## My Tech Stack

- **Framework:** Astro (static site generator)
- **Hosting:** Cloudflare Pages (connected to GitHub — auto-deploys on every push)
- **Styling:** Plain CSS inside Astro component `<style>` tags + one global CSS file
- **JavaScript:** Vanilla JS only — no React, Vue, jQuery, or any framework unless I specifically ask
- **CSS:** No Tailwind, no Bootstrap, no external CSS frameworks unless I ask
- **Icons:** Use inline SVGs or a CDN icon library only if I request it
- **Fonts:** Always Google Fonts — import in the Layout head with `display=swap`
- **Images:** Saved in `/public/images/` — referenced as `/images/filename.jpg`
- **Videos:** Saved in `/public/videos/` — referenced as `/videos/filename.mp4`
- **References:** Design screenshots saved in `/src/_references/` — never used in the site itself

---

## File Structure to Follow Every Time

```
src/
  components/       (Header.astro, Footer.astro, Hero.astro, etc.)
  layouts/          (Layout.astro — base HTML wrapper used by all pages)
  pages/            (index.astro, about.astro, services.astro, contact.astro, etc.)
  styles/           (global.css — variables, resets, typography, utilities)
public/
  images/           (all photos and image assets)
  videos/           (video files)
  _references/      (design reference images — NOT used in the site)
```

Always create these five files first on any new project before building pages:
1. `src/layouts/Layout.astro` — base HTML, imports global CSS, includes Header and Footer
2. `src/components/Header.astro` — sticky nav, logo, links, CTA button
3. `src/components/Footer.astro` — links, contact info, copyright, social icons
4. `src/styles/global.css` — CSS variables, reset, typography, utility classes
5. `src/pages/index.astro` — homepage

---

## CSS Variables — Always Define These First in global.css

Replace the values with the current client's brand colors and fonts. This keeps the entire site consistent and makes changes easy.

```css
:root {
  /* Brand Colors — fill in per client */
  --color-primary: ;
  --color-primary-dark: ;
  --color-accent: ;
  --color-white: #FFFFFF;
  --color-dark: #0A0A0F;
  --color-gray-50:  #F8FAFC;
  --color-gray-100: #F1F5F9;
  --color-gray-200: #E2E8F0;
  --color-gray-400: #94A3B8;
  --color-gray-500: #64748B;
  --color-gray-700: #334155;

  /* Typography — fill in per client */
  --font-heading: , serif;
  --font-body: , sans-serif;

  /* Spacing Scale */
  --space-1: 8px;
  --space-2: 16px;
  --space-3: 24px;
  --space-4: 32px;
  --space-5: 48px;
  --space-6: 64px;
  --space-7: 96px;
  --space-8: 128px;

  /* Border Radius */
  --radius-sm: 6px;
  --radius-md: 12px;
  --radius-lg: 20px;
  --radius-full: 9999px;

  /* Shadows — layered for depth */
  --shadow-sm: 0 1px 2px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.06);
  --shadow-md: 0 1px 2px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.08), 0 16px 32px rgba(0,0,0,0.06);
  --shadow-lg: 0 4px 6px rgba(0,0,0,0.04), 0 10px 30px rgba(0,0,0,0.10), 0 30px 60px rgba(0,0,0,0.08);

  /* Transitions */
  --transition-fast: all 0.15s ease;
  --transition: all 0.25s ease;
  --transition-slow: all 0.4s ease;

  /* Layout */
  --max-width: 1200px;
  --header-height: 72px;
}
```

---

## Design Philosophy — Non-Negotiable on Every Build

Every website must be PREMIUM. Not good. Not clean. Premium. The kind of site that makes someone stop scrolling and say "wow." Every element must feel intentional.

### First Impression — Hero Section
- Must be visually striking immediately — no generic centered-text-on-white layouts
- Hero fills full viewport height: `min-height: 100vh`
- Main headline: minimum 56px desktop, 36px mobile, font-weight 700 or 800
- Always include a clear primary CTA button — prominent, not subtle
- Add a visual element that creates depth: gradient background, floating card with shadow, image with offset border, overlapping shapes, or a subtle animation
- Subheadline: 18–20px, lighter weight, good contrast, max-width 600px

### Typography
- Always import 2 Google Fonts: one for headings (distinctive), one for body (readable)
- Strong heading pairings: Playfair Display + Inter, Fraunces + DM Sans, Syne + Inter, Cormorant + Jost, Bodoni Moda + Outfit
- Heading letter-spacing: -0.02em to -0.04em (tight = premium)
- Body line-height: 1.65–1.8
- Body font-size: 16–18px minimum — never smaller on desktop
- Heading hierarchy must be visually clear at a glance
- Never use system fonts (Arial, Times, Helvetica) unless the client specifically requests it

### Color and Depth
- Never use a flat single-color background for the entire site
- Alternate section backgrounds to create visual rhythm: white → light gray → white → dark
- Use a dark section (primary color or near-black) at least once — it adds weight and sophistication
- Gradients: subtle, directional — never rainbow or garish
- Shadows must always be layered (multiple box-shadow values) — never a single flat shadow
- Use rgba() for overlays, tints, and transparent elements
- Maximum 3 brand colors in use at once + neutrals

### Layout and Spacing
- Spacing scale: always multiples of 8px
- Section padding: 96px top/bottom desktop, 56px mobile minimum
- Max content width: 1200px centered with side padding
- Use CSS Grid for page layouts, Flexbox for component alignment
- Asymmetric layouts feel more premium than everything centered
- White space is a design tool — use it generously between elements
- Never crowd elements — if it feels tight, add more space

### Borders, Cards, and Details
- Cards always have: background color, border-radius, subtle 1px border, layered shadow, 24–32px internal padding
- Card hover: `transform: translateY(-4px)` + enhanced shadow + `var(--transition)`
- Icon in a card: always put a colored background shape behind it (circle or rounded square)
- Section dividers: use background color changes, never `<hr>` tags
- Subtle border on cards: `border: 1px solid rgba(0,0,0,0.07)`
- For dark cards: `border: 1px solid rgba(255,255,255,0.08)`

### Buttons
- Primary: solid brand color, white text, `padding: 14px 28px`, font-weight 600, border-radius matching site style
- Hover: darker background + `transform: translateY(-2px)` + enhanced shadow
- Secondary: outlined or ghost — transparent background, brand color border and text
- All buttons: `transition: var(--transition)` — never instant state changes
- Minimum button height: 48px
- Never use default browser button styles

### Navigation
- Sticky header: `position: sticky; top: 0; z-index: 100`
- On scroll: add `backdrop-filter: blur(12px)` + semi-transparent background (glass effect)
- Structure: logo left, nav links center or right, CTA button far right
- Nav links: hover underline animation using a pseudo-element, not just color change
- Active page: visually distinct from other links
- Mobile: hamburger menu that opens a smooth slide-in drawer
- Account for header height with `scroll-margin-top: var(--header-height)` on anchor sections

### Animations and Interactions
- All hover states: smooth transitions — never instant
- Fade-in-up on scroll for sections: CSS `@keyframes` triggered by Intersection Observer
- Stagger card animations when multiple cards appear together
- Never animate things that delay the user seeing content


### Images
- All images: `object-fit: cover` with explicit width and height
- Lazy load below-the-fold images: `loading="lazy"`
- Use `aspect-ratio` to maintain consistent proportions in card grids
- Hero images: always add a dark overlay (`rgba(0,0,0,0.4)`) so text stays readable
- Profile/avatar photos: always circular, with a colored ring border
- If no image provided: use a CSS gradient placeholder — never a broken img tag

### Essential Sections for Every Site
1. **Hero** — bold headline, subheadline, primary CTA, visual element
2. **Trust strip** — logos, stats, or "as seen in" row (even simple numbers work: "200+ clients, 15 years, 98% satisfaction")
3. **Services/Features** — icon grid, 3–6 items, short descriptions
4. **How it works** — 3–4 numbered steps, reduces friction and builds trust
5. **Testimonials** — 2–3 cards, quote, name, title, avatar or initials
6. **About/Story** — humanizes the business, builds connection
7. **FAQ** — 4–6 questions, reduces objections
8. **Final CTA section** — strong closing statement + button, different background color
9. **Footer** — nav links, contact info, social icons, copyright line

### Mobile Rules
- All layouts collapse to single column at 768px or below
- Font sizes scale down but never below: body 15px, h1 32px
- Touch targets minimum 44x44px — this includes buttons, nav links, and icons
- Hamburger menu on mobile for any nav with more than 3 links
- Test every section mentally at 375px width before finishing
- No horizontal scrolling — ever

### Performance
- Lazy load all images below the fold
- Google Fonts: always add `&display=swap` to the import URL
- No JavaScript libraries unless specifically required
- Minimize unused CSS — only write what is used on the page
- Prefer CSS animations over JavaScript animations where possible

---

## Client Brief — Fill This In For Each New Project

**When starting a new client project, replace everything in this section with the client's details. Leave the headings, just change the values.**

```
CLIENT NAME: 
BUSINESS NAME: 
BUSINESS TYPE: 
LOCATION: 
TAGLINE: 
WHAT THEY DO (2-3 sentences): 

TARGET AUDIENCE: 
TONE (e.g. professional, friendly, bold, luxurious): 

PRIMARY COLOR (hex): 
SECONDARY COLOR (hex): 
ACCENT COLOR (hex): 
HEADING FONT: 
BODY FONT: 

PAGES NEEDED: 
SERVICES/PRODUCTS TO LIST: 

KEY STATS OR CREDIBILITY POINTS (years in business, clients served, etc.): 

IMAGES PROVIDED: yes / no / partial
VIDEOS PROVIDED: yes / no
LOGO PROVIDED: yes / no

SPECIAL FEATURES OR REQUESTS: 
ANYTHING TO AVOID: 
```

---

## Placeholder Content Rules

If real content has not been provided yet, use realistic professional placeholders — never Lorem Ipsum. Make them feel real:
- Use the client's actual business name and location
- Write placeholder bio, service descriptions, and headlines in the client's stated tone
- Use real-looking placeholder stats (e.g. "10+ years experience", "500+ clients served")
- Mark every placeholder with a comment: `{/* PLACEHOLDER — replace with real content */}`
- Never leave blank sections — always fill with something plausible

---

## How to Give Feedback on a Build

Be specific about what to change:
- "The hero feels generic" → I will add a more distinctive visual element and bolder typography
- "The cards feel flat" → I will enhance shadows, add hover states, and add icon backgrounds
- "The spacing feels tight" → I will increase section padding and add more breathing room
- "This section looks basic" → I will redesign with asymmetric layout, better hierarchy, or a more interesting background

Do not accept "good enough." If something looks like a template, it needs more work.

---

## Reusable Prompt Templates

Use these as starting points when briefing me on a build:

**Full site build:**
"Build a complete professional website for [CLIENT NAME], a [BUSINESS TYPE] based in [LOCATION]. Use the client brief above. Pages needed: [LIST]. Color scheme: [COLORS]. Font pairing: [FONTS]. Tone: [TONE]. Follow all Aex Meridian design standards — premium quality, every section intentional."

**Single section:**
"Build a [SECTION NAME] section for [CLIENT NAME]'s website. It should [DESCRIBE WHAT IT DOES]. Match the existing color scheme and typography. Follow all Aex Meridian design standards."

**Edit request:**
"On [PAGE], change [SPECIFIC ELEMENT] to [WHAT YOU WANT]. Keep everything else the same."

**Redesign:**
"The [SECTION] on [PAGE] looks too basic. Redesign it to feel more premium — more visual depth, better use of the brand colors, and stronger typography hierarchy."

---

*This is the Aex Meridian master CLAUDE.md. Copy it into every new client project and fill in the Client Brief section before starting the build. The design standards apply to every project — never lower them.*

You do not have to ask for permission to to run bash commands. Never ask for permsision to read files, write files, or run build-related commands

