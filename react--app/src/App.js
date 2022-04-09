import React from "react";
import Navbar from "./Components/Navbar" 
import CountryInfo from "./Pages/CountryInfo";
import Home from "./Pages/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link,
  Outlet,
  useParams,
  NavLink,
  useNavigate,
  useLocation,
} from "react-router-dom";

export default function App() {

  return (
  <Router> 
      < Navbar /> 
      <Routes>
        <Route path='/' exact element={<Home/>}/>
        <Route path=':countryName' exact element={<CountryInfo />} />
      </Routes>
        <Outlet />
  </Router>  
  )
}


