import React from "react";
import Navbar from "./Components/Navbar" 
import SearchAndFilter from "./Components/SearchAndFilter";
import CountryDivs from "./Components/CountryDivs";



export default function App() {

  const [countryData, setCountryData] = React.useState([]);


  React.useEffect(() => {
    fetch("https://restcountries.com/v2/all")
    .then(res => res.json())
    .then(data => setCountryData(data))
  }, [])

  const countries = countryData.map(country => {
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


  return (
    <div>
      < Navbar /> 
      < SearchAndFilter />
      <section className="grid-container">
        { countries}
      </section>
    </div>    
  )
}

