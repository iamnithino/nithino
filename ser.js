// script.js
const services = [
    {
        icon: 'fa-tree',
        title: 'Garden Planning & Design',
        description: 'Expert guidance on layout, plant selection, and seasonal planning for your dream garden.',
        features: ['Custom garden layouts', 'Plant selection advice', 'Seasonal planning', 'Sustainability consultation']
    },
    {
        icon: 'fa-leaf',
        title: 'Plant Care & Maintenance',
        description: 'Regular maintenance services to keep your garden healthy and thriving all year round.',
        features: ['Pruning & trimming', 'Pest control', 'Fertilization', 'Weed management']
    },
    {
        icon: 'fa-droplet',
        title: 'Irrigation Solutions',
        description: 'Smart watering systems and maintenance to ensure optimal plant hydration.',
        features: ['System design', 'Installation', 'Maintenance', 'Water conservation plans']
    },
    {
        icon: 'fa-screwdriver',
        title: 'Soil Management',
        description: 'Comprehensive soil testing and improvement services for optimal plant growth.',
        features: ['Soil testing', 'Composting', 'pH balancing', 'Nutrient management']
    },
    {
        icon: 'fa-calendar',
        title: 'Seasonal Services',
        description: 'Year-round support for your garden\'s changing needs through every season.',
        features: ['Spring preparation', 'Summer maintenance', 'Fall cleanup', 'Winter protection']
    },
    {
        icon: 'fa-clipboard-list',
        title: 'Garden Documentation',
        description: 'Detailed record-keeping and progress tracking for your garden\'s development.',
        features: ['Growth tracking', 'Maintenance logs', 'Photo documentation', 'Progress reports']
    }
];

function createServiceCard(service) {
    return `
        <div class="service-card">
            <div class="service-icon">
                <i class="fas ${service.icon}"></i>
            </div>
            <h3 class="service-title">${service.title}</h3>
            <p class="service-description">${service.description}</p>
            <ul class="features-list">
                ${service.features.map(feature => `<li>${feature}</li>`).join('')}
            </ul>
        </div>
    `;
}

function loadServices() {
    const servicesContainer = document.getElementById('servicesContainer');
    servicesContainer.innerHTML = services.map(service => createServiceCard(service)).join('');
}

function contactUs() {
    // Add your contact form logic here
    alert('Thank you for your interest! Our team will contact you soon.');
}

// Load services when the page loads
document.addEventListener('DOMContentLoaded', loadServices);
