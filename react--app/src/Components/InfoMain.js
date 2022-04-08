import React from "react";

export default function InfoMain(match) {
    return (
        <div className="grid">
            <img className="" src="" alt="flag"></img>
            <div>
                <h3 className="fs-large fw-dark letter-spacing">Belgium</h3>
                <div className="flex">
                    <div>
                        <p className="fs-small fw-light"><span className="fs-medium fw-dark">Native Name:</span> Belgies</p>
                        <p className="fs-small fw-light"><span className="fs-medium fw-dark">Population:</span> 11,319,511</p>
                        <p className="fs-small fw-light"><span className="fs-medium fw-dark">Region:</span> Europe</p>
                        <p className="fs-small fw-light"><span className="fs-medium fw-dark">Sub Region:</span> Western Europe</p>
                        <p className="fs-small fw-light"><span className="fs-medium fw-dark">Capital:</span> Brussels</p>
                    </div>

                    <div>
                        <p className="fs-small fw-light"><span className="fs-medium fw-dark">Top Level Domain:</span> .be</p>
                        <p className="fs-small fw-light"><span className="fs-medium fw-dark">Currencies:</span> Euro</p>
                        <p className="fs-small fw-light"><span className="fs-medium fw-dark">Languages:</span> Dutch, French, Germany</p>
                    </div>
                </div>

                <div className="flex">
                    <p className="fs-medium fw-dark"><b>Border Countries:</b></p>                
                    <button className="no-border padding-around cursor-pointer border-radius box-shadow space-around-content white-background text-input-light fs-small fw-medium letter-spacing">France</button>
                    <button className="no-border padding-around cursor-pointer border-radius box-shadow space-around-content white-background text-input-light fs-small fw-medium letter-spacing">Germany</button>
                    <button  className="no-border padding-around cursor-pointer border-radius box-shadow space-around-content white-background text-input-light fs-small fw-medium letter-spacing">Netherlands</button>
                </div> 

            </div>
        </div>
    )
}

