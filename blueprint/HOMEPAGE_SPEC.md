# Visual Booster Studio Homepage Specification

Status: LOCKED  
Version: v1  
Authority: Homepage implementation must follow `CODEx_BUILD_RULES.md`, the approved homepage mockup, and the UI/UX Pro Max analysis recorded in this specification.  
Scope: Visual Booster Studio company website homepage only. No SaaS app, login, backend, billing, database, dashboard, or admin flows.

## 1. Authority And Build Workflow

All homepage work must follow `CODEx_BUILD_RULES.md`.

Decision priority:

1. Locked Project Documents
2. Approved Design Mockups
3. UI/UX Pro Max Skill
4. User Instructions
5. Codex Implementation

If this document conflicts with an approved mockup, the approved mockup wins unless the user explicitly updates this document.

## 2. UI/UX Pro Max Research Summary

Searches run before writing this specification:

- `homepage structure premium software company website`
- `premium software company websites conversion hierarchy visual hierarchy`
- `bento layouts product showcase responsive layouts`
- `visual hierarchy homepage sections software company cards CTA`
- `responsive layouts homepage card grid desktop tablet mobile`
- `product showcase premium SaaS app cards screenshot previews`
- `featured web apps product showcase premium SaaS cards`
- `popular free tools utility grid bento homepage conversion`
- `latest youtube videos homepage content cards conversion hierarchy`
- `custom build CTA premium software homepage conversion`
- `premium website footer software company navigation SEO`
- `responsive layouts hover behavior image replacement architecture accessibility`

Recommendations that apply:

- Keep the homepage hero-centric with primary conversion actions above the fold.
- Use scannable product showcases with high information density but low clutter.
- Use sequential heading hierarchy and semantic landmarks.
- Use visible hover/focus states and large touch targets.
- Build mobile-first, then enhance for tablet and desktop.
- Use product screenshots/previews to communicate value quickly.
- Respect `prefers-reduced-motion`.
- Avoid cheap visuals, generic product grids, excessive animation, heavy 3D, glassmorphism, and poor contrast.
- Use visual-first bento/product showcase principles where they match the mockup: modular scanning, concise copy, clear card-level CTAs, and premium preview surfaces.
- Keep conversion hierarchy simple: header CTA, hero CTAs, compact section-level CTAs, and final custom-build CTA.
- On touch devices, every important interaction must be tap/click accessible and cannot rely on hover alone.
- Images and previews must scale inside their containers and must never overflow fixed card bounds.

Recommendations intentionally rejected because the approved mockup and project rules override them:

- Liquid glass, blur-heavy effects, animated morphing, heavy 3D, scroll-snap, and large animation systems.
- Ratings, fake social proof, fake metrics, testimonials, or download-store conventions.
- Generic light SaaS layouts that do not match the approved dark premium mockup.

## 3. Approved Mockup Analysis

The approved homepage mockup establishes:

- A dark premium software-company aesthetic with restrained purple, green, blue, amber, and cyan accents.
- A sticky dark header with crystal V logo, wordmark, centered navigation, theme support, and a right CTA.
- A split hero: strong business headline and CTAs on the left; spreadsheet-to-web-app transformation story on the right.
- Product sections with compact headers and right-side text CTAs.
- Featured Web Apps cards as compact premium product cards with icon tile, mini app preview, product name, short description, and CTA.
- Popular Free Tools and Latest YouTube Videos share a horizontal content band below Featured Web Apps.
- A full-width custom build CTA band sits above the footer.
- Footer is dense, structured, and product-company oriented.

Global visual rules from the mockup:

- No decorative gradients as section backgrounds.
- No glassmorphism.
- No flashy animation.
- Deep dark background: visually close to `#03050a` / `#0A0A0F`.
- Borders are thin and low-contrast.
- Cards are dark, compact, softly elevated, and data/product-preview focused.
- CTAs use short imperative labels and arrow movement.

## 4. Global Homepage Rules

### Layout

- Overall page max-width: use the existing reusable `Container`.
- Section rhythm: compact but breathable. The homepage should feel like a dense premium product website, not a marketing landing page with oversized empty bands.
- Desktop target: 1280px to 1536px wide.
- Tablet target: 768px to 1024px.
- Mobile target: 360px to 430px minimum.

### Typography

- Font family: existing Space Grotesk foundation unless a future locked design system changes it.
- H1: largest page text; only one H1.
- H2: section titles.
- H3: card titles.
- Body copy: subdued, readable, and never oversized inside cards.
- Letter spacing: avoid negative letter spacing except existing approved hero/card tuning; do not scale type by viewport width.

### Cards

- Border radius: 8px to 12px. Prefer 8px for compact dashboard/product cards.
- Borders: `border-border` in light mode, `border-white/10` style in dark mode.
- Shadows: restrained, no glowing card carpets. Glow may appear only on hover via the interaction system.
- Cards must not be nested inside decorative page-section cards.

### Images And Previews

- Use `ImageReadyPreview` for any card, tool, video, spreadsheet, or app preview that will later accept real screenshots.
- Placeholder previews must remain static CSS/HTML and must look like product UI, not skeleton loaders.
- Each real image must have meaningful alt text if it communicates content.
- Decorative previews inside already-labeled cards may be hidden with `aria-hidden` only if equivalent text exists in the card.
- Future screenshots must live under `public/` and be referenced by root-relative paths, for example `/previews/apps/inventory-pro.png`.

### Hover And Motion

- Reuse the existing interaction system:
  - `interactiveCardClassName`
  - `interactivePreviewClassName`
  - `interactiveArrowClassName`
- Hover behavior:
  - slight lift
  - border accent
  - optional shadow refinement
  - preview shift/scale
  - CTA arrow movement
- Motion must respect `prefers-reduced-motion`.
- No entrance animations unless specifically approved later.

### Accessibility

- Use semantic `header`, `main`, `section`, `nav`, `article`, `footer`.
- Every section needs an accessible heading.
- All click targets should be at least 44px tall on mobile.
- Link labels must be descriptive through visible text or `aria-label`.
- Do not rely on color alone for important states.
- Preserve visible focus states.

### SEO And AI Discoverability

- The homepage must clearly state:
  - brand name
  - what the company does
  - transformation from spreadsheets to web apps
  - web apps, free tools, YouTube, custom build services
- Use semantic headings matching user search intent.
- Avoid vague section titles.
- Use descriptive card titles and concise summaries.
- Future structured data should represent the company and featured software/tool offerings without fake ratings or fake reviews.

## 5. Section Specifications

## Header

### Purpose

Provide persistent brand identity, primary navigation, theme access, and the main custom-build conversion route.

### Desktop Layout

- Sticky at top.
- Full-width dark bar with subtle bottom border.
- Left: official crystal V mark plus stacked wordmark.
- Center: nav links in this exact order:
  - Home
  - Web Apps
  - Free Tools
  - YouTube
  - Custom Build
  - About
- Right:
  - `Let's Build Yours →`
  - light/dark toggle
- Active nav item uses primary accent and underline.

### Tablet Layout

- Preserve logo left and CTA/toggle/menu controls right.
- Navigation may collapse earlier if spacing is tight.
- Touch targets remain at least 44px.

### Mobile Layout

- Logo left.
- Theme toggle and hamburger right.
- Mobile menu contains all nav links and `Let's Build Yours →`.
- Menu must be keyboard accessible and close on navigation.

### Exact Hierarchy

- `header`
- brand home link
- primary `nav`
- CTA link
- theme toggle
- mobile menu button
- mobile `nav`

### Card Count

Not applicable.

### Card Proportions

Not applicable.

### Typography Hierarchy

- Wordmark is compact uppercase.
- Nav links are small, medium-weight.
- CTA is small but visually prominent.

### Spacing Rules

- Header min-height approximately 72px desktop.
- Horizontal nav gap approximately 28px to 36px desktop.
- Mobile menu row height at least 44px.

### Image Rules

- Crystal V logo must be the official brand mark or current approved inline SVG until a final asset is provided.

### Hover Behavior

- Nav links: color shift.
- CTA: slight lift and stronger background state.
- Mobile menu button: subtle background change.

### Motion Rules

- No flashy menu animations.
- Respect reduced motion.

### Accessibility Notes

- Header link to home must have brand label.
- Active nav uses `aria-current="page"`.
- Mobile menu button uses `aria-expanded` and `aria-controls`.

### SEO Notes

- Header navigation should expose all top-level homepage categories to crawlers and AI systems.

### Components To Reuse

- `SiteHeader`
- `Container`
- `ThemeToggle`
- `CrystalVLogo`

### ImageReadyPreview Usage

Not needed.

### Interaction System Usage

Optional for CTA only; do not over-animate header.

### Intentional Deviations From Mockup

- Theme toggle is required even if the mockup visually emphasizes only dark mode.

## Hero

### Purpose

Communicate the core promise immediately: Visual Booster Studio turns spreadsheets into powerful web applications.

### Desktop Layout

- Two-column layout.
- Left column:
  - small pill/eyebrow
  - H1
  - supporting paragraph
  - two CTAs
  - three compact benefit chips
- Right column:
  - caption: `Real Spreadsheets. Real Transformations.`
  - three transformation rows:
    - spreadsheet preview
    - arrow control
    - app preview

### Tablet Layout

- Stack hero copy above visual if horizontal space is insufficient.
- Transformation rows can remain vertical but must keep spreadsheet-to-app order.

### Mobile Layout

- Single column.
- Hero copy centered.
- CTAs stacked or full-width.
- Transformation rows stack:
  - spreadsheet card
  - down arrow
  - app card

### Exact Hierarchy

- `section` with H1.
- Hero copy group.
- CTA link group.
- Benefit list.
- `figure` for transformation story.
- `ol` with three clickable transformation items.

### Card Count

- Three transformation items.
- Each transformation contains one spreadsheet card and one app card.

### Card Proportions

- Desktop transformation row:
  - spreadsheet card: approximately 38% of visual row width
  - arrow: fixed circular connector
  - app card: approximately 55% of visual row width
- Cards must remain compact enough to show all three rows in the hero viewport on desktop.

### Typography Hierarchy

- H1: exact locked headline unless user updates it:
  - `Turn Boring Spreadsheets Into Powerful Web Apps`
- Supporting paragraph:
  - business-focused, no vague marketing filler.
- App card titles: small, semibold.
- Preview labels: small and subdued.

### Spacing Rules

- Hero section top/bottom spacing: generous desktop, tighter mobile.
- Gap between copy and visual: large enough to prevent crowding.
- Transformation row gap: compact and consistent.

### Image Rules

- Spreadsheet preview and app preview must use `ImageReadyPreview`.
- Current CSS/HTML previews are fallbacks.
- Future spreadsheet screenshots should be added to data as:
  - `spreadsheetPreview.src`
  - `spreadsheetPreview.alt`
- Future app screenshots should be added as:
  - `appPreview.src`
  - `appPreview.alt`

### Hero Visual Rules

- Each application card must be an independent floating surface. Glow, shadow, border highlight, and hover elevation belong only to the individual card. Ambient glows must never visually merge adjacent cards into a single illuminated column. Clear negative space must remain between Inventory Pro, Attendance Pro, and Invoice Pro cards. Every card should feel like its own premium product, similar to Apple, Linear, Stripe, Raycast, and Vercel design systems.
- Spreadsheet cards, connector controls, and application cards must read as three repeated transformation rows, not as one merged illustration.
- The visual story must remain clear at all breakpoints: spreadsheet input, transformation arrow, premium app output.
- No background glow or shadow may reduce the visible separation between the three app cards.

### Hero Visual Independence (LOCKED)

The three transformation rows must visually communicate three independent premium software products.

Required:

- Each spreadsheet card is an independent card.
- Each app card is an independent card.
- Each app card has its own border, glow, shadow and hover state.
- Hovering one card must never illuminate or merge neighboring cards.
- There must be visible breathing space between transformation rows.
- The current merged glow appearance is NOT acceptable.
- Spreadsheet previews and app previews must remain replaceable using ImageReadyPreview.
- Future real screenshots must drop into the existing architecture without changing layout.

### Hover Behavior

- Entire transformation item is clickable.
- Use `interactiveCardClassName`.
- Preview uses `interactivePreviewClassName`.
- Arrow uses `interactiveArrowClassName`.
- Hover must be subtle and premium.

### Motion Rules

- Hover-only micro-interactions.
- No autonomous animation.
- Respect reduced motion.

### Accessibility Notes

- Transformation links must have descriptive labels like `View Inventory Pro`.
- Decorative mini-UI may be hidden if data is represented by accessible card text.
- Real screenshots need meaningful alt text.

### SEO Notes

- Hero text must contain spreadsheet and web app transformation language.
- Transformation app names should be real semantic text, not image-only.

### Components To Reuse

- `HeroSection`
- `Container`
- `CrystalVLogo`
- `ImageReadyPreview`
- interaction classes from `interaction-styles`

### ImageReadyPreview Usage

Required for all spreadsheet and app preview areas.

### Interaction System Usage

Required for clickable transformation rows.

### Intentional Deviations From Mockup

- Any fake metrics visible in the mockup must not be implemented unless real, approved numbers exist.
- If a proof strip is used, it must be qualitative or real-data-backed.

## Featured Web Apps

### Purpose

Immediately show visitors the types of premium web applications Visual Booster Studio builds.

### Desktop Layout

- Compact section below Hero.
- Header row:
  - left: `Featured Web Apps`
  - right: `View All Apps →`
- Cards display in one row of five at wide desktop, matching the approved mockup.
- Section must visually sit below the Hero without becoming a separate landing-page block.
- The row should feel like a curated product shelf: compact, aligned, and preview-led.

### Tablet Layout

- Cards wrap into two or three columns depending on width.
- Header remains horizontal if possible; otherwise right link can wrap under title.

### Mobile Layout

- Single-column card stack.
- Header remains compact.
- Each card remains fully clickable.

### Exact Hierarchy

- `section`
- H2 `Featured Web Apps`
- right-side link
- card grid
- five `article` elements

### Card Count

Exactly five visible cards:

1. Inventory Pro
2. Attendance Pro
3. Invoice Pro
4. Expense Tracker
5. CRM Pro

### Card Proportions

- Desktop card: tall compact rectangle.
- Preview/dashboard area should occupy roughly 45% to 50% of the card height.
- Icon tile sits to the left of preview, as in the mockup.
- Text and CTA occupy the lower half.
- Card height should be large enough for the preview to feel intentional, not like a thumbnail stamp.
- Preview surface should be the dominant visual element inside each card while preserving room for title, description, and CTA.
- Icon tile must be visually distinct but secondary to the dashboard preview.

### Typography Hierarchy

- H2: compact section title.
- Card title: strong H3.
- Description: lighter, smaller, two to three lines maximum.
- CTA: primary accent color and semibold.

### Spacing Rules

- Section padding: compact, visually connected to the Hero.
- Card padding: enough internal whitespace for premium feel.
- Grid gap: approximately 16px.
- Card inner spacing should avoid cramped edges: preview, text, and CTA need clear breathing room.
- The header row should align with the card grid and use a tight bottom margin, similar to the mockup.

### Image Rules

- Each app preview must use `ImageReadyPreview`.
- Current preview can be static CSS/HTML.
- Future real screenshots should be supplied as `previewImage.src`.
- Images must not crop essential UI details.
- Static fallback previews must look like real premium SaaS interfaces: top bar, tiny navigation rail or controls, content modules, and one chart/table/data region.
- Fallback previews must avoid fake business metrics unless they are abstract unreadable UI marks or approved real values.
- Real screenshot replacement must preserve the same card proportions and must not require layout changes.

### Hover Behavior

- Full card is clickable.
- Use existing interaction system:
  - card lift
  - border accent
  - preview shift/scale
  - arrow movement

### Motion Rules

- Hover only.
- No animated charts.
- Respect reduced motion.

### Accessibility Notes

- Each card is an `article` with an H3.
- Full-card link must have descriptive `aria-label`.
- Preview alt text required when real image is used.

### SEO Notes

- App names and descriptions are indexable text.
- No fake ratings, reviews, or customer claims.

### Components To Reuse

- `FeaturedAppsSection`
- app card component
- `ImageReadyPreview`
- `interactiveCardClassName`
- `interactivePreviewClassName`
- `interactiveArrowClassName`

### ImageReadyPreview Usage

Required for every app card preview.

### Interaction System Usage

Required for every app card.

### Intentional Deviations From Mockup

- Mockup preview images are illustrative. Implementation may use static CSS/HTML previews until real screenshots exist.
- Do not add app metrics unless approved and real.
- The approved mockup shows five Featured Web Apps cards; this specification locks five cards for the homepage shelf even if future index pages contain more apps.

## Popular Free Tools + Latest YouTube Videos

### Purpose

Show useful free utilities and educational content in one compact lower-homepage band, reinforcing that Visual Booster Studio builds both software and practical resources.

### Desktop Layout

- Combined two-column section, as shown in the approved mockup:
  - left column: Popular Free Tools
  - right column: Latest YouTube Videos
- Left column width: approximately 40%.
- Right column width: approximately 60%.
- Both columns have compact title rows with right-side links:
  - `View All Tools →`
  - `View All Videos on Youtube →`
- The two columns must read as one shared content band, not two unrelated sections.
- Top edges of the tools list and video cards should align visually.

### Tablet Layout

- Stack columns vertically if horizontal space is tight.
- Tools grid/list appears first, videos second.
- Preserve title/right-link rows.

### Mobile Layout

- Single-column vertical flow:
  - Popular Free Tools
  - Latest YouTube Videos
- Tool cards stack.
- Video cards stack.

### Exact Hierarchy

- One parent `section` with an accessible H2 or two sibling subsection headings.
- Tool subsection:
  - H2/H3 `Popular Free Tools`
  - right link
  - exactly six tool cards
- Video subsection:
  - heading `Latest YouTube Videos`
  - right link
  - three video cards

### Card Count

Popular Free Tools:

1. Image Compressor
2. PDF to Word
3. QR Code Generator
4. Invoice Generator
5. Resume Builder
6. SEO Meta Generator

Latest YouTube Videos:

- Exactly three video cards on desktop, matching the approved mockup rhythm.
- Video content must be real or clearly placeholder until approved.

### Card Proportions

Tool cards:

- If matching mockup list style: compact horizontal cards with icon left, text center, arrow right.
- If using required preview architecture: compact card grid/list with preview area not exceeding 40% of card height.
- Do not create oversized tool cards that overpower Featured Web Apps.
- Because the approved mockup uses a dense list, tool cards should prefer a compact horizontal row treatment unless a future approved mockup changes this.
- Any replaceable preview for tools must be compact and subordinate to the tool name and utility purpose.

Video cards:

- Thumbnail preview on top.
- Title and metadata below.
- Thumbnail ratio should be 16:9.
- Video cards should use three equal columns on desktop inside the right column.
- Thumbnail should be the primary visual element, with title below and optional real metadata only if available.

### Typography Hierarchy

- Subsection headings: H2/H3-level visual weight.
- Tool names: semibold.
- Tool descriptions: small, muted, one line if possible.
- Video titles: semibold, two lines max.
- Metadata: subdued.

### Spacing Rules

- Combined section should feel denser than the Hero.
- Gap between tool and video columns: approximately 32px on desktop.
- Internal card gap: approximately 8px to 16px.

### Image Rules

- Tool preview areas must use `ImageReadyPreview` if visual previews are used.
- Video thumbnails must use `ImageReadyPreview`.
- Future real tool screenshots should use `/previews/tools/...`.
- Future video thumbnails should use `/previews/youtube/...`.
- Placeholder tool previews should be functional-looking utility interfaces, not generic icon blocks.
- Placeholder video thumbnails should be clearly static and should not imply playback unless the card links to real video content.

### Hover Behavior

- Tool and video cards use the interaction system.
- CTA arrows move subtly.
- Thumbnail/preview shifts or scales subtly.

### Motion Rules

- No autoplay.
- No animated thumbnail effects.
- Respect reduced motion.

### Accessibility Notes

- Tool links must say `Open [Tool Name]`.
- Video links must say `Watch [Video Title]`.
- Thumbnail images need descriptive alt text.
- Touch targets must be at least 44px on mobile.

### SEO Notes

- Tool names must be text, not images.
- Video titles must be text.
- Use descriptive copy for AI search systems to understand each resource.

### Components To Reuse

- `Container`
- `ImageReadyPreview`
- interaction classes
- reusable tool card
- reusable video card

### ImageReadyPreview Usage

Required for tool previews and video thumbnails.

### Interaction System Usage

Required for tool cards and video cards.

### Intentional Deviations From Mockup

- The mockup shows four free-tool rows; user requirements specify exactly six tools, so the locked implementation must support six.
- The mockup shows YouTube metadata that appears like view counts/dates. Do not invent these. Use real data only or omit metadata.
- If six tool rows make the left column taller than the video column, preserve the mockup's compact rhythm by tightening row height before changing the overall layout.

## Custom Build CTA

### Purpose

Convert visitors with a unique spreadsheet or business workflow into custom build leads.

### Desktop Layout

- Full-width bordered band above footer.
- Left: circular/icon visual.
- Middle: heading and supporting copy.
- Right/middle: concise feature checklist.
- Far right: primary CTA and secondary note.
- The band should feel like a premium conversion module, not a generic banner.
- It should align horizontally with the section grid above and footer below.

### Tablet Layout

- Two-column layout:
  - copy + visual
  - checklist + CTA
- CTA remains visible without excessive scrolling.

### Mobile Layout

- Single-column stack:
  - visual
  - heading
  - copy
  - checklist
  - CTA

### Exact Hierarchy

- `section`
- H2-style heading:
  - `Have a Unique Idea or Spreadsheet?`
- supporting paragraph
- checklist
- CTA link:
  - `Let's Build Yours →`

### Card Count

- One CTA band.
- Checklist should contain three to four items maximum.

### Card Proportions

- Band is wide and shallow on desktop.
- Radius and border match other premium cards.
- No nested cards.

### Typography Hierarchy

- CTA heading: strong, slightly larger than card titles.
- Supporting copy: muted, readable.
- Checklist: compact, high contrast.

### Spacing Rules

- Vertical padding: enough to feel premium but not like a separate landing page.
- Desktop content should align to the same container as other sections.
- The CTA band should have clear internal columns and generous edge padding, but its height must remain shallow compared with the Hero.

### Image Rules

- Icon/visual should be static SVG or approved bitmap.
- If using a future illustration, use `ImageReadyPreview` only if it is a replaceable content preview.
- Visual may use the crystal V language or a simple build/tool symbol, but must not introduce a new mascot, unrelated illustration style, or large decorative gradient.

### Hover Behavior

- CTA button uses existing button/interaction language.
- Band itself should not over-animate.

### Motion Rules

- No autonomous animation.
- Respect reduced motion.

### Accessibility Notes

- Checklist icons must not be the only indicator of meaning.
- CTA link must be descriptive.

### SEO Notes

- Copy should mention custom business software and spreadsheet workflows.
- Avoid unsupported guarantees.

### Components To Reuse

- `Container`
- `CrystalVLogo` or approved icon asset
- interaction classes for CTA only

### ImageReadyPreview Usage

Not required unless a replaceable custom-build visual is introduced.

### Interaction System Usage

CTA only.

### Intentional Deviations From Mockup

- Remove or avoid any fake consultation claims unless approved by the user.
- Checklist items may be adjusted to avoid unsupported guarantees; the visual layout must remain close to the mockup.

## Footer

### Purpose

Close the homepage with brand reinforcement, navigation, resource links, and optional subscription/contact affordance.

### Desktop Layout

- Multi-column footer.
- Left: logo, short company summary, optional social links.
- Middle: quick links.
- Middle/right: resources.
- Right: stay updated form or contact action if approved.
- Bottom: copyright.
- Footer should preserve the dense, quiet software-company ending shown in the mockup.
- It should not become a large promotional section.

### Tablet Layout

- Two-column layout.
- Brand block spans full width if needed.

### Mobile Layout

- Single-column stack.
- Links grouped by heading.
- Subscribe form stacks input above button if present.

### Exact Hierarchy

- `footer`
- brand home link
- summary paragraph
- footer `nav` groups
- optional form
- copyright row

### Card Count

Not applicable.

### Card Proportions

Not applicable.

### Typography Hierarchy

- Footer headings: small semibold.
- Links: small muted text with hover state.
- Summary: small muted body text.

### Spacing Rules

- Footer padding: approximately 48px to 64px desktop.
- Link rows: compact but tappable.

### Image Rules

- Logo must use approved crystal V/wordmark treatment.

### Hover Behavior

- Links shift from muted to foreground/primary.
- Social icons use subtle border/background change.

### Motion Rules

- No animated footer effects.

### Accessibility Notes

- Footer navigation must have labels.
- If a form exists, inputs need labels or accessible names.
- Social links need descriptive labels.

### SEO Notes

- Footer links should reinforce primary site categories.
- Company summary should be clear and not keyword-stuffed.
- Footer navigation should expose the same top-level pages as the header where appropriate.

### Components To Reuse

- `SiteFooter`
- `Container`
- `CrystalVLogo`
- `navigationItems`

### ImageReadyPreview Usage

Not needed.

### Interaction System Usage

Optional for icon links only; keep restrained.

### Intentional Deviations From Mockup

- Newsletter/subscription behavior must remain static until a backend or provider is approved.
- Do not imply active support channels or social accounts unless real links are provided.

## 6. Final Homepage Section Order

Locked order after approval:

1. Header
2. Hero
3. Featured Web Apps
4. Popular Free Tools + Latest YouTube Videos
5. Custom Build CTA
6. Footer

## 7. Non-Negotiable Homepage Constraints

- Do not add new homepage sections without explicit approval.
- Do not remove sections listed in this specification without explicit approval.
- Do not introduce fake metrics, fake testimonials, fake reviews, fake ratings, fake view counts, or fake dates.
- Do not use gradients, glassmorphism, heavy 3D, or excessive animation.
- Do not make the homepage feel like a generic SaaS template.
- Do not build login, billing, dashboard, app editor, admin, database, or backend functionality.
- Preserve static export compatibility for Cloudflare Pages.
- Run `npm run typecheck` and `npm run build` after any implementation work.
- Passing builds do not equal approval.

## 8. Global Spacing System

### Page Rhythm

- Header to Hero: enough spacing to prevent sticky navigation overlap.
- Hero to Featured Web Apps: compact transition; the Featured section should feel like the next logical product proof.
- Featured Web Apps to Popular Free Tools + Latest YouTube Videos: compact but visibly separated.
- Combined content band to Custom Build CTA: moderate spacing.
- Custom Build CTA to Footer: tight enough to read as the closing conversion path.

### Desktop

- Use the shared `Container` width across all homepage sections.
- Prefer section vertical padding in the 48px to 80px range, with the Hero as the largest exception.
- Grid gaps should generally stay between 16px and 32px.

### Tablet

- Reduce horizontal gaps before reducing card quality.
- Preserve section header/right-link relationships when possible.
- Avoid cramped two-column layouts; stack earlier if card readability suffers.

### Mobile

- Sections stack in source order.
- Cards become single column unless a two-column layout remains readable at common mobile widths.
- Top/bottom padding should remain breathable without creating large empty bands.

## 9. Global Interaction System

### Required Reuse

Use the existing interaction classes for cards and previews:

- `interactiveCardClassName`
- `interactivePreviewClassName`
- `interactiveArrowClassName`

### Card Hover

- Hover may add slight lift, border accent, and restrained shadow.
- Hover must never create large ambient glow fields that visually merge adjacent cards.
- Hover elevation must belong to the card being hovered only.
- Card hover cannot be required to reveal essential information.

### Preview Hover

- Preview may shift or scale subtly within its clipped container.
- Preview motion must not cause layout shift.
- Real images and static CSS fallbacks must behave consistently.

### CTA Hover

- CTA arrows may move slightly on hover.
- Button hover may refine color, border, or elevation.
- Text must remain readable in both themes.

### Reduced Motion

- All transform transitions must respect `prefers-reduced-motion`.
- No autonomous motion is allowed without future approval.

## 10. Responsive Behavior Rules

### Desktop

- Preserve the approved mockup's overall order and visual hierarchy.
- Hero uses split layout.
- Featured Web Apps uses one five-card row at wide widths.
- Popular Free Tools + Latest YouTube Videos uses the 40/60 two-column band.
- Custom Build CTA uses a horizontal band.

### Tablet

- Hero may stack copy above visual.
- Featured cards wrap into two or three columns.
- Free Tools and YouTube may stack into two full-width subsections.
- CTA band may become two columns.

### Mobile

- Header collapses to mobile navigation.
- Hero copy appears before transformation visual.
- Transformation rows stack in spreadsheet-to-arrow-to-app order.
- Cards stack vertically.
- Section links remain visible near their headings.
- All touch targets must be at least 44px tall.

## 11. Hover Behavior Rules

- Hover is enhancement only; tap/click remains the primary interaction on touch devices.
- All card links must be obvious through title, CTA text, and cursor/focus state.
- Focus-visible states must be at least as clear as hover states.
- Do not hide CTAs until hover.
- Do not use hover to reveal critical labels, descriptions, or navigation.

## 12. Image Replacement Architecture

### Required Pattern

All replaceable visual surfaces use `ImageReadyPreview`.

Each data item that may later receive a real image must support:

- `src`
- `alt`
- optional static CSS/HTML fallback content

### Replacement Rules

- Adding a real image must require data changes only, not component redesign.
- Real images must inherit the same aspect ratio and clipped bounds as the fallback.
- Real images must be checked in dark mode, light mode, tablet, and mobile.
- Screenshots must not contain private, client, or misleading data.
- Screenshots must not introduce fake metrics or unsupported claims.

### Asset Paths

Use these paths unless the user approves another asset system:

- App screenshots: `/previews/apps/[slug].png`
- Spreadsheet screenshots: `/previews/spreadsheets/[slug].png`
- Tool screenshots: `/previews/tools/[slug].png`
- YouTube thumbnails: `/previews/youtube/[slug].png`
- Brand assets: `/brand/[asset-name].png` or `/brand/[asset-name].svg`

Every asset added later must include:

- Purpose
- File path
- Alt text if meaningful
- Section usage
- Light/dark suitability check
- Mobile crop check

## 13. Accessibility Rules

- Use one `h1` on the homepage.
- Preserve heading order; do not skip levels for visual styling.
- Use semantic landmarks: `header`, `main`, `section`, `nav`, `article`, `footer`.
- Every section must have a programmatic heading.
- Full-card links need descriptive accessible names.
- Icon-only controls need labels.
- Decorative visuals should be hidden from assistive tech only when equivalent text is present.
- Meaningful screenshots require useful alt text.
- Keyboard focus order must match visual order.
- Sticky header must not obscure anchored content.
- Color contrast must remain readable in dark and light mode.

## 14. SEO And AI Discoverability Rules

- Homepage metadata must identify Visual Booster Studio as a company that turns spreadsheets into premium web applications, free tools, and custom business software.
- Section headings must use plain searchable language:
  - `Featured Web Apps`
  - `Popular Free Tools`
  - `Latest YouTube Videos`
  - `Have a Unique Idea or Spreadsheet?`
- App, tool, and video names must be rendered as text.
- Do not use image-only text for names, CTAs, or descriptions.
- Structured data added later must avoid fake ratings, reviews, counts, dates, or claims.
- Copy should be understandable to AI search systems without relying on hidden text or keyword stuffing.

## 15. Implementation Rules

- Do not implement any homepage section until this specification is explicitly approved.
- After approval, implement one section at a time.
- Before each implementation task, compare the target section against this document and the approved mockup.
- Do not modify unrelated sections while implementing a section.
- Do not introduce new homepage sections, backend logic, forms with real submission behavior, analytics, CMS, database, login, billing, or dashboard flows.
- Keep all homepage content static-first and Cloudflare Pages compatible.
- Run `npm run typecheck` and `npm run build` after implementation work.
- A section is not complete until the user explicitly approves it.

## 16. Approval Gate

This homepage specification is not locked until the user explicitly approves it.

After approval, future homepage development must compare every implementation step against this file and the approved mockup before code changes.
