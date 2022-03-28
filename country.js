// gets specific info for the country that is clicked
    async function extraInfo(country) {
        const response2 = await fetch(`https://restcountries.com/v2/name/${country}`);
        const data2 = await response2.json();
        console.log(data2);
        console.log(data2[0].name);
        const mainFlexContainer = document.querySelector('.main-flex-container');
        // console.log(mainFlexContainer);
        mainFlexContainer.innerHTML =
            `
        <img src="${data2[0].flags.png}" alt="flag" class="flag-big">
        <div class="second-row">
            <h3 class="country">${data2[0].name}</h3>
            <p class="native-name"><b>Native Name:</b> ${data2[0].nativeName}</p>
            <p class="population"><b>Population:</b> ${data2[0].population}</p>
            <p class="region"><b>Region:</b> ${data2[0].region}</p>
            <p class="sub-region"><b>Sub Region:</b> ${data2[0].regionalBlocs.subregion}</p>
            <p class="capital"><b>Capital:</b> ${data2[0].callingCodes.capital}</p>
        </div>
        <div class="third-row">
            <p class="top-level-domain"><b>Top Level Domain:</b> ${data2[0].topLevelDomain}</p>
            <p class="currencies"><b>Currencies:</b> ${data2[0].currencies.name}</p>
            <p class="languages"><b>Languages:</b> ${data2[0].languages.name}</p>
        </div>
        <div class="border-countries">
            <div class="title"><b>Border Countries:</b>                
                <button class="border-country">${data2[0].langauges.name}</button>
                <button class="border-country">${data2[0].langauges.name}</button>
                <button  class="border-country">${data2[0].langauges.name}</button>
            </div>
        </div> `;

    };

    // waits for all grid items to load, adds event listener to all divs
    const waitFunc = async () => {
        // const result = await countryData()
        const gridItems = [...document.querySelectorAll(".grid-item")];
        gridItems.map((country) => {
            // console.log(country.children[1].innerText)
            country.addEventListener('click', () => {
                let countryName = country.children[1].innerText
                // window.location.href = "country.html";
                extraInfo(countryName);
            })
        });
    };

waitFunc();

