document.getElementById('currentYear').textContent = new Date().getFullYear();

const lastModified = new Date(document.lastModified);
const options = { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
};
document.getElementById('lastModified').textContent = lastModified.toLocaleDateString('en-US', options);

const hamburgerBtn = document.getElementById('hamburgerBtn');
const primaryNav = document.getElementById('primaryNav');

function toggleMenu() {
    const isOpen = primaryNav.classList.toggle('open');
    hamburgerBtn.setAttribute('aria-expanded', isOpen);
    hamburgerBtn.querySelector('.hamburger-icon').textContent = isOpen ? '✕' : '☰';
}

hamburgerBtn.addEventListener('click', toggleMenu);

document.addEventListener('click', (event) => {
    if (!hamburgerBtn.contains(event.target) && 
        !primaryNav.contains(event.target) && 
        primaryNav.classList.contains('open')) {
        toggleMenu();
    }
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && primaryNav.classList.contains('open')) {
        toggleMenu();
    }
});

