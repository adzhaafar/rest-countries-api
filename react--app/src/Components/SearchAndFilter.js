import React from "react";

import "./Styles/SearchAndFilter.css"

export default function SearchAndFilter() {
    return (
        <div className="flex search-filter-container">    
            <div className="input white-background border-radius box-shadow no-border fw-light text-input-light cursor-pointer padding-around">
                <ion-icon className="" name="search-outline"></ion-icon>
                <input className="no-border" placeholder="Search for a country..." type="text"></input>
            </div>
            <div className="dropdown">
                <button className="padding-around white-background text-light no-border box-shadow border-radius cursor-pointer"><ion-icon className="" name="chevron-down-outline"></ion-icon> Filter by Region</button>
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