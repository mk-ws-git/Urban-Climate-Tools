---
layout: default
title: Case Studies
---

<section class="tools-page case-studies-page">
    <div class="container">
        <div class="section__header">
            <h1 class="section__title">Urban Climate Case Studies</h1>
            <p class="section__description">Learn from cities around the world implementing climate adaptation and resilience solutions.</p>
        </div>

        <div class="tools__header">
            <div class="search">
                <div class="search__container">
                    <svg class="search__icon" viewBox="0 0 20 20" width="20" height="20">
                        <circle cx="8" cy="8" r="6" fill="none" stroke="currentColor" stroke-width="1.5"/>
                        <line x1="12.5" y1="12.5" x2="17.5" y2="17.5" stroke="currentColor" stroke-width="1.5"/>
                    </svg>
                    <input type="text" class="search__input case-study-search" placeholder="Search by city, country, or challenge..." autofocus>
                </div>
            </div>
            <div class="sort">
                <select class="sort-select" aria-label="Sort case studies">
                    <option value="relevance">Recommended</option>
                    <option value="year-desc">Newest</option>
                    <option value="year-asc">Oldest</option>
                    <option value="title-asc">Title (A–Z)</option>
                    <option value="title-desc">Title (Z–A)</option>
                </select>
            </div>
            <button class="btn btn--secondary filter-toggle" data-toggle="filters">
                <svg viewBox="0 0 20 20" width="16" height="16">
                    <line x1="2" y1="4" x2="18" y2="4" stroke="currentColor" stroke-width="1.5"/>
                    <line x1="4" y1="10" x2="16" y2="10" stroke="currentColor" stroke-width="1.5"/>
                    <line x1="7" y1="16" x2="13" y2="16" stroke="currentColor" stroke-width="1.5"/>
                </svg>
                Filters
            </button>
            <div class="tools__results">
                Results: <strong data-results-count>{{ site.data.case_studies | size }}</strong>
            </div>
        </div>
        
        <div class="tools__container">
            <aside class="filter-panel case-study-filter">
                <div class="filter-panel__header">
                    <h3 class="filter-panel__title">Filters</h3>
                    <button data-action="reset-filters" class="btn btn--ghost">Reset</button>
                </div>

                <form class="filter-form">
                    <div class="filter-group">
                        <h4 class="filter-group__title">Climate Challenge</h4>
                        <div class="filter-options">
                            <label class="filter-option">
                                <input type="checkbox" data-filter="challenge" value="urban heat">
                                <span class="filter-option__label">Urban Heat</span>
                            </label>
                            <label class="filter-option">
                                <input type="checkbox" data-filter="challenge" value="flooding">
                                <span class="filter-option__label">Flooding</span>
                            </label>
                            <label class="filter-option">
                                <input type="checkbox" data-filter="challenge" value="sea level rise">
                                <span class="filter-option__label">Sea Level Rise</span>
                            </label>
                            <label class="filter-option">
                                <input type="checkbox" data-filter="challenge" value="water scarcity">
                                <span class="filter-option__label">Water Scarcity</span>
                            </label>
                            <label class="filter-option">
                                <input type="checkbox" data-filter="challenge" value="air pollution">
                                <span class="filter-option__label">Air Pollution</span>
                            </label>
                        </div>
                    </div>

                    <div class="filter-group">
                        <h4 class="filter-group__title">Sector</h4>
                        <div class="filter-options">
                            <label class="filter-option">
                                <input type="checkbox" data-filter="sector" value="Green Infrastructure">
                                <span class="filter-option__label">Green Infrastructure</span>
                            </label>
                            <label class="filter-option">
                                <input type="checkbox" data-filter="sector" value="Urban Planning">
                                <span class="filter-option__label">Urban Planning</span>
                            </label>
                            <label class="filter-option">
                                <input type="checkbox" data-filter="sector" value="Transportation">
                                <span class="filter-option__label">Transportation</span>
                            </label>
                            <label class="filter-option">
                                <input type="checkbox" data-filter="sector" value="Water Management">
                                <span class="filter-option__label">Water Management</span>
                            </label>
                            <label class="filter-option">
                                <input type="checkbox" data-filter="sector" value="Energy">
                                <span class="filter-option__label">Energy</span>
                            </label>
                        </div>
                    </div>

                    <div class="filter-group">
                        <h4 class="filter-group__title">Region</h4>
                        <div class="filter-options">
                            <label class="filter-option">
                                <input type="checkbox" data-filter="region" value="North America">
                                <span class="filter-option__label">North America</span>
                            </label>
                            <label class="filter-option">
                                <input type="checkbox" data-filter="region" value="South America">
                                <span class="filter-option__label">South America</span>
                            </label>
                            <label class="filter-option">
                                <input type="checkbox" data-filter="region" value="Europe">
                                <span class="filter-option__label">Europe</span>
                            </label>
                            <label class="filter-option">
                                <input type="checkbox" data-filter="region" value="Asia">
                                <span class="filter-option__label">Asia</span>
                            </label>
                            <label class="filter-option">
                                <input type="checkbox" data-filter="region" value="Africa">
                                <span class="filter-option__label">Africa</span>
                            </label>
                        </div>
                    </div>
                </form>
            </aside>
            
            <main class="tools-grid case-studies-grid">
                {% for study in site.data.case_studies %}
                <div class="case-study-card" data-case-study
                     data-title="{{ study.title }}"
                     data-city="{{ study.city }}"
                     data-country="{{ study.country }}"
                     data-year="{{ study.year }}"
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

            <div class="pagination">
                <button class="btn btn--secondary load-more">Load more</button>
                <span class="pagination-info"></span>
            </div>
        </div>
    </div>
</div>

<script src="{{ site.baseurl }}/assets/js/case-study-filters.js"></script>
