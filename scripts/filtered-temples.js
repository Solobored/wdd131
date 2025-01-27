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
      templeName: "Taipen Taiwan",
      location: "Taipen, Taiwan",
      dedicated: "1983, November, 18",
      area: 9945,
      imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/taipei-taiwan-temple/taipei-taiwan-temple-8296-main.jpg",
  },
  {
      templeName: "Hong Kong Temple",
      location: "Hong Kong, China",
      dedicated: "1996, May, 26",
      area: 21744,
      imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/hong-kong-china-temple/hong-kong-china-temple-28125-main.jpg",
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
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
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Salt Lake City",
    location: "Salt Lake City, Utah, United States",
    dedicated: "1893, April, 24",
    area: 382207,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-15669-main.jpg"
  },
  {
    templeName: "Nauvoo",
    location: "Nauvoo, Illinois, United States",
    dedicated: "1846, May, 3",
    area: 50000,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/nauvoo-temple/nauvoo-temple-3060-main.jpg"
  },
  {
    templeName: "Kirtland",
    location: "Kirtland, Ohio, United States",
    dedicated: "1836, March, 27",
    area: 15000,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/kirtland-temple/kirtland-temple-1275-main.jpg"
  },
  {
    templeName: "Logan Utah",
    location: "Logan, Utah, United States",
    dedicated: "1884, May, 19",
    area: 119619,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/logan-utah-temple/logan-utah-temple-40550-main.jpg"
  },
  {
    templeName: "St. George Utah",
    location: "St. George, Utah, United States",
    dedicated: "1877, April, 8",
    area: 143969,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/st.-george-utah-temple/st.-george-utah-temple-40435-main.jpg"
  },
];

function getYear(dedicatedDate) {
  if (dedicatedDate === "N/A") {
      return 0;
  }
  if (!dedicatedDate.includes(",")) {
      return parseInt(dedicatedDate);
  }
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
          filteredTemples = temples.filter(temple => {
              const year = getYear(temple.dedicated);
              return year > 0 && year < 1900;
          });
          break;
      case 'new':
          filteredTemples = temples.filter(temple => {
              const year = getYear(temple.dedicated);
              return year >= 2000;
          });
          break;
      case 'large':
          filteredTemples = temples.filter(temple => temple.area > 90000);
          break;
      case 'small':
          filteredTemples = temples.filter(temple => temple.area > 0 && temple.area <= 10000);
          break;
      default:
          filteredTemples = temples;
  }

  displayTemples(filteredTemples);
}

document.addEventListener("DOMContentLoaded", () => {
  displayTemples(temples);
  updateFooter();
});

function updateFooter() {
  const footer = document.querySelector("footer");
  const currentYear = new Date().getFullYear();
  const lastModified = document.lastModified;
  
  footer.innerHTML = `
      <p>&copy; ${currentYear} | Josue Neiculeo | Last Modified: ${lastModified}</p>
  `;
}