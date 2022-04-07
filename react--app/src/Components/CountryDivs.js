import React from "react";

export default function CountryDivs(props) {
    return (
    <div className="grid-container">  
        <div className="grid-item">
            <img src="{props.flags.png}" alt="flag"></img>
            <p>{props.name}</p>
            <div className="extra-info">
                <p><b>Population:</b> {props.population}</p>
                <p><b>Region:</b> {props.region}</p>
                <p><b>Capital:</b> {props.capital}</p>
            </div>              
        </div>  
    </div>              
)
}

