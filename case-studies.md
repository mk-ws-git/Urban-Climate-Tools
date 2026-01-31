---
layout: default
title: Case Studies
permalink: /case-studies/
---

<div class="case-studies-page">
    <div class="container">
        <h1>Urban Climate Case Studies</h1>
        <p class="lead">Learn from cities around the world implementing climate adaptation and resilience solutions.</p>
        
        <div class="case-studies-header">
            <div class="search-container">
                <svg class="search-icon" viewBox="0 0 20 20" width="20" height="20">
                    <circle cx="8" cy="8" r="6" fill="none" stroke="currentColor" stroke-width="1.5"/>
                    <line x1="12.5" y1="12.5" x2="17.5" y2="17.5" stroke="currentColor" stroke-width="1.5"/>
                </svg>
                <input type="text" class="case-study-search" placeholder="Search by city, country, or challenge..." autofocus>
            </div>
            <button class="filter-toggle" data-toggle="filters">
                <svg viewBox="0 0 20 20" width="16" height="16">
                    <line x1="2" y1="4" x2="18" y2="4" stroke="currentColor" stroke-width="1.5"/>
                    <line x1="4" y1="10" x2="16" y2="10" stroke="currentColor" stroke-width="1.5"/>
                    <line x1="7" y1="16" x2="13" y2="16" stroke="currentColor" stroke-width="1.5"/>
                </svg>
                Filters
            </button>
            <div class="results-info">
                Results: <strong data-results-count>{{ site.data.case_studies | size }}</strong>
            </div>
        </div>
        
        <div class="case-studies-container">
            <aside class="filter-panel">
                <div class="filter-header">
                    <h3>Filters</h3>
                    <button data-action="reset-filters" class="btn-reset">Reset</button>
                </div>
                
                <form class="filter-form">
                    <div class="filter-group">
                        <h4>Climate Challenge</h4>
                        <div class="filter-options">
                            <label>
                                <input type="checkbox" data-filter="challenge" value="urban heat">
                                <span>Urban Heat</span>
                            </label>
                            <label>
                                <input type="checkbox" data-filter="challenge" value="flooding">
                                <span>Flooding</span>
                            </label>
                            <label>
                                <input type="checkbox" data-filter="challenge" value="sea level rise">
                                <span>Sea Level Rise</span>
                            </label>
                            <label>
                                <input type="checkbox" data-filter="challenge" value="water scarcity">
                                <span>Water Scarcity</span>
                            </label>
                            <label>
                                <input type="checkbox" data-filter="challenge" value="air pollution">
                                <span>Air Pollution</span>
                            </label>
                        </div>
                    </div>
                    
                    <div class="filter-group">
                        <h4>Sector</h4>
                        <div class="filter-options">
                            <label>
                                <input type="checkbox" data-filter="sector" value="Green Infrastructure">
                                <span>Green Infrastructure</span>
                            </label>
                            <label>
                                <input type="checkbox" data-filter="sector" value="Urban Planning">
                                <span>Urban Planning</span>
                            </label>
                            <label>
                                <input type="checkbox" data-filter="sector" value="Transportation">
                                <span>Transportation</span>
                            </label>
                            <label>
                                <input type="checkbox" data-filter="sector" value="Water Management">
                                <span>Water Management</span>
                            </label>
                            <label>
                                <input type="checkbox" data-filter="sector" value="Energy">
                                <span>Energy</span>
                            </label>
                        </div>
                    </div>
                    
                    <div class="filter-group">
                        <h4>Region</h4>
                        <div class="filter-options">
                            <label>
                                <input type="checkbox" data-filter="region" value="North America">
                                <span>North America</span>
                            </label>
                            <label>
                                <input type="checkbox" data-filter="region" value="South America">
                                <span>South America</span>
                            </label>
                            <label>
                                <input type="checkbox" data-filter="region" value="Europe">
                                <span>Europe</span>
                            </label>
                            <label>
                                <input type="checkbox" data-filter="region" value="Asia">
                                <span>Asia</span>
                            </label>
                            <label>
                                <input type="checkbox" data-filter="region" value="Africa">
                                <span>Africa</span>
                            </label>
                        </div>
                    </div>
                </form>
            </aside>
            
            <main class="case-studies-grid">
                {% for study in site.data.case_studies %}
                <div class="case-study-card" data-case-study
                     data-title="{{ study.title }}"
                     data-city="{{ study.city }}"
                     data-country="{{ study.country }}"
                     data-sector="{{ study.sector }}"
                     data-challenges="{{ study.climate_challenges | join: ',' }}"
                     data-region="{% if study.country == 'United States' %}North America{% elsif study.country == 'Canada' %}North America{% elsif study.country == 'Colombia' %}South America{% elsif study.country == 'Netherlands' or study.country == 'France' or study.country == 'Denmark' %}Europe{% elsif study.country == 'Singapore' %}Asia{% else %}Global{% endif %}">
                    
                    {% if study.image_url %}
                    <div class="study-image">
                        <img src="{{ study.image_url }}" alt="{{ study.title }}" />
                        {% if study.featured %}
                        <span class="badge-featured">Featured</span>
                        {% endif %}
                    </div>
                    {% endif %}
                    
                    <div class="study-content">
                        <h3><a href="{{ site.baseurl }}/case-studies/{{ study.id }}/">{{ study.title }}</a></h3>
                        <p class="location">{{ study.city }}{% if study.state %}, {{ study.state }}{% endif %}, {{ study.country }} • {{ study.year }}</p>
                        <p class="description">{{ study.description }}</p>
                        
                        <div class="study-meta">
                            <div class="meta-item">
                                <span class="label">Sector:</span>
                                <span class="value">{{ study.sector }}</span>
                            </div>
                            <div class="meta-item">
                                <span class="label">Population:</span>
                                <span class="value">{{ study.population | default: "N/A" }}</span>
                            </div>
                        </div>
                        
                        {% if study.climate_challenges %}
                        <div class="challenges">
                            {% for challenge in study.climate_challenges %}
                            <span class="challenge-badge">{{ challenge }}</span>
                            {% endfor %}
                        </div>
                        {% endif %}
                        
                        <a href="{{ site.baseurl }}/case-studies/{{ study.id }}/" class="btn btn-primary btn-small">Read Case Study</a>
                    </div>
                </div>
                {% endfor %}
            </main>
        </div>
    </div>
</div>

<style>
    .case-studies-page {
        padding: var(--spacing-2xl) 0;
    }
    
    .case-studies-page h1 {
        margin-bottom: var(--spacing-md);
    }
    
    .case-studies-header {
        display: flex;
        gap: var(--spacing-lg);
        margin: var(--spacing-2xl) 0;
        align-items: center;
    }
    
    .search-container {
        flex: 1;
        position: relative;
    }
    
    .search-icon {
        position: absolute;
        left: var(--spacing-md);
        top: 50%;
        transform: translateY(-50%);
        color: #999;
    }
    
    .case-study-search {
        width: 100%;
        padding: var(--spacing-md) var(--spacing-md) var(--spacing-md) 40px;
        font-size: 14px;
        border: 1px solid var(--border-gray);
        border-radius: var(--radius-md);
        outline: none;
    }
    
    .case-study-search:focus {
        border-color: var(--primary-blue);
    }
    
    .filter-toggle {
        background: var(--light-gray);
        border: 1px solid var(--border-gray);
        padding: var(--spacing-md) var(--spacing-lg);
        border-radius: var(--radius-md);
        cursor: pointer;
        display: none;
        align-items: center;
        gap: var(--spacing-sm);
        font-weight: 500;
        color: var(--primary-blue);
    }
    
    .results-info {
        font-size: 14px;
        color: #666;
        white-space: nowrap;
    }
    
    .case-studies-container {
        display: grid;
        grid-template-columns: 250px 1fr;
        gap: var(--spacing-2xl);
    }
    
    .filter-panel {
        background: var(--light-gray);
        padding: var(--spacing-lg);
        border-radius: var(--radius-md);
        height: fit-content;
        position: sticky;
        top: 80px;
    }
    
    .filter-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: var(--spacing-lg);
    }
    
    .filter-header h3 {
        margin: 0;
        font-size: 16px;
    }
    
    .btn-reset {
        background: none;
        border: none;
        color: var(--primary-blue);
        font-size: 12px;
        cursor: pointer;
        text-decoration: underline;
    }
    
    .filter-group {
        margin-bottom: var(--spacing-lg);
        padding-bottom: var(--spacing-lg);
        border-bottom: 1px solid var(--border-gray);
    }
    
    .filter-group:last-child {
        border-bottom: none;
        margin-bottom: 0;
        padding-bottom: 0;
    }
    
    .filter-group h4 {
        font-size: 12px;
        text-transform: uppercase;
        color: var(--primary-blue);
        margin-bottom: var(--spacing-md);
        font-weight: 600;
    }
    
    .filter-options {
        display: flex;
        flex-direction: column;
        gap: var(--spacing-sm);
    }
    
    .filter-options label {
        display: flex;
        align-items: center;
        gap: var(--spacing-sm);
        cursor: pointer;
        font-size: 13px;
    }
    
    .filter-options input {
        width: 16px;
        height: 16px;
        cursor: pointer;
    }
    
    .case-studies-grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: var(--spacing-lg);
    }
    
    .case-study-card {
        display: grid;
        grid-template-columns: 280px 1fr;
        gap: var(--spacing-lg);
        background: white;
        border: 1px solid var(--border-gray);
        border-radius: var(--radius-md);
        overflow: hidden;
        transition: all 0.3s ease;
    }
    
    .case-study-card:hover {
        border-color: var(--primary-blue);
        box-shadow: var(--shadow-lg);
    }
    
    .study-image {
        height: 200px;
        background: var(--light-gray);
        position: relative;
        overflow: hidden;
    }
    
    .study-image img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    
    .badge-featured {
        position: absolute;
        top: var(--spacing-md);
        right: var(--spacing-md);
        background: var(--primary-blue);
        color: white;
        padding: 4px 12px;
        border-radius: 12px;
        font-size: 12px;
        font-weight: 600;
    }
    
    .study-content {
        padding: var(--spacing-lg);
        display: flex;
        flex-direction: column;
    }
    
    .study-content h3 {
        margin-top: 0;
        margin-bottom: var(--spacing-sm);
    }
    
    .study-content h3 a {
        color: var(--primary-blue);
    }
    
    .study-content h3 a:hover {
        text-decoration: underline;
    }
    
    .location {
        font-size: 13px;
        color: #666;
        margin-bottom: var(--spacing-md);
    }
    
    .description {
        margin-bottom: var(--spacing-md);
    }
    
    .study-meta {
        display: flex;
        gap: var(--spacing-lg);
        margin-bottom: var(--spacing-md);
    }
    
    .meta-item {
        font-size: 13px;
    }
    
    .meta-item .label {
        font-weight: 600;
        color: var(--primary-blue);
    }
    
    .challenges {
        display: flex;
        flex-wrap: wrap;
        gap: var(--spacing-sm);
        margin-bottom: var(--spacing-md);
    }
    
    .challenge-badge {
        display: inline-block;
        background: var(--secondary-blue);
        color: var(--primary-blue);
        padding: 4px 10px;
        border-radius: 4px;
        font-size: 12px;
        font-weight: 500;
    }
    
    @media (max-width: 1024px) {
        .case-studies-container {
            grid-template-columns: 1fr;
        }
        
        .filter-panel {
            position: relative;
            top: 0;
        }
    }
    
    @media (max-width: 768px) {
        .case-studies-header {
            flex-wrap: wrap;
        }
        
        .filter-toggle {
            display: flex;
        }
        
        .filter-panel {
            display: none;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: white;
            z-index: 1000;
            border: 1px solid var(--border-gray);
        }
        
        .filter-panel.active {
            display: block;
        }
        
        .case-study-card {
            grid-template-columns: 1fr;
        }
        
        .study-image {
            height: 200px;
        }
    }
</style>

<script src="{{ site.baseurl }}/assets/js/case-study-filters.js"></script>
