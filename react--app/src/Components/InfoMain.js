import React from "react";
import BorderButtons from "./BorderButtons";

import "./Styles/InfoMain.css";

import {useNavigate} from "react-router-dom";



export default function InfoMain(props) {
    const [dataCountry, setDataCountry] = React.useState({})
    const [borderCountries, setBorderCountries] = React.useState([])
    const navigate = useNavigate();

    // get data from api
    React.useEffect(() => {
        fetch(`https://restcountries.com/v2/name/${props.name}`)
            .then(res => res.json())
            .then(data => setDataCountry(data[0]))
    }, [])

    // get other data
    React.useEffect(() => {
        if (dataCountry.borders !== undefined) {
            dataCountry.borders.map(border => {
                fetch(`https://restcountries.com/v2/alpha/${border}`)
                    .then(res => res.json())
                    .then(data => setBorderCountries(prevBorderCountries => {
                        return [...prevBorderCountries, data.name] 
                    }))
            })
        } 
        
    }, [dataCountry])
    

    const borders = (borderCountries).map(border => {
        return <BorderButtons key={border} name={border} />
    })

    // only show 3 borders
    if (borders.length > 4) {
        borders.splice(3, borders.length - 3)
    }

    // set up an algorithm to click through 3 borders at a time

    
    return (
        <>
            <button className="home-button no-border padding-inline cursor-pointer border-radius box-shadow space-around-content elements-color input-color fs-small fw-medium letter-spacing" onClick={() => navigate('/')}>Home</button>
            <div className="text-color main-container center flex">
                <img className="box-shadow border-radius flag-big" src={dataCountry && dataCountry.flags ? dataCountry.flags.png : null} alt="flag"></img>
                <div>
                    <h3 className="country-name fw-dark letter-spacing">{props.name}</h3>
                    <div className="info-rows flex">
                        <div>
                            <p className="fs-small fw-light"><span className="fs-medium fw-dark">Native Name:</span> {props.name}</p>
                            <p className="fs-small fw-light"><span className="fs-medium fw-dark">Population:  </span> {dataCountry.population}</p>
                            <p className="fs-small fw-light"><span className="fs-medium fw-dark">Region:  </span>{ dataCountry.region}</p>
                            <p className="fs-small fw-light"><span className="fs-medium fw-dark">Sub Region:  </span> {dataCountry.subregion}</p>
                            {/* here check subregion or subregions */}
                            <p className="fs-small fw-light"><span className="fs-medium fw-dark">Capital:  </span> {dataCountry.capital}</p>
                        </div>

                        <div>
                            <p className="fs-small fw-light"><span className="fs-medium fw-dark">Top Level Domain:  </span> {dataCountry.topLevelDomain}</p>
                            <p className="fs-small fw-light"><span className="fs-medium fw-dark">Currencies:  </span> { dataCountry && dataCountry.currencies ? dataCountry.currencies[0].name : null}</p>
                            <p className="fs-small fw-light"><span className="fs-medium fw-dark">Languages:  </span>{ dataCountry && dataCountry.languages ? dataCountry.languages[0].name : null}</p>
                        </div>
                    </div>

                    <div className="border-container flex">
                        {borders}
                    </div> 

                </div>
            </div>
        </>    
    )
}

