import React from "react"
import SearchAndFilter from "../Components/SearchAndFilter";
import CountryDivs from "../Components/CountryDivs";

export default function Home() {
    // state of api response
    const [countryData, setCountryData] = React.useState([]);
    // state of input value of search input
    const [inputData, setInputData] = React.useState('');
    // state of the region chosen by user
    const [region, setRegion] = React.useState('');
    // sets state of input field being cliked vs dropdown items to use the right feature
    const [isClicked, setIsClicked] = React.useState(false);


    // get data from api
    React.useEffect(() => {
        fetch("https://restcountries.com/v2/all")
            .then(res => res.json())
            .then(data => setCountryData(data))
    }, [])



    // only render out country divs that's name includes what user typed in (inputData), on blank inputData render out all country divs (result contains only those country divs that need to be rendered)
    const result = countryData.filter(country => {
        if (inputData === "") {
            return country
        } else if (country.name.toLowerCase().includes(inputData.toLowerCase())) {
            return country
        }
    })
    // result countries rendering, passing props to CountryDivs component
    const countries = result.map(country => {
        return (
            <CountryDivs
                key={country.name}
                flag={country.flags.png}
                name={country.name}
                population={country.population}
                region={country.region}
                capital={country.capital} />
        )
    })
  
    // array of all countries based on regions filter
    const resultRegion = countryData.filter(country => {
        if (region === "") {
            return country
        }
        else if (country.region === region) {
            return country
        }
    })
  
    // result countries rendering, passing props to CountryDivs component
    const countriesByRegion = resultRegion.map(country => {
        return (
            <CountryDivs
                key={country.name}
                flag={country.flags.png}
                name={country.name}
                population={country.population}
                region={country.region}
                capital={country.capital} />
        )
    })


    function trueToFalse() {
        setIsClicked(false)
    }
  
    function falseToTrue() {
        setIsClicked(true)
    }

    return (
        <div>
            < SearchAndFilter handleClick2={falseToTrue} handleClick={trueToFalse} changeRegion={setRegion} changeData={setInputData} value={inputData} />
            <section className="grid-container">
                {isClicked ? countries : countriesByRegion}
            </section>
        </div>
    )
}

