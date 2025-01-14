// Update copyright year
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Update last modified date with formatted date string
const lastModified = new Date(document.lastModified);
const options = { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
};
document.getElementById('lastModified').textContent = lastModified.toLocaleDateString('en-US', options);

// Hamburger menu functionality
const hamburgerBtn = document.getElementById('hamburgerBtn');
const primaryNav = document.getElementById('primaryNav');

function toggleMenu() {
    const isOpen = primaryNav.classList.toggle('open');
    hamburgerBtn.setAttribute('aria-expanded', isOpen);
    hamburgerBtn.querySelector('.hamburger-icon').textContent = isOpen ? '✕' : '☰';
}

hamburgerBtn.addEventListener('click', toggleMenu);

// Close menu when clicking outside
document.addEventListener('click', (event) => {
    if (!hamburgerBtn.contains(event.target) && 
        !primaryNav.contains(event.target) && 
        primaryNav.classList.contains('open')) {
        toggleMenu();
    }
});

// Close menu when pressing Escape key
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && primaryNav.classList.contains('open')) {
        toggleMenu();
    }
});

