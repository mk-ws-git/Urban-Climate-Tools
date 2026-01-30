# Contributing to Urban Climate Tools

Thank you for your interest in contributing to Urban Climate Tools! We welcome contributions from everyone who wants to help build climate-resilient cities.

## 🌍 How to Contribute

### Reporting Issues
- Use the [GitHub Issues](https://github.com/mk-ws-git/Urban-Climate-Tools/issues) tab
- Describe the problem clearly with screenshots if applicable
- Include browser information for UI-related issues
- Mention the specific page or tool affected

### Suggesting New Tools
We're always looking to expand our catalog! To suggest a new tool:

1. Check if the tool isn't already listed
2. Create an issue with the "New Tool Suggestion" label
3. Include:
   - Tool name and developer
   - Website URL and GitHub repository (if available)
   - Brief description (2-3 sentences)
   - Category (heat, flood, coastal, green, planning, data, energy, other)
   - Cost tier (Free, Freemium, Paid)
   - Skill level (Beginner, Intermediate, Advanced)
   - Why it's valuable for climate adaptation

### Adding a New Tool
To add a tool to the database:

1. **Fork the repository**
2. **Edit `_data/tools.yml`** - Add your tool entry following the existing format
3. **Create a tool page** - Add `_tools/your-tool-id.md` with detailed information
4. **Test locally** - Run `bundle exec jekyll serve` and verify your changes
5. **Submit a pull request** - Describe what you've added

#### Tool Entry Template
```yaml
- id: your-tool-id
  name: Tool Name
  developer: Developer Organization
  description: Brief 2-3 sentence description
  website: https://example.com
  github_repo: https://github.com/org/repo
  categories:
    - category1
    - category2
  cost: Free|Freemium|Paid
  skillLevel: Beginner|Intermediate|Advanced
  coverage:
    - local|city|national|global
  tags:
    - tag1
    - tag2
  featured: false
```

### Adding a Case Study
To contribute a real-world implementation example:

1. **Edit `_data/case_studies.yml`** - Add your case study entry
2. **Create case study page** - Add `_case_studies/your-case-study-id.md`
3. **Add image** - Place an image in `assets/images/` (optional but recommended)
4. **Include**:
   - City, location, year of implementation
   - Climate challenges addressed
   - Solutions and tools used
   - Measurable outcomes and statistics
   - Lessons learned
   - Sources and references

### Improving Documentation
Documentation improvements are always welcome:
- Fix typos or unclear explanations
- Add examples or clarifications
- Update outdated information
- Improve accessibility

### Code Contributions
For code improvements:
- Follow the existing code style
- Test your changes locally before submitting
- Keep CSS modular and well-commented
- Ensure accessibility (WCAG AA compliance)
- Minimize JavaScript dependencies

## 📋 Development Setup

### Prerequisites
- Ruby 2.7 or higher
- Bundler (`gem install bundler`)
- Git

### Local Development
```bash
# Clone repository
git clone https://github.com/mk-ws-git/Urban-Climate-Tools.git
cd Urban-Climate-Tools

# Install dependencies
bundle install

# Run local server
bundle exec jekyll serve

# Open http://localhost:4000
```

### Project Structure
```
├── _data/              # Tool and case study data (YAML)
├── _tools/             # Individual tool pages
├── _case_studies/      # Individual case study pages
├── _layouts/           # Page templates
├── _includes/          # Reusable components
├── assets/             # CSS, JS, images
├── categories/         # Category pages
└── *.md                # Main content pages
```

## ✅ Pull Request Guidelines

### Before Submitting
- [ ] Test locally with `bundle exec jekyll serve`
- [ ] Check all links work correctly
- [ ] Verify responsive design on mobile/tablet
- [ ] Ensure no console errors
- [ ] Validate YAML syntax
- [ ] Run any linters if applicable

### Pull Request Description
Include:
- **What**: What does this PR add/fix?
- **Why**: Why is this change needed?
- **How**: How did you implement it?
- **Screenshots**: For UI changes (if applicable)
- **Testing**: What testing did you perform?

## 🎨 Design Guidelines

### Visual Design
- **Swiss Minimalism**: Clean, grid-based, generous white space
- **Color Palette**: Primary blue (#0051BA), light backgrounds, minimal accents
- **Typography**: System font stack, clear hierarchy
- **Components**: Use existing card, button, and badge patterns

### Accessibility
- Use semantic HTML5 elements
- Maintain WCAG AA color contrast (4.5:1 minimum)
- Ensure keyboard navigation works
- Add alt text to all images
- Use ARIA labels only when necessary

### Performance
- Keep total CSS under 100KB
- Minimize JavaScript usage
- Optimize images (compress, use appropriate formats)
- Avoid render-blocking resources

## 📝 Content Guidelines

### Writing Style
- **Clear and concise**: Use plain language
- **Actionable**: Focus on practical information
- **Accurate**: Verify facts and provide sources
- **Inclusive**: Avoid jargon, define technical terms
- **Positive**: Focus on solutions and opportunities

### Tools Database
- Keep descriptions to 2-3 sentences
- Link to official website and GitHub
- Be honest about cost and skill requirements
- Include real-world use cases
- Update regularly to maintain accuracy

### Case Studies
- Tell a compelling story with clear structure
- Include specific outcomes and statistics
- Explain lessons learned and challenges
- Link to tools used in the project
- Provide sources and references
- Highlight replication potential

## 🔍 Review Process

1. **Submission**: Create a pull request
2. **Automated checks**: CI/CD runs (if configured)
3. **Review**: Maintainers review your contribution
4. **Feedback**: Address any requested changes
5. **Merge**: PR is merged once approved

## 🤝 Code of Conduct

### Our Pledge
We are committed to providing a welcoming and inclusive environment for all contributors, regardless of background, identity, or experience level.

### Expected Behavior
- Be respectful and professional
- Welcome diverse perspectives
- Accept constructive criticism gracefully
- Focus on what's best for the community
- Show empathy towards others

### Unacceptable Behavior
- Harassment, discrimination, or hate speech
- Trolling, insulting, or derogatory comments
- Personal or political attacks
- Publishing others' private information
- Any conduct that could be considered unprofessional

### Enforcement
Violations may result in temporary or permanent ban from the project. Report issues to info@urbanclimate.tools.

## 📞 Getting Help

- **Questions**: Open an issue or contact us via email
- **Bugs**: Report via [GitHub Issues](https://github.com/mk-ws-git/Urban-Climate-Tools/issues)
- **Email**: info@urbanclimate.tools

## 📄 License

By contributing to Urban Climate Tools, you agree that your contributions will be licensed under the MIT License.

---

**Thank you for helping build climate-resilient cities! 🌍**

*Last Updated: January 30, 2026*
