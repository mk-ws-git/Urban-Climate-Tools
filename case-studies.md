---
layout: default
title: Case Studies
permalink: /case-studies/
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
                    <button type="button" class="search__clear" aria-label="Clear search" style="display:none">&times;</button>
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
                <strong data-results-count>{{ site.data.case_studies | size }}</strong> case studies
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
                        <h4 class="filter-group__title">User Type</h4>
                        <div class="filter-options">
                            <label class="filter-option">
                                <input type="checkbox" data-filter="userCategory" value="city-officials">
                                <span class="filter-option__label">City Officials</span>
                            </label>
                            <label class="filter-option">
                                <input type="checkbox" data-filter="userCategory" value="researchers">
                                <span class="filter-option__label">Researchers</span>
                            </label>
                            <label class="filter-option">
                                <input type="checkbox" data-filter="userCategory" value="community">
                                <span class="filter-option__label">Community</span>
                            </label>
                        </div>
                    </div>

                    <div class="filter-group">
                        <h4 class="filter-group__title">Continent</h4>
                        <div class="filter-options">
                            <label class="filter-option">
                                <input type="checkbox" data-filter="continent" value="North America">
                                <span class="filter-option__label">North America</span>
                            </label>
                            <label class="filter-option">
                                <input type="checkbox" data-filter="continent" value="South America">
                                <span class="filter-option__label">South America</span>
                            </label>
                            <label class="filter-option">
                                <input type="checkbox" data-filter="continent" value="Europe">
                                <span class="filter-option__label">Europe</span>
                            </label>
                            <label class="filter-option">
                                <input type="checkbox" data-filter="continent" value="Asia">
                                <span class="filter-option__label">Asia</span>
                            </label>
                            <label class="filter-option">
                                <input type="checkbox" data-filter="continent" value="Africa">
                                <span class="filter-option__label">Africa</span>
                            </label>
                            <label class="filter-option">
                                <input type="checkbox" data-filter="continent" value="Oceania">
                                <span class="filter-option__label">Oceania</span>
                            </label>
                        </div>
                    </div>

                    <div class="filter-group">
                        <h4 class="filter-group__title">Country</h4>
                        <select class="filter-select filter-select--country" data-filter="country">
                            <option value="">All countries</option>
                            {% assign cs_countries = site.data.case_studies | map: 'country' | compact | uniq | sort %}
                            {% for c in cs_countries %}
                            <option value="{{ c }}">{{ c }}</option>
                            {% endfor %}
                        </select>
                    </div>
                </form>
            </aside>
            
            <main class="tools-grid case-studies-grid">
                {% for study in site.data.case_studies %}
                <div class="case-study-card" data-case-study
                     data-save-id="{{ study.id }}"
                     data-save-title="{{ study.title }}"
                     data-save-url="{{ site.baseurl }}/case-study/{{ study.id }}/"
                     data-save-type="Case Study"
                     data-title="{{ study.title }}"
                     data-city="{{ study.city }}"
                     data-country="{{ study.country }}"
                     data-year="{{ study.year }}"
                     data-sector="{{ study.sector }}"
                     data-challenges="{{ study.climate_challenges | join: ',' }}"
                     data-continent="{{ study.continent }}"
                     data-user-category="{{ study.user_categories | join: ',' }}"
                     data-region="{{ study.continent }}">
                    
                    {% if study.image_url %}
                    <img class="case-study-card__image" src="{{ study.image_url }}" alt="{{ study.title }}">
                    {% endif %}
                    <div class="case-study-card__content">
                        {% if study.featured %}<span class="case-study-card__badge">Featured</span>{% endif %}
                        <h3><a href="{{ site.baseurl }}/case-study/{{ study.id }}/">{{ study.title }}</a></h3>
                        <p class="case-study-card__location">{{ study.city }}{% if study.state %}, {{ study.state }}{% endif %}, {{ study.country }} &middot; {{ study.year }}</p>
                        <p class="case-study-card__description">{{ study.description }}</p>
                        <div class="case-study-card__meta">
                            <span class="case-study-card__meta-label">Sector</span> {{ study.sector }}
                            {% if study.population %}&ensp;&middot;&ensp;<span class="case-study-card__meta-label">Pop.</span> {{ study.population }}{% endif %}
                        </div>
                        {% if study.climate_challenges %}
                        <div class="case-study-card__tags">
                            {% for challenge in study.climate_challenges %}
                            <span class="case-study-card__tag">{{ challenge }}</span>
                            {% endfor %}
                        </div>
                        {% endif %}
                        <a href="{{ site.baseurl }}/case-study/{{ study.id }}/" class="case-study-card__link">Read Case Study →</a>
                    </div>
                    <button class="save-btn" data-save-btn aria-label="Save">
                        <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>
                    </button>
                </div>
                {% endfor %}
            </main>

            <div class="pagination">
                <button class="btn btn--secondary load-more">Load more</button>
                <span class="pagination-info"></span>
            </div>
        </div>
    </div>
</section>

<script src="{{ site.baseurl }}/assets/js/case-study-filters.js"></script>
