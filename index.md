---
layout: default
title: Urban Climate Tools
---

<section class="hero">
    <div class="hero__container">
        <div class="hero__content">
            <h1 class="hero__title">Urban <em>Climate</em> Tools</h1>
            <p class="hero__subtitle">Open-source solutions for building climate-resilient cities</p>
            <div class="hero__actions">
                <a href="#tools" class="btn btn--primary">Browse Tools</a>
                <a href="{{ '/about/' | relative_url }}" class="btn btn--secondary">Learn More</a>
            </div>
        </div>
        <div class="hero__media">
            <svg viewBox="0 0 400 300" class="hero__illustration">
                <circle cx="200" cy="150" r="120" fill="var(--color-teal-100)" opacity="0.3"/>
                <circle cx="150" cy="100" r="40" fill="var(--color-teal-300)" opacity="0.4"/>
                <circle cx="280" cy="180" r="50" fill="var(--color-teal-500)" opacity="0.3"/>
                <path d="M 100 250 Q 150 200 200 220 T 300 240" stroke="var(--color-teal-600)" stroke-width="2" fill="none" opacity="0.5"/>
            </svg>
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

<section class="categories">
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
                        <path d="M 15 80 Q 25 60 35 75 T 55 70 T 85 80" fill="var(--color-teal-400)" opacity="0.6"/>
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
                <div class="card-body">
                    <h3><a href="{{ site.baseurl }}/tools/{{ tool.id }}/">{{ tool.name }}</a></h3>
                    <p class="developer">{{ tool.developer }}</p>
                    <p class="description">{{ tool.description | truncatewords: 15 }}</p>
                    <div class="card-meta">
                        {% if tool.cost %}
                        <div class="meta-item">
                            <span class="label">Cost:</span>
                            <span class="value">{{ tool.cost }}</span>
                        </div>
                        {% endif %}
                        {% if tool.skillLevel %}
                        <div class="meta-item">
                            <span class="label">Skill:</span>
                            <span class="value">{{ tool.skillLevel }}</span>
                        </div>
                        {% endif %}
                    </div>
                </div>
                <div class="card-footer">
                    <a href="{{ site.baseurl }}/tools/{{ tool.id }}/" class="btn btn-primary btn-small">Learn More</a>
                </div>
            </div>
            {% endfor %}
        </div>
        <div style="text-align: center; margin-top: var(--spacing-2xl);">
            <a href="{{ site.baseurl }}/tools/" class="btn btn-secondary btn-lg">View All Tools</a>
        </div>
    </div>
</section>

<section class="featured-case-studies">
    <div class="container">
        <h2>Real-World Impact</h2>
        <p class="section-subtitle">Learn how cities worldwide are adapting to climate change</p>
        <div class="case-studies-showcase">
            {% for study in site.data.case_studies | where: "featured", true | slice: 0, 3 %}
            <div class="case-study-showcase-card">
                {% if study.image_url %}
                <div class="showcase-image">
                    <img src="{{ study.image_url }}" alt="{{ study.title }}" />
                </div>
                {% endif %}
                <div class="showcase-content">
                    <h3>{{ study.title }}</h3>
                    <p class="city-year">{{ study.city }}, {{ study.country }} • {{ study.year }}</p>
                    <p>{{ study.description }}</p>
                    <div class="showcase-challenges">
                        {% for challenge in study.climate_challenges | slice: 0, 2 %}
                        <span class="challenge-tag">{{ challenge }}</span>
                        {% endfor %}
                    </div>
                    <a href="{{ site.baseurl }}/case-studies/{{ study.id }}/" class="btn btn-secondary btn-small">Read Case Study</a>
                </div>
            </div>
            {% endfor %}
        </div>
        <div style="text-align: center; margin-top: var(--spacing-2xl);">
            <a href="{{ site.baseurl }}/case-studies/" class="btn btn-secondary btn-lg">Explore All Case Studies</a>
        </div>
    </div>
</section>

<section class="cta">
    <div class="container">
        <h2>Ready to Adapt?</h2>
        <p>Explore our comprehensive toolkit of open-source solutions designed to help cities build climate resilience.</p>
        <div class="cta-actions">
            <a href="{{ site.baseurl }}/tools/" class="btn btn-primary btn-lg">Explore Tools</a>
            <a href="https://github.com/mk-ws-git/Urban-Climate-Tools" class="btn btn-secondary btn-lg">Contribute on GitHub</a>
        </div>
    </div>
</section>

<style>
    .hero {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: var(--spacing-2xl);
        align-items: center;
        padding: var(--spacing-3xl) 0;
        border-bottom: 1px solid var(--border-gray);
    }
    
    .hero-title {
        font-size: 48px;
        line-height: 1.2;
        margin-bottom: var(--spacing-lg);
    }
    
    .hero-subtitle {
        font-size: 20px;
        color: #666;
        margin-bottom: var(--spacing-xl);
    }
    
    .hero-actions {
        display: flex;
        gap: var(--spacing-lg);
        flex-wrap: wrap;
    }
    
    .hero-svg {
        width: 100%;
        max-width: 400px;
    }
    
    .stats {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: var(--spacing-lg);
        padding: var(--spacing-3xl) 0;
        border-bottom: 1px solid var(--border-gray);
    }
    
    .stat-item {
        text-align: center;
    }
    
    .stat-number {
        font-size: 32px;
        font-weight: bold;
        color: var(--primary-blue);
    }
    
    .stat-label {
        font-size: 14px;
        color: #999;
        margin-top: var(--spacing-sm);
    }
    
    .categories {
        padding: var(--spacing-3xl) 0;
    }
    
    .categories h2 {
        text-align: center;
        margin-bottom: var(--spacing-2xl);
    }
    
    .category-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
        gap: var(--spacing-lg);
    }
    
    .category-card {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        padding: var(--spacing-lg);
        background: var(--light-gray);
        border-radius: var(--radius-md);
        transition: all 0.3s ease;
        text-decoration: none;
        color: inherit;
    }
    
    .category-card:hover {
        background: var(--primary-blue);
        color: white;
    }
    
    .category-icon {
        width: 80px;
        height: 80px;
        margin-bottom: var(--spacing-md);
    }
    
    .category-icon svg {
        width: 100%;
        height: 100%;
    }
    
    .category-card:hover .category-icon svg {
        filter: brightness(0) invert(1);
    }
    
    .category-card h3 {
        font-size: 16px;
        margin-bottom: var(--spacing-sm);
    }
    
    .category-card p {
        font-size: 13px;
        margin: 0;
    }
    
    .featured-tools {
        padding: var(--spacing-3xl) 0;
        border-top: 1px solid var(--border-gray);
    }
    
    .featured-tools h2 {
        margin-bottom: var(--spacing-2xl);
    }
    
    .featured-case-studies {
        padding: var(--spacing-3xl) 0;
        border-top: 1px solid var(--border-gray);
    }
    
    .featured-case-studies h2 {
        margin-bottom: var(--spacing-md);
    }
    
    .section-subtitle {
        text-align: center;
        font-size: 16px;
        color: #666;
        margin-bottom: var(--spacing-2xl);
    }
    
    .case-studies-showcase {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: var(--spacing-lg);
        margin: var(--spacing-2xl) 0;
    }
    
    .case-study-showcase-card {
        background: white;
        border: 1px solid var(--border-gray);
        border-radius: var(--radius-md);
        overflow: hidden;
        display: flex;
        flex-direction: column;
        transition: all 0.3s ease;
    }
    
    .case-study-showcase-card:hover {
        border-color: var(--primary-blue);
        box-shadow: var(--shadow-lg);
        transform: translateY(-4px);
    }
    
    .showcase-image {
        width: 100%;
        height: 200px;
        background: var(--light-gray);
        overflow: hidden;
    }
    
    .showcase-image img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    
    .showcase-content {
        padding: var(--spacing-lg);
        display: flex;
        flex-direction: column;
        flex-grow: 1;
    }
    
    .showcase-content h3 {
        margin-top: 0;
        margin-bottom: var(--spacing-sm);
        color: var(--primary-blue);
    }
    
    .city-year {
        font-size: 13px;
        color: #666;
        margin-bottom: var(--spacing-md);
    }
    
    .showcase-content p {
        margin-bottom: var(--spacing-md);
    }
    
    .showcase-challenges {
        display: flex;
        flex-wrap: wrap;
        gap: var(--spacing-sm);
        margin-bottom: var(--spacing-lg);
        flex-grow: 1;
    }
    
    .challenge-tag {
        display: inline-block;
        background: var(--secondary-blue);
        color: var(--primary-blue);
        padding: 3px 8px;
        border-radius: 3px;
        font-size: 11px;
        font-weight: 500;
    }
    
    .cta {
        background: var(--light-gray);
        padding: var(--spacing-3xl) 0;
        text-align: center;
        border-top: 1px solid var(--border-gray);
    }
    
    .cta h2 {
        margin-bottom: var(--spacing-md);
    }
    
    .cta p {
        font-size: 18px;
        color: #666;
        max-width: 600px;
        margin: 0 auto var(--spacing-2xl);
    }
    
    .cta-actions {
        display: flex;
        gap: var(--spacing-lg);
        justify-content: center;
        flex-wrap: wrap;
    }
    
    @media (max-width: 768px) {
        .hero {
            grid-template-columns: 1fr;
        }
        
        .hero-title {
            font-size: 32px;
        }
        
        .stats {
            grid-template-columns: repeat(2, 1fr);
        }
        
        .category-grid {
            grid-template-columns: repeat(2, 1fr);
        }
        
        .cta-actions {
            flex-direction: column;
        }
    }
</style>
