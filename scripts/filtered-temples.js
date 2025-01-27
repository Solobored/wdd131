const temples = [
  {
      templeName: "Antofagasta Chile Temple",
      location: "Antofagasta, Chile",
      dedicated: "2025",
      area: 15000,
      imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/antofagasta-chile-temple/antofagasta-chile-temple-48608-main.jpg",
  },
  {
      templeName: "Alaska Temple",
      location: "Anchorage, Alaska, United States",
      dedicated: "1999, June, 9",
      area: 11937,
      imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/anchorage-alaska-temple/anchorage-alaska-temple-13886-main.jpg",
  },
  {
      templeName: "Concepción Chile Temple",
      location: "Concepción, Chile",
      dedicated: "2018, October, 28",
      area: 23095,
      imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/concepcion-chile-temple/concepcion-chile-temple-273-main.jpg",
  },
  {
      templeName: "Oakland Temple",
      location: "Oakland, California, United States",
      dedicated: "1964, November, 17",
      area: 95000,
      imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/oakland-california-temple/oakland-california-temple-2654-main.jpg",
  },
  {
      templeName: "Hong Kong Temple",
      location: "Hong Kong, China",
      dedicated: "1996, May, 26",
      area: 21744,
      imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/hong-kong-china-temple/hong-kong-china-temple-28125-main.jpg",
  },
  {
      templeName: "Mesa Arizona Temple",
      location: "Mesa, Arizona, United States",
      dedicated: "1927, October, 23",
      area: 113916,
      imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/mesa-arizona-temple/mesa-arizona-temple-46561-main.jpg",
  },
  {
      templeName: "Washington D.C. Temple",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 160000,
      imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/washington-d.c.-temple/washington-d.c.-temple-14992-main.jpg",
  },
  {
      templeName: "Thailand Temple",
      location: "Bangkok, Thailand",
      dedicated: "2019, October, 22",
      area: 48525,
      imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/bangkok-thailand-temple/bangkok-thailand-temple-40037-main.jpg",
  },
  {
      templeName: "Bengaluru India Temple",
      location: "Bengaluru, India",
      dedicated: "2027",
      area: 38670,
      imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/bengaluru-india-temple/bengaluru-india-temple-7886-main.jpg",
  }
];

function getYear(dedicatedDate) {
  if (dedicatedDate === "N/A") {
      return 0;
  }
  // If it's just a year (like "2027")
  if (!dedicatedDate.includes(",")) {
      return parseInt(dedicatedDate);
  }
  // If it's a full date (like "1999, June, 9")
  return parseInt(dedicatedDate.split(",")[0]);
}

function displayTemples(templeList) {
  const container = document.getElementById("temple-container");
  container.innerHTML = "";

  templeList.forEach((temple) => {
      const card = document.createElement("div");
      card.classList.add("temple-card");

      card.innerHTML = `
          <h2>${temple.templeName}</h2>
          <p>Location: ${temple.location}</p>
          <p>Dedicated: ${temple.dedicated}</p>
          <p>Area: ${temple.area.toLocaleString()} sq ft</p>
          <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
      `;

      container.appendChild(card);
  });
}

function filterTemples(filterType) {
  let filteredTemples = [];

  switch(filterType) {
      case 'old':
          // Temples before 2000
          filteredTemples = temples.filter(temple => {
              const year = getYear(temple.dedicated);
              return year > 0 && year < 2000;
          });
          break;
      case 'new':
          // Temples in 2000 or after
          filteredTemples = temples.filter(temple => {
              const year = getYear(temple.dedicated);
              return year >= 2000;
          });
          break;
      case 'large':
          // Temples larger than 25,000 sq ft
          filteredTemples = temples.filter(temple => temple.area > 25000);
          break;
      case 'small':
          // Temples smaller than 25,000 sq ft (excluding temples with 0 area)
          filteredTemples = temples.filter(temple => temple.area > 0 && temple.area <= 25000);
          break;
      default:
          filteredTemples = temples;
  }

  displayTemples(filteredTemples);
}

// Initialize page and update footer
document.addEventListener("DOMContentLoaded", () => {
  displayTemples(temples);
  updateFooter();
});

function updateFooter() {
  const footer = document.querySelector("footer");
  const currentYear = new Date().getFullYear();
  const lastModified = document.lastModified;
  
  footer.innerHTML = `
      <p>&copy; ${currentYear} | Your Name | Last Modified: ${lastModified}</p>
  `;
}