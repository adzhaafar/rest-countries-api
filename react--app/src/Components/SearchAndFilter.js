import React from "react";

import "./Styles/SearchAndFilter.css"

export default function SearchAndFilter() {
    return (
        <div className="flex search-filter-container">    
            <div>
                <input className="padding-around input box-shadow no-border white-background border-radius fw-light text-input-light cursor-pointer" placeholder="Search for a country..." type="text"><ion-icon name="search-outline"></ion-icon></input>
            </div>
            <div className="dropdown">
                <button className="padding-around filter-button white-background text-light no-border box-shadow border-radius cursor-pointer"><ion-icon name="chevron-down-outline"></ion-icon> Filter by Region</button>
                <div className="hidden padding-around drop-items box-shadow white-background text-light no-border border-radius cursor-pointer">
                    <p>Africa</p>
                    <p>America</p>
                    <p>Asia</p>
                    <p>Europe</p>
                    <p>Oceania</p>
                </div>
            </div>
        </div>   
    )
}