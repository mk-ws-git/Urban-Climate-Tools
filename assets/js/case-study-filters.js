// Case Study Filtering and Search Functionality

class CaseStudyFilter {
    constructor(options = {}) {
        this.caseStudies = [];
        this.filteredStudies = [];
        this.activeFilters = {
            challenge: [],
            sector: [],
            region: []
        };
        
        this.studiesContainer = document.querySelector(options.container || '.case-studies-grid');
        this.filterForm = document.querySelector(options.filterForm || '.filter-form');
        this.searchInput = document.querySelector(options.searchInput || '.case-study-search');
        
        this.init();
    }
    
    init() {
        this.loadCaseStudies();
        this.attachEventListeners();
        this.render();
    }
    
    loadCaseStudies() {
        const studyElements = document.querySelectorAll('[data-case-study]');
        this.caseStudies = Array.from(studyElements).map(el => ({
            id: el.dataset.id || '',
            title: el.dataset.title || '',
            city: el.dataset.city || '',
            country: el.dataset.country || '',
            sector: el.dataset.sector || '',
            challenges: el.dataset.challenges ? el.dataset.challenges.split(',').map(c => c.trim()) : [],
            region: el.dataset.region || '',
            element: el
        }));
        
        this.filteredStudies = [...this.caseStudies];
    }
    
    attachEventListeners() {
        // Challenge filters
        document.querySelectorAll('[data-filter="challenge"]').forEach(checkbox => {
            checkbox.addEventListener('change', (e) => this.handleFilterChange(e));
        });
        
        // Sector filters
        document.querySelectorAll('[data-filter="sector"]').forEach(checkbox => {
            checkbox.addEventListener('change', (e) => this.handleFilterChange(e));
        });
        
        // Region filters
        document.querySelectorAll('[data-filter="region"]').forEach(checkbox => {
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
        
        const searchResults = this.caseStudies.filter(study => 
            study.title.toLowerCase().includes(query) ||
            study.city.toLowerCase().includes(query) ||
            study.country.toLowerCase().includes(query) ||
            study.challenges.some(c => c.toLowerCase().includes(query))
        );
        
        this.filteredStudies = searchResults;
        this.render();
        this.updateResultsCount();
    }
    
    applyFilters() {
        let filtered = [...this.caseStudies];
        
        // Apply challenge filter
        if (this.activeFilters.challenge.length > 0) {
            filtered = filtered.filter(study =>
                study.challenges.some(c => this.activeFilters.challenge.includes(c))
            );
        }
        
        // Apply sector filter
        if (this.activeFilters.sector.length > 0) {
            filtered = filtered.filter(study =>
                this.activeFilters.sector.includes(study.sector)
            );
        }
        
        // Apply region filter
        if (this.activeFilters.region.length > 0) {
            filtered = filtered.filter(study =>
                this.activeFilters.region.includes(study.region)
            );
        }
        
        this.filteredStudies = filtered;
        this.render();
        this.updateResultsCount();
    }
    
    updateResultsCount() {
        const countElement = document.querySelector('[data-results-count]');
        if (countElement) {
            countElement.textContent = `${this.filteredStudies.length} case study${this.filteredStudies.length !== 1 ? 's' : ''}`;
        }
    }
    
    render() {
        if (!this.studiesContainer) return;
        
        if (this.filteredStudies.length === 0) {
            this.studiesContainer.innerHTML = '<div class="no-results">No case studies match your filters. Try adjusting your search criteria.</div>';
            return;
        }
        
        // Hide all studies
        this.caseStudies.forEach(study => {
            if (study.element) study.element.style.display = 'none';
        });
        
        // Show filtered studies
        this.filteredStudies.forEach(study => {
            if (study.element) study.element.style.display = '';
        });
        
        // Animate appearance
        this.filteredStudies.forEach((study, index) => {
            if (study.element) {
                study.element.style.animation = `fadeIn 0.3s ease ${index * 0.05}s forwards`;
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
            challenge: [],
            sector: [],
            region: []
        };
        
        // Reset filtered studies
        this.filteredStudies = [...this.caseStudies];
        this.render();
        this.updateResultsCount();
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector('.case-studies-grid')) {
        window.caseStudyFilter = new CaseStudyFilter({
            container: '.case-studies-grid',
            filterForm: '.filter-form',
            searchInput: '.case-study-search'
        });
    }
});

// Mobile filter toggle (match tools page behavior)
document.addEventListener('DOMContentLoaded', () => {
    const filterToggle = document.querySelector('[data-toggle="filters"]');
    const filterPanel = document.querySelector('.filter-panel');

    if (filterToggle && filterPanel) {
        filterToggle.addEventListener('click', () => {
            filterPanel.classList.toggle('active');
            filterToggle.classList.toggle('active');
        });

        document.addEventListener('click', (e) => {
            if (!e.target.closest('.filter-panel') && !e.target.closest('[data-toggle="filters"]')) {
                filterPanel.classList.remove('active');
                filterToggle.classList.remove('active');
            }
        });
    }
});

// Add animation keyframes
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
