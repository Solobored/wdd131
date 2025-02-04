const products = [
  {
      id: "fc-1888",
      name: "flux capacitor",
      averagerating: 4.5
  },
  {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
  },
  {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
  },
  {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
  },
  {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
  }
];

// Populate product select options
function populateProducts() {
  const selectElement = document.getElementById('product');
  products.forEach(product => {
      const option = document.createElement('option');
      option.value = product.id;
      option.textContent = product.name.charAt(0).toUpperCase() + product.name.slice(1);
      selectElement.appendChild(option);
  });
}

// Update last modified date
function updateLastModified() {
  const lastModified = document.getElementById('lastModified');
  const now = new Date();
  lastModified.textContent = now.toLocaleString();
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
  populateProducts();
  updateLastModified();
});

// Create review.html JavaScript for localStorage counter
if (window.location.pathname.includes('review.html')) {
  let reviewCount = parseInt(localStorage.getItem('reviewCount') || '0');
  reviewCount++;
  localStorage.setItem('reviewCount', reviewCount.toString());
  
  // Display the count
  const countDisplay = document.createElement('p');
  countDisplay.textContent = `Total Reviews Submitted: ${reviewCount}`;
  document.body.appendChild(countDisplay);
}