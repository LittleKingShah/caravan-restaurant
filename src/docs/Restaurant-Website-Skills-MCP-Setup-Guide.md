# Restaurant Website Project — Skills & MCP Setup Guide

> **Project type:** Casual / Family-friendly restaurant website
> **Pages:** Homepage, Menu, Reservation/Booking, About Us / Our Story

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Built-in Skills (Already Available)](#2-built-in-skills-already-available)
3. [Community Skills to Install](#3-community-skills-to-install)
4. [MCP Servers Setup](#4-mcp-servers-setup)
5. [Custom Skills to Create](#5-custom-skills-to-create)
6. [Page-by-Page Skill Mapping](#6-page-by-page-skill-mapping)
7. [Schema Markup Checklist](#7-schema-markup-checklist)
8. [Recommended Workflow](#8-recommended-workflow)

---

## 1. Project Overview

This guide covers the tools, skills, and MCP servers needed to build a high-quality, SEO-optimized, casual/family-friendly restaurant website with four core pages. The goal is to combine great frontend design with solid local SEO, proper schema markup, and conversion-optimized reservation flow.

### Tech Stack Recommendation

| Layer | Tool | Why |
|-------|------|-----|
| Frontend | React + Tailwind CSS | Fast, responsive, component-based |
| Fonts | Google Fonts (Playfair Display + Source Sans 3) | Warm, inviting, readable |
| Icons | Lucide React | Clean, lightweight |
| Animations | CSS transitions + Framer Motion | Subtle, delightful micro-interactions |
| SEO | JSON-LD structured data | Rich results in Google |
| Hosting | Vercel / Netlify | Free tier, fast CDN, easy deploys |

---

## 2. Built-in Skills (Already Available)

These skills are already in your Claude environment and ready to use immediately.

### frontend-design ⭐ Primary Skill

**Location:** `/mnt/skills/public/frontend-design/SKILL.md`
**What it does:** Guides creation of distinctive, production-grade web interfaces with high design quality. Avoids generic "AI slop" aesthetics.

**Use it for:**
- Homepage hero section with warm, inviting layout
- Menu page with appetizing grid/card design
- Reservation form with clear UX
- About Us page with storytelling layout

**How to invoke:** Claude loads this automatically when you ask to build web pages, components, or layouts.

**Tip for your project:** For a casual/family-friendly vibe, tell Claude to use warm earth tones, rounded corners, generous spacing, and playful but readable typography. Avoid anything too minimal or too dark.

---

### web-artifacts-builder

**Location:** `/mnt/skills/examples/web-artifacts-builder/SKILL.md`
**What it does:** Scaffolds a full React + TypeScript + Tailwind + shadcn/ui project and bundles it into a single deployable HTML file.

**Use it for:**
- Multi-step reservation booking flow
- Interactive menu with category filters and dietary tags
- Any complex component requiring state management

**Setup:**
```bash
bash scripts/init-artifact.sh restaurant-site
cd restaurant-site
# Develop your components
bash scripts/bundle-artifact.sh
```

---

### theme-factory

**Location:** `/mnt/skills/examples/theme-factory/SKILL.md`
**What it does:** Provides 10 professional color/font themes, or you can generate a custom one.

**Recommended themes for casual restaurant:**
- **Botanical Garden** — Fresh, organic garden colors (great for farm-to-table feel)
- **Golden Hour** — Rich, warm autumnal palette (cozy family dining)
- **Sunset Boulevard** — Warm and vibrant (lively, fun atmosphere)
- **Custom** — Create a bespoke theme matching your restaurant's brand colors

**How to use:** Ask Claude to show the theme showcase, pick one, and apply it across all pages for consistency.

---

### canvas-design

**Location:** `/mnt/skills/examples/canvas-design/SKILL.md`
**What it does:** Creates visual art, posters, and graphics as PNG/PDF files.

**Use it for:**
- Restaurant promotional posters
- Social media graphics (specials, events, seasonal menus)
- Menu header illustrations
- "Now Hiring" or event announcement flyers

---

### brand-guidelines (Template)

**Location:** `/mnt/skills/examples/brand-guidelines/SKILL.md`
**What it does:** Defines brand colors, fonts, and styling rules so Claude applies them consistently.

**Action required:** Copy and customize this skill for YOUR restaurant's brand identity. See Section 5 below for a ready-to-use template.

---

### docx / pdf / pptx / xlsx

**Locations:** `/mnt/skills/public/docx/`, `/mnt/skills/public/pdf/`, etc.
**What they do:** Create professional documents, PDFs, presentations, and spreadsheets.

**Use them for:**
- Printable PDF menus for download or in-house use
- Business plan or investor pitch deck (pptx)
- Menu pricing spreadsheet (xlsx)
- Press kit or media one-pager (docx)

---

### skill-creator

**Location:** `/mnt/skills/examples/skill-creator/SKILL.md`
**What it does:** Helps you create, test, and iterate on custom skills.

**Use it to:** Build the restaurant-specific custom skills described in Section 5.

---

## 3. Community Skills to Install

These are third-party skills you can install to supercharge your project.

### A) Marketing Skills by Corey Haines ⭐ Highly Recommended

**Repository:** [github.com/coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills)

Most relevant sub-skills for your restaurant:

| Skill | What It Does for You |
|-------|---------------------|
| `page-cro` | Optimize reservation page for conversions |
| `copywriting` | Write compelling homepage hero copy, menu descriptions |
| `schema-markup` | Add Restaurant, Menu, LocalBusiness structured data |
| `site-architecture` | Plan page hierarchy, navigation, URL structure |
| `social-content` | Generate social media posts for the restaurant |
| `seo-audit` | Audit pages for SEO issues before launch |
| `signup-flow-cro` | Optimize the reservation flow for higher completion |

**Installation:**
```bash
git clone https://github.com/coreyhaines31/marketingskills.git
# Copy relevant skill folders to ~/.claude/skills/
cp -r marketingskills/skills/page-cro ~/.claude/skills/
cp -r marketingskills/skills/copywriting ~/.claude/skills/
cp -r marketingskills/skills/schema-markup ~/.claude/skills/
cp -r marketingskills/skills/site-architecture ~/.claude/skills/
cp -r marketingskills/skills/social-content ~/.claude/skills/
cp -r marketingskills/skills/seo-audit ~/.claude/skills/
```

---

### B) SEO Skills by Autom8Minds

**Repository:** [github.com/Autom8Minds/seo-skills](https://github.com/Autom8Minds/seo-skills)

Most relevant sub-skills:

| Skill | What It Does for You |
|-------|---------------------|
| `seo-local-seo` | Google Business Profile, NAP consistency, local keywords, reviews |
| `seo-on-page-optimization` | Meta tags, headings, image alt text, internal linking |
| `seo-schema-structured-data` | JSON-LD validation and rich result optimization |
| `seo-content-strategy` | Keyword research for menu items, location-based terms |

**Installation:** Download skill zips from `dist/` folder and upload via Settings > Capabilities > Skills, or copy to `~/.claude/skills/`.

---

### C) claude-seo by AgriciDaniel (Full Suite)

**Repository:** [github.com/AgriciDaniel/claude-seo](https://github.com/AgriciDaniel/claude-seo)

**Installation:**
```bash
curl -fsSL https://raw.githubusercontent.com/AgriciDaniel/claude-seo/main/install.sh | bash
```

**Key commands for your project:**
```
/seo audit https://your-restaurant.com      # Full audit
/seo schema https://your-restaurant.com     # Validate schema markup
/seo page https://your-restaurant.com/menu  # Analyze individual page
```

---

### D) GEO SEO Skill (AI Search Optimization)

**Repository:** [github.com/zubair-trabzada/geo-seo-claude](https://github.com/zubair-trabzada/geo-seo-claude)

**Why it matters:** When someone asks ChatGPT or Google AI "family-friendly restaurants near me," you want YOUR restaurant cited. This skill optimizes for that.

---

## 4. MCP Servers Setup

MCP servers provide live data connections. Here's what to set up for a restaurant project.

### Tier 1: Free / Essential

#### seo-mcp (On-page analysis + Core Web Vitals)
```json
{
  "mcpServers": {
    "seo-mcp": {
      "command": "npx",
      "args": ["seo-mcp"],
      "env": {
        "PAGESPEED_API_KEY": "optional-for-higher-rate-limits"
      }
    }
  }
}
```
**Get PageSpeed API key (free):** [Google Cloud Console](https://console.cloud.google.com/) → Enable PageSpeed Insights API → Create credentials.

#### Puppeteer MCP (Browser automation for audits)
```json
{
  "mcpServers": {
    "puppeteer": {
      "command": "npx",
      "args": ["-y", "@anthropic/puppeteer-mcp"]
    }
  }
}
```
**Use for:** Crawling your site as Google sees it, taking screenshots, checking mobile rendering, and validating schema markup in the live DOM.

#### Google Search Console MCP (Post-launch tracking)
**Repository:** [github.com/AminForou/mcp-gsc](https://github.com/AminForou/mcp-gsc)

Set up after your site is live to track which queries bring visitors, monitor indexing status, and catch crawl errors.

---

### Tier 2: Paid (When Ready to Scale)

#### DataForSEO MCP (Pay-as-you-go keyword data)
```bash
# Claude Code setup (remote — easiest)
claude mcp add \
  --header "Authorization: Basic <base64_credentials>" \
  --transport http dfs-mcp https://mcp.dataforseo.com/http
```
**Cost:** ~$0.0006 per SERP request. Budget ~$5–10/month for a single restaurant site.
**Use for:** Keyword research for menu items, competitor analysis, local SERP tracking.

#### Keywords Everywhere MCP (Keyword trends)
**Cost:** From $10/month
**Use for:** Finding search volume for terms like "family restaurant [city]," "kids menu near me," "best brunch [neighborhood]."

---

### Tier 3: Enterprise (If Managing Multiple Locations)

| MCP Server | Use Case | Cost |
|-----------|----------|------|
| Ahrefs MCP | Backlink analysis, competitor research | Requires Enterprise plan |
| Semrush MCP | Competitive intelligence, traffic analytics | Pro+ plan ($129+/mo) |
| SE Ranking MCP | Multi-location rank tracking | Subscription-based |

---

## 5. Custom Skills to Create

Use the `skill-creator` skill to build these. Create each as a folder in `~/.claude/skills/`.

### A) restaurant-brand-identity

```markdown
# ~/.claude/skills/restaurant-brand-identity/SKILL.md
---
name: restaurant-brand-identity
description: Apply the restaurant's brand colors, fonts, and visual identity
  to any artifact. Use whenever building pages, components, or assets for the
  restaurant website.
---

# [Your Restaurant Name] Brand Identity

## Colors
- **Primary:** #D4A574 (warm caramel — inviting, appetizing)
- **Secondary:** #2D5016 (forest green — fresh, natural)
- **Accent:** #E8594F (tomato red — energy, appetite stimulation)
- **Background:** #FBF7F2 (warm cream — clean, cozy)
- **Text:** #2C2C2C (soft black — readable, not harsh)
- **Muted:** #8B7D6B (warm gray — secondary text)

## Typography
- **Headings:** Playfair Display (warm, characterful serif)
- **Body:** Source Sans 3 (clean, friendly, highly readable)
- **Accent/Prices:** DM Mono (for menu prices, reservation numbers)

## Voice & Tone
- Warm, welcoming, unpretentious
- Family-friendly language (no jargon)
- Emphasize freshness, community, and comfort
- Use sensory words for food (crispy, golden, garden-fresh)

## Visual Style
- Rounded corners (8-12px) — friendly, approachable
- Warm photography with natural light
- Generous whitespace — not cluttered
- Subtle texture backgrounds (linen, paper grain)
- Icons: Lucide React, stroke style, warm colors
```

> **Customize this:** Replace colors, fonts, and restaurant name with your actual brand.

---

### B) restaurant-schema-generator

```markdown
# ~/.claude/skills/restaurant-schema-generator/SKILL.md
---
name: restaurant-schema-generator
description: Generate complete JSON-LD structured data for a restaurant website.
  Use when building or auditing schema markup for restaurant pages including
  Restaurant, Menu, LocalBusiness, and OpeningHours types.
---

# Restaurant Schema Generator

Generate valid JSON-LD for these Schema.org types:

## Required Schema (Every Restaurant Site)

### 1. Restaurant (homepage)
Include: name, image, address, telephone, url, servesCuisine, priceRange,
openingHoursSpecification, geo (lat/lng), acceptsReservations, menu (link),
aggregateRating (if available), hasMenu

### 2. Menu (menu page)
Include: name, description, hasMenuSection (categories like Appetizers,
Mains, Desserts, Kids Menu), each with hasMenuItem entries containing:
name, description, offers (price, priceCurrency)

### 3. LocalBusiness (all pages)
Include: name, address (PostalAddress), telephone, openingHours,
geo, image, priceRange, paymentAccepted, areaServed

### 4. BreadcrumbList (all pages)
Generate breadcrumbs matching the page hierarchy:
Home > Menu, Home > Reservations, Home > About Us

## Bonus Schema (Recommended)

### 5. FAQPage (about or homepage)
Common questions: parking, dress code, kids menu, dietary options,
private dining, wait times

### 6. Event (if applicable)
For special events: live music nights, wine tastings, holiday specials

## Validation Rules
- Use JSON-LD format (not Microdata or RDFa)
- Test with Google Rich Results Test before deploying
- Include @context: "https://schema.org"
- All URLs must be absolute
- Phone numbers in E.164 format (+1XXXXXXXXXX)
- Opening hours in DayOfWeek format
```

---

### C) restaurant-reservation-ux

```markdown
# ~/.claude/skills/restaurant-reservation-ux/SKILL.md
---
name: restaurant-reservation-ux
description: Best practices for restaurant reservation and booking UI/UX.
  Use when building or optimizing the reservation page.
---

# Restaurant Reservation UX Patterns

## Core Flow (3 Steps Max)
1. **Select** — Date, time, party size (single screen)
2. **Details** — Name, phone, email, special requests
3. **Confirm** — Summary + confirmation

## UX Requirements
- Mobile-first (70%+ of restaurant bookings are mobile)
- Date picker: Show next 14 days, highlight available slots
- Time slots: 30-minute intervals, gray out unavailable
- Party size: 1-10 with quick-select buttons, "Larger party? Call us"
- Required fields: Date, time, party size, name, phone
- Optional fields: Email, special requests, high chair needed, dietary needs
- Confirmation: Show on screen + send SMS/email

## Conversion Optimization
- Show "X tables left" urgency for busy times
- Default to tonight/tomorrow (most common intent)
- Pre-select party size of 2 (most common)
- Auto-format phone number as user types
- Single CTA button: "Reserve My Table" (warm, personal)
- Show cancellation policy clearly but non-intrusively

## Accessibility
- All form fields have visible labels (not just placeholders)
- Error messages appear next to the field, not just at top
- Color is not the only indicator of errors (use icons + text)
- Tab order follows visual order
- ARIA labels on date/time pickers
- Minimum touch target: 44x44px on mobile

## Family-Friendly Additions
- "Kids in party?" toggle → show high chair / booster options
- "Birthday celebration?" checkbox → staff can prepare
- "Stroller access needed?" option
```

---

## 6. Page-by-Page Skill Mapping

| Page | Primary Skills | MCP Servers | Schema |
|------|---------------|-------------|--------|
| **Homepage** | frontend-design, restaurant-brand-identity, copywriting, page-cro | seo-mcp | Restaurant, LocalBusiness, FAQPage |
| **Menu** | frontend-design, restaurant-brand-identity, restaurant-schema-generator | seo-mcp | Menu, MenuSection, MenuItem, BreadcrumbList |
| **Reservation** | frontend-design, restaurant-reservation-ux, signup-flow-cro | Puppeteer (testing) | ReserveAction, BreadcrumbList |
| **About Us** | frontend-design, restaurant-brand-identity, copywriting, canvas-design | seo-mcp | AboutPage, BreadcrumbList |
| **All Pages** | seo-on-page-optimization, seo-local-seo, seo-audit | seo-mcp, GSC | LocalBusiness, BreadcrumbList |

---

## 7. Schema Markup Checklist

Use this checklist before launch to verify all structured data is in place.

- [ ] **Restaurant** type on homepage with full address, phone, hours, cuisine, price range
- [ ] **Menu** type on menu page with all categories and items including prices
- [ ] **LocalBusiness** type on every page (or in site-wide layout)
- [ ] **BreadcrumbList** on every page matching navigation hierarchy
- [ ] **OpeningHoursSpecification** with accurate days/hours (including holidays)
- [ ] **GeoCoordinates** with correct latitude/longitude
- [ ] **FAQPage** with 5-8 common questions (parking, kids, dietary, reservations)
- [ ] **AggregateRating** if you have Google reviews to reference
- [ ] All schema validates at [Google Rich Results Test](https://search.google.com/test/rich-results)
- [ ] All schema validates at [Schema.org Validator](https://validator.schema.org/)

---

## 8. Recommended Workflow

Here's the order to tackle everything:

### Phase 1: Foundation (Day 1)
1. Set up `restaurant-brand-identity` custom skill with your colors/fonts
2. Install `seo-mcp` MCP server
3. Use `site-architecture` skill to plan URL structure and navigation

### Phase 2: Build Pages (Days 2-4)
4. Build **Homepage** using `frontend-design` + brand identity skill
5. Build **Menu page** with interactive filters and categories
6. Build **Reservation page** using `restaurant-reservation-ux` skill
7. Build **About Us** page with storytelling layout + team photos

### Phase 3: SEO & Schema (Day 5)
8. Run `restaurant-schema-generator` for all pages
9. Run `seo-on-page-optimization` audit on each page
10. Run `seo-local-seo` for Google Business Profile optimization
11. Validate all schema with Google Rich Results Test

### Phase 4: Polish & Launch (Day 6-7)
12. Run `page-cro` on reservation page for conversion optimization
13. Run full `seo-audit` across the site
14. Use `Puppeteer MCP` for mobile rendering and performance checks
15. Generate social media launch posts with `social-content` skill
16. Set up Google Search Console MCP for post-launch monitoring

---

## Quick Reference: Installation Commands

```bash
# Community skills
git clone https://github.com/coreyhaines31/marketingskills.git
git clone https://github.com/Autom8Minds/seo-skills.git
curl -fsSL https://raw.githubusercontent.com/AgriciDaniel/claude-seo/main/install.sh | bash

# MCP servers (add to Claude Code)
claude mcp add seo-mcp -- npx seo-mcp
claude mcp add puppeteer -- npx -y @anthropic/puppeteer-mcp

# Custom skills (create these folders)
mkdir -p ~/.claude/skills/restaurant-brand-identity
mkdir -p ~/.claude/skills/restaurant-schema-generator
mkdir -p ~/.claude/skills/restaurant-reservation-ux
```

---

*Guide created for a casual/family-friendly restaurant website project.*
*Last updated: March 2026*
