import React from "react";
import Navbar from "./Components/Navbar" 
import CountryInfo from "./Pages/CountryInfo";
import Home from "./Pages/Home";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

export default function App() {

  return (
  <Router> 
      < Navbar /> 
      <Routes>
        <Route path='/' exact element={<Home/>}/>
        <Route path='/country-info' exact element={<CountryInfo/>}/>
      </Routes>
  </Router>  
  )
}

