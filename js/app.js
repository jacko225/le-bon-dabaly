// Theme toggler
const themeToggle = document.querySelector('.theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.dataset.theme = body.dataset.theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', body.dataset.theme);
    updateThemeIcon();
});

function updateThemeIcon() {
    const icon = themeToggle.querySelector('i');
    if (body.dataset.theme === 'dark') {
        icon.className = 'fas fa-sun';
    } else {
        icon.className = 'fas fa-moon';
    }
}

// Load saved theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.dataset.theme = savedTheme;
    updateThemeIcon();
}

// Menu items
const menuItems = [
    {
        name: "Thiéboudienne",
        description: "Riz au poisson avec légumes, spécialité sénégalaise",
        price: "18€",
        image: "images/thieboudienne.jpg"
    },
    {
        name: "Yassa Poulet",
        description: "Poulet mariné aux oignons et citron",
        price: "16€",
        image: "images/yassa.jpg"
    },
    {
        name: "Mafé",
        description: "Ragoût à la sauce d'arachide",
        price: "17€",
        image: "images/mafe.jpg"
    }
];

// Load menu items
const menuGrid = document.querySelector('.menu-grid');
menuItems.forEach(item => {
    const menuItem = document.createElement('div');
    menuItem.className = 'menu-item fade-in';
    menuItem.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <h3>${item.name}</h3>
        <p>${item.description}</p>
        <span class="price">${item.price}</span>
    `;
    menuGrid.appendChild(menuItem);
});

// Gallery images
const galleryImages = [
    'restaurant-1.jpg',
    'dish-1.jpg',
    'restaurant-2.jpg',
    'dish-2.jpg',
    'restaurant-3.jpg',
    'dish-3.jpg'
];

// Load gallery images
const galleryGrid = document.querySelector('.gallery-grid');
galleryImages.forEach(image => {
    const galleryItem = document.createElement('div');
    galleryItem.className = 'gallery-item fade-in';
    galleryItem.innerHTML = `
        <img src="images/${image}" alt="Le Bon Dabaly">
    `;
    galleryGrid.appendChild(galleryItem);
});

// Reservation form handling
const reservationForm = document.getElementById('reservation-form');

reservationForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        date: document.getElementById('date').value,
        time: document.getElementById('time').value,
        guests: document.getElementById('guests').value
    };

    // Here you would typically send the form data to a server
    console.log('Réservation reçue:', formData);
    alert('Merci pour votre réservation! Nous vous contacterons bientôt pour la confirmation.');
    reservationForm.reset();
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
