# Urban Climate Tools - GitHub Pages Site

This is the GitHub Pages Jekyll site for the Urban Climate Tools database and catalog.

## Site Structure

```
├── _config.yml              # Jekyll configuration
├── _data/                   # Data files (YAML)
│   ├── tools.yml           # Tools database
│   └── meta.yml            # Site metadata and categories
├── _includes/              # Reusable components
│   ├── tool-card.html      # Tool card component
│   ├── tool-sidebar.html   # Tool detail sidebar
│   └── ...
├── _layouts/               # Page templates
│   ├── default.html        # Base template
│   ├── tool.html           # Tool detail page
│   ├── category.html       # Category listing
│   └── case-study.html     # Case study page
├── _tools/                 # Tool detail pages (collection)
│   ├── climate-central.md
│   ├── i-tree.md
│   └── ...
├── _case_studies/          # Case study pages (collection)
│   ├── norfolk.md
│   └── ...
├── assets/                 # Static assets
│   ├── css/
│   │   ├── style.css       # Main stylesheet
│   │   ├── nav.css         # Navigation/footer
│   │   ├── cards.css       # Card components
│   │   └── typography.css  # Font system
│   ├── js/
│   │   ├── filters.js      # Filtering and search
│   │   └── ...
│   └── images/
├── index.md                # Homepage
├── tools.md                # Tools listing page
└── README.md               # This file
```

## Features

### 1. **Interactive Tool Catalog**
- Browse 12+ climate adaptation tools
- Search by name, category, or developer
- Real-time filtering across multiple dimensions

### 2. **Advanced Filtering**
- **By Category**: 8 climate solution categories
- **By Cost**: Free, Freemium, Paid
- **By Skill Level**: Beginner, Intermediate, Advanced
- **By Coverage**: Local, City, National, Global

### 3. **Search Functionality**
- Instant search across all tool fields
- Tag-based discovery
- Developer name matching

### 4. **Tool Detail Pages**
- Rich descriptions and use cases
- Integration guides
- Pricing and support information
- Related tools recommendations
- Direct links to documentation and GitHub

### 5. **Responsive Design**
- Mobile-first approach
- Swiss minimalist aesthetic
- Blue monochrome SVG icons
- Smooth animations and transitions

## Data Format

### Tools Database (_data/tools.yml)

Each tool entry includes:

```yaml
- id: unique-identifier
  name: Tool Name
  developer: Developer Organization
  description: Brief description
  categories:
    - category1
    - category2
  cost: Free|Freemium|Paid
  skillLevel: Beginner|Intermediate|Advanced
  coverage:
    - local
    - city
    - national
    - global
  url: https://tool-website.com
  github: https://github.com/owner/repo
  tags:
    - tag1
    - tag2
```

### Site Metadata (_data/meta.yml)

Contains:
- Site title, description, URL
- Statistics (tool count, cities reached, etc.)
- Contact information
- Social media links
- Category definitions
- Featured content lists

## Development

### Installation

1. Clone the repository
```bash
git clone https://github.com/mk-ws-git/Urban-Climate-Tools.git
cd Urban-Climate-Tools
```

2. Install Jekyll and dependencies
```bash
bundle install
```

3. Serve locally
```bash
bundle exec jekyll serve
```

Visit http://localhost:4000 to view the site.

### Adding a New Tool

1. Add entry to `_data/tools.yml`
2. Create detail page in `_tools/tool-name.md`:

```markdown
---
layout: tool
title: Tool Name
developer: Developer Name
description: Brief description
categories:
  - category1
  - category2
cost: Free
skillLevel: Beginner
coverage:
  - city
tags:
  - tag1
  - tag2
---

## Overview

[Detailed description and information about the tool]

## Features

- Feature 1
- Feature 2
- Feature 3

## Getting Started

[Instructions for using the tool]

## Resources

- [Documentation](https://example.com)
- [GitHub](https://github.com/example)
- [Support](https://example.com/support)
```

### Customization

#### Colors & Branding

Edit CSS variables in `assets/css/style.css`:

```css
:root {
    --primary-blue: #0051BA;
    --secondary-blue: #F0F4FF;
    --accent-cyan: #00D4FF;
    --text-dark: #1a1a1a;
    --border-gray: #E5E5E5;
    --light-gray: #F5F5F5;
}
```

#### Typography

Customize font stack and sizes in `assets/css/typography.css`:

```css
:root {
    --font-primary: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    --font-size-base: 16px;
    --line-height-normal: 1.5;
}
```

#### Filtering Options

Update filter categories in:
- `_data/meta.yml` - Define new categories
- `tools.md` - Add checkboxes for new filter types
- `assets/js/filters.js` - Extend filter logic if needed

## Deployment

### GitHub Pages (Automatic)

1. Push changes to `main` branch
2. GitHub Actions automatically builds and deploys to `gh-pages` branch
3. Site is live at `https://mk-ws-git.github.io/Urban-Climate-Tools/`

### Manual Deployment

```bash
# Build the site
bundle exec jekyll build

# Push to gh-pages branch
git subtree push --prefix _site origin gh-pages
```

## Styling Guide

### Swiss Minimalist Design System

- **Clean layouts** with generous white space
- **Grid-based** component system
- **Monochrome blue** color palette with cyan accents
- **Flat SVG icons** for categories
- **Clear typography** hierarchy
- **Smooth interactions** with subtle animations

### Component Library

#### Buttons

```html
<a href="#" class="btn btn-primary">Primary</a>
<a href="#" class="btn btn-secondary">Secondary</a>
<a href="#" class="btn btn-primary btn-lg">Large</a>
<a href="#" class="btn btn-primary btn-small">Small</a>
```

#### Badges

```html
<span class="badge">Category</span>
<span class="badge badge-success">Free</span>
<span class="badge badge-warning">Paid</span>
```

#### Cards

```html
<div class="tool-card">
  <div class="card-header">
    <div class="card-icon">
      <svg>...</svg>
    </div>
  </div>
  <div class="card-body">
    <h3>Title</h3>
    <p>Description</p>
  </div>
</div>
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Fast page loads (< 2s)
- Optimized images and SVGs
- Minimal JavaScript dependencies
- Cached assets via CloudFlare
- SEO optimized with meta tags

## SEO

Implemented SEO best practices:
- Meta descriptions for all pages
- Open Graph tags for social sharing
- Structured data (schema.org)
- XML sitemap
- Robots.txt

## Analytics

Site usage tracked via:
- Google Analytics (optional)
- GitHub Pages analytics
- Search Console integration

## Support

For issues or questions:
- **GitHub Issues**: [Urban-Climate-Tools Issues](https://github.com/mk-ws-git/Urban-Climate-Tools/issues)
- **Email**: info@urbanclimate.tools
- **Discussions**: [GitHub Discussions](https://github.com/mk-ws-git/Urban-Climate-Tools/discussions)

## Contributing

To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/add-tool`)
3. Make your changes
4. Commit with clear messages
5. Push to your fork
6. Open a Pull Request

## License

This site and its content are licensed under the MIT License - see LICENSE file for details.

## Acknowledgments

- Built with [Jekyll](https://jekyllrb.com/)
- Hosted on [GitHub Pages](https://pages.github.com/)
- Design inspired by Swiss minimalism
- Icons created with SVG
- Community-contributed tools and case studies
