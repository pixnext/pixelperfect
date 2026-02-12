// Cart State
let cart = [];
let currentSlide = 0;
let slideInterval;

// Hero Carousel Images (Natural Landscapes)
const heroImages = [
    'http://static.photos/nature/1024x576/101',
    'http://static.photos/nature/1024x576/102',
    'http://static.photos/nature/1024x576/103',
    'http://static.photos/nature/1024x576/104',
    'http://static.photos/nature/1024x576/105'
];

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initHeroCarousel();
    loadCart();
    updateCartUI();
    lucide.createIcons();
});

// Hero Carousel Functions
function initHeroCarousel() {
    const container = document.getElementById('hero-carousel');
    const indicators = document.getElementById('carousel-indicators');
    
    // Create slides
    heroImages.forEach((img, index) => {
        const slide = document.createElement('div');
        slide.className = `hero-slide ${index === 0 ? 'active' : ''}`;
        slide.innerHTML = `<img src="${img}" alt="Landscape ${index + 1}" class="w-full h-full object-cover">`;
        container.appendChild(slide);
        
        // Create indicator
        const indicator = document.createElement('button');
        indicator.className = `w-3 h-3 rounded-full transition-all ${index === 0 ? 'bg-emerald-500 w-8' : 'bg-white/50 hover:bg-white'}`;
        indicator.onclick = () => goToSlide(index);
        indicators.appendChild(indicator);
    });
    
    // Start auto-play
    startSlideTimer();
}

function updateIndicators() {
    const indicators = document.getElementById('carousel-indicators');
}