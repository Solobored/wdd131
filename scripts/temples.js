// Update copyright year
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Update last modified date
document.getElementById('lastModified').textContent = document.lastModified;

// Hamburger menu functionality
document.getElementById('hamburgerBtn').addEventListener('click', function() {
    document.getElementById('primaryNav').classList.toggle('open');
    const isOpen = document.getElementById('primaryNav').classList.contains('open');
    this.textContent = isOpen ? '✕' : '☰';
});

// Close menu when clicking outside
document.addEventListener('click', function(event) {
    const nav = document.getElementById('primaryNav');
    const btn = document.getElementById('hamburgerBtn');
    if (!nav.contains(event.target) && !btn.contains(event.target) && nav.classList.contains('open')) {
        nav.classList.remove('open');
        btn.textContent = '☰';
    }
});

