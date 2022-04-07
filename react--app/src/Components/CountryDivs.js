import React from "react";

import "./Styles/CountryDivs.css"

export default function CountryDivs(props) {
    return (
    <div className="grid-container">  
        <div className="white-background border-radius box-shadow grid-item">
            <img className="flag" src="{props.flags.png}" alt="flag"></img>
            <p className="country-name line-space-big fs-large fw-dark letter-spacing">Country Name</p>
            <div className="country-info">
                <p className="line-space fs-medium fw-light"><span className="fw-dark">Population:</span> 1 million</p>
                <p className="line-space fs-medium fw-light"><span className="fw-dark">Region:</span> Region</p>
                <p className="line-space fs-medium fw-light"><span className="fw-dark">Capital:</span> Capital</p>
            </div>              
        </div>  
    </div>              
)
}

