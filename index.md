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
            <h2 class="categories__title">Explore Climate Tools by Category</h2>
        </div>
        <div class="categories__grid">
            {% assign heat_count = site.tools | where_exp: "item", "item.categories contains 'heat'" | size %}
            <a href="{{ '/tools/' | relative_url }}?category=heat" class="category-card category-card--heat">
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
                <div class="category-card__footer">
                    <span class="category-card__stat">{{ heat_count }} tool{% if heat_count != 1 %}s{% endif %}</span>
                    <span class="category-card__arrow">→</span>
                </div>
            </a>

            {% assign flood_count = site.tools | where_exp: "item", "item.categories contains 'flood'" | size %}
            <a href="{{ '/tools/' | relative_url }}?category=flood" class="category-card category-card--flood">
                <div class="category-card__icon">
                    <svg viewBox="0 0 100 100">
                        <path d="M 20 70 Q 30 50 40 60 T 60 55 T 80 70" fill="var(--color-teal-400)" opacity="0.4"/>
                        <path d="M 15 80 Q 35 60 55 75 T 75 70 T 85 80" fill="var(--color-teal-400)" opacity="0.6"/>
                    </svg>
                </div>
                <h3 class="category-card__title">Flood Risk</h3>
                <p class="category-card__description">Stormwater management and flooding solutions</p>
                <div class="category-card__footer">
                    <span class="category-card__stat">{{ flood_count }} tool{% if flood_count != 1 %}s{% endif %}</span>
                    <span class="category-card__arrow">→</span>
                </div>
            </a>

            {% assign coastal_count = site.tools | where_exp: "item", "item.categories contains 'coastal'" | size %}
            <a href="{{ '/tools/' | relative_url }}?category=coastal" class="category-card category-card--coastal">
                <div class="category-card__icon">
                    <svg viewBox="0 0 100 100">
                        <path d="M 10 60 Q 30 40 50 55 T 90 50" stroke="var(--color-teal-400)" stroke-width="2" fill="none"/>
                        <path d="M 15 70 Q 35 55 55 70 T 95 65" stroke="var(--color-teal-400)" stroke-width="1.5" fill="none" opacity="0.7"/>
                    </svg>
                </div>
                <h3 class="category-card__title">Coastal Resilience</h3>
                <p class="category-card__description">Sea level rise and coastal hazard adaptation</p>
                <div class="category-card__footer">
                    <span class="category-card__stat">{{ coastal_count }} tool{% if coastal_count != 1 %}s{% endif %}</span>
                    <span class="category-card__arrow">→</span>
                </div>
            </a>

            {% assign green_count = site.tools | where_exp: "item", "item.categories contains 'green'" | size %}
            <a href="{{ '/tools/' | relative_url }}?category=green" class="category-card category-card--green">
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
                <div class="category-card__footer">
                    <span class="category-card__stat">{{ green_count }} tool{% if green_count != 1 %}s{% endif %}</span>
                    <span class="category-card__arrow">→</span>
                </div>
            </a>

            {% assign data_count = site.tools | where_exp: "item", "item.categories contains 'data'" | size %}
            <a href="{{ '/tools/' | relative_url }}?category=data" class="category-card category-card--data">
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
                <div class="category-card__footer">
                    <span class="category-card__stat">{{ data_count }} tool{% if data_count != 1 %}s{% endif %}</span>
                    <span class="category-card__arrow">→</span>
                </div>
            </a>

            {% assign planning_count = site.tools | where_exp: "item", "item.categories contains 'planning'" | size %}
            <a href="{{ '/tools/' | relative_url }}?category=planning" class="category-card category-card--planning">
                <div class="category-card__icon">
                    <svg viewBox="0 0 100 100">
                        <polygon points="50,15 35,35 35,65 65,65 65,35" fill="none" stroke="var(--color-teal-400)" stroke-width="2"/>
                        <rect x="42" y="42" width="16" height="16" fill="var(--color-teal-400)" opacity="0.6"/>
                    </svg>
                </div>
                <h3 class="category-card__title">Planning & Policy</h3>
                <p class="category-card__description">Urban planning tools and policy frameworks</p>
                <div class="category-card__footer">
                    <span class="category-card__stat">{{ planning_count }} tool{% if planning_count != 1 %}s{% endif %}</span>
                    <span class="category-card__arrow">→</span>
                </div>
            </a>
        </div>
    </div>
</section>

<section class="explore-features">
    <div class="container">
        <div class="section__header">
            <h2 class="section__title">Explore the Platform</h2>
            <p class="section__description">Purpose-built tools for climate researchers, city planners, and community advocates.</p>
        </div>
        <div class="explore-features__grid">

            <a href="{{ '/quiz/' | relative_url }}" class="explore-feature-card">
                <div class="explore-feature-card__icon">
                    <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" stroke-width="1.5" width="32" height="32">
                        <circle cx="20" cy="20" r="15"/>
                        <path d="M15 16c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2-1.5 3.5-3.5 4.5V24" stroke-linecap="round"/>
                        <circle cx="20" cy="28" r="1.2" fill="currentColor" stroke="none"/>
                    </svg>
                </div>
                <div class="explore-feature-card__body">
                    <h3 class="explore-feature-card__title">Tool Finder Quiz</h3>
                    <p class="explore-feature-card__desc">Answer 4 questions and get matched with the tools best suited to your city's climate challenge.</p>
                </div>
                <span class="explore-feature-card__cta">Take the quiz →</span>
            </a>

            <a href="{{ '/compare/' | relative_url }}" class="explore-feature-card">
                <div class="explore-feature-card__icon">
                    <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" stroke-width="1.5" width="32" height="32">
                        <rect x="5" y="10" width="13" height="20" rx="2"/>
                        <rect x="22" y="10" width="13" height="20" rx="2"/>
                        <line x1="18" y1="20" x2="22" y2="20"/>
                    </svg>
                </div>
                <div class="explore-feature-card__body">
                    <h3 class="explore-feature-card__title">Compare Tools</h3>
                    <p class="explore-feature-card__desc">Select two tools and compare their features, cost, skill requirements, and use cases side by side.</p>
                </div>
                <span class="explore-feature-card__cta">Start comparing →</span>
            </a>

            <a href="{{ '/map/' | relative_url }}" class="explore-feature-card">
                <div class="explore-feature-card__icon">
                    <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" stroke-width="1.5" width="32" height="32">
                        <circle cx="20" cy="17" r="6"/>
                        <path d="M20 34C20 34 8 24 8 17a12 12 0 0124 0c0 7-12 17-12 17z"/>
                    </svg>
                </div>
                <div class="explore-feature-card__body">
                    <h3 class="explore-feature-card__title">Case Study Map</h3>
                    <p class="explore-feature-card__desc">Explore an interactive global map of cities implementing climate resilience strategies.</p>
                </div>
                <span class="explore-feature-card__cta">Open map →</span>
            </a>

            <a href="{{ '/data/' | relative_url }}" class="explore-feature-card">
                <div class="explore-feature-card__icon">
                    <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" stroke-width="1.5" width="32" height="32">
                        <path d="M6 30 L13 20 L19 25 L27 12 L34 18" stroke-linecap="round" stroke-linejoin="round"/>
                        <rect x="4" y="6" width="32" height="28" rx="2"/>
                    </svg>
                </div>
                <div class="explore-feature-card__body">
                    <h3 class="explore-feature-card__title">Climate Data Explorer</h3>
                    <p class="explore-feature-card__desc">Search any city and visualise real-time temperature trends, precipitation, and climate indicators — powered by open APIs.</p>
                </div>
                <span class="explore-feature-card__cta">Explore data →</span>
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
