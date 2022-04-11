import React from "react";

import "./Styles/InfoMain.css";


export default function InfoMain(props) {
    const [dataCountry, setDataCountry] = React.useState({})
    // const [borderCountries, setBorderCountries] = React.useState({})
    
    // console.log('page rendered')

    // if (Object.keys(dataCountry).length === 0) {
    //     console.log("no data")
    // } else {
    //     console.log(dataCountry)
    // }

    // get data from api
    React.useEffect(() => {
        console.log('get data')
        fetch(`https://restcountries.com/v2/name/${props.name}`)
            .then(res => res.json())
            .then(data => setDataCountry(data[0]))
    }, [])

    return (
       

            
            
        

        <div className="main-container center flex">
            <p>{JSON.stringify(dataCountry)}</p>
            {/* <img className=" border-radius flag-big" src={dataCountry.flags.png} alt="flag"></img> */}
            <div>
                <h3 className="country-name fw-dark letter-spacing">{props.name}</h3>
                <div className="info-rows flex">
                    <div>
                        <p className="fs-small fw-light"><span className="fs-medium fw-dark">Native Name:</span> {props.name}</p>
                        {/* here figure out how to get the lowecase 3 letter code  dataCountry.name.nativeName.sqi.common  iso639_2*/}
                        <p className="fs-small fw-light"><span className="fs-medium fw-dark">Population:  </span> {dataCountry.population}</p>
                        <p className="fs-small fw-light"><span className="fs-medium fw-dark">Region:  </span>{ dataCountry.region}</p>
                        <p className="fs-small fw-light"><span className="fs-medium fw-dark">Sub Region:  </span> {dataCountry.subregion}</p>
                        {/* here check subregion or subregions */}
                        <p className="fs-small fw-light"><span className="fs-medium fw-dark">Capital:  </span> {dataCountry.capital}</p>
                    </div>

                    <div>
                        <p className="fs-small fw-light"><span className="fs-medium fw-dark">Top Level Domain:  </span> {dataCountry.tld}</p>
                        {/* here it uses the code */}
                        <p className="fs-small fw-light"><span className="fs-medium fw-dark">Currencies:</span> { dataCountry.currencies.name}</p>
                        {/* <p className="fs-small fw-light"><span className="fs-medium fw-dark">Languages:</span>{ Object.entries(dataCountry.languages)}</p> */}
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



