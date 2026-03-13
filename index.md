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
