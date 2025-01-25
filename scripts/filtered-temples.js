const temples = [
    {
        templeName: "Antofagasta Chile Temple",
        location: "Antofagasta, Chile",
        dedicated: "N/A",
        area: "N/A",
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/antofagasta-chile-temple/antofagasta-chile-temple-48608-main.jpg",
    },
    {
        templeName: "Alaska Temple",
        location: "Anchorage, Alaska, United States",
        dedicated: "1999, June, 9",
        area: "11.937 ft sq",
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/anchorage-alaska-temple/anchorage-alaska-temple-13886-main.jpg",
    },
    {
        templeName: "Concepción Chile Temple",
        location: "Concepción, Chile",
        dedicated: "2018, October, 28",
        area: "23.095 ft sq",
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/concepcion-chile-temple/concepcion-chile-temple-273-main.jpg",
    },
    {
        templeName: "Oakland Temple",
        location: "Oakland, California, United States",
        dedicated: "1964, November, 17",
        area: "95.000 ft sq",
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/oakland-california-temple/oakland-california-temple-2654-main.jpg",
    },
    {
        templeName: "Hong Kong Temple",
        location: "Hong Kong, China",
        dedicated: "1996, May, 26",
        area: "21.744 sq ft",
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/hong-kong-china-temple/hong-kong-china-temple-28125-main.jpg",
    },
    {
        templeName: "Mesa Arizona Temple",
        location: "Mesa, Arizona, United States",
        dedicated: "1927, October, 23",
        area: "113.916 sq ft",
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/mesa-arizona-temple/mesa-arizona-temple-46561-main.jpg",
    },
    {
        templeName: "Washington D.C. Temple",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: "160.000 sq ft",
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/washington-d.c.-temple/washington-d.c.-temple-14992-main.jpg",
    },
    {
        templeName: "Thailand Temple",
        location: "Bangkok, Thailand",
        dedicated: "2019, October, 22", 
        area: "48.525 sq ft", 
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/bangkok-thailand-temple/bangkok-thailand-temple-40037-main.jpg",
    },
    {
        templeName: "Bengaluru India Temple",
        location: "Bengaluru, India",
        dedicated: "Under planning", 
        area: "Under planning", 
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/bengaluru-india-temple/bengaluru-india-temple-7886-main.jpg"
    }
];
  
  function displayTemples(templeList) {
    const container = document.getElementById("temple-container");
    container.innerHTML = "";
  
    templeList.forEach((temple) => {
      const card = document.createElement("div");
      card.classList.add("temple-card");
  
      card.innerHTML = `
        <h2>${temple.templeName}</h2>
        <p>Location: ${temple.location}</p>
        <p>Dedicated on or Planning Status: ${temple.dedicated}</p>
        <p>Area (sq ft): ${temple.area}</p>
        <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
      `;
  
      container.appendChild(card);
    });
  }
  
  function filterTemples(filterType) {
    let filteredTemples = [];
  
    if (filterType === 'home') {
      filteredTemples = temples.filter((temple) => temple.type === 'home');
    } else if (filterType === 'old') {
      filteredTemples = temples.filter((temple) => temple.type === 'old');
    } else if (filterType === 'new') {
      filteredTemples = temples.filter((temple) => temple.type === 'new');
    } else if (filterType === 'large') {
      filteredTemples = temples.filter((temple) => temple.type === 'large');
    } else if (filterType === 'small') {
      filteredTemples = temples.filter((temple) => temple.type === 'small');
    } else {
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
    const lastModified = document.lastModified;
  
    footer.querySelector("#last-modified").textContent = lastModified;
  }