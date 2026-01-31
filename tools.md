---
layout: default
title: All Tools
permalink: /tools/
---

<div class="tools-page">
    <div class="container">
        <h1>Urban Climate Tools</h1>
        <p class="lead">Browse our comprehensive collection of open-source tools for building climate-resilient cities.</p>
        
        <div class="tools-header">
            <div class="search-container">
                <svg class="search-icon" viewBox="0 0 20 20" width="20" height="20">
                    <circle cx="8" cy="8" r="6" fill="none" stroke="currentColor" stroke-width="1.5"/>
                    <line x1="12.5" y1="12.5" x2="17.5" y2="17.5" stroke="currentColor" stroke-width="1.5"/>
                </svg>
                <input type="text" class="tool-search" placeholder="Search by name, category, or developer..." autofocus>
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
                Results: <strong data-results-count>{{ site.data.tools | size }}</strong>
            </div>
        </div>
        
        <div class="tools-container">
            <aside class="filter-panel">
                <div class="filter-header">
                    <h3>Filters</h3>
                    <button data-action="reset-filters" class="btn-reset">Reset</button>
                </div>
                
                <form class="filter-form">
                    <div class="filter-group">
                        <h4>Category</h4>
                        <div class="filter-options">
                            <label>
                                <input type="checkbox" data-filter="category" value="heat">
                                <span>Heat Management</span>
                            </label>
                            <label>
                                <input type="checkbox" data-filter="category" value="flood">
                                <span>Flood Risk</span>
                            </label>
                            <label>
                                <input type="checkbox" data-filter="category" value="coastal">
                                <span>Coastal Resilience</span>
                            </label>
                            <label>
                                <input type="checkbox" data-filter="category" value="green">
                                <span>Green Infrastructure</span>
                            </label>
                            <label>
                                <input type="checkbox" data-filter="category" value="planning">
                                <span>Urban Planning</span>
                            </label>
                            <label>
                                <input type="checkbox" data-filter="category" value="data">
                                <span>Data & Analytics</span>
                            </label>
                            <label>
                                <input type="checkbox" data-filter="category" value="energy">
                                <span>Energy Efficiency</span>
                            </label>
                        </div>
                    </div>
                    
                    <div class="filter-group">
                        <h4>Cost</h4>
                        <div class="filter-options">
                            <label>
                                <input type="checkbox" data-filter="cost" value="Free">
                                <span>Free</span>
                            </label>
                            <label>
                                <input type="checkbox" data-filter="cost" value="Freemium">
                                <span>Freemium</span>
                            </label>
                            <label>
                                <input type="checkbox" data-filter="cost" value="Paid">
                                <span>Paid</span>
                            </label>
                        </div>
                    </div>
                    
                    <div class="filter-group">
                        <h4>Skill Level</h4>
                        <div class="filter-options">
                            <label>
                                <input type="checkbox" data-filter="skillLevel" value="Beginner">
                                <span>Beginner</span>
                            </label>
                            <label>
                                <input type="checkbox" data-filter="skillLevel" value="Intermediate">
                                <span>Intermediate</span>
                            </label>
                            <label>
                                <input type="checkbox" data-filter="skillLevel" value="Advanced">
                                <span>Advanced</span>
                            </label>
                        </div>
                    </div>
                    
                    <div class="filter-group">
                        <h4>Geographic Coverage</h4>
                        <div class="filter-options">
                            <label>
                                <input type="checkbox" data-filter="coverage" value="local">
                                <span>Local/Neighborhood</span>
                            </label>
                            <label>
                                <input type="checkbox" data-filter="coverage" value="city">
                                <span>City/Regional</span>
                            </label>
                            <label>
                                <input type="checkbox" data-filter="coverage" value="national">
                                <span>National</span>
                            </label>
                            <label>
                                <input type="checkbox" data-filter="coverage" value="global">
                                <span>Global</span>
                            </label>
                        </div>
                    </div>
                </form>
            </aside>
            
            <main class="tools-grid">
                {% for tool in site.data.tools %}
                <div class="tool-card" data-tool 
                     data-tool-id="{{ tool.id }}" 
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
</div>

<style>
    .tools-page {
        padding: var(--spacing-2xl) 0;
    }
    
    .tools-page h1 {
        margin-bottom: var(--spacing-md);
    }
    
    .tools-header {
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
    
    .tool-search {
        width: 100%;
        padding: var(--spacing-md) var(--spacing-md) var(--spacing-md) 40px;
        font-size: 14px;
        border: 1px solid var(--border-gray);
        border-radius: var(--radius-md);
        outline: none;
        transition: border-color 0.3s ease;
    }
    
    .tool-search:focus {
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
    
    .tools-container {
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
    
    .tools-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: var(--spacing-lg);
    }
    
    @media (max-width: 1024px) {
        .tools-container {
            grid-template-columns: 1fr;
        }
        
        .filter-panel {
            position: relative;
            top: 0;
        }
    }
    
    @media (max-width: 768px) {
        .tools-header {
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
            border-radius: 0;
        }
        
        .filter-panel.active {
            display: block;
        }
        
        .tools-grid {
            grid-template-columns: 1fr;
        }
    }
</style>

<script src="{{ site.baseurl }}/assets/js/filters.js"></script>
