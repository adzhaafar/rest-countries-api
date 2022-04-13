import React from "react";
import {Link} from "react-router-dom"
import "./Styles/InfoMain.css";

export default function BorderButtons(props) {

    return (
        <a style={{ textDecoration: 'none', color: 'inherit' }} href={`/${props.name}`}>
            <button className="border-button no-border padding-inline cursor-pointer border-radius box-shadow space-around-content elements-color input-color fs-small fw-medium letter-spacing">{props.name}</button>
        </a>

    )

}