# Deployment Guide - Urban Climate Tools

## Overview
This guide provides step-by-step instructions for deploying the Urban Climate Tools site to GitHub Pages.

## Prerequisites
- Git installed
- Ruby 3.x installed
- Bundler gem installed
- GitHub repository access

## Local Testing (Required Before Deployment)

### 1. Install Dependencies
```bash
cd Urban-Climate-Tools
bundle config set --local path 'vendor/bundle'
bundle install
```

### 2. Build the Site
```bash
bundle exec jekyll build
```

This generates the static site in the `_site` directory.

### 3. Test Locally
```bash
bundle exec jekyll serve
```

Visit: http://localhost:4000/Urban-Climate-Tools/

**Verify:**
- [ ] Homepage loads correctly
- [ ] All category pages load (heat, flood, coastal, green, planning, data, energy, other)
- [ ] Each category page displays filtered tools
- [ ] Navigation links work
- [ ] No 404 errors

## Deployment to GitHub Pages

### Method 1: Automatic Deployment (Recommended)

GitHub Pages can automatically build Jekyll sites from the main branch.

1. **Push Changes to Main Branch**
```bash
git checkout main
git merge copilot/fix-404-errors-tools-categories-again
git push origin main
```

2. **Configure GitHub Pages**
   - Go to repository Settings → Pages
   - Source: Deploy from a branch
   - Branch: `main` (or `gh-pages` if using manual deployment)
   - Folder: `/ (root)`
   - Click Save

3. **Wait for Deployment**
   - GitHub Actions will automatically build and deploy
   - Check the Actions tab for build status
   - Site will be live at: https://mk-ws-git.github.io/Urban-Climate-Tools/

### Method 2: Manual Deployment

If automatic deployment doesn't work, use manual deployment:

1. **Build the Site Locally**
```bash
bundle exec jekyll build
```

2. **Push to gh-pages Branch**
```bash
git subtree push --prefix _site origin gh-pages
```

3. **Configure GitHub Pages**
   - Go to repository Settings → Pages
   - Source: Deploy from a branch
   - Branch: `gh-pages`
   - Folder: `/ (root)`
   - Click Save

## Post-Deployment Verification

After deployment, verify the live site:

### Check All Category Pages
Test each category page URL:
- https://mk-ws-git.github.io/Urban-Climate-Tools/categories/heat/
- https://mk-ws-git.github.io/Urban-Climate-Tools/categories/flood/
- https://mk-ws-git.github.io/Urban-Climate-Tools/categories/coastal/
- https://mk-ws-git.github.io/Urban-Climate-Tools/categories/green/
- https://mk-ws-git.github.io/Urban-Climate-Tools/categories/planning/
- https://mk-ws-git.github.io/Urban-Climate-Tools/categories/data/
- https://mk-ws-git.github.io/Urban-Climate-Tools/categories/energy/
- https://mk-ws-git.github.io/Urban-Climate-Tools/categories/other/

### Verify Tools Display
Each category page should display:
- Category title and description
- Filtered list of tools for that category
- Tool cards with name, developer, description
- Working links to tool websites

### Test Navigation
- [ ] Homepage → Categories → Individual category pages
- [ ] Category index → Individual category pages
- [ ] All navigation links work
- [ ] No broken links or 404 errors

## Troubleshooting

### Issue: 404 Errors on Category Pages

**Cause:** Missing permalink configuration in category markdown files

**Solution:** Ensure all category files have:
```yaml
---
layout: category
title: Category Name
category: category-id
permalink: /categories/category-id/
description: Category description
---
```

### Issue: No Tools Displayed on Category Pages

**Cause:** Category layout not using the correct data source

**Solution:** The category layout should use:
```liquid
{% for tool in site.data.tools %}
    {% if tool.categories contains page.category %}
        <!-- tool card here -->
    {% endif %}
{% endfor %}
```

### Issue: Jekyll Build Fails

**Common Causes:**
1. Missing gems: Run `bundle install`
2. Theme not found: Comment out theme in `_config.yml`
3. Missing kramdown-parser-gfm: Add to Gemfile

**Solution:**
```bash
# Update Gemfile
gem "jekyll", "~> 3.9.0"
gem "jekyll-feed"
gem "jekyll-seo-tag"
gem "jekyll-sitemap"
gem "webrick", "~> 1.7"
gem "kramdown-parser-gfm"

# Reinstall
bundle install
bundle exec jekyll build
```

### Issue: CSS/JS Not Loading

**Cause:** Incorrect baseurl in links

**Solution:** Ensure `_config.yml` has:
```yaml
url: "https://mk-ws-git.github.io/Urban-Climate-Tools"
baseurl: "/Urban-Climate-Tools"
```

And all asset links use:
```liquid
{{ site.baseurl }}/assets/css/style.css
```

## Maintenance

### Adding New Tools
1. Edit `_data/tools.yml`
2. Add tool entry with all required fields
3. Tool will automatically appear on matching category pages

### Adding New Category Pages
1. Create `categories/new-category.md`
2. Add frontmatter with permalink: `/categories/new-category/`
3. Update `categories/index.md` with link
4. Add category to tools in `_data/tools.yml`

### Updating Content
- Edit markdown files directly
- Changes deploy automatically when pushed to main branch
- Test locally first with `bundle exec jekyll serve`

## Support

For issues or questions:
- Check [Jekyll Documentation](https://jekyllrb.com/docs/)
- Review [GitHub Pages Documentation](https://docs.github.com/en/pages)
- Open an issue in the repository

---

**Last Updated:** January 31, 2026  
**Status:** Ready for Production Deployment ✅
