const temples = [
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
];

function getYear(dedicatedDate) {
    if (dedicatedDate === "N/A") return 0;
    return parseInt(dedicatedDate.split(",")[0]);
}

function createTempleCard(temple) {
    const card = document.createElement('div');
    card.className = 'temple-card';
    card.innerHTML = `
        <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy" width="300" height="169">
        <div class="temple-card-content">
            <h3>${temple.templeName}</h3>
            <p>Location: ${temple.location}</p>
            <p>Dedicated: ${temple.dedicated}</p>
            <p>Area: ${temple.area.toLocaleString()} square feet</p>
        </div>
    `;
    return card;
}

function displayTemples(templeList) {
    const container = document.getElementById("temple-container");
    const fragment = document.createDocumentFragment();
    templeList.forEach((temple) => {
        fragment.appendChild(createTempleCard(temple));
    });
    container.innerHTML = '';
    container.appendChild(fragment);
}

function filterTemples(filterType) {
    const filteredTemples = temples.filter(temple => {
        const year = getYear(temple.dedicated);
        switch(filterType) {
            case 'old': return year > 0 && year < 1900;
            case 'new': return year >= 2000;
            case 'large': return temple.area > 90000;
            case 'small': return temple.area > 0 && temple.area <= 10000;
            default: return true;
        }
    });
    displayTemples(filteredTemples);
}

function updateFooter() {
    document.getElementById("currentyear").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = document.lastModified;
}

document.addEventListener("DOMContentLoaded", () => {
    displayTemples(temples);
    updateFooter();

    const navItems = ['home-nav', 'old', 'new', 'large', 'small'];
    navItems.forEach(id => {
        document.getElementById(id).addEventListener("click", (e) => {
            e.preventDefault();
            filterTemples(id === 'home-nav' ? 'home' : id);
        });
    });
});