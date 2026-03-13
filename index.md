---
layout: default
title: Urban Climate Tools
---

<section class="hero hero--video">
    <video class="hero__video" autoplay muted loop playsinline>
        <source src="{{ site.baseurl }}/assets/images/Urban%20Climate%20Tools%20Home%20Banner.mp4" type="video/mp4">
    </video>
    <div class="hero__glass">
        <h1 class="hero__glass-title">Urban <em>Climate</em> Tools</h1>
        <p class="hero__glass-subtitle">Open-source solutions for building climate-resilient cities</p>
        <div class="hero__glass-actions">
            <a href="{{ '/tools/' | relative_url }}" class="btn btn--glass">Browse Tools</a>
            <a href="{{ '/about/' | relative_url }}" class="btn btn--glass">Learn More</a>
        </div>
    </div>
</section>

<section class="stats">
    <div class="stats__container">
        <div class="stats__item">
            <div class="stats__number">{{ site.data.meta.tool_count | default: "25+" }}</div>
            <div class="stats__label">Tools</div>
        </div>
        <div class="stats__item">
            <div class="stats__number">{{ site.data.meta.case_study_count | default: "8+" }}</div>
            <div class="stats__label">Case Studies</div>
        </div>
        <div class="stats__item">
            <div class="stats__number">{{ site.data.meta.cities_reached | default: "100+" }}</div>
            <div class="stats__label">Cities Reached</div>
        </div>
        <div class="stats__item">
            <div class="stats__number">{{ site.data.meta.global_coverage | default: "Global" }}</div>
            <div class="stats__label">Coverage</div>
        </div>
    </div>
</section>

<section class="categories" id="tools">
    <div class="categories__container">
        <div class="categories__header">
            <h2 class="categories__title">Explore by Category</h2>
        </div>
        <div class="categories__grid">
            <a href="{{ '/categories/heat/' | relative_url }}" class="category-card">
                <div class="category-card__icon">
                    <svg viewBox="0 0 100 100">
                        <rect x="30" y="20" width="40" height="60" fill="none" stroke="var(--color-teal-400)" stroke-width="2"/>
                        <line x1="40" y1="30" x2="40" y2="75" stroke="var(--color-teal-400)" stroke-width="1.5" opacity="0.5"/>
                        <line x1="50" y1="25" x2="50" y2="75" stroke="var(--color-teal-400)" stroke-width="2"/>
                        <line x1="60" y1="30" x2="60" y2="75" stroke="var(--color-teal-400)" stroke-width="1.5" opacity="0.5"/>
                    </svg>
                </div>
                <h3 class="category-card__title">Heat Management</h3>
                <p class="category-card__description">Urban heat island mitigation and heat wave planning</p>
            </a>

            <a href="{{ '/categories/flood/' | relative_url }}" class="category-card">
                <div class="category-card__icon">
                    <svg viewBox="0 0 100 100">
                        <path d="M 20 70 Q 30 50 40 60 T 60 55 T 80 70" fill="var(--color-teal-400)" opacity="0.4"/>
                        <path d="M 15 80 Q 35 60 55 75 T 75 70 T 85 80" fill="var(--color-teal-400)" opacity="0.6"/>
                    </svg>
                </div>
                <h3 class="category-card__title">Flood Risk</h3>
                <p class="category-card__description">Stormwater management and flooding solutions</p>
            </a>

            <a href="{{ '/categories/coastal/' | relative_url }}" class="category-card">
                <div class="category-card__icon">
                    <svg viewBox="0 0 100 100">
                        <path d="M 10 60 Q 30 40 50 55 T 90 50" stroke="var(--color-teal-400)" stroke-width="2" fill="none"/>
                        <path d="M 15 70 Q 35 55 55 70 T 95 65" stroke="var(--color-teal-400)" stroke-width="1.5" fill="none" opacity="0.7"/>
                    </svg>
                </div>
                <h3 class="category-card__title">Coastal Resilience</h3>
                <p class="category-card__description">Sea level rise and coastal hazard adaptation</p>
            </a>

            <a href="{{ '/categories/green/' | relative_url }}" class="category-card">
                <div class="category-card__icon">
                    <svg viewBox="0 0 100 100">
                        <path d="M 50 80 L 50 40" stroke="var(--color-teal-400)" stroke-width="2"/>
                        <ellipse cx="50" cy="30" rx="15" ry="20" fill="var(--color-teal-400)" opacity="0.6"/>
                        <ellipse cx="35" cy="40" rx="12" ry="18" fill="var(--color-teal-400)" opacity="0.4"/>
                        <ellipse cx="65" cy="40" rx="12" ry="18" fill="var(--color-teal-400)" opacity="0.4"/>
                    </svg>
                </div>
                <h3 class="category-card__title">Green Infrastructure</h3>
                <p class="category-card__description">Nature-based solutions for urban resilience</p>
            </a>

            <a href="{{ '/categories/data/' | relative_url }}" class="category-card">
                <div class="category-card__icon">
                    <svg viewBox="0 0 100 100">
                        <rect x="20" y="25" width="60" height="50" fill="none" stroke="var(--color-teal-400)" stroke-width="2"/>
                        <rect x="30" y="35" width="8" height="30" fill="var(--color-teal-400)" opacity="0.6"/>
                        <rect x="42" y="35" width="8" height="30" fill="var(--color-teal-400)" opacity="0.6"/>
                        <rect x="54" y="35" width="8" height="30" fill="var(--color-teal-400)" opacity="0.6"/>
                        <rect x="66" y="35" width="8" height="30" fill="var(--color-teal-400)" opacity="0.6"/>
                    </svg>
                </div>
                <h3 class="category-card__title">Data & Analytics</h3>
                <p class="category-card__description">Climate data visualization and analysis tools</p>
            </a>

            <a href="{{ '/categories/planning/' | relative_url }}" class="category-card">
                <div class="category-card__icon">
                    <svg viewBox="0 0 100 100">
                        <polygon points="50,15 35,35 35,65 65,65 65,35" fill="none" stroke="var(--color-teal-400)" stroke-width="2"/>
                        <rect x="42" y="42" width="16" height="16" fill="var(--color-teal-400)" opacity="0.6"/>
                    </svg>
                </div>
                <h3 class="category-card__title">Planning & Policy</h3>
                <p class="category-card__description">Urban planning tools and policy frameworks</p>
            </a>
        </div>
    </div>
</section>

<section class="case-studies">
    <div class="case-studies__container">
        <div class="case-studies__header">
            <h2 class="case-studies__title">Featured Case Studies</h2>
            <p class="case-studies__subtitle">Real-world applications of urban climate tools</p>
        </div>
        <div class="case-studies__grid">
            {% for case_study in site.case_studies limit:3 %}
            <div class="case-study-card">
                <div class="case-study-card__content">
                    <h3><a href="{{ case_study.url | relative_url }}">{{ case_study.title }}</a></h3>
                    <p class="case-study-card__location">{{ case_study.city }}, {{ case_study.country }}</p>
                    <p class="case-study-card__description">{{ case_study.description | truncatewords: 20 }}</p>
                    <a href="{{ case_study.url | relative_url }}" class="case-study-card__link">Read Case Study →</a>
                </div>
            </div>
            {% endfor %}
        </div>
        <div class="case-studies__footer">
            <a href="{{ '/case-studies/' | relative_url }}" class="btn btn--primary">View All Case Studies</a>
        </div>
    </div>
</section>

<div class="footer-banner" id="footer-banner">
    <img src="{{ site.baseurl }}/assets/images/City%20Nature%20Banner%20Transparent.png" alt="" class="footer-banner__img">
</div>

<script>
(function() {
  var banner = document.getElementById('footer-banner');
  if (!banner) return;
  var observed = false;
  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting && !observed) {
        observed = true;
        banner.classList.add('footer-banner--revealed');
      }
    });
  }, { threshold: 0.05 });
  observer.observe(banner);
})();
</script>
