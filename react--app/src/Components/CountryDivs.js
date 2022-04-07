import React from "react";

import "./Styles/CountryDivs.css"

export default function CountryDivs(props) {

    return (
        <div className="white-background border-radius box-shadow grid-item">
            <img className="flag" src={props.flag} alt="flag"></img>
                <p className="country-name line-space-big fs-large fw-dark letter-spacing">{props.name}</p>
            <div className="country-info">
                    <p className="line-space fs-medium fw-light"><span className="fw-dark">Population: </span>{props.population}</p>
                    <p className="line-space fs-medium fw-light"><span className="fw-dark">Region: </span>{props.region}</p>
                    <p className="line-space fs-medium fw-light"><span className="fw-dark">Capital: </span>{props.capital}</p>
            </div>              
        </div> 
                
)
}

