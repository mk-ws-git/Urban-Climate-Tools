# Urban Climate Tools - GitHub Pages Site

## 🌍 Overview

**Urban Climate Tools** is an interactive, searchable database of open-source solutions for building climate-resilient cities. This is the GitHub Pages site—a static Jekyll site showcasing tools, case studies, and resources for municipal leaders, planners, and communities worldwide.

**Live Site**: https://mk-ws-git.github.io/Urban-Climate-Tools/

---

## 🎯 Key Features

### 📊 Tool Catalog
- 12+ curated climate adaptation tools
- Real-time search across name, category, developer
- Multi-dimensional filtering:
  - **Category**: Heat management, flood risk, coastal resilience, green infrastructure, planning, data, energy, water management, other
  - **Cost**: Free, Freemium, Paid
  - **Skill Level**: Beginner, Intermediate, Advanced
  - **Geographic Coverage**: Local, City, National, Global

### 📚 Case Studies
- 8 real-world implementation examples from cities worldwide
- Search by city, country, climate challenge
- Filter by:
  - **Climate Challenge**: Urban heat, flooding, sea level rise, water scarcity, air pollution
  - **Sector**: Urban planning, green infrastructure, transportation, water management, energy
  - **Region**: North America, South America, Europe, Asia

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
├── tools.md                      # Tool catalog with search/filter
├── case-studies.md              # Case study browser with filters
├── about.md                      # About page with FAQs
│
├── _data/
│   ├── tools.yml                # 12 tools with metadata
│   ├── case_studies.yml         # 8 case studies with outcomes
│   └── meta.yml                 # Site metadata, categories, stats
│
├── _tools/                      # Individual tool pages
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
- Geographic coverage
- Direct links, GitHub repo, API docs
- Real-world use cases

### Case Studies
Each case study features:
- City, location, year of implementation
- Climate challenges addressed
- Solutions and tools used
- Key outcomes and statistics
- Lessons learned
- Replication potential

---

## 🔍 Search & Filtering

### Tools Page
```
Search: Real-time across all tool fields
Filters:
  • Category (9 options)
  • Cost tier (3 options)
  • Skill level (3 options)
  • Coverage area (4 options)
```

### Case Studies Page
```
Search: By city, country, challenge
Filters:
  • Climate challenge (5 options)
  • Implementation sector (5+ options)
  • Global region (5 options)
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
1. Edit `_data/tools.yml` (add entry)
2. Create `_tools/tool-id.md` with details
3. Test locally: `bundle exec jekyll serve`
4. Submit pull request

### Add a Case Study
1. Edit `_data/case_studies.yml` (add entry)
2. Create `_case_studies/study-id.md` with content
3. Add image to `assets/images/`
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
- Link to official website and GitHub
- Be honest about cost and skill requirements
- Include real use cases

### Case Studies
- Tell a compelling story
- Include specific outcomes and statistics
- Explain lessons learned
- Link tools used in the project
- Provide sources and references

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
GitHub Actions can auto-build when you push to main:
- Create `.github/workflows/build.yml`
- See `DEPLOYMENT_CHECKLIST.md` for full setup

---

## 📊 Site Statistics

- **Total Tools**: 12
- **Total Case Studies**: 8
- **Featured Tools**: 6
- **Featured Case Studies**: 3
- **Categories**: 9
- **Lines of Code**: 5000+
- **Data Entries**: 20+
- **Stylesheets**: 4
- **JavaScript Files**: 2

---

## 📞 Support & Contact

- **Email**: info@urbanclimate.tools
- **GitHub Issues**: [Report bugs](https://github.com/mk-ws-git/Urban-Climate-Tools/issues)
- **Discussions**: [Ask questions](https://github.com/mk-ws-git/Urban-Climate-Tools/discussions)
- **Documentation**: See `IMPLEMENTATION_SUMMARY.md` and `SITE_README.md`

---

## 📄 License

MIT License - All content openly available for reuse with attribution.

---

## 🎯 Future Roadmap

- [ ] Add 10+ more tools
- [ ] Create 5+ additional case studies
- [ ] Develop tool comparison matrix
- [ ] Add video demonstrations
- [ ] Create interactive climate scenario tool
- [ ] Build partner organization directory
- [ ] Launch community forums
- [ ] Create mobile app

---

## 📚 Resources

- [Jekyll Documentation](https://jekyllrb.com)
- [GitHub Pages Guide](https://pages.github.com)
- [YAML Documentation](https://yaml.org)
- [Markdown Guide](https://www.markdownguide.org)

---

**Built with ❤️ for climate resilience**  
*Last Updated: January 17, 2026*  
*Status: 🟢 Live & Maintained*
