import HøyreSide from './HøyreSide'
import ModularRow from './ModularRow'
import VenstreSide from './VenstreSide'
import data from '../../data.json'

export default function Kart() {


    return (
        <div className='kart'>
            <ModularRow data={data} columnBlocks={[{id: 0, val: 1},{id: 1, val: 1},{id: 2, val: 1},{id: 3, val: 1}]} />
        </div>
    )
}