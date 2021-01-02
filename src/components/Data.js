import React from 'react'
import './Home.css'

export default function Data(data , getData , setPlace) {
    return (
        <>
                <div className="container">
                <div className="data">
                    <div className="statuspic">
                        <img src={data.current.condition.icon} alt=""/>
                    </div>
                    <div className="info beautify">
                        <div className="loc">
                            <h2>City</h2>
                            <h3 id='location'>{data.location.name}</h3>
                        </div>
                        <div className="stat">
                            <h2>Status</h2>
                            <h3 id='status'>{data.current.condition.text}</h3>
                        </div>
                    </div>
                    <div className="details beautify">
                        <div className="temp">
                            <h2>Temp(C)</h2>
                            <h3 id='temperature'>{data.current.temp_c}</h3>
                        </div>
                        <div className="hum">
                            <h2>Humidity</h2>
                            <h3 id='humidity'>{data.current.humidity}</h3>
                        </div>
                    </div>
                    <div className="inputs">
                        <input type="text" placeholder="Enter Place or ( Lat,Long )" id='place' onChange={setPlace}/>
                        <button id='submit' onClick={getData}>Search</button>
                    </div>
                </div>
                </div>
        </>
    )
}
