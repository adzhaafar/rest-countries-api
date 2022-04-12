import React from "react";

import "./Styles/InfoMain.css";


export default function InfoMain(props) {
    const [dataCountry, setDataCountry] = React.useState({})

    // get data from api
    React.useEffect(() => {
        fetch(`https://restcountries.com/v2/name/${props.name}`)
            .then(res => res.json())
            .then(data => setDataCountry(data[0]))
    }, [])

    return (
        <div className="main-container center flex">
            {/* <p>{JSON.stringify(dataCountry)}</p> */}
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
                    <p className="shift-down fs-medium fw-dark"><b>Border Countries:</b></p>                
                    <button className="border-button no-border padding-inline cursor-pointer border-radius box-shadow space-around-content white-background text-input-light fs-small fw-medium letter-spacing">France</button>
                    <button className="border-button no-border padding-inline cursor-pointer border-radius box-shadow space-around-content white-background text-input-light fs-small fw-medium letter-spacing">Germany</button>
                    <button  className="border-button no-border padding-inline cursor-pointer border-radius box-shadow space-around-content white-background text-input-light fs-small fw-medium letter-spacing">Netherlands</button>
                </div> 

            </div>
        </div>
    )
}


// const user = {
//     id: 101,
//     email: 'jack@dev.com',
//     personalInfo: {
//         name: 'Jack',
//         address: {
//             line1: 'westwish st',
//             line2: 'washmasher',
//             city: 'wallas',
//             state: 'WX'
//         }
//     }
// }
// user && user.personalInfo ? user.personalInfo.name : null;



// dataCountry && dataCountry.flags ? dataCountry.flags.png : null;

// const data = {
//     "name": "Åland Islands",
//     "topLevelDomain": [
//       ".ax"
//     ],
//     "alpha2Code": "AX",
//     "alpha3Code": "ALA",
//     "callingCodes": [
//       "358"
//     ],
//     "capital": "Mariehamn",
//     "altSpellings": [
//       "AX",
//       "Aaland",
//       "Aland",
//       "Ahvenanmaa"
//     ],
//     "subregion": "Northern Europe",
//     "region": "Europe",
//     "population": 28875,
//     "latlng": [
//       60.116667,
//       19.9
//     ],
//     "demonym": "Ålandish",
//     "area": 1580,
//     "timezones": [
//       "UTC+02:00"
//     ],
//     "nativeName": "Åland",
//     "numericCode": "248",
//     "flags": {
//       "svg": "https://flagcdn.com/ax.svg",
//       "png": "https://flagcdn.com/w320/ax.png"
//     },
//     "currencies": [
//       {
//         "code": "EUR",
//         "name": "Euro",
//         "symbol": "€"
//       }
//     ],
//     "languages": [
//       {
//         "iso639_1": "sv",
//         "iso639_2": "swe",
//         "name": "Swedish",
//         "nativeName": "svenska"
//       }
//     ],
//     "translations": {
//       "br": "Ilhas de Aland",
//       "pt": "Ilhas de Aland",
//       "nl": "Ålandeilanden",
//       "hr": "Ålandski otoci",
//       "fa": "جزایر الند",
//       "de": "Åland",
//       "es": "Alandia",
//       "fr": "Åland",
//       "ja": "オーランド諸島",
//       "it": "Isole Aland",
//       "hu": "Åland-szigetek"
//     },
//     "flag": "https://flagcdn.com/ax.svg",
//     "regionalBlocs": [
//       {
//         "acronym": "EU",
//         "name": "European Union"
//       }
//     ],
//     "independent": false
//   }


{/* here figure out how to get the lowecase 3 letter code  dataCountry.name.nativeName.sqi.common  iso639_2*/}