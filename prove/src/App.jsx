import './App.css'
import locations from './countryData.json'
import { useState, useEffect } from "react";
import CountryWeather from './CountryWeather';
import FinancalData from './FinancalData';

function App() {

  const [Countries, setCountries] = useState({ Norway: { Forcast: "sol", Temp: 1 }, Sweden: { Forcast: "regn", Temp: -5 }, Denmark: { Forcast: "overskyet", Temp: 20 }, Finland: { Forcast: "Torden", Temp: -10 } });

  useEffect(() => {
    const ModifyableData = Countries;
    setTimeout(async () => {

      async function getWeather(lat, lon){
        const Data = fetch(`https://api.met.no/weatherapi/locationforecast/2.0/complete?lat=${lat}&lon=${lon}`, {
          method: 'GET',
          headers: {
            "Accept": "application/json;charset=UTF-8",
            "referer": "https://api.met.no/weatherapi/locationforecast/2.0/documentation",
            "sec-ch-ua": 'Google Chrome";v="129", "Not=A?Brand";v="8", "Chromium";v="129',
            'User-Agent': "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36"
          }
        }).then(function(response) {
          return response.json();
        })

        return Data
      }

      const NorData = await getWeather(locations.Norway.lat, locations.Norway.lon)
        ModifyableData.Norway.Forcast = NorData.properties.timeseries[0].data.next_1_hours.summary.symbol_code;
        ModifyableData.Norway.Temp = NorData.properties.timeseries[0].data.instant.details.air_temperature;
      
      const SweData = await getWeather(locations.Sweden.lat, locations.Sweden.lon)
        ModifyableData.Sweden.Forcast = SweData.properties.timeseries[0].data.next_1_hours.summary.symbol_code;
        ModifyableData.Sweden.Temp = SweData.properties.timeseries[0].data.instant.details.air_temperature;

      const DenData = await getWeather(locations.Denmark.lat, locations.Denmark.lon)
        ModifyableData.Denmark.Forcast = DenData.properties.timeseries[0].data.next_1_hours.summary.symbol_code;
        ModifyableData.Denmark.Temp = DenData.properties.timeseries[0].data.instant.details.air_temperature;
      
      const FinData = await getWeather(locations.Finland.lat, locations.Finland.lon)
        ModifyableData.Finland.Forcast = FinData.properties.timeseries[0].data.next_1_hours.summary.symbol_code;
        ModifyableData.Finland.Temp = FinData.properties.timeseries[0].data.instant.details.air_temperature;
  
      setCountries(ModifyableData)
    }, 1500)
    

  },[]);

  return (
    <div>
      <h1>Scandinavian info</h1>
    <div className='Flex-container'>
      <div>
        <CountryWeather CountryName={"Norway"} CountryData={Countries.Norway} />
        <FinancalData Country={"Norway"} />
      </div>
      <div>
        <CountryWeather CountryName={"Sweden"} CountryData={Countries.Sweden} />
        <FinancalData Country={"Sweden"} />
      </div>
      <div>
        <CountryWeather CountryName={"Denmark"} CountryData={Countries.Denmark} />
        <FinancalData Country={"Denmark"} />
      </div>
      <div>
        <CountryWeather CountryName={"Finland"} CountryData={Countries.Finland} />
        <FinancalData Country={"Finland"} />
      </div>
    </div>
    </div>
  )
}

export default App
