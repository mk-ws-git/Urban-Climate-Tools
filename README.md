# Urban Climate Tools - GitHub Pages Site

## 🌍 Overview

**Urban Climate Tools** is an interactive, searchable database of open-source solutions for building climate-resilient cities. This is the GitHub Pages site—a static Jekyll site showcasing tools, case studies, and resources for municipal leaders, planners, and communities worldwide.

**Live Site**: https://mk-ws-git.github.io/Urban-Climate-Tools/

---

## 🎯 Key Features

### 📊 Tool Catalog
- 19+ curated climate adaptation tools from around the world
- Real-time search across name, category, developer
- Multi-dimensional filtering:
  - **Category**: Heat management, flood risk, coastal resilience, green infrastructure, planning, data, energy
  - **Cost**: Free, Freemium, Paid
  - **Skill Level**: Beginner, Intermediate, Advanced
  - **Geographic Coverage**: Local, City, National, Global

### 📚 Case Studies
- 13 real-world implementation examples from cities worldwide
- Search by city, country, climate challenge
- Filter by:
  - **Climate Challenge**: Urban heat, flooding, sea level rise, water scarcity, air pollution
  - **Sector**: Urban planning, green infrastructure, transportation, water management, energy
  - **Region**: North America, South America, Europe, Asia, Africa, Oceania

### 🎨 Design
- **Swiss Minimalist Design**: Clean, grid-based layout with generous white space
- **Responsive**: Mobile-first approach works on all devices
- **Accessible**: WCAG AA compliant with semantic HTML
- **Fast**: Static site hosted on GitHub Pages (< 2 second load times)

---

## 🚀 Quick Start

### View Locally
```bash
# Clone repository
git clone https://github.com/mk-ws-git/Urban-Climate-Tools.git
cd Urban-Climate-Tools

# Install dependencies
bundle install

# Serve locally
bundle exec jekyll serve

# Open http://localhost:4000
```

### View Online
Visit: **https://mk-ws-git.github.io/Urban-Climate-Tools/**

---

## 📁 Site Structure

```
├── index.md                      # Homepage with featured content
├── tools/index.html              # Tool catalog with search/filter
├── case-studies/index.md         # Case study browser with filters
├── about/                        # About page with FAQs
│
├── _data/
│   ├── tools.yml                # 19 tools with metadata
│   ├── case_studies.yml         # 13 case studies with outcomes
│   └── meta.yml                 # Site metadata, categories, stats
│
├── _tools/                      # Individual tool pages (Jekyll collection)
│   ├── climate-central.md
│   ├── i-tree.md
│   └── ... (collection items)
│
├── _case_studies/               # Individual case study pages
│   ├── norfolk-coastal-resilience.md
│   └── ... (collection items)
│
├── _layouts/
│   ├── default.html             # Base template
│   ├── tool.html                # Tool detail page
│   ├── case-study.html          # Case study page
│   └── category.html            # Category listing
│
├── _includes/
│   ├── head.html                # Meta tags, SEO, stylesheets
│   ├── nav.html                 # Navigation bar
│   ├── footer.html              # Site footer
│   ├── tool-card.html           # Tool card component
│   └── tool-sidebar.html        # Tool sidebar component
│
├── assets/
│   ├── css/
│   │   ├── style.css            # Core styles (CSS variables)
│   │   ├── nav.css              # Navigation/footer
│   │   ├── typography.css       # Font system
│   │   └── cards.css            # Card components
│   ├── js/
│   │   ├── filters.js           # Tool filtering & search
│   │   └── case-study-filters.js # Case study filtering
│   └── images/                  # Logos, icons, placeholders
│
├── _config.yml                  # Jekyll configuration
├── Gemfile                      # Ruby dependencies
└── README.md                    # This file
```

---

## 🛠 Technologies

- **Framework**: Jekyll (static site generator)
- **Hosting**: GitHub Pages
- **Languages**: Markdown, HTML, CSS, JavaScript, YAML
- **Design System**: CSS variables, mobile-first responsive
- **Performance**: < 100KB total CSS, minimal JavaScript

---

## 📚 Content

### Tools Database
Each tool includes:
- Name, developer, description
- Categories, cost model, skill level
- Geographic coverage and continent of origin
- Direct links to official website and (where available) GitHub repo
- Real-world use cases and features

### Case Studies
Each case study features:
- City, country, year of implementation
- Climate challenges addressed
- Solutions and tools used
- Key outcomes and statistics
- Lessons learned

---

## 🔍 Search & Filtering

### Tools Page
```
Search: Real-time across all tool fields
Filters:
  • Category (8 options)
  • Cost tier (3 options)
  • Skill level (3 options)
  • Coverage area (4 options)
  • Continent / Country
  • User type
```

### Case Studies Page
```
Search: By city, country, challenge
Filters:
  • Climate challenge (5 options)
  • Implementation sector (5+ options)
  • Continent / Country
  • User type
```

---

## 🎨 Design System

### Color Palette
```
Primary Blue:     #0051BA
Secondary Blue:   #F0F4FF (light background)
Accent Cyan:      #00D4FF
Text:             #1a1a1a
Border Gray:      #E5E5E5
Light Gray:       #F5F5F5
```

### Typography
- **Font Family**: System stack (-apple-system, BlinkMacSystemFont, Segoe UI, Roboto)
- **Scale**: 12px → 48px
- **Line Height**: 1.2 (tight) to 2 (loose)
- **Weights**: 400 (regular), 500 (medium), 600 (semibold), 700 (bold)

### Components
- **Buttons**: Primary, secondary, large, small
- **Badges**: Category tags, status indicators
- **Cards**: Tool cards, case study cards, showcase cards
- **Forms**: Search input, filter checkboxes
- **Navigation**: Top bar with responsive hamburger menu

---

## 📱 Responsive Design

| Breakpoint | Device | Layout |
|-----------|--------|--------|
| 1200px+ | Desktop | Multi-column, full features |
| 768px-1024px | Tablet | 2-3 columns, adapted filters |
| < 768px | Mobile | Single column, hamburger menu |

---

## 🔐 Accessibility

- ✅ Semantic HTML5 structure
- ✅ WCAG AA color contrast
- ✅ Keyboard navigation support
- ✅ Screen reader friendly
- ✅ Mobile touch-friendly (48px+ targets)
- ✅ No ARIA misuse

---

## 🔗 SEO & Performance

### SEO Features
- Meta descriptions on all pages
- Open Graph tags for social sharing
- Canonical URLs
- Mobile-responsive
- Fast page load (< 2 seconds)

### Performance Targets
- Lighthouse score: 90+
- Core Web Vitals: All green
- Total CSS: < 100KB
- No render-blocking resources

---

## 🤝 Contributing

We welcome contributions! To help:

### Add a New Tool
1. Edit `_data/tools.yml` (add entry following the existing schema)
2. Create `_tools/tool-id.md` with details and content
3. Test locally: `bundle exec jekyll serve`
4. Submit pull request

### Add a Case Study
1. Edit `_data/case_studies.yml` (add entry)
2. Create `_case_studies/study-id.md` with content
3. Add image to `assets/images/` (optional)
4. Submit pull request

### Report Issues
- Use GitHub Issues tab
- Describe broken links, missing content, design issues
- Include screenshots or browser info

### Suggest Improvements
- Discussions tab for ideas
- Feedback on user experience
- New features or tools to showcase

---

## 📋 Content Guidelines

### Tools
- Keep descriptions concise (2-3 sentences)
- Link to official website and GitHub where available
- Be honest about cost and skill requirements
- Include real use cases and key features

### Case Studies
- Tell a compelling story
- Include specific outcomes and statistics
- Explain lessons learned
- Link tools used in the project

---

## 🚀 Deployment

### Build & Deploy
```bash
# Build locally
bundle exec jekyll build

# Deploy to GitHub Pages
git subtree push --prefix _site origin gh-pages
```

### Automatic Deployment
GitHub Actions auto-builds when you push to `main`. The built site is deployed to GitHub Pages automatically.

---

## 📊 Site Statistics

- **Total Tools**: 19
- **Total Case Studies**: 13
- **Featured Case Studies**: 4
- **Categories**: 8
- **Continents Covered**: 6
- **Stylesheets**: 4
- **JavaScript Files**: 3

---

## 📞 Support & Contact

- **GitHub Issues**: [Report bugs](https://github.com/mk-ws-git/Urban-Climate-Tools/issues)
- **Discussions**: [Ask questions](https://github.com/mk-ws-git/Urban-Climate-Tools/discussions)

---

## 📄 License

MIT License - All content openly available for reuse with attribution.

---

## 🎯 Future Roadmap

- [ ] Add more international tools (Global South focus)
- [ ] Add video demonstrations for complex tools
- [ ] Create interactive climate scenario explorer
- [ ] Build partner organisation directory
- [ ] Community-submitted tool reviews

---

## 📚 Resources

- [Jekyll Documentation](https://jekyllrb.com)
- [GitHub Pages Guide](https://pages.github.com)
- [YAML Documentation](https://yaml.org)
- [Markdown Guide](https://www.markdownguide.org)

---

**Built with ❤️ for climate resilience**  
*Status: 🟢 Live & Maintained*
