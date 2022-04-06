import React from "react" 

import "./Styles/Navbar.css"

export default function Navbar() {
    return (
        <nav className="flex navbar">
            <h3>Where in the world?</h3>
            <div className="">
                <ion-icon className=""></ion-icon>
                <p className="text-light">Dark Mode</p>
            </div>
        </nav>
    )
}