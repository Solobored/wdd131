// Update review count
function updateReviewCount() {
  const reviewCount = parseInt(localStorage.getItem('reviewCount') || '0') + 1;
  localStorage.setItem('reviewCount', reviewCount.toString());
  
  const countElement = document.getElementById('reviewCount');
  countElement.textContent = `Total Reviews Submitted: ${reviewCount}`;
}

// Update last modified date
function updateLastModified() {
  const lastModified = document.getElementById('lastModified');
  const now = new Date();
  lastModified.textContent = now.toLocaleString();
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
  updateReviewCount();
  updateLastModified();
});