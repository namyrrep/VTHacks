// Main JavaScript for Hokie Houses & Apartments

document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    const filterButtons = document.querySelectorAll('.filter-btn');

    // Add focus animation to search input
    searchInput.addEventListener('focus', function() {
        this.parentElement.style.boxShadow = '0 0 0 3px rgba(232, 119, 34, 0.4)';
    });

    searchInput.addEventListener('blur', function() {
        this.parentElement.style.boxShadow = '';
    });

    // Handle search functionality
    searchButton.addEventListener('click', function() {
        handleSearch();
    });

    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            handleSearch();
        }
    });

    // Add click events to filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // This would be connected to filter functionality later
            alert('Filter options will be connected to your agent.');
        });
    });

    // Add subtle animations on load
    animateElements();

    function handleSearch() {
        const searchTerm = searchInput.value.trim();
        
        if (searchTerm === '') {
            // Visual feedback for empty search
            searchInput.classList.add('shake');
            setTimeout(() => {
                searchInput.classList.remove('shake');
            }, 500);
            return;
        }

        // For now, just show an alert - this would connect to the agent later
        alert(`Searching for: ${searchTerm}\n\nThis will connect to your agent in the future.`);
    }

    function animateElements() {
        const header = document.querySelector('header');
        const searchContainer = document.querySelector('.search-container');
        const featuredSection = document.querySelector('.featured-section');

        // Simple fade-in animations
        header.style.opacity = '0';
        searchContainer.style.opacity = '0';
        featuredSection.style.opacity = '0';

        setTimeout(() => {
            header.style.transition = 'opacity 1s ease';
            header.style.opacity = '1';
        }, 100);

        setTimeout(() => {
            searchContainer.style.transition = 'opacity 1s ease';
            searchContainer.style.opacity = '1';
        }, 300);

        setTimeout(() => {
            featuredSection.style.transition = 'opacity 1s ease';
            featuredSection.style.opacity = '1';
        }, 600);
    }

    // Add a CSS rule for the shake animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes shake {
            0%, 100% { transform: translateX(0); }
            25% { transform: translateX(-5px); }
            50% { transform: translateX(5px); }
            75% { transform: translateX(-5px); }
        }
        
        .shake {
            animation: shake 0.4s ease-in-out;
        }
    `;
    document.head.appendChild(style);
});
