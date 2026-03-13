# GitHub Pages Deployment Checklist

## Pre-Deployment Tasks

### Content
- [ ] All 12 tools have complete descriptions and links
- [ ] All 8 case studies have complete information
- [ ] Links to GitHub repos are correct
- [ ] Contact email is updated (info@urbanclimate.tools)
- [ ] Social media links are correct

### Design & Branding
- [ ] SVG icons created for 8 categories
- [ ] Hero image selected for homepage
- [ ] Case study images/placeholders added
- [ ] Favicon files created (favicon.svg, favicon.png)
- [ ] Logo appears correctly in navigation

### Technical
- [ ] `.gitignore` configured for Jekyll
- [ ] `Gemfile` includes all dependencies
- [ ] `_config.yml` has correct baseurl and url
- [ ] All CSS files properly linked in head.html
- [ ] JavaScript files load without errors
- [ ] No broken image links or 404s

### Testing
- [ ] Homepage loads and displays correctly
- [ ] Tool filtering works on all browsers
- [ ] Case study search functions properly
- [ ] Mobile responsive design verified
- [ ] Links to individual tools/case studies work
- [ ] Navigation hamburger menu functions
- [ ] Footer links are correct

---

## Deployment Steps

### Step 1: Prepare Repository
```bash
# Navigate to project directory
cd ~/Desktop/GitHub-Pages-Urban-Climate-Tools

# Ensure git is initialized
git init

# Create .gitignore
cat > .gitignore << EOF
_site
.sass-cache
.jekyll-cache
.jekyll-metadata
Gemfile.lock
EOF

# Add all files
git add .

# Initial commit
git commit -m "Initial GitHub Pages site for Urban Climate Tools"
```

### Step 2: Build Locally
```bash
# Install dependencies
bundle install

# Build site
bundle exec jekyll build

# Serve locally (optional, for testing)
bundle exec jekyll serve
# Visit http://localhost:4000
```

### Step 3: Push to GitHub
```bash
# Add remote (if not already done)
git remote add origin https://github.com/mk-ws-git/Urban-Climate-Tools.git

# Push main branch
git push -u origin main

# Create and push gh-pages branch
git subtree push --prefix _site origin gh-pages
```

### Step 4: Configure GitHub Pages
1. Go to repository Settings
2. Click "Pages" in left sidebar
3. Select:
   - Source: Deploy from a branch
   - Branch: gh-pages
   - Folder: / (root)
4. Click "Save"
5. Wait 1-2 minutes for deployment
6. Visit: `https://mk-ws-git.github.io/Urban-Climate-Tools/`

### Step 5: Verify Deployment
- [ ] Site loads at GitHub Pages URL
- [ ] All pages accessible
- [ ] Search and filtering work
- [ ] Images load correctly
- [ ] Mobile responsive
- [ ] No console errors

---

## Post-Deployment

### Analytics (Optional)
```html
<!-- Add to _includes/head.html for Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

### CI/CD Automation (Optional)
Create `.github/workflows/build.yml`:
```yaml
name: Build and Deploy

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: ruby/setup-ruby@v1
      - name: Install dependencies
        run: bundle install
      - name: Build
        run: bundle exec jekyll build
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./_site
```

---

## Maintenance Tasks

### Regular Updates
- [ ] Review and update tools quarterly
- [ ] Add new case studies as available
- [ ] Check for broken links monthly
- [ ] Update statistics in _data/meta.yml
- [ ] Respond to GitHub issues and PRs

### Content Additions
To add new tool:
1. Add entry to `_data/tools.yml`
2. Create `_tools/tool-id.md` with details
3. Run `bundle exec jekyll serve` to test
4. Commit and push

To add new case study:
1. Add entry to `_data/case_studies.yml`
2. Create `_case_studies/study-id.md` with details
3. Add image to `assets/images/`
4. Commit and push

---

## Troubleshooting

### Site not deploying
- Check `.github/workflows/` for build errors
- Verify `_config.yml` syntax (YAML format)
- Ensure `Gemfile.lock` is not in .gitignore
- Look at Actions tab for build logs

### Broken links after deployment
- Check baseurl in `_config.yml` 
- Verify relative paths in links
- Test with `bundle exec jekyll serve` locally first

### Images not loading
- Use relative paths: `/assets/images/file.png`
- Ensure files are committed to git
- Check file names for case sensitivity

### Styling not applied
- Clear browser cache (Ctrl+Shift+Del or Cmd+Shift+Del)
- Verify CSS files are in git
- Check media queries for mobile issues

---

## Success Indicators

✅ **Site is Live When:**
- URL responds at GitHub Pages domain
- All pages load without 404s
- Search and filters work
- Mobile view is responsive
- Navigation links function
- External links work
- No console JavaScript errors
- Images display correctly

---

## Support & Resources

- Jekyll Docs: https://jekyllrb.com
- GitHub Pages Docs: https://pages.github.com
- Repository: https://github.com/mk-ws-git/Urban-Climate-Tools
- Issues: Report via GitHub Issues tab

---

**Last Updated**: January 17, 2026  
**Site Version**: 1.0 (Launch)  
**Status**: Ready for Deployment ✅
