---
layout: default
title: Urban Climate Tools
---

<section class="hero">
    <div class="hero__container">
        <div class="hero__content">
            <h1 class="hero__title">Urban Climate Adaptation Tools</h1>
            <p class="hero__subtitle">Open-source solutions for building climate-resilient cities</p>
            <div class="hero__actions">
                <a href="#tools" class="btn btn--primary btn--lg">Browse Tools</a>
                <a href="{{ '/about/' | relative_url }}" class="btn btn--secondary btn--lg">Learn More</a>
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
    <div class="container">
        <h2>Explore by Category</h2>
        <div class="category-grid">
            <a href="{{ site.baseurl }}/categories/heat.html" class="category-card">
                <div class="category-icon">
                    <svg viewBox="0 0 100 100">
                        <rect x="30" y="20" width="40" height="60" fill="none" stroke="#0051BA" stroke-width="2"/>
                        <line x1="40" y1="30" x2="40" y2="75" stroke="#0051BA" stroke-width="1.5" opacity="0.5"/>
                        <line x1="50" y1="25" x2="50" y2="75" stroke="#0051BA" stroke-width="2"/>
                        <line x1="60" y1="30" x2="60" y2="75" stroke="#0051BA" stroke-width="1.5" opacity="0.5"/>
                    </svg>
                </div>
                <h3>Heat Management</h3>
                <p>Urban heat island mitigation</p>
            </a>
            
            <a href="{{ site.baseurl }}/categories/flood.html" class="category-card">
                <div class="category-icon">
                    <svg viewBox="0 0 100 100">
                        <path d="M 20 70 Q 30 50 40 60 T 60 55 T 80 70" fill="#0051BA" opacity="0.4"/>
                        <path d="M 15 80 Q 25 60 35 75 T 55 70 T 85 80" fill="#0051BA" opacity="0.6"/>
                    </svg>
                </div>
                <h3>Flood Risk</h3>
                <p>Stormwater and flooding solutions</p>
            </a>
            
            <a href="{{ site.baseurl }}/categories/coastal.html" class="category-card">
                <div class="category-icon">
                    <svg viewBox="0 0 100 100">
                        <path d="M 10 60 Q 30 40 50 55 T 90 50" stroke="#0051BA" stroke-width="2" fill="none"/>
                        <path d="M 15 70 Q 35 55 55 70 T 95 65" stroke="#0051BA" stroke-width="1.5" fill="none" opacity="0.7"/>
                    </svg>
                </div>
                <h3>Coastal Resilience</h3>
                <p>Sea level rise adaptation</p>
            </a>
            
            <a href="{{ site.baseurl }}/categories/green.html" class="category-card">
                <div class="category-icon">
                    <svg viewBox="0 0 100 100">
                        <path d="M 50 80 L 50 40" stroke="#0051BA" stroke-width="2"/>
                        <ellipse cx="50" cy="30" rx="15" ry="20" fill="#0051BA" opacity="0.6"/>
                        <ellipse cx="35" cy="40" rx="12" ry="18" fill="#0051BA" opacity="0.4"/>
                        <ellipse cx="65" cy="40" rx="12" ry="18" fill="#0051BA" opacity="0.4"/>
                    </svg>
                </div>
                <h3>Green Infrastructure</h3>
                <p>Nature-based solutions</p>
            </a>
            
            <a href="{{ site.baseurl }}/categories/planning.html" class="category-card">
                <div class="category-icon">
                    <svg viewBox="0 0 100 100">
                        <rect x="20" y="25" width="25" height="25" stroke="#0051BA" stroke-width="2" fill="none"/>
                        <rect x="55" y="25" width="25" height="25" stroke="#0051BA" stroke-width="2" fill="none"/>
                        <rect x="20" y="60" width="25" height="25" stroke="#0051BA" stroke-width="2" fill="none"/>
                        <rect x="55" y="60" width="25" height="25" stroke="#0051BA" stroke-width="2" fill="none"/>
                    </svg>
                </div>
                <h3>Urban Planning</h3>
                <p>Resilience planning tools</p>
            </a>
            
            <a href="{{ site.baseurl }}/categories/data.html" class="category-card">
                <div class="category-icon">
                    <svg viewBox="0 0 100 100">
                        <rect x="15" y="70" width="15" height="15" fill="#0051BA"/>
                        <rect x="37" y="50" width="15" height="35" fill="#0051BA" opacity="0.7"/>
                        <rect x="59" y="30" width="15" height="55" fill="#0051BA" opacity="0.5"/>
                        <rect x="81" y="45" width="4" height="40" fill="#0051BA" opacity="0.3"/>
                    </svg>
                </div>
                <h3>Data & Analytics</h3>
                <p>Climate data platforms</p>
            </a>
            
            <a href="{{ site.baseurl }}/categories/energy.html" class="category-card">
                <div class="category-icon">
                    <svg viewBox="0 0 100 100">
                        <path d="M 50 15 L 35 50 L 50 45 L 65 80 L 50 50 Z" fill="#0051BA" opacity="0.6"/>
                        <circle cx="50" cy="60" r="8" fill="none" stroke="#0051BA" stroke-width="2"/>
                    </svg>
                </div>
                <h3>Energy Efficiency</h3>
                <p>Energy modeling & tracking</p>
            </a>
            
            <a href="{{ site.baseurl }}/categories/other.html" class="category-card">
                <div class="category-icon">
                    <svg viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="35" stroke="#0051BA" stroke-width="2" fill="none"/>
                        <circle cx="50" cy="50" r="5" fill="#0051BA"/>
                        <circle cx="70" cy="35" r="3" fill="#0051BA" opacity="0.5"/>
                        <circle cx="30" cy="65" r="3" fill="#0051BA" opacity="0.5"/>
                    </svg>
                </div>
                <h3>Other Tools</h3>
                <p>Additional resources</p>
            </a>
        </div>
    </div>
</section>

<section class="featured-tools">
    <div class="container">
        <h2>Featured Tools</h2>
        <div class="tool-grid">
            {% for tool in site.data.tools | slice: 0, 6 %}
            <div class="tool-card" data-tool data-tool-id="{{ tool.id }}" data-name="{{ tool.name }}" data-developer="{{ tool.developer }}" data-description="{{ tool.description }}" data-category="{{ tool.categories | join: ',' }}">
                <div class="card-header">
                    <div class="card-icon">
                        <svg class="icon-md" viewBox="0 0 64 64">
                            <circle cx="32" cy="32" r="28" stroke="#0051BA" stroke-width="2" fill="none"/>
                            <circle cx="32" cy="32" r="20" stroke="#0051BA" stroke-width="1" fill="none" opacity="0.5"/>
                            <circle cx="32" cy="32" r="5" fill="#0051BA"/>
                        </svg>
                    </div>
                    <div class="card-badges">
                        {% for category in tool.categories %}
                        <span class="badge">{{ category }}</span>
                        {% endfor %}
                    </div>
                </div>
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
