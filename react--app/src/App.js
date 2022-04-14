import React from "react";
import Navbar from "./Components/Navbar" 
import CountryInfo from "./Pages/CountryInfo";
import Home from "./Pages/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import "./darkmode.js"

export default function App() {

  return (
  <Router> 
      < Navbar /> 
      <Routes>
        <Route path='/rest-countries-api' exact element={<Home/>}/>
        <Route path=':countryName' exact element={<CountryInfo />} />
      </Routes>
        <Outlet />
  </Router>  
  )
}


