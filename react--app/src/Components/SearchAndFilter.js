import React from "react";

import "./Styles/SearchAndFilter.css";

export default function SearchAndFilter(props) {

    //handleChange is setting whatever the user typed in as inputData (updating its state with every keystroke)

    // props.changeData is state passed through props
    function handleChange(event) {
        props.changeData(event.target.value);

    }

    function filterRegion(event) {
        // props.changeRegion(event.target.__reactProps$huwmenlbyzm.children)
        props.changeRegion(event.target.textContent)
    }

    return (
        <div className="flex search-filter-container">    
            <div className="input white-background border-radius box-shadow no-border fw-light text-input-light cursor-pointer padding-around">
                <ion-icon name="search-outline"></ion-icon>
                <input onClick={props.handleClick} onChange={handleChange} className="no-border" placeholder="Search for a country..." type="text"></input>
            </div>
            <div className="dropdown">
                <button className="padding-around white-background text-light no-border box-shadow border-radius cursor-pointer"><ion-icon className="" name="chevron-down-outline"></ion-icon> Filter by Region</button>
                <div onClick={props.handleClick} className="padding-around drop-items box-shadow white-background text-light no-border border-radius cursor-pointer">
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