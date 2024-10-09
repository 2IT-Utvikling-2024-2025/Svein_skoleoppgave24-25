import { useEffect, useState } from "react";

export default function FinancalData({Country}){

    const [Trend, setTrend] = useState(0);

    useEffect(() => {
        switch(Country){
            case "Norway":
                {
                    setTrend((0.0931 - 0.0934).toFixed(5))
                }
            case "Sweden":
                {
                    setTrend((0.0964 - 0.0967).toFixed(5))
                }
            case "Denmark":
                {
                    setTrend((0.1469 - 0.1472).toFixed(5))
                }
            case "Finland":
                {
                    setTrend((0.1843 - 0.1846).toFixed(5))
                }    
        }
    })

    return (
        <div>
            <h3>Valuta kurs</h3>
            <h5>{Trend > 0 ? "+" : null}{Trend.toString()}</h5>
            </div>
        
    )
}