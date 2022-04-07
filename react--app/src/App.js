import React from "react";
import Navbar from "./Components/Navbar" 
import SearchAndFilter from "./Components/SearchAndFilter";
import CountryDivs from "./Components/CountryDivs";



export default function App() {

  // const [countryData, setCountryData] = React.useState({

  // })
  // call the api here

  return (
    <div>
      < Navbar /> 
      < SearchAndFilter />
      < CountryDivs /> 
    </div>    
  )
}