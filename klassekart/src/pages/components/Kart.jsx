import HøyreSide from './HøyreSide'
import VenstreSide from './VenstreSide'

export default function Kart() {


    return (
        <div className='kart'>
            <VenstreSide />
            <HøyreSide />
        </div>
    )
}