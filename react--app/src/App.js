import React from "react";
import Navbar from "./Components/Navbar" 
import SearchBar from "./Components/SearchBar"
import FilterRegion from "./Components/FilterRegion"
import CountryDivs from "./Components/CountryDivs";



export default function App() {
  return (
    <div>
      < Navbar /> 
      < SearchBar />
      < FilterRegion />
      < CountryDivs /> 
    </div>    
  )
}