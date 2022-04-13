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
    


    return (
        <>
            <button onClick={() => navigate('/')}>Home</button>
            <div className="main-container center flex">
                <img className=" border-radius flag-big" src={dataCountry && dataCountry.flags ? dataCountry.flags.png : null} alt="flag"></img>
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
                            <p className="fs-small fw-light"><span className="fs-medium fw-dark">Currencies:  </span> { dataCountry &&dataCountry.currencies ? dataCountry.currencies[0].name : null}</p>
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

