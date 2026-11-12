# Loopwright — Brand Guidelines v1.0

> **Fictional mock client.** Loopwright, its people, numbers and testimonials are invented for portfolio/practice use.

---

## 1. The client at a glance

| | |
|---|---|
| **Name** | Loopwright |
| **What they are** | An AI automation studio |
| **Tagline** | **Work that runs itself.** |
| **One-liner** | We design, build and run AI agents and workflow automations for operations teams, so the repetitive work happens without anyone touching it. |
| **Founded** | 2023, remote-first (HQ: Austin, TX) |
| **Team** | 14 people: automation engineers, ops consultants, one designer |
| **Who they serve** | Service businesses with 10–200 staff: agencies, logistics, clinics, property management, professional services |
| **Buyer** | COO / Head of Ops / founder who is drowning in manual admin |
| **Stack they build on** | n8n, Make, Zapier, OpenAI / Anthropic APIs, Airtable, HubSpot, Slack, Google Workspace |

### The name
A *wright* is a maker: shipwright, playwright. A **loopwright** builds loops, the repeatable processes that keep a business running. The brand is about craft: automations that are built properly, not slapped together.

### Services (use for the landing page)
1. **Automation Audit**: 2-week deep dive into your ops; you get a ranked map of what to automate and the ROI of each. *Fixed $2,500.*
2. **Build**: we design and ship custom AI agents and workflows (lead intake, invoicing, onboarding, reporting, inbox triage). *From $8,000 per project.*
3. **Run**: managed automations: monitoring, fixes, monthly improvements. *From $1,500/month.*

### Proof points
- **140+** workflows in production
- **31,000** staff hours saved per year across clients
- **3 weeks** average time to first live automation
- **99.4%** run success rate on managed workflows

### Sample testimonial (fictional)
> "Our onboarding used to take four people and two days. Now it takes eleven minutes and nobody touches it."
> **Priya N., COO, Harbor & Vale Property Group**

---

## 2. Brand personality

Loopwright is **the calm engineer in a room full of hype.**

| We are | We are not |
|---|---|
| Precise | Vague or buzzwordy |
| Calm, confident | Breathless, "revolutionary" |
| Practical, outcome-first | Sci-fi, robot-themed |
| Warm and human | Cold or corporate |
| Crafted | Cheap, templated |

**Brand pillars:** *Clarity* (you'll know exactly what's automated and why) · *Craft* (built to last, documented, monitored) · *Calm* (the goal is less chaos, so the brand never shouts).

---

## 3. Logo

### Concept
The mark is **the Loop**: an open ring that stands for a business process, completed by **the Node**, an Ember-orange dot that stands for the agent that closes the gap. The open ring is about to be closed, so the mark reads as something in motion.

### Files (`/logo`)
| File | Use |
|---|---|
| `loopwright-logo.svg` | Primary horizontal lockup on light backgrounds |
| `loopwright-logo-reversed.svg` | Horizontal lockup on Ink / dark backgrounds |
| `loopwright-mark.svg` | Mark only, light backgrounds |
| `loopwright-mark-reversed.svg` | Mark only, dark backgrounds |
| `loopwright-app-icon.svg` | Favicon, social avatar, app icon |

The wordmark is set in **Space Grotesk SemiBold (600), letter-spacing −3.5%, all lowercase.** The SVG wordmark relies on the font being loaded; outline the text before sending files to print.

### Clear space
Keep clear space around the logo equal to **twice the Node's diameter** (≈ ¼ of the mark's height) on all sides.

### Minimum size
- Mark: **20 px** / 6 mm
- Horizontal lockup: **96 px wide** / 28 mm

### Don'ts
- Don't recolor the ring or the Node (the Node is always Ember)
- Don't close the gap or move the Node
- Don't rotate, stretch, outline, or add shadows/glows/gradients
- Don't place the light logo on busy photos; use the reversed version on an Ink overlay
- Don't capitalize the wordmark ("Loopwright" in running text is fine; the logo is lowercase)

---

## 4. Color

| Name | HEX | RGB | Role |
|---|---|---|---|
| **Ink** | `#12141C` | 18 20 28 | Primary text, dark sections, logo |
| **Paper** | `#F6F4EE` | 246 244 238 | Default page background (warm, never pure white) |
| **Ember** | `#FF5B2E` | 255 91 46 | Signature accent: CTAs, the Node, key highlights |
| **Ember Deep** | `#B83A14` | 184 58 20 | Accent *text* and links on light backgrounds |
| **Ember Tint** | `#FFE3D9` | 255 227 217 | Highlight backgrounds, tags, selection |
| **Graphite** | `#4A4E5A` | 74 78 90 | Secondary text, captions |
| **Fog** | `#E4E1D8` | 228 225 216 | Borders, dividers, card outlines |
| **Moss** | `#2E7D6B` | 46 125 107 | "Running / success" status only |
| **White** | `#FFFFFF` | 255 255 255 | Cards sitting on Paper |

### Proportion
Roughly **60% Paper · 25% Ink · 10% neutrals · ≤5% Ember.** Ember works because it's rare: one primary CTA per view, the Node, and the occasional highlighted word.

### Accessibility rules
- Ink on Paper: **16.9 : 1** ✅
- Graphite on Paper: **7.6 : 1** ✅
- Ink on Ember: **6.0 : 1** ✅ → **Ember buttons always use Ink text**
- White on Ember: 3.1 : 1 ❌ (never use white text on Ember)
- Ember on Paper: 2.8 : 1 ❌ for text → use **Ember Deep** (5.2 : 1) for accent text and links

---

## 5. Typography

All three are free on Google Fonts.

| Role | Typeface | Weights |
|---|---|---|
| Display & headings | **Space Grotesk** | 500, 600 |
| Body & UI | **Inter** | 400, 500, 600 |
| Labels, data, code | **JetBrains Mono** | 400, 500 |

### Type scale (desktop → mobile)
| Token | Size / line-height | Font | Notes |
|---|---|---|---|
| Display | 76/80 → 44/48 | Space Grotesk 600 | letter-spacing −3% |
| H1 | 56/60 → 36/40 | Space Grotesk 600 | −2.5% |
| H2 | 40/46 → 30/36 | Space Grotesk 600 | −2% |
| H3 | 26/32 → 22/28 | Space Grotesk 500 | −1% |
| Body L | 20/32 → 18/28 | Inter 400 | Lead paragraphs |
| Body | 17/28 → 16/26 | Inter 400 | Default |
| Small | 14/22 | Inter 500 | Captions, meta |
| Label | 12/16 | JetBrains Mono 500 | UPPERCASE, +8% tracking |

**Signature move:** put an eyebrow label in mono caps above each section heading, prefixed with a Node dot, e.g. `● 02 — HOW IT WORKS`.

---

## 6. Voice & copy

**Plain, specific, calm.** Write like a senior engineer explaining things to a smart COO.

1. **Numbers beat adjectives.** "Saves 22 hours a week" not "massively boosts productivity."
2. **Name the actual task.** "Your invoices get chased automatically" not "streamline your financial workflows."
3. **Short sentences.** One idea each.
4. **The customer is the hero.** Talk about *their* Tuesday, not *our* AI.

**Banned words:** revolutionize, unleash, supercharge, harness the power, cutting-edge, game-changer, synergy, seamless, magic, "AI-powered" as a lead adjective.

| ✅ Do | ❌ Don't |
|---|---|
| Work that runs itself. | Unleash the power of AI automation! |
| We find the 20 hours a week your team spends copy-pasting, and give them back. | Revolutionize your operations with cutting-edge AI solutions. |
| Live in 3 weeks. Monitored forever. | Seamless, end-to-end, AI-driven transformation. |

**CTA language:** "Book an automation audit" · "See what we'd automate" · "Get your hours back." Avoid "Get started" or "Learn more" as the only CTA.

---

## 7. Visual language

- **The Loop motif:** thin (1.5 px) Fog or Graphite connector lines with Node dots, used to diagram workflows and link sections. Dashed lines = "in progress", solid = "running".
- **Status pills:** small mono-caps pills with a colored dot: `● RUNNING` (Moss), `● QUEUED` (Graphite), `● NEW` (Ember).
- **Imagery:** real-looking product UI, workflow diagrams, and warm, natural-light photos of people doing focused work. **No** robots, glowing brains, blue circuit boards, or holograms.
- **Icons:** line icons, 1.75 px stroke, rounded caps and joins, 24 px grid (Lucide matches this).
- **Texture:** optional subtle dot grid (Fog, 24 px spacing) on Paper backgrounds.

---

## 8. UI foundations

| Token | Value |
|---|---|
| Max content width | 1200 px |
| Grid | 12 columns, 24 px gutter |
| Section padding | 128 px desktop / 80 px mobile |
| Spacing scale | 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128 |
| Radius | 6 (inputs, pills) · 12 (buttons, cards) · 20 (large panels) |
| Border | 1 px Fog |
| Shadow | `0 1px 2px rgba(18,20,28,.06), 0 8px 24px rgba(18,20,28,.06)`, used sparingly |

### Buttons
- **Primary:** Ember background, Ink text, 12 px radius, 14×22 px padding, Inter 600. Hover: darken Ember 6% and nudge the arrow → 2 px.
- **Secondary:** transparent, 1 px Ink border, Ink text.
- **On dark:** Paper background, Ink text.

### Motion
Calm and purposeful: 200–300 ms, `cubic-bezier(.2,.7,.2,1)`. Signature animation: the Node travels around the Loop once on page load. Respect `prefers-reduced-motion`.

---

*Design tokens for code are in `tokens.css`. A visual version of this guide is in `brand-guide.html`.*
