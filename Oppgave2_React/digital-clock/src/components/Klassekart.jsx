import KlasseBoks from './Klasseboks.jsx'
import data from './data/data.json'
import './css/KlasseKart.css'

export default function KlasseKart(){

    return(
        <div className='KlasseKart'>
    {data.elever.map((elev, index) => 
        <KlasseBoks elev={elev} webID={index} key={elev.id} />
    )}
    </div>
)
}