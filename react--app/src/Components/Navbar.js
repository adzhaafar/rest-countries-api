import React from "react" 

import "./Styles/Navbar.css"
import "../darkmode.js"

export default function Navbar() {
    return (
        <nav className="flex white-background navbar">
            <h3 className="fs-large text-no-wrap">Where in the world?</h3>
            <div className="dark-mode-toggle flex space-small center">
                <ion-icon name="moon-outline"></ion-icon>
                <p className="text-no-wrap">Dark Mode</p>
            </div>
        </nav>
    )
}

