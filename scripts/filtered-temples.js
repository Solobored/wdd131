// Array of Temple Objects
const temples = [
  {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
          "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
  },
  {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
          "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg",
  },
  {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
          "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg",
  },
  // Add more temples as needed
];

// Function to Display Temples
function displayTemples(templeList) {
  const container = document.getElementById("temple-container");
  container.innerHTML = ""; // Clear existing content

  templeList.forEach((temple) => {
      const card = document.createElement("div");
      card.classList.add("temple-card");

      card.innerHTML = `
          <h2>${temple.templeName}</h2>
          <p>Location: ${temple.location}</p>
          <p>Dedicated on: ${temple.dedicated}</p>
          <p>Area: ${temple.area.toLocaleString()} sq ft</p>
          <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
      `;

      container.appendChild(card);
  });
}

// Function to Filter Temples
function filterTemples(criteria) {
  let filteredTemples;

  switch (criteria) {
      case "old":
          filteredTemples = temples.filter(
              (temple) => new Date(temple.dedicated) < new Date("1900-01-01")
          );
          break;

      case "new":
          filteredTemples = temples.filter(
              (temple) => new Date(temple.dedicated) > new Date("2000-01-01")
          );
          break;

      case "large":
          filteredTemples = temples.filter((temple) => temple.area > 90000);
          break;

      case "small":
          filteredTemples = temples.filter((temple) => temple.area < 10000);
          break;

      default:
          filteredTemples = temples; // Show all temples for 'home'
          break;
  }

  displayTemples(filteredTemples);
}

// Display All Temples on Page Load
document.addEventListener("DOMContentLoaded", () => {
  displayTemples(temples);

  // Update Footer Information
  const footer = document.querySelector("footer");
  footer.innerHTML = `&copy; ${new Date().getFullYear()} | Last modified ${document.lastModified}`;
});
