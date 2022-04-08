import React from "react";
import {Link} from "react-router-dom"

import "./Styles/CountryDivs.css"

export default function CountryDivs(props) {

    return (
        <Link style={{ textDecoration: 'none', color: 'inherit' }} to="/country-info">
            <div className="white-background border-radius box-shadow grid-item">
                <img className="flag" src={props.flag} alt="flag"></img>
                    <p className="country-name line-space-big fs-large fw-dark letter-spacing">{props.name}</p>
                <div className="country-info">
                        <p className="line-space fs-medium fw-light"><span className="fw-dark">Population: </span>{props.population}</p>
                        <p className="line-space fs-medium fw-light"><span className="fw-dark">Region: </span>{props.region}</p>
                        <p className="line-space fs-medium fw-light"><span className="fw-dark">Capital: </span>{props.capital}</p>
                </div>              
            </div> 
        </Link>
                
)
}

