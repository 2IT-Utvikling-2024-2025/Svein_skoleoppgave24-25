import HøyreSide from './HøyreSide'
import ModularRow from './ModularRow'
import VenstreSide from './VenstreSide'
import data from '../../data.json'

export default function Kart() {


    return (
        <div className='kart'>
            <VenstreSide />
            <HøyreSide />
        </div>
    )
}