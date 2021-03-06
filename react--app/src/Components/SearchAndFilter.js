import React from "react";

import "./Styles/SearchAndFilter.css";

export default function SearchAndFilter(props) {

    //handleChange is setting whatever the user typed in as inputData (updating its state with every keystroke)

    // props.changeData is state passed through props
    function handleChange(event) {
        props.changeData(event.target.value);

    }

    function filterRegion(event) {
        props.changeRegion(event.target.textContent)
    }

    return (
        <div className="flex search-filter-container">    
            <div className="box-shadow input elements-color border-radius no-border fw-light input-color cursor-pointer padding-around">
                <ion-icon name="search-outline"></ion-icon>
                <input onClick={props.handleClick2} onChange={handleChange} className="text-color element-color no-border" placeholder="Search for a country..." type="text"></input>
            </div>
            <div className="dropdown">
                <button className="drop-button add-size padding-around elements-color text-color no-border box-shadow border-radius cursor-pointer"><ion-icon className="" name="chevron-down-outline"></ion-icon> Filter by Region</button>
                <div onClick={props.handleClick} className="padding-around drop-items box-shadow elements-color text-color no-border border-radius cursor-pointer">
                    <p onClick={filterRegion}>Africa</p>
                    <p onClick={filterRegion}>Americas</p>
                    <p onClick={filterRegion}>Asia</p>
                    <p onClick={filterRegion}>Europe</p>
                    <p onClick={filterRegion}>Oceania</p>
                </div>
            </div>
        </div>   
    )
}