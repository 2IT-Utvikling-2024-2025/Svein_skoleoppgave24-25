import HøyreSide from './HøyreSide'
import ModularRow from './ModularRow'
import VenstreSide from './VenstreSide'

export default function Kart({data}) {

    return (
        <div className='kart'>
            <VenstreSide data={data} />
            <HøyreSide data={data} />
        </div>
    )
}