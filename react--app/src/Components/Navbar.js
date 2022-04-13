import React from "react" 

import "./Styles/Navbar.css"
import "../darkmode.js"

export default function Navbar() {
    return (
        <nav className="text-color flex elements-color navbar">
            <h3 className="fs-large text-no-wrap">Where in the world?</h3>
            <div className="dark-mode-toggle flex space-small center">
                <ion-icon name="moon-outline"></ion-icon>
                <p className="text-no-wrap">Dark Mode</p>
            </div>
        </nav>
    )
}

