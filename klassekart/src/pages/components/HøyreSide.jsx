import data from '../../data.json'
import { useEffect, useState } from 'react'

export default function Høyreside() {

    const [items, setItems] = useState([]);

    useEffect(() => {
            const antallRader = Math.ceil(data.length / 5);

    const plasser = []

    for (let i = 0; i < antallRader; i++) {
        plasser.push(i * 5 + 2);
        plasser.push(i * 5 + 3);
        plasser.push(i * 5 + 4);
    }

    let pulter = []

    for (let i = 0; i < antallRader; i++) {
        for (let j = 0; j < 3; j++) {
            const index = plasser[i * 3 + j]; 
            if (index < data.length) { 
                pulter.push(
                    <button
                        key={data[index].id}
                        onClick={() => window.location.href = `/profile/${data[index].id}`}>
                        {data[index].navn}
                    </button>
                );
            }
        }
    }

    setItems(pulter)
    }, [])


    return (
        <div className='gridRightContainer'>
            {items}
        </div>
    )
}