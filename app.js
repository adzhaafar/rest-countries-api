

window.addEventListener('load', (event) => {
    
    const gridContainer = document.querySelector('.grid-container');

    //calls api to render country divs
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
        };
    
        
    };
    //gets specific info for country that is clicked
    async function extraInfo(country) {
        const response2 = await fetch(`https://restcountries.com/v2/name/${country}`);
        const data2 = await response2.json();
        console.log(country);
        console.log(data2[0].name);
    };

    // waits for all grid items to load, adds event listener to all divs
    const waitFunc = async () => {
        const result = await countryData()
        const gridItems = [...document.querySelectorAll(".grid-item")];
        gridItems.map((country) => {
            // console.log(country.children[1].innerText)
            country.addEventListener('click', () => {
                let countryName = country.children[1].innerText
                window.location.href = "country.html";
                extraInfo(countryName);
            })
        });
    };

    waitFunc();

});




    