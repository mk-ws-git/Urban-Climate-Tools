---
layout: default
title: All Tools
---

<section class="tools-page">
    <div class="container">
        <div class="section__header">
            <h1 class="section__title">Urban Climate Tools</h1>
            <p class="section__description">Browse our comprehensive collection of open-source tools for building climate-resilient cities.</p>
        </div>

        <div class="tools__header">
            <div class="search">
                <div class="search__container">
                    <svg class="search__icon" viewBox="0 0 20 20" width="20" height="20">
                        <circle cx="8" cy="8" r="6" fill="none" stroke="currentColor" stroke-width="1.5"/>
                        <line x1="12.5" y1="12.5" x2="17.5" y2="17.5" stroke="currentColor" stroke-width="1.5"/>
                    </svg>
                    <input type="text" class="search__input" placeholder="Search by name, category, or developer..." autofocus>
                </div>
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
                Results: <strong data-results-count>{{ site.data.tools | size }}</strong>
            </div>
        </div>

        <div class="tools__container">
            <aside class="filter-panel">
                <div class="filter-panel__header">
                    <h3 class="filter-panel__title">Filters</h3>
                    <button data-action="reset-filters" class="btn btn--ghost">Reset</button>
                </div>

                <form class="filter-form">
                    <div class="filter-group">
                        <h4 class="filter-group__title">Category</h4>
                        <div class="filter-options">
                            <label class="filter-option">
                                <input type="checkbox" data-filter="category" value="heat">
                                <span class="filter-option__label">Heat Management</span>
                            </label>
                            <label class="filter-option">
                                <input type="checkbox" data-filter="category" value="flood">
                                <span class="filter-option__label">Flood Risk</span>
                            </label>
                            <label class="filter-option">
                                <input type="checkbox" data-filter="category" value="coastal">
                                <span class="filter-option__label">Coastal Resilience</span>
                            </label>
                            <label class="filter-option">
                                <input type="checkbox" data-filter="category" value="green">
                                <span class="filter-option__label">Green Infrastructure</span>
                            </label>
                            <label class="filter-option">
                                <input type="checkbox" data-filter="category" value="planning">
                                <span class="filter-option__label">Urban Planning</span>
                            </label>
                            <label class="filter-option">
                                <input type="checkbox" data-filter="category" value="data">
                                <span class="filter-option__label">Data & Analytics</span>
                            </label>
                            <label class="filter-option">
                                <input type="checkbox" data-filter="category" value="energy">
                                <span class="filter-option__label">Energy Efficiency</span>
                            </label>
                        </div>
                    </div>

                    <div class="filter-group">
                        <h4 class="filter-group__title">Cost</h4>
                        <div class="filter-options">
                            <label class="filter-option">
                                <input type="checkbox" data-filter="cost" value="Free">
                                <span class="filter-option__label">Free</span>
                            </label>
                            <label class="filter-option">
                                <input type="checkbox" data-filter="cost" value="Freemium">
                                <span class="filter-option__label">Freemium</span>
                            </label>
                            <label class="filter-option">
                                <input type="checkbox" data-filter="cost" value="Paid">
                                <span class="filter-option__label">Paid</span>
                            </label>
                        </div>
                    </div>

                    <div class="filter-group">
                        <h4 class="filter-group__title">Skill Level</h4>
                        <div class="filter-options">
                            <label class="filter-option">
                                <input type="checkbox" data-filter="skillLevel" value="Beginner">
                                <span class="filter-option__label">Beginner</span>
                            </label>
                            <label class="filter-option">
                                <input type="checkbox" data-filter="skillLevel" value="Intermediate">
                                <span class="filter-option__label">Intermediate</span>
                            </label>
                            <label class="filter-option">
                                <input type="checkbox" data-filter="skillLevel" value="Advanced">
                                <span class="filter-option__label">Advanced</span>
                            </label>
                        </div>
                    </div>

                    <div class="filter-group">
                        <h4 class="filter-group__title">Geographic Coverage</h4>
                        <div class="filter-options">
                            <label class="filter-option">
                                <input type="checkbox" data-filter="coverage" value="local">
                                <span class="filter-option__label">Local/Neighborhood</span>
                            </label>
                            <label class="filter-option">
                                <input type="checkbox" data-filter="coverage" value="city">
                                <span class="filter-option__label">City/Regional</span>
                            </label>
                            <label class="filter-option">
                                <input type="checkbox" data-filter="coverage" value="national">
                                <span class="filter-option__label">National</span>
                            </label>
                            <label class="filter-option">
                                <input type="checkbox" data-filter="coverage" value="global">
                                <span class="filter-option__label">Global</span>
                            </label>
                        </div>
                    </div>
                </form>
            </aside>

            <main class="tools-grid">
                {% for tool in site.data.tools %}
                <div class="tool-card" data-tool
                     data-tool-id="{{ tool.id }}"
                     data-save-id="{{ tool.id }}"
                     data-save-title="{{ tool.name }}"
                     data-save-url="{{ site.baseurl }}/tool/{{ tool.id }}/"
                     data-save-type="Tool"
                     data-name="{{ tool.name }}"
                     data-developer="{{ tool.developer }}"
                     data-description="{{ tool.description }}"
                     data-category="{{ tool.categories | join: ',' }}"
                     data-cost="{{ tool.cost }}"
                     data-skill-level="{{ tool.skillLevel }}"
                     data-coverage="{{ tool.coverage | join: ',' }}"
                     data-tags="{{ tool.tags | join: ',' }}">
                    {% include tool-card.html tool=tool %}
                </div>
                {% endfor %}
            </main>
        </div>
    </div>
</section>
