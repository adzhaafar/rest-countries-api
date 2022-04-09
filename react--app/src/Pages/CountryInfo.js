import React from "react"
import InfoMain from "../Components/InfoMain"
import {useParams} from "react-router-dom"


export default function CountryInfo() {
    const { countryName } = useParams();
    console.log(countryName)
    return (
        <div>
            <InfoMain
                name={countryName}
            />
        </div>
    )
}

