import { useEffect, useState } from "react"

import Pic from './assets/symbols/darkmode/svg/46.svg'
import TimeZones from "./TimeZones"


export default function CountryWeather({CountryName, CountryData}){

    return(
        <div>
            <h2>{CountryName}</h2>
            <TimeZones/>
            <div>
                <img src={Pic} alt={CountryData.Forcast} />
                <h4>{CountryData.Forcast}</h4>
                <h4>Temp {CountryData.Temp}°C</h4>
            </div>
        </div>
    )
}