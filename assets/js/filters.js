// Filtering and Search Functionality

class ToolFilter {
    constructor(options = {}) {
        this.tools = [];
        this.filteredTools = [];
        this.activeFilters = {
            category: [],
            cost: [],
            skillLevel: [],
            coverage: []
        };
        
        this.toolsContainer = document.querySelector(options.container || '.tool-grid');
        this.filterForm = document.querySelector(options.filterForm || '.filter-form');
        this.searchInput = document.querySelector(options.searchInput || '.tool-search');
        
        this.init();
    }
    
    init() {
        this.loadTools();
        this.attachEventListeners();
        this.applyFromUrl();
        this.render();
    }

    applyFromUrl() {
        var params = new URLSearchParams(window.location.search);
        var category = params.get('category');
        if (!category) return;
        var checkbox = document.querySelector('[data-filter="category"][value="' + category + '"]');
        if (!checkbox) return;
        checkbox.checked = true;
        if (!this.activeFilters.category.includes(category)) {
            this.activeFilters.category.push(category);
        }
        // Open the filter panel so the active checkbox is visible
        var panel = document.querySelector('.filter-panel');
        if (panel) panel.classList.add('active');
        var toggle = document.querySelector('[data-toggle="filters"]');
        if (toggle) toggle.classList.add('active');
        this.applyFilters();
    }
    
    loadTools() {
        // Load tools from data attributes or fetch from API
        const toolElements = document.querySelectorAll('[data-tool]');
        this.tools = Array.from(toolElements).map(el => ({
            id: el.dataset.toolId,
            name: el.dataset.name,
            description: el.dataset.description,
            developer: el.dataset.developer,
            category: el.dataset.category ? el.dataset.category.split(',') : [],
            cost: el.dataset.cost || '',
            skillLevel: el.dataset.skillLevel || '',
            coverage: el.dataset.coverage ? el.dataset.coverage.split(',') : [],
            url: el.dataset.url || '',
            tags: el.dataset.tags ? el.dataset.tags.split(',') : [],
            element: el
        }));
        
        this.filteredTools = [...this.tools];
    }
    
    attachEventListeners() {
        // Category filters
        document.querySelectorAll('[data-filter="category"]').forEach(checkbox => {
            checkbox.addEventListener('change', (e) => this.handleFilterChange(e));
        });
        
        // Cost filters
        document.querySelectorAll('[data-filter="cost"]').forEach(checkbox => {
            checkbox.addEventListener('change', (e) => this.handleFilterChange(e));
        });
        
        // Skill level filters
        document.querySelectorAll('[data-filter="skillLevel"]').forEach(checkbox => {
            checkbox.addEventListener('change', (e) => this.handleFilterChange(e));
        });
        
        // Coverage filters
        document.querySelectorAll('[data-filter="coverage"]').forEach(checkbox => {
            checkbox.addEventListener('change', (e) => this.handleFilterChange(e));
        });
        
        // Search input
        if (this.searchInput) {
            this.searchInput.addEventListener('input', (e) => this.handleSearch(e));
        }
        
        // Reset button
        const resetBtn = document.querySelector('[data-action="reset-filters"]');
        if (resetBtn) {
            resetBtn.addEventListener('click', () => this.resetFilters());
        }
    }
    
    handleFilterChange(e) {
        const filterType = e.target.dataset.filter;
        const filterValue = e.target.value;
        
        if (e.target.checked) {
            if (!this.activeFilters[filterType].includes(filterValue)) {
                this.activeFilters[filterType].push(filterValue);
            }
        } else {
            this.activeFilters[filterType] = this.activeFilters[filterType].filter(v => v !== filterValue);
        }
        
        this.applyFilters();
    }
    
    handleSearch(e) {
        const query = e.target.value.toLowerCase();
        
        if (!query) {
            this.applyFilters();
            return;
        }
        
        const searchResults = this.tools.filter(tool => 
            tool.name.toLowerCase().includes(query) ||
            tool.description.toLowerCase().includes(query) ||
            tool.developer.toLowerCase().includes(query) ||
            tool.tags.some(tag => tag.toLowerCase().includes(query))
        );
        
        this.filteredTools = searchResults;
        this.render();
        this.updateResultsCount();
    }
    
    applyFilters() {
        let filtered = [...this.tools];
        
        // Apply category filter
        if (this.activeFilters.category.length > 0) {
            filtered = filtered.filter(tool =>
                tool.category.some(cat => this.activeFilters.category.includes(cat))
            );
        }
        
        // Apply cost filter
        if (this.activeFilters.cost.length > 0) {
            filtered = filtered.filter(tool =>
                this.activeFilters.cost.includes(tool.cost)
            );
        }
        
        // Apply skill level filter
        if (this.activeFilters.skillLevel.length > 0) {
            filtered = filtered.filter(tool =>
                this.activeFilters.skillLevel.includes(tool.skillLevel)
            );
        }
        
        // Apply coverage filter
        if (this.activeFilters.coverage.length > 0) {
            filtered = filtered.filter(tool =>
                tool.coverage.some(cov => this.activeFilters.coverage.includes(cov))
            );
        }
        
        this.filteredTools = filtered;
        this.render();
        this.updateResultsCount();
    }
    
    updateResultsCount() {
        const countElement = document.querySelector('[data-results-count]');
        if (countElement) {
            countElement.textContent = `${this.filteredTools.length} tool${this.filteredTools.length !== 1 ? 's' : ''}`;
        }
    }
    
    render() {
        if (!this.toolsContainer) return;
        
        if (this.filteredTools.length === 0) {
            this.toolsContainer.innerHTML = '<div class="no-results">No tools match your filters. Try adjusting your search criteria.</div>';
            return;
        }
        
        // Hide all tools
        this.tools.forEach(tool => {
            if (tool.element) tool.element.style.display = 'none';
        });
        
        // Show filtered tools
        this.filteredTools.forEach(tool => {
            if (tool.element) tool.element.style.display = '';
        });
        
        // Animate appearance
        this.filteredTools.forEach((tool, index) => {
            if (tool.element) {
                tool.element.style.animation = `fadeIn 0.3s ease ${index * 0.05}s forwards`;
            }
        });
    }
    
    resetFilters() {
        // Uncheck all checkboxes
        document.querySelectorAll('[data-filter]').forEach(checkbox => {
            checkbox.checked = false;
        });
        
        // Clear search
        if (this.searchInput) {
            this.searchInput.value = '';
        }
        
        // Reset active filters
        this.activeFilters = {
            category: [],
            cost: [],
            skillLevel: [],
            coverage: []
        };
        
        // Reset filtered tools
        this.filteredTools = [...this.tools];
        this.render();
        this.updateResultsCount();
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    var grid = document.querySelector('.tools-grid') || document.querySelector('.tool-grid');
    if (grid) {
        var containerClass = grid.classList.contains('tools-grid') ? '.tools-grid' : '.tool-grid';
        var searchClass = document.querySelector('.search__input') ? '.search__input' : '.tool-search';
        window.toolFilter = new ToolFilter({
            container: containerClass,
            filterForm: '.filter-form',
            searchInput: searchClass
        });
    }
});

// Smooth scroll to tools
function scrollToTools() {
    const toolsSection = document.querySelector('.tools-section');
    if (toolsSection) {
        toolsSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// Mobile filter toggle
document.addEventListener('DOMContentLoaded', () => {
    const filterToggle = document.querySelector('[data-toggle="filters"]');
    const filterPanel = document.querySelector('.filter-panel');
    
    if (filterToggle && filterPanel) {
        filterToggle.addEventListener('click', () => {
            filterPanel.classList.toggle('active');
            filterToggle.classList.toggle('active');
        });
        
        // Close filters when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.filter-container')) {
                filterPanel.classList.remove('active');
                filterToggle.classList.remove('active');
            }
        });
    }
});

// Animation keyframes
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .no-results {
        grid-column: 1 / -1;
        text-align: center;
        padding: 60px 20px;
        color: #999;
        font-size: 18px;
    }
`;
document.head.appendChild(style);
