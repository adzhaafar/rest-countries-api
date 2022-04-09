import React from "react";

import "./Styles/InfoMain.css";
// const axios = require('axios');
import axios from "axios"

export default function InfoMain(props) {
    // console.log(props.name)
    const [data, setData] = React.useState({})
    // const [borderCountries, setBorderCountries] = React.useState({})
    
    React.useEffect(() => {
        const api = axios.create({
            baseURL: `https://restcountries.com/v3.1/name/${props.name}`
        })
        api.get('/').then(res => {
            console.log(res.data[Object.keys(res.data)[0]])
            
        })
    }, [])
    // console.log(data)


    return (
        <div className="main-container center flex">
            <img className=" border-radius flag-big" src="data.flags.png" alt="flag"></img>
            <div>
                <h3 className="country-name fw-dark letter-spacing">{data.name.common}</h3>
                <div className="info-rows flex">
                    <div>
                        <p className="fs-small fw-light"><span className="fs-medium fw-dark">Native Name:</span> {data.name.nativeName.sqi.common}</p>
                        <p className="fs-small fw-light"><span className="fs-medium fw-dark">Population:</span> {data.population}</p>
                        <p className="fs-small fw-light"><span className="fs-medium fw-dark">Region:</span>{ data.region}</p>
                        <p className="fs-small fw-light"><span className="fs-medium fw-dark">Sub Region:</span> { data.subregions}</p>
                        <p className="fs-small fw-light"><span className="fs-medium fw-dark">Capital:</span> {data.capital}</p>
                    </div>

                    <div>
                        <p className="fs-small fw-light"><span className="fs-medium fw-dark">Top Level Domain:</span> { data.tld}</p>
                        <p className="fs-small fw-light"><span className="fs-medium fw-dark">Currencies:</span> { data.currencies.name}</p>
                        <p className="fs-small fw-light"><span className="fs-medium fw-dark">Languages:</span>{ data.languages.sqi}</p>
                    </div>
                </div>

                <div className="border-container flex">
                    <p className="shift-down fs-medium fw-dark"><b>Border Countries:</b></p>                
                    <button className="border-button no-border padding-inline cursor-pointer border-radius box-shadow space-around-content white-background text-input-light fs-small fw-medium letter-spacing">France</button>
                    <button className="border-button no-border padding-inline cursor-pointer border-radius box-shadow space-around-content white-background text-input-light fs-small fw-medium letter-spacing">Germany</button>
                    <button  className="border-button no-border padding-inline cursor-pointer border-radius box-shadow space-around-content white-background text-input-light fs-small fw-medium letter-spacing">Netherlands</button>
                </div> 

            </div>
        </div>
    )
}

