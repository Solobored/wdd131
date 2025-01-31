document.addEventListener("DOMContentLoaded", () => {
    const temples = [
        { templeName: "Alaska Temple", location: "Anchorage, Alaska, United States", dedicated: "1999, June, 9", area: 11937, imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/anchorage-alaska-temple/anchorage-alaska-temple-13886-main.jpg" },
        { templeName: "Concepción Chile Temple", location: "Concepción, Chile", dedicated: "2018, October, 28", area: 23095, imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/concepcion-chile-temple/concepcion-chile-temple-273-main.jpg" },
        { templeName: "Taipen Taiwan", location: "Taipen, Taiwan", dedicated: "1983, November, 18", area: 9945, imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/taipei-taiwan-temple/taipei-taiwan-temple-8296-main.jpg" },
        { templeName: "Hong Kong Temple", location: "Hong Kong, China", dedicated: "1996, May, 26", area: 21744, imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/hong-kong-china-temple/hong-kong-china-temple-28125-main.jpg" },
        { templeName: "Lima Perú", location: "Lima, Perú", dedicated: "1986, January, 10", area: 9600, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg" },
        { templeName: "Washington D.C. Temple", location: "Kensington, Maryland, United States", dedicated: "1974, November, 19", area: 160000, imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/washington-d.c.-temple/washington-d.c.-temple-14992-main.jpg" },
        { templeName: "Thailand Temple", location: "Bangkok, Thailand", dedicated: "2019, October, 22", area: 48525, imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/bangkok-thailand-temple/bangkok-thailand-temple-40037-main.jpg" },
        { templeName: "Manti Utah", location: "Manti, Utah, United States", dedicated: "1888, May, 21", area: 74792, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg" },
        { templeName: "Salt Lake City", location: "Salt Lake City, Utah, United States", dedicated: "1893, April, 24", area: 382207, imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-15669-main.jpg" },
        {templeName: "Mexico City Mexico",location: "Mexico City, Mexico",dedicated: "1983, December, 2",area: 116642,imageUrl:"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"},
        { templeName: "Aba Nigeria",location: "Aba, Nigeria",dedicated: "2005, August, 7",area: 11500,imageUrl:"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"},
        {templeName: "Payson Utah",location: "Payson, Utah, United States",dedicated: "2015, June, 7",area: 96630,imageUrl:"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"},
        {templeName: "Yigo Guam",location: "Yigo, Guam",dedicated: "2020, May, 2",area: 6861,imageUrl:"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"}
    ];
    
    const container = document.getElementById("temple-container");
    const currentYearSpan = document.getElementById("currentyear");
    const lastModifiedSpan = document.getElementById("lastModified");
    const filters = { old: 1900, new: 2000, large: 90000, small: 10000 };
    
    function createTempleCard({ templeName, location, dedicated, area, imageUrl }) {
        return `<div class="temple-card">
            <img src="${imageUrl}" alt="${templeName}" loading="lazy" fetchpriority="low" width="300" height="169">
            <div class="temple-card-content">
                <h3>${templeName}</h3>
                <p>Location: ${location}</p>
                <p>Dedicated: ${dedicated}</p>
                <p>Area: ${area.toLocaleString()} square feet</p>
            </div>
        </div>`;
    }
    
    function displayTemples(filteredTemples) {
        container.replaceChildren(...filteredTemples.map(temple => {
            const div = document.createElement("div");
            div.innerHTML = createTempleCard(temple);
            return div.firstElementChild;
        }));
    }
    
    function filterTemples(type) {
        const result = temples.filter(({ dedicated, area }) => {
            const year = parseInt(dedicated.split(",")[0]);
            return type === "home" ? true :
                   type === "old" ? year > 0 && year < filters.old :
                   type === "new" ? year >= filters.new :
                   type === "large" ? area > filters.large :
                   type === "small" ? area <= filters.small : true;
        });
        displayTemples(result);
    }
    
    document.querySelectorAll(".navigation a").forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            filterTemples(link.id === "home-nav" ? "home" : link.id);
        });
    });
    
    currentYearSpan.textContent = new Date().getFullYear();
    lastModifiedSpan.textContent = document.lastModified;
    displayTemples(temples);
});
