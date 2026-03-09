# SEO Skills & MCP Servers for Claude Code — Deep Research

## Overview

There is a growing ecosystem of SEO-focused skills and MCP (Model Context Protocol) servers specifically built for Claude Code. These range from comprehensive skill packages with 7–13 sub-skills, to official MCP integrations from major SEO platforms like Ahrefs, Semrush, and DataForSEO. Below is a full breakdown.

---

## 1. Dedicated SEO Skill Packages for Claude Code

### A) `claude-seo` by AgriciDaniel (Most Comprehensive)

**GitHub:** [github.com/AgriciDaniel/claude-seo](https://github.com/AgriciDaniel/claude-seo)

This is the most feature-rich SEO skill for Claude Code, offering 13 sub-skills, 6 subagents, and an extensions system.

**What it covers:**
- Technical SEO auditing
- On-page analysis
- Content quality & E-E-A-T assessment
- Schema markup (JSON-LD) generation & validation
- Image optimization
- Sitemap architecture
- AI search optimization (GEO/AEO)
- Strategic planning
- Off-page / backlink analysis
- Local SEO

**Installation:**
```bash
# One-line install (Linux/Mac)
curl -fsSL https://raw.githubusercontent.com/AgriciDaniel/claude-seo/main/install.sh | bash

# Or clone manually
git clone https://github.com/AgriciDaniel/claude-seo.git
cd claude-seo
./install.sh

# Windows
irm https://raw.githubusercontent.com/AgriciDaniel/claude-seo/main/install.ps1 | iex
```

**Usage examples:**
```
/seo audit https://example.com       # Full site audit
/seo page https://example.com/about  # Single page analysis
/seo schema https://example.com      # Check schema markup
/seo sitemap generate                # Generate sitemap
/seo geo https://example.com         # AI search optimization
```

**MCP Integrations:** Works with Ahrefs (`@ahrefs/mcp`), Semrush, Google Search Console, PageSpeed Insights, and DataForSEO MCP servers.

**File structure:**
```
~/.claude/skills/seo/       # Main skill
~/.claude/skills/seo-*/     # Sub-skills (12 total)
~/.claude/agents/seo-*.md   # Subagents (6 total)
```

---

### B) `seo-skills` by Autom8Minds (7 Skills)

**GitHub:** [github.com/Autom8Minds/seo-skills](https://github.com/Autom8Minds/seo-skills)

Seven complementary Claude Code skills powered by the `seo-mcp` MCP server.

**The 7 skills:**
1. `seo-on-page-optimization` — Meta tags, title tags, headings, content optimization, image SEO, internal linking, URL structure
2. `seo-technical-audit` — Crawlability, indexing, Core Web Vitals, page speed, mobile, HTTPS, robots.txt, sitemaps, redirects
3. `seo-content-strategy` — Keyword research, content clusters, search intent, E-E-A-T, content briefs, gap analysis
4. `seo-schema-structured-data` — JSON-LD, Schema.org types, Google rich results, validation rules
5. `seo-off-page-backlinks` — Backlink analysis, domain authority, link building, toxic links, anchor text, competitor gaps
6. `seo-local-seo` — Google Business Profile, NAP consistency, citations, local keywords, reviews, multi-location
7. `seo-mcp-tools-expert` — Orchestrates MCP tools across all skill areas

**Installation:** Download individual skill zips from the `dist/` folder and upload via Settings > Capabilities > Skills.

**MCP Server configuration:**
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

---

### C) InfraNodus SEO Skill

**Website:** [infranodus.com/skills](https://infranodus.com/skills)

A step-by-step SEO methodology skill covering search intent, content gaps, and optimization. Can also access the InfraNodus MCP Server for real-time search data.

**Installation:** Download from the [GitHub releases page](https://github.com/infranodus/skills/releases), then upload via Claude Code settings or copy to `~/.claude/skills/`.

---

## 2. Major SEO MCP Servers (Data Providers)

These MCP servers connect Claude Code to live SEO data platforms. They provide the raw data that skills can act on.

### A) DataForSEO MCP Server (Official) ⭐ Recommended for flexibility

**Website:** [dataforseo.com](https://dataforseo.com)
**GitHub:** [github.com/dataforseo/mcp-server-typescript](https://github.com/dataforseo/mcp-server-typescript)

The most comprehensive SEO data API with pay-as-you-go pricing. Provides SERP data, keyword research, on-page metrics, backlinks, and AI optimization data.

**Setup with Claude Code (3 methods):**

```bash
# Method 1: Remote server (easiest)
claude mcp add --header "Authorization: Basic <base64_credentials>" --transport http dfs-mcp https://mcp.dataforseo.com/http

# Method 2: Local via NPM
claude mcp add dfs-mcp \
  --env DATAFORSEO_USERNAME=<api_username> \
  --env DATAFORSEO_PASSWORD=<api_password> \
  -- npx -y dataforseo-mcp-server

# Method 3: From source (for customization)
git clone https://github.com/dataforseo/mcp-server-typescript
cd mcp-server-typescript && npm install && npm run build
claude mcp add dfs-mcp \
  --env DATAFORSEO_USERNAME=<username> \
  --env DATAFORSEO_PASSWORD=<password> \
  -- node <path>/build/main/main/index.js
```

**Available modules:** `SERP`, `KEYWORDS_DATA`, `ONPAGE`, `DATAFORSEO_LABS`, `AI_OPTIMIZATION`, `BACKLINKS`

**Pricing:** Pay-as-you-go. SERP first page ~$0.0006 per request.

---

### B) Ahrefs MCP Server (Official)

**GitHub:** [github.com/ahrefs/ahrefs-mcp-server](https://github.com/ahrefs/ahrefs-mcp-server)
**Docs:** [docs.ahrefs.com/docs/mcp/reference/claude-code](https://docs.ahrefs.com/docs/mcp/reference/claude-code)

Provides 40+ endpoints for backlink analysis, keyword research, domain ratings, and competitor insights.

**Setup:**
```bash
# Install the package
npm install --prefix=~/.global-node-modules @ahrefs/mcp -g
```

**Configuration (for Claude Desktop / other clients):**
```json
{
  "mcpServers": {
    "ahrefs": {
      "command": "npx",
      "args": [
        "--prefix=~/.global-node-modules",
        "@ahrefs/mcp"
      ],
      "env": {
        "API_KEY": "YOUR_API_KEY_HERE"
      }
    }
  }
}
```

**Note:** Requires an Ahrefs API v3 key. Enterprise plan required for full access.

**Capabilities:** Backlink profiles, keyword volumes, domain authority tracking, competitor analysis, broken link detection, referring domain analysis.

---

### C) Semrush MCP Server (Official)

**Docs:** [developer.semrush.com/api/basics/semrush-mcp](https://developer.semrush.com/api/basics/semrush-mcp/)

Bridges Semrush's competitive intelligence datasets into AI assistants: keywords, domains, backlinks, and traffic analytics.

**Requirements:** SEO One Starter/Pro+ plan, or SEO Classic Pro/Guru plan (50,000 API units included).

**Capabilities:** Keyword research, domain analytics, backlink data, traffic analytics, competitor analysis, advertising history, PLA keywords, organic search competitors.

---

### D) Google Search Console MCP (Community)

**GitHub:** MCP-GSC by AminForou

Connects Google Search Console data for analyzing search performance through natural language.

**Features:** Search analytics access (impressions, clicks, ranking positions), indexing status monitoring, Core Web Vitals data, regex filtering for up to 25,000 rows.

---

### E) SEO Onpage Workflows MCP

**15+ specialized SEO tools** requiring API keys for Keywords Everywhere, SerpAPI, and Google PageSpeed.

**Setup:**
```bash
git clone https://github.com/yourusername/seo-workflows-claude.git
cd seo-workflows-claude
pip install -r requirements.txt
cp .env.example .env  # Add your API keys
```

**Configuration:**
```json
{
  "mcpServers": {
    "seo-analyzer": {
      "command": "python",
      "args": ["/full/path/to/seo_scraper_mcp.py"]
    }
  }
}
```

---

### F) Additional SEO MCP Servers Worth Noting

| Server | What It Does | Cost |
|--------|-------------|------|
| **SE Ranking MCP** | Keyword opportunities, competitor signals, AI Search insights | Subscription-based |
| **Keywords Everywhere MCP** | Keyword trend tracking, CPC, competition, search volume | From $10/month |
| **Coupler.io MCP** | Query SEO data flows as SQLite databases via natural language | Free tier available |
| **ContentKing MCP** | Real-time SEO monitoring, instant change notifications | $39–$139/month |
| **Similarweb MCP** | Web analytics, traffic data, competitive intelligence | Subscription-based |
| **Nuxt SEO Pro MCP** | Schema.org generation, meta tag writing for Nuxt projects | Free |
| **Puppeteer MCP** | Browser automation for crawling and auditing (not SEO-specific but very useful) | Free |

---

## 3. Practical SEO Workflows in Claude Code

### Full Site SEO Audit
Use `claude-seo` skill + Puppeteer MCP:
```
"Perform a complete SEO audit of https://example.com. Check meta tags, headings, 
page speed, mobile responsiveness, schema markup, and generate a report."
```

### Data-Driven Content Strategy
Use DataForSEO MCP:
```
"Conduct advanced keyword research for [topic]. Find keywords with high search 
volume and low difficulty. Use DataForSEO MCP to validate search intent and 
generate a content brief."
```

### Competitor Analysis
Use Ahrefs or Semrush MCP:
```
"Analyze the top 5 competitors for [keyword]. Compare their domain ratings, 
backlink profiles, and top-ranking pages."
```

### Schema Markup Generation
Use `claude-seo` skill:
```
/seo schema https://example.com
"Add FAQ schema and Article schema to my help center page."
```

---

## 4. How to Install Skills in Claude Code

Skills live in `~/.claude/skills/` and are discovered automatically. Each skill is a folder containing a `SKILL.md` file with instructions.

```bash
# Skills directory structure
~/.claude/skills/
├── seo/
│   └── SKILL.md
├── seo-on-page-optimization/
│   └── SKILL.md
└── ...
```

You can invoke skills with `/skill-name` or let Claude load them automatically when relevant.

---

## 5. Recommended Setup for SEO Professionals

**Starter setup (free/low cost):**
1. Install `claude-seo` skill package (free)
2. Add `seo-mcp` MCP server (free, with optional PageSpeed API key)
3. Use Puppeteer MCP for crawling (free)

**Professional setup:**
1. Install `claude-seo` skill package
2. Add DataForSEO MCP (pay-as-you-go, ~$0.0006/request)
3. Add Google Search Console MCP (free with GSC account)
4. Add Keywords Everywhere MCP ($10/month)

**Enterprise setup:**
1. Install `claude-seo` skill package with all extensions
2. Add Ahrefs MCP (requires Enterprise plan + API key)
3. Add Semrush MCP (requires Pro+ plan)
4. Add DataForSEO MCP for supplemental data
5. Add Google Search Console MCP
6. Add ContentKing MCP for real-time monitoring

---

## Key Links

| Resource | URL |
|----------|-----|
| Claude Code Skills Docs | https://code.claude.com/docs/en/skills |
| Claude Code MCP Docs | https://code.claude.com/docs/en/mcp |
| claude-seo (13 skills) | https://github.com/AgriciDaniel/claude-seo |
| seo-skills (7 skills) | https://github.com/Autom8Minds/seo-skills |
| DataForSEO MCP | https://github.com/dataforseo/mcp-server-typescript |
| Ahrefs MCP | https://github.com/ahrefs/ahrefs-mcp-server |
| Semrush MCP Docs | https://developer.semrush.com/api/basics/semrush-mcp/ |
| InfraNodus Skills | https://infranodus.com/skills |

---

*Research compiled March 2026*
