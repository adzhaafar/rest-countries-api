
//selectors
const gridContainer = document.querySelector('.grid-container')


async function countryData() {
    const response = await fetch('https://restcountries.com/v2/all');
    const data = await response.json();
    for (const country in data) {
        const countryGrid = document.createElement('div');
        gridContainer.appendChild(countryGrid);
        countryGrid.innerHTML = 
        `<div class="grid-item">
            <img class="flag" src="${data[country].flags.png}" alt="flag">
            <p class="country">${data[country].name}</p>
            <div class="extra-info">
                <p class="population"><b>Population:</b> ${data[country].population}</p>
                <p class="region"><b>Region:</b> ${data[country].region}</p>
                <p class="capital"><b>Capital:</b> ${data[country].capital}</p>
        </div>`
    }
}

countryData();


